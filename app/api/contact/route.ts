import { NextResponse } from 'next/server';
import { z } from 'zod';

// Define the validation schema using Zod
const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(100),
  lastName: z.string().min(1, 'Last name is required').max(100),
  email: z.string().email('Invalid email address'),
  phone: z.string().max(20).optional(),
  service: z.string().min(1, 'Service selection is required'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
  // Honeypot field - must be empty
  website: z.string().max(0, 'Bot detected').optional().or(z.literal('')),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the input
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { firstName, lastName, email, phone, service, message, website } = result.data;

    // Honeypot check
    if (website && website.length > 0) {
      // Act like it succeeded to fool bots
      return NextResponse.json({ success: true, message: 'Message sent successfully (bot trap)' }, { status: 200 });
    }

    // Preflight: ensure Microsoft Graph credentials are configured
    const tenantId = process.env.AZURE_TENANT_ID;
    const clientId = process.env.AZURE_CLIENT_ID;
    const clientSecret = process.env.AZURE_CLIENT_SECRET;
    const sendAsUser = process.env.SMTP_USER || 'info@hmxaccountants.co.uk';
    const toEmail = process.env.CONTACT_EMAIL_TO || 'info@hmxaccountants.co.uk';

    if (!tenantId || !clientId || !clientSecret) {
      console.error(
        'Contact form error: Microsoft Graph API credentials are not configured. ' +
        'Set AZURE_TENANT_ID, AZURE_CLIENT_ID, and AZURE_CLIENT_SECRET in Netlify environment variables.'
      );
      return NextResponse.json(
        { error: 'Email service is not yet configured. Please contact us directly at info@hmxaccountants.co.uk' },
        { status: 503 }
      );
    }

    // 1. Get Access Token from Microsoft Identity Platform via Client Credentials flow
    const tokenUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;
    const tokenParams = new URLSearchParams();
    tokenParams.append('client_id', clientId);
    tokenParams.append('scope', 'https://graph.microsoft.com/.default');
    tokenParams.append('client_secret', clientSecret);
    tokenParams.append('grant_type', 'client_credentials');

    const tokenResponse = await fetch(tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: tokenParams.toString(),
    });

    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text();
      console.error('Failed to obtain Microsoft Graph access token:', errorText);
      return NextResponse.json(
        { error: 'Failed to authenticate with email service.', detail: errorText },
        { status: 500 }
      );
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // 2. Format Email Content
    const emailSubject = `New Contact Form Submission: ${service}`;
    const emailHtmlBody = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Service Requested:</strong> ${service}</p>
      <br/>
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, '<br/>')}</p>
    `;

    // 3. Send Email via Microsoft Graph API
    const sendMailUrl = `https://graph.microsoft.com/v1.0/users/${sendAsUser}/sendMail`;
    
    const sendMailBody = {
      message: {
        subject: emailSubject,
        body: {
          contentType: 'HTML',
          content: emailHtmlBody,
        },
        toRecipients: [
          {
            emailAddress: {
              address: toEmail,
            },
          },
        ],
        replyTo: [
          {
            emailAddress: {
              address: email,
            },
          },
        ],
      },
      saveToSentItems: false,
    };

    const sendMailResponse = await fetch(sendMailUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sendMailBody),
    });

    if (!sendMailResponse.ok) {
      const errorText = await sendMailResponse.text();
      console.error('Failed to send email via Microsoft Graph API:', errorText);
      return NextResponse.json(
        { error: 'Failed to send email via Microsoft Graph API.', detail: errorText },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    const err = error as Error;
    console.error('Contact form unexpected error:', err);
    return NextResponse.json(
      { error: 'Failed to send message.', detail: err.message || 'Unknown error' },
      { status: 500 }
    );
  }
}

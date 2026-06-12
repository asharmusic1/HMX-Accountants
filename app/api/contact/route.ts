import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
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

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.example.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Setup email data
    const mailOptions = {
      from: process.env.SMTP_FROM || '"HMX Website" <noreply@hmxaccounting.co.uk>',
      to: process.env.CONTACT_EMAIL_TO || 'info@hmxaccounting.co.uk',
      replyTo: email,
      subject: `New Contact Form Submission: ${service}`,
      text: `
        You have received a new message from your website contact form.
        
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Service Requested: ${service}
        
        Message:
        ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service Requested:</strong> ${service}</p>
        <br/>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}

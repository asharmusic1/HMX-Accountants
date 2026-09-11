import { NextResponse } from 'next/server';
import { z } from 'zod';

// Validation schema
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
      return NextResponse.json({ success: true, message: 'Message sent successfully (bot trap)' }, { status: 200 });
    }

    // Build mailto URL so the user's mail client opens pre-filled
    const subject = encodeURIComponent(`New Enquiry via Website: ${service}`);
    const bodyLines = [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Phone: ${phone || 'Not provided'}`,
      `Service Requested: ${service}`,
      ``,
      `Message:`,
      message,
    ];
    const mailtoBody = encodeURIComponent(bodyLines.join('\n'));
    const mailtoUrl = `mailto:info@hmxaccountants.co.uk?subject=${subject}&body=${mailtoBody}`;

    // Return the mailto URL to the client — the ContactContent component will open it
    return NextResponse.json(
      { success: true, mailtoUrl, message: 'Ready to open mail client.' },
      { status: 200 }
    );
  } catch (error) {
    const err = error as Error;
    console.error('Contact form unexpected error:', err);
    return NextResponse.json(
      { error: 'Failed to process form.', detail: err.message || 'Unknown error' },
      { status: 500 }
    );
  }
}

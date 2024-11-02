import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY as string);

export async function POST(req: Request) {
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['alexanderh24@gmail.com'],
      subject: 'hello world',
      html: '<p>it works!</p>',
    });
    const { name, email, message, phone } = data;
    
    // Here you would typically integrate with your email service
    // For now, we'll just return a success response
    // TODO: Add your email service integration (e.g., SendGrid, AWS SES, etc.)
    
    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Error sending message' },
      { status: 500 }
    );
  }
}
import { NextResponse } from 'next/response';

export async function POST(req: Request) {
  try {
    const data = await req.json();
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
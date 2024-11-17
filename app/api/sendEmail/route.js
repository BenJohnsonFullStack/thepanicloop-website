import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ message: 'Email is required' }, { status: 400 });
    }

    // Configure the Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email options
    const mailOptions = {
      from: `"The Panic Loop Podcast Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thanks for Subscribing!',
      text: 'Welcome to The Panic Loop Podcast! Be on the lookout for updates about new episodes and contests coming in 2025!',
    };

    // Attempt to send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Confirmation email sent successfully' }, { status: 200 });
  } catch (emailError) {
    console.error('Email sending error:', emailError);
    return NextResponse.json({ message: 'Failed to send confirmation email.' }, { status: 500 });
  }
}

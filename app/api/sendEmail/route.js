import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Pool } from 'pg';

// Configure the PostgreSQL client using the DATABASE_URL from your environment variables
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // This may be needed for secure connections, especially with Neon
  },
});

export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ message: 'Email is required' }, { status: 400 });
    }

    await pool.query(
      'INSERT INTO subscribers (email, subscribed_at) VALUES ($1, NOW())',
      [email]
    );

    // Configure the Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com', // Microsoft 365 SMTP server
      port: 587, // SMTP port
      secure: false, // Set to true if port 465 is used
      auth: {
        user: process.env.EMAIL_USER, // Your Microsoft 365 email address
        pass: process.env.EMAIL_PASSWORD, // Your Microsoft 365 email password
      },
    });

    // Email options
    const mailOptions = {
      from: `"The Panic Loop Podcast Team" <${process.env.EMAIL_USER}>`, // Sender name and  address
      to: email, // Recipient address
      subject: 'Thanks for Subscribing!',
      text: 'Welcome to The Panic Loop Podcast! Be on the lookout for updates about new episodes and contests coming in 2025!',
    };

    // Send email
    const result = await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Subscription successful', result }, { status: 201 });
  } catch (error) {
    console.error('Email Client Error:', error);
    return NextResponse.json({ message: 'Subscription failed. Please try again.', error }, { status: 500 });
  }
}

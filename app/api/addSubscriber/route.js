import { NextResponse } from 'next/server';
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

    try {
      // Attempt to insert the email into the database
      await pool.query(
        'INSERT INTO subscribers (email, subscribed_at) VALUES ($1, NOW())',
        [email]
      );
      return NextResponse.json({ message: 'Subscription successful' }, { status: 201 });
    } catch (dbError) {
      // Check if the error is a unique constraint violation (duplicate email)
      if (dbError.code === '23505') {
        console.warn('Duplicate email:', email);
        return NextResponse.json({ message: 'You are already subscribed' }, { status: 409 });
      }
      // Log unexpected database errors
      console.error('Database Error:', dbError);
      throw dbError;
    }
  } catch (error) {
    console.error('Overall Error:', error);
    return NextResponse.json({ message: 'Subscription failed. Please try again', error }, { status: 500 });
  }
}

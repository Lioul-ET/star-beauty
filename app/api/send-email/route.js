// app/api/send-email/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER, // your Gmail address
    pass: process.env.GMAIL_APP_PASSWORD, // Gmail app-specific password
  },
});

export async function POST(req) {
  try {
    const { bookingData, subject } = await req.json();

    // Create HTML content based on template
    const htmlContent =
      subject === "Contact Form Submission"
        ? `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h1 style="color: #333;">Contact Info!</h1>
          <p><strong>First Name:</strong> ${bookingData.firstName}</p>
          <p><strong>Email:</strong> ${bookingData.email}</p>
        </div>
      `
        : `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h1 style="color: #333;">New Booking!</h1>
          <p><strong>Full Name:</strong> ${bookingData.fullName}</p>
          <p><strong>Email:</strong> ${bookingData.email}</p>
          <p><strong>Phone:</strong> ${bookingData.phone}</p>
          <p><strong>For Date:</strong> ${bookingData.date}</p>
          <p><strong>Appointed For:</strong> ${bookingData.appointmentType}</p>
        </div>
      `;

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: "starbeauty171@gmail.com",
      subject: subject,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

//wxcy yhwm owdy bdjx

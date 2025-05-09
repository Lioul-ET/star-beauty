// app/api/send-email/route.js
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Email template component
const EmailTemplate = ({ bookingData }) => (
  <div>
    <h1 style={{ color: "#333", fontFamily: "sans-serif" }}>New Customer!</h1>
    <p>FullName: {bookingData.fullName}</p>
    <p>Email: {bookingData.email}</p>
    <p>Phone: {bookingData.phone}</p>
    <p>For Date: {bookingData.date}</p>
    <p>Appointed For: {bookingData.appointmentType}</p>
  </div>
);

const ContactTemplate = ({ bookingData }) => (
  <div>
    <h1 style={{ color: "#333", fontFamily: "sans-serif" }}>Contact Info!</h1>
    <p>First Name: {bookingData.firstName}</p>
    <p>Email: {bookingData.email}</p>
  </div>
);

export async function POST(req) {
  try {
    const { bookingData, subject } = await req.json();

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["yimracomb@gmail.com"],
      subject: subject,
      react:
        subject === "Contact Form Submission"
          ? ContactTemplate({ bookingData })
          : EmailTemplate({ bookingData }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

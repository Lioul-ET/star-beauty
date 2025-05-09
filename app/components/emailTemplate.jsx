// components/EmailTemplate.jsx
import React from "react";

export function EmailTemplate({ bookingData }) {
  return (
    <div>
      <h1 style={{ color: "#333", fontFamily: "sans-serif" }}>New Customer!</h1>
      <p>FullName: {bookingData.fullName}</p>
      <p>Email: {bookingData.email}</p>
      <p>Phone: {bookingData.phone}</p>
      <p>For Date: {bookingData.date}</p>
      <p>Appointed For: {bookingData.appointmentType}</p>
    </div>
  );
}

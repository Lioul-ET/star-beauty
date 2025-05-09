"use client";
import React, { useState } from "react";
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  CircleArrowRight,
} from "lucide-react";
import { toast } from "sonner";

const LastSection = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const firstName = formData.get("firstName");
    const email = formData.get("email");

    console.log("Form submitted:", { firstName, email });

    const bookingData = {
      firstName: firstName,
      email: email,
    };

    try {
      const response = await fetch("../api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bookingData,
          subject: "Contact Form Submission",
        }),
      });

      const data = await response.json();
      console.log(response);
      if (response.ok) {
        console.log("Sent");
        setStatus("Email sent successfully!");
        toast("Help is on the way", {
          description: "Please wait for an email",
        });
      } else {
        toast("Something went wrong!", {
          description: "Please try again",
          variant: "destructive",
        });
        throw new Error(data.error || "Failed to send email");
      }
    } catch (error) {
      setStatus("Failed to send email");
    } finally {
      console.log("Loading");
      setLoading(false);
    }
    // Here you can add further logic such as sending data to an API
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-center">
          <span className="text-[#c22f29] text-5xl">Masters of Medicine:</span>
        </h1>
        <h1 className="text-5xl font-semibold text-center mt-4">
          <span className="text-gray-800">Meet our team of specialists</span>
        </h1>

        <p className="text-center text-gray-600 mt-9 max-w-2xl mx-auto">
          Our team of specialists is at the forefront of medical innovation.
          Each specialist brings a unique blend of expertise, empathy, and
          experience to ensure that your health is in the best hands.
        </p>

        {/* Doctor Card */}
        <div className="mt-12 bg-[#c06464] rounded-2xl  flex flex-col md:flex-row items-center gap-6 max-w-4xl mx-auto">
          <div className="md:h-48 rounded-full flex items-center justify-center md:w-[30%] w-[100%]">
            <img
              src="male-doctor.png"
              alt="maleDoctor"
              className="md:w-[100%] w-[70%] md:-mt-[1.5rem] md:-ml-2"
            />
          </div>
          <div className="flex-1 md:w-[50%] w-[90%] z-40 p-8">
            <h3 className="text-white text-2xl font-bold">
              Dr. Mark Lee (Dermatologist )
            </h3>
            <p className="text-white mt-4 text-lg">
              Dr. Lee is a visionary in dermatology, advancing treatments for
              skin health with a gentle, holistic approach. His dedication to
              clinical excellence and patient education has made him a leader in
              dermatological care.He's known for his precision and commitment to
              patient-centered care.
            </p>
            <button className="mt-6 bg-white text-[#C58F72] px-9 py-2 rounded-lg flex items-center gap-2 text-xl font-bold">
              Book appointment
              <Phone className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Help Desk Section */}
        <section id="contact" className="mt-20">
          <h2 className="text-center text-3xl font-bold">
            Reach our <span className="text-[#bd3535]">Help Desk</span> for
            support
          </h2>
          <p className="text-center text-[#757474] mt-4">
            Questions? Need assistance? Our dedicated support team is here to
            help you every step of the way.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 max-w-2xl mx-auto flex flex-col md:flex-row gap-4"
          >
            <input
              type="text"
              name="firstName"
              placeholder="Enter Your First Name"
              className="flex-1 px-4 py-4 border-[2px] rounded-lg border-[#C58F72]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email Address"
              className="flex-1 px-4 py-4 border-[2px] rounded-lg border-[#C58F72]"
              required
            />
            <button
              type="submit"
              className="bg-[#c46666] text-white px-6 py-2 rounded-lg flex items-center font-bold gap-2"
            >
              Contact us
              <span>
                <CircleArrowRight />
              </span>
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-rose-50 mt-20 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <img src="icon3.png" alt="Star Beauty" className="h-20" />
              </div>
              <p className="text-gray-600">
                Experience personalized medical care from the comfort of your
                home.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Getting Started</li>
                <li>FAQs</li>
                <li>Help Articles</li>
                <li>Report an Issue</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Booking Appointments</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex justify-between items-center border-t pt-8">
            <div className="flex gap-4">
              <Facebook className="w-5 h-5" />
              <Instagram className="w-5 h-5" />
              <Linkedin className="w-5 h-5" />
              <Youtube className="w-5 h-5" />
            </div>
            <p className="text-sm text-gray-600">
              HealthNet 2024 © All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LastSection;

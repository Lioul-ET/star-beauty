"use client";
import React, { useState } from "react";
import { Calendar, ChevronRight, Mail, Phone, Star } from "lucide-react";
import localFont from "next/font/local";

const CinzelDecorative = localFont({
  src: "../fonts/CinzelDecorative-Bold.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const HeroSection = () => {
  return (
    <section className="mt-24" id="home">
      <div className="absolute top-72">
        <img src="background-line.png" alt="Star Beauty" className="w-[100%]" />
      </div>
      <div className="container mx-auto px-6 py-12 flex flex-wrap items-center mt-4">
        <div className="w-full md:w-1/2">
          <h1
            className={`text-4xl md:text-5xl font-bold mb-6 ${CinzelDecorative.className}`}
          >
            <span className="">YOUR</span>
            <span className="text-[#C97A60] ml-5">ONE-STOP</span>
            <span className="block mt-4">DESTINATION FOR</span>
            <span className="block mt-4 text-[#C97A60]">
              BEAUTY <span className="ml-5 ">& MEDICAL</span>{" "}
            </span>
            <span className="block mt-4 text-[#C97A60]">EXCELLENCE</span>
          </h1>

          <p className="mb-8 text-gray-600">
            We provide <span className="text-[#C97A60]"> top-tier</span> dental,
            plastic surgery, hair restoration, and laser treatments - all in one
            place. Trusted by clients from Italy, Spain, and Germany.{" "}
            <span className="text-[#C97A60] font-bold"> Get-Started</span> or
            Book an Appointment today.
          </p>
          <button className="bg-[#C97A60] text-white px-8 py-3 rounded-lg hover:bg-[#B56B51] shadow-2xl shadow-[#858080] flex font-bold">
            Book an appointment
            <ChevronRight color="#fff" />
          </button>
        </div>

        <div className="w-full md:w-1/2 relative mt-12 md:mt-0">
          <div className="w-full max-w-lg mx-auto aspect-square relative">
            <div className="w-full h-full flex justify-center items-center">
              <img
                src="hero-img2.png"
                alt="hero-img"
                className="w-[100%] -mt-9 "
              />
            </div>
          </div>

          <div className="absolute top-48 right-1 bg-white p-4 rounded-lg shadow-lg">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-300">
                      <img src={`${i}.png`} className="rounded-full" />
                    </div>
                  ))}
                </div>
                <span className="text-lg font-bold">2400+</span>
              </div>
              <span className="text-orange-400 font-bold">Happy Customers</span>
            </div>
            <div className="flex text-yellow-400 mt-1 text-xl items-center">
              {"★".repeat(4.7)}
              <span className="text-[#6D6D6D] text-sm font-bold">
                ( 4 Stars)
              </span>
            </div>
          </div>

          <div className="absolute bottom-2 left-1 bg-white p-4 rounded-lg shadow-lg">
            <div className="flex gap-2">
              <div className="p-1 bg-[#EFF9FF]">
                <Star fill="#D53D17" color="#D53D17" />
              </div>
              <div className="text-[#D53D17] font-bold mt-[0.5px]">
                Easy Appointment Booking
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

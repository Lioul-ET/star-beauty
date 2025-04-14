"use client";
import React, { useState } from "react";
import { Calendar, CircleCheck, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import NavBar from "@/app/components/navBar";
import HeroSection from "@/app/components/heroSection";
import ServicesSection from "@/app/components/serviceSection";
import HowItWorks from "@/app/components/howItWorksSection";
import TestimonialCard from "@/app/components/testimonialSection";
import LastSection from "@/app/components/lastSection";
import AboutSection from "@/app/components/aboutSection";

const BeautyClinic = () => {
  const [bookingData, setBookingData] = useState({
    email: "",
    phone: "",
    date: "",
  });

  const handleInputChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking data:", bookingData);
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-white"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <NavBar />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <HeroSection />
      </motion.div>

      <motion.div
        className="md:max-w-[70%] w-[90%] mx-auto p-8 bg-gradient-to-r from-[#eed2c6] via-[#f7eae4] to-[#ffffff] rounded-3xl mt-12 border-[1px] border-orange-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-6">
          Easily book an appointment in 3 simple steps.
        </h2>
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-wrap gap-4 mt-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            variants={fadeInUp}
            className="flex flex-col flex-1 gap-4 min-w-[250px]"
          >
            <label className="flex gap-2">
              <Mail color="#FF6803" size={25} />
              <span className="text-[#888888] font-semibold text-lg">
                Email Address
              </span>
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email Address"
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#fff] text-[#FF6803] font-semibold"
                value={bookingData.email}
                onChange={handleInputChange}
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col gap-4 flex-1 min-w-[250px]"
          >
            <label className="flex gap-2">
              <Phone color="#FF6803" size={25} />
              <span className="text-[#888888] font-semibold text-lg">
                Contact Number
              </span>
            </label>
            <div className="relative">
              <input
                type="tel"
                name="phone"
                placeholder="Enter Your Contact Number"
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#fff] text-[#FF6803] font-semibold"
                value={bookingData.phone}
                onChange={handleInputChange}
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col gap-4 flex-1 min-w-[250px]"
          >
            <label className="flex gap-2">
              <Calendar color="#FF6803" size={25} />
              <span className="text-[#888888] font-semibold text-lg">
                Date of Appointment
              </span>
            </label>
            <div className="relative">
              <input
                type="date"
                name="date"
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#fff] text-[#FF6803] font-semibold"
                value={bookingData.date}
                onChange={handleInputChange}
              />
            </div>
          </motion.div>

          <motion.button
            variants={fadeInUp}
            type="submit"
            className="mt-11 flex gap-2 bg-[#C97A60] text-white h-12 items-center font-bold px-8 py-2 rounded-xl shadow-xl shadow-[#a7a3a3] hover:bg-[#B56B51]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
            <span>
              <CircleCheck />
            </span>
          </motion.button>
        </motion.form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <ServicesSection />
      </motion.div>

      {/*About Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <AboutSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-300px" }}
        transition={{ duration: 0.6 }}
      >
        <HowItWorks />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-300px" }}
        transition={{ duration: 0.6 }}
      >
        <TestimonialCard />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-300px" }}
        transition={{ duration: 0.6 }}
      >
        <LastSection />
      </motion.div>
    </motion.div>
  );
};

export default BeautyClinic;

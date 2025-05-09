"use client";
import React, { useState } from "react";
import {
  Calendar,
  CircleCheck,
  Mail,
  Phone,
  User,
  Stethoscope,
} from "lucide-react";
import { motion } from "framer-motion";
import NavBar from "@/app/components/navBar";
import HeroSection from "@/app/components/heroSection";
import ServicesSection from "@/app/components/serviceSection";
import HowItWorks from "@/app/components/howItWorksSection";
import TestimonialCard from "@/app/components/testimonialSection";
import LastSection from "@/app/components/lastSection";
import AboutSection from "@/app/components/aboutSection";
import { toast } from "sonner";

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const BeautyClinic = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const [bookingData, setBookingData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    appointmentType: "",
  });

  const appointmentTypes = [
    "Dental Treatment",
    "Plastic and aesthetic surgery",
    "Hair transplant",
    "Laser eye treatment",
    "Health surgeries",
  ];

  const handleInputChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    setLoading(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bookingData,
          subject: "New Appointment Request",
        }),
      });

      const data = await response.json();
      console.log(response);
      if (response.ok) {
        console.log("Sent");
        setStatus("Email sent successfully!");
        toast("Appointment has been created", {
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
      setLoading(false);
    }
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
      className="min-h-screen  bg-white"
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

      <div>
        <div className="flex items-center justify-center gap-2 mb-6 mt-14">
          <h1 className="text-4xl font-bold text-center">
            Prenota <span className="text-red-500">Il Tuo Appuntamento</span>{" "}
            Qui
          </h1>
        </div>

        <motion.p
          className="flex items-center justify-center text-gray-600 max-w-2xl mt-8 mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Il tuo benessere è importante — e fare il primo passo verso una salute
          migliore non è mai stato così semplice. Che tu abbia bisogno di un
          controllo di routine o di un trattamento di benessere, il nostro team
          è qui per aiutarti a sentirti al meglio.
        </motion.p>

        <motion.div
          className="md:max-w-[70%] w-[90%] mx-auto p-8 bg-gradient-to-r from-[#f3c2c2] via-[#f7eae4] to-[#ffffff] rounded-3xl mt-16 border-[1px] border-red-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-6">
            Prenota facilmente un appuntamento rispondendo a queste domande.
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
                <User color="#FF6803" size={25} />
                <span className="text-[#888888] font-semibold text-lg">
                  Nome Completo
                </span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Inserisci il tuo nome completo"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#fff] text-[#FF6803] font-semibold"
                  value={bookingData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col flex-1 gap-4 min-w-[250px]"
            >
              <label className="flex gap-2">
                <Mail color="#FF6803" size={25} />
                <span className="text-[#888888] font-semibold text-lg">
                  Indirizzo Email
                </span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Inserisci il tuo indirizzo email"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#fff] text-[#FF6803] font-semibold"
                  value={bookingData.email}
                  onChange={handleInputChange}
                  required
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
                  Numero di Telefono
                </span>
              </label>
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Inserisci il tuo numero di telefono"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#fff] text-[#FF6803] font-semibold"
                  value={bookingData.phone}
                  onChange={handleInputChange}
                  required
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
                  Data dell'Appuntamento
                </span>
              </label>
              <div className="relative">
                <input
                  type="date"
                  name="date"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#fff] text-[#FF6803] font-semibold"
                  value={bookingData.date}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col gap-4 flex-1 min-w-[250px]"
            >
              <label className="flex gap-2">
                <Stethoscope color="#FF6803" size={25} />
                <span className="text-[#888888] font-semibold text-lg">
                  Tipo di Appuntamento
                </span>
              </label>
              <div className="relative">
                <select
                  name="appointmentType"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#fff] text-[#FF6803] font-semibold"
                  value={bookingData.appointmentType}
                  onChange={handleInputChange}
                >
                  <option value="">Seleziona il tipo di appuntamento</option>
                  {appointmentTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </motion.div>

            <motion.button
              variants={fadeInUp}
              type="submit"
              className="mt-11 flex gap-2 bg-[#C97A60] text-white h-12 items-center font-bold px-8 py-2 rounded-xl shadow-xl shadow-[#a7a3a3] hover:bg-[#B56B51]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Prenota Ora
              <span>
                <CircleCheck />
              </span>
            </motion.button>
          </motion.form>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <ServicesSection />
      </motion.div>

      {/*About Section */}
      <section id="about" className=""></section>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="w-[100%]"
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

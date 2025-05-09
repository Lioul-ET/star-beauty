import React from "react";
import { Calendar, Video, Stethoscope, FileText, Syringe } from "lucide-react";
import { motion } from "framer-motion";
import AboutSection from "./aboutSection";

const ServiceCard = ({ img, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{ scale: 1.02 }}
    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border-[1px] border-red-400"
  >
    <motion.div className="mb-4" transition={{ duration: 0.5 }}>
      <img
        src={img}
        alt="hair care icons"
        className="w-[100%]  text-orange-400 rounded-2xl"
      />
    </motion.div>
    <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </motion.div>
);

const ServicesSection = () => {
  const services = [
    {
      img: "dental.png",
      title: "Dental Treatment",
      description:
        "Consult with top doctors across various specialties via video or chat communication. Choose the best time for an in-person visit with our easy-to-use scheduling system.",
    },
    {
      img: "pl.png",
      title: "Plastic Surgery",
      description:
        "Receive and renew prescriptions digitally after your consultation with our specialists.",
    },
    {
      img: "laser-treatment.png",
      title: "Laser treatments",
      description:
        "Skip the pharmacy queues and save time + energy by ordering medicine refills online.",
    },
    {
      img: "hT.png",
      title: "Hair Restoration",
      description:
        "Obtain necessary medical notes for work or school with only a few clicks of hassle.",
    },
    {
      img: "appointment.png",
      title: "Booking Appointments",
      description:
        "Choose the best time for an in-person visit with our easy-to-use scheduling system, or proceed with our online consultation features.",
    },
  ];

  return (
    <section id="services" className="max-w-6xl mx-auto mt-24 p-2 md:p-0">
      {/* Header Section */}
      <motion.div
        className="mb-16 flex flex-col justify-center items-center mt-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2 mb-6 mt-14">
          <h1 className="text-4xl font-bold">
            Top <span className="text-red-500">services</span> we offer
          </h1>
        </div>
        <motion.p
          className="text-gray-600 max-w-2xl mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          In today's fast-paced world, your health deserves the utmost attention
          and convenience. That's why we offer a suite of integrated services
          designed to cater to your healthcare needs digitally.
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute left-56 -mt-16"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img src="Group.png" className="w-44" />
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} index={index} />
        ))}
      </div>

      <motion.div
        className="absolute md:right-56 md:-mt-16"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img src="Group.png" className="w-44" />
      </motion.div>
    </section>
  );
};

export default ServicesSection;

import React from "react";
import { Calendar, Video, Stethoscope, FileText, Syringe } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  /* About Section */
  return (
    <section className="md:max-w-6xl mx-auto mt-32 p-2 md:p-0">
      <motion.div
        className="mt-20 bg-white rounded-2xl md:p-8 p-6 shadow-sm border-[2px] border-[#fc7772] shadow-[#a8a4a4]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        id="about"
      >
        <motion.h2
          className="text-2xl md:flex font-bold mb-2 w-[100%] justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span className="text-red-500">StarBeautyWorld Albania Story:</span>
          <span className="ml-2">Get to know us</span>
        </motion.h2>
        <div className="flex lg:flex-row flex-col gap-8 mt-7 w-[100%]">
          <motion.div
            className="lg:w-1/2 flex justify-end items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="founder.png"
              alt="founder"
              className="md:w-[70%] w-[100%]"
            />
          </motion.div>
          <motion.div
            className="lg:w-1/2 mt-7 w-[100%]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-600 ">
              At StarBeautyWorld Albania, we bring together top-tier experts in
              dental care, plastic surgery, and aesthetic treatments to offer
              you a seamless, luxurious experience. Our goal is to provide
              world-class medical services with a personal touch, ensuring every
              client feels valued and cared for.
            </p>
            <motion.button
              className="bg-red-400 text-white md:mt-8 px-6 py-3 rounded-lg hover:bg-orange-500 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn more about us
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;

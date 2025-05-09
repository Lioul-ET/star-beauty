import React from "react";
import { Calendar, Video, Stethoscope, FileText, Syringe } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
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
          <span className="text-red-500">
            La Storia di StarBeautyWorld Albania:
          </span>
          <span className="ml-2">Conosci il nostro team</span>
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
              alt="fondatore"
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
            <p className="text-gray-600">
              Presso StarBeautyWorld Albania, riuniamo i migliori esperti in
              cure dentistiche, chirurgia plastica e trattamenti estetici per
              offrirti un'esperienza senza pari, all'insegna del lusso e della
              professionalità. Il nostro obiettivo è fornire servizi medici di
              livello mondiale con un tocco personalizzato, garantendo a ogni
              cliente di sentirsi valorizzato e coccolato.
            </p>
            <motion.button
              className="bg-[#C97A60] text-white md:mt-8 px-6 py-3 rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Scopri di più su di noi
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;

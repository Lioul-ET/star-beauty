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
        alt="Icone servizi medici"
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
      title: "Trattamento Dentale",
      description:
        "Consulta i migliori medici di varie specialità via video o chat. Scegli il momento migliore per una visita in persona con il nostro sistema di prenotazione intuitivo.",
    },
    {
      img: "pl.png",
      title: "Chirurgia Plastica",
      description:
        "Ricevi e rinnova le prescrizioni digitalmente dopo la consultazione con i nostri specialisti.",
    },
    {
      img: "laser-treatment.png",
      title: "Trattamenti Laser",
      description:
        "Evita le code in farmacia e risparmia tempo ed energie ordinando i tuoi farmaci online.",
    },
    {
      img: "hT.png",
      title: "Restauro Capillare",
      description:
        "Ottieni i certificati medici necessari per lavoro o scuola con pochi semplici clic.",
    },
    {
      img: "appointment.png",
      title: "Prenotazioni",
      description:
        "Scegli l'orario ideale per una visita in persona con il nostro sistema di prenotazione, oppure utilizza la nostra consulenza online.",
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
            I migliori <span className="text-red-500">servizi</span> che
            offriamo
          </h1>
        </div>
        <motion.p
          className="text-gray-600 max-w-2xl mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          In un mondo frenetico, la tua salute merita la massima attenzione e
          comodità. Per questo offriamo servizi integrati pensati per soddisfare
          le tue esigenze di cura digitale.
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

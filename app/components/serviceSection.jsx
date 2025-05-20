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
        "Consulenza gratuita risparmi fino al 70% nelle tue cure dentali, Igiene dentale professionale (pulizia), Sbiancamento dentale, Otturazioni (cura carie), Devitalizzazioni (trattamenti canalari), Corone e ponti dentali, Faccette estetiche in ceramica o composito, Protesi mobili e fisse, Impianti dentali, Estrazioni dentarie (anche denti del giudizio), Ortodonzia (apparecchi fissi, mobili e trasparenti), Chirurgia orale, Parodontologia (cura delle gengive), Trattamento dell’alitosi, Terapia per bruxismo (bite notturno), Allineatori invisibili (tipo Invisalign)",
    },
    {
      img: "pl.png",
      title: "Chirurgia Plastica",
      description:
        "Rinoplastica (chirurgia del naso), Blefaroplastica (chirurgia delle palpebre), Lifting del viso e del collo, Otoplastica (correzione delle orecchie a sventola), Mastoplastica additiva (aumento del seno), Mastoplastica riduttiva (riduzione del seno), Mastopessi (lifting del seno), Addominoplastica (chirurgia dell’addome), Liposuzione, Liposculpture (liposcultura), Gluteoplastica (aumento dei glutei), Trapianto di capelli, Ginecomastia (riduzione del seno maschile), Chirurgia intima femminile e maschile, Lifting delle braccia o delle cosce, Chirurgia ricostruttiva post-trauma o post-tumore, Rimozione di nei, cisti o lipomi, Chirurgia delle cicatrici",
    },
    {
      img: "laser-treatment.png",
      title: "Trattamenti Laser",
      description:
        "LASIK – Correzione della miopia, ipermetropia e astigmatismo, PRK (Cheratectomia Fotorefrattiva) – Alternativa al LASIK per chi ha cornee sottili, SMILE – Tecnica minimamente invasiva per la miopia, LASEK – Variante della PRK, meno dolorosa nel post-operatorio, Trattamento della presbiopia con laser, Capsulotomia YAG laser – Per opacizzazione secondaria della capsula dopo cataratta, Iridotomia laser – Per il glaucoma ad angolo chiuso, Trabeculoplastica laser – Per ridurre la pressione intraoculare nel glaucoma, Fotocoagulazione retinica laser – Per retinopatia diabetica o rotture retiniche, Laser per il trattamento della degenerazione maculare (in alcuni casi)",
    },
    {
      img: "hT.png",
      title: "Trapianto capelli",
      description:
        "Trapianto FUE (Follicular Unit Extraction) – Tecnica più moderna e meno invasiva, Trapianto FUT (Strip) – Tecnica tradizionale con prelievo a striscia, Trapianto capelli per uomo, Trapianto capelli per donna, Trapianto barba, Trapianto sopracciglia, Trapianto baffi, Correzione di vecchi trapianti mal riusciti, Trapianto con tecnica DHI (Direct Hair Implantation), Micropigmentazione del cuoio capelluto (effetto rasato), Trattamenti PRP (Plasma Ricco di Piastrine) per rinforzare i capelli trapiantati, Trapianto in zone cicatriziali o post-trauma, Trapianto capelli afro o ricci, Analisi del capello e mappatura del cuoio capelluto, Consulenza pre e post intervento con follow-up personalizzato",
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
          Scegli tra uno dei nostri trattamenti e chiedi una consulenza
          gratuita! siamo italiani ma viviamo qui da 15 anni
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

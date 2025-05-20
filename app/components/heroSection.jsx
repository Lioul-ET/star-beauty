"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronRight, Star } from "lucide-react";
import localFont from "next/font/local";

const CinzelDecorative = localFont({
  src: "../fonts/CinzelDecorative-Bold.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

const HeroSection = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.4,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className={`min-w-full bg-img py-20 transition-all duration-1000 h-auto ease-in-out ${
        inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      {/* Decorative Line */}
      <div className="absolute top-72 z-10">
        <img src="background-line.png" alt="Star Beauty" className="w-full" />
      </div>

      <div className="container mx-auto px-6 py-12 flex flex-wrap items-center md:mt-20  relative z-10">
        {/* Text Content */}
        <div className="w-full md:w-1/2 block overflow-hidden">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <div className="flex flex-wrap gap-5">
              <span className="inline-block">Un</span>
              <span className="inline-block">Approccio</span>
            </div>
            <div className="flex flex-wrap gap-5 mt-4">
              <span className="inline-block text-[#d62c16]">Moderno</span>
            </div>
            <div className="flex flex-wrap gap-5 mt-4">
              <span className="inline-block text-[#d62c16]">alla</span>
              <span className="inline-block text-[#d62c16]">Bellezza,</span>
              <span className="inline-block text-black">Salute</span>
            </div>
            <div className="flex flex-wrap gap-5 mt-4">
              <span className="inline-block text-[#d62c16]">&</span>
              <span className="inline-block text-[#d62c16]">Cura</span>
              <span className="inline-block text-[#d62c16]">di</span>
              <span className="inline-block text-[#d62c16]">Sé</span>
              <span className="inline-block">🇮🇹 🇦🇱</span>
            </div>
          </h1>

          <p className="mb-8 text-black">
            Scopri cure di{" "}
            <span className="text-[#d62c16] font-semibold inline-block">
              livello mondiale
            </span>{" "}
            in odontoiatria, chirurgia plastica e trattamenti laser per gli
            occhi - tutto in un' unica sede! I nostri dottori sono Italiani e
            non solo! Prenota ora la tua consulenza gratuita.
          </p>

          <button
            className="bg-[#C97A60] text-white px-8 py-3 rounded-lg hover:bg-[#B56B51] shadow-2xl shadow-[#858080] flex font-bold items-center space-x-2 z-50"
            onClick={() => scrollToSection("book")}
          >
            <span>Prenota un Appuntamento</span>
            <ChevronRight color="#fff" />
          </button>
        </div>
        {/* Image Section */}
        <div className="w-full md:w-1/2 relative mt-12 md:mt-0">
          <div className="w-full max-w-lg mx-auto aspect-square relative">
            <div className="w-full h-full flex justify-center items-center">
              <img
                src="hero-img2.png"
                alt="Immagine principale"
                className="w-full -mt-9"
              />
            </div>
          </div>

          {/* Floating Ratings Card */}
          <div className="absolute top-48 right-1 bg-white p-4 rounded-lg shadow-lg z-20">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-300">
                      <img
                        src={`${i}.png`}
                        className="rounded-full w-full h-full object-cover"
                        alt={`Cliente ${i}`}
                      />
                    </div>
                  ))}
                </div>
                <span className="text-lg font-bold">2400+</span>
              </div>
              <span className="text-red-600 font-bold">
                Clienti Soddisfatti
              </span>
              <div className="flex text-yellow-400 mt-1 text-xl items-center">
                {"★".repeat(4)}
                <span className="text-[#6D6D6D] text-sm font-bold ml-2">
                  (4.7 Stelle)
                </span>
              </div>
            </div>
          </div>

          {/* Floating Booking Label */}
          <div className="absolute bottom-2 left-1 bg-white p-4 rounded-lg shadow-lg z-20">
            <div className="flex gap-2">
              <div className="p-1 bg-[#EFF9FF]">
                <Star fill="#D53D17" color="#D53D17" />
              </div>
              <div className="text-[#d51717] font-bold mt-[0.5px]">
                Prenotazioni Semplici
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

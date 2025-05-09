import React, { useState } from "react";
import { Calendar, ChevronRight, Mail, Phone, Star } from "lucide-react";
import localFont from "next/font/local";

const CinzelDecorative = localFont({
  src: "../fonts/CinzelDecorative-Bold.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80; // adjust if you have a fixed header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

const HeroSection = () => {
  return (
    <section id="home" className="mt-24 relative">
      <div className="absolute top-72 z-10">
        <img src="background-line.png" alt="Star Beauty" className="w-[100%]" />
      </div>
      <div className="container mx-auto px-6 py-12 flex flex-wrap items-center mt-24 relative z-10">
        <div className="w-full md:w-1/2">
          <h1
            className={`text-4xl md:text-5xl font-bold mb-6 ${CinzelDecorative.className}`}
          >
            <span>Un approccio moderno</span>
            <span className="text-[#d62c16] ml-5">alla bellezza</span>
            <span className="block mt-4 text-[#d62c16]">
              alla salute,{" "}
              <span className="ml-5 text-foreground">e alla cura</span>
            </span>
            <span className="block mt-4 text-[#d62c16]">
              di sé<span className="ml-5">🇮🇹 🇦🇱</span>
            </span>
            {/* <span className="block mt-4 text-[#d62c16]">🇮🇹 🇦🇱</span> */}
          </h1>

          <p className="mb-8 text-gray-600">
            Esperienza{" "}
            <span className="text-[#d62c16] font-semibold">
              di classe mondiale
            </span>{" "}
            Assistenza odontoiatrica, chirurgia plastica, trapianto di capelli e
            trattamenti laser: tutto in un unico luogo comodo e accessibile.
            Scelto da professionisti internazionali clients from{" "}
            <span className="font-semibold">Italia 🇮🇹</span>,
            <span className="ml-1 font-semibold">Albania 🇦🇱</span>, e Germania.
            <span className="text-[#d62c16] font-bold ml-1">Inizia ora</span> o
            prenota il tuo appuntamento oggi.
          </p>

          <button
            className="bg-[#C97A60] text-white px-8 py-3 rounded-lg hover:bg-[#B56B51] shadow-2xl shadow-[#858080] flex font-bold items-center space-x-2"
            onClick={() => scrollToSection("book")}
          >
            <span>Prenota un appuntamento</span>
            <ChevronRight color="#fff" />
          </button>
        </div>

        <div className="w-full md:w-1/2 relative mt-12 md:mt-0">
          <div className="w-full max-w-lg mx-auto aspect-square relative">
            <div className="w-full h-full flex justify-center items-center">
              <img
                src="hero-img2.png"
                alt="hero-img"
                className="w-[100%] -mt-9"
              />
            </div>
          </div>

          <div className="absolute top-48 right-1 bg-white p-4 rounded-lg shadow-lg z-20">
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
              <span className="text-red-600 font-bold">Clienti felici</span>
            </div>
            <div className="flex text-yellow-400 mt-1 text-xl items-center">
              {"★".repeat(4.7)}
              <span className="text-[#6D6D6D] text-sm font-bold">
                ( 4 Stars)
              </span>
            </div>
          </div>

          <div className="absolute bottom-2 left-1 bg-white p-4 rounded-lg shadow-lg z-20">
            <div className="flex gap-2">
              <div className="p-1 bg-[#EFF9FF]">
                <Star fill="#D53D17" color="#D53D17" />
              </div>
              <div className="text-[#d51717] font-bold mt-[0.5px]">
                Prenotazione facile degli appuntamenti
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

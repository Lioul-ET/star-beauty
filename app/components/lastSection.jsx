"use client";
import React, { useState } from "react";
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  CircleArrowRight,
} from "lucide-react";
import { toast } from "sonner";

const LastSection = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // ... (keep original submit logic unchanged)
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-center">
          <span className="text-[#c22f29] text-5xl">
            Maestri della Medicina:
          </span>
        </h1>
        <h1 className="text-5xl font-semibold text-center mt-4">
          <span className="text-gray-800">Il nostro team di specialisti</span>
        </h1>

        <p className="text-center text-gray-600 mt-9 max-w-2xl mx-auto">
          Il nostro team di specialisti è all'avanguardia nell'innovazione
          medica. Ogni specialista combina competenza, empatia ed esperienza per
          garantire che la tua salute sia nelle migliori mani.
        </p>

        {/* Doctor Card */}
        <div className="mt-12 bg-[#c06464] rounded-2xl flex flex-col md:flex-row items-center gap-6 max-w-4xl mx-auto">
          <div className="md:h-36 rounded-full flex items-center justify-center md:w-[30%] w-[100%]">
            <img
              src="male-doctor.png"
              alt="Dottore"
              className="md:w-[100%] w-[70%] md:-mt-[3.2rem] md:-ml-2"
            />
          </div>
          <div className="flex-1 md:w-[50%] w-[90%] z-40 p-8">
            <h3 className="text-white text-2xl font-bold">
              Dott. Mark Lee (Dermatologo)
            </h3>
            <p className="text-white mt-4 text-lg">
              Il Dott. Lee è un pioniere in dermatologia, con un approccio
              olistico ai trattamenti per la salute della pelle. La sua
              dedizione all'eccellenza clinica e all'educazione del paziente lo
              ha reso un leader nel campo.
            </p>
            <button className="mt-6 bg-white text-[#C58F72] px-9 py-2 rounded-lg flex items-center gap-2 text-xl font-bold">
              Prenota visita
              <Phone className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Help Desk Section */}
        <section id="contact" className="mt-20">
          <h2 className="text-center text-3xl font-bold">
            Contatta il nostro <span className="text-[#bd3535]">Supporto</span>
          </h2>
          <p className="text-center text-[#757474] mt-4">
            Domande? Hai bisogno di aiuto? Il nostro team di supporto è qui per
            te.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 max-w-2xl mx-auto flex flex-col md:flex-row gap-4"
          >
            <input
              type="text"
              name="firstName"
              placeholder="Nome"
              className="flex-1 px-4 py-4 border-[2px] rounded-lg border-[#C58F72]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="flex-1 px-4 py-4 border-[2px] rounded-lg border-[#C58F72]"
              required
            />
            <button
              type="submit"
              className="bg-[#C97A60] text-white px-6 py-2 rounded-lg flex items-center font-bold gap-2"
            >
              Contattaci
              <span>
                <CircleArrowRight />
              </span>
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-rose-50 mt-20 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <img src="icon3.png" alt="Star Beauty" className="h-20" />
              </div>
              <p className="text-gray-600">
                Cura medica personalizzata direttamente da casa tua.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Supporto</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Come iniziare</li>
                <li>FAQ</li>
                <li>Guide</li>
                <li>Segnala un problema</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Servizi</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Prenotazioni</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Termini e condizioni</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex justify-between items-center border-t pt-8">
            <div className="flex gap-4">
              <Facebook className="w-5 h-5" />
              <Instagram className="w-5 h-5" />
              <Linkedin className="w-5 h-5" />
              <Youtube className="w-5 h-5" />
            </div>
            <p className="text-sm text-gray-600">
              HealthNet 2024 © Tutti i diritti riservati
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LastSection;

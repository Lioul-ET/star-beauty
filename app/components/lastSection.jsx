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
  MapPin,
  Clock,
  Building,
  Waves,
  Car,
  Building2,
} from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const LastSection = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const bookingData = {
      firstName: formData.get("firstName"),
      email: formData.get("email"),
    };
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bookingData,
          subject: "Contact Form Submission",
        }),
      });

      const data = await response.json();
      console.log(response);
      if (response.ok) {
        console.log("Sent");
        setStatus("Email sent successfully!");
        toast("Grazie per averci contattato! Ti risponderemo presto.");
      } else {
        toast("Failed to send message. Please try again.", {
          description: "Per favore riprova",
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

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Nome"
                  className="px-4 py-4 border-[2px] rounded-lg border-[#C58F72]"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="px-4 py-4 border-[2px] rounded-lg border-[#C58F72]"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Il tuo messaggio"
                  className="px-4 py-4 border-[2px] rounded-lg border-[#C58F72] h-32"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#C97A60] hover:bg-[#8f6557] text-white px-6 py-4 rounded-lg flex items-center justify-center font-bold gap-2"
                >
                  Contattaci
                  <CircleArrowRight />
                </button>
              </form>
            </div>

            {/* Map and Location Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="h-64 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.750680203405!2d19.436541776891747!3d41.31020817131897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134fdb4a1451c225%3A0x2177bb098d919164!2sSwimming%20Pool%20Gym%20%22ventus%20Sport%20Center%22%2C%20Ventus%20Harbor!5e0!3m2!1sen!2s!4v1707296183736!5m2!1sen!2s"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="p-6 bg-rose-50">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  La Zona
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-[#C97A60]" />
                    <p>Rruga Taulantia, Lagja Nr 2, Durrës</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Waves className="text-[#C97A60]" />
                    <p>Porto turistico di Durazzo - 5 minuti a piedi</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Building className="text-[#C97A60]" />
                    <p>Vicino al Ventus Sport Center</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-rose-50 mt-20 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <img src="logo-starbg.png" alt="Star Beauty" className="h-20" />
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

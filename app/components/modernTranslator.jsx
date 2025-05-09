"use client";
import { useState, useEffect } from "react";
import { Globe2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const languages = [
  { code: "en", name: "English" },
  { code: "it", name: "Italian" },
  { code: "ro", name: "Romanian" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" },
];

export default function ModernTranslator() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");
  const [translateLoaded, setTranslateLoaded] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const [translateError, setTranslateError] = useState("");

  const isDevelopment = process.env.NODE_ENV === "development";

  useEffect(() => {
    if (isDevelopment) {
      setTranslateLoaded(true);
      return;
    }

    window.googleTranslateElementInit = function () {
      if (
        !window.google ||
        !window.google.translate ||
        !window.google.translate.TranslateElement
      ) {
        console.error("Google Translate API not loaded properly");
        setTranslateError("Translation service failed to load");
        return;
      }

      try {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: languages.map((l) => l.code).join(","),
            layout:
              window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_element"
        );

        const style = document.createElement("style");
        style.textContent = `
          .goog-te-banner-frame, .goog-te-gadget,
          .VIpgJd-ZVi9od-l4eHX-hSRGPd, .VIpgJd-ZVi9od-ORHb-OEVmcd {
            display: none !important;
          }
          body { top: 0 !important; }
          .goog-te-combo {
            opacity: 0.01;
            position: absolute;
            width: 1px;
            height: 1px;
          }
        `;
        document.head.appendChild(style);

        setTranslateLoaded(true);
      } catch (error) {
        console.error("Google Translate initialization error:", error);
        setTranslateError("Failed to initialize translator");
      }
    };

    if (!document.querySelector('script[src*="translate.google.com"]')) {
      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.onerror = () => {
        console.error("Failed to load Google Translate script");
        setTranslateError("Failed to load translation service");
        setTranslateLoaded(false);
      };
      document.body.appendChild(script);
    }

    return () => {
      window.googleTranslateElementInit = undefined;
      const script = document.querySelector(
        'script[src*="translate.google.com"]'
      );
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, [isDevelopment]);

  const translatePage = async (targetLang) => {
    setIsTranslating(true);
    setTranslateError("");

    try {
      if (isDevelopment) {
        console.log(`[DEV] Mock translation to ${targetLang}`);
        setSelectedLang(targetLang);
        setIsOpen(false);
        return;
      }

      if (!translateLoaded) {
        throw new Error("Translator not ready");
      }

      const googleTranslateElement = document.getElementById(
        "google_translate_element"
      );
      if (googleTranslateElement) {
        googleTranslateElement.innerHTML = "";
      }

      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: languages.map((l) => l.code).join(","),
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );

      await new Promise((resolve) => setTimeout(resolve, 500));

      const select = document.querySelector(".goog-te-combo");
      if (select) {
        select.value = targetLang;
        select.dispatchEvent(new Event("change"));
        setSelectedLang(targetLang);
        setIsOpen(false);
        return;
      }

      const iframe = document.querySelector("iframe.goog-te-menu-frame");
      if (iframe?.contentWindow) {
        iframe.contentWindow.postMessage(
          {
            command: "translate",
            langPair: `en|${targetLang}`,
          },
          "*"
        );
        setSelectedLang(targetLang);
        setIsOpen(false);
        return;
      }

      throw new Error("Failed to find translation elements");
    } catch (error) {
      console.error("Translation error:", error);
      setTranslateError(
        "Translation failed - page may not be fully translated"
      );
      setSelectedLang(targetLang);
      setIsOpen(false);
    } finally {
      setIsTranslating(false);
    }
  };

  return (
    <>
      <div id="google_translate_element" className="hidden" />

      <button
        onClick={() => setIsOpen(true)}
        disabled={!translateLoaded || isTranslating}
        className={`fixed bottom-4 right-4 z-50 flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg transition-all duration-200 ${
          !translateLoaded || isTranslating
            ? "opacity-50 cursor-not-allowed"
            : "hover:shadow-xl text-gray-700 hover:bg-gray-50"
        }`}
      >
        <Globe2 className="w-5 h-5" />
        <span className="text-sm font-medium">
          {isTranslating
            ? "Translating..."
            : isDevelopment
            ? "Translate (Mock)"
            : translateLoaded
            ? "Translate"
            : "Loading..."}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-lg font-semibold text-gray-800">
                  Select Language {isDevelopment && "(Mock Mode)"}
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                  disabled={isTranslating}
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="p-2 max-h-[60vh] overflow-y-auto">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => translatePage(lang.code)}
                    disabled={!translateLoaded || isTranslating}
                    className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                      selectedLang === lang.code
                        ? "bg-blue-50 text-blue-600"
                        : "hover:bg-gray-50 text-gray-700"
                    } ${
                      !translateLoaded || isTranslating
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    <span className="text-sm font-medium">{lang.name}</span>
                    {selectedLang === lang.code && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-auto text-blue-600"
                      >
                        <div className="w-2 h-2 rounded-full bg-current" />
                      </motion.div>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {isTranslating && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="p-4 bg-white rounded-lg shadow-lg flex items-center gap-3">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
            <span>
              Translating to{" "}
              {languages.find((l) => l.code === selectedLang)?.name}...
            </span>
          </div>
        </div>
      )}

      {translateError && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-20 right-4 z-50 p-3 bg-red-100 text-red-800 rounded shadow-lg flex items-center gap-2"
        >
          <X
            className="w-4 h-4 cursor-pointer"
            onClick={() => setTranslateError("")}
          />
          {translateError}
        </motion.div>
      )}
    </>
  );
}

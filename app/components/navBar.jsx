"use client";
import React, { useState, useEffect } from "react";
import { Calendar, Mail, Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -20% 0px", // Modified rootMargin
      threshold: 0.5, // Simplified threshold
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Wait for DOM to be ready
    const sections = document.querySelectorAll("section[id]");
    if (sections.length) {
      sections.forEach((section) => {
        observer.observe(section);
      });
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleSectionClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Manually set active section
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about", label: "About us" },
    { id: "testimonial", label: "Testimonial" },
    { id: "contact", label: "Contact us" },
  ];

  return (
    <nav
      className={`px-6 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="icon3.png" alt="Star Beauty" className="h-20" />
        </div>

        <div className="hidden md:flex space-x-6 font-bold">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleSectionClick(id)}
              className={`relative px-2 py-1  hover:text-gray-900 transition-colors ${
                activeSection === id
                  ? id === "contact"
                    ? "text-[#C97A60]"
                    : "text-[#C97A60]"
                  : ""
              }${
                id === "contact"
                  ? id === activeSection
                    ? "text-[#C97A60]"
                    : "bg-[#C97A60] text-[#fff] p-2 rounded-lg"
                  : "text-gray-600"
              }`}
            >
              {label}
              {activeSection === id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C97A60]"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
            </button>
          ))}
        </div>

        <button
          className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
          onClick={handleMenuClick}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white shadow-lg absolute left-0 right-0 top-full"
          >
            <div className="p-4 flex flex-col space-y-4">
              {navItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => handleSectionClick(id)}
                  className={`text-left px-4 py-2 rounded-lg transition-colors ${
                    activeSection === id
                      ? "bg-orange-100 text-orange-600"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {label}
                  {activeSection === id && (
                    <div className="absolute left-0 w-1 h-full bg-orange-600 rounded-r" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

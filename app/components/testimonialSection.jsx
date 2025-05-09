import React from "react";
import { motion } from "framer-motion";
import { img } from "framer-motion/client";

const TestimonialCard = ({ quote, author, image }) => (
  <div className="bg-gradient-to-r from-[#fad7d7] via-[#f8f5f3] to-transparent rounded-2xl p-6 shadow-sm hover:shadow-md transition-all border-[2px] border-[#f5928b]">
    <div className="flex gap-4 items-start">
      <div className="w-12 h-12 rounded-ful flex-shrink-0">
        <img src={image} />
      </div>
      <div>
        <p className="text-gray-700 mb-2">{quote}</p>
        <p className="text-gray-500 font-medium">- {author}</p>
      </div>
    </div>
  </div>
);

const Statistic = ({ value, label }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center"
    id="testimonials"
  >
    <div className="text-4xl font-bold text-red-500 mb-2">{value}</div>
    <div className="text-gray-600 text-sm">{label}</div>
  </motion.div>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "After my knee surgery, the convenience of online consultations made my recovery smoother than I could have imagined.",
      author: "Linda A.",
      img: "1.png",
    },
    {
      quote:
        "Managing chronic conditions like diabetes requires a lot of vigilance, but the medicine refill system has simplified my life.",
      author: "Henry B.",
      img: "2.png",
    },
    {
      quote:
        "The prescription refill system is a game-changer for managing my diabetes. It's really efficient and completely hassle-free.",
      author: "Joshua T.",
      img: "3.png",
    },
    {
      quote:
        "Finding a doctor who really understands all of my health needs has never been easier. This platform has changed my life.",
      author: "Samantha K.",
      img: "4.png",
    },
  ];

  const statistics = [
    {
      value: "10,000+",
      label: "Successful Consultations",
    },
    {
      value: "2,500+",
      label: "Booking",
    },
    {
      value: "98%",
      label: "Patient Satisfaction Rate",
    },
    {
      value: "200+",
      label: "Top Specialists",
    },
  ];

  return (
    <section id="testimonial" className="max-w-6xl mx-auto px-4 py-16 relative">
      {/* Decorative Elements */}
      <div className="absolute right-0 top-1/2 opacity-20">
        <div className="grid grid-cols-4 gap-1">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-red-200" />
          ))}
        </div>
      </div>

      <div className="absolute left-0 bottom-0 opacity-20">
        <div className="grid grid-cols-4 gap-1">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-red-200" />
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-red-500 text-4xl mb-2 font-bold">
          Patient Testimonials:
        </h2>
        <h3 className="text-3xl font-bold mb-4">
          Hear from Those We've Cared For
        </h3>
        <p className="text-gray-600">
          Discover the difference we make through the voices of those we've
          served:
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            quote={testimonial.quote}
            author={testimonial.author}
            image={testimonial.img}
          />
        ))}
      </div>

      {/* Statistics */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
      >
        {statistics.map((stat, index) => (
          <Statistic key={index} value={stat.value} label={stat.label} />
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;

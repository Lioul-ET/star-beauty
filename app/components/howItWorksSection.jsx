import React from "react";
import { UserCircle, Calendar, Clock, Star } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      icon: Calendar,
      title: "Book An Appointement",
      description:
        "Select from our range of services and book a consultation. Booking a consultation with us is fairly simple and straight forward.",
    },
    {
      number: 2,
      icon: Clock,
      title: "Wait for Schedule",
      description:
        "Have a virtual consultation with one of our certified specialists, or go for a physical visit to the doctor in case you opted for a physical check-up.",
    },
  ];

  return (
    <div className="md:max-w-6xl w-[100%] md:mx-auto md:px-4 md:py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          How <span className="text-red-500">our platform</span> works
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-6">
          Navigating your healthcare journey with us is seamless. Just follow
          these steps mentioned below to proceed with your selected services.
          You can also see our FAQ section for more guidance.
        </p>
      </div>

      {/* Main Content */}
      <div className="md:flex flex-col lg:flex-row items-center gap-8">
        {/* Steps Section */}
        <div className="lg:w-1/2 w-[100%] space-y-20">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              {/* Step Number */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <span className="text-red-400 font-semibold">
                  {step.number}
                </span>
              </div>

              {/* Step Content */}
              <div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 w-[100%] relative">
          <div className="relative">
            {/* Main Image Container */}
            <div className=" rounded-2xl p-6 relative ">
              <div className="aspect-square bg-white rounded-2xl overflow-hidden relative ">
                {/* Placeholder for doctor image */}
                <img
                  src="Doctor.png"
                  alt="Doctor-img"
                  className="z-20 w-[70%]"
                />
                <div className="bg-gradient-to-r from-[#fab2b2] via-[#f7eae4] to-transparent w-[90%] md:h-72 h-56  rounded-2xl md:-mt-72 -mt-56 border-[2px] border-[#d15753] z-0"></div>
                <img
                  src="cross.png"
                  alt="cross-img"
                  className="h-32 w-20 md:-mt-[22rem] -mt-[40rem] ml-96 "
                />
              </div>
            </div>

            {/* Badge */}
            <div className="absolute md:bottom-32 bottom-24 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-xl shadow-lg">
              <div className="flex items-center gap-2 text-[#c46255]">
                <span className="text-red-400">
                  <Star />
                </span>
                <span className="text-sm font-semibold">
                  Best Certified Team of Specialists
                </span>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 md:-right-4 w-16 h-16 text-orange-400 opacity-20">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4v16m-8-8h16" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Dots */}
      <div className="absolute left-0 bottom-0 opacity-20">
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-orange-200" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

import React from "react";
import { motion } from "framer-motion";

const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Features = () => {
  const features = [
    {
      title: "Insurance Accepted",
      description:
        "We accept multiple insurance providers and are continuously expanding our partnerships to ensure you receive care, regardless of your provider.",
    },
    {
      title: "Online Booking",
      description:
        "Streamlining your dental experience. We believe dental care should be easily accessible and hassle-free.",
    },
    {
      title: "Preventive Care",
      description:
        "The foundation for lifelong dental wellness. We prioritize preventive care as the cornerstone of optimal oral health.",
    },
    {
      title: "Physical Treatment",
      description:
        "Whether you need cosmetic, restorative, pediatric, or orthodontic procedures, our team is here for you.",
    },
  ];

  return (
    <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      {/* Background styling that complements the hero section */}
      <div className="absolute inset-0 bg-gradient-to-tl from-blue-50 via-white to-indigo-50 opacity-80"></div>

      <div className="relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
          className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
        >
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-blue-800 uppercase rounded-full bg-blue-100">
            Features
          </p>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-indigo-800 sm:text-4xl md:mx-auto">
            Your Comprehensive Dental Care Solution
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            We are dedicated to providing exceptional dental care with a focus
            on convenience, prevention, and effective treatments.
          </p>
        </motion.div>

        <div className="grid gap-6 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={fadeInVariant}
              className="flex flex-col justify-between p-5 border border-blue-100 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
            >
              <div>
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-100">
                  <svg
                    className="w-10 h-10 text-blue-600"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5 text-indigo-800">
                  {feature.title}
                </h6>
                <p className="mb-3 text-sm text-gray-700">{feature.description}</p>
              </div>
              {/*<a
                href="/"
                className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-600 hover:text-blue-800"
              >
                Learn more
              </a>*/}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;

import React from "react";
import { motion } from "framer-motion";

const services = [
  { id: 1, name: "Full Mouth Scaling & Polishing", image: "/images/beautiful-smile.jpg" },
  { id: 2, name: "Dental Crown & Bridge", image: "/images/xray.jpeg" },
  { id: 3, name: "Permanent Filling", image: "/images/braces.jpeg" },
  { id: 4, name: "Dental Implant", image: "/images/crown.jpeg" },
  { id: 5, name: "Braces", image: "/images/inflamation.jpg" },
  { id: 6, name: "Extraction", image: "/images/extraction.jpg" },
  { id: 7, name: "Root Canal Treatment", image: "/images/rootcanal.jpeg" },
  { id: 8, name: "Check-ups and Consultation", image: "/images/consultation.jpg" },
];

const Services = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="px-5" id="service">
      <div className="">
        <header className="">
          <motion.div 
            className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Services
              </p>
            </div>
            <h2 className="max-w-[40rem] mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative"> The </span>
              </span>{" "}
              Suite of dental <span className="text-blue-500">Services</span>{" "}
              we offers
            </h2>

            <p className="max-w-[40rem] text-md mx-auto mt-4 text-gray-500">
              Radiant Dental provides a comprehensive suite of dental services
              including General, Cosmetic, Restorative, Pediatric and
              Emergency Dentistry.
            </p>
          </motion.div>
        </header>

        <motion.ul 
          className="grid gap-4 h-30 mt-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {services.map((service) => (
            <motion.li 
              key={service.id} 
              className="bg-slate-200"
              variants={fadeInVariants}
              // For the last item, apply rounded corners
              style={service.id === 8 ? { borderRadius: '4px'} : {}}
            >
              <img src={service.image} alt={service.name} className="" />
              <div className="relative py-2">
                <h3 className="text-m text-center text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  {service.name}
                </h3>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Services;
import React from "react";
import { motion } from "framer-motion";

const services = [
  { id: 1, name: "Teeth Cleaning & Whitening", image: "/images/guywhite.jpg" },
  { id: 2, name: "Dental Crown & Bridge", image: "/images/dentalbridge.jpg" },
  { id: 3, name: "Composite Filling", image: "/images/filling.jpg" },
  { id: 4, name: "Tooth Extraction", image: "/images/tooth-extraction.jpg" },
  { id: 5, name: "Orthodontic Treatment", image: "/images/braces.jpg" },
  { id: 6, name: "X Ray", image: "/images/xrayy.jpg" },
  { id: 7, name: "Root Canal Treatment", image: "/images/rootcanal.jpg" },
  { id: 8, name: "Check-ups and Consultation", image: "/images/consultation2.jpg" },
];

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

const Services = () => {
  return (
    <section className="px-6 py-12 bg-gray-50" id="service">
      <motion.div 
        className="max-w-3xl mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <p className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wide text-teal-900 uppercase rounded-full bg-teal-200">
          Services
        </p>
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Our <span className="text-blue-500">Dental Services</span>
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-gray-600">
          We offer a complete range of dental services, including General, Cosmetic, Restorative, Pediatric, and Emergency Dentistry.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div 
        className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-4"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {services.map((service) => (
          <motion.div 
            key={service.id} 
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            variants={fadeInVariants}
          >
            <img src={service.image} alt={service.name} className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-700">{service.name}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;

import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  { name: "Dr. Lelei", role: "Senior Dental Surgeon", image: "/images/dr_lelei.jpg" },
  { name: "Dr. Magara", role: "Dental Surgeon", image: "/images/dr_magara.jpg" },
  { name: "Lucy", role: "Dental Assistant", image: "/images/dr_lucy.jpg" },
];

const Team = () => {
  return (
    <section className="mt-16 bg-slate-100" id="team">
      <div className="container px-6 py-12 mx-auto">
        {/* Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <div className="max-w-xl mb-10 mx-auto">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-200">
              Team
            </p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Meet Our Expert <span className="text-blue-500">Team</span>
            </h2>
            <p className="max-w-3xl text-md mx-auto mt-4 text-gray-600">
              Our dedicated team of dental professionals is committed to
              providing you with the best dental care possible.{" "}
              <span className="hidden lg:inline">
                Each member is highly skilled and experienced, ensuring you
                receive personalized, high-quality treatment.
              </span>
            </p>
          </div>
        </motion.div>

        {/* Team Cards */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="w-full max-w-sm text-center flex flex-col items-center"
            >
              <img
                className="object-cover w-full h-60 mx-auto rounded-lg"
                src={member.image}
                alt={`${member.name} - ${member.role}`}
              />
              <div className="mt-2">
                <h3 className="text-md font-bold text-gray-700">{member.name}</h3>
                <span className="mt-1 font-medium text-gray-600">{member.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

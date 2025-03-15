import React from "react";
import { Fade } from "react-awesome-reveal";

const insuranceLogos = [
  { src: "/images/cigna.png", alt: "Cigna" },
  { src: "/images/britam.png", alt: "Britam" },
  { src: "/images/uap.jpg", alt: "UAP" },
  { src: "/images/cic.png", alt: "CIC" },
];

const Insurance = () => {
  return (
    <section className="mt-16" id="insurance">
      <header>
        <Fade>
          <div className="max-w-xl mb-10 mx-4 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              insurance
            </p>
            <h2 className="max-w-md mb-6 font-sans text-2xl md:text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <span className="relative">We </span>
              </span>{" "}
              work with <span className="text-blue-500">Insurance</span>{" "}
              companies for your coverage
            </h2>
          </div>
        </Fade>
      </header>

      {/* Logo Grid for Small Screens & Flex for Larger Screens */}
      <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 p-4">
        {insuranceLogos.map((logo, index) => (
          <div key={index} className="w-40 sm:w-48 md:w-56 lg:w-64 flex items-center justify-center">
            <img
              src={logo.src}
              className="object-contain max-w-full h-auto"
              alt={logo.alt}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Insurance;

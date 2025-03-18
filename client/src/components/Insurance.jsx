import React from "react";
import { Fade } from "react-awesome-reveal";

const insuranceLogos = [
  { src: "/images/cigna.png", alt: "Cigna" },
  { src: "/images/britam.png", alt: "Britam" },
  { src: "/images/uap.jpg", alt: "UAP" },
  { src: "/images/cic.png", alt: "CIC" },
  { src: "/images/bupa.png", alt: "Bupa" },
];

const Insurance = () => {
  return (
    <section className="mt-16" id="insurance">
      <header>
        <Fade>
          <div className="max-w-xl mb-10 mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-200">
              Insurance
            </p>
            <h2 className="max-w-md mb-4 font-sans text-2xl md:text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <span className="relative">We </span>
              </span>{" "}
              work with <span className="text-blue-500">Insurance</span>{" "}
              companies for your coverage
            </h2>

            {/* Short Descriptive Text Listing Insurance Providers */}
            <p className="text-gray-600 text-md md:text-lg text-center mx-auto max-w-2xl">
              At Radiant Dental & Orthodontic Centre, we accept a wide range of insurance providers to make your dental care more accessible.  
              We proudly work with <span className="text-blue-500 font-bold">Cigna, Britam, UAP, CIC & Bupa</span> to ensure dental health is accessible and stress free.
            </p>
          </div>
        </Fade>
      </header>

      {/* Centered & Scalable Logo Grid */}
      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 p-4">
          {insuranceLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center p-2">
              <img
                src={logo.src}
                className="object-contain w-20 sm:w-24 md:w-28 lg:w-32 h-auto"
                alt={logo.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insurance;

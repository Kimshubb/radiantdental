import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import img1 from "./Images/hero.webp"; 
import img2 from "./Images/hero2.webp";
import img3 from "./Images/hero3.webp";
import img4 from "./Images/hero4.webp";

const images = [img1, img2, img3, img4];

const captions = [
  { title: "Your Smile,", highlight: "Our Expertise", description: "From routine check-ups to complete smile makeovers, we blend artistry with advanced dental care." },
  { title: "More Than Just", highlight: "Dental Visits", description: "Step into a world where comfort meets cutting-edge care—cosmetic, restorative, pediatric, and emergency dentistry." },
  { title: "Healthy Smiles,", highlight: "Happier Lives", description: "We don't just fix teeth—we build confidence, restore health, and transform smiles for a lifetime." },
  { title: "Because Your Smile,", highlight: "Can't Wait!", description: "We're open on Sundays 7 AM - 1 PM—because dental care shouldn't wait. Book your appointment today!" }
];

const textVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } } };
const imageVariants = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 1.5, ease: "easeOut" } } };

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return; // Pause animation on hover
    const interval = setInterval(() => setCurrentIndex((prev) => (prev + 1) % images.length), 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <main className="relative overflow-hidden bg-white">
      <div name="home">
        <div className="mx-auto h-full px-4 py-10 sm:max-w-xl md:max-w-full md:px-24 md:py-36 lg:px-8">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            {/* Text Section */}
            <motion.div key={currentIndex} initial="hidden" animate="visible" variants={textVariants} className="lg:max-w-xl lg:pr-5">
              <h2 className="mt-24 mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-indigo-800 sm:text-8xl">
                {captions[currentIndex].title} <br />
                <span className="my-1 inline-block border-b-8 border-blue-500 font-bold text-indigo-800">
                  {captions[currentIndex].highlight}
                </span>
              </h2>
              <p className="text-base text-gray-800">{captions[currentIndex].description}</p>
              <div className="mt-10 flex flex-col items-center md:flex-row">
                <Link to="contact" smooth={true} duration={500} offset={-100}
                  className="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-blue-600 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 md:mr-4 md:mb-0 md:w-auto focus:outline-none hover:bg-blue-700">
                  Book Appointment
                </Link>
              </div>
            </motion.div>

            {/* Image Section */}
            <div className="relative hidden lg:ml-32 lg:block lg:w-1/2" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              <motion.div key={currentIndex} initial="hidden" animate="visible" variants={imageVariants}
                className="w-fit rounded-[6rem] mx-auto overflow-hidden rounded-tl-none rounded-br-none bg-blue-300">
                <img 
                  className="-mb-20 w-full h-[500px] md:h-[600px] lg:h-[700px] object-cover rounded-lg shadow-lg transition-opacity duration-1000"
                  src={images[currentIndex]} 
                  alt="dental professional"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
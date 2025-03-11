import React from "react";
import { useEffect } from "react";
import emailjs from '@emailjs/browser';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Insurance from "./components/Insurance";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import FAQs from "./components/FAQs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Blog from "./components/BlogPage";

export default function App() {
  useEffect(() => {
    emailjs.init("YOUR_PUBLIC_KEY");
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page (Keeps all original sections) */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <Insurance />
              <Features />
              <Team />
              <Testimonials />
              <FAQs />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Blog Page (Does not load homepage components) */}
         {/* Blog Page (Now includes Contact & Footer) */}
         <Route
          path="/blog"
          element={
            <>
              <Blog />
              <Contact />  {/* ✅ Contact form for Blog Page */}
              <Footer />   {/* ✅ Footer for Blog Page */}
            </>
          }
        />
      </Routes>
    </Router>
  );
}

import React, { useEffect, useState } from "react";
import { HelmetProvider } from "react-helmet-async"; // Import HelmetProvider
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
import BlogPost from "./components/BlogPosts";
import AccessRestricted from "./components/AccessRestricted";

export default function App() {
  const [showGate, setShowGate] = useState(true);
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!publicKey) {
      console.error("Missing EmailJS Public Key");
      return;
    }

    emailjs.init(publicKey);
    console.log("EmailJS initialized with Public Key");
  }, []);
  
  if (showGate) {
    return (
      <AccessRestricted
        onContinue={() => {
          setShowGate(false);
        }}
      />
    );
  }

  return (
    <HelmetProvider>
      {/* Wrap your App in HelmetProvider */}
      <Router>
        <Navbar />
        <Routes>
          {/* Home Page */}
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

          {/* Blog Page */}
          <Route
            path="/blog"
            element={
              <>
                <Blog />
                <Contact />
                <Footer />
              </>
            }
          />

          {/* Individual Blog Post Page */}
          <Route
            path="/blog/:id"
            element={
              <>
                <BlogPost />
                <Contact />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

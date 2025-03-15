import React, { useEffect } from "react";
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
import TypebotChat from "./components/TypebotChat"; 

export default function App() {
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!publicKey) {
      console.error("Missing EmailJS Public Key");
      return;
    }

    emailjs.init(publicKey);
    console.log("EmailJS initialized with:", publicKey);
  }, []);
  
  return (
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
              <TypebotChat /> 
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
              <TypebotChat />  
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
              <TypebotChat />  
            </>
          }
        />
      </Routes>
    </Router>
  );
}

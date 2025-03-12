import React, { useState, useEffect } from "react";
import { Link as ScrollLink, scroller } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setShowNavbar(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section if a hash exists in the URL
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const section = location.hash.replace("#", ""); // Remove #
      scroller.scrollTo(section, { smooth: true, duration: 500 });
    }
  }, [location]); // Run whenever location changes

  const handleNavigation = (link) => {
    if (location.pathname !== "/") {
      navigate(`/#${link}`); // Navigate to home with hash
    } else {
      scroller.scrollTo(link, { smooth: true, duration: 500 });
    }
  };

  const links = [
    { id: 1, link: "home", label: "Home", type: "scroll" },
    { id: 2, link: "service", label: "Services", type: "scroll" },
    { id: 3, link: "insurance", label: "Insurance", type: "scroll" },
    { id: 4, link: "team", label: "Team", type: "scroll" },
    { id: 6, link: "/blog", label: "Blog", type: "router" },
    { id: 5, link: "contact", label: "Book Now", type: "scroll", highlight: true },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 py-3 transition-all duration-300 ${
        showNavbar 
          ? "bg-white bg-opacity-95 backdrop-blur-sm shadow-md" 
          : "bg-transparent"
      }`} 
      style={{ zIndex: 9999 }}
    >
      {/* LOGO */}
      <ScrollLink to="home" className="flex items-center cursor-pointer text-2xl font-bold text-indigo-800" smooth={true} duration={500}>
        <span className="mr-2 text-xl text-blue-500">🦷</span> 
        <span className="bg-gradient-to-r from-blue-600 to-indigo-800 bg-clip-text text-transparent">
          RadiantDental
        </span>
      </ScrollLink>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex items-center space-x-6">
          {links.map(({ id, link, label, type, highlight }) => (
            <li key={id}>
              {type === "scroll" ? (
                <button 
                  onClick={() => handleNavigation(link)} 
                  className={`cursor-pointer font-semibold transition-colors duration-200 ${
                    highlight 
                      ? "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" 
                      : `hover:text-blue-600 ${showNavbar ? "text-indigo-800" : "text-indigo-800"}`
                  }`}
                >
                  {label}
                </button>
              ) : (
                <RouterLink 
                  to={link} 
                  className={`cursor-pointer font-semibold transition-colors duration-200 ${
                    showNavbar ? "text-indigo-800" : "text-indigo-800"
                  } hover:text-blue-600`}
                >
                  {label}
                </RouterLink>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden relative">
        <button 
          className="flex items-center focus:outline-none" 
          onClick={() => setShowMenu(!showMenu)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6 text-indigo-800" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {showMenu && (
          <ul className="absolute top-14 right-0 z-[9999] w-52 py-2 bg-white border border-blue-100 rounded-lg shadow-lg" onClick={() => setShowMenu(false)}>
            {links.map(({ id, link, label, type, highlight }) => (
              <li key={id} className="mx-2 my-1">
                {type === "scroll" ? (
                  <button 
                    onClick={() => handleNavigation(link)} 
                    className={`block w-full text-left px-4 py-2 font-semibold transition-colors duration-200 rounded ${
                      highlight 
                        ? "bg-blue-600 text-white hover:bg-blue-700" 
                        : "text-indigo-800 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    {label}
                  </button>
                ) : (
                  <RouterLink 
                    to={link} 
                    className="block w-full text-left px-4 py-2 font-semibold text-indigo-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 rounded"
                  >
                    {label}
                  </RouterLink>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
};

export default Navbar;
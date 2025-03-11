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
    { id: 5, link: "contact", label: "Book Now", type: "scroll" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 py-3 text-blue-900 transition-all ${showNavbar ? "bg-white shadow-md" : "bg-transparent"}`} style={{ zIndex: 9999 }}>
      {/* LOGO */}
      <ScrollLink to="home" className="flex items-center cursor-pointer text-2xl font-bold text-blue-900" smooth={true} duration={500}>
        <span className="mr-1 text-xl text-blue-500">🦷</span> RadiantDental
      </ScrollLink>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex items-center space-x-6">
          {links.map(({ id, link, label, type }) => (
            <li key={id}>
              {type === "scroll" ? (
                <button onClick={() => handleNavigation(link)} className={`cursor-pointer font-semibold hover:text-blue-400 ${showNavbar ? "text-blue-600" : "text-blue-900"}`}>
                  {label}
                </button>
              ) : (
                <RouterLink to={link} className="cursor-pointer font-semibold hover:text-blue-400">
                  {label}
                </RouterLink>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden relative">
        <button className="flex items-center focus:outline-none" onClick={() => setShowMenu(!showMenu)}>
          <svg className="h-6 w-6 text-blue-900" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {showMenu && (
          <ul className="absolute top-14 right-0 z-[9999] w-48 py-2 bg-white border border-gray-300 rounded shadow-md" onClick={() => setShowMenu(false)}>
            {links.map(({ id, link, label, type }) => (
              <li key={id}>
                {type === "scroll" ? (
                  <button onClick={() => handleNavigation(link)} className="block px-4 py-2 font-semibold mt-1 text-blue-900 hover:text-blue-500">
                    {label}
                  </button>
                ) : (
                  <RouterLink to={link} className="block px-4 py-2 font-semibold mt-1 text-blue-900 hover:text-blue-500">
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

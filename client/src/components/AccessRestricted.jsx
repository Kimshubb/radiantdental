import React, { useEffect, useState } from "react";

const AccessRestricted = ({ onContinue }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🔒 Access Restricted</h1>
      <p style={styles.subtext}>This website is currently unavailable pending payment.</p>

      {/* YouTube Video 
      <div style={styles.videoContainer}>
        <iframe
          width="100%"
          height="360"
          src="https://www.youtube.com/watch?v=FKSvdlFO638"
          title="Access Information"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>*/}

      {/* Profile Section */}
      <div
        style={{
          ...styles.profileSection,
          flexDirection: isMobile ? "column" : "row",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        <img
          src="/images/selim.jpeg"
          alt="Profile"
          style={styles.profileImage}
        />
        <div style={styles.profileText}>
          <h2>Elvis Selim</h2>
        <p>
        Hi, I’m  <strong>Full-Time Fraudulent Tech Bro.</strong> When I’m not juggling a dozen fake roles, I’m on LinkedIn hunting gullible junior devs to outsource the work I pretend to do—under shell companies named “DDA Systems Ltd, Kenya, Invesys Technologies, USA and JMT MEDIA GROUP LLc
        <p><strong>Contact:</strong> danbrown9312@gmail.com</p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/elvis-selim-81017a18b/" target="_blank" rel="noopener noreferrer">Lets Connect</a></p>
        <div>
            <p><strong>Affiliated Companies:</strong></p>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                <li>
                <a href="https://www.linkedin.com/company/invesis-usa/about/" target="_blank" rel="noopener noreferrer">
                    Invesys, USA
                </a>
                </li>
                <li>
                <a href="https://www.linkedin.com/company/dda-systems-ltd/about/" target="_blank" rel="noopener noreferrer">
                    DDA Systems Ltd, Kenya
                </a>
                </li>
                <li>
                <a href="https://www.linkedin.com/company/jmt-media-group-llc/about/" target="_blank" rel="noopener noreferrer">
                    JMT MEDIA GROUP LLC
                </a>
                </li>
                <li>
                <a href="https://www.linkedin.com/company/radiant-dental-centre/about/" target="_blank" rel="noopener noreferrer">
                    Radiant Dental & Orthodontic Clinic
                </a>
                </li>
            </ul>
         </div>

      </div>
    </div>

    {/* Continue Button 
    <button onClick={onContinue} style={styles.button}>
        Proceed Anyway
      </button>*/}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "40px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "10px",
  },
  subtext: {
    fontSize: "1.1rem",
    marginBottom: "30px",
    color: "#444",
  },
  videoContainer: {
    margin: "0 auto 40px",
    maxWidth: "640px",
    width: "90%",
  },
  profileSection: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    maxWidth: "1000px",
    margin: "0 auto 40px",
    padding: "20px",
    gap: "30px",
    flexWrap: "wrap",
  },
  profileImage: {
    width: "160px",
    height: "160px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid #ccc",
    flexShrink: 0,
  },
  profileText: {
    flex: 1,
    minWidth: "280px",
  },
  button: {
    padding: "12px 30px",
    fontSize: "16px",
    backgroundColor: "#222",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "20px",
  }
};

export default AccessRestricted;
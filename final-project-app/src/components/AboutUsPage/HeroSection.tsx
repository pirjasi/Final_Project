import React from "react";
import "./HeroSection.css";
import heroImage from "../../assets/aboutbackground.png";

const HeroSection: React.FC = () => {
  return (
    <section className="h-sections">
      <div className="h-overlay"></div>
      <img src={heroImage} alt="Cybersecurity" className="hero-bg" />
      <div className="h-content">
        <h1 className="h-title">
          <span className="highlight">Protecting</span> the digital future
          through innovative cybersecurity{" "}
          <span className="highlight">solutions</span>
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;

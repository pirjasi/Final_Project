import React from "react";
import "./HeroIndustries.css";

const HeroIndustries: React.FC = () => {
  return (
    <section className="HeroIndustries">
      <div className="HeroIndustries-overlay">
        <div className="HeroIndustries-content">
          <h1 className="HeroIndustries-title">
            <span className="HeroIndustries-highlight">SIEM</span> Threat
            Detection & Response:
          </h1>
          <p className="HeroIndustries-subtitle">
            <div className="vertical-lineHeroIndustries"></div>
            Our 24/7 monitoring services use AI-powered tools to detect
            <br /> and neutralize threats before they can harm your business.
          </p>
          <button className="HeroIndustries-demo-btn">Get a Demo</button>
        </div>
      </div>
    </section>
  );
};

export default HeroIndustries;

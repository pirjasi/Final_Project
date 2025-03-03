import React from "react";
import "./SiemThreat.css";

const SiemThreat: React.FC = () => {
  return (
    <section className="siem-hero">
      <div className="siem-hero-overlay">
        <div className="siem-hero-content">
          <h1 className="siem-title">
            <span className="siem-highlight">SIEM</span> Threat Detection &
            Response:
          </h1>
          <p className="siem-subtitle">
            <div className="vertical-lineSiem"></div>
            Our 24/7 monitoring services use AI-powered tools to detect
            <br /> and neutralize threats before they can harm your business.
          </p>
          <button className="siem-demo-btn">Get a Demo</button>
        </div>
      </div>
    </section>
  );
};

export default SiemThreat;

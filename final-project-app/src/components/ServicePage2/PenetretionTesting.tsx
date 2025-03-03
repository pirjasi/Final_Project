import React from "react";
import "./PenetretionTesting.css";
const PenetretionTesting: React.FC = () => {
  return (
    <section className="penetretion-hero">
      <div className="penetretion-hero-overlay">
        <div className="penetretion-hero-content">
          <h1 className="penetretion-title">
            <span className="penetretion-highlight">Penetretion </span> Testing
          </h1>
          <p className="penetretion-subtitle">
            <div className="vertical-linePenetration"></div>
            Identify and eliminate vulnerabilities in your network with our
            comprehensive penetration testing services.
          </p>
          <button className="siem-demo-btn">Get a Demo</button>
        </div>
      </div>
    </section>
  );
};

export default PenetretionTesting;

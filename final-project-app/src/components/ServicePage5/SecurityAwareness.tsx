import React from "react";
import "./SecurityAwareness.css";

const SecurityAwareness: React.FC = () => {
  return (
    <section className="Security-hero">
      <div className="Security-hero-overlay">
        <div className="Security-hero-content">
          <h1 className="Security-title">
            <span className="Security-highlight">Security </span> Awareness
            Training
          </h1>

          <p className="Security-subtitle">
            <div className="vertical-lineSecurity"></div>
            We offer end-to-end network security solutions, optimizing your
            infrastructure while securing it against unauthorized access.™"
          </p>
          <button className="Security-demo-btn">Get a Demo</button>
        </div>
      </div>
    </section>
  );
};

export default SecurityAwareness;

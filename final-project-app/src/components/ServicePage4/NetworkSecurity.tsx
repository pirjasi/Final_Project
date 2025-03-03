import React from "react";
import "./NetworkSecurity.css";

const NetworkSecurity: React.FC = () => {
  return (
    <section className="Network-hero">
      <div className="Network-hero-overlay">
        <div className="Network-hero-content">
          <h1 className="Network-title">
            <span className="Network-highlight">Network </span> Security
          </h1>

          <p className="Network-subtitle">
            <div className="vertical-lineNetwork"></div>
            We offer end-to-end network security solutions, optimizing your
            infrastructure while securing it against unauthorized access.™"
          </p>
          <button className="Network-demo-btn">Get a Demo</button>
        </div>
      </div>
    </section>
  );
};

export default NetworkSecurity;

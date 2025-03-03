import React from "react";
import "./OurPartner.css";

const OurPartner: React.FC = () => {
  return (
    <section className="OurPartner-hero">
      <div className="OurPartner-hero-overlay">
        <div className="OurPartner-hero-content">
          <h1 className=".OurPartner-section h1">
            Meet Our <span className="OurPartner-highlight">Partners</span> &
            <span className="OurPartner-highlight"> Collaborations</span>
          </h1>

          <p className="OurPartner-subtitle">
            At Cybernetix Global Defense, we are proud to collaborate with
            industry leaders and organizations to provide the best cybersecurity
            solutions for our clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurPartner;

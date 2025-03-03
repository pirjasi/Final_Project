import React from "react";
import "./IncidentResponse.css";
const IncidentResponse: React.FC = () => {
  return (
    <section className="Incident-Response-hero">
      <div className="Incident-Response-hero-overlay">
        <div className="Incident-Response-hero-content">
          <h1 className="Incident-Response-title">
            <span className="Incident-Response-highlight">Incident </span>{" "}
            Response
          </h1>

          <p className="Incident-Response-subtitle">
            <div className="vertical-lineIncidentResponse"></div>
            In the event of a breach, our expert team reacts swiftly to minimize
            damage and restore your systems quickly.
          </p>
          <button className="Incident-Response-demo-btn">Get a Demo</button>
        </div>
      </div>
    </section>
  );
};

export default IncidentResponse;

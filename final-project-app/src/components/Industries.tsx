import React from "react";
import "./Industries.css";
import {
  FaChartLine,
  FaHeartbeat,
  FaUniversity,
  FaShoppingBag,
  FaGamepad,
  FaBook,
} from "react-icons/fa";

const Industries: React.FC = () => {
  return (
    <section className="industries-section">
      <h2 className="industries-title">Industries We Serve</h2>

      <h3 className="industries-subtitle">
        Protecting Critical Industries with Cutting-Edge Cybersecurity Solutions
      </h3>

      <div className="industries-list">
        <div className="industry-item">
          <FaChartLine className="industry-icon" />
          <span>Finance</span>
        </div>

        <div className="line"></div>
        <div className="industry-item">
          <FaHeartbeat className="industry-icon" />
          <span>Healthcare</span>
        </div>

        <div className="line"></div>
        <div className="industry-item">
          <FaUniversity className="industry-icon" />
          <span>Government</span>
        </div>

        <div className="line"></div>
        <div className="industry-item">
          <FaShoppingBag className="industry-icon" />
          <span>Retail</span>
        </div>

        <div className="line"></div>
        <div className="industry-item">
          <FaGamepad className="industry-icon" />
          <span>eGame</span>
        </div>

        <div className="line"></div>
        <div className="industry-item">
          <FaBook className="industry-icon" />
          <span>Education</span>
        </div>
      </div>

      <button className="industry-btn">Get Started</button>
    </section>
  );
};

export default Industries;

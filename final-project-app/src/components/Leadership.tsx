import React from "react";
import "./Leadership.css";
import imgcard1 from "../assets/imgcard1.jpg";
import imgcard2 from "../assets/imgcard2.jpg";
import imgcard3 from "../assets/imgcard3.jpg";
import { FaArrowRight } from "react-icons/fa";

const Lidership: React.FC = () => {
  return (
    <section className="lidership-section">
      <div className="lidership-header">
        <h2 className="lidership-title">Our Lidership Team</h2>
        <h3 className="lidership-subtitle">
          Meet the leaders behind our mission to protect businesses from cyber
          threats.
        </h3>
      </div>

      <div className="lidership-cards">
        <div className="lidership-card">
          <img
            src={imgcard1}
            alt="Furkan Bajrami"
            className="lidership-image"
          />
          <h4 className="lidership-name">Furkan Bajrami</h4>
          <p className="lidership-description">
            Lorem ipsum dolor sit amet consectetur. Auctor habitasse tortor id.
          </p>
          <div className="arrow-circle">
            <FaArrowRight className="arrow-icon" />
          </div>
        </div>

        <div className="lidership-card">
          <img
            src={imgcard2}
            alt="Petar Ninovski"
            className="lidership-image"
          />
          <h4 className="lidership-name">Petar Ninovski</h4>
          <p className="lidership-description">
            Petar has over 10 years of experience in cybersecurity and IT
            consulting.
          </p>
          <div className="arrow-circle">
            <FaArrowRight className="arrow-icon" />
          </div>
        </div>

        <div className="lidership-card">
          <img src={imgcard3} alt="Lena Muller" className="lidership-image" />
          <h4 className="lidership-name">Lena Muller</h4>
          <p className="lidership-description">
            With over 12 years of experience in cybersecurity and technology
            development.
          </p>
          <div className="arrow-circle">
            <FaArrowRight className="arrow-icon" />
          </div>
        </div>
      </div>

      <span className="lidership-link">Meet the Rest of the Team</span>
    </section>
  );
};

export default Lidership;

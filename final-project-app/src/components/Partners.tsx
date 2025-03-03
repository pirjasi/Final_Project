import React from "react";
import "./Partners.css";

import logo1 from "../assets/logo1.svg"; 
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/netflix.png";
import logo4 from "../assets/DB.png";
import logo5 from "../assets/google.png";
import logo6 from "../assets/amazone.png";

const Partners: React.FC = () => {
  return (
    <section className="partners-section">
     
      <h2 className="partners-title">Our Trusted Partners</h2>

      
      <div className="partners-logos">
        <img src={logo1} alt="Partner 1" className="partners-logo" />
        <img src={logo2} alt="Partner 2" className="partners-logo" />
        <img src={logo3} alt="Partner 3" className="partners-logo" />
        <img src={logo4} alt="Partner 4" className="partners-logo" />
        <img src={logo5} alt="Partner 5" className="partners-logo" />
        <img src={logo6} alt="Partner 6" className="partners-logo" />
      </div>
    </section>
  );
};

export default Partners;

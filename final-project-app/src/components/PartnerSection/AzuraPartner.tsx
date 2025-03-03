import React from "react";
import "./AzuraPartner.css";

const AzuraPartner: React.FC = () => {
  return (
    <section className="AzuraPartner-section">
      <div className="AzuraPartner-content">
        <div className="AzuraPartner-box">
          <div className="AzuraPartner-images">
            <img src="/image2/frame4.png" alt="People working" />
            <img src="/image2/frame5.png" alt="Office space" />
          </div>
          <div className="AzuraPartner-text">
            <h2>
              Partnership with{" "}
              <span className="AzuraPartner-highlight">Azure</span>
            </h2>
            <p>
              Our partnership with Brainster enables us to interact and train
              the next generation of cybersecurity professionals. Together, we
              bring fresh ideas and cutting-edge solutions to the forefront of
              cyber defense. By combining Brainster’s forward-thinking education
              programs with our industry expertise, we are building a stronger,
              more resilient cybersecurity workforce. This collaboration ensures
              that our talents stay ahead of emerging threats, equipped with the
              skills and knowledge to protect businesses and individuals in an
              ever-evolving digital landscape.
            </p>
          </div>
        </div>

        <div className="ViewAllPartners">
          <a href="/partners">View All Partners</a>
        </div>
      </div>
    </section>
  );
};

export default AzuraPartner;

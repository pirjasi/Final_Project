import React from "react";
import "./InquirySection.css";

const WeProtect: React.FC = () => {
  return (
    <div className="we-protect-container">
      <div className="industry-cards"></div>

      <div className="industry-inquiry-section">
        <div className="inquiry-text">
          <h2>Not sure if we cover your industry?</h2>
          <p>
            Cyber threats are constantly evolving, and every industry faces
            unique challenges. If you don’t see your sector listed or want to
            learn more about how we can tailor our solutions to your specific
            needs, we’re here to help. Contact us today, and let’s discuss how
            we can protect your business.
          </p>
        </div>
        <div className="inquiry-form">
          <input type="email" placeholder="Your Email Address" />
          <button className="security-btn">Discuss Your Security Needs</button>
        </div>
      </div>
    </div>
  );
};

export default WeProtect;

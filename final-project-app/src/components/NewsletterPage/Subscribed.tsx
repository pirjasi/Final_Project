import React from "react";
import "./Subscribed.css";

const Subscribed: React.FC = () => {
  return (
    <div className="subscribed-section">
      <div className="subscribed-content">
        <p className="subscribed-text">
          <span className="highlight">
            Still haven't subscribed to our Newsletter.
          </span>{" "}
          Sign Up today and stay informed about online security and all the ways
          you can protect yourself or your business.
        </p>
      </div>
      <div className="subscribed-form">
        <input
          type="email"
          placeholder="Your Email Address"
          className="email-input"
        />
        <button className="subscribe-btn">Join for Free</button>
      </div>
    </div>
  );
};

export default Subscribed;

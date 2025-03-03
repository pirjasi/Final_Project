import React from "react";
import "./ReachOut.css";

const ReachOut: React.FC = () => {
  return (
    <div className="section-wrapper">
      <div className="line"></div>
      <div className="section-container">
        <p>
          Reach out to our team at CGD, and we’ll help you protect your digital
          future.
        </p>
        <div className="input-container">
          <input type="email" placeholder="Email Address" />
          <button>Submit</button>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default ReachOut;

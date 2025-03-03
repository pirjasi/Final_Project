import React from "react";
import "./Certification.css";
import isoLogo from "../assets/path7.png";

const Certification: React.FC = () => {
  return (
    <div className="certification-container">
      <div className="iso-section">
        <div className="iso-content">
          <img src={isoLogo} alt="ISO Logo" className="iso-logo" />

          <div className="iso-text">
            <h2>ISO Certification</h2>
            <p className="iso-paragraph">
              At <span className="highlight2">CYBERWARE Global Defense</span>,
              we are proud to be ISO certified, demonstrating our commitment to
              the highest standards of cybersecurity. Our certification reflects
              our dedication to protecting your data and ensuring robust
              security practices across all operations. Trust us to safeguard
              your digital assets with proven excellence.
            </p>

            <div className="iso-list">
              <div className="iso-item">
                <span>
                  ISO/IEC 27000 – Information security management systems
                </span>
                <span className="arrow">›</span>
              </div>
              <div className="iso-item">
                <span>
                  ISO/IEC 27001 – Information technology – Security Techniques –
                  Information security management
                </span>
                <span className="arrow">›</span>
              </div>
              <div className="iso-item">
                <span>
                  ISO/IEC 27002 – Code of practice for information security
                  controls
                </span>
                <span className="arrow">›</span>
              </div>
            </div>
            <button className="certificates-btn">See All Certificates</button>
          </div>
        </div>
      </div>

      <div className="newsletter-section">
        <h3>
          Stay informed with the latest threat insights delivered directly to
          your inbox through our Newsletter.
        </h3>
        <div className="newsletter-form">
          <input type="email" placeholder="Your Email Address" />
          <button className="subscribe-btn">Join for Free</button>
        </div>
      </div>
    </div>
  );
};

export default Certification;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.red.png";
import pathImage1 from "../assets/path11.png";
import pathImage2 from "../assets/path2.png";
import pathImage3 from "../assets/path17.png";
import pathImage4 from "../assets/path9.png";
import pathImage5 from "../assets/path13.png";

const Header: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="header">
      <div className="top-bar">
        <div className="logo-container">
          <img src={logo} alt="CyberSecure Logo" className="logo" />
        </div>

        <div className="top-options">
          <button className="btn emergency">Emergency Response Plan</button>
          <button className="btn support">Support</button>

          <div className="language-container">
            <i className="bi bi-globe"></i>
            <select className="language-selector">
              <option value="EN">EN</option>
              <option value="AL">AL</option>
              <option value="DE">DE</option>
            </select>
          </div>
        </div>
      </div>

      <nav className="bottom-nav">
        <ul className="nav-links">
          <div className="left-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About </Link>
            </li>

            <li
              className="dropdown"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <a href="#" className="dropdown-toggle">
                Services ▼
              </a>

              {isServicesOpen && (
                <div className="dropdown-menu">
                  <div className="dropdown-grid">
                    <div className="dropdown-item">
                      <img src={pathImage1} alt="Path Image1" />
                      <h3 className="main-title">SIEM Threat Detection</h3>
                      <h4>
                        Our 24/7 monitoring services use AI-powered tools to
                        detect and neutralize threats before they can harm your
                        business.
                      </h4>
                      <ul>
                        <li>Define Security Goals</li>
                        <li>Select a SIEM Tool</li>
                        <li>Establish Data Sources</li>
                        <li>Normalize Data</li>
                        <li>Create Detection Rules</li>
                        <li>Implement Incident Response Procedures</li>
                        <li>Review and Update </li>
                      </ul>
                      <button className="explore-btn">
                        <span className="explore-text">Explore</span>
                        <Link to="/siem-threat">SiemThreat Detection</Link>
                        <span className="explore-icon">→</span>
                      </button>
                    </div>
                    <div className="dropdown-item">
                      <img src={pathImage2} alt="Path Image1" />
                      <h3 className="main-title">Penetration Testing</h3>
                      <h4>
                        "Identify and eliminate vulnerabilities in your network
                        with our comprehensive penetration testing services."
                      </h4>
                      <ul>
                        <li>Pre-Engagement Interactions</li>
                        <li>Reconnaissance</li>
                        <li>Scanning</li>
                        <li>Vulnerability Assessment</li>
                        <li>Exploitation</li>

                        <li>Post-Exploitation</li>
                        <li>Reporting</li>
                      </ul>
                      <button className="explore-btn">
                        <span className="explore-text">Explore</span>
                        <Link to="/penetretion">Penetration Testing</Link>
                        <span className="explore-icon">→</span>
                      </button>
                    </div>
                    <div className="dropdown-item">
                      <img src={pathImage3} alt="Path Image3" />
                      <h3 className="main-title">Incident Response</h3>
                      <h4>
                        In the event of a breach, our expert team reacts swiftly
                        to minimize damage and restore your systems quickly.
                      </h4>
                      <ul>
                        <li>Preparation</li>
                        <li>Post-Incident Review</li>
                        <li>Detection and Analysis</li>
                        <li>Prioritization</li>
                        <li>Containment</li>
                        <li>Eradication</li>
                        <li>Recovery</li>
                        <li>Post-Incident Review</li>
                      </ul>
                      <button className="explore-btn">
                        <span className="explore-text">Explore</span>
                        <Link to="/Response">Incident Response</Link>
                        <span className="explore-icon">→</span>
                      </button>
                    </div>
                    <div className="dropdown-item">
                      <img src={pathImage4} alt="Path Image4" />
                      <h3 className="main-title">Network Security</h3>
                      <h4>
                        We offer end-to-end network security solutions,
                        optimizing your infrastructure while securing it against
                        unauthorized access.
                      </h4>
                      <ul>
                        <li>Perform a Network Audit</li>
                        <li>Deploy Security Devices</li>
                        <li>Establish Strong Access Controls</li>
                        <li>Update Security Software</li>
                        <li>Secure Network Hardware</li>
                        <li>Get Buy-in from Leadership</li>
                        <li>Recovery</li>
                      </ul>
                      <button className="explore-btn">
                        <span className="explore-text">Explore</span>
                        <Link to="/Network">Network Security</Link>
                        <span className="explore-icon">→</span>
                      </button>
                    </div>
                    <div className="dropdown-item">
                      <img src={pathImage5} alt="Path Image5" />
                      <h3 className="main-title">
                        Security Awareness Training
                      </h3>
                      <h4>
                        Empower your employees to recognize and respond to
                        potential cyber threats. Our comprehensive security
                        awareness programs equip your workforce with the
                        knowledge they need to prevent attacks.
                      </h4>
                      <ul>
                        <li>Assess Organizational Needs</li>
                        <li>Get Buy-in from Leadership</li>
                        <li>Develop a Tailored Training Program</li>
                        <li>Implement Training Delivery Methods</li>
                        <li>Recovery</li>
                        <li>Conduct Regular Training Sessions</li>
                        <li>Evaluate and Measure Effectiveness</li>

                        <li>Implement Incident Response Procedures</li>
                      </ul>
                      <button className="explore-btn">
                        <span className="explore-text">Explore</span>
                        <Link to="/Security"> Security Awareness</Link>
                        <span className="explore-icon">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </li>

            <li>
              <Link to="/Industries2">Industries▼</Link>
            </li>
            <li>
              <Link to="/partner">Partnerships▼</Link>
            </li>
          </div>

          <div className="right-nav">
            <li>
              <Link to="/contactus">Contact</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/newsletter">Newsletter</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

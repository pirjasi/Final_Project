import React from "react";
import "./TrendingThreats.css";

const TrendingThreats: React.FC = () => {
  return (
    <div className="trending-threats">
      <div className="threats-container">
        <div className="threat-card">
          <img
            src="/image2/bookmark2.png"
            className="bookmark-icon"
            alt="Bookmark"
          />
          <p className="threat-category">
            Iranian Hackers Target Critical Infrastructure
          </p>
          <p className="threat-date">October 20, 2024</p>
          <h3 className="threat-title">
            Iranian Hackers Breaching Critical Infrastructure for Credential
            Theft
          </h3>
          <p className="threat-description">
            Recent reports reveal that Iranian hackers are infiltrating critical
            infrastructure organizations to collect credentials and data.
          </p>
          <a href="#" className="trending">
            Read More
          </a>
        </div>

        <div className="threat-card">
          <img
            src="/image2/bookmark.png"
            className="bookmark-icon"
            alt="Bookmark"
          />
          <p className="threat-category">
            CIA's Views on Exploited Oracle Vulnerabilities
          </p>
          <p className="threat-date">October 20, 2024</p>
          <h3 className="threat-title">
            CIA Warns of Exploited Oracle Vulnerabilities
          </h3>
          <p className="threat-description">
            The Cybersecurity and Infrastructure Security Agency has issued a
            warning about a recent increase in the exploitation of Oracle
            vulnerabilities.
          </p>
          <a href="#" className="trending">
            Read More
          </a>
        </div>

        <div className="threat-card">
          <img
            src="/image2/bookmark2.png"
            className="bookmark-icon"
            alt="Bookmark"
          />
          <p className="threat-category">
            Arrest of Notorious Hacker in Brazil
          </p>
          <p className="threat-date">October 20, 2024</p>
          <h3 className="threat-title">
            Arrest of USDoD Hacker Linked to Major Data Breaches
          </h3>
          <p className="threat-description">
            Brazilian authorities have arrested a notorious hacker known as
            USDOD linked to significant breaches involving National Public Data
            and InfraGard.
          </p>
          <a href="#" className="trending">
            Read More
          </a>
        </div>
      </div>

      <div className="read-more-section">
        <p className="read-more-text">Read More</p>
        <div className="trendinghorizontal-line">
          <span className="progress-bar"></span>
        </div>
        <div className="navigation-arrows">
          <button className="arrow-btn left-arrow">⬅</button>
          <button className="arrow-btn right-arrow">➡</button>
        </div>
      </div>
    </div>
  );
};

export default TrendingThreats;

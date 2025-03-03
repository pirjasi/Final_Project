import React from "react";
import "./NewsLetterPage.css";

const NewsLetterPage: React.FC = () => {
  return (
    <div className="newsletter-page">
      <section className="newsletter-hero">
        <div className="newsletter-overlay"></div>
        <div className="newsletter-content">
          <p className="newsletter-subtitle">
            Phishing Attacks and Prevention Strategies.
          </p>
          <h1 className="newsletter-title">
            The Evolving Landscape of Phishing <br />
            Attacks: What You Need to Know
          </h1>
          <div className="newsletter-meta">
            <p className="newsletter-date">Posted: October 20, 2024</p>
            <p className="newsletter-author">By: Cybersecurity Insights Team</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsLetterPage;

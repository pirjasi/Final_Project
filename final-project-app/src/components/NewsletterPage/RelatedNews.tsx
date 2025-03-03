import React from "react";
import "./RelatedNews.css";

const RelatedNews: React.FC = () => {
  return (
    <div className="content-wrapper">
      <aside className="related-news">
        <h2 className="section-title">Related News</h2>
        <div className="news-list">
          <div className="news-card highlight">
            <img
              src="/image2/bookmark2.png"
              className="bookmark-icon"
              alt="Bookmark"
            />
            <p className="news-category">
              Iranian Hackers Target Critical Infrastructure
            </p>
            <p className="news-date">October 20, 2024</p>
            <h3 className="news-title">
              Iranian Hackers Breaching Critical Infrastructure for Credential
              Theft
            </h3>
            <p className="news-description">
              Recent reports reveal that Iranian hackers are infiltrating
              critical infrastructure organizations to collect credentials and
              network data.
            </p>
            <a href="#" className="read-more">
              Read More
            </a>
          </div>

          <div className="news-card">
            <img
              src="/image2/bookmark.png"
              className="bookmark-icon"
              alt="Bookmark"
            />
            <p className="news-category">
              CIA's Views on Exploited Oracle Vulnerabilities
            </p>
            <p className="news-date">October 20, 2024</p>
            <h3 className="news-title">
              CIA Warns of Exploited Oracle Vulnerabilities
            </h3>
            <p className="news-description">
              The Cybersecurity and Infrastructure Security Agency has issued a
              warning about a recent increase in the exploitation of Oracle
              vulnerabilities.
            </p>
            <a href="#" className="read-more">
              Read More
            </a>
          </div>

          <div className="news-card">
            <img
              src="/image2/bookmark2.png"
              className="bookmark-icon"
              alt="Bookmark"
            />
            <p className="news-category">
              Arrest of Notorious Hacker in Brazil
            </p>
            <p className="news-date">October 20, 2024</p>
            <h3 className="news-title">
              Arrest of USDoD Hacker Linked to Major Data Breaches
            </h3>
            <p className="news-description">
              Brazilian authorities have arrested a notorious hacker known as
              USDOD linked to significant breaches involving National Public
              Data and InfraGard.
            </p>
            <a href="#" className="read-more">
              Read More
            </a>
          </div>

          <div className="contributor-container">
            <h2 className="contributor-title">
              Want to become a <br /> Contributor
            </h2>
            <div className="contributor-card">
              <input
                type="email"
                className="contributor-input"
                placeholder="Your Email"
              />
              <textarea
                className="contributor-textarea"
                placeholder="Tell us Something About Yourself"
              ></textarea>
              <button className="contributor-button">Send</button>
            </div>
          </div>
        </div>
      </aside>

      <div className="vertical-separator"></div>

      <main className="main-content">
        <div className="summary-container">
          <h2 className="summary-title">Summary</h2>
          <p>
            Phishing attacks have become increasingly sophisticated, leveraging
            social engineering tactics and advanced technology to deceive
            individuals and organizations. This report examines the latest
            trends in phishing, highlights notable case studies, and provides
            actionable prevention strategies to safeguard digital assets.
          </p>
        </div>

        <h2>Key Trends in Phishing Attacks</h2>
        <ul>
          <li>
            <strong>Spear Phishing Campaigns:</strong> Unlike traditional
            phishing, spear phishing targets specific individuals or
            organizations. Attackers often gather information from social media
            or company websites to craft personalized messages that appear
            legitimate.
          </li>
          <li>
            <strong>AI-Powered Phishing Attacks:</strong> Cybercriminals are
            increasingly utilizing AI tools to automate phishing campaigns,
            making them more efficient and harder to detect.
          </li>
          <li>
            <strong>Multi-Channel Attacks:</strong> Phishing attacks are no
            longer limited to email. Attackers now use SMS (smishing), social
            media, and even voice calls (vishing).
          </li>
        </ul>

        <div className="case-studies">
          <h2 className="case-title">Notable Case Studies</h2>
          <div className="case-study">
            <p className="case-heading">
              <strong>Case Study 1:</strong>{" "}
              <span>Targeting Financial Institutions</span>
            </p>
            <p className="case-description">
              In early 2024, a major bank fell victim to a sophisticated spear
              phishing attack that compromised customer data. Attackers
              impersonated bank representatives and sent emails requesting
              sensitive information, leading to significant financial losses.
            </p>
          </div>

          <div className="case-study">
            <p className="case-heading">
              <strong>Case Study 2:</strong>{" "}
              <span>Ransomware via Phishing Links</span>
            </p>
            <p className="case-description">
              A healthcare organization experienced a ransomware attack after
              employees clicked on a malicious link in an email disguised as a
              routine update. The attack encrypted critical patient data,
              causing operational disruptions.
            </p>
          </div>
        </div>

        <h2>Prevention Strategies</h2>
        <p>
          To combat the rising threat of phishing attacks, organizations should
          implement the following strategies:
        </p>

        <div className="prevention-strategies">
          <h3>1. Employee Training Programs</h3>
          <p>
            Regular training sessions on recognizing phishing attempts can
            empower employees to identify suspicious emails and links.
            Incorporating simulated phishing exercises can reinforce learning.
          </p>

          <h3>2. Multi-Factor Authentication (MFA)</h3>
          <p>
            Implementing MFA adds an extra layer of security, making it more
            difficult for attackers to gain unauthorized access even if
            credentials are compromised.
          </p>

          <h3>3. Email Filtering Solutions</h3>
          <p>
            Investing in advanced email filtering solutions can help detect and
            block phishing emails before they reach employees' inboxes.
          </p>
        </div>

        <h2>Conclusion</h2>
        <p className="conclusion-section">
          As phishing attacks evolve in complexity and frequency, organizations
          must remain vigilant and proactive in their defense strategies. By
          understanding the latest trends and implementing robust prevention
          measures, businesses can significantly reduce their risk of falling
          victim to these deceptive tactics.
        </p>
      </main>
    </div>
  );
};

export default RelatedNews;

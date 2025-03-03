import React from "react";
import "./Footer.css";
import logoFooter from "../assets/logofooter.png";
import cert1 from "../assets/footer1.png";
import cert2 from "../assets/footer2.png";
import cert3 from "../assets/footer3.png";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img
            src={logoFooter}
            alt="Cyberware Global Defense Logo"
            className="footer-logo"
          />
          <div className="certifications-container">
            <div className="certifications">
              <img src={cert1} alt="Certification Badge 1" />
              <img src={cert2} alt="Certification Badge 2" />
            </div>
            <div className="cert-separate">
              <img
                src={cert3}
                alt="Certification Badge 3"
                className="cert3"
                id="certification3"
              />
            </div>
          </div>
        </div>

        <div className="footer-middle">
          <nav className="footer-links">
            <div>
              <h4>Services</h4>
              <ul>
                <li>SIEM-24/7 Threat Monitoring</li>
                <li>Penetration Testing</li>
                <li>Incident Management</li>
              </ul>
            </div>
            <div>
              <h4>About Us</h4>
              <ul>
                <li>Mission Statement</li>
                <li>Our Story</li>
                <li>Our Expertise</li>
                <li>Partnerships</li>
              </ul>
            </div>
            <div>
              <h4>Team</h4>
              <ul>
                <li>Co-Founder & CXX</li>
                <li>Cybersecurity Specialists</li>
                <li>Security Awareness Advisors</li>
              </ul>
            </div>
            <div>
              <h4>Our Values</h4>
              <ul>
                <li>Innovation</li>
                <li>Trust</li>
                <li>Excellence</li>
                <li>Collaboration</li>
              </ul>
            </div>
            <div>
              <h4>Industries We Serve</h4>
              <ul>
                <li>Finance</li>
                <li>Healthcare</li>
                <li>Government</li>
                <li>Retail</li>
                <li>eGaming</li>
                <li>Education</li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="footer-right">
          <h3 className="footer-heading">
            Contact <span>us</span>
          </h3>
          <div className="contact-container">
            {/* Contact Form */}
            <form className="contact-form">
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <textarea
                name="message"
                placeholder="Message"
                required
              ></textarea>
              <div className="checkbox">
                <input type="checkbox" id="newsletter" name="newsletter" />
                <label htmlFor="newsletter">
                  I would like to receive the newsletter.
                </label>
              </div>
              <button type="submit">Submit</button>
            </form>

            {/* Contact Info & Map */}
            <div className="contact-info">
              <iframe
                className="contact-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5325.840792726329!2d11.578698993812475!3d48.131058499366624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ddf7d32f8c5d5%3A0x49216a90450b2d89!2sDeutsches%20Museum!5e0!3m2!1sen!2s!4v1740572482439!5m2!1sen!2s"
              ></iframe>
              <p>📍 Berlin, Germany</p>
              <p>📞 0001122333</p>
              <p>✉ info@cybergt.com</p>
            </div>
          </div>
        </div>
      </div>

      <section className="footer-bottom">
        <div className="legal-section">
          <a href="/legal-notice">Legal Notice</a>
          <a href="/data-protection">Data Protection</a>
          <a href="/terms-of-use">Terms of Use</a>
        </div>
        <div className="copyright-section">
          <p>© Cyberware Global Defense</p>
        </div>
      </section>
    </footer>
  );
};
export default Footer;

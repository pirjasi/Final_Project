import React from "react";
import "./ContactUsSection.css";

const ContactUsSection: React.FC = () => {
  return (
    <section className="contactus-section">
      <h2 className="contact-header">
        Your Cybersecurity Experts – Securing the Future Today
      </h2>

      <div className="contactus-container">
        <div className="contactus-info">
          <h1 className="contactus-title">Contact us.</h1>
          <p>We are here to help you secure your future.</p>

          <p>Email: info@cybersecure.com</p>
          <p>Phone: +1 234 456 789</p>
          <p>Address: Street, North America</p>

          <div className="what-happens-next">
            <h3>What happens next?</h3>
            <ul className="steps">
              <li>We'll review your cybersecurity needs.</li>
              <li>You'll receive a customized security proposal.</li>
              <li>W'll implement the solutions and support you.</li>
            </ul>
          </div>
        </div>

        <form className="contactus-form">
          <label>Full name</label>
          <input type="text" placeholder="Enter your name" required />

          <label>Email address</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Subject</label>
          <input type="text" placeholder="Enter your subject" required />

          <label>Write a message</label>
          <textarea placeholder="Type here..." required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUsSection;

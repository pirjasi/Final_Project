import React from "react";
import "./JobsPage.css";

const JobsPage: React.FC = () => {
  return (
    <section className="jobs-page-hero">
      <div className="jobs-page-hero-overlay">
        <div className="jobs-page-hero-content">
          <h1 className=".jobs-page-section h1">
            <span className="jobs-page-highlight">Join Our Team</span> of
            Cybersecurity Innovators
          </h1>

          <p className="jobs-page-subtitle">
            Protecting the Digital World, One Threat at a Time
          </p>

          <div className="jobs-filters">
            <select>
              <option>Job Title</option>
            </select>
            <select>
              <option>Salary Range</option>
            </select>
            <select>
              <option>Posted Date</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobsPage;

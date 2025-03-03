import React from "react";
import "./JobListings.css";

const jobData = [
  {
    date: "April, 2024",
    title: "Cybersecurity Analyst",
    description:
      "Join our team as a Cybersecurity Analyst, review logs and monitor security systems to detect and mitigate cyber threats.",
  },
  {
    date: "April, 2024",
    title: "Security Engineer",
    description:
      "We are seeking a Security Engineer to design and implement security solutions for our networks and systems.",
  },
  {
    date: "5 May, 2024",
    title: "Penetration Tester",
    description:
      "As a Penetration Tester, you will simulate attacks to identify and exploit vulnerabilities, providing critical insights to enhance our security posture.",
  },

  {
    date: "10 May, 2024",
    title: "Incident Response Specialist",
    description:
      "Be part of our Incident Response team, analyze security incidents, and take immediate actions to mitigate threats.",
  },
  {
    date: "1 June, 2024",
    title: "Threat Intelligence Analyst",
    description:
      "We are looking for a Threat Intelligence Analyst to monitor cyber threats and provide intelligence to strengthen our security posture.",
  },
  {
    date: "22 June, 2024",
    title: "Information Security Officer",
    description:
      "As an Information Security Officer, you will oversee security policies and ensure compliance with industry standards.",
  },
];

const JobListings: React.FC = () => {
  return (
    <section className="job-listings">
      {jobData.map((job, index) => (
        <div className="job-card" key={index}>
          <div className="job-date">{job.date}</div>
          <h3>
            <span className="job-highlight">{job.title.split(" ")[0]}</span>{" "}
            {job.title.split(" ").slice(1).join(" ")}
          </h3>
          <p>{job.description}</p>
          <div className="job-options">
            <button className="option-btn">Full-Time</button>
            <button className="option-btn">On-Site</button>
            <button className="option-btn">Hybrid</button>
          </div>
          <button className="apply-btn">Apply</button>
        </div>
      ))}
    </section>
  );
};

export default JobListings;

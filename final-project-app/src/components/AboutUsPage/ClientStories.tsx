import React from "react";
import "./ClientStories.css";

const clientStories = [
  {
    id: 1,
    name: "John Doe",
    image: "/image/image.png",
    company: "Company A",
    challenge: "Difficulty in managing patient records...",
    solution: "Implemented an Electronic Health Record (EHR) system...",
    outcome: "Increased patient care, reduced medical errors...",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "/image/image.png",
    company: "Company B",
    challenge: "Ensuring data security across multiple locations...",
    solution: "Deployed a cloud-based security system...",
    outcome: "Improved compliance and enhanced protection...",
  },
  {
    id: 3,
    name: "Michael Brown",
    image: "/image/image.png",
    company: "Company C",
    challenge: "Need for real-time data sharing...",
    solution: "Integrated AI-powered analytics...",
    outcome: "Faster decision-making and optimized operations...",
  },
];

const ClientStories: React.FC = () => {
  return (
    <section className="client-stories-section">
      <h2 className="client-stories-title">
        Discover why our clients continue to choose us.
      </h2>
      <div className="client-stories-wrapper">
        {clientStories.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-item">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <div className="vertical-line"></div>
            <div className="testimonial-content">
              <div className="client-story-badge">Success Story</div>
              <p className="client-story-company">
                <strong>{testimonial.company}</strong>, a small unit hospital
              </p>
              <p className="client-story-challenge">
                <strong>Challenge:</strong> {testimonial.challenge}
              </p>
              <p className="client-story-solution">
                <strong>Solution:</strong> {testimonial.solution}
              </p>
              <p className="client-story-outcome">
                <strong>Outcome:</strong> {testimonial.outcome}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientStories;

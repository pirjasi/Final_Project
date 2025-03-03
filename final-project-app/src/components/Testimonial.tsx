import React from "react";
import "./Testimonial.css";
import customer1 from "../assets/costumer1.jpg";
import customer2 from "../assets/costumer2.jpg";
import customer3 from "../assets/costumer3.jpg";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Emily R.",
    image: customer1,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
    rating: 5,
  },
  {
    id: 2,
    name: "Lindi T.",
    image: customer2,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jessica M.",
    image: customer3,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
    rating: 5,
  },
];

const Testimonial: React.FC = () => {
  return (
    <div className="testimonial-section">
      <h3>Join our happy customers!</h3>
      <div className="testimonial-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-item">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <div className="vertical-line"></div>
            <div className="testimonial-content">
              <p className="testimonial-text">{testimonial.review}</p>
              <strong className="testimonial-name">— {testimonial.name}</strong>
              <div className="stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} color="#ffc107" size={18} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="testimonial-navigation">
        <div className="testimonialhorizontal-line"></div>
        <button className="nav-btn">
          <FaArrowLeft />
        </button>
        <button className="nav-btn">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;

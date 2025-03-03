import React from "react";
import "./Services.css";

const Services: React.FC = () => {
  const services = [
    {
      image: "/SiemImage/Service1.png",
      title: "SIEM Threat Detection & Response",
      description:
        "Our 24/7 monitoring services use AI-powered tools to detect and neutralize threats before they can harm your business.",
    },
    {
      image: "/SiemImage/Service2.png",
      title: "Penetration Testing",
      description:
        "Identify and eliminate vulnerabilities in your network with our comprehensive penetration testing services.",
    },
    {
      image: "/SiemImage/Service3.png",
      title: "Incident Response",
      description:
        "In the event of a breach, our expert team reacts swiftly to minimize damage and restore your systems quickly.",
    },
    {
      image: "/SiemImage/Service4.png",
      title: "Network Security",
      description:
        "We offer end-to-end network security solutions, optimizing your infrastructure while securing it against unauthorized access.",
    },
    {
      image: "/SiemImage/Service5.png",
      title: "Security Awareness Training",
      description:
        "Empower your employees to recognize and respond to potential cyber threats.",
    },
    {
      image: "/SiemImage/Service6.png",
      title: "Vulnerability Management",
      description:
        "Identify, assess, and fix system weaknesses to reduce security risks and enhance resilience.",
    },
  ];

  return (
    <section id="services">
      <h2 className="services-title">Services</h2>
      <div className="services-cards">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-features-icon">
              <img src={service.image} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="see-more-button">See More</button>
          </div>
        ))}
      </div>
      <div className="services-bottom-line"></div>
    </section>
  );
};

export default Services;

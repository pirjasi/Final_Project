import "./Credentials.css";

const credentials = [
  {
    title: "Quality Management (DIN EN ISO 9001)",
    description:
      "Ensures consistent quality management standards and continuous improvement.",
    icon: "./image/ISO.png",
  },
  {
    title: "Quality Management (DIN EN ISO 9001)",
    description:
      "Ensures consistent quality management standards and continuous improvement.",
    icon: "./image/ISO.png",
  },
  {
    title: "Quality Management (DIN EN ISO 9001)",
    description:
      "Ensures consistent quality management standards and continuous improvement.",
    icon: "./image/ISO.png",
  },
  {
    title: "Quality Management (DIN EN ISO 9001)",
    description:
      "Ensures consistent quality management standards and continuous improvement.",
    icon: "./image/ISO.png",
  },
  {
    title: "Quality Management (DIN EN ISO 9001)",
    description:
      "Ensures consistent quality management standards and continuous improvement.",
    icon: "./image/ISO.png",
  },
  {
    title: "Information Security (ISO/IEC 27001)",
    description:
      "Guarantees best practices for information security management systems.",
    icon: "./image/ISO.png",
  },
];

const Credentials = () => {
  return (
    <section className="credentials-section">
      <h2 className="credentials-title">Our Credentials</h2>
      <div className="credentials-grid">
        {credentials.map((cred, index) => (
          <div key={index} className="credential-card">
            <div className="credential-icon-wrapper">
              <img
                src={cred.icon}
                alt="Credential Icon"
                className="credential-icon"
              />
            </div>
            <div className="credential-content">
              <h3 className="credential-title">{cred.title}</h3>
              <p className="credential-description">{cred.description}</p>
            </div>
            <button className="credential-button">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Credentials;

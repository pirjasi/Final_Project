import "./Founders.css";

const founders = [
  {
    name: "Furkan Bajrami",
    role: "",
    description:
      "Lorem ipsum dolor sit amet consectetur. Amet nislmi habitasse tincidunt.",
    image: "/image/furkan.png",
  },
  {
    name: "Petar Ninovaski",
    role: "Co-Founder & CEO",
    description:
      "Petar has over 10 years of experience in cybersecurity & IT consulting.",
    image: "/image/petar.png",
  },
];

const Founders = () => {
  return (
    <section className="founders-section">
      <h2 className="founders-title">Our Founders</h2>
      <p className="founders-subtitle">
        Here's a glimpse into the expertise driving CCG’s security solutions:
      </p>
      <div className="founders-container">
        {founders.map((founder, index) => (
          <div key={index} className="founder-card">
            <img
              src={founder.image}
              alt={founder.name}
              className="founder-image"
            />
            <div className="founder-info">
              <h3 className="founder-name">{founder.name}</h3>
              <p className="founder-role">{founder.role}</p>
              <p className="founder-description">{founder.description}</p>
              <div className="arrow-button">➜</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Founders;

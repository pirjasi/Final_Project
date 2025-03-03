import "./Specialists.css";

const specialists = [
  {
    name: "Lukas Schmidt",
    description:
      "Lukas excels in threat detection and network security, identifying vulnerabilities to protect systems from cyber risks.",
    image: "/image/specialist1.png",
  },
  {
    name: "Emma Brown",
    description:
      "Emma designs training programs to boost employee cybersecurity awareness and help organizations stay secure.",
    image: "/image/specialist2.png",
  },
  {
    name: "KarL",
    description:
      "KarL is an insider response & psychology expert, helping businesses safeguard against evolving threats.",
    image: "/image/specialist3.png",
  },
];

const Specialists = () => {
  return (
    <section className="specialists-section">
      <h2 className="specialists-title">Cybersecurity Specialists</h2>
      <div className="specialists-container">
        {specialists.map((specialist, index) => (
          <div key={index} className="specialist-card">
            <img
              src={specialist.image}
              alt={specialist.name}
              className="specialist-image"
            />
            <div className="specialist-info">
              <h3 className="specialist-name">{specialist.name}</h3>
              <p className="specialist-description">{specialist.description}</p>
              <div className="arrow-button">➜</div>
            </div>
          </div>
        ))}
      </div>
      <a href="#" className="meet-team">
        Meet the Rest of the Team
      </a>
    </section>
  );
};

export default Specialists;

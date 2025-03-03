import "./IncidentFeatures.css";

const IncidentFeatures = () => {
  return (
    <section className="incident-features">
      <h2 className="incident-features-title">
        Key Features Penetretion Testing
      </h2>
      <div className="incident-icon">
        <img src="/SiemImage/Service3.png" alt="Security Shield" />
      </div>

      <div className="incident-container">
        <div className="incident-box">
          <h3 className="incident-title">Reduce Response Time</h3>
          <p>
            A clear plan enables quicker identification and remediation of
            threats, minimizing potential damage
          </p>
        </div>

        <div className="incident-box">
          <h3 className="incident-title">Enhance Coordination</h3>
          <p>
            Clearly defined roles and responsibilities facilitate teamwork
            during high-stress situations.
          </p>
        </div>

        <div className="incident-box">
          <h3 className="incident-title">Ensure Compliance</h3>
          <p>
            Many regulations require documented incident response procedures,
            helping organizations avoid legal repercussions
          </p>
        </div>

        <div className="incident-box">
          <h3 className="incident-title">Improve Security Posture</h3>
          <p>
            Post-incident analysis allows organizations to learn from incidents
            and strengthen defenses against future threats
          </p>
        </div>
      </div>
    </section>
  );
};

export default IncidentFeatures;

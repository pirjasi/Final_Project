import "./SiemFeatures.css";

const SiemFeatures = () => {
  return (
    <section className="siem-features">
      <h2 className="features-title">
        Key Features of <span className="highlight">SIEM</span>
      </h2>
      <div className="features-icon">
        <img src="/SiemImage/Service1.png" alt="Security Shield" />
      </div>

      <div className="features-container">
        <div className="feature-box">
          <h3 className="feature-title">Data Aggregation</h3>
          <p>
            SIEM solutions collect event data from diverse sources, including
            user activities, endpoints, applications, and security hardware like
            firewalls and antivirus software.
          </p>
        </div>

        <div className="feature-box">
          <h3 className="feature-title">Event Correlation</h3>
          <p>
            By correlating related events, SIEM systems can identify patterns
            that may indicate potential threats.
          </p>
        </div>

        <div className="feature-box">
          <h3 className="feature-title">Real-Time Monitoring</h3>
          <p>
            SIEM tools provide near-real-time analysis of security alerts,
            enabling security teams to respond swiftly to incidents.
          </p>
        </div>

        <div className="feature-box">
          <h3 className="feature-title">Automated Response</h3>
          <p>
            Many SIEM solutions incorporate automation features that can respond
            to certain types of threats automatically.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SiemFeatures;

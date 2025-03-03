import "./NetworkFeatures.css";

const NetworkFeatures = () => {
  return (
    <section className="Network-features">
      <h2 className="Network-features-title">
        Key Features of Network Security
      </h2>
      <div className="Network-icon">
        <img src="/SiemImage/Service3.png" alt="Security Shield" />
      </div>

      <div className="Network-container">
        <div className="Network-box">
          <h3 className="Network-title">Perform Regular Audits</h3>
          <p>
            Conduct thorough network audits to identify vulnerabilities and
            assess the overall security posture.
          </p>
        </div>

        <div className="Network-box">
          <h3 className="Network-title">
            Implement Data Loss Prevention (DLP)
          </h3>
          <p>
            DLP strategies help monitor and control data transfers across the
            network to prevent unauthorized access or data breaches
          </p>
        </div>

        <div className="Network-box">
          <h3 className="Network-title">Educate Employees</h3>
          <p>
            Regular training on security awareness helps employees recognize
            phishing attempts and social engineering tactics, reducing the risk
            of human error
          </p>
        </div>

        <div className="Network-box">
          <h3 className="Network-title">Secure Routers</h3>
          <p>
            Change default passwords on routers, relocate them to secure areas,
            and implement additional security measures such as video
            surveillance to prevent unauthorized access
          </p>
        </div>
      </div>
    </section>
  );
};

export default NetworkFeatures;

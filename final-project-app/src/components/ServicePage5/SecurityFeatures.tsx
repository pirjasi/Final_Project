import "./SecurityFeatures.css";

const SecurityFeatures = () => {
  return (
    <section className="Security-features">
      <h2 className="Security-features-title">
        Key Features of Network Security
      </h2>
      <div className="Security-icon">
        <img src="/SiemImage/Service5.png" alt="Security Shield" />
      </div>

      <div className="Security-container">
        <div className="Security-box">
          <h3 className="Security-title">Perform Regular Audits</h3>
          <p>
            Conduct thorough network audits to identify vulnerabilities and
            assess the overall security posture.
          </p>
        </div>

        <div className="Security-box">
          <h3 className="Security-title">
            Implement Data Loss Prevention (DLP)
          </h3>
          <p>
            DLP strategies help monitor and control data transfers across the
            network to prevent unauthorized access or data breaches
          </p>
        </div>

        <div className="Security-box">
          <h3 className="Security-title">Educate Employees</h3>
          <p>
            Regular training on security awareness helps employees recognize
            phishing attempts and social engineering tactics, reducing the risk
            of human error
          </p>
        </div>

        <div className="Security-box">
          <h3 className="Security-title">Secure Routers</h3>
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

export default SecurityFeatures;

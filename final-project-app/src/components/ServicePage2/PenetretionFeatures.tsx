import "./PenetretionFeatures.css";

const PenetretionFeatures = () => {
  return (
    <section className="penetretion-features">
      <h2 className="penetretion-features-title">
        Key Features Penetretion Testing
      </h2>
      <div className="penetretion-icon">
        <img src="/SiemImage/Service2.png" alt="Security Shield" />
      </div>

      <div className="penetretion-container">
        <div className="penetretion-box">
          <h3 className="penetretion-title">Reconnaissance</h3>
          <p>
            Gathering information about the target system, which may include
            identifying network services and potential entry points
          </p>
        </div>

        <div className="penetretion-box">
          <h3 className="penetretion-title">Scanning</h3>
          <p>
            Using tools to discover live hosts, open ports, and services running
            on those ports. This phase helps in mapping the attack surface
          </p>
        </div>

        <div className="penetretion-box">
          <h3 className="penetretion-title">Gaining Access</h3>
          <p>
            Exploiting identified vulnerabilities using various tools and
            techniques to gain unauthorized access to the system.
          </p>
        </div>

        <div className="penetretion-box">
          <h3 className="penetretion-title">Maintaining Access</h3>
          <p>
            Establishing a persistent presence within the target environment to
            gather further data and assess the extent of control that can be
            achieved
          </p>
        </div>
      </div>
    </section>
  );
};

export default PenetretionFeatures;

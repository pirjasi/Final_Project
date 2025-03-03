import "./AlwaysOnGuard.css";
import GuardImage from "../assets/image.jpg";

const AlwaysOnGuard = () => {
  return (
    <section className="always-on-guard">
      <div className="guard-content">
        <h3>
          <span>Always On Guard:</span> Your 24/7 Online Security Solution for
          Unmatched Protection
        </h3>
        <div className="cta-buttons">
          <button className="outline-btn">Explore our Services</button>
          <button className="filled-btn">Book a Demo</button>
        </div>
      </div>
      <div className="guard-image">
        <img src={GuardImage} alt="Security Monitoring" />
      </div>
      <div className="guard-bottom-line"></div>
    </section>
  );
};

export default AlwaysOnGuard;

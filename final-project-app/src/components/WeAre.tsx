import "./WeAre.css";
import { FaHandshake, FaGlobe, FaMicrochip } from 'react-icons/fa';

const WeAre = () => {
  return (
    <section className="weare-container">
      <div className="weare-intro">
        <h2>Who We Are</h2>
        <p>
          At Cyberware Global Defense (CGD), we are committed to protecting the digital future through
          innovative solutions that safeguard businesses from evolving cyber threats. Our expert team
          combines cutting-edge technology with a proactive approach to cybersecurity, ensuring that
          your organization remains secure, compliant, and resilient in the face of emerging challenges.
        </p>
        <div className="weare-highlights">
          <div className="highlight-border">
            <FaHandshake className="icon" />
            Trusted by over <span>100+</span> Organizations
          </div>
          <div className="highlight-border">
            <FaGlobe className="icon" />
            Across <span>50+</span> Countries
          </div>
          <div className="highlight-border">
            <FaMicrochip className="icon" />
            Use <span>100%</span> Innovative Technology
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeAre;

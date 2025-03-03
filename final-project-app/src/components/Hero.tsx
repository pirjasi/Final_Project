import "./Hero.css";
import photo1 from "../assets/person1.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h2 className="hero-subtitle">Your Cybersecurity Experts</h2>
        <h3 className="hero-tagline">Securing the Future Today</h3>
        <h1 className="hero-title">
          <span>
            Tailored, <span className="highlight1">AI-driven solutions </span>
            to <br />
            protect your business
          </span>
        </h1>
        <div className="hero-line"></div>
        <p className="hero-description">
          Protecting the digital future through innovative cybersecurity
          solutions, we empower businesses to safeguard their assets, ensure
          compliance, and maintain trust in an increasingly connected world.
        </p>

        <div className="hero-buttons">
          <button className="btn free-consultation">
            <span className="icon-circle">
              <img src={photo1} alt="Profile" />
            </span>
            Free Consultation
          </button>
          <button className="btn get-started">Get Started Today</button>
        </div>

        <div className="hero-sectors">
          <span>Finance</span>
          <span>Healthcare</span>
          <span>Government</span>
          <span>Retail</span>
          <span>Game</span>
          <span>Education</span>
        </div>
      </div>
      <div className="hero-bottom-line"></div>
    </section>
  );
};

export default Hero;

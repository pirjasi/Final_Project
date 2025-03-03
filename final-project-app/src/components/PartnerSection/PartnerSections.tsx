import "./PartnerSections.css";

const PartnerSections = () => {
  return (
    <section className="partnership-section">
      <div className="partnership-content">
        <div className="partnership-box">
          <div className="partnership-images">
            <img src="/image2/frame1.png" alt="People working" />
            <img src="/image2/frame2.png" alt="Office space" />
          </div>
          <div className="partnership-text">
            <h2>
              Partnership with{" "}
              <span className="partnershipwith-highlight">Brainster</span>
            </h2>
            <p>
              Our partnership with Brainster enables us to interact and train
              the next generation of cybersecurity professionals. Together, we
              bring fresh ideas and cutting-edge solutions to the forefront of
              cyber defense. By combining Brainster’s forward-thinking education
              programs with our industry expertise, we are building a stronger,
              more resilient cybersecurity workforce. This collaboration ensures
              that our talents stay ahead of emerging threats, equipped with the
              skills and knowledge to protect businesses and individuals in an
              ever-evolving digital landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSections;

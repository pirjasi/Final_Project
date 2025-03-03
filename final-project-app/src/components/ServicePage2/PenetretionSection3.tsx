import React from "react";
import "./PenetretionSection3.css";

const PenetretionSection3: React.FC = () => {
  return (
    <section className="penetretion-section3">
      <div className="penetretion3-container">
        <h2 className="penetretion3-section-title orange">
          Overview of Penetration Testing
        </h2>
        <p>
          Penetration testing, often referred to as "pentesting," is an
          authorized simulated cyberattack on a computer system, designed to
          evaluate its security. Unlike vulnerability assessments, which merely
          identify potential weaknesses, penetration tests actively exploit
          vulnerabilities to demonstrate their impact and assess the overall
          security posture of the system.
        </p>

        <h2 className="penetretion3-section-title orange">
          Purpose and Importance
        </h2>
        <p>
          The primary goal of penetration testing is to identify and address
          security vulnerabilities before they can be exploited by malicious
          actors. By simulating real-world attacks, organizations can understand
          their weaknesses and implement necessary defenses. Regular penetration
          testing is crucial for maintaining robust cybersecurity measures,
          especially in light of increasing cyber threats.
        </p>

        <h2 className="penetretion3-section-title orange">
          Types of Penetration Testing
        </h2>
        <p>
          1. Web Application Testing: Evaluates web applications for
          vulnerabilities such as SQL injection and cross-site scripting 2.
          Internal Network Testing: Assesses vulnerabilities from within the
          network, simulating an insider threat. 3. External Network Testing:
          Identifies vulnerabilities that could be exploited from outside the
          organization 4. Social Engineering Testing: Tests employees'
          susceptibility to phishing and other social engineering tactics. 5.
          Wireless Network Testing: Examines the security of wireless networks
          against unauthorized access.
        </p>

        <h2 className="penetretion3-section-title orange">Conclusion</h2>
        <p>
          Penetration testing is an essential component of a comprehensive
          cybersecurity strategy. By simulating attacks and identifying
          vulnerabilities, organizations can take proactive measures to
          strengthen their defenses against real-world threats. Regularly
          scheduled penetration tests not only enhance security but also ensure
          compliance with industry regulations ultimately protecting sensitive
          data and maintaining trust with stakeholders.
        </p>
      </div>
    </section>
  );
};

export default PenetretionSection3;

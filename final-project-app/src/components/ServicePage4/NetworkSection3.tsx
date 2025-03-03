import React from "react";
import "./NetworkSection3.css";

const NetworSection3: React.FC = () => {
  return (
    <section className="network-section3">
      <div className="network-container">
        <h2 className="network-section-title orange">
          Network Security: Best Practices and Strategies
        </h2>
        <p>
          Network security encompasses a range of measures designed to protect
          the integrity, confidentiality, and availability of computer networks
          and data. As cyber threats evolve, organizations must adopt robust
          strategies to safeguard their networks against unauthorized access,
          misuse, or damage.
        </p>

        <h2 className="network-section-title orange">
          Key Components of Network Security
        </h2>
        <p>
          Physical Security: Protects physical assets such as servers, routers,
          and switches from unauthorized access. This includes using locks,
          surveillance cameras , and controlled access to facilities.Technical
          Security: Involves the use of hardware and software technologies to
          protect data in transit and at rest. This includes firewalls,
          intrusion detection systems (IDS), and encryption
          protocols.Administrative Security: Focuses on policies and procedures
          that govern user behavior and access controls. This includes user
          authentication processes and compliance with security policies.
        </p>

        <h2 className="network-section-title orange">
          Best Practices for Network Security Secure Routers:
        </h2>
        <p>
          Change default passwords on routers, relocate them to secure areas,
          and implement additional security measures such as video surveillance
          to prevent unauthorized access. Use SIEM Solutions: Aggregate network
          data in a Security Information and Event Management (SEM) system to
          analyze realtime alerts and historical data for potential threats.
          Establish Access Controls: Implement strict access management policies
          to regulate who can access sensitive information based on their roles
          within the organization. Network Segmentation: Divide the network into
          segments based on trust levels to contain potential breaches and limit
          the spread of threats across the network.
        </p>

        <h2 className="network-section-title orange">Conclusion</h2>
        <p>
          Implementing these best practices is essential for maintaining a
          secure network environment. Organizations must remain vigilant against
          emerging threats by continuously updating their security measures,
          educating employees, and leveraging advanced technologies like SIEM
          systems. By fostering a culture of security awareness and proactive
          defense, organizations can significantly reduce their risk exposure in
          an increasingly. complex cyber landscape:
        </p>
      </div>
    </section>
  );
};

export default NetworSection3;

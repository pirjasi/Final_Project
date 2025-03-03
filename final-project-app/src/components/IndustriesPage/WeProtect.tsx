import React from "react";
import "./WeProtect.css";

const industries = [
  {
    title: "Healthcare",
    description:
      "Cyber services in the health sector are crucial for protecting sensitive patient data and ensuring the integrity of healthcare systems. The healthcare industry faces significant cybersecurity challenges, including outdated software, inadequate network protections, and a lack of employee training, making it a prime target for cybercriminals. Common threats include ransomware attacks, phishing schemes, and vulnerabilities in Internet of Medical Things (IoMT) devices. Effective cybersecurity measures must include robust data protection protocols, regular security audits.  ",
    image: "/image2/health.png",
  },
  {
    title: "eGame",
    description:
      "Cyber services for the eGaming industry are increasingly vital due to a surge of cyber threats, including Distributed Denial of Service (DDoS) attacks, data breaches, and account fraud. Players store sensitive personal and financial information on gaming platforms, making them attractive targets for cybercriminals. Common security risks include cheating software, account takeovers, and ransomware attacks. To mitigate these threats, companies must implement strong encryption, multi-factor authentication, and continuous monitoring. ",
    image: "/image2/eGame.png",
  },
  {
    title: "Education",
    description:
      "Cyber services for the education sector are increasingly vital as digital learning platforms, including eLearning resources, platforms, and test histories, become primary targets for cyber threats. Educational institutions store vast amounts of personal data, making them attractive to hackers. Common threats include phishing attacks, ransomware incidents, and unauthorized access to student records.",
    image: "/image2/education.png",
  },
  {
    title: "Retail",
    description:
      "Cyber services in the retail sector are essential for protecting customer information and ensuring a secure e-commerce digital marketplace. Retailers face significant cybersecurity challenges, including credit card fraud, data breaches, and supply chain attacks. Cyber threats such as malware, phishing attempts, and fake online stores put both businesses and consumers at risk. Implementing secure payment gateways, encryption techniques, and AI-driven fraud detection systems can enhance security measures.",
    image: "/image2/Retail.png",
  },

  {
    title: "Finance",
    description:
      "Cyber services for the finance sector are crucial for protecting sensitive data, ensuring regulatory compliance, and mitigating evolving cyber threats. Financial institutions face significant challenges, including safeguarding vast amounts of personal and corporate information, defending against malware, and securing online transactions. Secure API, PCI DSS, and blockchain-based security solutions help prevent fraud and unauthorized access. Identity and Access Management (IAM) systems enhance data security while advanced threat intelligence techniques predict and mitigate cyber risks. Implementing robust encryption, secure authentication methods, and proactive monitoring strategies can prevent financial cybercrime and ensure customer trust. As the digital financial landscape evolves, maintaining cutting-edge security measures remains the most stringent security concern within the finance sector.",
    image: "/image2/finance.png",
  },
  {
    title: "Government",
    description:
      "Cyber services for the government sector are essential for safeguarding sensitive data, maintaining public trust, and mitigating cyber threats. Government networks hold vast amounts of critical information, making them prime targets for cyberattacks, data breaches, and espionage attempts. Cyber threats such as ransomware, nation-state attacks, and insider threats require robust security frameworks. Governments implement strong identity verification systems, advanced threat intelligence, and zero-trust architectures to protect national assets. Additionally, ensuring compliance with cybersecurity regulations and policy standards remains critical for maintaining trust. As the digital landscape evolves, strengthening security protocols in government sectors plays a vital role in national defense and public safety.",
    image: "/image2/government.png",
  },
];

const WeProtect: React.FC = () => {
  return (
    <section className="we-protect-section">
      {industries.map((industry, index) => (
        <div key={index} className="industry-card">
          <img
            src={industry.image}
            alt={industry.title}
            className="industry-icon"
          />
          <h3>{industry.title}</h3>
          <p>{industry.description}</p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      ))}
    </section>
  );
};

export default WeProtect;

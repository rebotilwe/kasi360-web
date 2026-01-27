// components/ValuesSection/ValuesSection.jsx
import React from "react";
import { 
  FiUsers, 
  FiTarget, 
  FiHeart, 
  FiShield,
  FiZap,
  FiGlobe
} from "react-icons/fi";
import "./ValuesSection.css";

function ValuesSection() {
  const values = [
    {
      icon: <FiUsers />,
      title: "Community First",
      description: "We prioritize community needs and build solutions that truly serve township businesses.",
      color: "#00C853"
    },
    {
      icon: <FiTarget />,
      title: "Impact Driven",
      description: "Every feature and service is designed to create measurable economic impact.",
      color: "#0D47A1"
    },
    {
      icon: <FiHeart />,
      title: "Empathy Led",
      description: "We listen, understand, and design with the unique challenges of township life in mind.",
      color: "#FF6D00"
    },
    {
      icon: <FiShield />,
      title: "Trust & Security",
      description: "Building secure platforms that protect our users' data and transactions.",
      color: "#9C27B0"
    },
    {
      icon: <FiZap />,
      title: "Innovation",
      description: "Continuously evolving our solutions to stay ahead of digital trends and needs.",
      color: "#00C853"
    },
    {
      icon: <FiGlobe />,
      title: "Sustainability",
      description: "Creating solutions that are economically and environmentally sustainable long-term.",
      color: "#0D47A1"
    }
  ];

  return (
    <section className="values-section">
      <div className="section-container">
        <div className="section-header center">
          <span className="section-badge">Our Values</span>
          <h2 className="section-title">What Guides Us</h2>
          <p className="section-subtitle">
            The principles that shape every decision we make at Kasi360
          </p>
        </div>
        
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon" style={{ color: value.color }}>
                {value.icon}
              </div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
              <div 
                className="value-accent" 
                style={{ backgroundColor: value.color }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValuesSection;
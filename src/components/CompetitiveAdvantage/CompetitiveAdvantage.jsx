// components/CompetitiveAdvantage/CompetitiveAdvantage.jsx
import React from "react";
import { FiCheckCircle, FiTrendingUp, FiDollarSign, FiUsers } from "react-icons/fi";
import "./CompetitiveAdvantage.css";

function CompetitiveAdvantage() {
  const advantages = [
    {
      icon: <FiCheckCircle />,
      title: "Hyperlocal Design",
      description: "Specifically built for the unique township business environment",
      color: "#00C853"
    },
    {
      icon: <FiTrendingUp />,
      title: "Holistic Approach",
      description: "Combines fintech, safety, and training in one ecosystem",
      color: "#0D47A1"
    },
    {
      icon: <FiDollarSign />,
      title: "Affordability",
      description: "One of the lowest cost-to-benefit ratios currently in the market",
      color: "#FF6D00"
    },
    {
      icon: <FiUsers />,
      title: "Strong Backing",
      description: "Supported by provincial and national stakeholders",
      color: "#9C27B0"
    }
  ];

  return (
    <div className="competitive-advantage">
      <div className="advantages-grid">
        {advantages.map((advantage, index) => (
          <div key={index} className="advantage-card">
            <div className="advantage-icon" style={{ color: advantage.color }}>
              {advantage.icon}
            </div>
            <h3 className="advantage-title">{advantage.title}</h3>
            <p className="advantage-description">{advantage.description}</p>
            <div className="advantage-timeline">
              <div className="timeline-dot" style={{ backgroundColor: advantage.color }}></div>
              <div className="timeline-line"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompetitiveAdvantage;
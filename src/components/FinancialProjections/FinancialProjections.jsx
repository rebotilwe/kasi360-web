// components/FinancialProjections/FinancialProjections.jsx
import React from "react";
import { FiTrendingUp, FiCalendar, FiTarget } from "react-icons/fi";
import "./FinancialProjections.css";

function FinancialProjections() {
  const projections = [
    {
      period: "Year 1",
      revenue: "R 5.2M",
      users: "10,000+",
      description: "Market penetration & platform launch"
    },
    {
      period: "Year 2",
      revenue: "R 18.7M",
      users: "35,000+",
      description: "Expansion & feature development"
    },
    {
      period: "Year 3",
      revenue: "R 42.5M",
      users: "80,000+",
      description: "National scale & profitability"
    }
  ];

  const milestones = [
    {
      icon: <FiCalendar />,
      title: "Break-even Timeline",
      value: "18-24 months",
      description: "Projected time to profitability"
    },
    {
      icon: <FiTrendingUp />,
      title: "Growth Rate",
      value: "300% YoY",
      description: "Expected annual growth"
    },
    {
      icon: <FiTarget />,
      title: "Market Coverage",
      value: "5 Provinces",
      description: "Target expansion areas"
    }
  ];

  return (
    <div className="financial-projections">
      <div className="projections-header">
        <h3>Revenue Projections</h3>
        <p>Scalable growth model with clear milestones</p>
      </div>
      
      <div className="projections-timeline">
        {projections.map((projection, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-period">{projection.period}</div>
            <div className="timeline-revenue">{projection.revenue}</div>
            <div className="timeline-users">{projection.users} users</div>
            <div className="timeline-description">{projection.description}</div>
            <div className="timeline-connector">
              <div className="connector-line"></div>
              {index < projections.length - 1 && <div className="connector-arrow">→</div>}
            </div>
          </div>
        ))}
      </div>
      
      <div className="milestones-grid">
        {milestones.map((milestone, index) => (
          <div key={index} className="milestone-card">
            <div className="milestone-icon">
              {milestone.icon}
            </div>
            <div className="milestone-content">
              <div className="milestone-title">{milestone.title}</div>
              <div className="milestone-value">{milestone.value}</div>
              <div className="milestone-description">{milestone.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FinancialProjections;
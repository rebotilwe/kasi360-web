// components/StatsSection/StatsSection.jsx
import React from "react";
import "./StatsSection.css";

function StatsSection() {
  const stats = [
    { 
      value: "70%", 
      label: "of businesses in South Africa", 
      sublabel: "lack digital tools",
      icon: "📊"
    },
    { 
      value: "34%", 
      label: "Contribution to GDP", 
      sublabel: "from SMEs (Stats SA & World Bank)",
      icon: "💰"
    },
    { 
      value: "98%", 
      label: "open to digital solutions", 
      sublabel: "to boost products/services",
      icon: "📈"
    },
    { 
      value: "R2,000", 
      label: "Monthly average spend", 
      sublabel: "on digital solutions per SME",
      icon: "💳"
    }
  ];

  return (
    <div className="stats-section">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
            <div className="stat-sublabel">{stat.sublabel}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsSection;
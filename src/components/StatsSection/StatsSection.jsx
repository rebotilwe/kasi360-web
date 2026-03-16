// components/StatsSection/StatsSection.jsx - UPDATED VERSION
import React from "react";
import { 
  FiTrendingUp, 
  FiDollarSign, 
  FiSmartphone, 
  FiTarget,
  FiCheckCircle,
  FiUsers,
  FiBarChart,
  FiCreditCard
} from "react-icons/fi";
import "./StatsSection.css";

function StatsSection({ variant = "default", title, subtitle }) {
  // Default stats based on Kasi360 presentation
  const defaultStats = [
    { 
      value: "70%", 
      label: "of SA Businesses", 
      sublabel: "Township SMEs driving the economy",
      icon: <FiUsers />,
      color: "#00C853",
      description: "Representing 70% of businesses in South Africa"
    },
    { 
      value: "34%", 
      label: "GDP Contribution", 
      sublabel: "From township businesses (Stats SA & World Bank)",
      icon: <FiDollarSign />,
      color: "#0D47A1",
      description: "Significant economic contribution"
    },
    { 
      value: "98%", 
      label: "Digital Gap", 
      sublabel: "Lack access to digital tools for growth",
      icon: <FiSmartphone />,
      color: "#FF6D00",
      description: "Critical barrier to business expansion"
    },
    { 
      value: "R150,00", 
      label: "Starting Investment", 
      sublabel: "Entry cost for Kasi360 ecosystem",
      icon: <FiTarget />,
      color: "#9C27B0",
      description: "Lowest cost-to-benefit ratio in market"
    }
  ];

  // Impact stats variant
  const impactStats = [
    { 
      value: "85%", 
      label: "Revenue Increase", 
      sublabel: "Average growth for Kasi360 businesses",
      icon: <FiTrendingUp />,
      color: "#00C853",
      description: "Proven business transformation"
    },
    { 
      value: "500+", 
      label: "Jobs Created", 
      sublabel: "In township communities",
      icon: <FiUsers />,
      color: "#0D47A1",
      description: "Community economic development"
    },
    { 
      value: "18-24", 
      label: "Months to Break-even", 
      sublabel: "Average timeline for businesses",
      icon: <FiCheckCircle />,
      color: "#FF6D00",
      description: "Sustainable growth model"
    },
    { 
      value: "R50M+", 
      label: "Economic Value", 
      sublabel: "Total impact generated",
      icon: <FiBarChart />,
      color: "#9C27B0",
      description: "Measurable economic contribution"
    }
  ];

  // Ecosystem stats variant
  const ecosystemStats = [
    { 
      value: "4-in-1", 
      label: "Holistic Ecosystem", 
      sublabel: "Fintech, safety, training combined",
      icon: <FiCheckCircle />,
      color: "#00C853",
      description: "Complete township business solution"
    },
    { 
      value: "24/7", 
      label: "Support Available", 
      sublabel: "Technical & business assistance",
      icon: <FiUsers />,
      color: "#0D47A1",
      description: "Always available for township businesses"
    },
    { 
      value: "10,000+", 
      label: "Training Hours", 
      sublabel: "Digital skills delivered",
      icon: <FiBarChart />,
      color: "#FF6D00",
      description: "Building digital literacy"
    },
    { 
      value: "100%", 
      label: "Township Focus", 
      sublabel: "Designed for local contexts",
      icon: <FiTarget />,
      color: "#9C27B0",
      description: "Hyperlocal business solutions"
    }
  ];

  // Choose the right stats based on variant
  let statsToUse = defaultStats;
  if (variant === "impact") statsToUse = impactStats;
  if (variant === "ecosystem") statsToUse = ecosystemStats;

  return (
    <div className={`stats-section ${variant}`}>
      {(title || subtitle) && (
        <div className="stats-header">
          {title && <h2 className="stats-title">{title}</h2>}
          {subtitle && <p className="stats-subtitle">{subtitle}</p>}
        </div>
      )}
      
      <div className="stats-grid">
        {statsToUse.map((stat, index) => (
          <div 
            key={index} 
            className="stat-card"
            style={{ borderTopColor: stat.color }}
          >
            <div className="stat-icon-wrapper" style={{ color: stat.color }}>
              {stat.icon}
            </div>
            <div className="stat-value" style={{ color: stat.color }}>
              {stat.value}
            </div>
            <div className="stat-label">{stat.label}</div>
            <div className="stat-sublabel">{stat.sublabel}</div>
            {stat.description && (
              <div className="stat-description">
                <div className="description-line"></div>
                <p>{stat.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {variant === "default" && (
        <div className="stats-conclusion">
          <div className="conclusion-content">
            <FiCheckCircle className="conclusion-icon" />
            <p>
              These statistics highlight both the <strong>massive potential</strong> and the 
              <strong> critical need</strong> for digital solutions in South Africa's township economy.
              Kasi360 bridges this gap starting from just <strong>R150,00</strong>.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default StatsSection;
import React from "react";
import { FiLayers, FiSmartphone, FiUsers, FiShield, FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./Platform.css";

const platformFeatures = [
  {
    title: "Unified Dashboard",
    description: "Manage your business, track sales, and monitor performance all in one place.",
    icon: <FiLayers />,
    color: "#00C853",
    link: "/dashboard"
  },
  {
    title: "Mobile-first Platform",
    description: "Access your tools and services anytime, anywhere with our mobile-friendly platform.",
    icon: <FiSmartphone />,
    color: "#0D47A1",
    link: "/mobile"
  },
  {
    title: "Community Network",
    description: "Connect with other township businesses and stakeholders for growth opportunities.",
    icon: <FiUsers />,
    color: "#FF6D00",
    link: "/community"
  },
  {
    title: "Secure Operations",
    description: "Top-notch security protocols ensuring safe transactions and data protection.",
    icon: <FiShield />,
    color: "#9C27B0",
    link: "/security"
  }
];

const Platform = () => {
  const navigate = useNavigate();

  return (
    <section className="platform-section">
      <div className="platform-header">
        <h2>Our Platform</h2>
        <p>Everything you need to run, grow, and secure your township business in one ecosystem.</p>
      </div>

      <div className="platform-grid">
        {platformFeatures.map((feature, index) => (
          <div key={index} className="platform-card" style={{ borderTopColor: feature.color }}>
            <div className="platform-icon" style={{ color: feature.color }}>
              {feature.icon}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <button
              className="platform-btn"
              style={{ borderColor: feature.color, color: feature.color }}
              onClick={() => navigate(feature.link)}
            >
              Learn More <FiArrowRight />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Platform;

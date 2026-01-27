// components/EcosystemServices/EcosystemServices.jsx
import React from "react";
import { FiTarget, FiPackage, FiDollarSign, FiUsers } from "react-icons/fi";
import "./EcosystemServices.css";

function EcosystemServices() {
  const services = [
    {
      icon: <FiTarget />,
      title: "KasiMarketing",
      description: "Hyperlocal marketing solutions specifically built for township businesses",
      features: ["Local SEO", "Social Media Management", "Digital Advertising", "Brand Building"]
    },
    {
      icon: <FiPackage />,
      title: "Digital Storefront",
      description: "Complete e-commerce platform for township businesses to sell online",
      features: ["Online Catalog", "Payment Processing", "Order Management", "Delivery Integration"]
    },
    {
      icon: <FiDollarSign />,
      title: "KasiPay",
      description: "Fintech solutions including digital payments and micro-financing",
      features: ["Mobile Payments", "Invoicing", "Financial Tracking", "Access to Credit"]
    },
    {
      icon: <FiUsers />,
      title: "Training & Support",
      description: "Comprehensive training programs and ongoing business support",
      features: ["Digital Literacy", "Business Skills", "Technical Support", "Mentorship"]
    }
  ];

  return (
    <div className="ecosystem-services">
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">
              {service.icon}
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            
            <div className="service-features">
              {service.features.map((feature, fIndex) => (
                <span key={fIndex} className="feature-tag">
                  {feature}
                </span>
              ))}
            </div>
            
            <button className="learn-more-btn">
              Learn More →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EcosystemServices;
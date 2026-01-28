import React from "react";
import { 
  FiTarget, 
  FiPackage, 
  FiDollarSign, 
  FiUsers,
  FiShield,
  FiMapPin,
  FiTrendingUp,
  FiCheckCircle,
  FiArrowRight,
  FiSmartphone,
  FiBookOpen,
  FiAward
} from "react-icons/fi";
import { Link } from "react-router-dom";
import "./EcosystemServices.css";

function EcosystemServices({ variant = "default", title, subtitle }) {
  const defaultServices = [
    {
      icon: <FiTarget />,
      title: "KasiMarketing",
      description: "Hyperlocal marketing tools specifically designed for township business environments and customer behaviors.",
      features: ["Hyperlocal SEO", "WhatsApp Business", "Community Marketing", "Low-budget Ads"],
      stats: "300% average local visibility increase",
      color: "#00C853",
      highlight: "Featured in Kasi360 Presentation",
      link: "/ecosystem" // <-- navigate here
    },
    {
      icon: <FiDollarSign />,
      title: "KasiPay Fintech",
      description: "Secure digital payment solutions and financial tools with integrated safety features for township contexts.",
      features: ["Mobile Payments", "Digital Invoicing", "Expense Tracking", "Safety Protocols"],
      stats: "2.9% + R2 per transaction",
      color: "#0D47A1",
      highlight: "Lowest cost-to-benefit ratio",
      link: "/ecosystem" // <-- navigate here
    },
    {
      icon: <FiShield />,
      title: "Safety Solutions",
      description: "Integrated security features combining digital protection with physical safety for township business environments.",
      features: ["Transaction Security", "Cash Handling", "Emergency Systems", "Community Watch"],
      stats: "100% secure township transactions",
      color: "#FF6D00",
      highlight: "Holistic safety approach",
      link: "/ecosystem" // <-- navigate here
    },
    {
      icon: <FiBookOpen />,
      title: "Training & Growth",
      description: "Comprehensive digital literacy and business skills programs supported by provincial and national stakeholders.",
      features: ["Digital Skills", "Business Coaching", "Technical Support", "Networking"],
      stats: "85% business growth rate",
      color: "#9C27B0",
      highlight: "Supported by stakeholders",
      link: "/ecosystem" // <-- navigate here
    }
  ];

  const fullEcosystem = [
    { icon: <FiTarget />, title: "KasiMarketing", description: "Hyperlocal digital marketing for township customer acquisition and retention.", features: ["Local SEO", "Social Media", "Digital Ads", "Community Engagement"], color: "#00C853", pillar: "Customer Acquisition", link: "/kasi-marketing" },
    { icon: <FiSmartphone />, title: "Digital Storefront", description: "Mobile-first e-commerce platform designed for township product sales.", features: ["Online Catalog", "Mobile Payments", "Order Management", "Delivery"], color: "#0D47A1", pillar: "Sales Platform", link: "/digital-storefront" },
    { icon: <FiDollarSign />, title: "Financial Tools", description: "Affordable fintech solutions starting from R2,000 with integrated security.", features: ["Payments", "Invoicing", "Cash Flow", "Micro-financing"], color: "#FF6D00", pillar: "Financial Management", link: "/financial-tools" },
    { icon: <FiShield />, title: "Safety Ecosystem", description: "Township-specific security protocols for digital and physical safety.", features: ["Digital Security", "Cash Safety", "Emergency Response", "Premises"], color: "#9C27B0", pillar: "Risk Management", link: "/safety-ecosystem" },
    { icon: <FiBookOpen />, title: "Training Programs", description: "Digital literacy and business skills training for sustainable growth.", features: ["Skills Training", "Mentorship", "Support", "Certification"], color: "#00C853", pillar: "Skills Development", link: "/training-programs" },
    { icon: <FiUsers />, title: "Community Support", description: "Network of township businesses and access to stakeholder resources.", features: ["Networking", "Resources", "Advocacy", "Partnerships"], color: "#0D47A1", pillar: "Community Building", link: "/community-support" }
  ];

  const servicesToUse = variant === "full" ? fullEcosystem : defaultServices;

  return (
    <div className={`ecosystem-services ${variant}`}>
      {(title || subtitle) && (
        <div className="services-header">
          {title && <h2 className="services-title">{title}</h2>}
          {subtitle && <p className="services-subtitle">{subtitle}</p>}
        </div>
      )}

      <div className="services-grid">
        {servicesToUse.map((service, index) => (
          <div 
            key={index} 
            className="service-card"
            style={{ borderTopColor: service.color }}
          >
            <div className="service-icon-container" style={{ backgroundColor: service.color + '20' }}>
              <div className="service-icon" style={{ color: service.color }}>
                {service.icon}
              </div>
            </div>

            <h3 className="service-title">{service.title}</h3>
            
            {service.pillar && (
              <div className="service-pillar" style={{ color: service.color }}>
                <FiTrendingUp /> {service.pillar}
              </div>
            )}

            <p className="service-description">{service.description}</p>

            {service.stats && (
              <div className="service-stats">
                <FiTrendingUp /> {service.stats}
              </div>
            )}

            <div className="service-features">
              {service.features.map((feature, fIndex) => (
                <span key={fIndex} className="feature-tag">
                  <FiCheckCircle /> {feature}
                </span>
              ))}
            </div>

            {service.highlight && (
              <div className="service-highlight">
                <FiAward /> {service.highlight}
              </div>
            )}

            {/* Updated button with Link */}
            <Link 
              to={service.link || "#"} 
              className="learn-more-btn"
              style={{ borderColor: service.color, color: service.color }}
            >
              Explore Service <FiArrowRight />
            </Link>
          </div>
        ))}
      </div>

      {variant === "default" && (
        <div className="ecosystem-conclusion">
          <div className="conclusion-content">
            <div className="conclusion-icon">
              <FiMapPin />
            </div>
            <div className="conclusion-text">
              <h4>The Kasi360 Holistic Advantage</h4>
              <p>
                Unlike piecemeal solutions, our ecosystem combines <strong>fintech, safety, and training</strong> 
                specifically designed for township business environments. This holistic approach delivers 
                <strong> measurable results</strong> starting from just <strong>R2,000</strong>.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EcosystemServices;

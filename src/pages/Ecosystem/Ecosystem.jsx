// pages/Ecosystem/Ecosystem.jsx
import React from "react";
import { Link } from "react-router-dom";
import { 
  FiTarget, 
  FiShoppingCart, 
  FiCreditCard, 
  FiUsers,
  FiBarChart,
  FiShield,
  FiArrowRight
} from "react-icons/fi";
import "./Ecosystem.css";

function Ecosystem() {
  const services = [
    {
      icon: <FiTarget />,
      title: "KasiMarketing",
      description: "Hyperlocal marketing solutions for township businesses",
      features: ["Local SEO", "Social Media", "Digital Ads", "Brand Building"],
      path: "/services/marketing"
    },
    {
      icon: <FiShoppingCart />,
      title: "Digital Storefront",
      description: "Complete e-commerce platform for online sales",
      features: ["Online Catalog", "Payment Processing", "Order Management", "Delivery"],
      path: "/services/storefront"
    },
    {
      icon: <FiCreditCard />,
      title: "KasiPay",
      description: "Fintech solutions including payments and micro-financing",
      features: ["Mobile Payments", "Invoicing", "Financial Tracking", "Credit Access"],
      path: "/services/payments"
    },
    {
      icon: <FiUsers />,
      title: "Training & Support",
      description: "Comprehensive business training and ongoing support",
      features: ["Digital Literacy", "Business Skills", "Technical Support", "Mentorship"],
      path: "/services/training"
    }
  ];

  const solutions = [
    {
      title: "For Retailers",
      description: "Complete digital transformation for spaza shops and retailers",
      color: "#00C853"
    },
    {
      title: "For Service Providers",
      description: "Digital tools for hairdressers, mechanics, and other service businesses",
      color: "#0D47A1"
    },
    {
      title: "For Creatives",
      description: "Platform for artists, designers, and creative entrepreneurs",
      color: "#FF6D00"
    },
    {
      title: "For Food Businesses",
      description: "Specialized solutions for food vendors and restaurants",
      color: "#9C27B0"
    }
  ];

  return (
    <div className="ecosystem-page">
      {/* Hero Section */}
      <section className="ecosystem-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            The <span className="gradient-text">Kasi360 Ecosystem</span>
          </h1>
          <p className="hero-subtitle">
            A comprehensive suite of digital tools designed specifically for 
            South Africa's township businesses. Everything you need to thrive 
            in the digital economy.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">4</div>
              <div className="stat-label">Core Services</div>
            </div>
            <div className="stat">
              <div className="stat-number">R2K</div>
              <div className="stat-label">Avg. Monthly Cost</div>
            </div>
            <div className="stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="section-container">
          <div className="section-header center">
            <span className="section-badge">Our Services</span>
            <h2 className="section-title">Complete Digital Toolkit</h2>
            <p className="section-subtitle">
              Everything a township business needs to succeed in the digital age
            </p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-header">
                  <div className="service-icon">{service.icon}</div>
                  <h3 className="service-title">{service.title}</h3>
                </div>
                <p className="service-description">{service.description}</p>
                
                <div className="service-features">
                  {service.features.map((feature, fIndex) => (
                    <span key={fIndex} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <Link to={service.path} className="service-link">
                  Learn More <FiArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="solutions-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge">Tailored Solutions</span>
            <h2 className="section-title">Built for Your Business Type</h2>
            <p className="section-subtitle">
              Customized tools for different types of township businesses
            </p>
          </div>
          
          <div className="solutions-grid">
            {solutions.map((solution, index) => (
              <div key={index} className="solution-card" style={{ borderLeftColor: solution.color }}>
                <h3 className="solution-title" style={{ color: solution.color }}>
                  {solution.title}
                </h3>
                <p className="solution-description">{solution.description}</p>
                <div className="solution-features">
                  <div className="feature">
                    <FiBarChart className="feature-icon" />
                    <span>Business Analytics</span>
                  </div>
                  <div className="feature">
                    <FiShield className="feature-icon" />
                    <span>Secure Platform</span>
                  </div>
                </div>
                <Link to={`/solutions/${solution.title.toLowerCase().replace(/\s+/g, '-')}`} className="solution-link">
                  Explore Solution
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section className="platform-section">
        <div className="section-container">
          <div className="platform-content">
            <div className="platform-text">
              <span className="section-badge">Our Platform</span>
              <h2 className="section-title">One Platform, Endless Possibilities</h2>
              <p className="platform-description">
                The Kasi360 platform integrates all our services into one seamless 
                experience. Manage your marketing, sales, payments, and training 
                from a single dashboard.
              </p>
              <div className="platform-features">
                <div className="platform-feature">
                  <div className="feature-check">✓</div>
                  <span>Unified Dashboard</span>
                </div>
                <div className="platform-feature">
                  <div className="feature-check">✓</div>
                  <span>Mobile-First Design</span>
                </div>
                <div className="platform-feature">
                  <div className="feature-check">✓</div>
                  <span>Real-time Analytics</span>
                </div>
                <div className="platform-feature">
                  <div className="feature-check">✓</div>
                  <span>24/7 Support</span>
                </div>
              </div>
              <Link to="/platform" className="primary-btn">
                Explore Platform <FiArrowRight />
              </Link>
            </div>
            <div className="platform-visual">
              <div className="dashboard-preview">
                {/* Add dashboard screenshot/illustration here */}
                <div className="preview-placeholder">
                  <span>Interactive Dashboard Preview</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ecosystem-cta">
        <div className="cta-container">
          <h2>Ready to Transform Your Business?</h2>
          <p>
            Join thousands of township businesses already thriving with Kasi360.
            Start your digital transformation journey today.
          </p>
          <div className="cta-buttons">
            <Link to="/demo" className="primary-btn">
              Get Free Demo
            </Link>
            <Link to="/pricing" className="secondary-btn">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ecosystem;
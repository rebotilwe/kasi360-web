// pages/Services/Storefront.jsx
import React from "react";
import { Link } from "react-router-dom";
import { 
  FiShoppingCart,
  FiCheckCircle,
  FiArrowRight,
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiSmartphone,
  FiShield,
  FiCreditCard,
  FiBarChart,
  FiPackage,
  FiTruck,
  FiHeadphones
} from "react-icons/fi";
import "./ServiceDetail.css";

function Storefront() {
  const features = [
    {
      icon: <FiShoppingCart />,
      title: "Online Product Catalog",
      description: "Showcase your products with professional photos and descriptions"
    },
    {
      icon: <FiPackage />,
      title: "Inventory Management",
      description: "Track stock levels in real-time and receive low-stock alerts"
    },
    {
      icon: <FiCreditCard />,
      title: "Secure Payments",
      description: "Integrated with KasiPay for safe, seamless transactions"
    },
    {
      icon: <FiTruck />,
      title: "Delivery Integration",
      description: "Connect with local delivery services for township coverage"
    },
    {
      icon: <FiSmartphone />,
      title: "Mobile-First Design",
      description: "Optimized for smartphones used by township customers"
    },
    {
      icon: <FiBarChart />,
      title: "Sales Analytics",
      description: "Track performance and understand customer behavior"
    }
  ];

  const benefits = [
    {
      title: "24/7 Online Sales",
      description: "Your store is always open, even when you're not"
    },
    {
      title: "Reach More Customers",
      description: "Extend beyond your physical location"
    },
    {
      title: "Professional Presence",
      description: "Build trust with a professional online store"
    },
    {
      title: "Easy Management",
      description: "Simple interface designed for township businesses"
    }
  ];

  return (
    <div className="service-detail-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="hero-content">
          <div className="service-badge">
            <FiShoppingCart /> Kasi360 Service
          </div>
          <h1 className="hero-title">Digital Storefront</h1>
          <p className="hero-subtitle">
            Transform your township business with a professional online store. 
            Sell your products 24/7, manage inventory, and reach customers 
            beyond your physical location.
          </p>
          
          <div className="hero-highlights">
            <div className="highlight">
              <FiCheckCircle /> Mobile-first design
            </div>
            <div className="highlight">
              <FiCheckCircle /> Integrated with KasiPay
            </div>
            <div className="highlight">
              <FiCheckCircle /> Township delivery integration
            </div>
          </div>
          
          <div className="hero-cta">
            <Link to="/contact" className="primary-btn">
              Start 14-Day Free Trial
            </Link>
            <Link to="/demo" className="secondary-btn">
              <FiHeadphones /> Book Demo
            </Link>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="image-placeholder">
            <div className="placeholder-content">
              <FiShoppingCart className="service-icon" />
              <h3>Your Products, Online</h3>
              <p>Professional storefront for township businesses</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="problem-solution">
        <div className="section-container">
          <div className="problem-side">
            <h2>The Challenge for Township Businesses</h2>
            <ul>
              <li><FiShoppingCart /> Limited to physical location customers</li>
              <li><FiPackage /> Manual inventory tracking leads to errors</li>
              <li><FiCreditCard /> Cash-only transactions limit sales</li>
              <li><FiTruck /> No delivery options for local customers</li>
              <li><FiSmartphone /> No mobile presence for smartphone users</li>
            </ul>
          </div>
          
          <div className="solution-side">
            <h2>The Kasi360 Solution</h2>
            <ul>
              <li><FiCheckCircle /> 24/7 online store for continuous sales</li>
              <li><FiCheckCircle /> Real-time inventory management</li>
              <li><FiCheckCircle /> Secure digital payments integration</li>
              <li><FiCheckCircle /> Local delivery service connections</li>
              <li><FiCheckCircle /> Mobile-optimized for township customers</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-section">
        <div className="section-container">
          <div className="section-header center">
            <h2 className="section-title">Everything You Need to Sell Online</h2>
            <p className="section-subtitle">
              Comprehensive features designed specifically for township business needs
            </p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits-section">
        <div className="section-container">
          <div className="benefits-content">
            <div className="benefits-text">
              <h2>Why Township Businesses Choose Our Storefront</h2>
              <p>
                Unlike generic e-commerce solutions, our Digital Storefront is built 
                specifically for township business contexts. We understand the unique 
                challenges and opportunities of selling in township markets.
              </p>
              
              <div className="benefits-list">
                {benefits.map((benefit, index) => (
                  <div key={index} className="benefit-item">
                    <FiCheckCircle />
                    <div>
                      <strong>{benefit.title}</strong>
                      <p>{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="benefits-stats">
              <div className="stat">
                <div className="stat-number">85%</div>
                <div className="stat-label">Increase in sales</div>
              </div>
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Store availability</div>
              </div>
              <div className="stat">
                <div className="stat-number">R2,000</div>
                <div className="stat-label">Starting investment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="section-container">
          <div className="cta-content">
            <h2>Ready to Open Your Digital Storefront?</h2>
            <p>
              Join <strong>500+ township businesses</strong> already selling online with Kasi360. 
              Start your 14-day free trial today - no credit card required.
            </p>
            
            <div className="cta-buttons">
              <Link to="/contact" className="primary-btn">
                Start Free Trial <FiArrowRight />
              </Link>
              <Link to="/pricing" className="secondary-btn">
                View Pricing Plans
              </Link>
            </div>
            
            <div className="cta-note">
              <FiCheckCircle /> Part of the complete Kasi360 ecosystem
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Storefront;
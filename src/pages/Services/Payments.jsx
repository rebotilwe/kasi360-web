// pages/Services/Payments.jsx
import React from "react";
import { Link } from "react-router-dom";
import { 
  FiCreditCard,
  FiCheckCircle,
  FiArrowRight,
  FiShield,
  FiTrendingUp,
  FiSmartphone,
  FiBarChart,
  FiDollarSign,
  FiRefreshCw,
  FiBell,
  FiLock,
  FiHeadphones
} from "react-icons/fi";
import "./ServiceDetail.css";

function Payments() {
  const features = [
    {
      icon: <FiSmartphone />,
      title: "Mobile Payments",
      description: "Accept payments via mobile devices, perfect for township markets"
    },
    {
      icon: <FiShield />,
      title: "Bank-Level Security",
      description: "Enterprise-grade security protecting every transaction"
    },
    {
      icon: <FiDollarSign />,
      title: "Multiple Payment Options",
      description: "Cards, mobile money, and cash integration"
    },
    {
      icon: <FiBarChart />,
      title: "Financial Tracking",
      description: "Real-time tracking of all transactions and cash flow"
    },
    {
      icon: <FiRefreshCw />,
      title: "Recurring Payments",
      description: "Set up subscriptions and recurring billing"
    },
    {
      icon: <FiBell />,
      title: "Payment Reminders",
      description: "Automated reminders for outstanding invoices"
    }
  ];

  const benefits = [
    {
      title: "Reduce Cash Handling",
      description: "Minimize security risks and cash management costs"
    },
    {
      title: "Increase Sales",
      description: "Accept digital payments preferred by modern customers"
    },
    {
      title: "Better Financial Control",
      description: "Real-time visibility into business finances"
    },
    {
      title: "Professional Invoicing",
      description: "Create and send professional digital invoices"
    }
  ];

  return (
    <div className="service-detail-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="hero-content">
          <div className="service-badge">
            <FiCreditCard /> Kasi360 Service
          </div>
          <h1 className="hero-title">KasiPay</h1>
          <p className="hero-subtitle">
            Secure, simple digital payments designed for township businesses. 
            Accept payments, send invoices, and manage your finances all in one place.
          </p>
          
          <div className="hero-highlights">
            <div className="highlight">
              <FiCheckCircle /> 2.9% + R2 per transaction
            </div>
            <div className="highlight">
              <FiCheckCircle /> Bank-level security
            </div>
            <div className="highlight">
              <FiCheckCircle /> Mobile-first design
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
              <FiCreditCard className="service-icon" />
              <h3>Digital Payments Made Simple</h3>
              <p>Secure transactions for township businesses</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="problem-solution">
        <div className="section-container">
          <div className="problem-side">
            <h2>The Cash Problem in Townships</h2>
            <ul>
              <li><FiCreditCard /> Cash-only limits customer options</li>
              <li><FiShield /> Security risks with cash handling</li>
              <li><FiBarChart /> Manual tracking leads to errors</li>
              <li><FiDollarSign /> No digital payment acceptance</li>
              <li><FiLock /> Difficulty building financial history</li>
            </ul>
          </div>
          
          <div className="solution-side">
            <h2>The KasiPay Solution</h2>
            <ul>
              <li><FiCheckCircle /> Accept digital payments easily</li>
              <li><FiCheckCircle /> Bank-grade security protection</li>
              <li><FiCheckCircle /> Automated financial tracking</li>
              <li><FiCheckCircle /> Multiple payment method support</li>
              <li><FiCheckCircle /> Build credit history digitally</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-section">
        <div className="section-container">
          <div className="section-header center">
            <h2 className="section-title">Complete Payment Solutions</h2>
            <p className="section-subtitle">
              Everything you need to manage payments and finances for your township business
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

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="section-container">
          <div className="section-header center">
            <h2 className="section-title">Simple, Transparent Pricing</h2>
            <p className="section-subtitle">
              No hidden fees, no setup costs - just clear pricing designed for township businesses
            </p>
          </div>
          
          <div className="pricing-cards">
            <div className="pricing-card">
              <div className="plan-name">Standard</div>
              <div className="plan-price">
                <div className="price">2.9% + R2</div>
                <div className="period">per successful transaction</div>
              </div>
              <div className="plan-features">
                <div className="feature">
                  <FiCheckCircle /> All payment methods
                </div>
                <div className="feature">
                  <FiCheckCircle /> Basic security features
                </div>
                <div className="feature">
                  <FiCheckCircle /> Email support
                </div>
              </div>
              <Link to="/contact" className="plan-button">
                Get Started
              </Link>
            </div>
            
            <div className="pricing-card recommended">
              <div className="recommended-badge">Most Popular</div>
              <div className="plan-name">Business Plus</div>
              <div className="plan-price">
                <div className="price">1.9% + R2</div>
                <div className="period">per successful transaction</div>
              </div>
              <div className="plan-features">
                <div className="feature">
                  <FiCheckCircle /> All payment methods
                </div>
                <div className="feature">
                  <FiCheckCircle /> Advanced security
                </div>
                <div className="feature">
                  <FiCheckCircle /> Priority support
                </div>
                <div className="feature">
                  <FiCheckCircle /> Financial analytics
                </div>
              </div>
              <Link to="/contact" className="plan-button">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits-section">
        <div className="section-container">
          <div className="benefits-content">
            <div className="benefits-text">
              <h2>Why Township Businesses Trust KasiPay</h2>
              <p>
                KasiPay is built specifically for the township business environment. 
                We understand the unique payment challenges and have created solutions 
                that work in real township market conditions.
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
                <div className="stat-number">98%</div>
                <div className="stat-label">Uptime reliability</div>
              </div>
              <div className="stat">
                <div className="stat-number">R2</div>
                <div className="stat-label">Flat fee per transaction</div>
              </div>
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Fraud monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="section-container">
          <div className="cta-content">
            <h2>Start Accepting Digital Payments Today</h2>
            <p>
              Join <strong>500+ township businesses</strong> already using KasiPay for secure, 
              reliable payments. Start your 14-day free trial today.
            </p>
            
            <div className="cta-buttons">
              <Link to="/contact" className="primary-btn">
                Start Free Trial <FiArrowRight />
              </Link>
              <Link to="/pricing" className="secondary-btn">
                View Full Pricing
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

export default Payments;
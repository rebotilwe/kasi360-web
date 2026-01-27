// pages/Services/Marketing.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FiCheck, FiArrowRight, FiTarget, FiTrendingUp, FiUsers } from "react-icons/fi";
// import "./Marketing.css";

function Marketing() {
  return (
    <div className="marketing-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="hero-content">
          <h1>Kasi<span className="gradient-text">Marketing</span></h1>
          <p className="subtitle">
            Hyperlocal digital marketing solutions specifically designed for township businesses.
          </p>
          <div className="hero-cta">
            <Link to="/demo" className="primary-btn">
              Get Started <FiArrowRight />
            </Link>
            <Link to="/pricing" className="secondary-btn">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-container">
          <h2>Everything You Need to Grow Online</h2>
          <div className="features-grid">
            <div className="feature-card">
              <FiTarget className="feature-icon" />
              <h3>Local SEO</h3>
              <p>Get found by customers in your township</p>
            </div>
            <div className="feature-card">
              <FiTrendingUp className="feature-icon" />
              <h3>Social Media Management</h3>
              <p>Build your brand on social platforms</p>
            </div>
            <div className="feature-card">
              <FiUsers className="feature-icon" />
              <h3>Customer Engagement</h3>
              <p>Connect with your community online</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <h2>Ready to Grow Your Business?</h2>
        <Link to="/contact" className="primary-btn">
          Start Today
        </Link>
      </section>
    </div>
  );
}

export default Marketing;
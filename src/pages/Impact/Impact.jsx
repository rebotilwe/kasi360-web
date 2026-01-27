// pages/Impact/Impact.jsx
import React from "react";
import { Link } from "react-router-dom";
import { 
  FiTrendingUp, 
  FiUsers, 
  FiDollarSign, 
  FiMapPin,
  FiGlobe,
  FiAward,
  FiArrowRight
} from "react-icons/fi";
import "./Impact.css";

function Impact() {
  const impactStats = [
    { icon: <FiTrendingUp />, value: "85%", label: "Revenue Increase", description: "Average revenue growth for businesses using Kasi360" },
    { icon: <FiUsers />, value: "500+", label: "Jobs Created", description: "New employment opportunities in township communities" },
    { icon: <FiDollarSign />, value: "R50M+", label: "Economic Impact", description: "Total economic value generated" },
    { icon: <FiMapPin />, value: "15+", label: "Communities", description: "Township communities transformed" }
  ];

  const successStories = [
    {
      name: "Mama Zandi's Spaza Shop",
      location: "Soweto, Johannesburg",
      impact: "Increased revenue by 120% in 6 months",
      story: "From handwritten receipts to digital inventory management"
    },
    {
      name: "Brother Mike's Salon",
      location: "Khayelitsha, Cape Town",
      impact: "Tripled customer base through digital marketing",
      story: "Now books appointments online and accepts mobile payments"
    },
    {
      name: "Siyabonga Tuckshop",
      location: "Mamelodi, Pretoria",
      impact: "Reduced costs by 30% with digital tools",
      story: "Streamlined ordering and inventory with our platform"
    }
  ];

  return (
    <div className="impact-page">
      {/* Hero Section */}
      <section className="impact-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Creating <span className="gradient-text">Measurable Impact</span>
          </h1>
          <p className="hero-subtitle">
            See how Kasi360 is transforming township economies, 
            one business at a time.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="impact-stats-section">
        <div className="section-container">
          <div className="stats-grid">
            {impactStats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-description">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="stories-section">
        <div className="section-container">
          <div className="section-header center">
            <span className="section-badge">Success Stories</span>
            <h2 className="section-title">Real Businesses, Real Results</h2>
            <p className="section-subtitle">
              Hear from township entrepreneurs who have transformed their businesses with Kasi360
            </p>
          </div>
          
          <div className="stories-grid">
            {successStories.map((story, index) => (
              <div key={index} className="story-card">
                <div className="story-content">
                  <h3 className="story-name">{story.name}</h3>
                  <div className="story-location">
                    <FiMapPin /> {story.location}
                  </div>
                  <div className="story-impact">{story.impact}</div>
                  <p className="story-text">{story.story}</p>
                </div>
                <Link to={`/success-stories/${story.name.toLowerCase().replace(/\s+/g, '-')}`} className="story-link">
                  Read Full Story <FiArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="community-section">
        <div className="section-container">
          <div className="community-content">
            <div className="community-text">
              <span className="section-badge">Community Impact</span>
              <h2 className="section-title">Beyond Business Growth</h2>
              <p className="community-description">
                Our impact extends beyond revenue numbers. We're building stronger, 
                more resilient township communities through digital empowerment.
              </p>
              <div className="community-benefits">
                <div className="benefit">
                  <div className="benefit-check">✓</div>
                  <span>Digital literacy programs for youth</span>
                </div>
                <div className="benefit">
                  <div className="benefit-check">✓</div>
                  <span>Women entrepreneurship support</span>
                </div>
                <div className="benefit">
                  <div className="benefit-check">✓</div>
                  <span>Community investment initiatives</span>
                </div>
                <div className="benefit">
                  <div className="benefit-check">✓</div>
                  <span>Skills development workshops</span>
                </div>
              </div>
            </div>
            <div className="community-visual">
              <div className="impact-map">
                {/* Add map visualization here */}
                <div className="map-placeholder">
                  <FiGlobe className="map-icon" />
                  <span>Impact Across South Africa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="recognition-section">
        <div className="section-container">
          <div className="section-header center">
            <span className="section-badge">Recognition</span>
            <h2 className="section-title">Award-Winning Impact</h2>
          </div>
          
          <div className="awards-grid">
            <div className="award-card">
              <FiAward className="award-icon" />
              <h3>Social Innovation Award 2023</h3>
              <p>Recognized for innovative approach to digital inclusion</p>
            </div>
            <div className="award-card">
              <FiAward className="award-icon" />
              <h3>Tech4Good Africa 2024</h3>
              <p>Top 10 tech startups creating social impact in Africa</p>
            </div>
            <div className="award-card">
              <FiAward className="award-icon" />
              <h3>DTI Enterprise Development</h3>
              <p>Government partnership for SME development</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="impact-cta">
        <div className="cta-container">
          <h2>Be Part of the Impact Story</h2>
          <p>
            Join us in creating sustainable economic growth in township communities.
          </p>
          <div className="cta-buttons">
            <Link to="/partner" className="primary-btn">
              Partner With Us
            </Link>
            <Link to="/success-stories" className="secondary-btn">
              More Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Impact;
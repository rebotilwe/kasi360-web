// pages/About/About.jsx
import React from "react";
import { Link } from "react-router-dom";
import { 
  FiTarget, 
  FiUsers, 
  FiGlobe, 
  FiAward,
  FiTrendingUp,
  FiHeart,
  FiCheckCircle,
  FiArrowRight
} from "react-icons/fi";
import TeamSection from "../../components/TeamSection/TeamSection";
import ValuesSection from "../../components/ValuesSection/ValuesSection";
import "./About.css";

function About() {
  const achievements = [
    { number: "5000+", label: "SMEs Empowered", icon: <FiUsers /> },
    { number: "R50M+", label: "Economic Impact", icon: <FiTrendingUp /> },
    { number: "15+", label: "Township Communities", icon: <FiGlobe /> },
    { number: "98%", label: "Satisfaction Rate", icon: <FiHeart /> }
  ];

  const journey = [
    { year: "2022", title: "Concept & Research", description: "Extensive research into township economy gaps" },
    { year: "2023", title: "Pilot Launch", description: "Successfully launched in 3 township communities" },
    { year: "2024", title: "Platform Launch", description: "Full Kasi360 ecosystem deployed" },
    { year: "2025", title: "National Expansion", description: "Expanding to 5 provinces across SA" }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Empowering <span className="gradient-text">Township Economy</span>
          </h1>
          <p className="hero-subtitle">
            Kasi360 is on a mission to bridge the digital divide and create sustainable 
            economic growth in South Africa's township communities.
          </p>
          <div className="hero-cta">
            <Link to="/contact" className="primary-btn">
              Partner With Us <FiArrowRight />
            </Link>
            <Link to="/demo" className="secondary-btn">
              Watch Our Story
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            {/* Add your hero image here */}
            <div className="placeholder-content">
              <span>Building Digital Bridges</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="section-container">
          <div className="mission-content">
            <div className="section-header">
              <span className="section-badge">Our Mission</span>
              <h2 className="section-title">Why We Exist</h2>
            </div>
            <p className="mission-text">
              In South Africa, 70% of township businesses lack access to basic digital tools, 
              creating a significant barrier to economic growth. Kasi360 was founded to bridge 
              this digital divide by providing affordable, accessible, and culturally relevant 
              digital solutions specifically designed for the township economy.
            </p>
            <div className="mission-stats">
              {achievements.map((achievement, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-icon">{achievement.icon}</div>
                  <div className="stat-number">{achievement.number}</div>
                  <div className="stat-label">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="mission-image">
            <div className="image-card">
              {/* Add mission image here */}
              <div className="card-content">
                <h3>Digital Inclusion Matters</h3>
                <p>Transforming township businesses one click at a time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="section-container">
          <div className="section-header center">
            <span className="section-badge">Our Journey</span>
            <h2 className="section-title">From Concept to Impact</h2>
            <p className="section-subtitle">
              How a simple idea evolved into a movement transforming township economies
            </p>
          </div>
          
          <div className="timeline">
            {journey.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-content">
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
                <div className="timeline-dot">
                  <div className="dot-inner"></div>
                </div>
              </div>
            ))}
            <div className="timeline-line"></div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <ValuesSection />

      {/* Team Section */}
      <TeamSection />

      {/* Impact Section */}
      <section className="impact-section">
        <div className="section-container">
          <div className="section-header center">
            <span className="section-badge">Our Impact</span>
            <h2 className="section-title">Creating Lasting Change</h2>
            <p className="section-subtitle">
              Measurable results that demonstrate our commitment to township communities
            </p>
          </div>
          
          <div className="impact-grid">
            <div className="impact-card">
              <FiTarget className="impact-icon" />
              <h3>Economic Empowerment</h3>
              <p>Increased revenue for 85% of businesses using Kasi360 tools</p>
              <div className="impact-number">85%</div>
            </div>
            
            <div className="impact-card">
              <FiUsers className="impact-icon" />
              <h3>Job Creation</h3>
              <p>Supported creation of 500+ new jobs in township communities</p>
              <div className="impact-number">500+</div>
            </div>
            
            <div className="impact-card">
              <FiCheckCircle className="impact-icon" />
              <h3>Digital Literacy</h3>
              <p>Digital skills training completed by 3,000+ entrepreneurs</p>
              <div className="impact-number">3,000+</div>
            </div>
            
            <div className="impact-card">
              <FiAward className="impact-icon" />
              <h3>Recognition</h3>
              <p>National awards for innovation and social impact</p>
              <div className="impact-number">5 Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="cta-container">
          <h2>Ready to Join the Movement?</h2>
          <p>
            Whether you're a township business owner, corporate partner, or community leader, 
            there's a place for you in the Kasi360 ecosystem.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="primary-btn">
              Get Started <FiArrowRight />
            </Link>
            <Link to="/ecosystem" className="secondary-btn">
              Explore Ecosystem
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
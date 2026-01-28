// pages/About/About.jsx - UPDATED VERSION
import React from "react";
import { Link } from "react-router-dom";
// Replace the icon imports with:
import { 
  FiTarget, 
  FiUsers, 
  FiGlobe, 
  FiAward,
  FiTrendingUp,
  FiHeart,
  FiCheckCircle,
  FiArrowRight,
  FiSmartphone,
  FiDollarSign,
  FiShield,
  FiMapPin,
  FiCreditCard,
  FiBookOpen  // Changed from FiBook to FiBookOpen
} from "react-icons/fi";
import TeamSection from "../../components/TeamSection/TeamSection";
import ValuesSection from "../../components/ValuesSection/ValuesSection";
import "./About.css";

function About() {
  const townshipStats = [
    { number: "70%", label: "of SA Businesses are SMEs", icon: <FiUsers />, color: "#00C853" },
    { number: "34%", label: "Contribution to GDP", icon: <FiDollarSign />, color: "#0D47A1" },
    { number: "98%", label: "Lack Digital Tools", icon: <FiSmartphone />, color: "#FF6D00" },
    { number: "R2,000", label: "Starting Cost", icon: <FiTarget />, color: "#9C27B0" }
  ];

  const kasi360Highlights = [
    { 
      icon: <FiMapPin />, 
      title: "Hyperlocal Design", 
      description: "Specifically built for the unique township business environment",
      color: "#00C853"
    },
    { 
      icon: <FiShield />, 
      title: "Holistic Approach", 
      description: "Combines fintech, safety, and training in one ecosystem",
      color: "#0D47A1"
    },
    { 
      icon: <FiCreditCard />, 
      title: "Affordability", 
      description: "One of the lowest cost-to-benefit ratios in the market",
      color: "#FF6D00"
    },
    { 
      icon: <FiUsers />, 
      title: "Strong Backing", 
      description: "Supported by provincial and national stakeholders",
      color: "#9C27B0"
    }
  ];

  const journey = [
    { 
      year: "2022", 
      title: "Research & Discovery", 
      description: "Identified the 98% digital gap in township businesses and began developing hyperlocal solutions",
      achievement: "Problem identification complete"
    },
    { 
      year: "2023", 
      title: "Pilot Launch", 
      description: "Successfully tested Kasi360 ecosystem in 3 township communities with 50+ businesses",
      achievement: "Proven concept in real township environments"
    },
    { 
      year: "2024", 
      title: "Platform Launch", 
      description: "Full Kasi360 ecosystem launched with KasiMarketing, fintech tools, and safety features",
      achievement: "500+ businesses onboarded"
    },
    { 
      year: "2025", 
      title: "National Expansion", 
      description: "Expanding to 5 provinces with target of empowering 5,000+ township SMEs",
      achievement: "R50M+ economic impact generated"
    }
  ];

  const impactStats = [
    { value: "500+", label: "Businesses Empowered", description: "Township SMEs using Kasi360 tools" },
    { value: "85%", label: "Revenue Increase", description: "Average growth for Kasi360 businesses" },
    { value: "2,000+", label: "Jobs Created", description: "In township communities" },
    { value: "18-24", label: "Months to Break-even", description: "Average timeline for businesses" }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Empowering South Africa's <span className="gradient-text">Township Economy</span>
          </h1>
          <p className="hero-subtitle">
            Kasi360 bridges the digital divide for township SMEs and informal traders. 
            Through <strong>Technology, Access, and Growth</strong>, we're transforming 
            the 98% of businesses that lack digital tools into thriving digital enterprises.
          </p>
          
          <div className="township-stats-overview">
            <div className="stat-bubble" style={{ background: 'rgba(0, 200, 83, 0.1)' }}>
              <span className="stat-number">70%</span>
              <span className="stat-label">of SA Businesses</span>
            </div>
            <div className="stat-bubble" style={{ background: 'rgba(13, 71, 161, 0.1)' }}>
              <span className="stat-number">34%</span>
              <span className="stat-label">GDP Contribution</span>
            </div>
            <div className="stat-bubble" style={{ background: 'rgba(255, 109, 0, 0.1)' }}>
              <span className="stat-number">98%</span>
              <span className="stat-label">Digital Gap</span>
            </div>
          </div>
          
          <div className="hero-cta">
            <Link to="/contact" className="primary-btn">
              Partner With Us <FiArrowRight />
            </Link>
            <Link to="/demo" className="secondary-btn">
              <FiSmartphone /> Watch Demo
            </Link>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="image-placeholder">
            <div className="placeholder-content">
              <div className="hero-badge">
                <FiTarget /> Kasi360 Ecosystem
              </div>
              <h3>Technology • Access • Growth</h3>
              <p>Transforming township businesses with digital solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="problem-section">
        <div className="section-container">
          <div className="section-header center">
            <span className="section-badge">The Challenge</span>
            <h2 className="section-title">The Township Digital Divide</h2>
            <p className="section-subtitle">
              Understanding the barriers that hold back South Africa's township economy
            </p>
          </div>
          
          <div className="stats-grid">
            {townshipStats.map((stat, index) => (
              <div key={index} className="stat-card" style={{ borderLeftColor: stat.color }}>
                <div className="stat-icon" style={{ color: stat.color }}>
                  {stat.icon}
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="problem-statement">
            <p>
              Despite contributing <strong>34% to South Africa's GDP</strong>, township businesses 
              face a critical <strong>98% digital gap</strong>. Most operate with cash-only transactions, 
              manual record-keeping, and limited market access. Kasi360 exists to bridge this divide 
              with solutions starting from just <strong>R2,000</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="solution-section">
        <div className="section-container">
          <div className="section-header center">
            <span className="section-badge">Our Solution</span>
            <h2 className="section-title">The Kasi360 Ecosystem</h2>
            <p className="section-subtitle">
              A holistic approach designed specifically for township business needs
            </p>
          </div>
          
          <div className="solution-highlights">
            {kasi360Highlights.map((highlight, index) => (
              <div key={index} className="highlight-card" style={{ borderTopColor: highlight.color }}>
                <div className="highlight-icon" style={{ color: highlight.color }}>
                  {highlight.icon}
                </div>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </div>
            ))}
          </div>
          
          <div className="ecosystem-visual">
            <div className="ecosystem-wheel">
              <div className="wheel-center">
                <h4>Kasi360</h4>
                <p>Ecosystem</p>
              </div>
              <div className="wheel-item" style={{ transform: 'rotate(0deg) translate(120px)' }}>
                <FiTrendingUp />
                <span>KasiMarketing</span>
              </div>
              <div className="wheel-item" style={{ transform: 'rotate(90deg) translate(120px)' }}>
                <FiCreditCard />
                <span>Fintech</span>
              </div>
              <div className="wheel-item" style={{ transform: 'rotate(180deg) translate(120px)' }}>
                <FiShield />
                <span>Safety</span>
              </div>
              <div className="wheel-item" style={{ transform: 'rotate(270deg) translate(120px)' }}>
          <FiBookOpen />
                <span>Training</span>
              </div>
            </div>
            <div className="ecosystem-description">
              <h3>Holistic Business Support</h3>
              <p>
                Unlike piecemeal solutions, Kasi360 provides comprehensive support covering 
                marketing, payments, safety, and training—all designed for township contexts.
              </p>
              <Link to="/ecosystem" className="learn-more-btn">
                Explore Full Ecosystem <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="journey-section">
        <div className="section-container">
          <div className="section-header center">
            <span className="section-badge">Our Journey</span>
            <h2 className="section-title">Building Kasi360</h2>
            <p className="section-subtitle">
              From identifying the problem to creating nationwide impact
            </p>
          </div>
          
          <div className="timeline">
            <div className="timeline-line"></div>
            {journey.map((milestone, index) => (
              <div key={index} className="timeline-milestone">
                <div className="milestone-year" style={{ background: milestone.color }}>
                  {milestone.year}
                </div>
                <div className="milestone-content">
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                  <div className="milestone-achievement">
                    <FiCheckCircle /> {milestone.achievement}
                  </div>
                </div>
                <div className="milestone-dot">
                  <div className="dot-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <ValuesSection />

      {/* Impact Section */}
      <section className="impact-section">
        <div className="section-container">
          <div className="section-header center">
            <span className="section-badge">Our Impact</span>
            <h2 className="section-title">Measurable Results</h2>
            <p className="section-subtitle">
              Transforming township businesses with tangible outcomes
            </p>
          </div>
          
          <div className="impact-stats">
            {impactStats.map((stat, index) => (
              <div key={index} className="impact-stat">
                <div className="impact-number">{stat.value}</div>
                <div className="impact-label">{stat.label}</div>
                <div className="impact-description">{stat.description}</div>
              </div>
            ))}
          </div>
          
          <div className="impact-testimonial">
            <div className="testimonial-content">
              <FiHeart className="quote-icon" />
              <blockquote>
                "Kasi360 didn't just give us tools—they understood our township context. 
                The hyperlocal design made all the difference for our business."
              </blockquote>
              <cite>— Thabo Mokoena, Owner of Thabo's Corner Store, Soweto</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* CTA Section */}
      <section className="about-cta">
        <div className="cta-container">
          <div className="cta-badge">
            <FiTarget /> Join the Movement
          </div>
          <h2>Be Part of the Township Digital Revolution</h2>
          <p>
            Whether you're a township business owner, corporate partner, investor, or 
            community leader—there's a place for you in the Kasi360 ecosystem. 
            Together, we can bridge the 98% digital gap.
          </p>
          
          <div className="cta-stats">
            <div className="cta-stat">
              <div className="stat-number">R2,000</div>
              <div className="stat-label">Starting Cost</div>
            </div>
            <div className="cta-stat">
              <div className="stat-number">18-24</div>
              <div className="stat-label">Months to Break-even</div>
            </div>
            <div className="cta-stat">
              <div className="stat-number">98%</div>
              <div className="stat-label">Digital Adoption</div>
            </div>
          </div>
          
          <div className="cta-buttons">
            <Link to="/get-started" className="primary-btn">
              Start Your Journey <FiArrowRight />
            </Link>
            <Link to="/partner" className="secondary-btn">
              Partner With Us
            </Link>
            <Link to="/success-stories" className="text-btn">
              See Success Stories <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
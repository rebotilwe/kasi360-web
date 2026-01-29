// pages/Partner/Partner.jsx - UPDATED VERSION
import React from "react";
import { Link } from "react-router-dom";
import { 
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiCheckCircle,
  FiArrowRight,
  FiGlobe,
  FiBarChart,
  FiShield,
  FiAward,
  FiHeart,
  FiMapPin,
  FiMessageSquare
} from "react-icons/fi";
// FiHandshake doesn't exist in react-icons/fi, using FiUsers instead
import "./Partner.css";

function Partner() {
  const partnershipTypes = [
    {
      title: "Corporate Partners",
      description: "Large corporations supporting township economic development",
      icon: <FiGlobe />,
      color: "#00C853",
      benefits: [
        "CSR impact measurement",
        "Supply chain development",
        "Brand alignment with social impact",
        "Employee engagement programs"
      ],
      examples: "Microsoft, SEDFA, Provincial Government"
    },
    {
      title: "Financial Institutions",
      description: "Banks and financial services supporting township SMEs",
      icon: <FiBarChart />,
      color: "#0D47A1",
      benefits: [
        "Financial inclusion initiatives",
        "Digital payment integration",
        "Credit access programs",
        "Financial literacy training"
      ],
      examples: "Major banks, microfinance institutions"
    },
    {
      title: "Technology Partners",
      description: "Tech companies providing tools and platforms",
      icon: <FiShield />,
      color: "#FF6D00",
      benefits: [
        "Technology integration",
        "Platform development",
        "Digital infrastructure",
        "Innovation partnerships"
      ],
      examples: "Software companies, hardware providers"
    },
    {
      title: "Community Organizations",
      description: "NGOs and community groups working in townships",
      icon: <FiUsers />,
      color: "#9C27B0",
      benefits: [
        "Grassroots outreach",
        "Local knowledge sharing",
        "Community mobilization",
        "Impact measurement"
      ],
      examples: "Township associations, business forums"
    }
  ];

  const partnershipBenefits = [
    {
      icon: <FiTarget />,
      title: "Direct Impact",
      description: "Measureable social and economic impact in township communities"
    },
    {
      icon: <FiTrendingUp />,
      title: "Market Access",
      description: "Connect with 70% of South Africa's business ecosystem"
    },
    {
      icon: <FiAward />,
      title: "Brand Enhancement",
      description: "Align your brand with sustainable development goals"
    },
    {
      icon: <FiHeart />,
      title: "Social ROI",
      description: "Tangible social return on investment through community upliftment"
    }
  ];

  const partnershipProcess = [
    {
      step: "01",
      title: "Discovery & Alignment",
      description: "Understand mutual goals and impact objectives"
    },
    {
      step: "02",
      title: "Program Design",
      description: "Co-create partnership program and success metrics"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Launch partnership with clear roles and responsibilities"
    },
    {
      step: "04",
      title: "Impact Measurement",
      description: "Track progress and optimize for maximum impact"
    }
  ];

  const successStories = [
    {
      partner: "Microsoft South Africa",
      impact: "Digital skills training for 500+ township businesses",
      quote: "Partnering with Kasi360 allows us to extend our digital transformation mission directly into township communities.",
      logo: "M"
    },
    {
      partner: "Economic Development Gauteng",
      impact: "Supported 200 SMEs through Kasi360 ecosystem",
      quote: "This partnership exemplifies public-private collaboration for inclusive economic growth.",
      logo: "EDG"
    }
  ];

  return (
    <div className="partner-page">
      {/* Hero Section */}
      <section className="partner-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Partner With <span className="gradient-text">Kasi360</span>
          </h1>
          <p className="hero-subtitle">
            Join our mission to transform South Africa's township economy through 
            innovative public-private partnerships and collaborative impact initiatives.
          </p>
          
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">70%</div>
              <div className="stat-label">of SA Businesses</div>
            </div>
            <div className="stat">
              <div className="stat-number">500+</div>
              <div className="stat-label">Businesses Impacted</div>
            </div>
            <div className="stat">
              <div className="stat-number">18-24</div>
              <div className="stat-label">Months to Break-even</div>
            </div>
          </div>
          
          <div className="hero-badge">
            <FiUsers /> Part of the Kasi360 Ecosystem: Technology • Access • Growth
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="why-partner">
        <div className="section-container">
          <div className="section-header center">
            <span className="section-badge">Why Partner With Us</span>
            <h2 className="section-title">Creating Shared Value</h2>
            <p className="section-subtitle">
              Together, we can bridge the digital divide and create sustainable economic 
              growth in South Africa's township communities.
            </p>
          </div>

          <div className="benefits-grid">
            {partnershipBenefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon" style={{ color: benefit.color || "#00C853" }}>
                  {benefit.icon}
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="impact-statement">
            <div className="impact-icon">
              <FiMapPin />
            </div>
            <div className="impact-text">
              <h3>Hyperlocal Impact</h3>
              <p>
                Unlike traditional partnerships, Kasi360 partnerships are <strong>specifically designed 
                for township contexts</strong>. We understand the unique challenges and opportunities 
                of township businesses, ensuring your partnership creates <strong>measurable, sustainable impact</strong> 
                where it matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="partnership-types">
        <div className="section-container">
          <div className="section-header center">
            <h2 className="section-title">Partnership Opportunities</h2>
            <p className="section-subtitle">
              Various ways to collaborate based on your organization's goals and capabilities
            </p>
          </div>

          <div className="partnership-cards">
            {partnershipTypes.map((type, index) => (
              <div key={index} className="partnership-card" style={{ borderColor: type.color }}>
                <div className="card-header">
                  <div className="type-icon" style={{ color: type.color }}>
                    {type.icon}
                  </div>
                  <div className="type-titles">
                    <h3>{type.title}</h3>
                    <p className="type-description">{type.description}</p>
                  </div>
                </div>

                <div className="type-benefits">
                  <h4>Partnership Benefits:</h4>
                  <ul>
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx}>
                        <FiCheckCircle /> {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="type-examples">
                  <strong>Example Partners:</strong> {type.examples}
                </div>

                <Link to="/contact" className="explore-partnership">
                  Explore Partnership <FiArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="partnership-process">
        <div className="section-container">
          <div className="section-header center">
            <h2 className="section-title">Our Partnership Process</h2>
            <p className="section-subtitle">
              A structured approach to ensure successful, impactful collaborations
            </p>
          </div>

          <div className="process-timeline">
            {partnershipProcess.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number" style={{ backgroundColor: step.color || "#00C853" }}>
                  {step.step}
                </div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                {index < partnershipProcess.length - 1 && (
                  <div className="step-connector">
                    <FiArrowRight />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="success-stories">
        <div className="section-container">
          <div className="section-header center">
            <span className="section-badge">Success Stories</span>
            <h2 className="section-title">Current Partners Making Impact</h2>
            <p className="section-subtitle">
              See how leading organizations are partnering with Kasi360 to drive change
            </p>
          </div>

          <div className="stories-grid">
            {successStories.map((story, index) => (
              <div key={index} className="story-card">
                <div className="story-header">
                  <div className="partner-logo">
                    {story.logo}
                  </div>
                  <div className="partner-info">
                    <h3>{story.partner}</h3>
                    <div className="partner-impact">
                      <FiCheckCircle /> {story.impact}
                    </div>
                  </div>
                </div>

                <blockquote className="partner-quote">
                  "{story.quote}"
                </blockquote>

                <div className="story-cta">
                  <Link to="/case-studies" className="read-more">
                    Read Full Case Study
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Principles */}
      <section className="partnership-principles">
        <div className="section-container">
          <div className="principles-content">
            <div className="principles-header">
              <h2>Our Partnership Principles</h2>
              <p>
                Every Kasi360 partnership is built on these core principles to ensure 
                mutual benefit and sustainable impact.
              </p>
            </div>

            <div className="principles-list">
              <div className="principle">
                <FiCheckCircle />
                <div>
                  <strong>Mutual Benefit:</strong> Partnerships must create value for both organizations
                </div>
              </div>
              <div className="principle">
                <FiCheckCircle />
                <div>
                  <strong>Township-First:</strong> All initiatives prioritize township community needs
                </div>
              </div>
              <div className="principle">
                <FiCheckCircle />
                <div>
                  <strong>Transparency:</strong> Clear communication and measurable outcomes
                </div>
              </div>
              <div className="principle">
                <FiCheckCircle />
                <div>
                  <strong>Sustainability:</strong> Long-term impact over short-term gains
                </div>
              </div>
              <div className="principle">
                <FiCheckCircle />
                <div>
                  <strong>Innovation:</strong> Continuous improvement and adaptation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="partner-cta">
        <div className="section-container">
          <div className="cta-content">
            <div className="cta-icon">
              <FiUsers /> {/* Changed from FiHandshake to FiUsers */}
            </div>
            
            <h2>Ready to Partner With Us?</h2>
            <p>
              Join <strong>Microsoft, Economic Development Gauteng, Black Business Council, 
              and SEDFA</strong> in transforming South Africa's township economy. 
              Together, we can bridge the <strong>98% digital gap</strong> and create 
              sustainable economic growth.
            </p>

            <div className="cta-features">
              <div className="feature">
                <FiCheckCircle /> Hyperlocal township expertise
              </div>
              <div className="feature">
                <FiCheckCircle /> Proven impact model
              </div>
              <div className="feature">
                <FiCheckCircle /> Scalable ecosystem approach
              </div>
            </div>

            <div className="cta-buttons">
              <Link to="/contact" className="primary-btn">
                Start Partnership Conversation
              </Link>
              <Link to="/downloads/partnership-proposal.pdf" className="secondary-btn">
                Download Partnership Proposal
              </Link>
              <Link to="/schedule" className="text-btn">
                <FiMessageSquare /> Schedule Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Partner;
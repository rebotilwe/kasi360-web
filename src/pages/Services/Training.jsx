// pages/Services/Training.jsx
import React from "react";
import { Link } from "react-router-dom";
import { 
  FiUsers,
  FiCheckCircle,
  FiArrowRight,
  FiBookOpen,
  FiTrendingUp,
  FiTarget,
  FiAward,
  FiVideo,
  FiHeadphones,
  FiMessageSquare,
  FiCalendar,
  FiGlobe
} from "react-icons/fi";
import "./ServiceDetail.css";

function Training() {
  const programs = [
    {
      icon: <FiBookOpen />,
      title: "Digital Literacy",
      description: "Essential digital skills for running a modern business",
      modules: ["Basic computer skills", "Internet navigation", "Mobile app usage", "Online safety"]
    },
    {
      icon: <FiTrendingUp />,
      title: "Business Management",
      description: "Core business skills for sustainable growth",
      modules: ["Financial management", "Inventory control", "Customer service", "Marketing basics"]
    },
    {
      icon: <FiTarget />,
      title: "Kasi360 Platform Training",
      description: "Master all Kasi360 tools and features",
      modules: ["Storefront setup", "Payment processing", "Marketing tools", "Analytics usage"]
    },
    {
      icon: <FiAward />,
      title: "Advanced Growth",
      description: "Scaling your township business to new levels",
      modules: ["Business planning", "Hiring staff", "Multiple locations", "Brand building"]
    }
  ];

  const benefits = [
    {
      title: "Practical Skills",
      description: "Learn skills you can apply immediately to your business"
    },
    {
      title: "Township-Focused",
      description: "Content designed specifically for township business contexts"
    },
    {
      title: "Flexible Learning",
      description: "Learn at your own pace with mobile-friendly content"
    },
    {
      title: "Community Support",
      description: "Join a community of township entrepreneurs"
    }
  ];

  const trainingFormats = [
    {
      type: "Online Courses",
      icon: <FiVideo />,
      features: ["Self-paced learning", "Video tutorials", "Interactive quizzes", "Mobile access"]
    },
    {
      type: "Live Workshops",
      icon: <FiUsers />,
      features: ["In-person sessions", "Group learning", "Q&A sessions", "Networking"]
    },
    {
      type: "1-on-1 Coaching",
      icon: <FiMessageSquare />,
      features: ["Personalized guidance", "Business reviews", "Goal setting", "Accountability"]
    }
  ];

  return (
    <div className="service-detail-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="hero-content">
          <div className="service-badge">
            <FiUsers /> Kasi360 Service
          </div>
          <h1 className="hero-title">Training & Support</h1>
          <p className="hero-subtitle">
            Comprehensive training programs designed specifically for township 
            business owners. Learn digital skills, business management, and 
            how to maximize the Kasi360 ecosystem.
          </p>
          
          <div className="hero-highlights">
            <div className="highlight">
              <FiCheckCircle /> Township-specific curriculum
            </div>
            <div className="highlight">
              <FiCheckCircle /> Mobile-friendly learning
            </div>
            <div className="highlight">
              <FiCheckCircle /> Ongoing community support
            </div>
          </div>
          
          <div className="hero-cta">
            <Link to="/training/contact" className="primary-btn">
              Start Learning Free
            </Link>
            <Link to="/demo" className="secondary-btn">
              <FiHeadphones /> Book Demo
            </Link>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="image-placeholder">
            <div className="placeholder-content">
              <FiUsers className="service-icon" />
              <h3>Learn. Grow. Succeed.</h3>
              <p>Training for township entrepreneurs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="problem-solution">
        <div className="section-container">
          <div className="problem-side">
            <h2>The Skills Gap in Townships</h2>
            <ul>
              <li><FiBookOpen /> Limited digital literacy skills</li>
              <li><FiTrendingUp /> No formal business training</li>
              <li><FiTarget /> Difficulty using new technologies</li>
              <li><FiAward /> No clear growth pathways</li>
              <li><FiGlobe /> Isolation from business networks</li>
            </ul>
          </div>
          
          <div className="solution-side">
            <h2>The Kasi360 Training Solution</h2>
            <ul>
              <li><FiCheckCircle /> Comprehensive digital skills training</li>
              <li><FiCheckCircle /> Practical business management courses</li>
              <li><FiCheckCircle /> Hands-on technology training</li>
              <li><FiCheckCircle /> Structured growth programs</li>
              <li><FiCheckCircle /> Community networking opportunities</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="programs-section">
        <div className="section-container">
          <div className="section-header center">
            <h2 className="section-title">Comprehensive Training Programs</h2>
            <p className="section-subtitle">
              Structured learning paths designed specifically for township business needs
            </p>
          </div>
          
          <div className="programs-grid">
            {programs.map((program, index) => (
              <div key={index} className="program-card">
                <div className="program-icon">{program.icon}</div>
                <h3>{program.title}</h3>
                <p className="program-description">{program.description}</p>
                
                <div className="program-modules">
                  <strong>Includes:</strong>
                  <div className="modules-list">
                    {program.modules.map((module, idx) => (
                      <div key={idx} className="module">
                        <FiCheckCircle /> {module}
                      </div>
                    ))}
                  </div>
                </div>
                
                <Link to={`/training/${program.title.toLowerCase().replace(/\s+/g, '-')}`} className="program-link">
                  Explore Program <FiArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Formats */}
      <section className="formats-section">
        <div className="section-container">
          <div className="section-header center">
            <h2 className="section-title">Flexible Learning Formats</h2>
            <p className="section-subtitle">
              Choose the learning style that works best for you and your business
            </p>
          </div>
          
          <div className="formats-grid">
            {trainingFormats.map((format, index) => (
              <div key={index} className="format-card">
                <div className="format-icon">{format.icon}</div>
                <h3>{format.type}</h3>
                <div className="format-features">
                  {format.features.map((feature, idx) => (
                    <div key={idx} className="feature">
                      <FiCheckCircle /> {feature}
                    </div>
                  ))}
                </div>
                <div className="format-suitable">
                  <strong>Best for:</strong> {index === 0 ? "Self-starters" : index === 1 ? "Group learners" : "Personalized growth"}
                </div>
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
              <h2>Why Our Training is Different</h2>
              <p>
                Unlike generic business training, Kasi360 programs are designed 
                specifically for township contexts. We understand the unique challenges 
                and opportunities of township businesses.
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
                <div className="stat-number">500+</div>
                <div className="stat-label">Businesses Trained</div>
              </div>
              <div className="stat">
                <div className="stat-number">85%</div>
                <div className="stat-label">Apply skills immediately</div>
              </div>
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Learning access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="section-container">
          <div className="cta-content">
            <h2>Start Your Learning Journey Today</h2>
            <p>
              Join <strong>500+ township businesses</strong> already growing their skills 
              with Kasi360 Training. Access free introductory courses or enroll in 
              our comprehensive programs.
            </p>
            
            <div className="cta-buttons">
              <Link to="/training/contact" className="primary-btn">
                Browse Courses <FiArrowRight />
              </Link>
              <Link to="/training/consultation" className="secondary-btn">
                Free Training Consultation
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

export default Training;
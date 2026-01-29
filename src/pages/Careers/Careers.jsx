// pages/Careers/Careers.jsx
import React from "react";
import { Link } from "react-router-dom";
import { 
  FiUsers,
  FiTarget,
  FiHeart,
  FiAward,
  FiTrendingUp,
  FiArrowRight,
  FiCheckCircle,
  FiMapPin,
  FiCalendar,
  FiDollarSign,
  FiCoffee,
  FiBookOpen,
  FiGlobe,
  FiHome,
  FiBriefcase
} from "react-icons/fi";
import "./Careers.css";

function Careers() {
  const openPositions = [
    {
      title: "Township Business Development Manager",
      department: "Business Development",
      location: "Johannesburg, Gauteng",
      type: "Full-time",
      experience: "3-5 years",
      color: "#00C853",
      description: "Drive adoption of Kasi360 ecosystem in township communities and build relationships with local business associations.",
      responsibilities: [
        "Community engagement and relationship building",
        "Business development in township markets",
        "Partnership development with local stakeholders",
        "Market research and opportunity identification"
      ]
    },
    {
      title: "Digital Training Specialist",
      department: "Training & Development",
      location: "Cape Town, Western Cape",
      type: "Full-time",
      experience: "2-4 years",
      color: "#0D47A1",
      description: "Design and deliver digital literacy training programs specifically for township SMEs and informal traders.",
      responsibilities: [
        "Curriculum development for township businesses",
        "Workshop facilitation and training delivery",
        "Learning material creation",
        "Training program evaluation"
      ]
    },
    {
      title: "Mobile App Developer",
      department: "Technology",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      color: "#FF6D00",
      description: "Build and maintain mobile applications for the Kasi360 ecosystem, focusing on low-data environments.",
      responsibilities: [
        "Mobile app development (React Native)",
        "API integration and optimization",
        "Performance optimization for low-data usage",
        "App store deployment and maintenance"
      ]
    },
    {
      title: "Community Support Specialist",
      department: "Customer Success",
      location: "Durban, KwaZulu-Natal",
      type: "Full-time",
      experience: "1-3 years",
      color: "#9C27B0",
      description: "Provide dedicated support to Kasi360 users in township communities, ensuring successful adoption.",
      responsibilities: [
        "Customer support and troubleshooting",
        "User onboarding and training",
        "Feedback collection and reporting",
        "Community relationship management"
      ]
    }
  ];

  const benefits = [
    {
      icon: <FiTarget />,
      title: "Meaningful Impact",
      description: "Directly contribute to transforming South Africa's township economy"
    },
    {
      icon: <FiTrendingUp />,
      title: "Career Growth",
      description: "Rapid growth opportunities in a scaling social enterprise"
    },
    {
      icon: <FiBookOpen />,
      title: "Continuous Learning",
      description: "Regular training and professional development opportunities"
    },
    {
      icon: <FiCoffee />,
      title: "Flexible Work",
      description: "Remote-friendly environment with flexible working hours"
    },
    {
      icon: <FiGlobe />,
      title: "Diverse Team",
      description: "Work with passionate people from diverse backgrounds"
    },
    {
      icon: <FiHeart />,
      title: "Health & Wellness",
      description: "Comprehensive health benefits and wellness programs"
    }
  ];

  const cultureValues = [
    {
      title: "Township-First Mindset",
      description: "Everything we do starts with understanding township business needs",
      icon: <FiMapPin />
    },
    {
      title: "Collaborative Spirit",
      description: "We succeed together through teamwork and shared goals",
      icon: <FiUsers />
    },
    {
      title: "Innovative Thinking",
      description: "We challenge norms and find creative solutions to complex problems",
      icon: <FiAward />
    },
    {
      title: "Impact-Driven",
      description: "We measure success by the businesses we transform, not just profits",
      icon: <FiTarget />
    }
  ];

  const applicationProcess = [
    {
      step: "Apply",
      description: "Submit your application through our portal",
      icon: <FiBriefcase />
    },
    {
      step: "Interview",
      description: "Virtual interview with our team",
      icon: <FiUsers />
    },
    {
      step: "Case Study",
      description: "Practical assessment of relevant skills",
      icon: <FiBookOpen />
    },
    {
      step: "Offer",
      description: "Join the Kasi360 team!",
      icon: <FiCheckCircle />
    }
  ];

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Build Your Career <span className="gradient-text">With Impact</span>
          </h1>
          <p className="hero-subtitle">
            Join Kasi360 in transforming South Africa's township economy. 
            Work on meaningful projects that directly empower township SMEs and informal traders.
          </p>
          
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">500+</div>
              <div className="stat-label">Businesses Impacted</div>
            </div>
            <div className="stat">
              <div className="stat-number">70%</div>
              <div className="stat-label">of SA Market</div>
            </div>
            <div className="stat">
              <div className="stat-number">R2,000</div>
              <div className="stat-label">Starting Investment</div>
            </div>
          </div>
          
          <div className="hero-badge">
            <FiHeart /> Work that matters. Impact that lasts.
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="why-work">
        <div className="section-container">
          <div className="section-header center">
            <span className="section-badge">Why Kasi360</span>
            <h2 className="section-title">More Than Just a Job</h2>
            <p className="section-subtitle">
              Join a mission-driven team creating real change in South Africa's township communities
            </p>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon" style={{ color: benefit.color || "#00C853" }}>
                  {benefit.icon}
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="open-positions">
        <div className="section-container">
          <div className="section-header center">
            <h2 className="section-title">Current Openings</h2>
            <p className="section-subtitle">
              Join our team and help bridge the 98% digital gap in township businesses
            </p>
          </div>

          <div className="positions-grid">
            {openPositions.map((position, index) => (
              <div key={index} className="position-card" style={{ borderColor: position.color }}>
                <div className="position-header">
                  <div className="position-titles">
                    <h3>{position.title}</h3>
                    <div className="position-department">
                      {position.department}
                    </div>
                  </div>
                  
                  <div className="position-tags">
                    <span className="tag location">
                      <FiMapPin /> {position.location}
                    </span>
                    <span className="tag type">
                      <FiCalendar /> {position.type}
                    </span>
                    <span className="tag experience">
                      <FiBriefcase /> {position.experience}
                    </span>
                  </div>
                </div>

                <p className="position-description">{position.description}</p>

                <div className="position-responsibilities">
                  <h4>Key Responsibilities:</h4>
                  <ul>
                    {position.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>
                        <FiCheckCircle /> {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="position-actions">
                  <Link to={`/careers/apply/${position.title.toLowerCase().replace(/\s+/g, '-')}`} className="apply-btn">
                    Apply Now <FiArrowRight />
                  </Link>
                  <Link to={`/careers/${position.title.toLowerCase().replace(/\s+/g, '-')}`} className="view-details">
                    View Full Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="no-match">
            <p>
              Don't see a perfect match? We're always looking for talented people who share our mission.
              <Link to="/contact" className="send-cv"> Send us your CV</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="culture-values">
        <div className="section-container">
          <div className="section-header center">
            <h2 className="section-title">Our Culture & Values</h2>
            <p className="section-subtitle">
              What makes Kasi360 a special place to work and grow
            </p>
          </div>

          <div className="values-grid">
            {cultureValues.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>

          <div className="culture-statement">
            <div className="statement-icon">
              <FiHeart />
            </div>
            <div className="statement-text">
              <h3>A Purpose-Driven Workplace</h3>
              <p>
                At Kasi360, you'll work alongside passionate individuals who believe in creating 
                <strong> sustainable economic change</strong>. We combine the innovation of a tech startup 
                with the purpose of a social enterprise. Every team member plays a direct role in 
                empowering township businesses and <strong>bridging the digital divide</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="application-process">
        <div className="section-container">
          <div className="section-header center">
            <h2 className="section-title">Our Hiring Process</h2>
            <p className="section-subtitle">
              Simple, transparent, and designed to find the right fit for both you and Kasi360
            </p>
          </div>

          <div className="process-steps">
            {applicationProcess.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{index + 1}</div>
                <div className="step-icon">{step.icon}</div>
                <h3>{step.step}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stories */}
      <section className="team-stories">
        <div className="section-container">
          <div className="section-header center">
            <span className="section-badge">Meet The Team</span>
            <h2 className="section-title">Life at Kasi360</h2>
            <p className="section-subtitle">
              Hear from team members about their experiences working at Kasi360
            </p>
          </div>

          <div className="stories-grid">
            <div className="story-card">
              <div className="story-content">
                <blockquote>
                  "Working at Kasi360 has been transformative. I get to combine my tech skills 
                  with making a real difference in township communities. Every day, I see how 
                  our work directly impacts businesses and creates opportunities."
                </blockquote>
                <div className="story-author">
                  <div className="author-avatar">TS</div>
                  <div className="author-info">
                    <strong>Thabo Sithole</strong>
                    <span>Product Manager, 2 years at Kasi360</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="story-card">
              <div className="story-content">
                <blockquote>
                  "What I love about Kasi360 is how everyone is aligned on the mission. 
                  We're not just building products - we're building economic resilience 
                  in townships. The collaborative culture and focus on impact make this 
                  more than just a job."
                </blockquote>
                <div className="story-author">
                  <div className="author-avatar">NM</div>
                  <div className="author-info">
                    <strong>Nomvula Mbeki</strong>
                    <span>Community Manager, 1 year at Kasi360</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="careers-cta">
        <div className="section-container">
          <div className="cta-content">
            <div className="cta-icon">
              <FiUsers />
            </div>
            
            <h2>Ready to Make an Impact?</h2>
            <p>
              Join our mission to empower <strong>70% of South Africa's businesses</strong>. 
              Help us bridge the <strong>98% digital gap</strong> in township communities. 
              Be part of building a more <strong>inclusive digital economy</strong>.
            </p>

            <div className="cta-features">
              <div className="feature">
                <FiCheckCircle /> Work on meaningful projects with real impact
              </div>
              <div className="feature">
                <FiCheckCircle /> Join a diverse, passionate team
              </div>
              <div className="feature">
                <FiCheckCircle /> Grow your career in a scaling social enterprise
              </div>
            </div>

            <div className="cta-buttons">
              <Link to="#positions" className="primary-btn">
                View Open Positions
              </Link>
              <Link to="/contact" className="secondary-btn">
                Contact Our Team
              </Link>
              <Link to="/downloads/careers-brochure.pdf" className="text-btn">
                Download Careers Brochure
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Careers;

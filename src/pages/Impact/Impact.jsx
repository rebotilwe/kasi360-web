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
  FiArrowRight,
  FiCheckCircle,
  FiSmartphone,
  FiShield,
  FiTarget,
  FiBarChart,
  FiHeart,
  FiBriefcase,
  FiBook,
  FiVideo
} from "react-icons/fi";
import "./Impact.css";

function Impact() {
  const townshipImpactStats = [
    { 
      icon: <FiTrendingUp />, 
      value: "70%", 
      label: "Township SMEs", 
      description: "Representing 70% of businesses in South Africa",
      color: "#00C853",
      background: "rgba(0, 200, 83, 0.1)"
    },
    { 
      icon: <FiDollarSign />, 
      value: "34%", 
      label: "GDP Contribution", 
      description: "Township businesses contribution to national GDP",
      color: "#0D47A1",
      background: "rgba(13, 71, 161, 0.1)"
    },
    { 
      icon: <FiSmartphone />, 
      value: "98%", 
      label: "Digital Gap", 
      description: "Lack access to digital tools for business growth",
      color: "#FF6D00",
      background: "rgba(255, 109, 0, 0.1)"
    },
    { 
      icon: <FiUsers />, 
      value: "85%", 
      label: "Revenue Increase", 
      description: "Average growth for businesses using Kasi360",
      color: "#9C27B0",
      background: "rgba(156, 39, 176, 0.1)"
    },
    { 
      icon: <FiBriefcase />, 
      value: "2,000+", 
      label: "Jobs Created", 
      description: "New employment in township communities",
      color: "#00C853",
      background: "rgba(0, 200, 83, 0.1)"
    },
    { 
      icon: <FiDollarSign />, 
      value: "R50M+", 
      label: "Economic Value", 
      description: "Total economic impact generated",
      color: "#0D47A1",
      background: "rgba(13, 71, 161, 0.1)"
    }
  ];

  const kasi360Impact = [
    {
      category: "Business Transformation",
      icon: <FiTrendingUp />,
      color: "#00C853",
      stats: [
        { value: "300%", label: "Average Revenue Growth" },
        { value: "18-24", label: "Months to Break-even" },
        { value: "R2,000", label: "Starting Investment" }
      ],
      description: "Comprehensive digital transformation for township businesses"
    },
    {
      category: "Community Development",
      icon: <FiUsers />,
      color: "#0D47A1",
      stats: [
        { value: "500+", label: "Businesses Empowered" },
        { value: "15", label: "Townships Reached" },
        { value: "85%", label: "Digital Adoption Rate" }
      ],
      description: "Building resilient township economies through digital empowerment"
    },
    {
      category: "Skills & Training",
      icon: <FiBook />,
      color: "#FF6D00",
      stats: [
        { value: "10,000+", label: "Training Hours" },
        { value: "2,500+", label: "Guide Downloads" },
        { value: "100%", label: "Practical Content" }
      ],
      description: "Upskilling township entrepreneurs for the digital economy"
    }
  ];

  const successStories = [
    {
      name: "Thabo's Corner Store",
      type: "Spaza Shop to Digital Marketplace",
      location: "Soweto, Johannesburg",
      impact: "300% revenue increase in 6 months",
      story: "Transformed from a local spaza shop to a digital marketplace serving 3 townships",
      videoId: "thabo-success",
      tags: ["Digital Payments", "E-commerce", "Inventory Management"],
      stats: {
        growth: "300%",
        customers: "2,500+",
        employees: "3 → 8",
        digital: "85% orders online"
      }
    },
    {
      name: "Nomsa's Mobile Salon",
      type: "Service Business Transformation",
      location: "Khayelitsha, Cape Town",
      impact: "Tripled client base with digital booking",
      story: "From manual bookings to fully digital operations with mobile payments",
      videoId: "nomsa-success",
      tags: ["Mobile Booking", "Digital Payments", "Marketing"],
      stats: {
        growth: "180%",
        clients: "200+ weekly",
        coverage: "5 townships",
        bookings: "90% online"
      }
    },
    {
      name: "Mama Zandi's Kitchen",
      type: "Restaurant Chain Expansion",
      location: "Alexandra, Johannesburg",
      impact: "From 1 to 4 locations in 8 months",
      story: "Started with WhatsApp orders, now running multiple kitchens with digital systems",
      videoId: "zandi-success",
      tags: ["Order Management", "Delivery", "Scaling"],
      stats: {
        growth: "400%",
        orders: "150+ daily",
        employees: "12 created",
        digital: "95% sales online"
      }
    }
  ];

  const townshipLocations = [
    { name: "Soweto", businesses: 85, growth: "45%", color: "#00C853" },
    { name: "Khayelitsha", businesses: 62, growth: "38%", color: "#0D47A1" },
    { name: "Alexandra", businesses: 48, growth: "52%", color: "#FF6D00" },
    { name: "Gugulethu", businesses: 35, growth: "41%", color: "#9C27B0" },
    { name: "Mamelodi", businesses: 42, growth: "36%", color: "#00C853" },
    { name: "Umlazi", businesses: 38, growth: "39%", color: "#0D47A1" }
  ];

  const awards = [
    {
      title: "Social Innovation Award 2023",
      issuer: "Department of Small Business Development",
      description: "Recognized for innovative approach to digital inclusion in township economies",
      icon: <FiAward />
    },
    {
      title: "Tech4Good Africa 2024",
      issuer: "African Tech Foundation",
      description: "Top 10 tech startups creating measurable social impact across Africa",
      icon: <FiGlobe />
    },
    {
      title: "Enterprise Development Partner",
      issuer: "DTI & Provincial Government",
      description: "Official partnership for SME development in township communities",
      icon: <FiTarget />
    },
    {
      title: "Digital Inclusion Champion",
      issuer: "South African Communications Forum",
      description: "Leading efforts to bridge the digital divide in underserved communities",
      icon: <FiSmartphone />
    }
  ];

  const ecosystemImpact = [
    {
      component: "KasiMarketing",
      impact: "3x customer reach",
      description: "Hyperlocal marketing tools specifically for township businesses"
    },
    {
      component: "Digital Tools",
      impact: "85% efficiency gain",
      description: "Mobile-first business management solutions"
    },
    {
      component: "Safety Features",
      impact: "100% secure transactions",
      description: "Integrated security for township business environments"
    },
    {
      component: "Training Programs",
      impact: "10,000+ hours delivered",
      description: "Practical digital skills for township entrepreneurs"
    }
  ];

  return (
    <div className="impact-page">
      {/* Hero Section */}
      <section className="impact-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <FiTarget /> Kasi360 Impact Report
          </div>
          <h1 className="hero-title">
            Transforming <span className="gradient-text">Township Economies</span>
          </h1>
          <p className="hero-subtitle">
            Empowering South Africa's Township SMEs and Informal Traders with Technology, 
            Access, and Growth. See the measurable impact of our holistic ecosystem.
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="stat-number">70%</div>
              <div className="stat-label">of SA Businesses</div>
            </div>
            <div className="hero-stat">
              <div className="stat-number">34%</div>
              <div className="stat-label">GDP Contribution</div>
            </div>
            <div className="hero-stat">
              <div className="stat-number">98%</div>
              <div className="stat-label">Digital Gap</div>
            </div>
          </div>
          <div className="hero-video">
            <button className="video-preview-btn">
              <FiVideo /> Watch Our Impact Story (3:45)
            </button>
          </div>
        </div>
      </section>

      {/* Township Economy Stats */}
      <section className="township-stats">
        <div className="section-container">
          <div className="section-header center">
            <h2>The Township Economy Landscape</h2>
            <p>Understanding the scale and opportunity of South Africa's township businesses</p>
          </div>
          
          <div className="stats-grid">
            {townshipImpactStats.map((stat, index) => (
              <div key={index} className="stat-card" style={{ borderLeftColor: stat.color }}>
                <div className="stat-icon-wrapper" style={{ background: stat.background }}>
                  {stat.icon}
                </div>
                <div className="stat-content">
                  <div className="stat-value" style={{ color: stat.color }}>{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-description">{stat.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kasi360 Transformation Impact */}
      <section className="transformation-impact">
        <div className="section-container">
          <div className="section-header">
            <h2>The Kasi360 Transformation Impact</h2>
            <p>How our holistic ecosystem creates sustainable growth for township businesses</p>
          </div>
          
          <div className="transformation-grid">
            {kasi360Impact.map((item, index) => (
              <div key={index} className="impact-category">
                <div className="category-header">
                  <div className="category-icon" style={{ color: item.color, background: item.background }}>
                    {item.icon}
                  </div>
                  <h3>{item.category}</h3>
                  <p className="category-description">{item.description}</p>
                </div>
                
                <div className="category-stats">
                  {item.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="category-stat">
                      <div className="stat-value" style={{ color: item.color }}>{stat.value}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <div className="category-progress">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ 
                        width: `${85 - (index * 10)}%`,
                        background: `linear-gradient(90deg, ${item.color}, ${item.color}80)`
                      }}
                    ></div>
                  </div>
                  <span className="progress-label">{85 - (index * 10)}% Success Rate</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="impact-stories">
        <div className="section-container">
          <div className="section-header center">
            <div className="section-badge">
              <FiCheckCircle /> Real Business Transformations
            </div>
            <h2>Success Stories from Township Entrepreneurs</h2>
            <p>See how Kasi360 is changing lives and businesses across South Africa</p>
          </div>
          
          <div className="stories-grid">
            {successStories.map((story, index) => (
              <div key={index} className="story-card">
                <div className="story-header">
                  <div className="story-type">{story.type}</div>
                  <div className="story-location">
                    <FiMapPin /> {story.location}
                  </div>
                </div>
                
                <h3 className="story-name">{story.name}</h3>
                <p className="story-impact">{story.impact}</p>
                <p className="story-text">{story.story}</p>
                
                <div className="story-stats">
                  {Object.entries(story.stats).map(([key, value]) => (
                    <div key={key} className="story-stat">
                      <div className="stat-value">{value}</div>
                      <div className="stat-label">
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="story-tags">
                  {story.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
                
                <div className="story-actions">
                  <Link to={`/success-stories/${story.videoId}`} className="story-link">
                    <FiVideo /> Watch Video
                  </Link>
                  <Link to={`/success-stories/${story.name.toLowerCase().replace(/\s+/g, '-')}`} className="story-link">
                    Read Full Story <FiArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Township Coverage Map */}
      <section className="coverage-section">
        <div className="section-container">
          <div className="section-header center">
            <h2>Impact Across South Africa</h2>
            <p>Kasi360 businesses thriving in township communities nationwide</p>
          </div>
          
          <div className="coverage-content">
            <div className="coverage-visual">
              <div className="map-container">
                <FiGlobe className="map-icon" />
                <div className="map-points">
                  {townshipLocations.map((location, index) => (
                    <div 
                      key={index} 
                      className="map-point"
                      style={{ 
                        top: `${20 + (index * 12)}%`,
                        left: `${30 + (index * 8)}%`,
                        backgroundColor: location.color
                      }}
                    >
                      <div className="point-tooltip">
                        <strong>{location.name}</strong>
                        <span>{location.businesses} Kasi360 Businesses</span>
                        <span>{location.growth} Growth Rate</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="coverage-stats">
              <h3>Township Reach & Growth</h3>
              <div className="location-stats">
                {townshipLocations.map((location, index) => (
                  <div key={index} className="location-stat">
                    <div className="location-header">
                      <div className="location-dot" style={{ backgroundColor: location.color }}></div>
                      <span className="location-name">{location.name}</span>
                    </div>
                    <div className="location-numbers">
                      <span className="business-count">{location.businesses} businesses</span>
                      <span className="growth-rate" style={{ color: location.color }}>
                        {location.growth} growth
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="total-impact">
                <div className="total-stat">
                  <div className="total-value">500+</div>
                  <div className="total-label">Total Businesses</div>
                </div>
                <div className="total-stat">
                  <div className="total-value">R50M+</div>
                  <div className="total-label">Economic Value</div>
                </div>
                <div className="total-stat">
                  <div className="total-value">15</div>
                  <div className="total-label">Townships</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Impact Breakdown */}
      <section className="ecosystem-impact">
        <div className="section-container">
          <div className="section-header center">
            <h2>Holistic Ecosystem Impact</h2>
            <p>How each component of Kasi360 contributes to township business success</p>
          </div>
          
          <div className="ecosystem-grid">
            {ecosystemImpact.map((component, index) => (
              <div key={index} className="ecosystem-card">
                <div className="ecosystem-icon">
                  {index === 0 && <FiTrendingUp />}
                  {index === 1 && <FiSmartphone />}
                  {index === 2 && <FiShield />}
                  {index === 3 && <FiBook />}
                </div>
                <h3>{component.component}</h3>
                <div className="impact-value">{component.impact}</div>
                <p className="impact-description">{component.description}</p>
                <div className="impact-bar">
                  <div 
                    className="bar-fill" 
                    style={{ 
                      width: `${70 + (index * 10)}%`,
                      background: `linear-gradient(90deg, #00C853, #0D47A1)`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="awards-section">
        <div className="section-container">
          <div className="section-header center">
            <div className="section-badge">
              <FiAward /> Recognition & Partnerships
            </div>
            <h2>Award-Winning Impact</h2>
            <p>Recognized for innovation and social impact in township economies</p>
          </div>
          
          <div className="awards-grid">
            {awards.map((award, index) => (
              <div key={index} className="award-card">
                <div className="award-icon" style={{ color: index === 0 ? '#FFD600' : '#00C853' }}>
                  {award.icon}
                </div>
                <h3>{award.title}</h3>
                <div className="award-issuer">{award.issuer}</div>
                <p className="award-description">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Development */}
      <section className="community-section">
        <div className="section-container">
          <div className="community-content">
            <div className="community-text">
              <div className="section-badge">
                <FiHeart /> Community Impact
              </div>
              <h2>Beyond Business: Building Stronger Communities</h2>
              <p className="community-description">
                Our impact extends beyond revenue numbers. We're fostering digital literacy, 
                supporting women entrepreneurs, and creating sustainable economic ecosystems 
                in township communities.
              </p>
              <div className="community-initiatives">
                <div className="initiative">
                  <FiCheckCircle className="initiative-check" />
                  <div className="initiative-content">
                    <h4>Digital Literacy Programs</h4>
                    <p>Training youth and adults in essential digital skills for the modern economy</p>
                  </div>
                </div>
                <div className="initiative">
                  <FiCheckCircle className="initiative-check" />
                  <div className="initiative-content">
                    <h4>Women Entrepreneurship Support</h4>
                    <p>Specialized programs and funding for women-owned township businesses</p>
                  </div>
                </div>
                <div className="initiative">
                  <FiCheckCircle className="initiative-check" />
                  <div className="initiative-content">
                    <h4>Community Investment Initiatives</h4>
                    <p>Reinvesting profits into local infrastructure and development projects</p>
                  </div>
                </div>
                <div className="initiative">
                  <FiCheckCircle className="initiative-check" />
                  <div className="initiative-content">
                    <h4>Skills Development Workshops</h4>
                    <p>Monthly practical workshops on business management and digital tools</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="community-visual">
              <div className="impact-graph">
                <div className="graph-bar" style={{ height: '90%', background: 'linear-gradient(180deg, #00C853, #0D47A1)' }}>
                  <span className="bar-label">Digital Skills</span>
                </div>
                <div className="graph-bar" style={{ height: '75%', background: 'linear-gradient(180deg, #0D47A1, #FF6D00)' }}>
                  <span className="bar-label">Job Creation</span>
                </div>
                <div className="graph-bar" style={{ height: '85%', background: 'linear-gradient(180deg, #FF6D00, #9C27B0)' }}>
                  <span className="bar-label">Business Growth</span>
                </div>
                <div className="graph-bar" style={{ height: '70%', background: 'linear-gradient(180deg, #9C27B0, #00C853)' }}>
                  <span className="bar-label">Community Investment</span>
                </div>
              </div>
              <div className="graph-legend">
                <div className="legend-item">
                  <div className="legend-color" style={{ background: '#00C853' }}></div>
                  <span>Skills Development</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color" style={{ background: '#0D47A1' }}></div>
                  <span>Economic Growth</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color" style={{ background: '#FF6D00' }}></div>
                  <span>Job Creation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="impact-cta">
        <div className="section-container">
          <div className="cta-content">
            <div className="cta-icon">
              <FiTarget />
            </div>
            <h2>Join the Kasi360 Impact Movement</h2>
            <p>
              Be part of transforming South Africa's township economy. Whether you're a 
              business owner, investor, or partner, help us create sustainable growth and 
              digital inclusion in township communities.
            </p>
            <div className="cta-stats">
              <div className="cta-stat">
                <div className="stat-number">R2,000</div>
                <div className="stat-label">Starting Investment</div>
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
                Start Your Transformation
              </Link>
              <Link to="/partner" className="secondary-btn">
                Partner With Us
              </Link>
              <Link to="/success-stories" className="text-btn">
                View More Impact Stories <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Impact;
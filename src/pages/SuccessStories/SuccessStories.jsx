// pages/SuccessStories/SuccessStories.jsx
import React from "react";
import { Link } from "react-router-dom";
import { 
  FiPlayCircle,
  FiTrendingUp,
  FiUsers,
  FiDollarSign,
  FiMapPin,
  FiSmartphone,
  FiShield,
  FiHeart,
  FiMessageCircle,
  FiChevronRight,
  FiShare2,
  FiBookOpen,
  FiStar
} from "react-icons/fi";
import "./SuccessStories.css";

function SuccessStories() {
  const stories = [
    {
      id: 1,
      title: "From Spaza Shop to Digital Marketplace",
      business: "Thabo's Corner Store",
      owner: "Thabo Mokoena",
      location: "Soweto",
      growth: "300% revenue increase",
      timeline: "6 months with Kasi360",
      category: "Retail Transformation",
      icon: <FiTrendingUp />,
      color: "#00C853",
      featured: true,
      videoId: "township-success-1",
      quote: "Kasi360 turned my small spaza shop into a thriving digital business. Now I serve customers across three townships!",
      stats: {
        revenueIncrease: "300%",
        customerBase: "2,500+",
        digitalOrders: "85%",
        employeeGrowth: "3 to 8"
      },
      challenge: "Limited to walk-in customers, cash-only transactions, and no digital presence.",
      solution: "Implemented Kasi360's digital tools, mobile payment system, and hyperlocal marketing.",
      testimonial: "The R2,000 investment changed everything. In 6 months, I went from struggling to thriving.",
      tags: ["Digital Payments", "E-commerce", "Marketing", "Growth"]
    },
    {
      id: 2,
      title: "Mobile Hair Salon Goes Digital",
      business: "Gorgeous Locks Mobile Salon",
      owner: "Nomsa Dlamini",
      location: "Khayelitsha",
      growth: "150% client increase",
      timeline: "4 months with Kasi360",
      category: "Service Business",
      icon: <FiUsers />,
      color: "#0D47A1",
      featured: true,
      videoId: "salon-success-1",
      quote: "With Kasi360's booking system and mobile payments, I now manage 3 stylists and serve 50+ clients weekly.",
      stats: {
        revenueIncrease: "180%",
        clientBase: "200+",
        onlineBookings: "90%",
        areaCoverage: "5 townships"
      },
      challenge: "Manual booking, cash payments only, limited to immediate community.",
      solution: "Adopted Kasi360's booking platform, digital payments, and township marketing guides.",
      testimonial: "The safety features gave me confidence to expand. Now I'm training other township stylists!",
      tags: ["Booking System", "Mobile Payments", "Safety", "Training"]
    },
    {
      id: 3,
      title: "Township Restaurant Chain Born from WhatsApp",
      business: "Mama Zandi's Kitchen",
      owner: "Zandile Nkosi",
      location: "Alexandra",
      growth: "From 1 to 4 locations",
      timeline: "8 months with Kasi360",
      category: "Food & Beverage",
      icon: <FiHeart />,
      color: "#FF6D00",
      featured: false,
      videoId: "restaurant-success-1",
      quote: "Started with WhatsApp orders, now running 4 kitchens across Alexandra with Kasi360's tools.",
      stats: {
        revenueIncrease: "400%",
        dailyOrders: "150+",
        digitalSales: "95%",
        jobCreated: "12"
      },
      challenge: "Manual order taking, cash handling risks, limited delivery range.",
      solution: "Integrated Kasi360's order management, delivery tracking, and financial tools.",
      testimonial: "The holistic approach - fintech, safety, training - made all the difference.",
      tags: ["Order Management", "Delivery", "Finance", "Scaling"]
    },
    {
      id: 4,
      title: "Informal Trader Becomes Supplier",
      business: "Fresh Produce Network",
      owner: "Sipho Vilakazi",
      location: "Gugulethu",
      growth: "Supply chain established",
      timeline: "9 months with Kasi360",
      category: "Agriculture & Supply",
      icon: <FiDollarSign />,
      color: "#9C27B0",
      featured: false,
      videoId: "produce-success-1",
      quote: "From selling vegetables on the street to supplying 20+ spaza shops in my township.",
      stats: {
        revenueIncrease: "250%",
        suppliers: "15 farmers",
        shopsSupplied: "20+",
        deliveryVehicles: "3"
      },
      challenge: "Seasonal income, no supply chain management, limited market access.",
      solution: "Used Kasi360's inventory management, supplier network, and digital marketplace.",
      testimonial: "The low-cost tools made professional supply chain management possible for us.",
      tags: ["Supply Chain", "Inventory", "Networking", "Logistics"]
    },
    {
      id: 5,
      title: "Mobile Mechanic Expands Services",
      business: "Kasi Auto Fix",
      owner: "Vusi Ndaba",
      location: "Mamelodi",
      growth: "Service area tripled",
      timeline: "5 months with Kasi360",
      category: "Automotive Services",
      icon: <FiSmartphone />,
      color: "#00C853",
      featured: false,
      videoId: "auto-success-1",
      quote: "Now I handle bookings, payments, and parts ordering all from my phone with Kasi360.",
      stats: {
        revenueIncrease: "220%",
        serviceRequests: "40/week",
        digitalPayments: "100%",
        customerRetention: "85%"
      },
      challenge: "No appointment system, cash-only, limited to breakdown services.",
      solution: "Implemented Kasi360's booking app, digital invoicing, and parts sourcing network.",
      testimonial: "The safety features for mobile transactions gave my customers confidence.",
      tags: ["Mobile Business", "Digital Payments", "Booking", "Safety"]
    },
    {
      id: 6,
      title: "Township Fashion Designer Goes Global",
      business: "AfroChic Designs",
      owner: "Lerato Moloi",
      location: "Soweto",
      growth: "International orders",
      timeline: "12 months with Kasi360",
      category: "Fashion & Design",
      icon: <FiStar />,
      color: "#0D47A1",
      featured: false,
      videoId: "fashion-success-1",
      quote: "From local township markets to shipping designs to the UK and USA.",
      stats: {
        revenueIncrease: "500%",
        internationalOrders: "30%",
        socialMedia: "50K followers",
        teamSize: "15 artisans"
      },
      challenge: "Local market only, no e-commerce, international payment barriers.",
      solution: "Leveraged Kasi360's e-commerce platform, international payments, and digital marketing.",
      testimonial: "Kasi360 made global business accessible to a township designer like me.",
      tags: ["E-commerce", "International", "Marketing", "Design"]
    }
  ];

  const categories = [
    { name: "All Stories", count: 12 },
    { name: "Retail", count: 4, icon: <FiTrendingUp /> },
    { name: "Services", count: 3, icon: <FiUsers /> },
    { name: "Food & Beverage", count: 3, icon: <FiHeart /> },
    { name: "Creative", count: 2, icon: <FiStar /> }
  ];

  const impactStats = [
    { value: "R15M+", label: "Total Revenue Generated" },
    { value: "500+", label: "Businesses Transformed" },
    { value: "2,000+", label: "Jobs Created" },
    { value: "98%", label: "Digital Adoption Rate" }
  ];

  const townshipLocations = [
    "Soweto", "Khayelitsha", "Alexandra", "Gugulethu", 
    "Mamelodi", "Daveyton", "Umlazi", "Mdantsane"
  ];

  return (
    <div className="success-stories-page">
      {/* Hero Section */}
      <section className="stories-hero">
        <div className="hero-content">
          <div className="hero-badge">
            <FiStar /> Kasi360 Impact Stories
          </div>
          <h1 className="hero-title">
            Township <span className="gradient-text">Success Stories</span>
          </h1>
          <p className="hero-subtitle">
            Real businesses. Real growth. Discover how township SMEs and informal traders 
            are transforming their operations and multiplying revenue with Kasi360's ecosystem.
          </p>
          <div className="hero-stats">
            {impactStats.map((stat, index) => (
              <div key={index} className="stat">
                <div className="stat-number">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="hero-video-preview">
            <div className="video-thumbnail">
              <FiPlayCircle className="play-icon" />
              <div className="video-info">
                <span className="video-label">Featured Success Story</span>
                <h4>From Spaza Shop to Digital Empire</h4>
                <p>Watch Thabo's transformation in 6 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kasi360 Impact Showcase */}
      <section className="impact-showcase">
        <div className="section-container">
          <div className="section-header center">
            <h2>The Kasi360 Transformation Journey</h2>
            <p>How our holistic ecosystem creates sustainable success for township businesses</p>
          </div>
          
          <div className="journey-timeline">
            <div className="timeline-step">
              <div className="step-number">1</div>
              <h3>Digital Foundation</h3>
              <p>Low-cost digital tools implementation starting under R2,000</p>
            </div>
            <div className="timeline-step">
              <div className="step-number">2</div>
              <h3>Hyperlocal Marketing</h3>
              <p>Township-specific strategies for immediate customer growth</p>
            </div>
            <div className="timeline-step">
              <div className="step-number">3</div>
              <h3>Financial Integration</h3>
              <p>Mobile payments and cash flow management</p>
            </div>
            <div className="timeline-step">
              <div className="step-number">4</div>
              <h3>Sustainable Growth</h3>
              <p>Scaling operations while maintaining township essence</p>
            </div>
          </div>

          <div className="ecosystem-impact">
            <div className="impact-card">
              <div className="impact-icon" style={{ background: 'rgba(0, 200, 83, 0.1)' }}>
                <FiTrendingUp />
              </div>
              <div className="impact-content">
                <h3>18-24 Month Break-even</h3>
                <p>Average timeline for Kasi360 businesses to reach profitability</p>
              </div>
            </div>
            <div className="impact-card">
              <div className="impact-icon" style={{ background: 'rgba(13, 71, 161, 0.1)' }}>
                <FiShield />
              </div>
              <div className="impact-content">
                <h3>Holistic Safety</h3>
                <p>Combining digital security with physical safety for township businesses</p>
              </div>
            </div>
            <div className="impact-card">
              <div className="impact-icon" style={{ background: 'rgba(255, 109, 0, 0.1)' }}>
                <FiUsers />
              </div>
              <div className="impact-content">
                <h3>Community Multiplier</h3>
                <p>Each successful business creates 3-5 additional jobs in the township</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="featured-stories">
        <div className="section-container">
          <div className="section-header">
            <h2>Featured Success Stories</h2>
            <p>In-depth transformations that showcase the power of Kasi360's ecosystem</p>
          </div>

          <div className="featured-grid">
            {stories.filter(story => story.featured).map((story) => (
              <div key={story.id} className="featured-story-card">
                <div className="story-video">
                  <div className="video-placeholder" style={{ backgroundColor: story.color }}>
                    <FiPlayCircle className="featured-play-icon" />
                    <div className="video-overlay">
                      <span>Watch {story.owner}'s Story</span>
                    </div>
                  </div>
                </div>
                
                <div className="story-content">
                  <div className="story-header">
                    <div className="story-category" style={{ backgroundColor: story.color }}>
                      {story.icon} {story.category}
                    </div>
                    <div className="story-growth">
                      <FiTrendingUp /> {story.growth}
                    </div>
                  </div>
                  
                  <h3 className="story-title">{story.title}</h3>
                  <div className="story-meta">
                    <div className="meta-item">
                      <FiMapPin />
                      <span>{story.business} • {story.location}</span>
                    </div>
                    <div className="meta-item">
                      <FiUsers />
                      <span>{story.timeline} with Kasi360</span>
                    </div>
                  </div>
                  
                  <blockquote className="story-quote">
                    "{story.quote}"
                    <cite>— {story.owner}</cite>
                  </blockquote>
                  
                  <div className="story-stats">
                    {Object.entries(story.stats).map(([key, value]) => (
                      <div key={key} className="stat-item">
                        <div className="stat-value">{value}</div>
                        <div className="stat-label">
                          {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="story-tags">
                    {story.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                  
                  <div className="story-actions">
                    <Link to={`/stories/${story.id}`} className="read-full-btn">
                      Read Full Story <FiChevronRight />
                    </Link>
                    <button className="share-btn">
                      <FiShare2 /> Share
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Township Coverage */}
      <section className="township-coverage">
        <div className="section-container">
          <div className="section-header center">
            <h2>Success Across South Africa's Townships</h2>
            <p>Kasi360 businesses thriving in communities nationwide</p>
          </div>
          
          <div className="township-grid">
            {townshipLocations.map((location, index) => (
              <div key={index} className="township-card">
                <div className="township-icon">
                  <FiMapPin />
                </div>
                <h3>{location}</h3>
                <p>{Math.floor(Math.random() * 50) + 20} Kasi360 Businesses</p>
                <div className="success-rate">
                  <div className="rate-bar">
                    <div 
                      className="rate-fill" 
                      style={{ 
                        width: `${Math.floor(Math.random() * 40) + 60}%`,
                        background: `linear-gradient(90deg, #00C853, #0D47A1)`
                      }}
                    ></div>
                  </div>
                  <span>{Math.floor(Math.random() * 40) + 60}% Success Rate</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Stories Grid */}
      <section className="all-stories">
        <div className="section-container">
          <div className="section-header">
            <div className="header-content">
              <h2>All Success Stories</h2>
              <p>Browse inspiring transformations from township businesses across South Africa</p>
            </div>
            <div className="filter-controls">
              <div className="category-filters">
                {categories.map((category, index) => (
                  <button 
                    key={index} 
                    className={`category-btn ${index === 0 ? 'active' : ''}`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="stories-grid">
            {stories.map((story) => (
              <div key={story.id} className="story-card">
                <div className="card-header">
                  <div className="story-category" style={{ backgroundColor: story.color }}>
                    {story.icon} {story.category}
                  </div>
                  <div className="story-growth" style={{ color: story.color }}>
                    <FiTrendingUp /> {story.growth}
                  </div>
                </div>
                
                <div className="card-content">
                  <h3 className="story-title">{story.title}</h3>
                  <div className="story-meta">
                    <div className="meta-item">
                      <FiMapPin />
                      <span>{story.business}, {story.location}</span>
                    </div>
                    <div className="meta-item">
                      <FiUsers />
                      <span>{story.owner}</span>
                    </div>
                  </div>
                  
                  <p className="story-excerpt">
                    {story.quote.substring(0, 120)}...
                  </p>
                  
                  <div className="story-highlights">
                    <div className="highlight">
                      <div className="highlight-value">{story.stats.revenueIncrease}</div>
                      <div className="highlight-label">Revenue Growth</div>
                    </div>
                    <div className="highlight">
                      <div className="highlight-value">{story.timeline}</div>
                      <div className="highlight-label">With Kasi360</div>
                    </div>
                  </div>
                  
                  <div className="story-tags">
                    {story.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                    {story.tags.length > 3 && (
                      <span className="tag">+{story.tags.length - 3}</span>
                    )}
                  </div>
                </div>
                
                <div className="card-actions">
                  <Link to={`/stories/${story.id}`} className="view-story-btn">
                    View Full Story <FiChevronRight />
                  </Link>
                  <div className="action-icons">
                    <button className="action-btn">
                      <FiPlayCircle /> Video
                    </button>
                    <button className="action-btn">
                      <FiMessageCircle /> Comment
                    </button>
                  </div>
                </div>
                
                {story.featured && (
                  <div className="featured-badge">
                    <FiStar /> Featured
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="video-testimonials">
        <div className="section-container">
          <div className="section-header center">
            <h2>Video Testimonials</h2>
            <p>Hear directly from township business owners about their Kasi360 journey</p>
          </div>
          
          <div className="videos-grid">
            {stories.slice(0, 3).map((story) => (
              <div key={story.id} className="video-card">
                <div className="video-thumb" style={{ background: story.color }}>
                  <FiPlayCircle className="play-btn" />
                  <div className="video-info-overlay">
                    <span className="video-duration">6:30</span>
                    <span className="video-views">2.5K views</span>
                  </div>
                </div>
                <div className="video-content">
                  <h3>{story.title}</h3>
                  <div className="video-meta">
                    <span>{story.business}</span>
                    <span>{story.location}</span>
                    <span>{story.timeline}</span>
                  </div>
                  <p className="video-description">
                    {story.quote.substring(0, 100)}...
                  </p>
                  <button className="watch-btn">
                    <FiPlayCircle /> Watch Story
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="stories-cta">
        <div className="section-container">
          <div className="cta-content">
            <div className="cta-icon">
              <FiBookOpen />
            </div>
            <h2>Start Your Success Story</h2>
            <p>
              Join over 500 township businesses that have transformed with Kasi360. 
              Get started with our ecosystem for under R2,000 and begin your journey 
              to sustainable growth.
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
                Start Free Trial
              </Link>
              <Link to="/contact" className="secondary-btn">
                Book Demo
              </Link>
              <Link to="/stories/all" className="text-btn">
                Browse All Stories <FiChevronRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="stories-faq">
        <div className="section-container">
          <div className="section-header center">
            <h2>Success Story FAQs</h2>
            <p>Common questions about township business transformations</p>
          </div>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How long does it take to see results?</h3>
              <p>Most Kasi360 businesses see measurable growth within 3-6 months, with full transformation typically taking 12-18 months.</p>
            </div>
            
            <div className="faq-item">
              <h3>What's the typical investment needed?</h3>
              <p>Starting costs range from R2,000 for basic digital tools to R10,000 for comprehensive ecosystem implementation.</p>
            </div>
            
            <div className="faq-item">
              <h3>Do businesses need technical skills?</h3>
              <p>No! Kasi360 tools are designed for township businesses with minimal technical experience. We provide full training.</p>
            </div>
            
            <div className="faq-item">
              <h3>How is safety addressed?</h3>
              <p>Our holistic approach combines digital security with physical safety protocols specifically for township environments.</p>
            </div>
            
            <div className="faq-item">
              <h3>Can informal traders really scale?</h3>
              <p>Yes! Many of our success stories started as informal traders and grew into established businesses serving multiple townships.</p>
            </div>
            
            <div className="faq-item">
              <h3>What support is provided?</h3>
              <p>24/7 support, township-specific training, community networking, and regular check-ins from our success team.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SuccessStories;
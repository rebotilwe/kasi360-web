// pages/Guides/Guides.jsx
import React from "react";
import { Link } from "react-router-dom";
import { 
  FiDownload, 
  FiBookOpen, 
  FiCheckCircle, 
  FiArrowRight,
  FiClock,
  FiFileText,
  FiSmartphone,
  FiBarChart,
  FiTrendingUp,
  FiUsers,
  FiShield,
  FiCreditCard,
  FiMapPin
} from "react-icons/fi";
import "./Guides.css";

function Guides() {
  const guides = [
    {
      id: 1,
      title: "Township Digital Marketing Starter Guide",
      description: "Hyperlocal marketing strategies specifically designed for township customer behaviors, preferences, and local markets.",
      pages: "25 pages",
      format: "PDF Download",
      level: "Beginner",
      icon: <FiMapPin />,
      color: "#00C853",
      downloads: "3.2K+",
      includes: ["Hyperlocal SEO", "WhatsApp Business Setup", "Community Marketing", "Low-Budget Ads"],
      featured: true,
      price: "FREE"
    },
    {
      id: 2,
      title: "Mobile-First Business Management",
      description: "Run your entire business using only a smartphone - perfect for informal traders and SMEs with limited resources.",
      pages: "35 pages",
      format: "Interactive PDF",
      level: "Beginner",
      icon: <FiSmartphone />,
      color: "#0D47A1",
      downloads: "2.8K+",
      includes: ["Mobile Payments", "Stock Management", "Customer Records", "Digital Invoicing"],
      featured: false,
      price: "FREE"
    },
    {
      id: 3,
      title: "Affordable Digital Tools Guide (Under R2,000)",
      description: "Low-cost tech solutions and tools specifically curated for township businesses with limited budgets.",
      pages: "30 pages",
      format: "PDF + Video Tutorials",
      level: "Beginner",
      icon: <FiCreditCard />,
      color: "#FF6D00",
      downloads: "4.1K+",
      includes: ["Essential Apps", "Budget Planning", "Tool Comparisons", "ROI Calculator"],
      featured: false,
      price: "FREE"
    },
    {
      id: 4,
      title: "Financial Management for Informal Traders",
      description: "Essential financial skills for township business owners to manage cash flow, expenses, and sustainable growth.",
      pages: "40 pages",
      format: "PDF + Worksheets",
      level: "Intermediate",
      icon: <FiBarChart />,
      color: "#9C27B0",
      downloads: "2.3K+",
      includes: ["Daily Cash Flow", "Expense Tracking", "Tax Basics", "Savings Strategies"],
      featured: false,
      price: "FREE"
    },
    {
      id: 5,
      title: "Kasi360 Safety & Security Guide",
      description: "Comprehensive safety protocols and security measures for township businesses operating in various environments.",
      pages: "28 pages",
      format: "PDF + Checklists",
      level: "Beginner",
      icon: <FiShield />,
      color: "#00C853",
      downloads: "1.9K+",
      includes: ["Digital Security", "Cash Handling", "Premises Safety", "Emergency Protocols"],
      featured: false,
      price: "FREE"
    },
    {
      id: 6,
      title: "E-commerce for Township Products",
      description: "Complete guide to selling your products online while maintaining the local touch that township customers love.",
      pages: "32 pages",
      format: "Editable Templates",
      level: "Intermediate",
      icon: <FiTrendingUp />,
      color: "#0D47A1",
      downloads: "2.7K+",
      includes: ["Local Delivery Setup", "Product Photography", "Payment Methods", "Customer Service"],
      featured: false,
      price: "FREE"
    },
    {
      id: 7,
      title: "Community Building & Loyalty",
      description: "Build lasting relationships with your local community and create customer loyalty programs that work.",
      pages: "24 pages",
      format: "PDF + Templates",
      level: "Beginner",
      icon: <FiUsers />,
      color: "#FF6D00",
      downloads: "2.1K+",
      includes: ["Loyalty Programs", "Community Events", "Referral Systems", "Feedback Collection"],
      featured: false,
      price: "FREE"
    },
    {
      id: 8,
      title: "Scaling Your Township Business",
      description: "Step-by-step guide to growing your business while maintaining the local essence that made you successful.",
      pages: "45 pages",
      format: "Interactive Guide",
      level: "Intermediate",
      icon: <FiTrendingUp />,
      color: "#9C27B0",
      downloads: "1.6K+",
      includes: ["Growth Planning", "Hiring Staff", "Multiple Locations", "Brand Consistency"],
      featured: false,
      price: "FREE"
    }
  ];

  const categories = [
    { name: "All Guides", count: 12, icon: <FiBookOpen /> },
    { name: "Digital Marketing", count: 3, icon: <FiMapPin /> },
    { name: "Financial Management", count: 3, icon: <FiBarChart /> },
    { name: "Safety & Security", count: 2, icon: <FiShield /> },
    { name: "Mobile Business", count: 2, icon: <FiSmartphone /> },
    { name: "E-commerce", count: 2, icon: <FiTrendingUp /> }
  ];

  const levels = [
    { name: "Beginner", color: "#00C853" },
    { name: "Intermediate", color: "#0D47A1" },
    { name: "Advanced", color: "#FF6D00" }
  ];

  const townshipStats = [
    { value: "70%", label: "of SA Businesses are SMEs" },
    { value: "98%", label: "Lack Digital Tools" },
    { value: "34%", label: "Contribution to GDP" }
  ];

  return (
    <div className="guides-page">
      {/* Hero Section */}
      <section className="guides-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Kasi360 <span className="gradient-text">Business Guides</span>
          </h1>
          <p className="hero-subtitle">
            Empowering South Africa's Township SMEs and Informal Traders with practical, 
            actionable guides designed specifically for the unique township business environment.
          </p>
          <div className="hero-stats">
            {townshipStats.map((stat, index) => (
              <div key={index} className="stat">
                <div className="stat-number">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="hero-tagline">
            <FiCheckCircle /> Part of the Kasi360 Ecosystem: Technology • Access • Growth
          </div>
        </div>
      </section>

      {/* Kasi360 Value Proposition */}
      <section className="value-proposition">
        <div className="section-container">
          <div className="value-grid">
            <div className="value-card">
              <div className="value-icon" style={{ background: 'rgba(0, 200, 83, 0.1)' }}>
                <FiMapPin />
              </div>
              <h3>Hyperlocal Design</h3>
              <p>Specifically built for the unique township business environment</p>
            </div>
            <div className="value-card">
              <div className="value-icon" style={{ background: 'rgba(13, 71, 161, 0.1)' }}>
                <FiShield />
              </div>
              <h3>Holistic Approach</h3>
              <p>Combines fintech, safety, and training in one ecosystem</p>
            </div>
            <div className="value-card">
              <div className="value-icon" style={{ background: 'rgba(255, 109, 0, 0.1)' }}>
                <FiCreditCard />
              </div>
              <h3>Affordability</h3>
              <p>One of the lowest cost-to-benefit ratios in the market</p>
            </div>
            <div className="value-card">
              <div className="value-icon" style={{ background: 'rgba(156, 39, 176, 0.1)' }}>
                <FiUsers />
              </div>
              <h3>Strong Backing</h3>
              <p>Supported by provincial and national stakeholders</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories & Filters */}
      <section className="filters-section">
        <div className="section-container">
          <div className="filters-header">
            <h2>Browse Guides by Category</h2>
            <p>Find practical resources tailored to township business challenges</p>
          </div>
          
          <div className="categories-grid">
            {categories.map((category, index) => (
              <button key={index} className={`category-card ${index === 0 ? 'active' : ''}`}>
                <div className="category-icon">{category.icon}</div>
                <div className="category-content">
                  <h3>{category.name}</h3>
                  <span className="category-count">{category.count} guides</span>
                </div>
              </button>
            ))}
          </div>
          
          <div className="level-filters">
            <h3>Filter by Experience Level</h3>
            <div className="level-buttons">
              {levels.map((level, index) => (
                <button 
                  key={index} 
                  className={`level-btn ${index === 0 ? 'active' : ''}`}
                  style={{ 
                    borderColor: level.color,
                    color: index === 0 ? level.color : 'rgba(255,255,255,0.7)'
                  }}
                >
                  {level.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Guide */}
      <section className="featured-guide-section">
        <div className="section-container">
          <div className="featured-badge">
            <FiCheckCircle /> Most Popular Guide
          </div>
          
          <div className="featured-guide">
            <div className="featured-content">
              <div className="guide-header">
                <div className="guide-category" style={{ backgroundColor: '#00C853' }}>
                  <FiMapPin /> Digital Marketing
                </div>
                <div className="guide-level" style={{ color: '#00C853' }}>
                  Beginner
                </div>
              </div>
              
              <h2 className="featured-title">Township Digital Marketing Starter Guide</h2>
              <p className="featured-description">
                Everything you need to start marketing your township business effectively. 
                This comprehensive guide covers hyperlocal strategies, WhatsApp marketing, 
                community engagement, and low-budget advertising specifically designed for 
                township customer behaviors.
              </p>
              
              <div className="featured-details">
                <div className="detail">
                  <FiFileText />
                  <span>25 pages of practical content</span>
                </div>
                <div className="detail">
                  <FiClock />
                  <span>2-3 hours to complete</span>
                </div>
                <div className="detail">
                  <FiDownload />
                  <span>3,200+ township business downloads</span>
                </div>
                <div className="detail">
                  <FiCheckCircle />
                  <span>100% Free - No hidden costs</span>
                </div>
              </div>
              
              <div className="featured-includes">
                <h4>What Township Businesses Learn:</h4>
                <div className="includes-list">
                  {["Hyperlocal SEO for townships", "WhatsApp Business setup", "Community marketing strategies", "Low-budget advertising", "Customer retention tactics", "Local event promotion"].map((item, index) => (
                    <div key={index} className="include-item">
                      <FiCheckCircle />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="featured-actions">
                <button className="download-btn">
                  <FiDownload /> Download Free Guide
                </button>
                <Link to="/guides/township-digital-marketing" className="preview-link">
                  Preview Content <FiArrowRight />
                </Link>
              </div>
            </div>
            
            <div className="featured-visual">
              <div className="guide-cover">
                <div className="cover-content">
                  <FiMapPin className="cover-icon" />
                  <span>Kasi360 Exclusive</span>
                  <h3>Township Digital</h3>
                  <p>Marketing Guide</p>
                  <div className="cover-price">FREE</div>
                </div>
              </div>
              <div className="download-stats">
                <div className="stat-circle">
                  <div className="stat-number">3.2K+</div>
                  <div className="stat-label">Township Downloads</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Guides Grid */}
      <section className="guides-grid-section">
        <div className="section-container">
          <div className="section-header">
            <h2>Complete Kasi360 Guide Library</h2>
            <p>Browse our growing collection of township-focused business resources</p>
          </div>
          
          <div className="guides-grid">
            {guides.map((guide) => (
              <div key={guide.id} className="guide-card">
                <div className="guide-header">
                  <div className="guide-category" style={{ backgroundColor: guide.color }}>
                    {guide.icon} {guide.title.split(' ')[0]}
                  </div>
                  <div className="guide-level" style={{ color: guide.color }}>
                    {guide.level}
                  </div>
                </div>
                
                <div className="guide-price-tag">{guide.price}</div>
                
                <h3 className="guide-title">{guide.title}</h3>
                <p className="guide-description">{guide.description}</p>
                
                <div className="guide-meta">
                  <div className="meta-item">
                    <FiFileText />
                    <span>{guide.pages}</span>
                  </div>
                  <div className="meta-item">
                    <FiDownload />
                    <span>{guide.downloads} downloads</span>
                  </div>
                  <div className="meta-item">
                    <FiCheckCircle />
                    <span>{guide.price}</span>
                  </div>
                </div>
                
                <div className="guide-includes">
                  <h4>What You'll Learn:</h4>
                  <div className="includes-tags">
                    {guide.includes.map((item, index) => (
                      <span key={index} className="include-tag">{item}</span>
                    ))}
                  </div>
                </div>
                
                <div className="guide-actions">
                  <button className="guide-download-btn">
                    <FiDownload /> Download Guide
                  </button>
                  <Link to={`/guides/${guide.id}`} className="guide-detail-link">
                    View Details
                  </Link>
                </div>
                
                {guide.featured && (
                  <div className="featured-tag">
                    <FiCheckCircle /> Most Popular
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="guides-cta">
        <div className="section-container">
          <div className="cta-content">
            <div className="cta-icon-wrapper">
              <FiSmartphone className="cta-icon" />
            </div>
            <h2>Part of the Complete Kasi360 Ecosystem</h2>
            <p>
              These guides are just one component of our holistic ecosystem designed specifically 
              for township businesses. Access fintech solutions, safety tools, and comprehensive 
              training - all built for the unique needs of South Africa's township economy.
            </p>
            <div className="ecosystem-stats">
              <div className="eco-stat">
                <div className="eco-number">R150,00</div>
                <div className="eco-label">Entry Cost</div>
              </div>
              <div className="eco-stat">
                <div className="eco-number">18-24</div>
                <div className="eco-label">Months to Break-even</div>
              </div>
              <div className="eco-stat">
                <div className="eco-number">100%</div>
                <div className="eco-label">Township Focused</div>
              </div>
            </div>
            <div className="cta-buttons">
              <Link to="/ecosystem" className="primary-btn">
                Explore Full Ecosystem
              </Link>
              <Link to="/contact" className="secondary-btn">
                Join Kasi360 Community
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="guides-faq">
        <div className="section-container">
          <div className="section-header center">
            <h2>Frequently Asked Questions</h2>
            <p>Everything township businesses need to know about Kasi360 Guides</p>
          </div>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Are these guides really free for township businesses?</h3>
              <p>Yes! All Kasi360 guides are completely free as part of our mission to empower South Africa's township SMEs and informal traders.</p>
            </div>
            
            <div className="faq-item">
              <h3>Do I need expensive equipment or internet?</h3>
              <p>No! Our guides focus on mobile-first, low-cost solutions. Most content works with basic smartphones and minimal data.</p>
            </div>
            
            <div className="faq-item">
              <h3>Are the guides available in local languages?</h3>
              <p>Currently available in English, Zulu, Xhosa, and Sotho. More languages coming based on community feedback!</p>
            </div>
            
            <div className="faq-item">
              <h3>How are these guides different from others?</h3>
              <p>Kasi360 guides are hyperlocal - designed specifically for township business environments, customer behaviors, and challenges.</p>
            </div>
            
            <div className="faq-item">
              <h3>Can I use these for my spaza shop or informal stall?</h3>
              <p>Absolutely! Our guides are specifically designed for informal traders, spaza shops, street vendors, and small township businesses.</p>
            </div>
            
            <div className="faq-item">
              <h3>How often are new guides added?</h3>
              <p>We publish 2-3 new township-focused guides every month based on direct feedback from our Kasi360 community members.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Guides;
// pages/Services/Services.jsx - UPDATED VERSION
import React from "react";
import { Link } from "react-router-dom";
import { 
  FiTarget, 
  FiShoppingCart, 
  FiCreditCard, 
  FiUsers,
  FiCheck,
  FiArrowRight,
  FiTrendingUp,
  FiShield,
  FiSmartphone,
  FiBarChart
} from "react-icons/fi";
import "./Services.css";

function Services() {
  const services = [
    {
      id: "marketing",  // Changed from "marketing" to match route
      icon: <FiTarget />,
      title: "marketing",
      subtitle: "Hyperlocal Digital Marketing",
      description: "Reach more customers in your township with targeted digital marketing solutions designed for local businesses.",
      color: "#00C853",
      features: [
        "Local SEO Optimization",
        "Social Media Management",
        "WhatsApp Business Integration",
        "Digital Advertising",
        "Brand Building",
        "Customer Engagement"
      ],
      benefits: [
        { icon: <FiTrendingUp />, text: "Increase local visibility by 300%" },
        { icon: <FiUsers />, text: "Connect with your community" },
        { icon: <FiBarChart />, text: "Track campaign performance" }
      ],
      pricing: "From R499/month",
      route: "/services/marketing"  // Added explicit route
    },
    {
      id: "storefront",  // Keep as is - matches the page I created
      icon: <FiShoppingCart />,
      title: "Digital Storefront",
      subtitle: "Complete E-commerce Platform",
      description: "Sell your products online with a professional digital storefront. Manage inventory, process orders, and accept payments all in one place.",
      color: "#0D47A1",
      features: [
        "Online Product Catalog",
        "Inventory Management",
        "Order Processing",
        "Delivery Integration",
        "Customer Reviews",
        "Sales Analytics"
      ],
      benefits: [
        { icon: <FiShoppingCart />, text: "24/7 online sales" },
        { icon: <FiSmartphone />, text: "Mobile-friendly design" },
        { icon: <FiBarChart />, text: "Real-time sales tracking" }
      ],
      pricing: "From R799/month",
      route: "/services/storefront"  // Added explicit route
    },
    {
      id: "payments",  // Keep as is - matches the page I created
      icon: <FiCreditCard />,
      title: "KasiPay",
      subtitle: "Fintech Solutions",
      description: "Secure digital payment solutions and financial tools designed for township businesses. Accept payments, send invoices, and manage finances easily.",
      color: "#FF6D00",
      features: [
        "Mobile Payments",
        "Digital Invoicing",
        "Financial Tracking",
        "Tax Calculation",
        "Expense Management",
        "Payment Reminders"
      ],
      benefits: [
        { icon: <FiShield />, text: "Bank-level security" },
        { icon: <FiCreditCard />, text: "Multiple payment options" },
        { icon: <FiBarChart />, text: "Financial insights" }
      ],
      pricing: "2.9% + R2 per transaction",
      route: "/services/payments"  // Added explicit route
    },
    {
      id: "training",  // Keep as is - matches the page I created
      icon: <FiUsers />,
      title: "Training & Support",
      subtitle: "Business Growth Programs",
      description: "Comprehensive training and ongoing support to help you master digital tools and grow your business sustainably.",
      color: "#9C27B0",
      features: [
        "Digital Literacy Training",
        "Business Skills Workshops",
        "One-on-One Coaching",
        "Technical Support",
        "Community Networking",
        "Success Resources"
      ],
      benefits: [
        { icon: <FiUsers />, text: "Expert mentorship" },
        { icon: <FiCheck />, text: "Practical skills" },
        { icon: <FiTrendingUp />, text: "Sustainable growth" }
      ],
      pricing: "From R299/month",
      route: "/services/training"  // Added explicit route
    }
  ];

  const stats = [
    { number: "85%", label: "Businesses see revenue growth within 3 months" },
    { number: "24/7", label: "Technical support available" },
    { number: "R2K", label: "Average monthly cost savings" },
    { number: "98%", label: "Customer satisfaction rate" }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Complete <span className="gradient-text">Digital Solutions</span>
          </h1>
          <p className="hero-subtitle">
            Everything your township business needs to thrive in the digital economy. 
            From marketing to payments, we've got you covered.
          </p>
          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="section-container">
          <div className="section-header center">
            <span className="section-badge">Our Services</span>
            <h2 className="section-title">The Kasi360 Ecosystem</h2>
            <p className="section-subtitle">
              Four powerful services that work together to transform your business
            </p>
          </div>
          
          <div className="services-cards">
            {services.map((service) => (
              <div key={service.id} className="service-card" id={service.id}>
                <div className="service-header">
                  <div className="service-icon" style={{ color: service.color }}>
                    {service.icon}
                  </div>
                  <div className="service-titles">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-subtitle">{service.subtitle}</p>
                  </div>
                  <div className="service-price">{service.pricing}</div>
                </div>
                
                <p className="service-description">{service.description}</p>
                
                <div className="service-features">
                  <h4>Key Features</h4>
                  <div className="features-list">
                    {service.features.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <FiCheck className="check-icon" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="service-benefits">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="benefit-item">
                      <div className="benefit-icon">{benefit.icon}</div>
                      <span>{benefit.text}</span>
                    </div>
                  ))}
                </div>
                
                <div className="service-actions">
                  {/* UPDATED: Now uses the service.route property */}
                  <Link to={service.route} className="primary-action">
                    Learn More <FiArrowRight />
                  </Link>
                  <Link to="/demo" className="secondary-action">
                    Get Demo
                  </Link>
                </div>
                
                <div className="service-accent" style={{ backgroundColor: service.color }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="comparison-section">
        <div className="section-container">
          <div className="section-header center">
            <h2 className="section-title">Choose Your Plan</h2>
            <p className="section-subtitle">
              Mix and match services to create the perfect package for your business
            </p>
          </div>
          
          <div className="comparison-table">
            <div className="table-header">
              <div className="header-cell feature">Features</div>
              <div className="header-cell">Basic</div>
              <div className="header-cell">Growth</div>
              <div className="header-cell">Enterprise</div>
            </div>
            
            <div className="table-body">
              <div className="table-row">
                <div className="row-cell feature">Number of Services</div>
                <div className="row-cell">1 Service</div>
                <div className="row-cell">2 Services</div>
                <div className="row-cell">All Services</div>
              </div>
              
              <div className="table-row">
                <div className="row-cell feature">Support</div>
                <div className="row-cell">Email Support</div>
                <div className="row-cell">Priority Support</div>
                <div className="row-cell">24/7 Dedicated Support</div>
              </div>
              
              <div className="table-row">
                <div className="row-cell feature">Training</div>
                <div className="row-cell">Basic Tutorials</div>
                <div className="row-cell">Group Training</div>
                <div className="row-cell">1-on-1 Coaching</div>
              </div>
              
              <div className="table-row">
                <div className="row-cell feature">Analytics</div>
                <div className="row-cell">Basic Reports</div>
                <div className="row-cell">Advanced Analytics</div>
                <div className="row-cell">Custom Dashboard</div>
              </div>
            </div>
            
            <div className="table-footer">
              <div className="footer-cell feature"></div>
              <div className="footer-cell">
                <div className="price">From R499/mo</div>
                {/* UPDATED: Changed to /pricing for the Pricing page I created */}
                <Link to="/pricing" className="plan-btn">Get Started</Link>
              </div>
              <div className="footer-cell">
                <div className="price">From R899/mo</div>
                {/* UPDATED: Changed to /pricing for the Pricing page I created */}
                <Link to="/pricing" className="plan-btn recommended">Popular</Link>
              </div>
              <div className="footer-cell">
                <div className="price">Custom Pricing</div>
                <Link to="/contact" className="plan-btn">Contact Sales</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="cta-container">
          <div className="cta-content">
            <h2>Not Sure Where to Start?</h2>
            <p>
              Take our 2-minute assessment and we'll recommend the perfect 
              services for your business needs.
            </p>
            <div className="cta-buttons">
              {/* You can create an Assessment page or use /contact for now */}
              <Link to="/contact" className="primary-btn">
                Get Personalized Recommendations
              </Link>
              <Link to="/contact" className="secondary-btn">
                Talk to Our Team
              </Link>
            </div>
          </div>
          <div className="cta-image">
            <div className="illustration-placeholder">
              <span>Personalized Service Recommendations</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="services-faq">
        <div className="section-container">
          <div className="section-header center">
            <h2 className="section-title">Common Questions</h2>
          </div>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Can I use multiple services together?</h3>
              <p>Yes! All our services are designed to work together seamlessly. Many businesses use 2-3 services for maximum impact.</p>
            </div>
            
            <div className="faq-item">
              <h3>Is there a free trial?</h3>
              <p>We offer a 14-day free trial for all services with no credit card required. Experience the benefits risk-free.</p>
            </div>
            
            <div className="faq-item">
              <h3>How quickly can I get started?</h3>
              <p>You can start using our services within 24 hours of signing up. Some features are available immediately.</p>
            </div>
            
            <div className="faq-item">
              <h3>Is training included?</h3>
              <p>Yes! We provide comprehensive training and ongoing support to ensure you get the most from our services.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
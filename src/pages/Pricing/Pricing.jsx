// pages/Pricing/Pricing.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FiCheckCircle,
  FiXCircle,
  FiArrowRight,
  FiDollarSign,
  FiUsers,
  FiTrendingUp,
  FiShield,
  FiSmartphone,
  FiHeadphones,
  FiBarChart,
  FiTarget,
  FiHelpCircle,
  FiShoppingBag
} from "react-icons/fi";
import "./Pricing.css";

function Pricing() {
  const [billingCycle, setBillingCycle] = useState("monthly"); // monthly or yearly

  const pricingPlans = [
    {
      name: "Basic",
      description: "Perfect for startups and small township businesses",
      monthlyPrice: "R499",
      yearlyPrice: "R4,790",
      discount: "20% off",
      color: "#00C853",
      features: [
        { included: true, text: "KasiMarketing Basic" },
        { included: true, text: "Digital Storefront" },
        { included: true, text: "KasiPay Transactions (2.9% + R2)" },
        { included: true, text: "Basic Training Resources" },
        { included: false, text: "Advanced Analytics" },
        { included: false, text: "Priority Support" },
        { included: false, text: "Custom Branding" },
        { included: false, text: "API Access" }
      ],
      recommended: false
    },
    {
      name: "Growth",
      description: "Ideal for growing township businesses",
      monthlyPrice: "R899",
      yearlyPrice: "R8,630",
      discount: "20% off",
      color: "#0D47A1",
      features: [
        { included: true, text: "KasiMarketing Pro" },
        { included: true, text: "Digital Storefront" },
        { included: true, text: "KasiPay Transactions (2.5% + R2)" },
        { included: true, text: "Full Training Library" },
        { included: true, text: "Advanced Analytics" },
        { included: true, text: "Priority Support" },
        { included: false, text: "Custom Branding" },
        { included: false, text: "API Access" }
      ],
      recommended: true
    },
    {
      name: "Enterprise",
      description: "For established township businesses",
      monthlyPrice: "Custom",
      yearlyPrice: "Custom",
      color: "#FF6D00",
      features: [
        { included: true, text: "KasiMarketing Enterprise" },
        { included: true, text: "Digital Storefront Pro" },
        { included: true, text: "KasiPay Transactions (2% + R2)" },
        { included: true, text: "1-on-1 Training" },
        { included: true, text: "Custom Analytics" },
        { included: true, text: "24/7 Dedicated Support" },
        { included: true, text: "Custom Branding" },
        { included: true, text: "Full API Access" }
      ],
      recommended: false
    }
  ];

  const addons = [
    {
      name: "KasiPay+",
      description: "Enhanced payment processing with lower fees",
      price: "R199/month",
      features: ["1.9% transaction fee", "Batch payments", "Advanced security"],
      icon: <FiDollarSign />
    },
    {
      name: "Training Pro",
      description: "Personalized business coaching",
      price: "R299/month",
      features: ["Weekly coaching", "Custom learning path", "Certification"],
      icon: <FiUsers />
    },
    {
      name: "Analytics+",
      description: "Advanced business insights",
      price: "R149/month",
      features: ["Custom reports", "Market intelligence", "Competitor analysis"],
      icon: <FiBarChart />
    }
  ];

  const faqs = [
    {
      question: "Is there a free trial?",
      answer: "Yes! All plans come with a 14-day free trial. No credit card required."
    },
    {
      question: "Can I change plans later?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time."
    },
    {
      question: "Are there setup fees?",
      answer: "No setup fees for Basic and Growth plans. Enterprise may have implementation costs."
    },
    {
      question: "Do you offer discounts for multiple businesses?",
      answer: "Yes! Contact us for group pricing for township business associations."
    }
  ];

  return (
    <div className="pricing-page">
      {/* Hero Section */}
      <section className="pricing-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h1>
          <p className="hero-subtitle">
            Everything your township business needs to thrive. No hidden fees, no surprises.
            Starting from just <strong>R499/month</strong>.
          </p>
          
          <div className="billing-toggle">
            <span className={billingCycle === "monthly" ? "active" : ""}>Monthly</span>
            <button 
              className="toggle-switch"
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
            >
              <div className={`switch-handle ${billingCycle}`}></div>
            </button>
            <span className={billingCycle === "yearly" ? "active" : ""}>
              Yearly <span className="discount-badge">Save 20%</span>
            </span>
          </div>

          <div className="township-focus">
            <FiCheckCircle /> Designed specifically for township businesses
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="pricing-plans-section">
        <div className="section-container">
          <div className="section-header center">
            <span className="section-badge">Choose Your Plan</span>
            <h2 className="section-title">Kasi360 Ecosystem Plans</h2>
            <p className="section-subtitle">
              All-in-one packages designed for township business success
            </p>
          </div>

          <div className="pricing-cards">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`pricing-card ${plan.recommended ? 'recommended' : ''}`}
                style={{ borderColor: plan.color }}
              >
                {plan.recommended && (
                  <div className="recommended-badge" style={{ backgroundColor: plan.color }}>
                    <FiCheckCircle /> Most Popular
                  </div>
                )}

                <div className="plan-header">
                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-description">{plan.description}</p>
                  
                  <div className="plan-price">
                    <div className="price-amount">
                      {billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                    </div>
                    <div className="price-period">
                      {plan.name === "Enterprise" ? "Contact us" : `per month ${billingCycle === "yearly" ? '(billed yearly)' : ''}`}
                      {plan.discount && billingCycle === "yearly" && (
                        <span className="yearly-discount">{plan.discount}</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="plan-features">
                  <h4>What's Included:</h4>
                  <div className="features-list">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="feature-item">
                        {feature.included ? (
                          <FiCheckCircle className="check" />
                        ) : (
                          <FiXCircle className="x" />
                        )}
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="plan-actions">
                  <Link 
                    to={plan.name === "Enterprise" ? "/contact" : "/contact"} 
                    className="plan-button"
                    style={{ backgroundColor: plan.color }}
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </Link>
                  {plan.name !== "Enterprise" && (
                    <Link to="/demo" className="plan-demo-link">
                      Book a Demo
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="pricing-note">
            <div className="note-icon">
              <FiTarget />
            </div>
            <p>
              <strong>R2,000 starting investment:</strong> All plans are designed to help township businesses 
              achieve break-even within 18-24 months. Our pricing reflects the lowest cost-to-benefit ratio 
              in the market for township-specific digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="addons-section">
        <div className="section-container">
          <div className="section-header center">
            <h2 className="section-title">Optional Add-ons</h2>
            <p className="section-subtitle">
              Enhance your plan with powerful additional features
            </p>
          </div>

          <div className="addons-grid">
            {addons.map((addon, index) => (
              <div key={index} className="addon-card">
                <div className="addon-icon" style={{ color: addons[index].color || "#00C853" }}>
                  {addon.icon}
                </div>
                <h3>{addon.name}</h3>
                <p className="addon-description">{addon.description}</p>
                <div className="addon-price">{addon.price}</div>
                <div className="addon-features">
                  {addon.features.map((feature, idx) => (
                    <div key={idx} className="addon-feature">
                      <FiCheckCircle /> {feature}
                    </div>
                  ))}
                </div>
                <button className="addon-button">
                  Add to Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Comparison */}
      <section className="comparison-section">
        <div className="section-container">
          <div className="section-header center">
            <h2 className="section-title">Why Kasi360 is Different</h2>
            <p className="section-subtitle">
              Compare our value with traditional business solutions
            </p>
          </div>

          <div className="comparison-grid">
            <div className="comparison-item">
              <h3>Traditional Solutions</h3>
              <ul>
                <li><FiXCircle /> High setup costs (R10,000+)</li>
                <li><FiXCircle /> Complex pricing structures</li>
                <li><FiXCircle /> Not township-focused</li>
                <li><FiXCircle /> Separate tools needed</li>
                <li><FiXCircle /> Steep learning curve</li>
              </ul>
              <div className="comparison-cost">
                Estimated: R2,500+/month
              </div>
            </div>

            <div className="comparison-item recommended">
              <div className="recommended-tag">Kasi360 Advantage</div>
              <h3>Kasi360 Ecosystem</h3>
              <ul>
                <li><FiCheckCircle /> R2,000 starting investment</li>
                <li><FiCheckCircle /> Transparent, all-in-one pricing</li>
                <li><FiCheckCircle /> Hyperlocal township design</li>
                <li><FiCheckCircle /> Integrated ecosystem</li>
                <li><FiCheckCircle /> Easy mobile-first interface</li>
              </ul>
              <div className="comparison-cost">
                From: R499/month
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pricing-faq">
        <div className="section-container">
          <div className="section-header center">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Everything township businesses need to know about pricing
            </p>
          </div>

          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="contact-cta">
            <div className="contact-content">
              <FiHelpCircle className="contact-icon" />
              <h3>Still have questions?</h3>
              <p>
                Our township business specialists are here to help you choose 
                the right plan for your specific needs.
              </p>
              <Link to="/contact" className="contact-button">
                Contact Our Team <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pricing-cta">
        <div className="section-container">
          <div className="cta-content">
            <div className="cta-badge">
              <FiShoppingBag /> Limited Time Offer
            </div>
            <h2>Start Your 14-Day Free Trial</h2>
            <p>
              Experience the full Kasi360 ecosystem risk-free. No credit card required. 
              Join <strong>500+ township businesses</strong> already growing with us.
            </p>
            
            <div className="cta-buttons">
              <Link to="/contact" className="primary-btn">
                Start Free Trial
              </Link>
              <Link to="/demo" className="secondary-btn">
                <FiHeadphones /> Book a Personalized Demo
              </Link>
            </div>
            
            <div className="cta-stats">
              <div className="stat">
                <div className="stat-number">98%</div>
                <div className="stat-label">Satisfaction Rate</div>
              </div>
              <div className="stat">
                <div className="stat-number">85%</div>
                <div className="stat-label">Revenue Growth</div>
              </div>
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Township Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
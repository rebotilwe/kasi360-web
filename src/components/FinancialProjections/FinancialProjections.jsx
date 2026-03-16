// components/FinancialProjections/FinancialProjections.jsx - UPDATED (NO FINANCIAL PROJECTIONS)
import React from "react";
import { 
  FiTarget, 
  FiCalendar, 
  FiUsers, 
  FiCheckCircle,
  FiBarChart,
  FiArrowRight,
  FiTrendingUp,
  FiMapPin
} from "react-icons/fi";
import "./FinancialProjections.css";

function FinancialProjections({ variant = "default", title, subtitle }) {
  // Business Impact Projections (No financial numbers)
  const impactProjections = [
    {
      period: "Year 1",
      businesses: "500+",
      jobs: "2,000+",
      description: "Market entry & pilot programs",
      focus: "Customer acquisition & ecosystem validation",
      color: "#00C853",
      highlight: "R2,000 starting cost for businesses"
    },
    {
      period: "Year 2",
      businesses: "2,000+",
      jobs: "8,000+",
      description: "Provincial expansion & scale",
      focus: "Sustainable ecosystem adoption",
      color: "#0D47A1",
      highlight: "Township business success stories"
    },
    {
      period: "Year 3",
      businesses: "5,000+",
      jobs: "20,000+",
      description: "National scaling & impact multiplication",
      focus: "Market leadership & community transformation",
      color: "#FF6D00",
      highlight: "Widespread digital adoption in townships"
    }
  ];

  // Business Metrics (No revenue/financial projections)
  const keyMetrics = [
    {
      icon: <FiCalendar />,
      title: "Break-even for Businesses",
      value: "18-24 months",
      description: "Time for township businesses to become profitable",
      source: "Based on Kasi360 business model",
      color: "#00C853"
    },
    {
      icon: <FiTarget />,
      title: "Starting Cost",
      value: "R150,00",
      description: "Entry investment for businesses to join ecosystem",
      source: "Lowest cost-to-benefit ratio in market",
      color: "#0D47A1"
    },
    {
      icon: <FiUsers />,
      title: "Market Potential",
      value: "70% of SA Businesses",
      description: "Township SMEs who can benefit from digital tools",
      source: "Stats SA & World Bank data",
      color: "#FF6D00"
    },
    {
      icon: <FiTrendingUp />,
      title: "Business Growth",
      value: "85% increase",
      description: "Average revenue growth for Kasi360 businesses",
      source: "Pilot program results",
      color: "#9C27B0"
    }
  ];

  // Ecosystem Benefits
  const benefits = [
    {
      title: "Hyperlocal Design",
      description: "Built specifically for township business environments",
      icon: <FiMapPin />
    },
    {
      title: "Proven Results",
      description: "Validated through successful township pilot programs",
      icon: <FiCheckCircle />
    },
    {
      title: "Holistic Support",
      description: "Combines technology, training, and community support",
      icon: <FiCheckCircle />
    }
  ];

  return (
    <div className={`financial-projections ${variant}`}>
      <div className="projections-header">
        {title ? (
          <h2 className="projections-title">{title}</h2>
        ) : (
          <h2 className="projections-title">Growth Roadmap & Impact Projections</h2>
        )}
        
        {subtitle ? (
          <p className="projections-subtitle">{subtitle}</p>
        ) : (
          <p className="projections-subtitle">
            Conservative business impact projections based on validated township metrics and Kasi360's scalable ecosystem
          </p>
        )}
        
        <div className="presentation-highlight">
          <FiCheckCircle /> Based on data from Kasi360 presentation and township market research
        </div>
      </div>
      
      <div className="projections-container">
        <div className="projections-timeline">
          {impactProjections.map((projection, index) => (
            <div key={index} className="timeline-item" style={{ borderColor: projection.color }}>
              <div className="timeline-marker" style={{ backgroundColor: projection.color }}>
                <div className="marker-pulse"></div>
              </div>
              
              <div className="timeline-period">{projection.period}</div>
              
              <div className="timeline-main">
                <div className="timeline-impact" style={{ color: projection.color }}>
                  {projection.businesses}
                  <span className="impact-label">Businesses</span>
                </div>
                <div className="timeline-description">{projection.description}</div>
              </div>
              
              <div className="timeline-details">
                <div className="detail-item">
                  <FiUsers className="detail-icon" />
                  <div className="detail-content">
                    <div className="detail-value">{projection.businesses}</div>
                    <div className="detail-label">Businesses Empowered</div>
                  </div>
                </div>
                
                <div className="detail-item">
                  <FiUsers className="detail-icon" />
                  <div className="detail-content">
                    <div className="detail-value">{projection.jobs}</div>
                    <div className="detail-label">Jobs Created</div>
                  </div>
                </div>
              </div>
              
              <div className="timeline-focus">
                <strong>Focus:</strong> {projection.focus}
              </div>
              
              <div className="timeline-highlight">
                <FiCheckCircle /> {projection.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="key-metrics">
        <h3 className="metrics-title">Key Business Metrics</h3>
        <p className="metrics-subtitle">Based on Kasi360 ecosystem performance and market analysis</p>
        
        <div className="metrics-grid">
          {keyMetrics.map((metric, index) => (
            <div key={index} className="metric-card" style={{ borderTopColor: metric.color }}>
              <div className="metric-icon" style={{ color: metric.color }}>
                {metric.icon}
              </div>
              
              <div className="metric-content">
                <div className="metric-title">{metric.title}</div>
                <div className="metric-value">{metric.value}</div>
                <div className="metric-description">{metric.description}</div>
                <div className="metric-source">{metric.source}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="financial-highlights">
        <div className="highlights-content">
          <div className="highlights-icon">
            <FiBarChart />
          </div>
          
          <div className="highlights-text">
            <h4>Sustainable Business Ecosystem</h4>
            <p>
              Our model focuses on <strong>sustainable township business growth</strong> rather than 
              financial projections. Starting from just <strong>R150,00 per business</strong>, we enable 
              entrepreneurs to achieve <strong>profitability within 18-24 months</strong> while creating 
              lasting community impact.
            </p>
            
            <div className="highlight-items">
              {benefits.map((benefit, index) => (
                <div key={index} className="highlight-item">
                  <div className="highlight-icon">{benefit.icon}</div>
                  <div className="highlight-text">
                    <strong>{benefit.title}:</strong> {benefit.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinancialProjections;
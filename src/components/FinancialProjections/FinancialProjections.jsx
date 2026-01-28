// components/FinancialProjections/FinancialProjections.jsx - UPDATED VERSION
import React from "react";
import { 
  FiTrendingUp, 
  FiCalendar, 
  FiTarget, 
  FiDollarSign,
  FiUsers,
  FiCheckCircle,
  FiBarChart,
  FiArrowRight
} from "react-icons/fi";
import "./FinancialProjections.css";

function FinancialProjections({ variant = "default", title, subtitle }) {
  // Conservative projections for credibility
  const conservativeProjections = [
    {
      period: "Year 1",
      revenue: "R 1.2M",
      users: "2,500+",
      businesses: "500+",
      description: "Market entry & pilot programs",
      focus: "Customer acquisition & validation",
      color: "#00C853",
      highlight: "R2,000 starting investment"
    },
    {
      period: "Year 2",
      revenue: "R 4.8M",
      users: "10,000+",
      businesses: "2,000+",
      description: "Break-even & provincial expansion",
      focus: "Sustainable growth & ecosystem adoption",
      color: "#0D47A1",
      highlight: "18-24 month break-even timeline"
    },
    {
      period: "Year 3",
      revenue: "R 12.5M",
      users: "25,000+",
      businesses: "5,000+",
      description: "Profitability & national scaling",
      focus: "Market leadership & impact expansion",
      color: "#FF6D00",
      highlight: "300% YoY growth"
    }
  ];

  // Key metrics from presentation
  const keyMetrics = [
    {
      icon: <FiCalendar />,
      title: "Break-even Timeline",
      value: "18-24 months",
      description: "Projected time to profitability",
      source: "Based on Kasi360 financial model",
      color: "#00C853"
    },
    {
      icon: <FiDollarSign />,
      title: "Starting Investment",
      value: "R2,000",
      description: "Entry cost for businesses",
      source: "Lowest cost-to-benefit ratio",
      color: "#0D47A1"
    },
    {
      icon: <FiTrendingUp />,
      title: "Revenue Growth",
      value: "200% YoY",
      description: "Conservative annual growth projection",
      source: "Market penetration analysis",
      color: "#FF6D00"
    },
    {
      icon: <FiUsers />,
      title: "Target Market",
      value: "70% of SA Businesses",
      description: "Township SMEs addressable market",
      source: "Stats SA & World Bank data",
      color: "#9C27B0"
    }
  ];

  // Financial highlights
  const highlights = [
    {
      title: "Sustainable Model",
      description: "Built for long-term township business growth",
      icon: <FiCheckCircle />
    },
    {
      title: "Conservative Projections",
      description: "Based on validated township business metrics",
      icon: <FiCheckCircle />
    },
    {
      title: "Proven in Pilot",
      description: "Financial model validated in 3 township communities",
      icon: <FiCheckCircle />
    }
  ];

  return (
    <div className={`financial-projections ${variant}`}>
      <div className="projections-header">
        {title ? (
          <h2 className="projections-title">{title}</h2>
        ) : (
          <h2 className="projections-title">Financial Roadmap & Projections</h2>
        )}
        
        {subtitle ? (
          <p className="projections-subtitle">{subtitle}</p>
        ) : (
          <p className="projections-subtitle">
            Conservative projections based on validated township business metrics and Kasi360's scalable model
          </p>
        )}
        
        <div className="presentation-highlight">
          <FiCheckCircle /> Based on data from Kasi360 presentation and township market research
        </div>
      </div>
      
      <div className="projections-container">
        <div className="projections-timeline">
          {conservativeProjections.map((projection, index) => (
            <div key={index} className="timeline-item" style={{ borderColor: projection.color }}>
              <div className="timeline-marker" style={{ backgroundColor: projection.color }}>
                <div className="marker-pulse"></div>
              </div>
              
              <div className="timeline-period">{projection.period}</div>
              
              <div className="timeline-main">
                <div className="timeline-revenue" style={{ color: projection.color }}>
                  {projection.revenue}
                </div>
                <div className="timeline-description">{projection.description}</div>
              </div>
              
              <div className="timeline-details">
                <div className="detail-item">
                  <FiUsers className="detail-icon" />
                  <div className="detail-content">
                    <div className="detail-value">{projection.businesses}</div>
                    <div className="detail-label">Businesses</div>
                  </div>
                </div>
                
                <div className="detail-item">
                  <FiUsers className="detail-icon" />
                  <div className="detail-content">
                    <div className="detail-value">{projection.users}</div>
                    <div className="detail-label">Users</div>
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
        
        <div className="projections-connector">
          <div className="connector-line"></div>
          <div className="connector-arrows">
            <FiArrowRight />
            <FiArrowRight />
          </div>
        </div>
      </div>
      
      <div className="key-metrics">
        <h3 className="metrics-title">Key Financial Metrics</h3>
        <p className="metrics-subtitle">Based on Kasi360 presentation and market analysis</p>
        
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
            <h4>Conservative & Realistic Projections</h4>
            <p>
              Our financial model is built on <strong>validated township business metrics</strong> and 
              accounts for the unique challenges and opportunities of the South African township economy. 
              Starting from just <strong>R2,000 per business</strong>, we project sustainable growth 
              with a <strong>18-24 month break-even timeline</strong>.
            </p>
            
            <div className="highlight-items">
              {highlights.map((highlight, index) => (
                <div key={index} className="highlight-item">
                  <div className="highlight-icon">{highlight.icon}</div>
                  <div className="highlight-text">
                    <strong>{highlight.title}:</strong> {highlight.description}
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
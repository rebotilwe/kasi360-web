// components/WhyKasi360/WhyKasi360.jsx
import React from "react";
import { FiTarget, FiUsers, FiGlobe, FiAward } from "react-icons/fi";
import "./Kasi360.css";
import { Link } from "react-router-dom";

function WhyKasi360() {
  const reasons = [
    {
      icon: <FiTarget />,
      title: "Market Gap",
      description: "Addressing the 70% digital divide in township businesses with tailored solutions",
      color: "#00C853"
    },
    {
      icon: <FiUsers />,
      title: "Community Impact",
      description: "Creating sustainable livelihoods and empowering local entrepreneurs",
      color: "#0D47A1"
    },
    {
      icon: <FiGlobe />,
      title: "Scalable Model",
      description: "Proven framework that can expand across South Africa and beyond",
      color: "#FF6D00"
    },
    {
      icon: <FiAward />,
      title: "Proven Results",
      description: "Backed by successful pilot programs and stakeholder endorsements",
      color: "#9C27B0"
    }
  ];

  return (
    <div className="why-kasi360">
      <div className="impact-statement">
        <h3>Creating Lasting Impact</h3>
        <p>
          Kasi360 isn't just another tech platform - it's a movement to democratize digital access 
          for South Africa's township economy. We're bridging the gap between traditional business 
          practices and the digital future.
        </p>
      </div>
      
      <div className="reasons-grid">
        {reasons.map((reason, index) => (
          <div key={index} className="reason-card">
            <div className="reason-icon" style={{ color: reason.color }}>
              {reason.icon}
            </div>
            <h4 className="reason-title">{reason.title}</h4>
            <p className="reason-description">{reason.description}</p>
            <div className="reason-highlight" style={{ backgroundColor: reason.color }}></div>
          </div>
        ))}
      </div>
      
      <div className="call-to-action">
        <h4>Ready to be part of the change?</h4>
        <p>Join hundreds of township businesses already transforming with Kasi360</p>
        <div className="cta-buttons">
          {/* <button className="primary-cta">Start Free Trial</button> */}
      <Link to="/demo" className="secondary-cta">
  Book a Demo
</Link>
        </div>
      </div>
    </div>
  );
}

export default WhyKasi360;
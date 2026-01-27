// components/ContactCTA/ContactCTA.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FiMessageSquare, FiCalendar, FiUsers } from "react-icons/fi";
import "./ContactCTA.css";

function ContactCTA() {
  return (
    <div className="contact-cta">
      <div className="cta-content">
        <h3>Ready to Transform Your Township Business?</h3>
        <p>
          Join the Kasi360 ecosystem today and start your journey toward digital growth 
          and financial empowerment.
        </p>
        
        <div className="cta-options">
          <Link to="/demo" className="cta-option primary">
            <FiCalendar className="option-icon" />
            <div className="option-content">
              <h4>Schedule a Demo</h4>
              <p>See our platform in action with a personalized walkthrough</p>
            </div>
            <div className="option-arrow">→</div>
          </Link>
          
          <Link to="/partner" className="cta-option secondary">
            <FiUsers className="option-icon" />
            <div className="option-content">
              <h4>Become a Partner</h4>
              <p>Join our network of business partners and community leaders</p>
            </div>
            <div className="option-arrow">→</div>
          </Link>
          
          <Link to="/contact" className="cta-option accent">
            <FiMessageSquare className="option-icon" />
            <div className="option-content">
              <h4>Get in Touch</h4>
              <p>Contact our team for questions, support, or collaborations</p>
            </div>
            <div className="option-arrow">→</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactCTA;
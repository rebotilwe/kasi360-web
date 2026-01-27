import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import "./ContactBar.css";

function ContactBar() {
  return (
    <div className="contact-bar-wrapper">
      <div className="contact-pill">
        {/* Promo text from PowerPoint */}
        <span className="promo-text">
          Technology. Access. Growth. • Empowering Township SMEs
        </span>

        <div className="divider" />

        {/* Contact items */}
        <span className="contact-item phone">
          <FiPhone />
          +27 11 123 4567
        </span>

        <span className="contact-item email">
          <FiMail />
          info@kasi360.co.za
        </span>

        <span className="contact-item location">
          <FiMapPin />
          Johannesburg, South Africa
        </span>
      </div>
    </div>
  );
}

export default ContactBar;
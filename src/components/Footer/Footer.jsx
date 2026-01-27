import React from "react";
import { Link } from "react-router-dom";
import { 
  FiFacebook, 
  FiTwitter, 
  FiInstagram, 
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowRight
} from "react-icons/fi";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Ecosystem", path: "/ecosystem" },
    { label: "Impact", path: "/impact" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" }
  ];

  const services = [
    { label: "KasiMarketing", path: "/services/marketing" },
    { label: "Digital Storefront", path: "/services/storefront" },
    { label: "KasiPay", path: "/services/payments" },
    { label: "Training & Support", path: "/services/training" }
  ];

  const resources = [
    { label: "Success Stories", path: "/resources/stories" },
    { label: "Business Guides", path: "/resources/guides" },
    { label: "Research & Reports", path: "/resources/research" },
    { label: "FAQ", path: "/resources/faq" }
  ];

  const socialLinks = [
    { icon: <FiFacebook />, label: "Facebook", url: "https://facebook.com/kasi360" },
    { icon: <FiTwitter />, label: "Twitter", url: "https://twitter.com/kasi360" },
    { icon: <FiInstagram />, label: "Instagram", url: "https://instagram.com/kasi360" },
    { icon: <FiLinkedin />, label: "LinkedIn", url: "https://linkedin.com/company/kasi360" }
  ];

  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        <div className="footer-container">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-text">Kasi</span>
              <span className="logo-accent">360</span>
              <div className="logo-dot"></div>
            </div>
            <p className="footer-tagline">
              Empowering South Africa's Township SMEs with digital solutions for sustainable growth.
            </p>
            
            <div className="footer-newsletter">
              <h4>Stay Updated</h4>
              <p>Get the latest news and insights on township business growth</p>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="newsletter-input"
                />
                <button className="newsletter-btn">
                  <FiArrowRight />
                </button>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="footer-links">
            <div className="link-column">
              <h4>Quick Links</h4>
              <ul>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>
                      <FiArrowRight className="link-arrow" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="link-column">
              <h4>Our Services</h4>
              <ul>
                {services.map((service, index) => (
                  <li key={index}>
                    <Link to={service.path}>
                      <FiArrowRight className="link-arrow" />
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="link-column">
              <h4>Resources</h4>
              <ul>
                {resources.map((resource, index) => (
                  <li key={index}>
                    <Link to={resource.path}>
                      <FiArrowRight className="link-arrow" />
                      {resource.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Column */}
          <div className="footer-contact">
            <h4>Get in Touch</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FiMapPin className="contact-icon" />
                <div>
                  <span className="contact-label">Address</span>
                  <span className="contact-detail">Johannesburg, South Africa</span>
                </div>
              </div>
              
              <div className="contact-item">
                <FiPhone className="contact-icon" />
                <div>
                  <span className="contact-label">Phone</span>
                  <span className="contact-detail">+27 11 123 4567</span>
                </div>
              </div>
              
              <div className="contact-item">
                <FiMail className="contact-icon" />
                <div>
                  <span className="contact-label">Email</span>
                  <span className="contact-detail">info@kasi360.co.za</span>
                </div>
              </div>
            </div>

            <div className="business-hours">
              <h5>Business Hours</h5>
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 1:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section - Social & Partners */}
      <div className="footer-middle">
        <div className="footer-container">
          <div className="social-links">
            <h5>Connect With Us</h5>
            <div className="social-icons">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  className="social-icon"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="partners">
            <h5>Our Partners</h5>
            <div className="partner-logos">
              <div className="partner-logo">Gauteng Province</div>
              <div className="partner-logo">DTI</div>
              <div className="partner-logo">SEDA</div>
              <div className="partner-logo">Local Municipalities</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="copyright">
            <p>&copy; {currentYear} Kasi360. All rights reserved.</p>
            <p>Empowering Township SMEs through Digital Innovation</p>
          </div>

          <div className="legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="separator">•</span>
            <Link to="/terms">Terms of Service</Link>
            <span className="separator">•</span>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
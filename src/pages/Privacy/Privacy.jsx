import React from "react";
import { Link } from "react-router-dom";
import "./LegalPages.css";

const Privacy = () => {
  const lastUpdated = "January 2024"; // Update this as needed

  return (
    <div className="legal-page">
      <div className="legal-header">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last updated: {lastUpdated}</p>
      </div>
      
      <p className="intro">
        Your privacy is important to us. This policy explains how Kasi360 ("we", "us", or "our") collects, uses, and protects your personal information on our platform.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul>
        <li><strong>Personal Information:</strong> Name, email address, phone number, business details</li>
        <li><strong>Usage Data:</strong> How you interact with our platform, feature usage, analytics</li>
        <li><strong>Technical Data:</strong> IP address, browser type, device information, cookies</li>
        <li><strong>Payment Information:</strong> Processed securely through our payment partners</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Provide and improve our services</li>
        <li>Personalize your experience</li>
        <li>Process transactions securely</li>
        <li>Communicate updates, offers, and support</li>
        <li>Ensure platform security and prevent fraud</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>3. Data Protection</h2>
      <p>
        We implement industry-standard security measures to protect your data. However, no method of transmission over the Internet is 100% secure.
      </p>

      <h2>4. Sharing Your Information</h2>
      <p>
        We do not sell your personal information. We may share data with:
      </p>
      <ul>
        <li>Trusted service providers (payment processors, hosting services)</li>
        <li>Legal authorities when required by law</li>
        <li>Business partners with your explicit consent</li>
      </ul>

      <h2>5. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access your personal data</li>
        <li>Correct inaccurate data</li>
        <li>Request deletion of your data</li>
        <li>Opt-out of marketing communications</li>
      </ul>

      <h2>6. Cookies</h2>
      <p>
        We use cookies to improve your experience. You can disable cookies in your browser settings, but this may affect platform functionality.
      </p>

      <h2>7. Third-Party Links</h2>
      <p>
        Our platform may contain links to third-party sites. We are not responsible for their privacy practices.
      </p>

      <h2>8. Children's Privacy</h2>
      <p>
        Our services are not directed to individuals under 18. We do not knowingly collect data from children.
      </p>

      <h2>9. Policy Changes</h2>
      <p>
        We may update this policy periodically. Continued use of our platform after changes constitutes acceptance.
      </p>

      <h2>10. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy or your data, please <Link to="/contact">contact us</Link> or email <a href="mailto:privacy@kasi360.co.za">privacy@kasi360.co.za</a>.
      </p>

      <div className="legal-footer">
        <p>&copy; {new Date().getFullYear()} Kasi360. All rights reserved.</p>
        <p className="company-reg">KASI DIGITAL CONNECT (PTY) LTD (2025/516387/07)</p>
      </div>
    </div>
  );
};

export default Privacy;
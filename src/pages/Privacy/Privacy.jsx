import React from "react";
import "./LegalPages.css";

const Privacy = () => {
  return (
    <div className="legal-page">
      <h1>Privacy Policy</h1>
      <p>
        Your privacy is important to us. This policy explains how we collect, use, and protect your personal information on the Kasi360 platform.
      </p>

      <h2>Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul>
        <li>Personal identification information (name, email, phone number)</li>
        <li>Usage data and analytics</li>
        <li>Cookies and tracking technologies</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>
        We use your information to provide and improve our services, communicate updates, and ensure security.
      </p>

      <h2>Sharing Your Information</h2>
      <p>
        We do not sell your information. We may share data with trusted partners to enhance our services or comply with legal obligations.
      </p>

      <h2>Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please <a href="/contact">contact us</a>.</p>
    </div>
  );
};

export default Privacy;

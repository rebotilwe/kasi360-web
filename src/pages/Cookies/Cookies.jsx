import React from "react";
import "./Cookies.css";

const Cookies = () => {
  return (
    <div className="legal-page">
      <h1>Cookie Policy</h1>
      <p>
        Kasi360 uses cookies and similar technologies to enhance your experience on our platform.
      </p>

      <h2>What Are Cookies?</h2>
      <p>
        Cookies are small text files stored on your device to help websites remember your preferences and activity.
      </p>

      <h2>How We Use Cookies</h2>
      <ul>
        <li>To improve website functionality</li>
        <li>To analyze site usage and performance</li>
        <li>To personalize your experience</li>
      </ul>

      <h2>Managing Cookies</h2>
      <p>
        You can manage or disable cookies in your browser settings, but some features of the platform may not function correctly.
      </p>

      <h2>Contact Us</h2>
      <p>If you have any questions about our cookie policy, please <a href="/contact">contact us</a>.</p>
    </div>
  );
};

export default Cookies;

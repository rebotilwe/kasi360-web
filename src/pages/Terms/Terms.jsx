import React from "react";

import "./Terms.css";


const Terms = () => {
  return (
    <div className="legal-page">
      <h1>Terms and Conditions</h1>
      <p>
        Welcome to Kasi360. By using our platform, you agree to comply with these Terms and Conditions.
      </p>

      <h2>Use of the Platform</h2>
      <p>
        Users must use the platform responsibly and not engage in any illegal or harmful activities.
      </p>

      <h2>Account Responsibility</h2>
      <p>
        You are responsible for maintaining the confidentiality of your account and password.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        Kasi360 is not liable for any damages resulting from the use of the platform.
      </p>

      <h2>Changes to Terms</h2>
      <p>
        We reserve the right to update these terms at any time. Users will be notified of major changes.
      </p>

      <h2>Contact</h2>
      <p>For any questions about these terms, please <a href="/contact">contact us</a>.</p>
    </div>
  );
};

export default Terms;

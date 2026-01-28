import React from "react";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./Solutions.css";

const solutionsData = [
  {
    title: "KasiMarketing",
    description: "Hyperlocal marketing tools designed to help township businesses reach and retain local customers.",
    features: ["Hyperlocal SEO", "WhatsApp Marketing", "Community Engagement", "Low-budget Ads"],
    color: "#00C853",
    link: "/ecosystem"
  },
  {
    title: "KasiPay Fintech",
    description: "Secure and affordable digital payment solutions tailored for township businesses.",
    features: ["Mobile Payments", "Invoicing", "Expense Tracking", "Safety Protocols"],
    color: "#0D47A1",
    link: "/ecosystem"
  },
  {
    title: "Safety Solutions",
    description: "Integrated digital and physical safety solutions for peace of mind in business operations.",
    features: ["Transaction Security", "Cash Handling", "Emergency Systems", "Community Watch"],
    color: "#FF6D00",
    link: "/ecosystem"
  },
  {
    title: "Training & Growth",
    description: "Digital literacy and business growth programs to unlock sustainable success.",
    features: ["Skills Training", "Business Coaching", "Mentorship", "Networking"],
    color: "#9C27B0",
    link: "/ecosystem"
  }
];

function Solutions() {
  const navigate = useNavigate();

  const handleNavigate = (link) => {
    navigate(link);
  };

  return (
    <section className="solutions-section">
      <div className="solutions-header">
        <h2>Our Solutions</h2>
        <p>Empowering township businesses with the tools they need to grow and thrive.</p>
      </div>

      <div className="solutions-grid">
        {solutionsData.map((solution, index) => (
          <div key={index} className="solution-card">
            <h3 style={{ color: solution.color }}>{solution.title}</h3>
            <p>{solution.description}</p>

            <ul className="solution-features">
              {solution.features.map((feat, i) => (
                <li key={i}>
                  <FiCheckCircle style={{ color: solution.color }} /> {feat}
                </li>
              ))}
            </ul>

            <button
              className="solution-btn"
              style={{ borderColor: solution.color, color: solution.color }}
              onClick={() => handleNavigate(solution.link)}
            >
              Explore Service <FiArrowRight />
            </button>
          </div>
        ))}
      </div>

      <div className="demo-cta">
        <h3>Want a personal walkthrough?</h3>
        <button
          className="demo-btn"
          onClick={() => handleNavigate("/demo")}
        >
          Book a Demo
        </button>
      </div>
    </section>
  );
}

export default Solutions;

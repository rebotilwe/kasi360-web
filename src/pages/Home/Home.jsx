// Home.jsx - Complete with all sections
import { useRef, useEffect } from "react";
import HeroSliderKasi from "../../components/HeroSlider/HeroSliderKasi";
import StatsSection from "../../components/StatsSection/StatsSection";
import EcosystemServices from "../../components/EcosystemServices/EcosystemServices";
import CompetitiveAdvantage from "../../components/CompetitiveAdvantage/CompetitiveAdvantage";
import FinancialProjections from "../../components/FinancialProjections/FinancialProjections";
// import Kasi360 from "../../components/Kasi360/WhyKasi360";
import ContactCTA from "../../components/ContactCTA/ContactCTA";
import Kasi360 from "../../components/WhyKasi/Kasi360";

import "./Home.css";

function Home() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const sections = sectionsRef.current.filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page">
      {/* Floating Background Elements */}
      <div className="floating-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <HeroSliderKasi />
      </section>

      {/* Stats Section */}
      <section
        className="section-wrapper stats-section-wrapper"
        ref={(el) => (sectionsRef.current[0] = el)}
      >
        <div className="section-header">
          <span className="section-badge">The Challenge</span>
          <h2 className="section-title">South Africa's SME Landscape</h2>
          <p className="section-subtitle">
            Understanding the digital divide in township businesses
          </p>
        </div>
        <StatsSection />
      </section>

      {/* Ecosystem Services */}
      <section
        className="section-wrapper services-section-wrapper"
        ref={(el) => (sectionsRef.current[1] = el)}
      >
        <div className="section-header">
          <span className="section-badge">Our Solution</span>
          <h2 className="section-title">The Kasi360 Ecosystem</h2>
          <p className="section-subtitle">
            Comprehensive digital tools designed specifically for township businesses
          </p>
        </div>
        <EcosystemServices />
      </section>

      {/* Competitive Advantage */}
      <section
        className="section-wrapper advantage-section-wrapper"
        ref={(el) => (sectionsRef.current[2] = el)}
      >
        <div className="section-header">
          <span className="section-badge">Why Choose Us</span>
          <h2 className="section-title">Competitive Advantage</h2>
          <p className="section-subtitle">
            What sets Kasi360 apart in the digital solutions space
          </p>
        </div>
        <CompetitiveAdvantage />
      </section>

      {/* Financial Projections */}
      <section
        className="section-wrapper financial-section-wrapper"
        ref={(el) => (sectionsRef.current[3] = el)}
      >
        <div className="section-header">
          <span className="section-badge">Sustainable Growth</span>
          <h2 className="section-title">Financial Projections</h2>
          <p className="section-subtitle">
            Our path to profitability and sustainable impact
          </p>
        </div>
        <FinancialProjections />
      </section>

      {/* Why Kasi360 */}
      <section
        className="section-wrapper why-section-wrapper"
        ref={(el) => (sectionsRef.current[4] = el)}
      >
        <div className="section-header">
          <span className="section-badge">The Big Picture</span>
          <h2 className="section-title">Why Kasi360?</h2>
          <p className="section-subtitle">
            Creating lasting impact in South Africa's township economy
          </p>
        </div>
        <Kasi360 />
      </section>

      {/* Contact CTA */}
      <section
        className="section-wrapper contact-section-wrapper"
        ref={(el) => (sectionsRef.current[5] = el)}
      >
        <ContactCTA />
      </section>

      {/* Background Gradients */}
      <div className="background-gradients">
        <div className="gradient gradient-1" />
        <div className="gradient gradient-2" />
      </div>
    </div>
  );
}

export default Home;
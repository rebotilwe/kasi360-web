// pages/Demo/Demo.jsx
import React, { useState } from "react";
import { 
  FiCalendar, 
  FiClock, 
  FiUser, 
  FiCheck, 
  FiMail, 
  FiPhone, 
  FiMapPin,
  FiChevronRight,
  FiArrowRight,
  FiGlobe,
  FiBriefcase,
  FiTrendingUp,
  FiShield,
  FiStar
} from "react-icons/fi";
import "./Demo.css";
import { Link } from "react-router-dom";

function Demo() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    businessName: "",
    businessType: "",
    employees: "",
    location: "",
    goals: "",
    source: ""
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const timeSlots = [
    { time: "09:00 AM", slots: 2 },
    { time: "10:00 AM", slots: 1 },
    { time: "11:00 AM", slots: 3 },
    { time: "02:00 PM", slots: 0 },
    { time: "03:00 PM", slots: 4 },
    { time: "04:00 PM", slots: 2 },
  ];

  const businessTypes = [
    "General Dealer/Spaza Shop",
    "Hair Salon/Barber",
    "Tuck Shop",
    "Clothing Store",
    "Restaurant/Takeaway",
    "Cellphone Repair",
    "Transport Services",
    "Other"
  ];

  const employeeRanges = [
    "1 (Sole Proprietor)",
    "2-5",
    "6-10",
    "11-20",
    "21+"
  ];

  const demoBenefits = [
    {
      icon: <FiGlobe />,
      title: "Platform Walkthrough",
      description: "See Kasi360 in action with a live demo"
    },
    {
      icon: <FiTrendingUp />,
      title: "Growth Strategy",
      description: "Personalized recommendations for your business"
    },
    {
      icon: <FiShield />,
      title: "Security Demo",
      description: "See our safety features in action"
    },
    {
      icon: <FiBriefcase />,
      title: "Cost Analysis",
      description: "Understand pricing and ROI potential"
    }
  ];

  const testimonials = [
    {
      name: "Thabo M.",
      business: "Mama's Spaza Shop, Soweto",
      quote: "The demo showed me how to double my daily sales. Life-changing!",
      rating: 5
    },
    {
      name: "Nomsa K.",
      business: "Nomsa's Salon, Alexandra",
      quote: "Finally a solution built for township businesses. The demo was eye-opening.",
      rating: 5
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, connect to your backend here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        date: "",
        time: "",
        name: "",
        email: "",
        phone: "",
        businessName: "",
        businessType: "",
        employees: "",
        location: "",
        goals: "",
        source: ""
      });
      setCurrentStep(1);
    }, 5000);
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const isStepComplete = (step) => {
    switch(step) {
      case 1:
        return formData.date && formData.time;
      case 2:
        return formData.name && formData.email && formData.phone;
      case 3:
        return formData.businessName && formData.businessType && formData.employees;
      default:
        return false;
    }
  };

  const renderStepIndicator = () => {
    return (
      <div className="step-indicator">
        {[1, 2, 3].map((step) => (
          <div key={step} className={`step ${currentStep === step ? 'active' : ''} ${isStepComplete(step) ? 'complete' : ''}`}>
            <div className="step-number">{step}</div>
            <div className="step-label">
              {step === 1 && "Date & Time"}
              {step === 2 && "Your Details"}
              {step === 3 && "Business Info"}
            </div>
            {step < 3 && <div className="step-connector"></div>}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="demo-page">
      {/* Hero Section */}
      <section className="demo-hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Book a <span className="gradient-text">Free Demo</span> & Transform Your Business</h1>
            <p className="hero-subtitle">
              Experience firsthand how Kasi360 empowers <span className="highlight">70% of township businesses</span> 
              that currently lack digital tools. Join 2,000+ entrepreneurs who've accelerated their growth.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">30-min</div>
                <div className="stat-label">Personalized Session</div>
              </div>
              <div className="stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">Free Consultation</div>
              </div>
              <div className="stat">
                <div className="stat-number">R2,000</div>
                <div className="stat-label">Onboarding Credit*</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="demo-content">
        <div className="demo-container">
          {/* Progress Bar */}
          {renderStepIndicator()}

          {isSubmitted ? (
            <div className="success-message">
              <div className="success-icon">
                <FiCheck />
              </div>
              <h2>Demo Booked Successfully!</h2>
              <p>Thank you, {formData.name}. We've scheduled your demo for <strong>{formData.date} at {formData.time}</strong>.</p>
              <div className="confirmation-details">
                <p><FiMail /> Confirmation sent to: {formData.email}</p>
                <p><FiPhone /> We'll call you at: {formData.phone}</p>
                <p><FiCalendar /> Calendar invitation will follow shortly</p>
              </div>
              <div className="next-steps">
                <h4>What's Next?</h4>
                <ul>
                  <li>Check your email for confirmation</li>
                  <li>Prepare any questions you have</li>
                  <li>Have your business details ready</li>
                  <li>Test your internet connection</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="booking-wrapper">
              {/* Booking Form */}
              <div className="booking-form-container">
                <div className="booking-header">
                  <h2>Schedule Your Demo</h2>
                  <p className="form-subtitle">3 simple steps to secure your spot</p>
                </div>

                <form onSubmit={handleSubmit} className="demo-form">
                  {/* Step 1: Date & Time */}
                  {currentStep === 1 && (
                    <div className="form-step">
                      <div className="step-header">
                        <div className="step-number-badge">1</div>
                        <h3>Select Date & Time</h3>
                      </div>
                      
                      {/* Date Picker */}
                      <div className="form-group">
                        <label htmlFor="date">
                          <FiCalendar /> Select Date
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="date-input"
                        />
                        <p className="input-hint">Available dates in the next 14 days</p>
                      </div>

                      {/* Time Slots */}
                      <div className="form-group">
                        <label htmlFor="time">
                          <FiClock /> Select Time Slot
                        </label>
                        <div className="time-slots">
                          {timeSlots.map((slot, index) => (
                            <button
                              key={index}
                              type="button"
                              className={`time-slot ${formData.time === slot.time ? 'selected' : ''} ${slot.slots === 0 ? 'unavailable' : ''}`}
                              onClick={() => setFormData({...formData, time: slot.time})}
                              disabled={slot.slots === 0}
                            >
                              <span className="time">{slot.time}</span>
                              <span className={`slot-availability ${slot.slots > 2 ? 'high' : slot.slots > 0 ? 'low' : 'none'}`}>
                                {slot.slots === 0 ? 'Full' : `${slot.slots} slots left`}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="step-actions">
                        <button type="button" onClick={nextStep} disabled={!isStepComplete(1)} className="next-btn">
                          Next: Your Details <FiChevronRight />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Personal Details */}
                  {currentStep === 2 && (
                    <div className="form-step">
                      <div className="step-header">
                        <div className="step-number-badge">2</div>
                        <h3>Your Contact Information</h3>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="name">
                            <FiUser /> Full Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your full name"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="email">
                            <FiMail /> Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="you@example.com"
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="phone">
                            <FiPhone /> Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="+27 11 123 4567"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="location">
                            <FiMapPin /> Township/Location
                          </label>
                          <input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                            placeholder="e.g., Soweto, Alexandra"
                          />
                        </div>
                      </div>

                      <div className="step-actions">
                        <button type="button" onClick={prevStep} className="back-btn">
                          ← Back
                        </button>
                        <button type="button" onClick={nextStep} disabled={!isStepComplete(2)} className="next-btn">
                          Next: Business Info <FiChevronRight />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Business Details */}
                  {currentStep === 3 && (
                    <div className="form-step">
                      <div className="step-header">
                        <div className="step-number-badge">3</div>
                        <h3>Your Business Information</h3>
                      </div>

                      <div className="form-group">
                        <label htmlFor="businessName">
                          <FiBriefcase /> Business Name
                        </label>
                        <input
                          type="text"
                          id="businessName"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleChange}
                          required
                          placeholder="e.g., Mama's Spaza Shop"
                        />
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="businessType">Business Type</label>
                          <select
                            id="businessType"
                            name="businessType"
                            value={formData.businessType}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select type</option>
                            {businessTypes.map((type, index) => (
                              <option key={index} value={type}>{type}</option>
                            ))}
                          </select>
                        </div>

                        <div className="form-group">
                          <label htmlFor="employees">Number of Employees</label>
                          <select
                            id="employees"
                            name="employees"
                            value={formData.employees}
                            onChange={handleChange}
                            required
                          >
                            <option value="">Select range</option>
                            {employeeRanges.map((range, index) => (
                              <option key={index} value={range}>{range}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="goals">What are your main business goals?</label>
                        <textarea
                          id="goals"
                          name="goals"
                          value={formData.goals}
                          onChange={handleChange}
                          placeholder="e.g., Increase sales, reach more customers, streamline payments..."
                          rows="3"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="source">How did you hear about us?</label>
                        <select
                          id="source"
                          name="source"
                          value={formData.source}
                          onChange={handleChange}
                        >
                          <option value="">Select one</option>
                          <option value="word-of-mouth">Word of Mouth</option>
                          <option value="social-media">Social Media</option>
                          <option value="local-event">Local Event</option>
                          <option value="partner">Business Partner</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="step-actions">
                        <button type="button" onClick={prevStep} className="back-btn">
                          ← Back
                        </button>
<Link to="/contact" className="cta-link">
  <button type="button" className="cta-button">
    Book Your Demo Now <FiArrowRight />
  </button>
</Link>


                      </div>

                      <p className="form-note">
                        *R2,000 onboarding credit applies to new customers who book a demo and sign up within 7 days.
                      </p>
                    </div>
                  )}
                </form>
              </div>

              {/* Benefits Sidebar */}
              <div className="benefits-sidebar">
                <div className="benefits-card">
                  <h3><FiCheck /> What to Expect</h3>
                  <div className="benefits-list">
                    {demoBenefits.map((benefit, index) => (
                      <div key={index} className="benefit-item">
                        <div className="benefit-icon">{benefit.icon}</div>
                        <div className="benefit-content">
                          <h4>{benefit.title}</h4>
                          <p>{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="sidebar-highlight">
                    <div className="highlight-icon">
                      <FiStar />
                    </div>
                    <div className="highlight-content">
                      <h4>Special Offer</h4>
                      <p>Attend the demo and get <strong>R2,000 credit</strong> towards your Kasi360 subscription.</p>
                    </div>
                  </div>
                </div>

                {/* Testimonials */}
                <div className="testimonials-card">
                  <h3>What Others Say</h3>
                  <div className="testimonials-list">
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="testimonial">
                        <div className="testimonial-rating">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="star">★</span>
                          ))}
                        </div>
                        <p className="testimonial-quote">"{testimonial.quote}"</p>
                        <div className="testimonial-author">
                          <strong>{testimonial.name}</strong>
                          <span>{testimonial.business}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQ */}
                <div className="faq-card">
                  <h3>Common Questions</h3>
                  <div className="faq-list">
                    <details>
                      <summary>How long is the demo?</summary>
                      <p>30 minutes, including Q&A session.</p>
                    </details>
                    <details>
                      <summary>What do I need to prepare?</summary>
                      <p>Just your business questions and a stable internet connection.</p>
                    </details>
                    <details>
                      <summary>Is it really free?</summary>
                      <p>Yes, completely free with no obligation to purchase.</p>
                    </details>
                    <details>
                      <summary>Can I reschedule?</summary>
                      <p>Yes, you can reschedule up to 24 hours before your session.</p>
                    </details>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="demo-cta">
        <div className="cta-container">
          <h2>Ready to Digitize Your Business?</h2>
          <p>Join thousands of township businesses growing with Kasi360</p>
          <div className="cta-stats">
            <div className="cta-stat">
              <div className="cta-stat-number">18-24</div>
              <div className="cta-stat-label">Months to break-even</div>
            </div>
            <div className="cta-stat">
              <div className="cta-stat-number">70%</div>
              <div className="cta-stat-label">More efficiency</div>
            </div>
            <div className="cta-stat">
              <div className="cta-stat-number">98%</div>
              <div className="cta-stat-label">Satisfaction rate</div>
            </div>
          </div>
       <Link to="/contact" className="cta-link">
  <button type="button" className="cta-button">
    Book Your Demo Now <FiArrowRight />
  </button>
</Link>

        </div>
      </section>
    </div>
  );
}

export default Demo;
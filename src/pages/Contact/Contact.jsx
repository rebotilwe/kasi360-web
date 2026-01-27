// pages/Contact/Contact.jsx
import React, { useState } from "react";
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiMessageSquare,
  FiSend,
  FiCheckCircle,
  FiClock,
  FiUser
} from "react-icons/fi";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FiPhone />,
      title: "Call Us",
      detail: "+27 11 123 4567",
      subtitle: "Mon-Fri, 8AM-6PM",
      color: "#00C853"
    },
    {
      icon: <FiMail />,
      title: "Email Us",
      detail: "info@kasi360.co.za",
      subtitle: "Response within 24 hours",
      color: "#0D47A1"
    },
    {
      icon: <FiMapPin />,
      title: "Visit Us",
      detail: "Johannesburg, South Africa",
      subtitle: "By appointment only",
      color: "#FF6D00"
    }
  ];

  const faqs = [
    {
      question: "What types of businesses do you work with?",
      answer: "We work with all types of township businesses - from spaza shops and salons to service providers and creatives."
    },
    {
      question: "How quickly can I get started?",
      answer: "You can start using our platform within 24 hours of signing up. We offer immediate access to all digital tools."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! We offer a 14-day free trial for all our services with no credit card required."
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="hero-subtitle">
            Ready to transform your township business? We're here to help with 
            partnerships, support, or any questions you might have.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="contact-grid-section">
        <div className="section-container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="form-header">
                <FiMessageSquare className="form-icon" />
                <h2>Send us a Message</h2>
                <p>Fill out the form below and we'll get back to you promptly.</p>
              </div>
              
              {isSubmitted ? (
                <div className="success-message">
                  <FiCheckCircle className="success-icon" />
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+27 XXX XXX XXXX"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a topic</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="demo">Book a Demo</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us how we can help..."
                      rows="6"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="submit-btn">
                    <FiSend /> Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <div className="info-header">
                <h2>Contact Information</h2>
                <p>Reach out to us through any of these channels</p>
              </div>
              
              <div className="info-cards">
                {contactInfo.map((info, index) => (
                  <div key={index} className="info-card">
                    <div className="info-icon" style={{ color: info.color }}>
                      {info.icon}
                    </div>
                    <div className="info-content">
                      <h3>{info.title}</h3>
                      <p className="info-detail">{info.detail}</p>
                      <p className="info-subtitle">{info.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="business-hours">
                <h3><FiClock /> Business Hours</h3>
                <div className="hours-list">
                  <div className="hour-item">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="hour-item">
                    <span>Saturday</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="hour-item">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
              
              <div className="emergency-contact">
                <p>For urgent technical support outside business hours:</p>
                <a href="tel:+27111234567" className="emergency-link">
                  <FiPhone /> +27 11 123 4567 (Emergency)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="section-container">
          <div className="section-header center">
            <h2>Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Quick answers to common questions about Kasi360
            </p>
          </div>
          
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-card">
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="faq-cta">
            <p>Still have questions? Check our full <a href="/faq">FAQ page</a> or contact us directly.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta">
        <div className="cta-container">
          <h2>Ready to Start Your Digital Journey?</h2>
          <p>
            Join thousands of township businesses already thriving with Kasi360.
            Let's build your digital future together.
          </p>
          <div className="cta-buttons">
            <a href="/demo" className="primary-btn">
              Book a Free Demo
            </a>
            <a href="/ecosystem" className="secondary-btn">
              Explore Our Ecosystem
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Make sure this default export exists
export default Contact;
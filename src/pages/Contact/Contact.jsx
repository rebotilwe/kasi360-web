import React, { useState } from "react";
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiMessageSquare,
  FiSend,
  FiCheckCircle,
  FiClock,
  FiUser,
  FiSmartphone,
  FiUsers,
  FiTarget,
  FiDollarSign,
  FiArrowRight,
  FiCalendar,
  FiShield,
  FiBookOpen,
  FiLoader,
  FiAlertCircle
} from "react-icons/fi";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    township: "",
    subject: "",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    errorMessage: ""
  });
  
  const [selectedTownship, setSelectedTownship] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
    if (e.target.name === "township") {
      setSelectedTownship(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      isError: false,
      errorMessage: ""
    });

    try {
      const response = await fetch("https://formspree.io/f/mjknolla", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Contact from Kasi360: ${formData.subject || formData.businessType}`,
          _replyto: formData.email || formData.phone,
          _format: "plain",
          _cc: formData.email,
          // Additional metadata for Formspree
          _source: "kasi360-website",
          _timestamp: new Date().toISOString(),
          // Formatted message for better readability
          formattedMessage: `
Name: ${formData.name}
Phone/WhatsApp: ${formData.phone}
Email: ${formData.email}
Business Type: ${formData.businessType}
Township: ${formData.township}
Subject: ${formData.subject || 'Not specified'}

Message:
${formData.message}

--- Township Support Info ---
Selected Township: ${selectedTownship}
Priority: ${selectedTownship ? 'Township Business - High Priority' : 'Standard'}
          `
        }),
      });

      if (response.ok) {
        setFormStatus({
          isSubmitting: false,
          isSubmitted: true,
          isError: false,
          errorMessage: ""
        });
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            businessType: "",
            township: "",
            subject: "",
            message: ""
          });
          setSelectedTownship("");
        }, 3000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        errorMessage: "There was an error sending your message. Please try again or use WhatsApp directly."
      });
    }
  };

  const contactChannels = [
    {
      icon: <FiSmartphone />,
      title: "WhatsApp Business",
      detail: "+27 11 234 5678",
      subtitle: "Fastest response for township businesses",
      color: "#25D366",
      isPrimary: true,
      note: "Preferred by 85% of our township clients",
      whatsappLink: "https://wa.me/27112345678?text=Hi%20Kasi360%2C%20I'm%20interested%20in%20your%20services%20for%20my%20township%20business"
    },
    {
      icon: <FiPhone />,
      title: "Phone Support",
      detail: "+27 11 123 4567",
      subtitle: "Mon-Fri, 8AM-6PM | Sat 9AM-1PM",
      color: "#00C853",
      telLink: "tel:+27111234567"
    },
    {
      icon: <FiMail />,
      title: "Email",
      detail: "support@kasi360.co.za",
      subtitle: "Response within 24 hours",
      color: "#0D47A1",
      mailLink: "mailto:support@kasi360.co.za?subject=Kasi360%20Inquiry&body=Hi%20Kasi360%20Team%2C%0A%0AI'm%20interested%20in%20your%20services..."
    },
    {
      icon: <FiUsers />,
      title: "Community Forums",
      detail: "Join township business groups",
      subtitle: "Weekly meetings & peer support",
      color: "#9C27B0",
      link: "/community"
    }
  ];

  const townshipOptions = [
    "Soweto", "Alexandra", "Khayelitsha", "Gugulethu", 
    "Mamelodi", "Daveyton", "Umlazi", "Mdantsane",
    "Other Township"
  ];

  const businessTypes = [
    "Spaza Shop", "Hair Salon", "Restaurant/Cafe", "Clothing Store",
    "Auto Repair", "Street Vendor", "Service Business", "Creative/Artisan",
    "Other"
  ];

  const contactReasons = [
    { value: "demo", label: "Book Free Township Demo", icon: <FiTarget /> },
    { value: "digital-setup", label: "Digital Setup Help", icon: <FiSmartphone /> },
    { value: "payments", label: "Fintech & Payment Questions", icon: <FiDollarSign /> },
    { value: "safety", label: "Safety Features Inquiry", icon: <FiShield /> },
    { value: "training", label: "Digital Skills Training", icon: <FiBookOpen /> },
    { value: "partnership", label: "Partnership Opportunity", icon: <FiUsers /> }
  ];

  const townshipHubs = [
    {
      name: "Soweto Digital Hub",
      address: "123 Vilakazi Street, Orlando West, Soweto",
      hours: "Mon-Fri: 9AM-5PM | Sat: 9AM-1PM",
      services: ["Digital Training", "Device Setup", "Support Sessions"],
      contact: "soweto@kasi360.co.za"
    },
    {
      name: "Khayelitsha Support Center",
      address: "45 Ntlazane Road, Khayelitsha, Cape Town",
      hours: "Tue-Thu: 10AM-4PM | By Appointment",
      services: ["Mobile Setup", "Payment Assistance", "Safety Workshops"],
      contact: "khayelitsha@kasi360.co.za"
    }
  ];

  const townshipFAQs = [
    {
      question: "Do you offer in-person support in townships?",
      answer: "Yes! We have township hubs in Soweto and Khayelitsha, and monthly mobile support sessions in other townships. Check our Township Support schedule."
    },
    {
      question: "What if I don't have reliable internet?",
      answer: "Our tools work with minimal data. We also offer WhatsApp-based solutions and in-person training for businesses with limited connectivity."
    },
    {
      question: "Is support available in local languages?",
      answer: "Yes! Our support team speaks Zulu, Xhosa, Sotho, and English. We provide training materials in multiple languages."
    },
    {
      question: "How quickly can you set up my business digitally?",
      answer: "Most township businesses are fully set up within 24-48 hours. We prioritize simple, mobile-first solutions that work immediately."
    }
  ];

  const getTownshipSupportInfo = () => {
    if (!selectedTownship) return null;
    
    const supportInfo = {
      "Soweto": {
        contactPerson: "Thabo Mokoena",
        phone: "+27 11 234 5679",
        nextSession: "Every Wednesday, 2PM at Soweto Hub"
      },
      "Khayelitsha": {
        contactPerson: "Nomsa Dlamini",
        phone: "+27 21 345 6789",
        nextSession: "Every Thursday, 10AM at Khayelitsha Center"
      },
      "Alexandra": {
        contactPerson: "Sipho Vilakazi",
        phone: "+27 11 456 7890",
        nextSession: "Monthly mobile support - check schedule"
      }
    };
    
    return supportInfo[selectedTownship] || {
      contactPerson: "Regional Support",
      phone: "+27 11 123 4567",
      nextSession: "Monthly mobile support visits"
    };
  };

  const renderFormState = () => {
    if (formStatus.isSubmitting) {
      return (
        <div className="submitting-message">
          <FiLoader className="loading-icon" />
          <h3>Sending your message...</h3>
          <p>Please wait while we submit your inquiry to our township support team.</p>
        </div>
      );
    }

    if (formStatus.isSubmitted) {
      return (
        <div className="success-message">
          <FiCheckCircle className="success-icon" />
          <h3>Message Received!</h3>
          <p>
            Thank you for contacting Kasi360. Our township support team will 
            contact you within <strong>24 hours</strong>. For urgent matters, 
            WhatsApp us at <strong>+27 11 234 5678</strong>.
          </p>
          {selectedTownship && getTownshipSupportInfo() && (
            <div className="township-followup">
              <h4>📍 {selectedTownship} Support:</h4>
              <p><strong>Contact:</strong> {getTownshipSupportInfo().contactPerson}</p>
              <p><strong>Phone:</strong> {getTownshipSupportInfo().phone}</p>
              <p><strong>Next Support Session:</strong> {getTownshipSupportInfo().nextSession}</p>
            </div>
          )}
          <div className="whatsapp-fallback">
            <a 
              href="https://wa.me/27112345678" 
              className="whatsapp-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiSmartphone /> Message us on WhatsApp for immediate response
            </a>
          </div>
        </div>
      );
    }

    if (formStatus.isError) {
      return (
        <div className="error-message">
          <FiAlertCircle className="error-icon" />
          <h3>Message Failed to Send</h3>
          <p>{formStatus.errorMessage}</p>
          <div className="alternative-actions">
            <a 
              href="https://wa.me/27112345678" 
              className="whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiSmartphone /> Contact via WhatsApp Instead
            </a>
            <button 
              onClick={() => setFormStatus({...formStatus, isError: false})}
              className="retry-btn"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return (
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Your Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="e.g., Thabo Mokoena"
            disabled={formStatus.isSubmitting}
          />
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone/WhatsApp *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+27 XXX XXX XXXX"
              disabled={formStatus.isSubmitting}
            />
            <div className="input-note">We'll primarily contact you here</div>
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email (Optional)</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              disabled={formStatus.isSubmitting}
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="businessType">Business Type *</label>
            <select
              id="businessType"
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              required
              disabled={formStatus.isSubmitting}
            >
              <option value="">Select your business</option>
              {businessTypes.map((type, index) => (
                <option key={index} value={type.toLowerCase()}>{type}</option>
              ))}
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="township">Township/Location *</label>
            <select
              id="township"
              name="township"
              value={formData.township}
              onChange={handleChange}
              required
              disabled={formStatus.isSubmitting}
            >
              <option value="">Select your township</option>
              {townshipOptions.map((township, index) => (
                <option key={index} value={township}>{township}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="form-group">
          <label>How can we help? *</label>
          <div className="reason-grid">
            {contactReasons.map((reason, index) => (
              <div 
                key={index} 
                className={`reason-option ${formData.subject === reason.value ? 'selected' : ''}`}
                onClick={() => !formStatus.isSubmitting && setFormData({...formData, subject: reason.value})}
              >
                <div className="reason-icon">{reason.icon}</div>
                <div className="reason-label">{reason.label}</div>
              </div>
            ))}
          </div>
          <input
            type="hidden"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Tell us more *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="What specific help do you need? Do you currently use any digital tools? How many customers do you serve?"
            rows="6"
            disabled={formStatus.isSubmitting}
          ></textarea>
        </div>
        
        <div className="form-footer">
          <div className="form-disclaimer">
            <FiShield className="shield-icon" />
            <span>Your information is secure. We respect your privacy and won't share your details.</span>
          </div>
          
          <div className="priority-note">
            <FiClock /> <strong>Priority for township businesses:</strong> We respond within 24 hours
          </div>
          
          <button 
            type="submit" 
            className="submit-btn"
            disabled={formStatus.isSubmitting}
          >
            {formStatus.isSubmitting ? (
              <>
                <FiLoader className="spinner" /> Sending...
              </>
            ) : (
              <>
                <FiSend /> Send to Township Support Team
              </>
            )}
          </button>
        </div>
      </form>
    );
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <div className="hero-badge">
            <FiUsers /> Township Business Support
          </div>
          <h1 className="hero-title">
            Connect with <span className="gradient-text">Kasi360</span>
          </h1>
          <p className="hero-subtitle">
            We're here to help township businesses thrive digitally. Whether you need 
            technical support, training, or want to join our ecosystem, reach out to us.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">WhatsApp Support</div>
            </div>
            <div className="stat">
              <div className="stat-number">85%</div>
              <div className="stat-label">Township Response Rate</div>
            </div>
            <div className="stat">
              <div className="stat-number">R2,000</div>
              <div className="stat-label">Starting Investment</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="contact-grid-section">
        <div className="section-container">
          <div className="contact-grid">
            {/* Enhanced Contact Form */}
            <div className="contact-form-section">
              <div className="form-header">
                <FiMessageSquare className="form-icon" />
                <h2>Township Business Inquiry</h2>
                <p>Tell us about your business and how we can help you grow digitally</p>
              </div>
              
              {renderFormState()}
            </div>

            {/* Enhanced Contact Information */}
            <div className="contact-info-section">
              <div className="info-header">
                <h2>Multiple Ways to Connect</h2>
                <p>Choose the method that works best for your township business</p>
              </div>
              
              <div className="info-cards">
                {contactChannels.map((info, index) => (
                  <div key={index} className={`info-card ${info.isPrimary ? 'primary' : ''}`}>
                    <div className="info-icon" style={{ color: info.color }}>
                      {info.icon}
                    </div>
                    <div className="info-content">
                      <h3>{info.title}</h3>
                      <p className="info-detail">{info.detail}</p>
                      <p className="info-subtitle">{info.subtitle}</p>
                      {info.note && <p className="info-note">{info.note}</p>}
                      <div className="action-links">
                        {info.whatsappLink && (
                          <a 
                            href={info.whatsappLink} 
                            className="channel-link whatsapp"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FiSmartphone /> Message Now
                          </a>
                        )}
                        {info.telLink && (
                          <a 
                            href={info.telLink} 
                            className="channel-link phone"
                          >
                            <FiPhone /> Call Now
                          </a>
                        )}
                        {info.mailLink && (
                          <a 
                            href={info.mailLink} 
                            className="channel-link email"
                          >
                            <FiMail /> Email Now
                          </a>
                        )}
                        {info.link && (
                          <a 
                            href={info.link} 
                            className="channel-link"
                          >
                            Learn More →
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Township Hubs */}
              <div className="township-hubs">
                <h3><FiMapPin /> Township Support Hubs</h3>
                <div className="hubs-list">
                  {townshipHubs.map((hub, index) => (
                    <div key={index} className="hub-card">
                      <h4>{hub.name}</h4>
                      <p className="hub-address">{hub.address}</p>
                      <p className="hub-hours">{hub.hours}</p>
                      <div className="hub-services">
                        {hub.services.map((service, sIndex) => (
                          <span key={sIndex} className="service-tag">{service}</span>
                        ))}
                      </div>
                      <a 
                        href={`mailto:${hub.contact}`} 
                        className="hub-contact"
                      >
                        {hub.contact}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="quick-actions">
                <h3><FiClock /> Quick Actions</h3>
                <div className="action-buttons">
                  <a 
                    href="https://wa.me/27112345678" 
                    className="action-btn whatsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiSmartphone /> WhatsApp Now
                  </a>
                  <a href="/demo" className="action-btn demo">
                    <FiTarget /> Book Demo
                  </a>
                  <a href="/training" className="action-btn training">
                    <FiBookOpen /> View Training
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="faq-section">
        <div className="section-container">
          <div className="section-header center">
            <h2>Township Business FAQs</h2>
            <p className="section-subtitle">
              Common questions from township entrepreneurs about digital tools and support
            </p>
          </div>
          
          <div className="faq-grid">
            {townshipFAQs.map((faq, index) => (
              <div key={index} className="faq-card">
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
                {index === 0 && (
                  <a href="/support-schedule" className="faq-link">
                    View Support Schedule →
                  </a>
                )}
              </div>
            ))}
          </div>
          
          <div className="support-schedule">
            <div className="schedule-content">
              <div className="schedule-icon">
                <FiCalendar />
              </div>
              <div className="schedule-text">
                <h4>Monthly Township Support Sessions</h4>
                <p>
                  Join our mobile support team as we visit different townships each month. 
                  Get hands-on help with digital setup, payments, and safety features.
                </p>
                <a href="/support-schedule" className="schedule-link">
                  View Full Schedule & Locations →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="contact-cta">
        <div className="cta-container">
          <div className="cta-icon">
            <FiUsers />
          </div>
          <h2>Start Your Digital Transformation Today</h2>
          <p>
            Join thousands of township businesses already growing with Kasi360. 
            Get started from just <strong>R2,000</strong> with our complete digital ecosystem.
          </p>
          
          <div className="cta-stats">
            <div className="cta-stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">WhatsApp Support</div>
            </div>
            <div className="cta-stat">
              <div className="stat-number">R2,000</div>
              <div className="stat-label">Starting Cost</div>
            </div>
            <div className="cta-stat">
              <div className="stat-number">18-24</div>
              <div className="stat-label">Months to Break-even</div>
            </div>
          </div>
          
          <div className="cta-buttons">
            <a 
              href="https://wa.me/27112345678" 
              className="primary-btn whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiSmartphone /> Chat on WhatsApp
            </a>
            <a href="/demo" className="secondary-btn">
              <FiTarget /> Book Free Demo
            </a>
            <a href="/get-started" className="text-btn">
              Start from R2,000 <FiArrowRight />
            </a>
          </div>
          
          <div className="cta-note">
            <FiCheckCircle /> <strong>No technical skills needed</strong> - We train you step by step
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
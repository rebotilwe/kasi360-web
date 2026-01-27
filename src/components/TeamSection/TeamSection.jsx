// components/TeamSection/TeamSection.jsx
import React from "react";
import { 
  FiLinkedin, 
  FiTwitter,
  FiMail
} from "react-icons/fi";
import "./TeamSection.css";

function TeamSection() {
  const teamMembers = [
    {
      name: "Thabo Mokoena",
      role: "Founder & CEO",
      bio: "Former tech entrepreneur with 15+ years experience in digital transformation",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "thabo@kasi360.co.za"
      }
    },
    {
      name: "Nomsa Dlamini",
      role: "Head of Community",
      bio: "Community development specialist with deep roots in township economies",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&auto=format",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "nomsa@kasi360.co.za"
      }
    },
    {
      name: "David Chen",
      role: "CTO",
      bio: "Tech lead with expertise in building scalable fintech platforms",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&auto=format",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "david@kasi360.co.za"
      }
    },
    {
      name: "Zanele Nkosi",
      role: "Head of Partnerships",
      bio: "Former corporate executive with extensive government and corporate networks",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&auto=format",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "zanele@kasi360.co.za"
      }
    }
  ];

  return (
    <section className="team-section">
      <div className="section-container">
        <div className="section-header center">
          <span className="section-badge">Our Team</span>
          <h2 className="section-title">Meet the Visionaries</h2>
          <p className="section-subtitle">
            A diverse team united by a common mission to transform township economies
          </p>
        </div>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="member-image">
                <img src={member.image} alt={member.name} />
                <div className="image-overlay"></div>
              </div>
              
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-bio">{member.bio}</p>
                
                <div className="member-social">
                  <a href={member.social.linkedin} className="social-link">
                    <FiLinkedin />
                  </a>
                  <a href={member.social.twitter} className="social-link">
                    <FiTwitter />
                  </a>
                  <a href={`mailto:${member.social.email}`} className="social-link">
                    <FiMail />
                  </a>
                </div>
              </div>
              
              <div className="member-accent"></div>
            </div>
          ))}
        </div>
        
        <div className="team-cta">
          <p>Interested in joining our mission? We're always looking for passionate individuals.</p>
          <a href="/careers" className="cta-link">View Open Positions →</a>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
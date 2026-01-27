import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import "./Navbar.css";

function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "auto";
  }, [isMobileOpen]);

  const toggleMobile = () => {
    setIsMobileOpen(!isMobileOpen);
    if (!isMobileOpen) setActiveDropdown(null);
  };

  const closeMobile = () => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { 
      label: "Ecosystem", 
      dropdown: [
        { path: "/services", label: "Services" },
        { path: "/solutions", label: "Solutions" },
        { path: "/platform", label: "Platform" },
      ]
    },
    { path: "/impact", label: "Impact" },
    { 
      label: "Resources", 
      dropdown: [
        { path: "/blog", label: "Blog" },
        { path: "/guides", label: "Guides" },
        { path: "/success-stories", label: "Success Stories" },
      ]
    },
  ];

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <Link to="/" className="logo" onClick={closeMobile}>
          Kasi<span>360</span>
        </Link>

        <nav className={`nav-links ${isMobileOpen ? "open" : ""}`}>
          {navItems.map((item, index) => (
            item.path ? (
              <Link
                key={index}
                to={item.path}
                className={location.pathname === item.path ? "active" : ""}
                onClick={closeMobile}
              >
                {item.label}
              </Link>
            ) : (
              <div className="dropdown" key={index}>
                <button
                  className="dropdown-toggle"
                  onClick={() => toggleDropdown(item.label)}
                  aria-expanded={activeDropdown === item.label}
                >
                  {item.label} <span className="dropdown-arrow">▾</span>
                </button>

                <div className={`dropdown-menu ${activeDropdown === item.label ? "open" : ""}`}>
                  {item.dropdown?.map((dropdownItem, dIndex) => (
                    <Link
                      key={dIndex}
                      to={dropdownItem.path}
                      className="dropdown-item"
                      onClick={closeMobile}
                    >
                      {dropdownItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            )
          ))}

          {/* Mobile CTA */}
          {isMobileOpen && (
            <div className="mobile-cta">
              <Link to="/contact" className="partner-btn" onClick={closeMobile}>
                Partner With Us
              </Link>
            </div>
          )}
        </nav>

        <div className="cta-group">
          <Link to="/contact" className="partner-btn">Partner With Us</Link>
          <Link to="/demo" className="demo-btn">Get Demo</Link>
        </div>

        <button 
          className="mobile-toggle" 
          onClick={toggleMobile}
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
        >
          {isMobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
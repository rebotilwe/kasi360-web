// components/Preloader/Preloader.jsx
import { useEffect, useState } from "react";
import "./Preloader.css";

const Preloader = ({ loading }) => {
  const [percentage, setPercentage] = useState(0);
  const [loadingText, setLoadingText] = useState("Loading");

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setPercentage(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20); // Adjust speed here

    // Rotating loading text
    const textInterval = setInterval(() => {
      setLoadingText(prev => {
        if (prev === "Loading...") return "Loading";
        return prev + ".";
      });
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div className={`preloader-wrapper ${!loading ? 'fade-out' : ''}`}>
      <div className="preloader-container">
        <div className="kasi-logo">
          <span className="logo-kasi">KASI</span>
          <span className="logo-360">360</span>
          <div className="logo-dot"></div>
        </div>
        
        <div className="loading-text">{loadingText} {percentage}%</div>
        
        <div className="loading-bar">
          <div 
            className="loading-progress"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        
        <div className="loading-tagline">
          Empowering South Africa's Township SMEs
        </div>
        
        <div className="loading-stats">
          <div className="loading-stat">
            <div className="stat-number">70%</div>
            <div className="stat-label">Businesses lack digital tools</div>
          </div>
          <div className="loading-stat">
            <div className="stat-number">2,000+</div>
            <div className="stat-label">Businesses empowered</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
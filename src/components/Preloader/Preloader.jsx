// Preloader.jsx - SIMPLIFIED VERSION
import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="preloader-wrapper">
      <div className="preloader-container">
        <div className="kasi-logo">KASI360</div>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
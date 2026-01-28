import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FiArrowUp } from "react-icons/fi";
import "./ScrollToTop.css";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // Show button when user is not at top
      // or when near bottom (e.g., last 100px)
      if (scrollTop > 200 || scrollTop + windowHeight >= fullHeight - 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return createPortal(
    <button
      className="scroll-to-top"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <FiArrowUp size={28} />
    </button>,
    document.body
  );
}

export default ScrollToTop;

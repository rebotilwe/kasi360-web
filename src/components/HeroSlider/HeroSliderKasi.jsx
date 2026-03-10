import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "./HeroSliderKasi.css";

// UPDATED SLIDES WITH POWERPOINT CONTENT
// UPDATED SLIDES WITH BUTTON LINKS
const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&h=1080&fit=crop&auto=format",
    title: "Empowering South Africa's Township SMEs",
    subtitle: "Technology. Access. Growth.",
    description: "The Kasi360 Ecosystem provides the tools township businesses need to thrive in the digital economy.",
    buttonText: "Explore Ecosystem",
    buttonLink: "/ecosystem", // <-- navigate here
    accentColor: "#00C853"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop&auto=format",
    title: "Our Solution: The Kasi360 Ecosystem",
    subtitle: "Built for the Township Economy",
    description: "70% of businesses in South Africa lack digital tools. We're changing that with hyperlocal solutions.",
    buttonText: "See Features",
    buttonLink: "/features", // <-- navigate here
    accentColor: "#0D47A1"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&h=1080&fit=crop&auto=format",
    title: "Holistic Business Growth",
    subtitle: "Fintech, Safety & Training",
    description: "Combining essential services in one affordable ecosystem to unlock sustainable growth.",
    buttonText: "Join Today",
    buttonLink: "/contact", // <-- navigate here
    accentColor: "#FF6D00"
  },
];


function HeroSliderKasi() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <section className="hero-slider-kasi">
      {/* REMOVE DEBUG OVERLAY */}
      
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay, Pagination, EffectFade]}
        effect="fade"
        speed={1200}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next-kasi",
          prevEl: ".swiper-button-prev-kasi",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination-kasi",
          bulletClass: "kasi-bullet",
          bulletActiveClass: "kasi-bullet-active",
        }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        onSlideChange={handleSlideChange}
        className="hero-swiper-kasi"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-container-kasi">
              {/* Background Image */}
              <div className="image-background">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="slide-bg-kasi"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="gradient-overlay-kasi"></div>
              </div>

              {/* Content */}
              <div className="slide-content-kasi">
                <div className="content-wrapper-kasi">
                  {/* ADDED: Kasi360 with slogan */}
                  <div className="brand-header-kasi">
                    <span className="brand-name-kasi">Kasi360</span>
                    <span className="brand-slogan-kasi">BUILD. TRADE. THRIVE.</span>
                  </div>

                  <div className="slide-pre-title-kasi">
                    <span className="pre-title-line"></span>
                    <span className="pre-title-text">KASI DIGITAL CONNECT</span>
                  </div>

                  <h1 className="slide-title-kasi">{slide.title}</h1>
                  <h2 className="slide-subtitle-kasi" style={{ color: slide.accentColor }}>
                    {slide.subtitle}
                  </h2>

                  <p className="slide-description-kasi">
                    {slide.description}
                  </p>

                  {/* Buttons */}
                  <div className="button-group-kasi">
                    <Link
                      to="/ecosystem"
                      className="btn-primary-kasi"
                      style={{ backgroundColor: slide.accentColor }}
                    >
                      <span>{slide.buttonText}</span>
                      <svg className="btn-arrow-kasi" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </Link>

                    <Link
                      to="/contact"
                      className="btn-secondary-kasi"
                    >
                      <span>Partner With Us</span>
                      <div className="btn-line"></div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Slide Indicator */}
              <div className="slide-indicator-kasi">
                <span className="current-slide">0{activeIndex + 1}</span>
                <div className="indicator-line"></div>
                <span className="total-slides">0{slides.length}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
        <button className="swiper-button-prev-kasi" aria-label="Previous slide">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>

        <button className="swiper-button-next-kasi" aria-label="Next slide">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </Swiper>

      {/* Pagination Dots */}
      <div className="swiper-pagination-kasi"></div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator-kasi">
        <div className="scroll-line-kasi"></div>
        <span className="scroll-text-kasi">SCROLL</span>
      </div>
    </section>
  );
}

export default HeroSliderKasi;
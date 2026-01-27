// pages/Demo/Demo.jsx
import React, { useState } from "react";
import { FiCalendar, FiClock, FiUser, FiCheck } from "react-icons/fi";
import "./Demo.css";

function Demo() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", 
    "02:00 PM", "03:00 PM", "04:00 PM"
  ];

  return (
    <div className="demo-page">
      <section className="demo-hero">
        <h1>Book a <span className="gradient-text">Free Demo</span></h1>
        <p>See how Kasi360 can transform your business in a personalized 30-minute session.</p>
      </section>

      <section className="demo-booking">
        <div className="booking-form">
          <h2>Schedule Your Demo</h2>
          <form>
            {/* Date picker */}
            {/* Time slot selector */}
            {/* Contact info */}
            <button type="submit">
              <FiCalendar /> Book Demo
            </button>
          </form>
        </div>

        <div className="demo-benefits">
          <h3>What to Expect</h3>
          <div className="benefits-list">
            <div className="benefit">
              <FiCheck /> Live platform walkthrough
            </div>
            <div className="benefit">
              <FiCheck /> Personalized consultation
            </div>
            <div className="benefit">
              <FiCheck /> Q&A session
            </div>
            <div className="benefit">
              <FiCheck /> Special offer for attendees
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Demo;
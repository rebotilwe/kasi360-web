// pages/SuccessStories/SuccessStories.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./SuccessStories.css";

function SuccessStories() {
  const stories = [
    {
      title: "From Street Vendor to Online Entrepreneur",
      business: "Mama Zandi's Kitchen",
      location: "Soweto",
      growth: "200% revenue increase",
      story: "Detailed success story..."
    }
  ];

  return (
    <div className="success-stories-page">
      {/* Detailed success stories with videos/testimonials */}
    </div>
  );
}
export default SuccessStories;
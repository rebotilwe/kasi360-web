// pages/Guides/Guides.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FiDownload, FiBookOpen, FiCheckCircle } from "react-icons/fi";
import "./Guides.css";

function Guides() {
  const guides = [
    {
      title: "Digital Marketing Starter Guide",
      description: "Step-by-step guide to marketing your business online",
      pages: "25 pages",
      format: "PDF Download",
      level: "Beginner"
    },
    {
      title: "Financial Management for SMEs",
      description: "Essential financial skills for township business owners",
      pages: "40 pages",
      format: "Interactive PDF",
      level: "Intermediate"
    },
    {
      title: "E-commerce Setup Guide",
      description: "How to set up and run an online store",
      pages: "35 pages",
      format: "PDF + Video",
      level: "Beginner"
    }
  ];

  return (
    <div className="guides-page">
      {/* Similar structure to Blog */}
    </div>
  );
}
export default Guides;
// components/Layout/Layout.jsx
import React, { memo } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import ContactBar from "../ContactBar/ContactBar";
import Footer from "../Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import "./Layout.css";

// Use memo to prevent unnecessary re-renders
const Layout = memo(function Layout() {
  return (
    <div className="app-layout">
      {/* ContactBar will hide itself on mobile via CSS */}
      <ContactBar />
      <Navbar />
      
      <main className="main-content">
        <Outlet />
      </main>
      
      <Footer />
      <ScrollToTop />
      
      <div className="spacer"></div>
    </div>
  );
});

export default Layout;
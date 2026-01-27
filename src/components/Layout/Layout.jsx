import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import ContactBar from "../ContactBar/ContactBar";
import Footer from "../Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import "./Layout.css";

function Layout() {
  return (
    <div className="app-layout">
      {/* Contact Bar - Fixed at top */}
      <ContactBar />
      
      {/* Navbar - Positioned below contact bar */}
      <Navbar />
      
      {/* Main content starts after both fixed bars */}
      <main className="main-content">
        <Outlet />
      </main>
      
      <Footer />
      <ScrollToTop />
      
      {/* Add spacing for fixed elements */}
      <div className="spacer"></div>
    </div>
  );
}

export default Layout;
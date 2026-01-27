import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Ecosystem from "./pages/Ecosystem/Ecosystem";
import Impact from "./pages/Impact/Impact";

import Contact from "./pages/Contact/Contact"

// Ecosystem Sub-pages
import Marketing from "./pages/Services/Marketing";
import Storefront from "./pages/Services/Storefront";

import Training from "./pages/Services/Training";
import Solutions from "./pages/Solutions/Solutions";
import Platform from "./pages/Platform/Platform";

// Resources Sub-pages
import Blog from "./pages/Blog/Blog";
import Guides from "./pages/Guides/Guides";
import SuccessStories from "./pages/SuccessStories/SuccessStories";

// Other Pages
import Demo from "./pages/Demo/Demo";


// Legal Pages
// import Privacy from "./pages/Legal/Privacy";
// import Terms from "./pages/Legal/Terms";
// import Cookies from "./pages/Legal/Cookies";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Main Pages */}
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Ecosystem Sub-pages */}
          <Route path="/services/marketing" element={<Marketing />} />
          <Route path="/services/storefront" element={<Storefront />} />
          {/* <Route path="/services/payments" element={<Payments />} />
          <Route path="/services/training" element={<Training />} /> */}
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/platform" element={<Platform />} />
          
          {/* Resources Pages */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          
          {/* Other Pages */}
          <Route path="/demo" element={<Demo />} />
          {/* <Route path="/pricing" element={<Pricing />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/careers" element={<Careers />} /> */}
          
          {/* Legal Pages */}
          {/* <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} /> */}
          
          {/* 404 Page */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// Simple 404 component
function NotFound() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '40px',
      background: '#050505',
      color: 'white'
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '20px', color: '#00C853' }}>404</h1>
      <h2 style={{ marginBottom: '20px' }}>Page Not Found</h2>
      <p style={{ marginBottom: '30px', color: 'rgba(255,255,255,0.7)' }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a 
        href="/" 
        style={{
          background: 'linear-gradient(135deg, #00C853, #0D47A1)',
          color: 'white',
          padding: '12px 30px',
          borderRadius: '30px',
          textDecoration: 'none',
          fontWeight: '600',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={e => e.target.style.transform = 'translateY(-3px)'}
        onMouseOut={e => e.target.style.transform = 'translateY(0)'}
      >
        Go Back Home
      </a>
    </div>
  );
}

export default App;
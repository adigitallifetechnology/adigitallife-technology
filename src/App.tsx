import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import WebDevelopment from './pages/services/WebDevelopment';
import SEOService from './pages/services/SEO';
import AppDevelopment from './pages/services/AppDevelopment';
import CyberSecurity from './pages/services/CyberSecurity';
import ITConsulting from './pages/services/ITConsulting';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/seo" element={<SEOService />} />
            <Route path="/services/app-development" element={<AppDevelopment />} />
            <Route path="/services/cyber-security" element={<CyberSecurity />} />
            <Route path="/services/it-consulting" element={<ITConsulting />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
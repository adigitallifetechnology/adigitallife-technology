import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-brand-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo (6).png" 
                alt="ADigitallife Technology" 
                className="h-10 w-auto filter drop-shadow-sm"
              />
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-white">ADigitallife</span>
                <span className="block text-xs text-brand-orange font-medium tracking-wide">TECHNOLOGY</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                item.name !== 'Services' ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-gray-300 hover:text-brand-orange px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      location.pathname === item.href ? 'text-brand-orange border-b-2 border-brand-orange' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                <div key="services" className="relative group">
                  <Link to="/services" className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${location.pathname.startsWith('/services') ? 'text-brand-orange border-b-2 border-brand-orange' : 'text-gray-300 hover:text-brand-orange'}`}>
                    Services
                  </Link>
                    <div className="absolute right-0 mt-2 w-56 bg-brand-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transform translate-y-1 group-hover:translate-y-0 transition-all">
                      <div className="py-2">
                        <Link to="/services/web-development" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-800">Web Development</Link>
                        <Link to="/services/seo" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-800">SEO & Digital Marketing</Link>
                        <Link to="/services/app-development" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-800">App Development</Link>
                        <Link to="/services/cyber-security" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-800">Cyber Security Audits</Link>
                        <Link to="/services/it-consulting" className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-800">IT Consulting</Link>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-brand-orange focus:outline-none focus:text-brand-orange"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                        location.pathname === item.href
                          ? 'text-brand-orange bg-brand-orange/10'
                          : 'text-gray-700 hover:text-brand-orange hover:bg-gray-50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.name === 'Services' && (
                      <div className="pl-4">
                        <Link to="/services/web-development" className="block px-3 py-2 text-sm text-gray-700 hover:text-brand-orange" onClick={() => setIsMenuOpen(false)}>Web Development</Link>
                        <Link to="/services/seo" className="block px-3 py-2 text-sm text-gray-700 hover:text-brand-orange" onClick={() => setIsMenuOpen(false)}>SEO & Digital Marketing</Link>
                        <Link to="/services/app-development" className="block px-3 py-2 text-sm text-gray-700 hover:text-brand-orange" onClick={() => setIsMenuOpen(false)}>App Development</Link>
                        <Link to="/services/cyber-security" className="block px-3 py-2 text-sm text-gray-700 hover:text-brand-orange" onClick={() => setIsMenuOpen(false)}>Cyber Security Audits</Link>
                        <Link to="/services/it-consulting" className="block px-3 py-2 text-sm text-gray-700 hover:text-brand-orange" onClick={() => setIsMenuOpen(false)}>IT Consulting</Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
      </div>
    </header>
  );
};

export default Header;

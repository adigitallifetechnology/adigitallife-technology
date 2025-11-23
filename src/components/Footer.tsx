import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo (6).png" 
                alt="ADigitallife Technology" 
                className="h-10 w-auto filter brightness-0 invert drop-shadow-sm"
              />
              <div>
                <span className="text-xl font-bold text-white">ADigitallife</span>
                <span className="block text-xs text-brand-orange font-medium tracking-wide">TECHNOLOGY</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering businesses through innovative digital solutions. We transform ideas into 
              powerful digital experiences that drive growth and success.
            </p>
            {/* Social icons removed */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-brand-orange transition-colors duration-200">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-brand-orange transition-colors duration-200">About</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-brand-orange transition-colors duration-200">Services</a></li>
              <li><a href="/portfolio" className="text-gray-300 hover:text-brand-orange transition-colors duration-200">Portfolio</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-brand-orange transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={16} className="mr-3 text-orange-500" />
                <span className="text-gray-300">adigitallifetechnology@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-3 text-orange-500" />
                <span className="text-gray-300">+91-7318506153, +91-8837613270</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-3 text-orange-500 mt-1" />
                <span className="text-gray-300">New Delhi</span>
              </li>
            </ul>
          </div>
          {/* newsletter removed per request */}
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 ADigitallife Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

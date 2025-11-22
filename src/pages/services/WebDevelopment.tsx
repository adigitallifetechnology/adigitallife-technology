import React from 'react';
import { Link } from 'react-router-dom';

const WebDevelopment = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="bg-brand-black text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Web Development Services</h1>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Build fast, secure, and scalable websites and web applications that convert.
            Our web development services include responsive design, e-commerce, CMS,
            and progressive web apps. We focus on SEO-friendly, performant code to
            improve search visibility and user experience.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">What we deliver</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Custom responsive websites optimized for conversions and performance</li>
            <li>SEO-friendly structure and semantic HTML for better rankings</li>
            <li>E-commerce platforms with secure payment integrations</li>
            <li>Headless CMS and API-driven architectures</li>
            <li>Ongoing maintenance, hosting, and performance monitoring</li>
          </ul>

          <div className="mt-8">
            <Link to="/contact" className="inline-block bg-brand-orange text-white px-6 py-3 rounded-lg font-semibold">Request a Proposal</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;

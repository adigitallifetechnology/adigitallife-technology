import React from 'react';
import { Link } from 'react-router-dom';

const SEOService = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="bg-brand-black text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">SEO & Digital Marketing</h1>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Grow organic traffic and leads with a data-driven SEO strategy. We combine
            on-page optimization, technical SEO, content strategy, and link building
            to improve search rankings and drive measurable results.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">Our SEO approach</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Comprehensive keyword research and content planning</li>
            <li>Technical SEO audits and fixes</li>
            <li>High-quality content creation and optimization</li>
            <li>Strategic link acquisition and outreach</li>
            <li>Analytics, reporting, and continuous improvement</li>
          </ul>

          <div className="mt-8">
            <Link to="/contact" className="inline-block bg-brand-orange text-white px-6 py-3 rounded-lg font-semibold">Start SEO Audit</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOService;

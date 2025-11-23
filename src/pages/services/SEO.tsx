import React from 'react';
import { Link } from 'react-router-dom';

const SEOService = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="bg-brand-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">SEO & Digital Marketing</h1>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto md:mx-0">
              Grow organic traffic and leads with a data-driven SEO strategy. We combine
              on-page optimization, technical SEO, content strategy, and link building
              to improve search rankings and drive measurable results.
            </p>
            <div className="mt-6 flex gap-4 justify-center md:justify-start">
              <Link to="/contact" className="inline-block bg-brand-orange text-white px-6 py-3 rounded-lg font-semibold">Start SEO Audit</Link>
              <Link to="/services" className="inline-block border-2 border-white/20 text-white px-6 py-3 rounded-lg">All Services</Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src="/illustrations/seo-illustration.svg" alt="SEO illustration" className="w-full max-w-md rounded-lg shadow-lg" onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/hero-illustration.svg'; }} />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">Our SEO approach</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Comprehensive keyword research and content planning</li>
            <li>Technical SEO audits and fixes (site speed, schema, crawlability)</li>
            <li>High-quality content creation and on-page optimization</li>
            <li>Strategic link acquisition, outreach and digital PR</li>
            <li>Analytics tracking, reporting and continuous improvement</li>
          </ul>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-2">Typical outcomes</h4>
              <p className="text-gray-600">Sustained organic traffic growth, higher-qualified leads and better keyword rankings.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-2">Reporting</h4>
              <p className="text-gray-600">Monthly dashboards with traffic, conversions and priority action items.</p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Case Study</h3>
            <div className="bg-white rounded-xl shadow p-6 md:flex gap-6">
              <img src="/project-placeholder.svg" alt="SEO case study" className="w-full md:w-48 rounded mb-4 md:mb-0 object-cover" />
              <div>
                <h4 className="font-semibold text-gray-900">Forescribe AI Platform</h4>
                <p className="text-gray-600">A focused technical SEO program helped increase organic sessions by 120% over 6 months.</p>
                <div className="mt-4"><Link to="/portfolio" className="text-brand-orange font-semibold">Read more →</Link></div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">SEO FAQs</h3>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold">How long until we see results?</h4>
                <p className="text-gray-600">SEO is a medium-term channel: initial improvements in 8–12 weeks, stronger results over 6–12 months.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold">Do you write content?</h4>
                <p className="text-gray-600">Yes — we offer content creation and optimization as part of packages or one-off projects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOService;

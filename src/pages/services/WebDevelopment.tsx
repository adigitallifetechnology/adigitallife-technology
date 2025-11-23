import React from 'react';
import { Link } from 'react-router-dom';

const WebDevelopment = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="bg-brand-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Web Development Services</h1>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto md:mx-0">
              Build fast, secure, and scalable websites and web applications that convert.
              Our web development services include responsive design, e-commerce, CMS,
              and progressive web apps. We focus on SEO-friendly, performant code to
              improve search visibility and user experience.
            </p>
            <div className="mt-6 flex gap-4 justify-center md:justify-start">
              <Link to="/contact" className="inline-block bg-brand-orange text-white px-6 py-3 rounded-lg font-semibold">Request a Proposal</Link>
              <Link to="/portfolio" className="inline-block border-2 border-white/20 text-white px-6 py-3 rounded-lg">View Work</Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src="/illustrations/web-development.svg" alt="Web development illustration" className="w-full max-w-md rounded-lg shadow-lg" onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/project-placeholder.svg'; }} />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">What we deliver</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Custom responsive websites optimized for conversions and performance</li>
            <li>SEO-friendly structure and semantic HTML for better rankings</li>
            <li>E-commerce platforms with secure payment integrations</li>
            <li>Headless CMS and API-driven architectures</li>
            <li>Progressive Web Apps (PWA) for app-like experiences</li>
            <li>Accessibility (WCAG) and performance optimizations</li>
            <li>Ongoing maintenance, hosting, and performance monitoring</li>
          </ul>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-2">Benefits</h4>
              <p className="text-gray-600">Faster load times, better search visibility, and higher conversions.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-2">Process</h4>
              <p className="text-gray-600">Discovery → Design → Development → Launch → Improve</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-2">Support</h4>
              <p className="text-gray-600">Post-launch monitoring, security patches and regular performance audits.</p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4">Technologies we use</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'GraphQL', 'MongoDB', 'Postgres'].map((t) => (
                <span key={t} className="bg-brand-orange/10 text-brand-orange text-sm px-3 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6">Case Study</h3>
            <div className="bg-white rounded-xl shadow p-6">
              <div className="md:flex gap-6">
                <img src="/project-placeholder.svg" alt="Project" className="w-full md:w-48 rounded mb-4 md:mb-0 object-cover" />
                <div>
                  <h4 className="font-semibold text-gray-900">Ovihams E‑commerce</h4>
                  <p className="text-gray-600">We built a modern e-commerce platform with optimized checkout and SEO; conversion rates improved by 45% within 3 months.</p>
                  <div className="mt-4">
                    <Link to="/portfolio" className="text-brand-orange font-semibold">See details →</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Frequently asked questions</h3>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold">How long does a website take?</h4>
                <p className="text-gray-600">Small brochure sites: 3–6 weeks. Complex platforms: 2–4 months depending on scope.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold">Do you handle content and SEO?</h4>
                <p className="text-gray-600">Yes — we offer content strategy, copywriting, and technical SEO as part of the build or as ongoing services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;

import React from 'react';
import { Link } from 'react-router-dom';

const ITConsulting = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="bg-brand-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">IT Consulting</h1>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto md:mx-0">
              Strategic IT consulting to align technology with business goals. We help
              you plan migrations, modernize infrastructure, and implement DevOps
              practices to accelerate delivery and reduce costs.
            </p>
            <div className="mt-6 flex gap-4 justify-center md:justify-start">
              <Link to="/contact" className="inline-block bg-brand-orange text-white px-6 py-3 rounded-lg font-semibold">Talk to an Advisor</Link>
              <Link to="/services" className="inline-block border-2 border-white/20 text-white px-6 py-3 rounded-lg">Our Services</Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80" alt="IT consulting" className="w-full max-w-md rounded-lg shadow-lg object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/illustrations/it-consulting.svg'; }} />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">How we help</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Technology roadmaps and cloud migration strategies</li>
            <li>DevOps automation and CI/CD pipelines</li>
            <li>Cost optimization and vendor evaluations</li>
            <li>Team augmentation and training</li>
            <li>Architecture reviews and modernization</li>
          </ul>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-2">Assessment</h4>
              <p className="text-gray-600">We audit your current stack, costs, and processes to identify quick wins.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-2">Strategy</h4>
              <p className="text-gray-600">Roadmaps that balance speed, risk and cost to reach your business objectives.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-2">Delivery</h4>
              <p className="text-gray-600">Implementation support, vendor selection and team enablement.</p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6">Engagement models</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold">Fixed-scope</h4>
                <p className="text-gray-600">Clear goals, timelines and deliverables for well-defined projects.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold">Retainer</h4>
                <p className="text-gray-600">Ongoing advisory and delivery support for longer-term programs.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold">Team Augmentation</h4>
                <p className="text-gray-600">Embed our engineers and architects into your teams for focused execution.</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">FAQs</h3>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold">How do you price consulting?</h4>
                <p className="text-gray-600">Depending on scope: fixed price, monthly retainer, or hourly advisory rates.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold">Can you join existing projects?</h4>
                <p className="text-gray-600">Yes — we can quickly onboard and provide focused expertise where needed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITConsulting;

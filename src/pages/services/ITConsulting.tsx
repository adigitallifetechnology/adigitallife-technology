import React from 'react';
import { Link } from 'react-router-dom';

const ITConsulting = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="bg-brand-black text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">IT Consulting</h1>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Strategic IT consulting to align technology with business goals. We help
            you plan migrations, modernize infrastructure, and implement DevOps
            practices to accelerate delivery and reduce costs.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">How we help</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Technology roadmaps and cloud migration strategies</li>
            <li>DevOps automation and CI/CD pipelines</li>
            <li>Cost optimization and vendor evaluations</li>
            <li>Team augmentation and training</li>
          </ul>

          <div className="mt-8">
            <Link to="/contact" className="inline-block bg-brand-orange text-white px-6 py-3 rounded-lg font-semibold">Talk to an Advisor</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITConsulting;

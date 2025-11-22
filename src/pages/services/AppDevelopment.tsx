import React from 'react';
import { Link } from 'react-router-dom';

const AppDevelopment = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="bg-brand-black text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">App Development</h1>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            We design and build native and cross-platform mobile apps with a focus on
            user experience, performance and maintainability. From MVPs to full-scale
            products, we take apps from concept to app store launch.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">Capabilities</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>iOS and Android native app development</li>
            <li>Cross-platform apps with React Native and Flutter</li>
            <li>Backend APIs, authentication and push notifications</li>
            <li>App store submission and monitoring</li>
          </ul>

          <div className="mt-8">
            <Link to="/contact" className="inline-block bg-brand-orange text-white px-6 py-3 rounded-lg font-semibold">Discuss Your App</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppDevelopment;

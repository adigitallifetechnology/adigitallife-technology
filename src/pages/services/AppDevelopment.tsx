import React from 'react';
import { Link } from 'react-router-dom';

const AppDevelopment = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="bg-brand-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">App Development</h1>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto md:mx-0">
              We design and build native and cross-platform mobile apps with a focus on
              user experience, performance and maintainability. From MVPs to full-scale
              products, we take apps from concept to app store launch.
            </p>
            <div className="mt-6 flex gap-4 justify-center md:justify-start">
              <Link to="/contact" className="inline-block bg-brand-orange text-white px-6 py-3 rounded-lg font-semibold">Discuss Your App</Link>
              <Link to="/portfolio" className="inline-block border-2 border-white/20 text-white px-6 py-3 rounded-lg">View Apps</Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src="/illustrations/app-development.svg" alt="App development illustration" className="w-full max-w-md rounded-lg shadow-lg" onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/project-placeholder.svg'; }} />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">Capabilities</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>iOS and Android native app development</li>
            <li>Cross-platform apps with React Native and Flutter</li>
            <li>Backend APIs, authentication and push notifications</li>
            <li>Real-time features: WebSockets and push</li>
            <li>App store submission, monitoring and analytics</li>
          </ul>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-2">UX & Design</h4>
              <p className="text-gray-600">User-centered design, prototyping and usability testing to maximise retention.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-2">Scalable Backends</h4>
              <p className="text-gray-600">Server architectures that scale with your users and data needs.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-2">Deployment</h4>
              <p className="text-gray-600">CI/CD pipelines, store submissions and long-term maintenance.</p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6">Selected Apps</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow p-4">
                <img src="/project-placeholder.svg" alt="App project" className="w-full rounded mb-4" />
                <h4 className="font-semibold">Mobile Retail App</h4>
                <p className="text-gray-600">A React Native app with streamlined checkout and push promotions.</p>
              </div>
              <div className="bg-white rounded-xl shadow p-4">
                <img src="/project-placeholder.svg" alt="App project" className="w-full rounded mb-4" />
                <h4 className="font-semibold">Health Tracker</h4>
                <p className="text-gray-600">Cross-platform health tracking with offline sync and analytics.</p>
              </div>
              <div className="bg-white rounded-xl shadow p-4">
                <img src="/project-placeholder.svg" alt="App project" className="w-full rounded mb-4" />
                <h4 className="font-semibold">Marketplace MVP</h4>
                <p className="text-gray-600">Fast MVP to validate product-market fit and user flows.</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">FAQs</h3>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold">Do you build native or cross-platform apps?</h4>
                <p className="text-gray-600">Both — we pick the right approach based on your product goals, timeline and budget.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold">Can you integrate with existing systems?</h4>
                <p className="text-gray-600">Yes — we connect to APIs, payment gateways and third-party services securely.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppDevelopment;

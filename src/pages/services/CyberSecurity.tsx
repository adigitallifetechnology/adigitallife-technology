import React from 'react';
import { Link } from 'react-router-dom';

const CyberSecurity = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="bg-brand-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cyber Security Audits</h1>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto md:mx-0">
              Protect your business with thorough security assessments, vulnerability
              scanning, and penetration testing. We help you identify risks and implement
              practical remediation plans to secure systems and data.
            </p>
            <div className="mt-6 flex gap-4 justify-center md:justify-start">
              <Link to="/contact" className="inline-block bg-brand-orange text-white px-6 py-3 rounded-lg font-semibold">Request Security Audit</Link>
              <Link to="/services" className="inline-block border-2 border-white/20 text-white px-6 py-3 rounded-lg">Security Overview</Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src="https://images.unsplash.com/photo-1545235617-9465d2b4d8f9?auto=format&fit=crop&w=1200&q=80" alt="Cybersecurity" className="w-full max-w-md rounded-lg shadow-lg object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/illustrations/cyber-security.svg'; }} />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">Services</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Penetration testing and vulnerability assessments</li>
            <li>Security architecture reviews and hardening</li>
            <li>Compliance audits (GDPR, ISO, PCI) and remediation</li>
            <li>Incident response planning and tabletop exercises</li>
            <li>Secure code reviews and developer training</li>
          </ul>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-2">What you get</h4>
              <p className="text-gray-600">A prioritized remediation plan, executive summary and technical report with reproducible findings.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-2">Deliverables</h4>
              <p className="text-gray-600">Vuln reports, fix recommendations, and follow-up verification testing.</p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6">Sample Findings</h3>
            <div className="bg-white rounded-xl shadow p-6">
              <div className="md:flex gap-6">
                <img src="/project-placeholder.svg" alt="Security" className="w-full md:w-48 rounded mb-4 md:mb-0 object-cover" />
                <div>
                  <h4 className="font-semibold text-gray-900">Vulnerability Assessment</h4>
                  <p className="text-gray-600">Identified outdated dependencies and misconfigured CORS leading to information exposure; fixes reduced critical risk score.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">FAQs</h3>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold">Do you sign NDAs?</h4>
                <p className="text-gray-600">Yes — confidentiality is standard. We can also work on-site or remote as required.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold">Can you help with compliance?</h4>
                <p className="text-gray-600">We provide audit support and remediation plans aligned with common standards like GDPR, ISO and PCI.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CyberSecurity;

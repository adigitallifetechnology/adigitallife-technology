import React from 'react';
import { Link } from 'react-router-dom';

const CyberSecurity = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="bg-brand-black text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Cyber Security Audits</h1>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Protect your business with thorough security assessments, vulnerability
            scanning, and penetration testing. We help you identify risks and implement
            practical remediation plans to secure systems and data.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">Services</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Penetration testing and vulnerability assessments</li>
            <li>Security architecture reviews</li>
            <li>Compliance audits and remediation</li>
            <li>Incident response planning</li>
          </ul>

          <div className="mt-8">
            <Link to="/contact" className="inline-block bg-brand-orange text-white px-6 py-3 rounded-lg font-semibold">Request Security Audit</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CyberSecurity;

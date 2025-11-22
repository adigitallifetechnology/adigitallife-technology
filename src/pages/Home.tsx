import React from 'react';
import { ArrowRight, Code, Smartphone, Shield, Search, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'ERP/CRM Solutions',
      description: 'Streamline your business operations with custom enterprise solutions.'
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'SEO & Digital Marketing',
      description: 'Boost your online presence and drive targeted traffic to your business.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Cyber Security',
      description: 'Comprehensive security audits and protection for your digital assets.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Consulting',
      description: 'Strategic technology consulting to accelerate your digital transformation.'
    }
  ];

  const stats = [
    { number: '20+', label: 'Projects Completed' },
    { number: '20+', label: 'Happy Clients' },
    { number: '2+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-brand-black text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative z-10 order-2 md:order-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Transform Your Business
              <span className="block text-brand-orange">Digitally</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-3xl leading-relaxed">
              We build beautiful websites, high-performing web apps and growth-focused SEO strategies that increase traffic, leads and revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <Link
                to="/contact"
                className="bg-brand-orange hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white hover:bg-brand-orange hover:text-white text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                Explore Services
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="bg-brand-orange/10 text-brand-orange px-3 py-1 rounded-full text-sm">Web Development</span>
              <span className="bg-brand-orange/10 text-brand-orange px-3 py-1 rounded-full text-sm">SEO</span>
              <span className="bg-brand-orange/10 text-brand-orange px-3 py-1 rounded-full text-sm">Cybersecurity</span>
              <span className="bg-brand-orange/10 text-brand-orange px-3 py-1 rounded-full text-sm">Apps</span>
            </div>
          </div>
          <div className="order-1 md:order-2 flex items-center justify-center">
            <img src="/hero-illustration.svg" alt="Hero illustration" className="w-full max-w-lg" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative mb-16">
            <div className="w-full h-64 rounded-2xl shadow-2xl mb-8 overflow-hidden bg-brand-gray flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
                <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
                  Comprehensive web development, SEO and cybersecurity services
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-orange-500 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why clients choose us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Rapid development cycles with focus on MVPs and measurable milestones.</p>
            </div>
            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold text-lg mb-2">SEO-First Development</h3>
              <p className="text-gray-600">We implement technical SEO best-practices from day one so your site can rank faster.</p>
            </div>
            <div className="p-6 border rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Clear Communication</h3>
              <p className="text-gray-600">Regular updates, dedicated project managers and accountability at every step.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client logos */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg text-gray-700 mb-6">Trusted by</h3>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <img src="/project-placeholder.svg" alt="client" className="w-36 h-auto opacity-90" />
            <img src="/project-placeholder.svg" alt="client" className="w-36 h-auto opacity-90" />
            <img src="/project-placeholder.svg" alt="client" className="w-36 h-auto opacity-90" />
            <img src="/project-placeholder.svg" alt="client" className="w-36 h-auto opacity-90" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-brand-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-brand-orange">
                  {stat.number}
                </div>
                <div className="text-lg md:text-xl">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <img
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Ready to start"
              className="w-32 h-32 rounded-full mx-auto object-cover shadow-xl border-4 border-orange-500"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Your Digital Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how we can help transform your business with innovative digital solutions.
          </p>
          <Link
            to="/contact"
            className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center"
          >
            Contact Us Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

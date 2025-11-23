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
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-brand-orange rounded-full opacity-10 blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-orange rounded-full opacity-10 blur-3xl" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
          <div className="order-2 md:order-1 animate-slide-in-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Transform Your Business
              <span className="block text-gradient text-shadow-glow">Digitally</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-3xl leading-relaxed text-gray-200">
              We build beautiful websites, high-performing web apps and growth-focused SEO strategies that increase traffic, leads and revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <Link
                to="/contact"
                className="gradient-animated text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center animate-pulse-glow"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-brand-orange hover:bg-brand-orange hover:text-white text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 glass-effect"
              >
                Explore Services
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="neon-border bg-brand-orange/10 text-brand-orange px-3 py-1 rounded-full text-sm">Web Development</span>
              <span className="neon-border bg-brand-orange/10 text-brand-orange px-3 py-1 rounded-full text-sm">SEO</span>
              <span className="neon-border bg-brand-orange/10 text-brand-orange px-3 py-1 rounded-full text-sm">Cybersecurity</span>
              <span className="neon-border bg-brand-orange/10 text-brand-orange px-3 py-1 rounded-full text-sm">Apps</span>
            </div>
          </div>
          <div className="order-1 md:order-2 flex items-center justify-center animate-slide-in-right">
            <img src="/hero-illustration.svg" alt="Hero illustration" className="w-full max-w-lg animate-float" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange rounded-full opacity-5 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Our Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive web development, SEO and cybersecurity services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 card-hover-effect animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-orange-500 mb-4 transform transition-transform duration-300 hover:scale-110 hover:rotate-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 w-16 h-1 bg-gradient-to-r from-brand-orange to-transparent rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-orange rounded-full opacity-5 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-gradient">Why clients choose us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border-2 border-transparent hover:border-brand-orange rounded-xl transition-all duration-300 hover:shadow-lg card-hover-effect bg-gradient-to-br from-white to-gray-50">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-orange to-orange-400 rounded-lg mb-4 flex items-center justify-center text-white font-bold text-xl">1</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Fast Delivery</h3>
              <p className="text-gray-600">Rapid development cycles with focus on MVPs and measurable milestones.</p>
            </div>
            <div className="p-6 border-2 border-transparent hover:border-brand-orange rounded-xl transition-all duration-300 hover:shadow-lg card-hover-effect bg-gradient-to-br from-white to-gray-50">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-orange to-orange-400 rounded-lg mb-4 flex items-center justify-center text-white font-bold text-xl">2</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">SEO-First Development</h3>
              <p className="text-gray-600">We implement technical SEO best-practices from day one so your site can rank faster.</p>
            </div>
            <div className="p-6 border-2 border-transparent hover:border-brand-orange rounded-xl transition-all duration-300 hover:shadow-lg card-hover-effect bg-gradient-to-br from-white to-gray-50">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-orange to-orange-400 rounded-lg mb-4 flex items-center justify-center text-white font-bold text-xl">3</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Clear Communication</h3>
              <p className="text-gray-600">Regular updates, dedicated project managers and accountability at every step.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client logos */}
      <section className="py-10 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg text-gray-700 mb-6 font-semibold">Trusted by leading brands</h3>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <img src="/client-logos.svg" alt="client" className="w-36 h-auto opacity-70 hover:opacity-100 transition-opacity duration-300 hover:scale-110 transform" />
            <img src="/client-logos.svg" alt="client" className="w-36 h-auto opacity-70 hover:opacity-100 transition-opacity duration-300 hover:scale-110 transform" />
            <img src="/client-logos.svg" alt="client" className="w-36 h-auto opacity-70 hover:opacity-100 transition-opacity duration-300 hover:scale-110 transform" />
            <img src="/client-logos.svg" alt="client" className="w-36 h-auto opacity-70 hover:opacity-100 transition-opacity duration-300 hover:scale-110 transform" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-brand-black text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-brand-orange rounded-full opacity-10 blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-brand-orange rounded-full opacity-10 blur-3xl" style={{animationDelay: '1.5s'}}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2 p-6 rounded-xl glass-effect hover:bg-brand-orange/10 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold text-gradient text-shadow-glow">
                  {stat.number}
                </div>
                <div className="text-lg md:text-xl text-gray-200">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-brand-orange rounded-full opacity-5 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-12 animate-fade-in-up">
            <div className="w-32 h-32 rounded-full mx-auto bg-gradient-to-br from-brand-orange to-orange-400 flex items-center justify-center shadow-2xl animate-pulse-glow">
              <ArrowRight className="w-16 h-16 text-white" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
            <span className="text-gradient">Ready to Start Your Digital Journey?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Let's discuss how we can help transform your business with innovative digital solutions.
          </p>
          <Link
            to="/contact"
            className="gradient-animated text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center shadow-xl hover:shadow-2xl animate-pulse-glow"
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

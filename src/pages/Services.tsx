import { Code, Smartphone, TrendingUp, Search, Shield, Users, Server, Palette, BarChart3, Globe, Lock, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with cutting-edge technologies.',
      features: ['Responsive Design', 'E-commerce Solutions', 'Content Management Systems', 'Progressive Web Apps'],
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB']
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['Native iOS Apps', 'Android Applications', 'Cross-platform Solutions', 'UI/UX Design'],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin']
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'ERP/CRM Software',
      description: 'Custom enterprise solutions to streamline your business operations.',
      features: ['Customer Relationship Management', 'Enterprise Resource Planning', 'Workflow Automation', 'Data Analytics'],
      technologies: ['Salesforce', 'Microsoft Dynamics', 'Custom Solutions', 'API Integrations']
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: 'SEO & Digital Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence.',
      features: ['Search Engine Optimization', 'Pay-Per-Click Advertising', 'Social Media Marketing', 'Content Marketing'],
      technologies: ['Google Analytics', 'Google Ads', 'Facebook Ads', 'SEMrush']
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Cyber Security Audits',
      description: 'Comprehensive security assessments and protection for your digital assets.',
      features: ['Security Assessments', 'Penetration Testing', 'Vulnerability Analysis', 'Compliance Auditing'],
      technologies: ['OWASP', 'Nessus', 'Metasploit', 'Security Frameworks']
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'IT Consulting',
      description: 'Strategic technology consulting to accelerate your digital transformation.',
      features: ['Digital Strategy', 'Technology Roadmaps', 'Process Optimization', 'Change Management'],
      technologies: ['Cloud Platforms', 'DevOps', 'Agile Methodologies', 'Best Practices']
    }
  ];

  const slugMap: Record<string, string> = {
    'Web Development': 'web-development',
    'App Development': 'app-development',
    'ERP/CRM Software': 'erp-crm-software',
    'SEO & Digital Marketing': 'seo',
    'Cyber Security Audits': 'cyber-security',
    'IT Consulting': 'it-consulting'
  };

  const additionalServices = [
    { icon: <Server className="w-6 h-6" />, title: 'Cloud Solutions', description: 'Scalable cloud infrastructure and migration services' },
    { icon: <Palette className="w-6 h-6" />, title: 'UI/UX Design', description: 'User-centered design for exceptional experiences' },
    { icon: <BarChart3 className="w-6 h-6" />, title: 'Data Analytics', description: 'Business intelligence and data visualization solutions' },
    { icon: <Globe className="w-6 h-6" />, title: 'Domain & Hosting', description: 'Reliable hosting and domain management services' },
    { icon: <Lock className="w-6 h-6" />, title: 'SSL Certificates', description: 'Secure your website with trusted SSL certificates' },
    { icon: <Zap className="w-6 h-6" />, title: 'Performance Optimization', description: 'Speed up your applications and websites' }
  ];

  const process = [
    { step: '01', title: 'Discovery', description: 'Understanding your business needs and objectives' },
    { step: '02', title: 'Strategy', description: 'Developing a tailored solution strategy' },
    { step: '03', title: 'Design', description: 'Creating user-centered designs and prototypes' },
    { step: '04', title: 'Development', description: 'Building your solution with best practices' },
    { step: '05', title: 'Testing', description: 'Rigorous testing to ensure quality and performance' },
    { step: '06', title: 'Deployment', description: 'Launching your solution and providing support' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-brand-black text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative z-20 text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl leading-relaxed">
              Comprehensive digital solutions designed to transform your business
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
                alt="Services hero"
                className="w-full max-w-md rounded-xl relative z-0 object-cover"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/illustrations/services-illustration.svg'; }}
              />
              <div className="absolute inset-0 bg-black/60 rounded-xl z-10 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>
      {/* FAQ moved below near footer; removed duplicate FAQ section here */}

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-full h-80 rounded-2xl shadow-2xl mb-8 overflow-hidden bg-brand-gray flex items-center justify-center">
              <h3 className="text-3xl font-semibold text-white">Professional Digital Services</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/10 to-blue-500/10 rounded-bl-full"></div>
                <div className="text-orange-500 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-brand-orange/10 text-brand-orange text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <Link to={`/services/${slugMap[service.title] || service.title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-block bg-brand-orange text-white px-4 py-2 rounded-md font-semibold">Learn more</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Complementary services to support your digital ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-brand-orange mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-12 w-full h-0.5 bg-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-orange text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how we can help bring your vision to life with our comprehensive digital solutions.
          </p>
          <Link
            to="/contact"
            className="bg-brand-black text-white hover:bg-black/90 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 inline-block"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>

      {/* FAQ & Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Answers to common questions about our services, pricing and delivery process.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">How long does a typical website project take?</h3>
              <p className="text-gray-600 mb-4">Most brochure websites take 4–8 weeks. E-commerce and custom web apps depend on scope — we provide an estimated timeline after discovery.</p>

              <h3 className="font-semibold text-gray-900 mb-2">Do you offer SEO services for new websites?</h3>
              <p className="text-gray-600 mb-4">Yes — we include technical SEO, on-page optimization, and a content plan to make sure your website can be crawled and ranks well.</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">What industries do you serve?</h3>
              <p className="text-gray-600 mb-4">We work with healthcare, legal, e-commerce, travel, and enterprise clients. Our portfolio showcases cross-industry experience.</p>

              <h3 className="font-semibold text-gray-900 mb-2">How do you price your services?</h3>
              <p className="text-gray-600">We provide fixed-scope quotes for defined projects and retainer models for ongoing SEO and maintenance work.</p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Selected Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow p-4">
                <img src="/project-placeholder.svg" alt="Case study" className="w-full rounded mb-4" />
                <h4 className="font-semibold text-gray-900">Ovihams E‑commerce</h4>
                <p className="text-gray-600">Built an online store with optimized checkout flow and SEO; improved conversion by 45%.</p>
              </div>
              <div className="bg-white rounded-xl shadow p-4">
                <img src="/project-placeholder.svg" alt="Case study" className="w-full rounded mb-4" />
                <h4 className="font-semibold text-gray-900">Forescribe AI Platform</h4>
                <p className="text-gray-600">Delivered a scalable web app integrated with AI services for content generation and analytics.</p>
              </div>
              <div className="bg-white rounded-xl shadow p-4">
                <img src="/project-placeholder.svg" alt="Case study" className="w-full rounded mb-4" />
                <h4 className="font-semibold text-gray-900">Clavius Legal</h4>
                <p className="text-gray-600">Designed a professional services website to capture leads and streamline client intake.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
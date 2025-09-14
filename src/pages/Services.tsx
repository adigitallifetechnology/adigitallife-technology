import React from 'react';
import { Code, Smartphone, TrendingUp, Search, Shield, Users, Server, Palette, BarChart3, Globe, Lock, Zap } from 'lucide-react';

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
      <section className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-700/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions designed to transform your business
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <img
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Our services"
              className="w-full h-80 object-cover rounded-2xl shadow-2xl mb-8"
            />
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
                        className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
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
                <div className="text-orange-500 mb-4">
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
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how we can help bring your vision to life with our comprehensive digital solutions.
          </p>
          <a
            href="/contact"
            className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 inline-block"
          >
            Get a Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
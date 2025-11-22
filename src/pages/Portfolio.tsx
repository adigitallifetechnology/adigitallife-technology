import { ExternalLink, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import TestimonialSlider from '../components/TestimonialSlider';

const Portfolio = () => {
  // No filters or categories, just show all projects
  const projects = [
    {
      id: 1,
      title: 'Ovihams',
      category: 'Healthcare',
      type: 'website',
      url: 'https://ovihams.com/',
      icon: <Globe className="w-16 h-16" />,
      iconColor: 'text-orange-500',
      bgColor: 'bg-orange-50',
    //  description: 'Modern portfolio website with seamless shopping experience and inventory management.',
  services: ['Web Development', 'Web App Development']
    },
    {
      id: 2,
      title: 'Clavius Legal',
      category: 'Legal Services',
      type: 'website',
      url: 'https://claviuslegal.com/',
      icon: <Globe className="w-16 h-16" />,
      iconColor: 'text-orange-500',
      bgColor: 'bg-orange-50',
     // description: 'Professional legal services website with case management and client portal.',
  services: ['Web Development']
    },
    {
      id: 3,
      title: 'Forescribe',
      category: 'Product Design',
      type: 'webapp',
      url: 'https://www.forescribe.ai/',
      icon: <Globe className="w-16 h-16" />,
      iconColor: 'text-orange-500',
      bgColor: 'bg-orange-50',
     // description: 'AI-powered writing assistant with advanced natural language processing capabilities.',
  services: ['Web App Development']
    },
    {
      id: 4,
      title: 'Eyerock Events',
      category: 'Events & Entertainment',
      type: 'website',
      url: 'https://eye-rock.com/',
      icon: <Globe className="w-16 h-16" />,
      iconColor: 'text-orange-500',
      bgColor: 'bg-orange-50',
     // description: 'Dynamic event management platform with booking system and gallery showcase.',
  services: ['Web Development']
    },
    {
      id: 5,
      title: 'Dr. Naina\'s SNH Centre',
      category: 'Healthcare',
      type: 'website',
      url: 'https://www.drnainasnh.co.in/',
      icon: <Globe className="w-16 h-16" />,
      iconColor: 'text-orange-500',
      bgColor: 'bg-orange-50',
     // description: 'Healthcare website with appointment booking and patient management system.',
  services: ['Web Development']
    },
    {
      id: 6,
      title: 'Shahji Spices',
      category: 'E-Commerce',
      type: 'website',
      url: 'https://shahjispices.com/',
      icon: <Globe className="w-16 h-16" />,
      iconColor: 'text-orange-500',
      bgColor: 'bg-orange-50',
    //  description: 'Spice company website with product catalog and wholesale ordering system.',
  services: ['Web Development']
    },
    {
      id: 8,
      title: 'Chill Memories',
      category: 'Tours & Travels',
      type: 'website',
      url: 'https://chillmemories.com/',
      icon: <Globe className="w-16 h-16" />,
      iconColor: 'text-orange-500',
      bgColor: 'bg-orange-50',
    //  description: 'Photography portfolio with booking system and client gallery management.',
  services: ['Web Development']
    },
    {
      id: 9,
      title: 'Truly India Tours',
      category: 'Travel & Tourism',
      type: 'website',
      url: 'https://www.trulyindiatours.com/',
      icon: <Globe className="w-16 h-16" />,
      iconColor: 'text-orange-500',
      bgColor: 'bg-orange-50',
    //  description: 'Travel booking platform with tour packages and itinerary management.',
  services: ['Web Development']
    }
  ];

  const testimonials = [
    {
      id: 1,
      company: 'Ovihams',
      rating: 5,
      text: 'ADigitallife Technology transformed our e-commerce vision into reality. The platform they built has increased our sales by 300% and provides an exceptional user experience.'
    },
    {
      id: 2,
      company: 'Clavius Legal',
      rating: 5,
      text: 'Professional, reliable, and innovative. They delivered a sophisticated legal platform that streamlined our client management and significantly improved our online presence.'
    },
    {
      id: 3,
      company: 'Forescribe AI',
      rating: 5,
      text: 'Their expertise in AI integration and web development is outstanding. The Forescribe platform they built is robust, scalable, and user-friendly.'
    },
    {
      id: 4,
      company: 'Eyerock Events',
      rating: 5,
      text: 'The event management system they created has revolutionized how we handle bookings and client communications. Absolutely fantastic work!'
    },
    {
      id: 5,
      company: 'SNH Centre',
      rating: 5,
      text: 'They understood our healthcare needs perfectly and delivered a website that has improved patient engagement and appointment management significantly.'
    },
    {
      id: 6,
      company: 'Shahji Spices',
      rating: 5,
      text: 'Our online spice business has grown tremendously thanks to their e-commerce solution. The SEO work they did has brought us customers from across the country.'
    }
  ];

  // Remove filters, just show all projects
  const filteredProjects = projects;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-brand-black text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Handpicked case studies: web development, e-commerce, mobile apps, and SEO projects that drove measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons removed */}

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                  <div className={`relative overflow-hidden ${project.bgColor} h-48 flex items-center justify-center`}>
                    <img src="/project-placeholder.svg" alt={project.title} className="w-full h-full object-cover" />
                    <div className={`${project.iconColor} absolute left-4 top-4 transition-transform duration-300 hover:scale-110`}>{project.icon}</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium inline-flex items-center space-x-2 hover:bg-gray-100 transition-colors duration-200 shadow-lg"
                      >
                        <span>Visit Site</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <span className="bg-brand-orange/10 text-brand-orange text-xs px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, index) => (
                        <span
                          key={index}
                          className="bg-brand-orange/10 text-brand-orange text-xs px-2 py-1 rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">9+</div>
              <div className="text-lg">Projects Showcased</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-lg">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">6+</div>
              <div className="text-lg">Industries Served</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg">Support Provided</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real feedback from real clients who have experienced our digital transformation services
            </p>
          </div>

          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Ready to start your project"
              className="w-32 h-32 rounded-full mx-auto object-cover shadow-xl border-4 border-orange-500"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how we can create an amazing digital solution for your business, 
            just like we did for these successful clients.
          </p>
          <Link
            to="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center"
          >
            Start Your Project
            <ExternalLink className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

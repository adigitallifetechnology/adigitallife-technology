import React from 'react';
import { Target, Eye, Award, Users, Lightbulb, Heart, Linkedin, Mail, Phone, ExternalLink, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Quality',
      description: 'Excellence in every project, ensuring the highest standards of delivery.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'Working closely with clients to understand and exceed their expectations.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Results',
      description: 'Focused on delivering measurable outcomes that drive business growth.'
    }
  ];

  const team = [
    {
      name: 'Harsh Sood',
      role: 'Co-Founder',
      image: '/1668739915770.jpeg',
      description: 'Visionary leader driving digital transformation with innovative solutions.',
      linkedin: 'https://www.linkedin.com/in/harsh-sood-1bb971200/',
      email: 'soodharsh3@gmail.com',
      phone: '+91-8837613270',
      portfolio: 'https://harsh-sood-developer.vercel.app/'
    },
    {
      name: 'Ankit Kumar Soni',
      role: 'Co-Founder',
      image: '/1730895053253.jpeg',
      description: 'Technical expert specializing in scalable enterprise solutions.',
      linkedin: 'https://www.linkedin.com/in/ankit-k-soni/',
      email: 'ankitsoni6153@gmail.com',
      phone: '+91-7318506153',
      portfolio: 'https://ankitsoni6153.github.io/ankit-portfolio/'
    }
  ];
/*
  const team = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Visionary leader with 10+ years in digital transformation.'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Technical expert specializing in scalable enterprise solutions.'
    },
    {
      name: 'Mike Chen',
      role: 'Head of Development',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Full-stack developer passionate about clean, efficient code.'
    },
    {
      name: 'Emily Davis',
      role: 'Digital Marketing Director',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Marketing strategist driving digital growth and engagement.'
    }
  ];
*/
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-brand-black text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-brand-orange rounded-full opacity-10 blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-orange rounded-full opacity-5 blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              About ADigitallife Technology
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl leading-relaxed text-gray-200 animate-fade-in-up">
              Leading web development agency in Delhi NCR specializing in SEO, cybersecurity audits, mobile app development, and enterprise solutions. Transform your digital presence with ADigitallife Technology.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 animate-fade-in-up">
              <span className="bg-brand-orange/20 text-brand-orange px-4 py-2 rounded-full text-sm font-medium border border-brand-orange/30">Web Development Delhi</span>
              <span className="bg-brand-orange/20 text-brand-orange px-4 py-2 rounded-full text-sm font-medium border border-brand-orange/30">SEO Services</span>
              <span className="bg-brand-orange/20 text-brand-orange px-4 py-2 rounded-full text-sm font-medium border border-brand-orange/30">Cybersecurity</span>
            </div>
          </div>
          <div className="flex items-center justify-center animate-slide-in-right">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-orange rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-orange rounded-full opacity-20 blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="About ADigitallife Technology - Web Development SEO Company Delhi"
                className="w-full max-w-md rounded-xl shadow-2xl object-cover relative z-10 border-2 border-brand-orange/20"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/illustrations/about-illustration.svg'; }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story: Leading Web Development & SEO Agency in Delhi
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2023 with a vision to bridge the gap between traditional business practices
                and digital innovation, <strong>ADigitallife Technology</strong> has become a trusted <strong>web development and SEO company in Delhi NCR</strong>. We specialize in creating high-performance websites, mobile applications, and digital marketing strategies.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                From a small team of passionate full-stack developers and SEO specialists, we've grown into a
                comprehensive digital agency offering <strong>custom web development, search engine optimization, cybersecurity audits, mobile app development,</strong> and <strong>IT consulting services</strong>.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With <strong>20+ successful projects</strong> delivered and <strong>20+ satisfied clients</strong> across healthcare, e-commerce, legal, and enterprise sectors, we continue pushing the boundaries of what's possible in digital transformation.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-orange to-orange-400 rounded-2xl opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-300"></div>
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="ADigitallife Technology Team - Web Development Experts"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover relative z-10 border-2 border-gray-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl z-10 pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                <p className="text-gray-900 font-semibold">Expert Team of Developers & Digital Strategists</p>
                <p className="text-sm text-gray-600">Delivering Excellence Since 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-brand-orange">
              <div className="text-brand-orange mb-4 bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission: Digital Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with <strong>innovative web development, SEO optimization, and cybersecurity solutions</strong> that drive measurable growth. We make cutting-edge technology accessible and transformative for startups, SMEs, and enterprises across India.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-brand-orange">
              <div className="text-brand-orange mb-4 bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision: Leading Digital Agency</h3>
              <p className="text-gray-600 leading-relaxed">
                To be <strong>India's most trusted digital transformation partner</strong>, recognized for innovation in <strong>web development, mobile apps, SEO services,</strong> and <strong>IT consulting</strong>. We envision empowering 1000+ businesses to achieve online success by 2030.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:shadow-xl transition-all duration-300 bg-white border border-gray-100 hover:border-brand-orange transform hover:-translate-y-2 group"
              >
                <div className="text-brand-orange mb-4 flex justify-center bg-orange-50 w-16 h-16 rounded-full mx-auto items-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The passionate individuals behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-brand-orange group"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-orange-500 font-semibold mb-2">
                        {member.role}
                      </p>
                    </div>
                    <div className="bg-orange-50 p-2 rounded-full group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                      <Users className="w-6 h-6 text-brand-orange group-hover:text-white" />
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {member.description}
                  </p>
                  <div className="space-y-3">
                    <a
                      href={member.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-white bg-brand-orange hover:bg-orange-600 px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
                    >
                      <Globe className="w-5 h-5 mr-3" />
                      <span className="text-sm">View Portfolio</span>
                      <ExternalLink className="w-4 h-4 ml-auto" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    >
                      <Linkedin className="w-5 h-5 mr-3" />
                      <span className="text-sm">Connect on LinkedIn</span>
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center text-gray-700 hover:text-orange-500 transition-colors duration-200"
                    >
                      <Mail className="w-5 h-5 mr-3" />
                      <span className="text-sm">{member.email}</span>
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="flex items-center text-gray-700 hover:text-orange-500 transition-colors duration-200"
                    >
                      <Phone className="w-5 h-5 mr-3" />
                      <span className="text-sm">{member.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

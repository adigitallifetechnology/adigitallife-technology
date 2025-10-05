import React from 'react';
import { Target, Eye, Award, Users, Lightbulb, Heart, Linkedin, Mail, Phone } from 'lucide-react';

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
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Visionary leader driving digital transformation with innovative solutions.',
      linkedin: 'https://www.linkedin.com/in/harsh-sood-1bb971200/',
      email: 'soodharsh3@gmail.com',
      phone: '+91-8837613270'
    },
    {
      name: 'Ankit Kumar Soni',
      role: 'Co-Founder',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Technical expert specializing in scalable enterprise solutions.',
      linkedin: 'https://www.linkedin.com/in/ankit-k-soni/',
      email: 'ankitsoni6153@gmail.com',
      phone: '+91-7318506153'
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
      <section className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-700/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About ADigitallife Technology
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Empowering businesses through innovative digital solutions since 2023
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to bridge the gap between traditional business practices 
                and digital innovation, ADigitallife Technology has been at the forefront of 
                digital transformation for over 2 years.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We started as a small team of passionate developers and have grown into a 
                comprehensive digital agency, helping businesses of all sizes embrace the 
                digital future with confidence.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we're proud to have completed over 20+ projects, served 20+ clients, 
                and continue to push the boundaries of what's possible in digital technology.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Team working"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-orange-500 mb-4">
                <Target className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth, 
                enhance efficiency, and create meaningful connections with their customers. 
                We believe in making technology accessible and transformative for every business.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-blue-500 mb-4">
                <Eye className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading digital transformation partner, recognized for our innovation, 
                quality, and commitment to client success. We envision a world where every 
                business thrives in the digital landscape.
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
                className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-orange-500 mb-4 flex justify-center">
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
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-orange-500 font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {member.description}
                  </p>
                  <div className="space-y-3">
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

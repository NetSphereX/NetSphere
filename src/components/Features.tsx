import React from 'react';
import { Users, MessageSquare, Briefcase, TrendingUp, Shield, Globe } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Smart Networking',
      description: 'AI-powered recommendations to connect you with relevant professionals in your industry.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MessageSquare,
      title: 'Professional Messaging',
      description: 'Secure, professional communication tools designed for meaningful business conversations.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Briefcase,
      title: 'Career Opportunities',
      description: 'Discover job openings, freelance projects, and partnership opportunities tailored to your profile.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Insights',
      description: 'Track your networking progress and get insights on industry trends and market opportunities.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Enterprise-grade security with granular privacy controls to protect your professional information.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connect with professionals worldwide and expand your network across borders and industries.',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-4">
            Why Choose NetSphere
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Everything You Need to
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}Grow Your Network
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and features you need to build meaningful 
            professional relationships and advance your career.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-white dark:hover:bg-gray-750 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-transparent hover:border-gray-200 dark:hover:border-gray-600"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
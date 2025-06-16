import React from 'react';
import { TrendingUp, Users, Building, MapPin } from 'lucide-react';

const Statistics: React.FC = () => {
  const stats = [
    {
      icon: Users,
      number: '10M+',
      label: 'Active Professionals',
      description: 'Join millions of professionals already networking on our platform',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Building,
      number: '500K+',
      label: 'Companies',
      description: 'From startups to Fortune 500 companies trust our platform',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      number: '2.5M+',
      label: 'Success Stories',
      description: 'Career advancements and business deals made through networking',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      number: '150+',
      label: 'Countries',
      description: 'Global reach connecting professionals worldwide',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Trusted by Professionals
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}Worldwide
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Numbers that speak to our commitment to connecting professionals and fostering meaningful relationships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                {stat.label}
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
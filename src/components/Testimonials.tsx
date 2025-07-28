import React from 'react';
import { Star, Quote, Building2, Users, TrendingUp } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Facilities Manager',
      company: 'TechCorp Tower',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'iThing transformed our 40-floor building management. The AI optimization reduced our energy costs by 35% in the first quarter alone. The multi-tenant dashboard is incredibly intuitive.',
      metrics: { floors: 40, savings: '35%', sensors: '2,400+' }
    },
    {
      name: 'Michael Rodriguez',
      role: 'Smart Building Director',
      company: 'Metropolitan Complex',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'The drag-and-drop sensor placement on floor plans is revolutionary. We can visualize our entire IoT ecosystem in real-time. The LoRaWAN integration works flawlessly across our campus.',
      metrics: { buildings: 8, devices: '15K+', uptime: '99.9%' }
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Operations Director',
      company: 'Innovation Hub',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'The AI-driven HVAC optimization and presence-based automation have exceeded our expectations. Our building now adapts to occupancy patterns automatically, creating the perfect environment.',
      metrics: { efficiency: '42%', comfort: '95%', automation: '100%' }
    },
    {
      name: 'James Park',
      role: 'Facility Operations Manager',
      company: 'Global Enterprise Center',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'iThing\'s multi-protocol support allowed us to integrate all our existing systems seamlessly. The predictive maintenance alerts have prevented three major equipment failures this year.',
      metrics: { protocols: 6, alerts: '1,200+', downtime: '-60%' }
    }
  ];

  const stats = [
    { icon: Building2, value: '500+', label: 'Buildings Connected', color: 'blue' },
    { icon: Users, value: '50K+', label: 'Daily Active Users', color: 'green' },
    { icon: TrendingUp, value: '40%', label: 'Average Energy Savings', color: 'purple' },
    { icon: Star, value: '4.9/5', label: 'Customer Satisfaction', color: 'yellow' }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'text-blue-600 dark:text-blue-400',
      green: 'text-green-600 dark:text-green-400',
      purple: 'text-purple-600 dark:text-purple-400',
      yellow: 'text-yellow-600 dark:text-yellow-400'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Smart Building Leaders
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            See how facility managers and building operators are transforming their 
            operations with iThing's intelligent IoT platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              {/* Quote Icon */}
              <div className="text-blue-200 dark:text-blue-800 mb-4">
                <Quote className="h-8 w-8" />
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                "{testimonial.text}"
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                {Object.entries(testimonial.metrics).map(([key, value], metricIndex) => (
                  <div key={metricIndex} className="text-center">
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{value}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">{key}</div>
                  </div>
                ))}
              </div>

              {/* Customer Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">
            Platform Performance Metrics
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-blue-200">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl">
            Join Our Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
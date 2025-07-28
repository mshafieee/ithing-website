import React from 'react';
import { ArrowRight, Calendar, Play, Users, Zap, Shield } from 'lucide-react';

const CTA = () => {
  const benefits = [
    {
      icon: Zap,
      title: '40% Energy Savings',
      description: 'AI-optimized building automation'
    },
    {
      icon: Users,
      title: 'Multi-Tenant Ready',
      description: 'Scalable for any building size'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level data protection'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-400/10 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Transform Your Building?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Join hundreds of smart building operators who are already saving energy, 
            reducing costs, and creating better experiences with iThing's intelligent IoT platform.
          </p>
          
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-blue-200 text-sm">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 font-semibold flex items-center justify-center group shadow-xl hover:shadow-2xl">
            <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Request Demo
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold flex items-center justify-center group">
            <Play className="mr-2 h-5 w-5" />
            Watch Platform Demo
          </button>
          
          <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 font-semibold flex items-center justify-center group shadow-xl hover:shadow-2xl">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">
              Sales Inquiries
            </h3>
            <p className="text-blue-200 mb-4">
              Speak with our IoT specialists about your building requirements
            </p>
            <a
              href="mailto:sales@ithing.io"
              className="text-white hover:text-blue-200 transition-colors font-medium"
            >
              sales@ithing.io
            </a>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">
              Technical Support
            </h3>
            <p className="text-blue-200 mb-4">
              Get help with platform setup, integration, and troubleshooting
            </p>
            <a
              href="mailto:support@ithing.io"
              className="text-white hover:text-blue-200 transition-colors font-medium"
            >
              support@ithing.io
            </a>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">
              Partnership
            </h3>
            <p className="text-blue-200 mb-4">
              Explore integration partnerships and reseller opportunities
            </p>
            <a
              href="mailto:partners@ithing.io"
              className="text-white hover:text-blue-200 transition-colors font-medium"
            >
              partners@ithing.io
            </a>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-blue-200 mb-6">
            Trusted by leading organizations worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-white/10 px-6 py-3 rounded-lg">
              <span className="text-white font-semibold">Fortune 500</span>
            </div>
            <div className="bg-white/10 px-6 py-3 rounded-lg">
              <span className="text-white font-semibold">Smart Cities</span>
            </div>
            <div className="bg-white/10 px-6 py-3 rounded-lg">
              <span className="text-white font-semibold">Universities</span>
            </div>
            <div className="bg-white/10 px-6 py-3 rounded-lg">
              <span className="text-white font-semibold">Healthcare</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
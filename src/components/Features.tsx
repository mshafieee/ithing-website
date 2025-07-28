import React from 'react';
import { 
  Building2, 
  Cpu, 
  Shield, 
  BarChart3, 
  MapPin, 
  Truck, 
  Thermometer, 
  Lightbulb,
  Camera,
  Zap,
  Users,
  Settings
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Building2,
      title: 'Multi-Tenant Architecture',
      description: 'Manage multiple buildings, floors, and rooms with hierarchical organization and custom floor plan uploads.',
      color: 'blue'
    },
    {
      icon: Cpu,
      title: 'Universal IoT Sensors',
      description: 'Support for weather stations, safety alarms, energy meters, HVAC systems, and custom sensor types.',
      color: 'purple'
    },
    {
      icon: Zap,
      title: 'AI-Driven Automation',
      description: 'Intelligent building control using AI optimization for lighting, HVAC, and energy management.',
      color: 'green'
    },
    {
      icon: Shield,
      title: 'Access Control & Security',
      description: 'Integrated access control systems with indoor tracking and personnel location monitoring.',
      color: 'red'
    },
    {
      icon: MapPin,
      title: 'Indoor & Outdoor Tracking',
      description: 'Precise indoor positioning and outdoor fleet management for vehicles and mobile assets.',
      color: 'yellow'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Interactive dashboards with live sensor data, trends, alerts, and customizable KPIs.',
      color: 'indigo'
    }
  ];

  const sensorTypes = [
    { icon: Thermometer, name: 'Climate Control', count: '15K+' },
    { icon: Lightbulb, name: 'Smart Lighting', count: '25K+' },
    { icon: Camera, name: 'Security Cameras', count: '8K+' },
    { icon: Users, name: 'Occupancy Sensors', count: '12K+' },
    { icon: Settings, name: 'Custom Sensors', count: '5K+' },
    { icon: Truck, name: 'Fleet Tracking', count: '2K+' }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800',
      green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800',
      red: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800',
      yellow: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800',
      indigo: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Comprehensive IoT Platform Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Everything you need to build, manage, and optimize intelligent buildings 
            with advanced IoT capabilities and AI-powered automation.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:bg-white dark:hover:bg-gray-700 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-gray-600"
              >
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${getColorClasses(feature.color)}`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Sensor Types */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Supported Sensor Types & Devices
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {sensorTypes.map((sensor, index) => {
              const IconComponent = sensor.icon;
              return (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="bg-white dark:bg-gray-800 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                    {sensor.name}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {sensor.count} devices
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
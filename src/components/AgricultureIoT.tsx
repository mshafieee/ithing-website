import React from 'react';
import { Droplets, Thermometer, Sun, Sprout, BarChart3, Smartphone, Leaf, CloudRain } from 'lucide-react';

const AgricultureIoT = () => {
  const features = [
    {
      icon: Droplets,
      title: 'Smart Irrigation',
      description: 'Automated watering systems based on soil moisture, weather data, and crop requirements',
      benefits: ['40% water savings', 'Optimal crop hydration', 'Remote control'],
      color: 'blue'
    },
    {
      icon: Thermometer,
      title: 'Soil Monitoring',
      description: 'Real-time tracking of soil moisture, temperature, pH, and nutrient levels',
      benefits: ['Precision farming', 'Early problem detection', 'Data-driven decisions'],
      color: 'green'
    },
    {
      icon: Leaf,
      title: 'Crop Health Monitoring',
      description: 'AI-powered analysis of plant health using sensors and imaging technology',
      benefits: ['Disease prevention', 'Yield optimization', 'Quality assurance'],
      color: 'emerald'
    },
    {
      icon: CloudRain,
      title: 'Weather Integration',
      description: 'Local weather stations and forecasting for informed agricultural decisions',
      benefits: ['Weather predictions', 'Risk mitigation', 'Optimal timing'],
      color: 'sky'
    }
  ];

  const metrics = [
    { value: '35%', label: 'Increased Yield', icon: BarChart3 },
    { value: '40%', label: 'Water Savings', icon: Droplets },
    { value: '25%', label: 'Cost Reduction', icon: Sun },
    { value: '60%', label: 'Time Saved', icon: Smartphone }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800',
      green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800',
      emerald: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800',
      sky: 'bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 border-sky-200 dark:border-sky-800'
    };
    return colors[color] || colors.green;
  };

  return (
    <section id="agriculture" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl mb-6">
            <Sprout className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Agriculture IoT Solutions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Transform traditional farming with intelligent IoT systems that optimize crop yields, 
            conserve resources, and enable precision agriculture practices.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${getColorClasses(feature.color)}`}>
                  <IconComponent className="h-6 w-6" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {feature.description}
                </p>
                
                <ul className="space-y-1">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Metrics Section */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Proven Agricultural Results
            </h3>
            <p className="text-green-100">
              Real outcomes from farms using iThing's agriculture IoT platform
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                  <div className="text-sm text-green-100">{metric.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Use Cases */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
              Precision Irrigation
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Automated irrigation systems that deliver the right amount of water at the right time, 
              based on real-time soil conditions and weather forecasts.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded text-xs">
                Soil Sensors
              </span>
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded text-xs">
                Weather API
              </span>
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded text-xs">
                Smart Valves
              </span>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
              Crop Monitoring
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Continuous monitoring of crop health using multispectral imaging, 
              environmental sensors, and AI-powered disease detection algorithms.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded text-xs">
                Image Analysis
              </span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded text-xs">
                Disease Detection
              </span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded text-xs">
                Growth Tracking
              </span>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
              Resource Optimization
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Optimize the use of fertilizers, pesticides, and other resources through 
              precise application based on soil analysis and crop requirements.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded text-xs">
                Nutrient Analysis
              </span>
              <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded text-xs">
                Variable Rate
              </span>
              <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded text-xs">
                Cost Reduction
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgricultureIoT;


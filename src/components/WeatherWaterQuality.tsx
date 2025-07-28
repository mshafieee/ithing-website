import React from 'react';
import { CloudRain, Thermometer, Wind, Droplets, Beaker, Activity, AlertTriangle, TrendingUp } from 'lucide-react';

const WeatherWaterQuality = () => {
  const weatherSensors = [
    {
      icon: Thermometer,
      name: 'Temperature',
      description: 'Ambient air temperature monitoring',
      range: '-40°C to +85°C',
      accuracy: '±0.1°C',
      color: 'red'
    },
    {
      icon: Droplets,
      name: 'Humidity',
      description: 'Relative humidity measurement',
      range: '0% to 100% RH',
      accuracy: '±2% RH',
      color: 'blue'
    },
    {
      icon: CloudRain,
      name: 'Rainfall',
      description: 'Precipitation measurement and tracking',
      range: '0-200mm/hour',
      accuracy: '±0.1mm',
      color: 'indigo'
    },
    {
      icon: Wind,
      name: 'Wind Speed',
      description: 'Wind velocity and direction monitoring',
      range: '0-60 m/s',
      accuracy: '±0.1 m/s',
      color: 'gray'
    }
  ];

  const waterQualitySensors = [
    {
      icon: Beaker,
      name: 'pH Level',
      description: 'Water acidity and alkalinity measurement',
      range: 'pH 0-14',
      accuracy: '±0.01 pH',
      color: 'purple'
    },
    {
      icon: Activity,
      name: 'Turbidity',
      description: 'Water clarity and suspended particles',
      range: '0-4000 NTU',
      accuracy: '±2% NTU',
      color: 'yellow'
    },
    {
      icon: Droplets,
      name: 'Dissolved Oxygen',
      description: 'Oxygen content in water bodies',
      range: '0-20 mg/L',
      accuracy: '±0.1 mg/L',
      color: 'cyan'
    },
    {
      icon: TrendingUp,
      name: 'Conductivity',
      description: 'Electrical conductivity and TDS measurement',
      range: '0-200 mS/cm',
      accuracy: '±1% FS',
      color: 'green'
    }
  ];

  const applications = [
    {
      title: 'Smart Cities',
      description: 'Urban environmental monitoring for better city planning and public health',
      features: ['Air quality tracking', 'Flood early warning', 'Heat island monitoring']
    },
    {
      title: 'Agriculture',
      description: 'Precision farming with real-time environmental data',
      features: ['Irrigation optimization', 'Crop protection', 'Yield prediction']
    },
    {
      title: 'Water Treatment',
      description: 'Continuous monitoring of water quality in treatment facilities',
      features: ['Process optimization', 'Compliance monitoring', 'Contamination detection']
    },
    {
      title: 'Environmental Research',
      description: 'Long-term environmental data collection for research and analysis',
      features: ['Climate studies', 'Ecosystem monitoring', 'Pollution tracking']
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      red: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      indigo: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
      gray: 'bg-gray-100 dark:bg-gray-700/30 text-gray-600 dark:text-gray-400',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
      yellow: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400',
      cyan: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400',
      green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="weather-water" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl mb-6">
            <CloudRain className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Weather & Water Quality Monitoring
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive environmental monitoring solutions with advanced sensors for weather tracking 
            and water quality analysis, enabling data-driven environmental management.
          </p>
        </div>

        {/* Weather Sensors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Weather Monitoring Sensors
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weatherSensors.map((sensor, index) => {
              const IconComponent = sensor.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${getColorClasses(sensor.color)}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {sensor.name}
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {sensor.description}
                  </p>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500 dark:text-gray-400">Range:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{sensor.range}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500 dark:text-gray-400">Accuracy:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{sensor.accuracy}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Water Quality Sensors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Water Quality Sensors
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {waterQualitySensors.map((sensor, index) => {
              const IconComponent = sensor.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${getColorClasses(sensor.color)}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {sensor.name}
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {sensor.description}
                  </p>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500 dark:text-gray-400">Range:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{sensor.range}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500 dark:text-gray-400">Accuracy:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{sensor.accuracy}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Advanced Monitoring Capabilities
            </h3>
            <p className="text-blue-100">
              Real-time data collection with intelligent alerts and predictive analytics
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-blue-100">Continuous Monitoring</div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <AlertTriangle className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">Instant</div>
              <div className="text-sm text-blue-100">Alert System</div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">AI</div>
              <div className="text-sm text-blue-100">Predictive Analytics</div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <CloudRain className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">Cloud</div>
              <div className="text-sm text-blue-100">Data Storage</div>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Application Areas
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {app.title}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {app.description}
                </p>
                
                <ul className="space-y-1">
                  {app.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherWaterQuality;


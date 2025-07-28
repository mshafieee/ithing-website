import React, { useState } from 'react';
import { Play, Monitor, Smartphone, Upload, MapPin, Zap, Thermometer, Shield } from 'lucide-react';

const InteractiveDemo = () => {
  const [activeFloor, setActiveFloor] = useState(0);
  const [selectedSensor, setSelectedSensor] = useState(null);

  const floors = [
    {
      name: 'Ground Floor',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      sensors: [
        { id: 1, type: 'temperature', x: 25, y: 30, status: 'active', value: '22°C' },
        { id: 2, type: 'occupancy', x: 60, y: 45, status: 'active', value: '3 people' },
        { id: 3, type: 'lighting', x: 40, y: 20, status: 'active', value: '75% brightness' },
        { id: 4, type: 'security', x: 80, y: 60, status: 'active', value: 'Secure' }
      ]
    },
    {
      name: 'First Floor',
      image: 'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=800',
      sensors: [
        { id: 5, type: 'temperature', x: 35, y: 40, status: 'active', value: '21°C' },
        { id: 6, type: 'occupancy', x: 70, y: 25, status: 'inactive', value: '0 people' },
        { id: 7, type: 'lighting', x: 50, y: 55, status: 'inactive', value: '0% brightness' },
        { id: 8, type: 'security', x: 20, y: 70, status: 'active', value: 'Secure' }
      ]
    }
  ];

  const sensorTypes = {
    temperature: { icon: Thermometer, color: 'bg-blue-500', name: 'Temperature' },
    occupancy: { icon: MapPin, color: 'bg-green-500', name: 'Occupancy' },
    lighting: { icon: Zap, color: 'bg-yellow-500', name: 'Lighting' },
    security: { icon: Shield, color: 'bg-red-500', name: 'Security' }
  };

  const demoFeatures = [
    {
      icon: Upload,
      title: 'Upload Floor Plans',
      description: 'Drag and drop your building floor plans and start placing sensors virtually'
    },
    {
      icon: MapPin,
      title: 'Drag & Drop Sensors',
      description: 'Intuitive interface to place and configure IoT sensors on your floor plans'
    },
    {
      icon: Monitor,
      title: 'Real-time Monitoring',
      description: 'Live dashboard showing all sensor data, alerts, and building status'
    },
    {
      icon: Smartphone,
      title: 'Mobile Control',
      description: 'Full platform access from any device with responsive design'
    }
  ];

  return (
    <section id="demo" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Interactive Platform Demo
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Experience how iThing transforms building management with intuitive floor plan 
            visualization and real-time sensor monitoring.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Interactive Floor Plan */}
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Building Floor Plans
                </h3>
                <div className="flex space-x-2">
                  {floors.map((floor, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveFloor(index)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeFloor === index
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                      }`}
                    >
                      {floor.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700">
                <img
                  src={floors[activeFloor].image}
                  alt={floors[activeFloor].name}
                  className="w-full h-full object-cover"
                />
                
                {/* Sensor Overlays */}
                {floors[activeFloor].sensors.map((sensor) => {
                  const SensorIcon = sensorTypes[sensor.type].icon;
                  return (
                    <button
                      key={sensor.id}
                      onClick={() => setSelectedSensor(sensor)}
                      className={`absolute w-8 h-8 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform ${
                        sensorTypes[sensor.type].color
                      } ${sensor.status === 'active' ? 'animate-pulse' : 'opacity-60'}`}
                      style={{ left: `${sensor.x}%`, top: `${sensor.y}%` }}
                    >
                      <SensorIcon className="h-4 w-4" />
                    </button>
                  );
                })}
              </div>

              {/* Sensor Details */}
              {selectedSensor && (
                <div className="mt-4 bg-white dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${
                      sensorTypes[selectedSensor.type].color
                    }`}>
                      {React.createElement(sensorTypes[selectedSensor.type].icon, { className: 'h-5 w-5' })}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {sensorTypes[selectedSensor.type].name} Sensor
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Current Value: {selectedSensor.value}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        Status: {selectedSensor.status === 'active' ? 'Active' : 'Inactive'}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold flex items-center justify-center group">
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Launch Full Demo
            </button>
          </div>

          {/* Demo Features */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Platform Capabilities
            </h3>
            
            {demoFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-gray-600"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Live Stats */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Live Platform Stats
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">1,247</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Active Sensors</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">23</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Connected Buildings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">98.7%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">System Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">42%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Energy Saved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
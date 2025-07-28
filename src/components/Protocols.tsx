import React from 'react';
import { Wifi, Radio, Bluetooth, Zap, Network, Cpu } from 'lucide-react';

const Protocols = () => {
  const protocols = [
    {
      icon: Radio,
      name: 'LoRaWAN',
      description: 'Long-range, low-power wireless protocol for IoT devices',
      range: 'Up to 15km',
      power: 'Ultra-low',
      devices: '10K+ nodes',
      color: 'green'
    },
    {
      icon: Zap,
      name: 'Matter',
      description: 'Universal smart home connectivity standard',
      range: 'Local network',
      power: 'Low',
      devices: '5K+ devices',
      color: 'blue'
    },
    {
      icon: Network,
      name: 'Zigbee',
      description: 'Mesh networking protocol for smart buildings',
      range: 'Up to 100m',
      power: 'Low',
      devices: '8K+ nodes',
      color: 'purple'
    },
    {
      icon: Bluetooth,
      name: 'BLE',
      description: 'Bluetooth Low Energy for proximity sensors',
      range: 'Up to 50m',
      power: 'Very low',
      devices: '15K+ beacons',
      color: 'indigo'
    },
    {
      icon: Wifi,
      name: 'Wi-Fi 6',
      description: 'High-speed wireless for data-intensive devices',
      range: 'Up to 200m',
      power: 'Medium',
      devices: '3K+ devices',
      color: 'yellow'
    },
    {
      icon: Cpu,
      name: 'Custom RF',
      description: 'Proprietary radio protocols for specialized use cases',
      range: 'Variable',
      power: 'Configurable',
      devices: '2K+ custom',
      color: 'red'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
      indigo: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
      yellow: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400',
      red: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="protocols" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Universal Protocol Support
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            iThing supports all major IoT communication protocols, ensuring seamless 
            integration with existing infrastructure and future-proof scalability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {protocols.map((protocol, index) => {
            const IconComponent = protocol.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
              >
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${getColorClasses(protocol.color)}`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {protocol.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {protocol.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Range:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{protocol.range}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Power:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{protocol.power}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Connected:</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{protocol.devices}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interoperability Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Seamless Interoperability
          </h3>
          <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
            Our platform automatically handles protocol translation and device discovery, 
            allowing different IoT ecosystems to work together harmoniously.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">99.9%</div>
              <div className="text-sm text-blue-200">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">50ms</div>
              <div className="text-sm text-blue-200">Latency</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">1M+</div>
              <div className="text-sm text-blue-200">Messages/day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">24/7</div>
              <div className="text-sm text-blue-200">Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Protocols;
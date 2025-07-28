import React, { useState, useRef, useCallback } from 'react';
import { 
  Thermometer, 
  Droplets, 
  Zap, 
  Wifi, 
  Camera, 
  Shield, 
  Wind,
  Activity,
  RotateCcw,
  Play,
  Pause
} from 'lucide-react';

interface Sensor {
  id: string;
  type: string;
  name: string;
  icon: React.ComponentType<any>;
  color: string;
  x: number;
  y: number;
}

interface SensorType {
  type: string;
  name: string;
  icon: React.ComponentType<any>;
  color: string;
  description: string;
}

const SensorPlacementDemo = () => {
  const [placedSensors, setPlacedSensors] = useState<Sensor[]>([]);
  const [draggedSensor, setDraggedSensor] = useState<SensorType | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const floorPlanRef = useRef<HTMLDivElement>(null);

  const sensorTypes: SensorType[] = [
    {
      type: 'temperature',
      name: 'Temperature',
      icon: Thermometer,
      color: 'bg-red-500',
      description: 'Monitor ambient temperature'
    },
    {
      type: 'humidity',
      name: 'Humidity',
      icon: Droplets,
      color: 'bg-blue-500',
      description: 'Track moisture levels'
    },
    {
      type: 'occupancy',
      name: 'Occupancy',
      icon: Activity,
      color: 'bg-green-500',
      description: 'Detect room occupancy'
    },
    {
      type: 'light',
      name: 'Light',
      icon: Zap,
      color: 'bg-yellow-500',
      description: 'Measure light intensity'
    },
    {
      type: 'wifi',
      name: 'Wi-Fi',
      icon: Wifi,
      color: 'bg-purple-500',
      description: 'Wireless connectivity'
    },
    {
      type: 'camera',
      name: 'Security',
      icon: Camera,
      color: 'bg-gray-700',
      description: 'Security monitoring'
    },
    {
      type: 'air',
      name: 'Air Quality',
      icon: Wind,
      color: 'bg-cyan-500',
      description: 'Monitor air quality'
    },
    {
      type: 'access',
      name: 'Access Control',
      icon: Shield,
      color: 'bg-indigo-500',
      description: 'Door access control'
    }
  ];

  const handleDragStart = (sensorType: SensorType) => {
    setDraggedSensor(sensorType);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (!draggedSensor || !floorPlanRef.current) return;

    const rect = floorPlanRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const newSensor: Sensor = {
      id: `${draggedSensor.type}-${Date.now()}`,
      type: draggedSensor.type,
      name: draggedSensor.name,
      icon: draggedSensor.icon,
      color: draggedSensor.color,
      x: Math.max(2, Math.min(98, x)),
      y: Math.max(2, Math.min(98, y))
    };

    setPlacedSensors(prev => [...prev, newSensor]);
    setDraggedSensor(null);
  }, [draggedSensor]);

  const removeSensor = (id: string) => {
    setPlacedSensors(prev => prev.filter(sensor => sensor.id !== id));
  };

  const clearAllSensors = () => {
    setPlacedSensors([]);
  };

  const startAnimation = () => {
    setIsAnimating(true);
    // Add some demo sensors with animation
    const demoSensors: Sensor[] = [
      { id: 'demo-1', type: 'temperature', name: 'Temperature', icon: Thermometer, color: 'bg-red-500', x: 25, y: 30 },
      { id: 'demo-2', type: 'occupancy', name: 'Occupancy', icon: Activity, color: 'bg-green-500', x: 60, y: 40 },
      { id: 'demo-3', type: 'light', name: 'Light', icon: Zap, color: 'bg-yellow-500', x: 80, y: 25 },
      { id: 'demo-4', type: 'wifi', name: 'Wi-Fi', icon: Wifi, color: 'bg-purple-500', x: 45, y: 70 },
      { id: 'demo-5', type: 'camera', name: 'Security', icon: Camera, color: 'bg-gray-700', x: 15, y: 80 },
    ];

    demoSensors.forEach((sensor, index) => {
      setTimeout(() => {
        setPlacedSensors(prev => [...prev, sensor]);
      }, index * 500);
    });

    setTimeout(() => setIsAnimating(false), demoSensors.length * 500 + 1000);
  };

  return (
    <section id="sensor-demo" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Interactive Sensor Placement Demo
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Drag and drop IoT sensors onto the floor plan to visualize your smart building setup. 
            See how different sensors work together to create an intelligent environment.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sensor Palette */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Available Sensors
            </h3>
            <div className="space-y-3">
              {sensorTypes.map((sensorType) => {
                const IconComponent = sensorType.icon;
                return (
                  <div
                    key={sensorType.type}
                    draggable
                    onDragStart={() => handleDragStart(sensorType)}
                    className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-move hover:shadow-md transition-all duration-200 border border-gray-200 dark:border-gray-700 group"
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 ${sensorType.color} group-hover:scale-110 transition-transform`}>
                      <IconComponent className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 dark:text-white text-sm">
                        {sensorType.name}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {sensorType.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Controls */}
            <div className="mt-6 space-y-2">
              <button
                onClick={startAnimation}
                disabled={isAnimating}
                className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isAnimating ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                {isAnimating ? 'Placing...' : 'Auto Demo'}
              </button>
              <button
                onClick={clearAllSensors}
                className="w-full flex items-center justify-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Clear All
              </button>
            </div>

            {/* Sensor Count */}
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="text-sm font-medium text-blue-900 dark:text-blue-100">
                Sensors Placed: {placedSensors.length}
              </div>
              <div className="text-xs text-blue-600 dark:text-blue-300">
                Drag sensors from the list above
              </div>
            </div>
          </div>

          {/* Floor Plan */}
          <div className="lg:col-span-3">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <div
                ref={floorPlanRef}
                className="relative w-full h-96 bg-white dark:bg-gray-900 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 overflow-hidden"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                style={{
                  backgroundImage: `url('/src/assets/floor-plan.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                {/* Drop Zone Overlay */}
                {draggedSensor && (
                  <div className="absolute inset-0 bg-blue-500/10 border-2 border-blue-500 border-dashed rounded-xl flex items-center justify-center">
                    <div className="text-blue-600 dark:text-blue-400 text-center">
                      <div className="text-lg font-medium">Drop sensor here</div>
                      <div className="text-sm">Place {draggedSensor.name} sensor on the floor plan</div>
                    </div>
                  </div>
                )}

                {/* Placed Sensors */}
                {placedSensors.map((sensor) => {
                  const IconComponent = sensor.icon;
                  return (
                    <div
                      key={sensor.id}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer animate-bounce-in"
                      style={{
                        left: `${sensor.x}%`,
                        top: `${sensor.y}%`
                      }}
                      onClick={() => removeSensor(sensor.id)}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${sensor.color} shadow-lg group-hover:scale-110 transition-all duration-200 relative`}>
                        <IconComponent className="h-5 w-5 text-white" />
                        
                        {/* Pulse Animation */}
                        <div className={`absolute inset-0 rounded-full ${sensor.color} opacity-30 animate-ping`}></div>
                        
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {sensor.name}
                          <div className="text-xs text-gray-300">Click to remove</div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Instructions */}
                {placedSensors.length === 0 && !draggedSensor && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-500 dark:text-gray-400">
                      <div className="text-lg font-medium mb-2">Smart Office Floor Plan</div>
                      <div className="text-sm">Drag sensors from the left panel to place them on the floor plan</div>
                      <div className="text-xs mt-2">Or click "Auto Demo" to see a sample setup</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Legend */}
              <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  Temperature Sensors
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  Occupancy Sensors
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  Environmental Sensors
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                  Network Infrastructure
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Activity className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Real-time Monitoring
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Monitor all sensors in real-time with instant alerts and automated responses to environmental changes.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Energy Optimization
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Automatically adjust lighting, HVAC, and other systems based on occupancy and environmental conditions.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Enhanced Security
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Integrated security monitoring with access control and surveillance for comprehensive building protection.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-in {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.8;
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default SensorPlacementDemo;


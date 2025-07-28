import React from 'react';
import { Brain, Zap, TrendingDown, Users, Lightbulb, Thermometer, Activity, Target } from 'lucide-react';

const AIOptimization = () => {
  const optimizations = [
    {
      icon: Lightbulb,
      title: 'Smart Lighting Control',
      description: 'AI automatically adjusts lighting based on occupancy, natural light levels, and user preferences',
      savings: '35% energy reduction',
      color: 'yellow'
    },
    {
      icon: Thermometer,
      title: 'HVAC Optimization',
      description: 'Machine learning algorithms optimize temperature control based on weather, occupancy, and usage patterns',
      savings: '40% HVAC efficiency',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Presence-Based Automation',
      description: 'Advanced presence detection automatically controls systems when spaces are occupied or vacant',
      savings: '25% overall savings',
      color: 'green'
    },
    {
      icon: Activity,
      title: 'Predictive Maintenance',
      description: 'AI predicts equipment failures before they happen, reducing downtime and maintenance costs',
      savings: '60% less downtime',
      color: 'purple'
    }
  ];

  const aiFeatures = [
    'Real-time decision making',
    'Adaptive learning algorithms',
    'Predictive analytics',
    'Automated optimization',
    'Energy consumption forecasting',
    'Anomaly detection'
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      yellow: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400',
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="ai-optimization" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
            <Brain className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            AI-Powered Building Optimization
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our advanced AI engine continuously learns from your building's patterns to optimize 
            energy consumption, enhance comfort, and reduce operational costs automatically.
          </p>
        </div>

        {/* AI Optimization Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {optimizations.map((optimization, index) => {
            const IconComponent = optimization.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
              >
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${getColorClasses(optimization.color)}`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {optimization.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {optimization.description}
                </p>
                
                <div className="bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-lg inline-block">
                  <span className="text-green-700 dark:text-green-400 font-semibold text-sm">
                    {optimization.savings}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* AI Process Visualization */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            How AI Optimization Works
          </h3>
          
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Data Collection</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Continuous monitoring of sensors, occupancy, weather, and energy usage
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">AI Analysis</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Machine learning algorithms analyze patterns and predict optimal settings
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Optimization</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Automatic adjustments to lighting, HVAC, and other systems for efficiency
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 dark:bg-yellow-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Results</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Reduced energy costs, improved comfort, and enhanced building performance
              </p>
            </div>
          </div>
        </div>

        {/* AI Features List */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Advanced AI Capabilities
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {aiFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Zap className="h-5 w-5 text-yellow-300 flex-shrink-0" />
                    <span className="text-blue-100">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">40%</div>
                <div className="text-blue-200 mb-4">Average Energy Savings</div>
                <div className="text-2xl font-bold mb-2">99.9%</div>
                <div className="text-blue-200 mb-4">System Uptime</div>
                <div className="text-2xl font-bold mb-2">24/7</div>
                <div className="text-blue-200">AI Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIOptimization;
import React from 'react';
import { Check, X, Crown, Zap } from 'lucide-react';

const Comparison = () => {
  const features = [
    {
      category: 'Platform Architecture',
      items: [
        { feature: 'Multi-tenant support', ithing: true, competitor1: false, competitor2: true },
        { feature: 'Drag & drop floor plan interface', ithing: true, competitor1: false, competitor2: false },
        { feature: 'Real-time sensor visualization', ithing: true, competitor1: true, competitor2: false },
        { feature: 'Scalable cloud infrastructure', ithing: true, competitor1: true, competitor2: true },
      ]
    },
    {
      category: 'IoT Protocol Support',
      items: [
        { feature: 'LoRaWAN integration', ithing: true, competitor1: true, competitor2: false },
        { feature: 'Matter protocol support', ithing: true, competitor1: false, competitor2: false },
        { feature: 'Zigbee compatibility', ithing: true, competitor1: true, competitor2: true },
        { feature: 'Custom RF protocols', ithing: true, competitor1: false, competitor2: false },
        { feature: 'BLE (Bluetooth Low Energy)', ithing: true, competitor1: true, competitor2: false },
      ]
    },
    {
      category: 'AI & Automation',
      items: [
        { feature: 'AI-driven energy optimization', ithing: true, competitor1: false, competitor2: false },
        { feature: 'Predictive maintenance', ithing: true, competitor1: true, competitor2: false },
        { feature: 'Presence-based automation', ithing: true, competitor1: false, competitor2: true },
        { feature: 'Machine learning algorithms', ithing: true, competitor1: false, competitor2: false },
      ]
    },
    {
      category: 'Advanced Features',
      items: [
        { feature: 'Indoor tracking & positioning', ithing: true, competitor1: false, competitor2: false },
        { feature: 'Fleet management integration', ithing: true, competitor1: false, competitor2: true },
        { feature: 'Access control systems', ithing: true, competitor1: true, competitor2: false },
        { feature: 'Real-time analytics dashboard', ithing: true, competitor1: true, competitor2: true },
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small buildings',
      features: [
        'Up to 100 sensors',
        'Basic analytics',
        '2 floor plans',
        'Email support',
        'Standard protocols'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for medium enterprises',
      features: [
        'Up to 1,000 sensors',
        'Advanced AI optimization',
        'Unlimited floor plans',
        'Priority support',
        'All protocols included',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large-scale deployments',
      features: [
        'Unlimited sensors',
        'White-label solution',
        'Dedicated support team',
        'Custom development',
        'SLA guarantees',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  return (
    <section id="comparison" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Comparison Table */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why iThing Outperforms the Competition
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              See how iThing's advanced features and capabilities compare to other IoT platforms in the market.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 dark:text-white">Features</th>
                  <th className="text-center py-4 px-6">
                    <div className="flex items-center justify-center space-x-2">
                      <Crown className="h-5 w-5 text-yellow-500" />
                      <span className="font-bold text-blue-600 dark:text-blue-400">iThing</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-600 dark:text-gray-400">Competitor A</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-600 dark:text-gray-400">Competitor B</th>
                </tr>
              </thead>
              <tbody>
                {features.map((category, categoryIndex) => (
                  <React.Fragment key={categoryIndex}>
                    <tr>
                      <td colSpan={4} className="py-4 px-6">
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-4 py-2 rounded-lg">
                          {category.category}
                        </h3>
                      </td>
                    </tr>
                    {category.items.map((item, itemIndex) => (
                      <tr key={itemIndex} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                        <td className="py-3 px-6 text-gray-700 dark:text-gray-300">{item.feature}</td>
                        <td className="py-3 px-6 text-center">
                          {item.ithing ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-500 mx-auto" />
                          )}
                        </td>
                        <td className="py-3 px-6 text-center">
                          {item.competitor1 ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-500 mx-auto" />
                          )}
                        </td>
                        <td className="py-3 px-6 text-center">
                          {item.competitor2 ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-500 mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing Plans */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Choose the perfect plan for your building size and requirements. All plans include our core IoT platform features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-500 dark:border-blue-400 relative'
                    : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Zap className="h-4 w-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 ml-1">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What makes iThing different from other IoT platforms?',
      answer: 'iThing is specifically designed for multi-tenant buildings with advanced AI optimization. Our unique drag-and-drop floor plan interface, support for all major IoT protocols (including Matter and LoRaWAN), and AI-driven energy optimization set us apart. We also offer indoor tracking, fleet management, and predictive maintenance in a single platform.'
    },
    {
      question: 'How does the multi-tenant architecture work?',
      answer: 'Our platform allows building owners to manage multiple tenants, each with their own floors, rooms, and sensor configurations. Tenants can upload their floor plans, place virtual sensors, and manage their space independently while building owners maintain overall control and analytics. Data isolation and security are built-in at every level.'
    },
    {
      question: 'Which IoT protocols does iThing support?',
      answer: 'iThing supports all major IoT protocols including LoRaWAN, Matter, Zigbee, BLE (Bluetooth Low Energy), Wi-Fi 6, and custom RF protocols. Our platform automatically handles protocol translation and device discovery, ensuring seamless interoperability between different IoT ecosystems.'
    },
    {
      question: 'How does the AI optimization reduce energy consumption?',
      answer: 'Our AI engine continuously learns from building patterns, occupancy data, weather conditions, and energy usage. It automatically optimizes lighting based on natural light and presence, adjusts HVAC systems for maximum efficiency, and predicts optimal settings. Most customers see 30-40% energy savings within the first quarter.'
    },
    {
      question: 'Can I integrate iThing with existing building management systems?',
      answer: 'Yes, iThing is designed for seamless integration with existing BMS, HVAC, lighting, and security systems. We provide APIs, webhooks, and pre-built connectors for popular systems. Our team can also develop custom integrations for proprietary systems during implementation.'
    },
    {
      question: 'What kind of sensors can I connect to iThing?',
      answer: 'iThing supports all types of IoT sensors including temperature, humidity, occupancy, motion, light, air quality, energy meters, water leak detection, door/window sensors, HVAC controls, smart lighting, security cameras, access control systems, and custom industrial sensors.'
    },
    {
      question: 'How does the indoor tracking and positioning work?',
      answer: 'Our indoor positioning system uses a combination of BLE beacons, Wi-Fi triangulation, and sensor fusion to provide precise location tracking within buildings. This enables features like personnel location monitoring, asset tracking, emergency evacuation assistance, and presence-based automation.'
    },
    {
      question: 'What are the security measures in place?',
      answer: 'iThing implements enterprise-grade security including end-to-end encryption, multi-factor authentication, role-based access control, regular security audits, and compliance with industry standards (ISO 27001, SOC 2). All data is encrypted in transit and at rest, with optional on-premise deployment for maximum security.'
    },
    {
      question: 'How quickly can iThing be deployed in my building?',
      answer: 'Deployment time varies based on building size and complexity. Small buildings (under 100 sensors) can be deployed in 1-2 weeks, medium buildings in 2-4 weeks, and large enterprise deployments in 4-8 weeks. We provide full project management, installation, configuration, and training services.'
    },
    {
      question: 'What kind of support and training do you provide?',
      answer: 'We offer comprehensive onboarding including system training, user workshops, and documentation. Ongoing support includes 24/7 technical support, regular system updates, performance monitoring, and dedicated customer success managers for enterprise clients. We also provide API documentation and developer resources.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Get answers to common questions about iThing's IoT platform, features, 
            implementation, and how it can transform your building operations.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Still Have Questions?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our IoT experts are here to help you understand how iThing can transform 
            your building operations. Schedule a personalized consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
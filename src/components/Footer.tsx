import React from 'react';
import { Zap, Mail, Phone, MapPin, Github, Twitter, Linkedin, Youtube, Globe } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Platform', href: '#features' },
    { name: 'Protocols', href: '#protocols' },
    { name: 'Agriculture', href: '#agriculture' },
    { name: 'Weather & Water', href: '#weather-water' },
    { name: 'Sensor Demo', href: '#sensor-demo' },
    { name: 'AI Optimization', href: '#ai-optimization' },
    { name: 'Demo', href: '#demo' },
    { name: 'Pricing', href: '#comparison' },
    { name: 'FAQ', href: '#faq' }
  ];

  const solutions = [
    'Smart Buildings',
    'Energy Management',
    'Indoor Tracking',
    'Fleet Management',
    'Access Control',
    'Predictive Maintenance'
  ];

  const resources = [
    'Documentation',
    'API Reference',
    'Developer Tools',
    'Case Studies',
    'Webinars',
    'Blog'
  ];

  const company = [
    'About Us',
    'Careers',
    'Press Kit',
    'Partners',
    'Contact',
    'Support'
  ];

  const regions = [
    {
      country: 'Saudi Arabia',
      cities: ['Mecca', 'Medina', 'Riyadh', 'Jeddah', 'Dammam', 'Neom']
    },
    {
      country: 'UAE',
      cities: ['Dubai', 'Abu Dhabi', 'Sharjah']
    },
    {
      country: 'Qatar',
      cities: ['Doha', 'Al Rayyan']
    },
    {
      country: 'Egypt',
      cities: ['Cairo', 'Alexandria']
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-6 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">iThing</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              The intelligent IoT platform for modern buildings. Transform your facilities 
              with AI-powered automation, multi-tenant management, and comprehensive 
              sensor integration.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3 text-blue-400" />
                <span>info@ithing.io</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-3 text-blue-400" />
                <span>+201096701701</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-3 text-blue-400" />
                <span>+0966562077165</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">
              Platform
            </h4>
            <ul className="space-y-3">
              {quickLinks.slice(0, 6).map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">
              Solutions
            </h4>
            <ul className="space-y-3">
              {solutions.slice(0, 6).map((solution, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {solution}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Regions */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold text-white mb-6 flex items-center">
              <Globe className="h-5 w-5 mr-2 text-blue-400" />
              Service Regions
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {regions.map((region, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4">
                  <h5 className="font-semibold text-white mb-2">{region.country}</h5>
                  <ul className="space-y-1">
                    {region.cities.map((city, cityIndex) => (
                      <li key={cityIndex} className="text-gray-300 text-sm">
                        • {city}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-gray-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-bold text-white mb-2">
                Stay Updated
              </h4>
              <p className="text-gray-300">
                Get the latest IoT insights, platform updates, and industry news.
              </p>
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 iThing. All rights reserved.
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
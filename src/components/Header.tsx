import React, { useState } from 'react';
import { Menu, X, Shield, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Premium', href: '/premium-tools' },
    { name: 'Online', href: '/online-tools' },
    { name: 'Rehberler', href: '/tutorials' },
    { name: 'Hakkımızda', href: '/about' },
    { name: 'İletişim', href: '/contact' },
  ];

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname === href;
  };

  // Scroll to tools section function
  const scrollToTools = () => {
    const toolsSection = document.getElementById('tools');
    if (toolsSection) {
      toolsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Ultra Compact Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="bg-gradient-to-r from-blue-600 to-red-500 p-1 rounded-lg">
              <Shield className="h-4 w-4 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-sm font-bold text-gray-900 leading-tight">YouTube İndirme</h1>
              <p className="text-xs text-gray-500 leading-tight">Güvenilir Rehber</p>
            </div>
          </Link>

          {/* Ultra Compact Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.href}
                  className={`px-2 py-1 text-xs font-medium rounded-md transition-colors duration-200 ${
                    isActive(item.href) 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </nav>

          {/* Ultra Compact Right Side */}
          <div className="flex items-center space-x-2">
            {/* Ultra Compact Trust Badge */}
            <div className="hidden md:flex items-center space-x-1 bg-green-50 px-2 py-0.5 rounded-md">
              <Award className="h-3 w-3 text-green-600" />
              <span className="text-xs font-medium text-green-700">Güvenilir</span>
            </div>
            
            {/* Ultra Compact CTA Button with scroll functionality */}
            <button 
              onClick={scrollToTools}
              className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-2.5 py-1 rounded-md text-xs font-medium transition-colors duration-200"
            >
              Başla
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-1 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Ultra Compact Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t border-gray-200 py-1 overflow-hidden"
            >
              <nav className="space-y-0.5">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className={`block px-3 py-1 text-sm font-medium rounded-md transition-colors duration-200 ${
                        isActive(item.href) 
                          ? 'text-blue-600 bg-blue-50' 
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
              </nav>
              
              {/* Ultra Compact Mobile CTA with scroll functionality */}
              <div className="mt-1 pt-1 border-t border-gray-200">
                <button 
                  onClick={() => {
                    scrollToTools();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-medium"
                >
                  Başla
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
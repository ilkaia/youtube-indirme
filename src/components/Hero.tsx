import React from 'react';
import { Play, Download, Shield, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import BackgroundEffects from './BackgroundEffects';

const Hero = () => {
  const features = [
    { icon: Shield, text: '100% Güvenli' },
    { icon: Clock, text: 'Hızlı İndirme' },
    { icon: Download, text: 'HD Kalite' },
  ];

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
    <section className="relative overflow-hidden">
      {/* Background Effects Container - Limited Height */}
      <div className="absolute inset-0 h-[420px]">
        <BackgroundEffects />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent">
              Türkiye'nin
            </span>
            <br />
            En Güvenilir Video İndirme Rehberi
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
            YouTube videolarını güvenli bir şekilde indirmek için en iyi programları ve yöntemleri keşfedin. 
            Uzmanlarımız tarafından test edilmiş ve onaylanmış çözümler.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <motion.button
              onClick={scrollToTools}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Play className="h-4 w-4" />
              <span>En İyi Programları Keşfet</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-50 text-gray-800 px-6 py-3 rounded-xl font-semibold text-base border-2 border-gray-200 hover:border-gray-300 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Download className="h-4 w-4" />
              <span>Ücretsiz Rehberleri Gör</span>
            </motion.button>
          </div>

          {/* Compact Feature Pills - These mark the end of background */}
          <div className="flex flex-wrap justify-center gap-3 pb-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50 flex items-center space-x-2 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <Icon className="h-4 w-4 text-blue-600" />
                  <span className="font-medium text-gray-700 text-sm">{feature.text}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
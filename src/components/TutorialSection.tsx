import React, { useState } from 'react';
import { PlayCircle, FileText, Smartphone, Monitor, Download, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TutorialSection = () => {
  const [expandedTutorial, setExpandedTutorial] = useState(null);

  const tutorials = [
    {
      id: 1,
      icon: PlayCircle,
      title: 'YouTube Video İndirme Rehberi',
      description: 'Adım adım video indirme kılavuzu. Başlangıçtan ileri seviyeye tüm detaylar.',
      duration: '5 dakika',
      difficulty: 'Kolay',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      steps: [
        'YouTube\'da indirmek istediğiniz videoyu bulun',
        'Video URL\'sini kopyalayın (Ctrl+C)',
        'Video indirme programını açın',
        'URL\'yi programa yapıştırın',
        'Kalite ve format seçin',
        'İndir butonuna tıklayın'
      ]
    },
    {
      id: 2,
      icon: FileText,
      title: 'MP3 Dönüştürme Yöntemleri',
      description: 'Video dosyalarını kaliteli MP3 formatına dönüştürme teknikleri.',
      duration: '3 dakika',
      difficulty: 'Kolay',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      steps: [
        'Video indirme programını açın',
        'YouTube video URL\'sini yapıştırın',
        'Format olarak MP3 seçin',
        'Ses kalitesini belirleyin (128kbps, 320kbps)',
        'İndirme klasörünü seçin',
        'Dönüştürme işlemini başlatın'
      ]
    },
    {
      id: 3,
      icon: Monitor,
      title: 'HD ve 4K Video İndirme',
      description: 'Yüksek kaliteli videoları hızlı ve güvenli bir şekilde indirme yöntemleri.',
      duration: '7 dakika',
      difficulty: 'Orta',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      steps: [
        '4K destekli program seçin',
        'Video URL\'sini programa ekleyin',
        'Kalite seçeneklerinden 4K/1080p seçin',
        'Yeterli disk alanı olduğundan emin olun',
        'Hızlı internet bağlantısı kullanın',
        'İndirme işlemini başlatın'
      ]
    },
    {
      id: 4,
      icon: Smartphone,
      title: 'Mobil İndirme Yöntemleri',
      description: 'Android ve iPhone cihazlarda video indirme uygulamaları ve yöntemleri.',
      duration: '4 dakika',
      difficulty: 'Kolay',
      color: 'text-red-500',
      bgColor: 'bg-red-50',
      steps: [
        'Mobil video indirme uygulaması indirin',
        'YouTube uygulamasından video linkini paylaşın',
        'İndirme uygulamasında linki açın',
        'Kalite ve format seçin',
        'Depolama izni verin',
        'İndirme işlemini tamamlayın'
      ]
    },
  ];

  const quickTips = [
    'En iyi kalite için 1080p veya 4K seçin',
    'Telif hakkı kurallarına dikkat edin',
    'Güvenilir programları tercih edin',
    'Düzenli olarak programları güncelleyin',
  ];

  const toggleTutorial = (tutorialId) => {
    setExpandedTutorial(expandedTutorial === tutorialId ? null : tutorialId);
  };

  return (
    <section id="tutorials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Adım Adım <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Rehberler</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Video indirme işlemlerini kolaylaştıran detaylı kılavuzlar. 
            Başlangıçtan ileri seviyeye tüm bilgiler burada.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {tutorials.map((tutorial, index) => {
            const Icon = tutorial.icon;
            const isExpanded = expandedTutorial === tutorial.id;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer"
                onClick={() => toggleTutorial(tutorial.id)}
              >
                <div className="flex items-start space-x-3">
                  <div className={`${tutorial.bgColor} p-2 rounded-lg group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className={`h-5 w-5 ${tutorial.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                        {tutorial.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        {isExpanded ? (
                          <ChevronUp className="h-4 w-4 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-gray-500" />
                        )}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-3 leading-relaxed text-sm">{tutorial.description}</p>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span className="text-xs text-gray-600">{tutorial.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          tutorial.difficulty === 'Kolay' ? 'bg-green-500' : 
                          tutorial.difficulty === 'Orta' ? 'bg-yellow-500' : 'bg-red-500'
                        }`}></div>
                        <span className="text-xs text-gray-600">{tutorial.difficulty}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full group-hover:bg-blue-100 transition-colors duration-200">
                    <Download className="h-4 w-4 text-gray-600 group-hover:text-blue-600" />
                  </div>
                </div>

                {/* Expandable Steps Section */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-gray-200 overflow-hidden"
                    >
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center space-x-2 text-sm">
                        <span>📋</span>
                        <span>Adım Adım Rehber:</span>
                      </h4>
                      <div className="space-y-2">
                        {tutorial.steps.map((step, stepIndex) => (
                          <motion.div
                            key={stepIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: stepIndex * 0.1 }}
                            className="flex items-start space-x-2"
                          >
                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                              {stepIndex + 1}
                            </div>
                            <span className="text-gray-700 leading-relaxed text-sm">{step}</span>
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                        <p className="text-xs text-blue-800">
                          💡 <strong>İpucu:</strong> Bu adımları takip ederek güvenli ve hızlı bir şekilde video indirebilirsiniz.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Compact Quick Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
            💡 Hızlı İpuçları
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {quickTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2"
              >
                <div className="w-5 h-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {index + 1}
                </div>
                <span className="text-gray-700 font-medium text-sm">{tip}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TutorialSection;
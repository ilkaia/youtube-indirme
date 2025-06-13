import React, { useEffect } from 'react';
import { PlayCircle, FileText, Smartphone, Monitor, Download, Clock, User, CheckCircle, Play, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import BackgroundEffects from './BackgroundEffects';

const TutorialsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=600',
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
      image: 'https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=600',
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
      image: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=600',
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
      image: 'https://images.pexels.com/photos/4050421/pexels-photo-4050421.jpeg?auto=compress&cs=tinysrgb&w=600',
      steps: [
        'Mobil video indirme uygulaması indirin',
        'YouTube uygulamasından video linkini paylaşın',
        'İndirme uygulamasında linki açın',
        'Kalite ve format seçin',
        'Depolama izni verin',
        'İndirme işlemini tamamlayın'
      ]
    }
  ];

  const quickTips = [
    {
      title: 'Kalite Seçimi',
      description: 'En iyi kalite için 1080p veya 4K seçin, ancak dosya boyutunu da göz önünde bulundurun.',
      icon: Monitor
    },
    {
      title: 'Yasal Uyarı',
      description: 'Telif hakkı korumalı içerikleri indirmeden önce yasal durumu kontrol edin.',
      icon: FileText
    },
    {
      title: 'Güvenlik',
      description: 'Sadece güvenilir programları kullanın ve antivirüs korumanızı aktif tutun.',
      icon: CheckCircle
    },
    {
      title: 'Güncellemeler',
      description: 'Programları düzenli olarak güncelleyin, böylece en son özellikleri kullanabilirsiniz.',
      icon: Download
    }
  ];

  const [selectedTutorial, setSelectedTutorial] = React.useState(null);

  const features = [
    { icon: Shield, text: '100% Güvenli' },
    { icon: Clock, text: 'Hızlı Öğrenme' },
    { icon: PlayCircle, text: 'Adım Adım' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-12 overflow-hidden">
        <BackgroundEffects />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <PlayCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Adım Adım
              </span>
              <br />
              Video İndirme Rehberleri
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
              Video indirme işlemlerini kolaylaştıran detaylı kılavuzlar. 
              Başlangıçtan ileri seviyeye tüm bilgiler burada.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <PlayCircle className="h-4 w-4" />
                <span>Rehberleri Keşfet</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/80 backdrop-blur-sm hover:bg-gray-50 text-gray-800 px-6 py-3 rounded-xl font-semibold text-base border-2 border-gray-200 hover:border-gray-300 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Play className="h-4 w-4" />
                <span>Video Rehberleri İzle</span>
              </motion.button>
            </div>

            {/* Compact Feature Pills */}
            <div className="flex flex-wrap justify-center gap-3">
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
                    <Icon className="h-4 w-4 text-green-600" />
                    <span className="font-medium text-gray-700 text-sm">{feature.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tutorials Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {tutorials.map((tutorial, index) => {
              const Icon = tutorial.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer"
                  onClick={() => setSelectedTutorial(selectedTutorial === tutorial.id ? null : tutorial.id)}
                >
                  <div className="flex items-start space-x-4">
                    <div className="relative overflow-hidden rounded-xl w-24 h-24 flex-shrink-0">
                      <img 
                        src={tutorial.image} 
                        alt={tutorial.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                          {tutorial.title}
                        </h3>
                        <div className={`${tutorial.bgColor} p-2 rounded-lg group-hover:scale-110 transition-transform duration-200`}>
                          <Icon className={`h-5 w-5 ${tutorial.color}`} />
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">{tutorial.description}</p>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4 text-blue-500" />
                          <span className="text-sm text-gray-600">{tutorial.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600">{tutorial.difficulty}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Steps */}
                  {selectedTutorial === tutorial.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 pt-6 border-t border-gray-200"
                    >
                      <h4 className="font-bold text-gray-900 mb-4">📋 Adım Adım Rehber:</h4>
                      <div className="space-y-3">
                        {tutorial.steps.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-start space-x-3">
                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                              {stepIndex + 1}
                            </div>
                            <span className="text-gray-700">{step}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              💡 Hızlı İpuçları
            </h2>
            <p className="text-xl text-gray-600">
              Video indirme işlemlerinizi daha verimli hale getiren önemli ipuçları.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickTips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="bg-white p-3 rounded-xl mb-4 inline-block">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{tip.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{tip.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ❓ Sık Sorulan Sorular
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'YouTube video indirmek yasal mı?',
                answer: 'Kişisel kullanım için telif hakkı olmayan videolar indirilebilir. Telif hakkı korumalı içerikleri indirmek yasaktır.'
              },
              {
                question: 'En iyi video kalitesi hangisi?',
                answer: '1080p HD çoğu kullanım için yeterlidir. 4K sadece büyük ekranlarda izleyecekseniz tercih edin.'
              },
              {
                question: 'Hangi format seçmeliyim?',
                answer: 'MP4 en uyumlu video formatıdır. Sadece ses için MP3, yüksek kalite ses için FLAC tercih edin.'
              },
              {
                question: 'İndirme hızı nasıl artırılır?',
                answer: 'Hızlı internet bağlantısı, premium program kullanımı ve diğer uygulamaları kapatmak hızı artırır.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center"
          >
            <h2 className="text-2xl font-bold mb-4">
              🚀 Hemen Başlayın!
            </h2>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Rehberlerimizi takip ederek güvenli ve hızlı video indirme deneyimi yaşayın. 
              En iyi araçları keşfedin ve profesyonel sonuçlar elde edin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold transition-colors duration-200">
                En İyi Programları Gör
              </button>
              <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200">
                Ücretsiz Araçları Dene
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TutorialsPage;
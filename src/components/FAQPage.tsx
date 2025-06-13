import React, { useEffect, useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageCircle, Play, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BackgroundEffects from './BackgroundEffects';

const FAQPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqData = [
    {
      id: 1,
      question: 'YouTube oynatma listesi indirme nasıl yapılır?',
      answer: 'YouTube oynatma listesi indirmek için premium programlar kullanmanız gerekir. 4K Video Downloader gibi programlar ile playlist URL\'sini kopyalayıp programa yapıştırın. Program tüm videoları otomatik olarak tespit edecek ve toplu indirme seçeneği sunacaktır.',
      category: 'Playlist'
    },
    {
      id: 2,
      question: 'YouTube video indirme nasıl SS?',
      answer: 'SS (SaveFrom) yöntemi için video URL\'sinde "youtube" kelimesinden önce "ss" ekleyin. Örneğin: "ssyoutube.com/watch?v=..." şeklinde. Bu sizi SaveFrom sitesine yönlendirecek ve video indirme seçenekleri sunacaktır.',
      category: 'Online Araçlar'
    },
    {
      id: 3,
      question: 'Cep telefonuna video nasıl indirilir?',
      answer: 'Mobil cihazlarda video indirmek için özel uygulamalar kullanabilirsiniz. Android için TubeMate, Snaptube gibi uygulamalar mevcuttur. iOS\'ta ise Documents by Readdle uygulaması ile online araçları kullanabilirsiniz.',
      category: 'Mobil'
    },
    {
      id: 4,
      question: 'YouTube kısa video nasıl indirilir?',
      answer: 'YouTube Shorts (kısa videolar) normal videolar gibi indirilebilir. Video URL\'sini kopyalayıp herhangi bir video indirme aracına yapıştırın. Çoğu modern araç Shorts formatını destekler.',
      category: 'Shorts'
    },
    {
      id: 5,
      question: 'YouTube nasıl ücretsiz indirilir?',
      answer: 'Ücretsiz indirme için online araçları kullanabilirsiniz: YT1D, SaveFrom.net, SSYouTube gibi siteler ücretsiz hizmet sunar. Ancak premium programlar daha hızlı ve güvenli sonuçlar verir.',
      category: 'Ücretsiz'
    },
    {
      id: 6,
      question: 'YouTube videolarını nasıl indirebilirim?',
      answer: 'Video indirmek için: 1) Video URL\'sini kopyalayın, 2) Güvenilir bir indirme aracı seçin, 3) URL\'yi araca yapıştırın, 4) Format ve kalite seçin, 5) İndir butonuna tıklayın. En güvenli yöntem premium programlar kullanmaktır.',
      category: 'Genel'
    },
    {
      id: 7,
      question: 'YouTube akıllı indirme nasıl yapılır?',
      answer: 'Akıllı indirme özelliği 4K Video Downloader gibi premium programlarda bulunur. Bu özellik ile favori kanallarınızı takip edebilir, yeni videolar otomatik olarak indirebilirsiniz. Smart Mode özelliğini aktifleştirin.',
      category: 'Premium'
    },
    {
      id: 8,
      question: 'YouTube\'dan Mp3 nasıl indiririm?',
      answer: 'MP3 indirmek için video indirme aracında format olarak MP3 seçin. Kalite seçeneklerinden 128kbps (normal) veya 320kbps (yüksek kalite) seçebilirsiniz. HitPaw Video Converter gibi programlar en iyi MP3 kalitesini sunar.',
      category: 'MP3'
    },
    {
      id: 9,
      question: 'YouTube\'dan nasıl video yükleyebilirim?',
      answer: 'Video yükleme (upload) için YouTube Creator Studio kullanın. İndirdiğiniz videoları tekrar yüklemek telif hakkı ihlali olabilir. Sadece kendi oluşturduğunuz veya izniniz olan içerikleri yükleyin.',
      category: 'Upload'
    },
    {
      id: 10,
      question: 'YouTube indirilen videolar internetsiz izlenir mi?',
      answer: 'Evet, indirilen videolar internetsiz izlenebilir. Videoları bilgisayarınıza veya telefonunuza indirdikten sonra internet bağlantısı olmadan izleyebilirsiniz. Bu, seyahat sırasında çok kullanışlıdır.',
      category: 'Offline'
    },
    {
      id: 11,
      question: 'Ücretsiz YouTube video indirme Programı hangisi?',
      answer: 'En iyi ücretsiz programlar: YTD Video Downloader (temel sürüm), 4K Video Downloader (sınırlı özellikler), Any Video Converter (ücretsiz sürüm). Tam özellikler için premium sürümleri tercih edin.',
      category: 'Ücretsiz'
    },
    {
      id: 12,
      question: 'İnternetsiz YouTube hangisi?',
      answer: 'YouTube Premium ile offline izleme yapabilirsiniz. Alternatif olarak, indirdiğiniz videoları VLC Media Player, KMPlayer gibi oynatıcılarla internetsiz izleyebilirsiniz.',
      category: 'Offline'
    },
    {
      id: 13,
      question: 'YouTube videolarını indirmek yasal mıdır?',
      answer: 'Kişisel kullanım için telif hakkı olmayan videolar indirilebilir. Telif hakkı korumalı içerikleri indirmek yasaktır. Eğitim amaçlı, kendi videolarınız veya Creative Commons lisanslı içerikler güvenle indirilebilir.',
      category: 'Yasal'
    }
  ];

  const categories = ['Tümü', 'Genel', 'Online Araçlar', 'Mobil', 'Premium', 'MP3', 'Ücretsiz', 'Offline', 'Yasal'];

  const [selectedCategory, setSelectedCategory] = useState('Tümü');

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tümü' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (faqId) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  const features = [
    { icon: Shield, text: '100% Güvenli' },
    { icon: HelpCircle, text: 'Detaylı Cevaplar' },
    { icon: MessageCircle, text: 'Uzman Desteği' },
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <HelpCircle className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Sık Sorulan
              </span>
              <br />
              Sorular
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
              YouTube video indirme hakkında merak ettiğiniz tüm soruların cevapları burada. 
              Uzmanlarımız tarafından hazırlanmış detaylı açıklamalar.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <HelpCircle className="h-4 w-4" />
                <span>Soruları Keşfet</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/80 backdrop-blur-sm hover:bg-gray-50 text-gray-800 px-6 py-3 rounded-xl font-semibold text-base border-2 border-gray-200 hover:border-gray-300 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Play className="h-4 w-4" />
                <span>Video Rehberleri</span>
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
                    <Icon className="h-4 w-4 text-blue-600" />
                    <span className="font-medium text-gray-700 text-sm">{feature.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-lg mb-8"
          >
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Sorularınızı arayın..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 rounded-xl transition-colors duration-200"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {faq.question}
                    </h3>
                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                      {faq.category}
                    </span>
                  </div>
                  <div className="ml-4">
                    {expandedFAQ === faq.id ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {expandedFAQ === faq.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 border-t border-gray-100">
                        <p className="text-gray-700 leading-relaxed pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Aradığınız soru bulunamadı
              </h3>
              <p className="text-gray-600">
                Farklı anahtar kelimeler deneyin veya kategori filtrelerini değiştirin.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center"
          >
            <MessageCircle className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">
              🤔 Sorunuz Burada Yok mu?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Aradığınız soruyu bulamadıysanız, uzman ekibimizle iletişime geçin. 
              Size özel çözümler sunmaktan mutluluk duyarız.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold transition-colors duration-200">
                Soru Sor
              </button>
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200">
                İletişime Geç
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
import React, { useEffect } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageCircle, Play, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import BackgroundEffects from './BackgroundEffects';

const FAQPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [expandedFAQ, setExpandedFAQ] = React.useState(null);
  const [searchTerm, setSearchTerm] = React.useState('');

  const faqCategories = [
    {
      title: 'Genel Sorular',
      icon: HelpCircle,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      questions: [
        {
          question: 'YouTube video indirmek yasal mı?',
          answer: 'Kişisel kullanım için telif hakkı olmayan videolar indirilebilir. Ancak telif hakkı korumalı içerikleri indirmek yasaktır. YouTube\'un kullanım şartlarına göre, platform dışında video indirmek genellikle yasaktır. Sadece kendi oluşturduğunuz içerikleri veya Creative Commons lisanslı videoları güvenle indirebilirsiniz.'
        },
        {
          question: 'En iyi video kalitesi hangisi?',
          answer: '1080p HD çoğu kullanım için yeterlidir. 4K sadece büyük ekranlarda izleyecekseniz ve yeterli depolama alanınız varsa tercih edin. 720p mobil cihazlar için idealdir. Dosya boyutu ve kalite arasında denge kurarak seçim yapın.'
        },
        {
          question: 'Hangi format seçmeliyim?',
          answer: 'MP4 en uyumlu video formatıdır ve tüm cihazlarda çalışır. Sadece ses için MP3, yüksek kalite ses için FLAC tercih edin. WEBM daha küçük dosya boyutu sunar ancak uyumluluk sınırlıdır.'
        },
        {
          question: 'İndirme hızı nasıl artırılır?',
          answer: 'Hızlı internet bağlantısı kullanın, premium program tercih edin, diğer uygulamaları kapatın ve VPN kullanmaktan kaçının. Ayrıca indirme sırasında bilgisayarınızı başka işler için kullanmamaya özen gösterin.'
        }
      ]
    },
    {
      title: 'Teknik Sorular',
      icon: Shield,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      questions: [
        {
          question: 'Program güvenli mi?',
          answer: 'Önerdiğimiz tüm programlar güvenlik testlerinden geçmiştir. Ancak sadece resmi web sitelerinden indirin, antivirüs korumanızı aktif tutun ve kurulum sırasında ek yazılım yüklemelerine dikkat edin.'
        },
        {
          question: 'Neden bazı videolar indirilmiyor?',
          answer: 'Yaş sınırı olan videolar, özel/gizli videolar, canlı yayınlar ve bazı telif hakkı korumalı içerikler indirilemeyebilir. Ayrıca YouTube\'un güvenlik önlemleri zaman zaman indirme işlemlerini engelleyebilir.'
        },
        {
          question: 'Playlist nasıl indirilir?',
          answer: 'Premium programlarda playlist URL\'sini yapıştırın ve toplu indirme seçeneğini seçin. Ücretsiz araçlarda genellikle her videoyu tek tek indirmeniz gerekir. 4K Video Downloader gibi programlar playlist desteği sunar.'
        },
        {
          question: 'Mobilde nasıl video indirilir?',
          answer: 'Android\'de Documents by Readdle, iPhone\'da Shortcuts uygulaması kullanılabilir. Ancak mobil indirme seçenekleri sınırlıdır ve genellikle bilgisayar programları daha etkilidir.'
        }
      ]
    },
    {
      title: 'Sorun Giderme',
      icon: MessageCircle,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      questions: [
        {
          question: 'İndirme durdu, ne yapmalıyım?',
          answer: 'İnternet bağlantınızı kontrol edin, programı yeniden başlatın, farklı bir sunucu seçin veya daha sonra tekrar deneyin. Bazen YouTube\'un sunucu yoğunluğu nedeniyle geçici sorunlar yaşanabilir.'
        },
        {
          question: 'Ses ve video senkronize değil?',
          answer: 'Farklı bir format seçin (MP4 önerilir), programı güncelleyin veya video oynatıcınızı değiştirin. VLC Media Player genellikle senkronizasyon sorunlarını çözer.'
        },
        {
          question: 'Dosya bozuk çıkıyor?',
          answer: 'İndirme işlemini tekrarlayın, farklı bir kalite seçin, internet bağlantınızın stabil olduğundan emin olun ve yeterli disk alanınız olduğunu kontrol edin.'
        },
        {
          question: 'Program açılmıyor?',
          answer: 'Yönetici olarak çalıştırmayı deneyin, antivirüs programınızı geçici olarak devre dışı bırakın, Windows Defender\'ı kontrol edin ve programı yeniden yükleyin.'
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const faqId = `${categoryIndex}-${questionIndex}`;
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
           q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const features = [
    { icon: Shield, text: 'Güvenilir Cevaplar' },
    { icon: HelpCircle, text: 'Detaylı Açıklamalar' },
    { icon: MessageCircle, text: 'Hızlı Destek' },
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
              Video indirme konusunda merak ettiğiniz her şey burada. 
              En sık sorulan soruların detaylı cevaplarını bulun.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <HelpCircle className="h-4 w-4" />
                <span>Cevapları Keşfet</span>
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

      {/* Search Section */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Sorularınızı arayın..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`${category.bgColor} p-3 rounded-xl`}>
                    <Icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                </div>

                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const faqId = `${categoryIndex}-${questionIndex}`;
                    const isExpanded = expandedFAQ === faqId;
                    
                    return (
                      <motion.div
                        key={questionIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: questionIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
                      >
                        <button
                          onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 rounded-xl transition-colors duration-200"
                        >
                          <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                          {isExpanded ? (
                            <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          )}
                        </button>
                        
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="px-6 pb-4 overflow-hidden"
                          >
                            <div className="pt-2 border-t border-gray-100">
                              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                            </div>
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}

          {filteredCategories.length === 0 && searchTerm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <HelpCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Aradığınız soru bulunamadı
              </h3>
              <p className="text-gray-600 mb-6">
                Farklı anahtar kelimeler deneyin veya bizimle iletişime geçin.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200">
                İletişime Geç
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
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
              💬 Sorunuz Burada Yok mu?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Aradığınız cevabı bulamadıysanız, uzman ekibimizle iletişime geçin. 
              Size özel çözümler sunmaktan mutluluk duyarız.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold transition-colors duration-200">
                Soru Sor
              </button>
              <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200">
                İletişim Sayfası
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
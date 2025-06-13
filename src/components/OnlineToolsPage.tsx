import React, { useEffect } from 'react';
import { Globe, ExternalLink, Star, Shield, Zap, Smartphone, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import BackgroundEffects from './BackgroundEffects';

const OnlineToolsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onlineTools = [
    {
      name: 'YT1D Online Downloader',
      description: 'Hızlı ve güvenilir online video indirme aracı. Program kurulumu gerektirmez, doğrudan tarayıcınızdan kullanabilirsiniz.',
      url: 'https://yt1d.com/en307/',
      features: [
        'Program Kurulumu Yok',
        'Hızlı İndirme',
        'Çoklu Format Desteği',
        'Ücretsiz Kullanım',
        'HD Kalite',
        'Mobil Uyumlu'
      ],
      pros: [
        'Çok hızlı indirme',
        'Kullanımı kolay arayüz',
        'Çoklu format seçeneği',
        'Reklam az'
      ],
      cons: [
        'İnternet bağlantısı gerekli',
        'Toplu indirme yok'
      ],
      badge: 'En Hızlı',
      badgeColor: 'bg-green-500',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.3,
      reviews: 5200,
      supportedFormats: ['MP4', 'MP3', 'WEBM', 'M4A'],
      maxQuality: '1080p HD'
    },
    {
      name: 'SSYouTube Online',
      description: 'Basit ve etkili online video indirme çözümü. Tek tıkla indirme imkanı sunan kullanıcı dostu platform.',
      url: 'https://ssyoutube.online/',
      features: [
        'Tek Tık İndirme',
        'Mobil Uyumlu',
        'HD Kalite',
        'Reklamsız Deneyim',
        'Hızlı İşlem',
        'Güvenli Bağlantı'
      ],
      pros: [
        'Çok basit kullanım',
        'Temiz arayüz',
        'Hızlı sonuç',
        'Mobil optimizasyon'
      ],
      cons: [
        'Sınırlı format seçeneği',
        'Playlist desteği yok'
      ],
      badge: 'En Basit',
      badgeColor: 'bg-blue-500',
      image: 'https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.1,
      reviews: 3800,
      supportedFormats: ['MP4', 'MP3'],
      maxQuality: '720p HD'
    },
    {
      name: 'SaveFrom.net',
      description: 'Güvenilir online video indirme platformu. Çoklu site desteği ve browser extension ile gelişmiş özellikler.',
      url: 'https://en1.savefrom.net/1-youtube-video-downloader-8jH/',
      features: [
        'Çoklu Site Desteği',
        'Browser Extension',
        'Güvenli İndirme',
        'Hızlı Erişim',
        'Kalite Seçenekleri',
        'Subtitle Desteği'
      ],
      pros: [
        'Çok güvenilir',
        'Browser extension',
        'Çoklu platform desteği',
        'Uzun süredir aktif'
      ],
      cons: [
        'Bazen yavaş olabiliyor',
        'Reklam içeriği var'
      ],
      badge: 'En Güvenilir',
      badgeColor: 'bg-red-500',
      image: 'https://images.pexels.com/photos/4050421/pexels-photo-4050421.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 4.4,
      reviews: 7600,
      supportedFormats: ['MP4', 'MP3', 'WEBM', 'FLV'],
      maxQuality: '1080p HD'
    },
  ];

  const usageSteps = [
    {
      step: 1,
      title: 'Video URL\'sini Kopyalayın',
      description: 'YouTube\'dan indirmek istediğiniz videonun linkini kopyalayın'
    },
    {
      step: 2,
      title: 'Online Araca Gidin',
      description: 'Yukarıdaki linklerden birini tıklayarak siteye gidin'
    },
    {
      step: 3,
      title: 'URL\'yi Yapıştırın',
      description: 'Kopyaladığınız linki arama kutusuna yapıştırın'
    },
    {
      step: 4,
      title: 'Format Seçin',
      description: 'İstediğiniz kalite ve formatı seçin (MP4, MP3, vb.)'
    },
    {
      step: 5,
      title: 'İndirin',
      description: 'İndir butonuna tıklayarak videoyu bilgisayarınıza kaydedin'
    }
  ];

  const features = [
    { icon: Shield, text: '100% Güvenli' },
    { icon: Clock, text: 'Hızlı İndirme' },
    { icon: Globe, text: 'Online Araçlar' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <Globe className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Ücretsiz Online
              </span>
              <br />
              Video İndirme Araçları
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
              Program kurulumu gerektirmeyen, doğrudan tarayıcınızdan kullanabileceğiniz 
              en iyi online video indirme araçları. Hızlı, güvenli ve ücretsiz.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Globe className="h-4 w-4" />
                <span>En İyi Online Araçları Keşfet</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/80 backdrop-blur-sm hover:bg-gray-50 text-gray-800 px-6 py-3 rounded-xl font-semibold text-base border-2 border-gray-200 hover:border-gray-300 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Shield className="h-4 w-4" />
                <span>Güvenlik Rehberini Gör</span>
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
                    <Icon className="h-4 w-4 text-green-600" />
                    <span className="font-medium text-gray-700 text-sm">{feature.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Online Tools Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {onlineTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group relative border-2 border-green-100 flex flex-col h-full"
              >
                {/* Badge */}
                <div className={`absolute top-4 right-4 ${tool.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold z-10`}>
                  {tool.badge}
                </div>

                {/* Free Badge */}
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  ÜCRETSİZ
                </div>

                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={tool.image} 
                    alt={tool.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  {/* Rating */}
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(tool.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{tool.rating}</span>
                    <span className="text-sm text-gray-500">({tool.reviews.toLocaleString()} kullanıcı)</span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tool.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed flex-grow">{tool.description}</p>

                  {/* Specs */}
                  <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-xs text-gray-500">Max Kalite</p>
                      <p className="font-semibold text-gray-900">{tool.maxQuality}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Formatlar</p>
                      <p className="font-semibold text-gray-900">{tool.supportedFormats.join(', ')}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6 flex-grow">
                    {tool.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom section with consistent positioning */}
                  <div className="mt-auto">
                    {/* CTA Button */}
                    <motion.a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 px-6 rounded-xl font-semibold text-center transition-all duration-200 flex items-center justify-center space-x-2 mb-4"
                    >
                      <Globe className="h-5 w-5" />
                      <span>Siteye Git & İndir</span>
                      <ExternalLink className="h-4 w-4" />
                    </motion.a>

                    {/* Trust Indicators */}
                    <div className="flex items-center justify-center space-x-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-1">
                        <Shield className="h-4 w-4 text-green-600" />
                        <span className="text-xs text-gray-600">Güvenli</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Smartphone className="h-4 w-4 text-blue-600" />
                        <span className="text-xs text-gray-600">Mobil</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Zap className="h-4 w-4 text-green-600" />
                        <span className="text-xs text-gray-600">Hızlı</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Guide */}
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
              📋 Nasıl Kullanılır?
            </h2>
            <p className="text-xl text-gray-600">
              Online araçları kullanarak video indirme işlemi çok basit. Adım adım rehber:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {usageSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-green-600 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ⚖️ Detaylı Karşılaştırma
            </h2>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-green-50 to-blue-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold text-gray-900">Özellik</th>
                    <th className="px-6 py-4 text-center font-bold text-gray-900">YT1D</th>
                    <th className="px-6 py-4 text-center font-bold text-gray-900">SSYouTube</th>
                    <th className="px-6 py-4 text-center font-bold text-gray-900">SaveFrom</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-100">
                    <td className="px-6 py-4 font-medium text-gray-900">Max Kalite</td>
                    <td className="px-6 py-4 text-center">1080p HD</td>
                    <td className="px-6 py-4 text-center">720p HD</td>
                    <td className="px-6 py-4 text-center">1080p HD</td>
                  </tr>
                  <tr className="border-t border-gray-100 bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Hız</td>
                    <td className="px-6 py-4 text-center">⚡⚡⚡</td>
                    <td className="px-6 py-4 text-center">⚡⚡</td>
                    <td className="px-6 py-4 text-center">⚡⚡</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="px-6 py-4 font-medium text-gray-900">Format Sayısı</td>
                    <td className="px-6 py-4 text-center">4</td>
                    <td className="px-6 py-4 text-center">2</td>
                    <td className="px-6 py-4 text-center">4</td>
                  </tr>
                  <tr className="border-t border-gray-100 bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Mobil Uyumluluk</td>
                    <td className="px-6 py-4 text-center">✅</td>
                    <td className="px-6 py-4 text-center">✅</td>
                    <td className="px-6 py-4 text-center">✅</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="px-6 py-4 font-medium text-gray-900">Browser Extension</td>
                    <td className="px-6 py-4 text-center">❌</td>
                    <td className="px-6 py-4 text-center">❌</td>
                    <td className="px-6 py-4 text-center">✅</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center"
          >
            <h2 className="text-2xl font-bold mb-4">💡 Online Araçlar İçin İpuçları</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="text-left">
                <h3 className="font-bold mb-2">✅ Yapılması Gerekenler:</h3>
                <ul className="space-y-1 text-blue-100">
                  <li>• Güvenilir siteleri tercih edin</li>
                  <li>• İnternet bağlantınızın stabil olduğundan emin olun</li>
                  <li>• Telif hakkı kurallarına uyun</li>
                  <li>• Antivirüs korumanızı aktif tutun</li>
                </ul>
              </div>
              <div className="text-left">
                <h3 className="font-bold mb-2">❌ Yapılmaması Gerekenler:</h3>
                <ul className="space-y-1 text-blue-100">
                  <li>• Şüpheli pop-up'lara tıklamayın</li>
                  <li>• Kişisel bilgilerinizi paylaşmayın</li>
                  <li>• Çok fazla reklam olan siteleri kullanmayın</li>
                  <li>• Bilinmeyen uzantıları indirmeyin</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OnlineToolsPage;
import React from 'react';
import { Star, Globe, ExternalLink, Shield, Smartphone, Zap, CheckCircle, Clock, User } from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturedTools = () => {
  const onlineTools = [
    {
      name: 'YT1D Online Downloader',
      description: 'Hızlı ve güvenilir online video indirme aracı. Program kurulumu gerektirmez.',
      url: 'https://yt1d.com/en307/',
      features: [
        'Program Kurulumu Yok',
        'Hızlı İndirme',
        'Çoklu Format Desteği',
        'Ücretsiz Kullanım'
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
      description: 'Basit ve etkili online video indirme çözümü. Tek tıkla indirme imkanı.',
      url: 'https://ssyoutube.online/',
      features: [
        'Tek Tık İndirme',
        'Mobil Uyumlu',
        'HD Kalite',
        'Reklamsız Deneyim'
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
      description: 'Güvenilir online video indirme platformu. Çoklu site desteği.',
      url: 'https://en1.savefrom.net/1-youtube-video-downloader-8jH/',
      features: [
        'Çoklu Site Desteği',
        'Browser Extension',
        'Güvenli İndirme',
        'Hızlı Erişim'
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

  return (
    <section id="tools" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
            <Globe className="h-6 w-6 text-green-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Ücretsiz Online
            </span>
            <br />
            Video İndirme Araçları
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Program kurulumu gerektirmeyen, doğrudan tarayıcınızdan kullanabileceğiniz 
            en iyi online video indirme araçları.
          </p>
        </motion.div>

        {/* Compact Online Tools Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {onlineTools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group relative border-2 border-green-100 flex flex-col h-full"
            >
              {/* Badge */}
              <div className={`absolute top-3 right-3 ${tool.badgeColor} text-white px-2 py-1 rounded-full text-xs font-semibold z-10`}>
                {tool.badge}
              </div>

              {/* Free Badge */}
              <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold z-10">
                ÜCRETSİZ
              </div>

              {/* Compact Image */}
              <div className="relative overflow-hidden h-36">
                <img 
                  src={tool.image} 
                  alt={tool.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <div className="p-4 flex flex-col flex-grow">
                {/* Compact Rating */}
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < Math.floor(tool.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-medium text-gray-700">{tool.rating}</span>
                  <span className="text-xs text-gray-500">({tool.reviews.toLocaleString()})</span>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tool.name}</h3>
                <p className="text-gray-600 mb-3 leading-relaxed flex-grow text-sm">{tool.description}</p>

                {/* Compact Specs */}
                <div className="grid grid-cols-2 gap-3 mb-3 p-2 bg-gray-50 rounded-lg text-xs">
                  <div>
                    <p className="text-gray-500">Max Kalite</p>
                    <p className="font-semibold text-gray-900">{tool.maxQuality}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Formatlar</p>
                    <p className="font-semibold text-gray-900">{tool.supportedFormats.slice(0, 2).join(', ')}</p>
                  </div>
                </div>

                {/* Compact Features */}
                <div className="space-y-1.5 mb-4 flex-grow">
                  {tool.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span className="text-xs text-gray-700">{feature}</span>
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
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-2.5 px-4 rounded-lg font-semibold text-center transition-all duration-200 flex items-center justify-center space-x-2 mb-3 text-sm"
                  >
                    <Globe className="h-4 w-4" />
                    <span>Siteye Git & İndir</span>
                    <ExternalLink className="h-3 w-3" />
                  </motion.a>

                  {/* Trust Indicators */}
                  <div className="flex items-center justify-center space-x-3 pt-3 border-t border-gray-100">
                    <div className="flex items-center space-x-1">
                      <Shield className="h-3 w-3 text-green-600" />
                      <span className="text-xs text-gray-600">Güvenli</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Smartphone className="h-3 w-3 text-blue-600" />
                      <span className="text-xs text-gray-600">Mobil</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Zap className="h-3 w-3 text-green-600" />
                      <span className="text-xs text-gray-600">Hızlı</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compact Usage Guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              📋 Nasıl Kullanılır?
            </h3>
            <p className="text-lg text-gray-600">
              Online araçları kullanarak video indirme işlemi çok basit.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {usageSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-green-600 to-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-3">
                  {step.step}
                </div>
                <h4 className="font-bold text-gray-900 mb-2 text-sm">{step.title}</h4>
                <p className="text-gray-600 text-xs">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Compact Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl p-6 text-white text-center"
        >
          <h3 className="text-xl font-bold mb-3">💡 Online Araçlar İçin İpuçları</h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto text-sm">
            <div className="text-left">
              <h4 className="font-bold mb-2">✅ Yapılması Gerekenler:</h4>
              <ul className="space-y-1 text-blue-100">
                <li>• Güvenilir siteleri tercih edin</li>
                <li>• İnternet bağlantınızın stabil olduğundan emin olun</li>
                <li>• Telif hakkı kurallarına uyun</li>
                <li>• Antivirüs korumanızı aktif tutun</li>
              </ul>
            </div>
            <div className="text-left">
              <h4 className="font-bold mb-2">❌ Yapılmaması Gerekenler:</h4>
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
  );
};

export default FeaturedTools;
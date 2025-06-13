import React, { useEffect } from 'react';
import { Download, Star, Shield, Zap, ExternalLink, Award, CheckCircle, X, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import BackgroundEffects from './BackgroundEffects';

const PremiumToolsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const premiumTools = [
    {
      name: '4K Video Downloader',
      description: 'En popüler ve güvenilir video indirme programı. 4K ve 8K videolar desteklenir, playlist indirme özelliği ile toplu işlemler yapabilirsiniz.',
      rating: 4.8,
      reviews: 12500,
      price: '₺89.99',
      originalPrice: '₺149.99',
      features: [
        '4K/8K Video Desteği',
        'Batch İndirme',
        'Subtitle Desteği',
        'Playlist İndirme',
        'Smart Mode',
        'In-App Proxy'
      ],
      pros: [
        'Çok yüksek kalite desteği',
        'Kullanımı kolay arayüz',
        'Düzenli güncellemeler',
        'Mükemmel müşteri desteği'
      ],
      cons: [
        'Ücretli yazılım',
        'Bazı özellikler Pro sürümde'
      ],
      badge: 'En Popüler',
      badgeColor: 'bg-blue-500',
      image: 'https://images.pexels.com/photos/6784999/pexels-photo-6784999.jpeg?auto=compress&cs=tinysrgb&w=600',
      affiliate: true,
      platforms: ['Windows', 'Mac', 'Linux'],
      fileSize: '85 MB',
      languages: ['Türkçe', 'İngilizce', '20+ Dil']
    },
    {
      name: 'HitPaw Video Converter',
      description: 'Profesyonel video dönüştürme ve indirme aracı. 1000+ format desteği ve AI enhancement teknolojisi ile videolarınızı geliştirin.',
      rating: 4.7,
      reviews: 8300,
      price: '₺79.99',
      originalPrice: '₺119.99',
      features: [
        '1000+ Format Desteği',
        'AI Enhancement',
        'Hızlı Dönüştürme',
        'Batch İşleme',
        'Video Editing',
        'GPU Acceleration'
      ],
      pros: [
        'Çok geniş format desteği',
        'AI teknolojisi',
        'Hızlı işlem',
        'Video düzenleme özellikleri'
      ],
      cons: [
        'Yüksek sistem gereksinimleri',
        'Öğrenme eğrisi var'
      ],
      badge: 'Editör Seçimi',
      badgeColor: 'bg-green-500',
      image: 'https://images.pexels.com/photos/4473775/pexels-photo-4473775.jpeg?auto=compress&cs=tinysrgb&w=600',
      affiliate: true,
      platforms: ['Windows', 'Mac'],
      fileSize: '120 MB',
      languages: ['Türkçe', 'İngilizce', '15+ Dil']
    },
    {
      name: 'Wondershare UniConverter',
      description: 'All-in-one video çözümü. İndirme, düzenleme ve dönüştürme bir arada. DVD creator ve screen recorder özellikleri ile kapsamlı paket.',
      rating: 4.6,
      reviews: 15200,
      price: '₺99.99',
      originalPrice: '₺159.99',
      features: [
        'Video Editing',
        'DVD Creator',
        'Screen Recorder',
        'CD/DVD Burn',
        'Toolbox',
        'Batch Processing'
      ],
      pros: [
        'Çok kapsamlı özellikler',
        'Profesyonel kalite',
        'Güçlü düzenleme araçları',
        'Uzun süredir güvenilir'
      ],
      cons: [
        'Pahalı seçenek',
        'Karmaşık arayüz'
      ],
      badge: 'En Kapsamlı',
      badgeColor: 'bg-purple-500',
      image: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=600',
      affiliate: true,
      platforms: ['Windows', 'Mac'],
      fileSize: '200 MB',
      languages: ['Türkçe', 'İngilizce', '25+ Dil']
    },
    {
      name: 'YTD Video Downloader',
      description: 'Basit ve etkili video indirme programı. Hızlı indirme ve kolay kullanım odaklı tasarım ile günlük kullanım için ideal.',
      rating: 4.2,
      reviews: 6800,
      price: '₺49.99',
      originalPrice: '₺79.99',
      features: [
        'Hızlı İndirme',
        'Basit Arayüz',
        'Multiple Sites',
        'Format Conversion',
        'Playlist Support',
        'Resume Downloads'
      ],
      pros: [
        'Çok uygun fiyat',
        'Basit kullanım',
        'Hızlı kurulum',
        'Az sistem kaynağı'
      ],
      cons: [
        'Sınırlı özellikler',
        'Eski tasarım'
      ],
      badge: 'En Uygun',
      badgeColor: 'bg-orange-500',
      image: 'https://images.pexels.com/photos/4050421/pexels-photo-4050421.jpeg?auto=compress&cs=tinysrgb&w=600',
      affiliate: true,
      platforms: ['Windows'],
      fileSize: '45 MB',
      languages: ['İngilizce', '10+ Dil']
    },
    {
      name: 'VideoProc Converter',
      description: 'GPU hızlandırmalı video işleme yazılımı. 4K video indirme, düzenleme ve dönüştürme işlemlerini hızlandırır.',
      rating: 4.5,
      reviews: 9200,
      price: '₺129.99',
      originalPrice: '₺199.99',
      features: [
        'GPU Acceleration',
        '4K Processing',
        'Video Editing',
        'Screen Recording',
        'DVD Backup',
        'Live Streaming'
      ],
      pros: [
        'GPU hızlandırma',
        'Çok hızlı işlem',
        'Kaliteli sonuçlar',
        'Profesyonel özellikler'
      ],
      cons: [
        'Yüksek fiyat',
        'Karmaşık ayarlar'
      ],
      badge: 'En Hızlı',
      badgeColor: 'bg-red-500',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=600',
      affiliate: true,
      platforms: ['Windows', 'Mac'],
      fileSize: '95 MB',
      languages: ['Türkçe', 'İngilizce', '12+ Dil']
    },
    {
      name: 'Any Video Converter',
      description: 'Çok amaçlı video dönüştürücü ve indirici. Geniş format desteği ve kullanıcı dostu arayüz ile her seviyeden kullanıcı için uygun.',
      rating: 4.3,
      reviews: 11500,
      price: '₺69.99',
      originalPrice: '₺99.99',
      features: [
        'Wide Format Support',
        'Video Editing',
        'Batch Conversion',
        'DVD Burning',
        'Online Download',
        'Mobile Presets'
      ],
      pros: [
        'Geniş format desteği',
        'Uygun fiyat',
        'Kolay kullanım',
        'Düzenli güncellemeler'
      ],
      cons: [
        'Orta seviye özellikler',
        'Bazen yavaş olabiliyor'
      ],
      badge: 'Değer',
      badgeColor: 'bg-teal-500',
      image: 'https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=600',
      affiliate: true,
      platforms: ['Windows', 'Mac'],
      fileSize: '75 MB',
      languages: ['Türkçe', 'İngilizce', '18+ Dil']
    },
  ];

  const comparisonFeatures = [
    { name: '4K/8K Desteği', tools: [true, true, true, false, true, false] },
    { name: 'Playlist İndirme', tools: [true, true, true, true, false, true] },
    { name: 'Batch İşleme', tools: [true, true, true, false, true, true] },
    { name: 'Video Düzenleme', tools: [false, true, true, false, true, true] },
    { name: 'GPU Hızlandırma', tools: [false, true, false, false, true, false] },
    { name: 'Subtitle Desteği', tools: [true, false, true, false, false, false] },
    { name: 'Türkçe Dil', tools: [true, true, true, false, true, true] },
  ];

  const features = [
    { icon: Shield, text: '100% Güvenli' },
    { icon: Zap, text: 'Süper Hızlı' },
    { icon: Award, text: 'Premium Kalite' },
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
              <Download className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Premium
              </span>
              <br />
              Video İndirme Programları
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
              Profesyonel kalitede video indirme deneyimi için en iyi premium yazılımlar. 
              4K/8K desteği, toplu indirme ve gelişmiş özellikler.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Download className="h-4 w-4" />
                <span>En İyi Premium Programları Keşfet</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/80 backdrop-blur-sm hover:bg-gray-50 text-gray-800 px-6 py-3 rounded-xl font-semibold text-base border-2 border-gray-200 hover:border-gray-300 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Play className="h-4 w-4" />
                <span>Karşılaştırma Tablosunu Gör</span>
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

      {/* Premium Tools Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {premiumTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group relative"
              >
                {/* Badge */}
                <div className={`absolute top-4 right-4 ${tool.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold z-10`}>
                  {tool.badge}
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

                <div className="p-6">
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
                    <span className="text-sm text-gray-500">({tool.reviews.toLocaleString()})</span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tool.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">{tool.description}</p>

                  {/* Specs */}
                  <div className="grid grid-cols-2 gap-3 mb-4 p-3 bg-gray-50 rounded-lg text-xs">
                    <div>
                      <p className="text-gray-500">Platform</p>
                      <p className="font-semibold text-gray-900">{tool.platforms.join(', ')}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Boyut</p>
                      <p className="font-semibold text-gray-900">{tool.fileSize}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {tool.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center space-x-3 mb-6">
                    <span className="text-2xl font-bold text-gray-900">{tool.price}</span>
                    <span className="text-lg text-gray-500 line-through">{tool.originalPrice}</span>
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-semibold">
                      İndirim
                    </span>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-6 rounded-xl font-semibold text-center transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                      <Download className="h-5 w-5" />
                      <span>Şimdi İndir</span>
                    </motion.button>
                    
                    <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-6 rounded-xl font-medium transition-colors duration-200 flex items-center justify-center space-x-2">
                      <ExternalLink className="h-4 w-4" />
                      <span>Detaylı İnceleme</span>
                    </button>
                  </div>

                  {/* Trust Indicators */}
                  <div className="flex items-center justify-center space-x-4 mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-1">
                      <Shield className="h-4 w-4 text-green-600" />
                      <span className="text-xs text-gray-600">Güvenli</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Zap className="h-4 w-4 text-blue-600" />
                      <span className="text-xs text-gray-600">Hızlı</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="h-4 w-4 text-yellow-500" />
                      <span className="text-xs text-gray-600">Premium</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
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
              📊 Detaylı Özellik Karşılaştırması
            </h2>
            <p className="text-xl text-gray-600">
              Tüm premium programların özelliklerini karşılaştırın ve size en uygun olanı seçin.
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-50 to-purple-50">
                  <tr>
                    <th className="px-4 py-4 text-left font-bold text-gray-900">Özellik</th>
                    {premiumTools.map((tool, index) => (
                      <th key={index} className="px-3 py-4 text-center font-bold text-gray-900 text-sm">
                        {tool.name.split(' ')[0]}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={index} className={`border-t border-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                      <td className="px-4 py-3 font-medium text-gray-900">{feature.name}</td>
                      {feature.tools.map((hasFeature, toolIndex) => (
                        <td key={toolIndex} className="px-3 py-3 text-center">
                          {hasFeature ? (
                            <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-400 mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Why Premium Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              🏆 Neden Premium Program Seçmelisiniz?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Güvenlik',
                description: 'Virüs ve malware koruması, güvenli indirme'
              },
              {
                icon: Zap,
                title: 'Hız',
                description: 'Çok daha hızlı indirme, GPU hızlandırma'
              },
              {
                icon: Star,
                title: 'Kalite',
                description: '4K/8K desteği, kayıpsız kalite'
              },
              {
                icon: Award,
                title: 'Destek',
                description: '7/24 teknik destek, düzenli güncellemeler'
              }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-white/20 p-4 rounded-xl mb-4 inline-block">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{benefit.title}</h3>
                  <p className="text-blue-100">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PremiumToolsPage;
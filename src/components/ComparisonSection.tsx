import React from 'react';
import { Check, X, Star, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const ComparisonSection = () => {
  const comparisonData = [
    {
      feature: 'Video Kalitesi',
      free: '720p Max',
      premium: '4K/8K',
      winner: 'premium'
    },
    {
      feature: 'İndirme Hızı',
      free: 'Yavaş',
      premium: 'Süper Hızlı',
      winner: 'premium'
    },
    {
      feature: 'Playlist Desteği',
      free: false,
      premium: true,
      winner: 'premium'
    },
    {
      feature: 'Reklam',
      free: 'Çok Fazla',
      premium: 'Yok',
      winner: 'premium'
    },
    {
      feature: 'Güvenlik',
      free: 'Risk Var',
      premium: '100% Güvenli',
      winner: 'premium'
    },
    {
      feature: 'Teknik Destek',
      free: false,
      premium: true,
      winner: 'premium'
    }
  ];

  const popularTools = [
    {
      name: '4K Video Downloader',
      rating: 4.8,
      price: '₺89.99',
      features: ['4K/8K', 'Playlist', 'Subtitle', 'No Ads'],
      recommended: true
    },
    {
      name: 'HitPaw Converter',
      rating: 4.7,
      price: '₺79.99',
      features: ['1000+ Format', 'AI Enhancement', 'Batch Processing'],
      recommended: false
    },
    {
      name: 'Online Tools',
      rating: 3.2,
      price: 'Ücretsiz',
      features: ['Basic Quality', 'Ads', 'Limited Downloads'],
      recommended: false
    }
  ];

  return (
    <section id="comparisons" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Ücretsiz</span> vs <span className="bg-gradient-to-r from-purple-600 to-red-600 bg-clip-text text-transparent">Premium</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ücretsiz ve premium video indirme araçları arasındaki farkları keşfedin. 
            Hangi seçeneğin size uygun olduğunu öğrenin.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16"
        >
          <div className="grid grid-cols-3 bg-gradient-to-r from-gray-50 to-blue-50">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">Özellikler</h3>
            </div>
            <div className="p-6 text-center border-l border-gray-200">
              <h3 className="text-xl font-bold text-green-600">Ücretsiz Araçlar</h3>
            </div>
            <div className="p-6 text-center border-l border-gray-200 bg-gradient-to-r from-blue-500 to-purple-600">
              <h3 className="text-xl font-bold text-white flex items-center justify-center space-x-2">
                <Award className="h-5 w-5" />
                <span>Premium Araçlar</span>
              </h3>
            </div>
          </div>

          {comparisonData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`grid grid-cols-3 border-t border-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
            >
              <div className="p-4 font-medium text-gray-900">
                {item.feature}
              </div>
              <div className="p-4 text-center border-l border-gray-200">
                {typeof item.free === 'boolean' ? (
                  item.free ? (
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  ) : (
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  )
                ) : (
                  <span className={item.winner === 'premium' ? 'text-gray-500' : 'text-green-600 font-semibold'}>
                    {item.free}
                  </span>
                )}
              </div>
              <div className="p-4 text-center border-l border-gray-200">
                {typeof item.premium === 'boolean' ? (
                  item.premium ? (
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  ) : (
                    <X className="h-5 w-5 text-red-500 mx-auto" />
                  )
                ) : (
                  <span className={item.winner === 'premium' ? 'text-blue-600 font-semibold' : 'text-gray-500'}>
                    {item.premium}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Popular Tools Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            En Popüler Araçlar Karşılaştırması
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {popularTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl p-6 shadow-lg relative ${
                  tool.recommended ? 'ring-2 ring-blue-500 ring-offset-2' : ''
                }`}
              >
                {tool.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      En İyi Seçim
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{tool.name}</h4>
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(tool.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">{tool.rating}</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">{tool.price}</div>
                </div>

                <div className="space-y-3 mb-6">
                  {tool.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${
                  tool.recommended
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}>
                  {tool.recommended ? 'Şimdi İndir' : 'Detayları Gör'}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            Hangi Seçenek Size Uygun?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Kişiselleştirilmiş öneriler için ücretsiz değerlendirmemizi yapın ve 
            ihtiyaçlarınıza en uygun aracı bulun.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition-colors duration-200">
            Ücretsiz Değerlendirme Başlat
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
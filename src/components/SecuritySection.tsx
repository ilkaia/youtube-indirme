import React from 'react';
import { Shield, AlertTriangle, CheckCircle, Lock, Eye, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const SecuritySection = () => {
  const securityTips = [
    {
      icon: Shield,
      title: 'Güvenilir Kaynaklardan İndirin',
      description: 'Sadece resmi web sitelerinden veya güvenilir platformlardan program indirin.',
      type: 'safe',
    },
    {
      icon: Lock,
      title: 'Antivirüs Koruması Kullanın',
      description: 'İndirdiğiniz dosyaları antivirüs programıyla taratın.',
      type: 'safe',
    },
    {
      icon: Eye,
      title: 'Kurulum Sırasında Dikkatli Olun',
      description: 'Ek yazılım yüklemelerine dikkat edin, gereksiz programları reddedin.',
      type: 'warning',
    },
    {
      icon: AlertTriangle,
      title: 'Şüpheli Siteleri Önletin',
      description: 'Pop-up reklamlar ve şüpheli bağlantılara tık yapmaktan kaçının.',
      type: 'danger',
    },
  ];

  const trustedSources = [
    {
      name: '4K Video Downloader',
      website: 'www.4kdownload.com',
      verified: true,
      rating: 5,
    },
    {
      name: 'HitPaw Video Converter',
      website: 'www.hitpaw.com',
      verified: true,
      rating: 5,
    },
    {
      name: 'Wondershare UniConverter',
      website: 'www.wondershare.com',
      verified: true,
      rating: 4,
    },
  ];

  const warningsList = [
    'Ücretsiz programlar genellikle reklam içerir',
    'Bilinmeyen kaynaklardan indirme yapmayın',
    'Telif hakkı kurallarına uygun hareket edin',
    'Kişisel bilgilerinizi paylaşmayın',
    'Düzenli güvenlik güncellemeleri yapın',
  ];

  return (
    <section id="security" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <Shield className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Güvenlik</span> Rehberi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Video indirme işlemlerinde güvenliğinizi korumak için bilmeniz gereken 
            önemli ipuçları ve önlemler.
          </p>
        </motion.div>

        {/* Security Tips */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {securityTips.map((tip, index) => {
            const Icon = tip.icon;
            const colorClasses = {
              safe: 'text-green-600 bg-green-50 border-green-200',
              warning: 'text-yellow-600 bg-yellow-50 border-yellow-200',
              danger: 'text-red-600 bg-red-50 border-red-200',
            };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl border-2 ${colorClasses[tip.type]} transition-all duration-300 hover:shadow-lg`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Icon className={`h-8 w-8 ${colorClasses[tip.type].split(' ')[0]}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{tip.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{tip.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trusted Sources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            ✅ Güvenilir Kaynaklar
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {trustedSources.map((source, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-gray-900">{source.name}</h4>
                  {source.verified && (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-3">{source.website}</p>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full ${
                        i < source.rating ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Warning Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 mb-12"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              ⚠️ Önemli Uyarılar
            </h3>
            <p className="text-gray-600 mt-2">
              Güvenliğiniz için mutlaka dikkat etmeniz gereken konular
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {warningsList.map((warning, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">{warning}</span>
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
          className="text-center bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white"
        >
          <Shield className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">
            Güvenli İndirme Garantisi
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Önerdiğimiz tüm programlar güvenlik testlerinden geçmiştir. 
            Güvenilir kaynaklardan indirme yaparak riskleri minimize edin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center space-x-2">
              <Download className="h-5 w-5" />
              <span>Güvenli Programları Gör</span>
            </button>
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200">
              Güvenlik Rehberini İndir
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecuritySection;
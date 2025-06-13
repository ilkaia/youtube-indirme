import React, { useEffect } from 'react';
import { Cookie, Settings, Eye, BarChart3, Target, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import BackgroundEffects from './BackgroundEffects';

const CookiePolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cookieTypes = [
    {
      title: 'Zorunlu Çerezler',
      icon: Shield,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      description: 'Sitenin temel işlevleri için gerekli çerezler',
      examples: [
        'Oturum yönetimi çerezleri',
        'Güvenlik çerezleri',
        'Dil tercihi çerezleri',
        'Çerez onay durumu'
      ],
      canDisable: false
    },
    {
      title: 'Analitik Çerezler',
      icon: BarChart3,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      description: 'Site performansını ölçmek için kullanılan çerezler',
      examples: [
        'Google Analytics çerezleri',
        'Sayfa görüntüleme istatistikleri',
        'Kullanıcı davranış analizi',
        'Site hızı ölçümleri'
      ],
      canDisable: true
    },
    {
      title: 'Reklam Çerezleri',
      icon: Target,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      description: 'Kişiselleştirilmiş reklamlar için kullanılan çerezler',
      examples: [
        'Google AdSense çerezleri',
        'Reklam tercihleri',
        'Hedefleme çerezleri',
        'Affiliate takip çerezleri'
      ],
      canDisable: true
    },
    {
      title: 'İşlevsel Çerezler',
      icon: Settings,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      description: 'Gelişmiş site özellikleri için kullanılan çerezler',
      examples: [
        'Tema tercihleri',
        'Form verileri',
        'Sosyal medya entegrasyonu',
        'Video oynatıcı ayarları'
      ],
      canDisable: true
    }
  ];

  const thirdPartyServices = [
    {
      name: 'Google Analytics',
      purpose: 'Site trafiği analizi',
      dataCollected: 'IP adresi, tarayıcı bilgisi, sayfa görüntülemeleri',
      retention: '26 ay',
      optOut: 'https://tools.google.com/dlpage/gaoptout'
    },
    {
      name: 'Google AdSense',
      purpose: 'Reklam gösterimi',
      dataCollected: 'Reklam etkileşimleri, ilgi alanları',
      retention: '24 ay',
      optOut: 'https://adssettings.google.com'
    },
    {
      name: 'YouTube',
      purpose: 'Video içerik gösterimi',
      dataCollected: 'Video izleme tercihleri',
      retention: 'YouTube politikasına göre',
      optOut: 'YouTube ayarlarından'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-12 overflow-hidden">
        <BackgroundEffects />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
              <Cookie className="h-8 w-8 text-orange-600" />
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Çerez Politikası
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
              Sitemizde kullanılan çerezler hakkında detaylı bilgi ve 
              tercihlerinizi nasıl yönetebileceğiniz.
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
              <p className="text-orange-800 text-sm">
                <strong>Çerez Nedir?</strong> Çerezler, web sitelerinin tarayıcınızda sakladığı küçük metin dosyalarıdır.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🍪 Çerez Türleri
            </h2>
            <p className="text-xl text-gray-600">
              Sitemizde kullanılan farklı çerez türleri ve amaçları.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {cookieTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`${type.bgColor} p-3 rounded-xl`}>
                        <Icon className={`h-6 w-6 ${type.color}`} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{type.title}</h3>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      type.canDisable 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {type.canDisable ? 'İsteğe Bağlı' : 'Zorunlu'}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Örnekler:</h4>
                    {type.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <span className="text-sm text-gray-700">{example}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Third Party Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🔗 Üçüncü Taraf Hizmetler
            </h2>
            <p className="text-xl text-gray-600">
              Sitemizde kullanılan dış hizmetler ve çerez politikaları.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Hizmet</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Amaç</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Toplanan Veri</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Saklama Süresi</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Devre Dışı Bırakma</th>
                </tr>
              </thead>
              <tbody>
                {thirdPartyServices.map((service, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`border-t border-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                  >
                    <td className="px-6 py-4 font-semibold text-gray-900">{service.name}</td>
                    <td className="px-6 py-4 text-gray-700">{service.purpose}</td>
                    <td className="px-6 py-4 text-gray-700 text-sm">{service.dataCollected}</td>
                    <td className="px-6 py-4 text-gray-700">{service.retention}</td>
                    <td className="px-6 py-4">
                      <a 
                        href={service.optOut} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm underline"
                      >
                        Ayarlar
                      </a>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cookie Management */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ⚙️ Çerez Yönetimi
            </h2>
            <p className="text-xl text-gray-600">
              Çerez tercihlerinizi nasıl yönetebileceğiniz hakkında rehber.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-blue-50 rounded-xl p-6"
            >
              <h3 className="font-bold text-blue-800 mb-4 flex items-center space-x-2">
                <Settings className="h-6 w-6" />
                <span>Tarayıcı Ayarları</span>
              </h3>
              <div className="space-y-3 text-blue-700">
                <p>• Chrome: Ayarlar → Gizlilik ve güvenlik → Çerezler</p>
                <p>• Firefox: Ayarlar → Gizlilik ve güvenlik</p>
                <p>• Safari: Tercihler → Gizlilik</p>
                <p>• Edge: Ayarlar → Çerezler ve site izinleri</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-green-50 rounded-xl p-6"
            >
              <h3 className="font-bold text-green-800 mb-4 flex items-center space-x-2">
                <Eye className="h-6 w-6" />
                <span>Site Ayarları</span>
              </h3>
              <div className="space-y-3 text-green-700">
                <p>• Çerez banner'ından tercihlerinizi seçin</p>
                <p>• İsteğe bağlı çerezleri devre dışı bırakın</p>
                <p>• Ayarlarınızı istediğiniz zaman değiştirin</p>
                <p>• Zorunlu çerezler her zaman aktiftir</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white text-center"
          >
            <Cookie className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">
              🍪 Çerez Soruları
            </h2>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              Çerez kullanımımız hakkında sorularınız varsa, 
              veri koruma ekibimizle iletişime geçin.
            </p>
            <div className="bg-white/20 rounded-xl p-4 max-w-md mx-auto">
              <p className="font-semibold">cookies@youtube-indirme.com.tr</p>
              <p className="text-sm text-orange-100 mt-1">
                Yanıt süresi: 24 saat içinde
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicyPage;
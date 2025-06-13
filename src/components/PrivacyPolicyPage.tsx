import React, { useEffect } from 'react';
import { Shield, Eye, Lock, FileText, AlertCircle, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import BackgroundEffects from './BackgroundEffects';

const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: 'Toplanan Bilgiler',
      icon: Eye,
      content: [
        'Kişisel bilgiler (ad, e-posta adresi) sadece iletişim formları aracılığıyla toplanır',
        'Google Analytics aracılığıyla anonim kullanım verileri toplanır',
        'Çerezler aracılığıyla site tercihleri ve oturum bilgileri saklanır',
        'IP adresleri güvenlik amaçlı geçici olarak loglanır'
      ]
    },
    {
      title: 'Bilgilerin Kullanımı',
      icon: Lock,
      content: [
        'Kişisel bilgiler sadece sizinle iletişim kurmak için kullanılır',
        'E-posta adresiniz üçüncü taraflarla paylaşılmaz',
        'Anonim veriler site performansını iyileştirmek için kullanılır',
        'Hiçbir kişisel bilgi satılmaz veya kiralanmaz'
      ]
    },
    {
      title: 'Çerez Kullanımı',
      icon: FileText,
      content: [
        'Site işlevselliği için gerekli çerezler kullanılır',
        'Google Analytics çerezleri site analitiği için kullanılır',
        'Reklam çerezleri kişiselleştirilmiş reklamlar için kullanılabilir',
        'Çerez tercihlerinizi tarayıcı ayarlarından yönetebilirsiniz'
      ]
    },
    {
      title: 'Veri Güvenliği',
      icon: Shield,
      content: [
        'Tüm veriler SSL şifreleme ile korunur',
        'Güvenli sunucularda saklanır ve düzenli olarak yedeklenir',
        'Yetkisiz erişime karşı teknik önlemler alınmıştır',
        'Veri ihlali durumunda derhal bilgilendirilirsiniz'
      ]
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Gizlilik Politikası
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
              Kişisel verilerinizin korunması bizim için çok önemlidir. 
              Bu politika, bilgilerinizi nasıl topladığımızı ve kullandığımızı açıklar.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-blue-800 text-sm">
                <strong>Son Güncelleme:</strong> 1 Ocak 2025 | 
                <strong> Yürürlük Tarihi:</strong> 1 Ocak 2025
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                  </div>
                  <div className="space-y-3">
                    {section.content.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GDPR Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🇪🇺 GDPR Uyumluluğu
            </h2>
            <p className="text-xl text-gray-600">
              Avrupa Birliği Genel Veri Koruma Yönetmeliği'ne tam uyumluyuz.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="font-bold text-green-800 mb-4">Haklarınız</h3>
              <ul className="space-y-2 text-green-700">
                <li>• Verilerinize erişim hakkı</li>
                <li>• Verilerin düzeltilmesi hakkı</li>
                <li>• Verilerin silinmesi hakkı</li>
                <li>• Veri taşınabilirliği hakkı</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-bold text-blue-800 mb-4">İletişim</h3>
              <p className="text-blue-700 mb-2">
                Veri koruma ile ilgili sorularınız için:
              </p>
              <p className="text-blue-800 font-semibold">
                privacy@youtube-indirme.com.tr
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center"
          >
            <AlertCircle className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">
              Sorularınız mı Var?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Gizlilik politikamız hakkında herhangi bir sorunuz varsa, 
              bizimle iletişime geçmekten çekinmeyin.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold transition-colors duration-200">
              İletişime Geç
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
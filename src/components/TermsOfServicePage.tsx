import React, { useEffect } from 'react';
import { FileText, AlertTriangle, Scale, Shield, CheckCircle, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import BackgroundEffects from './BackgroundEffects';

const TermsOfServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: 'Hizmet Kapsamı',
      icon: FileText,
      content: [
        'Bu site sadece eğitim amaçlı bilgi ve rehberler sunar',
        'Hiçbir video indirme işlemi bu site üzerinden gerçekleştirilmez',
        'Üçüncü taraf programlara yönlendirme ve inceleme hizmeti verilir',
        'Affiliate bağlantılar aracılığıyla komisyon kazanılabilir'
      ]
    },
    {
      title: 'Kullanıcı Sorumlulukları',
      icon: Scale,
      content: [
        'Telif hakkı kurallarına uymak kullanıcının sorumluluğundadır',
        'Önerilen programları kendi riskinizle kullanırsınız',
        'Yasal olmayan içerik indirmek yasaktır',
        'Site içeriğini ticari amaçla kullanmak yasaktır'
      ]
    },
    {
      title: 'Sorumluluk Reddi',
      icon: Shield,
      content: [
        'Üçüncü taraf programların güvenliği garanti edilmez',
        'İndirme işlemlerinden doğan zararlardan sorumlu değiliz',
        'Site içeriği "olduğu gibi" sunulur',
        'Hizmet kesintilerinden sorumlu tutulamayız'
      ]
    },
    {
      title: 'Fikri Mülkiyet',
      icon: AlertTriangle,
      content: [
        'Site içeriği telif hakkı ile korunmaktadır',
        'İzinsiz kopyalama ve dağıtım yasaktır',
        'Marka ve logolar sahiplerinin mülkiyetindedir',
        'Adil kullanım ilkeleri çerçevesinde alıntı yapılabilir'
      ]
    }
  ];

  const allowedUses = [
    'Kişisel eğitim amaçlı kullanım',
    'Telif hakkı olmayan içerik indirme',
    'Yasal video paylaşım platformlarından indirme',
    'Kendi oluşturduğunuz içerikleri indirme'
  ];

  const prohibitedUses = [
    'Telif hakkı korumalı içerik indirme',
    'Ticari amaçlı toplu indirme',
    'Site içeriğinin izinsiz kopyalanması',
    'Zararlı yazılım dağıtımı'
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
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Kullanım Şartları
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
              Sitemizi kullanarak aşağıdaki şart ve koşulları kabul etmiş sayılırsınız. 
              Lütfen dikkatle okuyunuz.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
              <p className="text-yellow-800 text-sm">
                <strong>Önemli:</strong> Bu şartlar yasal olarak bağlayıcıdır. 
                Kabul etmiyorsanız siteyi kullanmayınız.
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
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
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

      {/* Allowed vs Prohibited */}
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
              ⚖️ İzinli ve Yasak Kullanımlar
            </h2>
            <p className="text-xl text-gray-600">
              
              Sitemizi ve önerdiğimiz araçları nasıl kullanabileceğiniz hakkında rehber.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-green-50 rounded-xl p-6"
            >
              <h3 className="font-bold text-green-800 mb-6 flex items-center space-x-2">
                <CheckCircle className="h-6 w-6" />
                <span>İzinli Kullanımlar</span>
              </h3>
              <div className="space-y-3">
                {allowedUses.map((use, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-green-700">{use}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-red-50 rounded-xl p-6"
            >
              <h3 className="font-bold text-red-800 mb-6 flex items-center space-x-2">
                <XCircle className="h-6 w-6" />
                <span>Yasak Kullanımlar</span>
              </h3>
              <div className="space-y-3">
                {prohibitedUses.map((use, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="text-red-700">{use}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legal Notice */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white text-center"
          >
            <AlertTriangle className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">
              ⚠️ Önemli Yasal Uyarı
            </h2>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              Bu site yalnızca eğitim amaçlıdır. Telif hakkı korumalı içeriklerin indirilmesi yasaktır. 
              Kullanıcılar yasal sorumluluklarının farkında olmalı ve telif hakkı kurallarına uymalıdır.
            </p>
            <div className="bg-white/20 rounded-xl p-4">
              <p className="text-sm">
                <strong>Türk Ceza Kanunu Madde 71:</strong> Telif hakkı ihlali suçtur ve cezai yaptırımları vardır.
              </p>
            </div>
          </motion.div>
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
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              📞 Hukuki Sorular
            </h2>
            <p className="text-gray-600 mb-6">
              Kullanım şartları hakkında sorularınız için hukuk departmanımızla iletişime geçin.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 max-w-md mx-auto">
              <p className="text-gray-800 font-semibold">
                info@youtube-indirme.com.tr
              </p>
              <p className="text-gray-600 text-sm mt-2">
                Yanıt süresi: 2-3 iş günü
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;
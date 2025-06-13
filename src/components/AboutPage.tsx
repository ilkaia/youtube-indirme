import React, { useEffect } from 'react';
import { Users, Heart, Target, Award, Shield, Clock, CheckCircle, Star, Play, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import BackgroundEffects from './BackgroundEffects';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamValues = [
    {
      icon: Heart,
      title: 'Kullanıcı Odaklı',
      description: 'Her kararımızı kullanıcılarımızın ihtiyaçlarını düşünerek alıyoruz.'
    },
    {
      icon: Shield,
      title: 'Güvenlik Önceliği',
      description: 'Sadece güvenli ve test edilmiş çözümleri öneriyoruz.'
    },
    {
      icon: Target,
      title: 'Kaliteli İçerik',
      description: 'Her rehber ve öneri titizlikle hazırlanır ve sürekli güncellenir.'
    },
    {
      icon: Clock,
      title: 'Sürekli Gelişim',
      description: 'Teknolojideki değişimleri takip eder, içeriklerimizi güncel tutarız.'
    }
  ];

  const stats = [
    { number: '5+', label: 'Yıllık Deneyim' },
    { number: '500K+', label: 'Memnun Kullanıcı' },
    { number: '50+', label: 'Test Edilmiş Program' },
    { number: '100%', label: 'Güvenli Öneriler' }
  ];

  const expertise = [
    'Video indirme teknolojileri',
    'Yazılım güvenlik testleri',
    'Kullanıcı deneyimi tasarımı',
    'İçerik stratejisi ve SEO',
    'Teknik dokümantasyon'
  ];

  const features = [
    { icon: Shield, text: '100% Güvenilir' },
    { icon: Users, text: 'Uzman Ekip' },
    { icon: Award, text: 'Kaliteli Hizmet' },
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
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Hakkımızda
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
              YouTube video indirme konusunda Türkiye'nin en güvenilir rehber platformunu oluşturan 
              <strong> tecrübeli ve tutkulu bir ekibiz</strong>. Kullanıcılarımıza en iyi deneyimi sunmak için 
              sürekli çalışıyoruz.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Play className="h-4 w-4" />
                <span>Hikayemizi Keşfet</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/80 backdrop-blur-sm hover:bg-gray-50 text-gray-800 px-6 py-3 rounded-xl font-semibold text-base border-2 border-gray-200 hover:border-gray-300 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Download className="h-4 w-4" />
                <span>İletişime Geç</span>
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

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                🎯 Misyonumuz
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Video indirme dünyasında güvenilir bir pusula olmak. Kullanıcılarımızın 
                güvenli, hızlı ve kaliteli video indirme deneyimi yaşamasını sağlamak için 
                her gün çalışıyoruz.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Küçük ama deneyimli ekibimiz, her programı titizlikle test eder, 
                güvenlik açısından değerlendirir ve sadece en iyilerini önerir. 
                Amacımız, karmaşık teknik konuları herkesin anlayabileceği şekilde sunmak.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                💡 Neden Biz?
              </h3>
              <div className="space-y-4">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              ⭐ Değerlerimiz
            </h2>
            <p className="text-xl text-gray-600">
              Çalışmalarımızı yönlendiren temel ilkeler.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                >
                  <div className="bg-blue-100 p-3 rounded-xl mb-4 inline-block">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
              📊 Rakamlarla Biz
            </h2>
            <p className="text-xl text-gray-600">
              Başarılarımızı gösteren önemli veriler.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6">
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Approach */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center"
          >
            <Star className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">
              🚀 Ekip Yaklaşımımız
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto leading-relaxed">
              Küçük ama güçlü ekibimiz, her üyenin uzmanlık alanında derinlemesine bilgi sahibi olmasına odaklanır. 
              Bu sayede her konuda en kaliteli içeriği üretebiliyoruz.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="bg-white/20 rounded-xl p-4">
                <h3 className="font-bold mb-2">🔧 Teknik Uzmanlar</h3>
                <p className="text-blue-100">Yazılım test ve güvenlik uzmanları</p>
              </div>
              <div className="bg-white/20 rounded-xl p-4">
                <h3 className="font-bold mb-2">✍️ İçerik Editörleri</h3>
                <p className="text-blue-100">Anlaşılır rehber yazarları</p>
              </div>
              <div className="bg-white/20 rounded-xl p-4">
                <h3 className="font-bold mb-2">🎨 UX Tasarımcıları</h3>
                <p className="text-blue-100">Kullanıcı deneyimi uzmanları</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              💬 Bizimle İletişime Geçin
            </h2>
            <p className="text-gray-600 mb-6">
              Sorularınız, önerileriniz veya işbirliği teklifleriniz için her zaman buradayız.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-200">
              İletişim Sayfasına Git
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
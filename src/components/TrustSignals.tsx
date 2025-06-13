import React from 'react';
import { Users, Award, Shield, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const TrustSignals = () => {
  const stats = [
    {
      icon: Users,
      number: '500,000+',
      label: 'Memnun Kullanıcı',
      color: 'text-blue-600',
    },
    {
      icon: Award,
      number: '50+',
      label: 'Test Edilmiş Program',
      color: 'text-green-600',
    },
    {
      icon: Shield,
      number: '100%',
      label: 'Güvenli Öneriler',
      color: 'text-red-500',
    },
    {
      icon: Clock,
      number: '5+',
      label: 'Yıllık Deneyim',
      color: 'text-purple-600',
    },
  ];

  return (
    <section className="py-12 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Neden Bizi Tercih Ediyorlar?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Türkiye'nin en güvenilir video indirme rehberi olarak, kullanıcılarımıza en iyi deneyimi sunuyoruz.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className={`inline-flex p-2 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors duration-200 mb-3`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-gray-900">{stat.number}</p>
                    <p className="text-gray-600 font-medium text-sm">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Compact Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap justify-center items-center gap-6 opacity-60"
        >
          <div className="flex items-center space-x-1.5">
            <Shield className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium text-gray-700">SSL Güvenli</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Award className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Uzman Onaylı</span>
          </div>
          <div className="flex items-center space-x-1.5">
            <Users className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-gray-700">Topluluk Destekli</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSignals;
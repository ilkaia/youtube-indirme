import React from 'react';
import { Shield, Mail, Phone, MapPin, ExternalLink, Award, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = {
    'Ana Kategoriler': [
      { name: 'En İyi Programlar', href: '/premium-tools' },
      { name: 'Ücretsiz Araçlar', href: '/online-tools' },
      { name: 'Premium Çözümler', href: '/premium-tools' },
      { name: 'Mobil Uygulamalar', href: '/tutorials' },
    ],
    'Rehberler': [
      { name: 'Video İndirme', href: '/tutorials' },
      { name: 'MP3 Dönüştürme', href: '/tutorials' },
      { name: 'HD/4K İndirme', href: '/tutorials' },
      { name: 'Güvenlik İpuçları', href: '#security' },
    ],
    'Şirket': [
      { name: 'Hakkımızda', href: '/about' },
      { name: 'İletişim', href: '/contact' },
      { name: 'Gizlilik Politikası', href: '/privacy-policy' },
      { name: 'Kullanım Şartları', href: '/terms-of-service' },
    ],
    'Destek': [
      { name: 'Sık Sorulan Sorular', href: '#' },
      { name: 'Teknik Destek', href: '/contact' },
      { name: 'Blog', href: '#' },
      { name: 'Topluluk', href: '#' },
    ],
  };

  const trustBadges = [
    { icon: Shield, text: 'SSL Güvenli' },
    { icon: Award, text: 'Uzman Onaylı' },
    { icon: Users, text: '500K+ Kullanıcı' },
    { icon: Clock, text: '7/24 Destek' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-red-500 p-2 rounded-xl">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">YouTube İndirme</h3>
                <p className="text-gray-400 text-sm">Güvenilir Rehber</p>
              </div>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Türkiye'nin en güvenilir YouTube video indirme rehberi. 
              En iyi programları keşfedin, güvenli yöntemleri öğrenin ve 
              uzman önerilerimizden faydalanın.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">info@youtube-indirme.com.tr</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">+90 (212) 555-0123</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">İstanbul, Türkiye</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('#') ? (
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-1 group"
                      >
                        <span>{link.name}</span>
                        <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-1 group"
                      >
                        <span>{link.name}</span>
                        <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-wrap justify-center gap-6">
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div key={index} className="flex items-center space-x-2">
                  <Icon className="h-4 w-4 text-blue-400" />
                  <span className="text-gray-400 text-sm">{badge.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} YouTube İndirme Rehberi. Tüm hakları saklıdır.
            </div>
            
            <div className="flex items-center space-x-6">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Gizlilik Politikası
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Kullanım Şartları
              </Link>
              <Link to="/cookie-policy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Çerez Politikası
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-xs text-center">
              <strong>Yasal Uyarı:</strong> Bu site yalnızca eğitim amaçlıdır. Telif hakkı korumalı içeriklerin indirilmesi yasaktır. 
              Kullanıcılar yasal sorumluluklarının farkında olmalı ve telif hakkı kurallarına uymalıdır. 
              Önerilen programlar bağlı ortaklık bağlantıları içerebilir.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
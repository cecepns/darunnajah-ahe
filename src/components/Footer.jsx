import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div>
                <h3 className="text-xl font-bold">Rumah Belajar</h3>
                <p className="text-blue-400">Darunnajah AHE</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Tempat belajar terbaik untuk anak-anak dengan metode yang menyenangkan dan teruji.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Program Unggulan</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">PRACALIS</a></li>
              <li><a href="#" className="hover:text-white transition-colors">BACA AHE</a></li>
              <li><a href="#" className="hover:text-white transition-colors">MATEMATIKA SERIES</a></li>
              <li><a href="#" className="hover:text-white transition-colors">YES ENGLISH</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LES MAPEL SD/MI</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LES NGAJI</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>085219570532</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>deriyantieln@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <span>Jl. Sumur Tumpang, Blok Benda, Gg Senah, Patrol Lor, Kab. Indramayu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            © 2025 Rumah Belajar Darunnajah AHE.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
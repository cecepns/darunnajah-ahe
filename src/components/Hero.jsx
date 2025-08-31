import { BookOpen, Star, Users, Award } from 'lucide-react';
import LogoAhe from '../assets/les/logo-les-ahe.png'

const Hero = () => {
  const handleWhatsAppRedirect = (message) => {
    const phoneNumber = '6285219570532';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleDaftarSekarang = () => {
    handleWhatsAppRedirect('Halo, saya ingin mendaftar untuk program les di RBN - Rumah Belajar Darunnajah AHE. Mohon informasi lebih lanjut.');
  };

  const handleTanyaProgram = () => {
    handleWhatsAppRedirect('Halo, saya ingin bertanya tentang program-program yang tersedia di RBN - Rumah Belajar Darunnajah AHE. Mohon informasi lebih lanjut.');
  };

  return (
    <section id="home" className="pt-44 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8" data-aos="fade-right" data-aos-duration="1000">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Selamat Datang di
                <span className="text-blue-600 block">RBN - Rumah Belajar</span>
                <span className="text-purple-600">Darunnajah AHE</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 font-medium">
                Asyiknya belajar BACA Bersama DARUNNAJAH AHE
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Kami adalah Unit AHE yang memiliki keunggulan lokasi belajar yang strategis, 
                metode belajar teruji dan menyenangkan, tempat parkir yang luas, media belajar yang lengkap.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleDaftarSekarang}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Daftar Sekarang
              </button>
              <button 
                onClick={handleTanyaProgram}
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                Tanya Program
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-2xl font-bold text-gray-800">500+</p>
                <p className="text-sm text-gray-600">Siswa Aktif</p>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="300">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                  <BookOpen className="w-8 h-8 text-purple-600" />
                </div>
                <p className="text-2xl font-bold text-gray-800">6</p>
                <p className="text-sm text-gray-600">Program Les</p>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="400">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <p className="text-2xl font-bold text-gray-800">5+</p>
                <p className="text-sm text-gray-600">Tahun Pengalaman</p>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="500">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Star className="w-8 h-8 text-yellow-600" />
                </div>
                <p className="text-2xl font-bold text-gray-800">4.9</p>
                <p className="text-sm text-gray-600">Rating</p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative" data-aos="fade-left" data-aos-duration="1000">
            <div className="relative bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 space-y-4">
                <div className="flex flex-col gap-5 items-center justify-center space-x-4 mb-6">
                  <img 
                    src={LogoAhe}
                    alt="Logo AHE" 
                    className="h-full w-44 object-cover"
                  />
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-800">AHE Method</h3>
                    <p className="text-sm text-gray-600">Belajar Menyenangkan</p>
                  </div>
                </div>
                
                <div className="text-center space-y-3">
                  <h4 className="text-lg font-semibold text-gray-800">Program Seru untuk Si Kecil</h4>
                  <p className="text-gray-600">
                    Belajar sambil bermain dan bersenang-senang untuk anak di bawah 4,5 tahun!
                  </p>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3 shadow-lg animate-bounce">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-pink-400 rounded-full p-3 shadow-lg animate-pulse">
                  <Star className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
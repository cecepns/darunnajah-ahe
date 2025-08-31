import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Header';
import Footer from './Footer';
import logoAhe from '../assets/logo-asyik-belajar-bareng-ahe.jpeg';

const TentangKami = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Main Content */}
      <section className="py-16 pt-28 md:pt-44">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Tentang Kami Section */}
            <div className="mb-16" data-aos="fade-up">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Text Content */}
                  <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">
                      Tentang Kami
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Darunnajah AHe hadir sebagai solusi belajar terbaik dengan pengajar berkompeten dan berlisensi.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Program belajar lengkap untuk anak PAUD, TK, SD, Dan SMP.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Belajar jadi lebih seru, anak-anak semakin cerdas, kreatif dan berakhlak Qur'ani.
                    </p>
                  </div>
                  
                  {/* Logo Image */}
                  <div className="flex justify-center md:justify-end">
                    <img 
                      src={logoAhe} 
                      alt="Logo Asyik Belajar Bareng AHe" 
                      className="w-full max-w-md h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Programs Overview */}
            <div className="mb-16" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-lg p-8 md:p-12 text-white">
                <h2 className="text-3xl font-bold mb-6 text-center">
                  Program Belajar Lengkap
                </h2>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm">
                    <h3 className="text-xl font-bold mb-2">PAUD</h3>
                    <p className="text-blue-100">Pendidikan Anak Usia Dini</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm">
                    <h3 className="text-xl font-bold mb-2">TK</h3>
                    <p className="text-blue-100">Taman Kanak-kanak</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm">
                    <h3 className="text-xl font-bold mb-2">SD</h3>
                    <p className="text-blue-100">Sekolah Dasar</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-6 backdrop-blur-sm">
                    <h3 className="text-xl font-bold mb-2">SMP</h3>
                    <p className="text-blue-100">Sekolah Menengah Pertama</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="mb-16" data-aos="fade-up" data-aos-delay="400">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                  Komitmen Kami
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Belajar Seru</h3>
                    <p className="text-gray-600">Metode pembelajaran yang menyenangkan dan interaktif</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Cerdas & Kreatif</h3>
                    <p className="text-gray-600">Mengembangkan kecerdasan dan kreativitas anak</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Berakhlak Qur'ani</h3>
                    <p className="text-gray-600">Pembentukan karakter berdasarkan nilai-nilai Islam</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div data-aos="fade-up" data-aos-delay="600">
              <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl shadow-lg p-8 md:p-12 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Bergabunglah Bersama Kami
                </h2>
                <p className="text-xl mb-6 text-green-100">
                  Mari wujudkan masa depan cemerlang untuk anak-anak kita
                </p>
                <button 
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  onClick={() => {
                    const phoneNumber = '6285219570532';
                    const message = 'Halo, saya tertarik dengan program belajar di AHe. Bisa info lebih lanjut?';
                    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                >
                  Hubungi Kami
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TentangKami;

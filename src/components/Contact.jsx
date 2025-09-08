import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telepon',
      value: '085219570532',
      link: 'tel:085219570532',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'deriyantieln@gmail.com',
      link: 'mailto:deriyantieln@gmail.com',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: MapPin,
      title: 'Alamat',
      value: 'Jl. Sumur Tumpang, Blok Benda, Gg Senah, Patrol Lor, Kab. Indramayu',
      link: '#',
      color: 'from-red-400 to-pink-500'
    }
  ];

  const schedule = [
    // { day: 'Selasa, Rabu, Jumat', time: '13:00 - 18:00' },
    { day: 'Senin - Minggu', time: '08:00 - 18:00' }
  ];

  const allPrograms = [
    'Les Baca AHE',
    'Les PRACALIS',
    'Les Hitung ASE',
    'Les Matematika HEBAT',
    'Les Baca Tulis Arab AGA',
    'Les Bahasa Inggris LET\'S GO',
    'Les Bahasa Inggris SMP',
    'Les Matematika SD',
    'Les Matematika SERIES',
    'Bonus Les Mengaji'
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = '6285219570532';
    const message = 'Halo! Saya tertarik dengan program les di AHE. Bisa minta informasi lebih lanjut?';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div 
        className="fixed bottom-6 right-6 z-50"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
          aria-label="Chat WhatsApp"
        >
          <MessageCircle className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
        </button>
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
          <span className="text-xs font-bold">1</span>
        </div>
      </div>

      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Hubungi Kami</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Siap membantu anak Anda meraih prestasi terbaik dalam belajar
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8" data-aos="fade-right">
              <div>
                <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.link}
                        className="flex items-start space-x-4 p-4 rounded-xl bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 group"
                      >
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-200">{info.title}</p>
                          <p className="text-gray-300 text-sm">{info.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Schedule */}
              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-yellow-400" />
                  Jadwal Operasional
                </h4>
                <div className="space-y-3">
                  {schedule.map((item, index) => (
                    <div key={index} className="bg-white bg-opacity-10 rounded-lg p-3">
                      <p className="font-semibold text-gray-200">{item.day}</p>
                      <p className="text-yellow-400">{item.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Programs List */}
            <div className="lg:col-span-1" data-aos="fade-up">
              <h3 className="text-2xl font-bold mb-6">Semua Program</h3>
              <div className="space-y-3">
                {allPrograms.map((program, index) => (
                  <div
                    key={index}
                    className="bg-white bg-opacity-10 rounded-lg p-3 hover:bg-opacity-20 transition-all duration-300 cursor-pointer"
                  >
                    <p className="text-gray-200">{program}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="200">
            <div 
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 inline-flex items-center space-x-3 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Chat WhatsApp: 085219570532</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
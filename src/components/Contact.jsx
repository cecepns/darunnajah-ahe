import { Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import WhatsAppFloat from './WhatsAppFloat';
import { WHATSAPP_CONTACTS, DEFAULT_WHATSAPP_MESSAGE, openWhatsApp } from '../constants/contact';

const Contact = () => {
  const contactInfo = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      entries: WHATSAPP_CONTACTS.map((c) => ({
        label: c.name,
        value: c.display,
        onClick: () => openWhatsApp(c.waNumber, DEFAULT_WHATSAPP_MESSAGE),
      })),
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'deriyantieln@gmail.com',
      link: 'mailto:deriyantieln@gmail.com',
      color: 'from-blue-400 to-indigo-500',
    },
    {
      icon: MapPin,
      title: 'Alamat',
      value: 'Jl. Sumur Tumpang, Blok Benda, Gg Senah, Patrol Lor, Kab. Indramayu',
      link: '#',
      color: 'from-red-400 to-pink-500',
    },
  ];

  const schedule = [{ day: 'Senin - Minggu', time: '08:00 - 18:00' }];

  const allPrograms = [
    'Les Baca AHE',
    'Les PRACALIS',
    'Les Hitung ASE',
    'Les Matematika HEBAT',
    'Les Baca Tulis Arab AGA',
    "Les Bahasa Inggris LET'S GO",
    'Les Bahasa Inggris SMP',
    'Les Matematika SD',
    'Les Matematika SERIES',
    'Bonus Les Mengaji',
  ];

  return (
    <>
      <WhatsAppFloat />

      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Hubungi Kami</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Siap membantu anak Anda meraih prestasi terbaik dalam belajar
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="lg:col-span-1 space-y-8" data-aos="fade-right">
              <div>
                <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-start space-x-4 p-4 rounded-xl bg-white bg-opacity-10"
                      >
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center shrink-0`}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-200">{info.title}</p>
                          {info.entries ? (
                            <div className="mt-2 space-y-2">
                              {info.entries.map((entry) => (
                                <button
                                  key={entry.value}
                                  onClick={entry.onClick}
                                  className="block w-full text-left p-2 rounded-lg bg-white bg-opacity-5 hover:bg-opacity-15 transition-all group"
                                >
                                  <p className="text-gray-200 text-sm font-medium group-hover:text-white">
                                    {entry.label}
                                  </p>
                                  <p className="text-green-400 text-sm">{entry.value}</p>
                                </button>
                              ))}
                            </div>
                          ) : (
                            <a href={info.link} className="text-gray-300 text-sm hover:text-white transition-colors">
                              {info.value}
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

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

            <div className="lg:col-span-1" data-aos="fade-up">
              <h3 className="text-2xl font-bold mb-6">Semua Program</h3>
              <div className="space-y-3">
                {allPrograms.map((program, index) => (
                  <div
                    key={index}
                    className="bg-white bg-opacity-10 rounded-lg p-3 hover:bg-opacity-20 transition-all duration-300"
                  >
                    <p className="text-gray-200">{program}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            {WHATSAPP_CONTACTS.map((contact) => (
              <button
                key={contact.waNumber}
                onClick={() => openWhatsApp(contact.waNumber, DEFAULT_WHATSAPP_MESSAGE)}
                className="bg-green-500 hover:bg-green-600 inline-flex items-center space-x-3 px-6 py-4 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                <span className="text-left text-sm sm:text-base">
                  <span className="block font-bold">{contact.name}</span>
                  <span className="opacity-90">{contact.display}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

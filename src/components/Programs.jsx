import { useState } from 'react';

import pracalis from '../assets/les/logo-les-pracalis.png';
import ahe from '../assets/les/logo-les-ahe.png';
import matematika from '../assets/les/logo-les-matematika.png';
import english from '../assets/les/logo-les-english.png';
import mapel from '../assets/les/logo-les-mapel-sd.png';

const Programs = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  // WhatsApp redirect functions
  const redirectToWhatsApp = (action, program) => {
    const phoneNumber = '6281234567890'; // Replace with actual WhatsApp number
    const programName = program.title;
    const programSubtitle = program.subtitle;
    
    let message = '';
    if (action === 'daftar') {
      message = `Halo! Saya tertarik untuk mendaftar program ${programName} (${programSubtitle}). Mohon informasi lebih lanjut mengenai pendaftaran dan jadwal yang tersedia. Terima kasih!`;
    } else if (action === 'tanya') {
      message = `Halo! Saya ingin bertanya tentang program ${programName} (${programSubtitle}). Mohon informasi detail mengenai program ini. Terima kasih!`;
    }
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const programs = [
    {
      id: 'pracalis',
      title: 'PRACALIS',
      subtitle: 'Pra Baca Tulis',
      description: 'Asah motorik halus. Kegiatan masuk TK dengan kegiatan seru belajar Huruf, Angka, Warna, Bentuk, dan aktivitas Asah Motorik Halus yang beragam',
      color: 'from-pink-400 to-red-500',
      image: pracalis,
      details: {
        fullDescription: 'PRACALIS adalah program khusus untuk anak usia 3–4,5 tahun yang dirancang sebagai langkah awal sebelum masuk TK. Anak diajak belajar mengenal huruf, angka, warna, bentuk, memegang pensil secara benar, belajar asyik lewat permainan, lagu, dan aktivitas asah motorik.',
        benefits: [
          'Mengenal huruf, angka, bentuk, dan warna',
          'Melatih motorik halus dan koordinasi mata, dan tangan',
          'Menumbuhkan semangat belajar dan fokus',
          'Melatih beradaptasi dengan guru dan teman',
          'Meningkatkan kesiapan belajar dan emosional anak'
        ],
        method: 'Program PRACALIS menggunakan pendekatan tematik dan permainan edukatif. Anak tidak dipaksa belajar, tapi diarahkan untuk menyukai belajar.',
        duration: '30 menit/sesi',
        frequency: '3 kali seminggu (bisa disesuaikan)',
        targetAge: [
          'Anak usia 3–4,5 tahun',
          'Anak play group',
          'Anak yang akan masuk TK',
          'Anak yang belum sekolah play group'
        ]
      }
    },
    {
      id: 'baca-ahe',
      title: 'BACA AHE',
      subtitle: 'Belajar Membaca',
      description: 'Belajar membaca tanpa mengeja, dengan metode JITU, Teruji, Asyik, Permainan seru dan Menyenangkan cocok untuk anak usia dini.',
      color: 'from-blue-400 to-blue-600',
      image: ahe,
      details: {
        fullDescription: 'Les Baca AHE adalah program khusus untuk anak usia 4–6 tahun yang dirancang sebagai langkah awal sebelum masuk SD. Anak diajak belajar membaca, menulis secara menyenangkan lewat permainan.',
        targetAge: [
          'Anak usia 4–6 tahun',
          'Anak TK A & TK B',
          'Anak yang akan masuk SD tahun depan',
          'Anak yang belum mengenal huruf dan angka'
        ]
      }
    },
    {
      id: 'matematika',
      title: 'MATEMATIKA SERIES',
      subtitle: 'Program Bertahap',
      description: 'Program matematika bertahap yang menumbuhkan logika dan rasa percaya diri, dirancang untuk anak SD kelas 1 sampai kelas 6.',
      color: 'from-green-400 to-emerald-600',
      image: matematika,
      details: {
        fullDescription: 'Matematika SERIES adalah program bertahap untuk anak SD kelas 1–6 yang ingin memahami konsep matematika secara sistematis dan menyenangkan. Setiap level disusun sesuai jenjang kelas dan kemampuan anak, agar belajar jadi lebih mudah dan tidak membingungkan.',
        benefits: [
          'Anak memahami konsep hitung, pecahan, geometri, dan lainnya dengan jelas',
          'Belajar matematika tanpa hafalan rumus',
          'Meningkatkan logika, daya pikir, dan kemandirian belajar',
          'Siap menghadapi ujian sekolah dengan percaya diri'
        ],
        method: 'Menggunakan pendekatan step-by-step dan soal kontekstual yang dekat dengan kehidupan sehari-hari. Dilengkapi latihan interaktif dan pembahasan terstruktur.',
        duration: '35 menit/sesi',
        frequency: '2–3 kali seminggu',
        level: 'Disesuaikan dengan kelas dan kemampuan anak'
      }
    },
    {
      id: 'english',
      title: 'YES ENGLISH',
      subtitle: 'Bahasa Inggris',
      description: 'Siap hadapi pelajaran sekolah dengan latihan Grammar, vocabulary, dan Speaking',
      color: 'from-purple-400 to-indigo-600',
      image: english,
      details: {
        fullDescription: 'Program Bahasa Inggris dirancang khusus untuk siswa kelas 1 sampai 6 agar menguasai materi sekolah dan berani berkomunikasi dalam Bahasa Inggris. Fokus pada grammar, vocabulary, dan speaking dengan pendekatan yang interaktif dan relevan.',
        benefits: [
          'Menguasai materi Bahasa Inggris sesuai kurikulum',
          'Meningkatkan kemampuan menulis, membaca, dan berbicara',
          'Percaya diri menghadapi ujian dan presentasi',
          'Bekal untuk persiapan ke jenjang SMP atau ujian masuk'
        ],
        method: 'Menggabungkan latihan soal, praktik speaking, dan diskusi topik sehari-hari. Dilengkapi latihan writing dan pemahaman teks bacaan.',
        duration: '35 menit/sesi',
        frequency: '2 kali seminggu',
        focus: 'Grammar, vocabulary, reading, writing, and speaking',
        targetAge: [
          'Kelas 1 sampai 6',
          'Siswa yang ingin nilai Bahasa Inggrisnya meningkat',
          'Siswa yang ingin lebih lancar berbicara dan menulis',
          'Siswa yang ingin siap menghadapi ujian sekolah atau nasional'
        ]
      }
    },
    {
      id: 'mapel',
      title: 'LES MAPEL SD/MI',
      subtitle: 'Mata Pelajaran',
      description: 'Program pendamping belajar mapel SD&MI, sesuai kurikulum sekolah masing-masing dengan pendekatan mudah dipahami latihan soal-soal sebelum PTS dan ujian Akhir Semester',
      color: 'from-orange-400 to-red-500',
      image: mapel,
      details: {
        fullDescription: 'Les Mapel SD/MI adalah program bimbingan untuk siswa kelas 1–6 SD agar mudah memahami pelajaran sekolah. Materi disusun sesuai kurikulum dan disampaikan dengan cara yang seru, sehingga anak tidak merasa takut dengan soal-soal.',
        benefits: [
          'Memahami materi pelajaran sekolah dengan lebih mudah',
          'Mengasah logika dan keterampilan berhitung dasar',
          'Menumbuhkan rasa percaya diri dalam pelajaran',
          'Siap menghadapi ulangan dan ujian semester'
        ],
        method: 'Menggunakan media visual, permainan edukatif, dan latihan soal bertingkat. Disesuaikan dengan kebutuhan masing-masing anak.',
        duration: '35 menit/sesi',
        frequency: '2-3 kali seminggu',
        subject: 'Mapel SD/MI'
      }
    },
    // {
    //   id: 'ngaji',
    //   title: 'LES NGAJI',
    //   subtitle: 'Bonus Program',
    //   description: 'Program bonus mengaji untuk melengkapi pendidikan spiritual anak-anak',
    //   color: 'from-teal-400 to-cyan-600',
    //   image: ahe,
    // }
  ];

  const openModal = (program) => {
    setSelectedProgram(program);
  };

  const closeModal = () => {
    setSelectedProgram(null);
  };

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Program Kami</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Program seru untuk si kecil, belajar sambil bermain dan bersenang-senang untuk anak di bawah 4,5 tahun!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
              <div
                key={program.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                onClick={() => openModal(program)}
              >
                <div className={`h-64 p-4 bg-gradient-to-r ${program.color} flex items-center justify-center relative overflow-hidden`}>
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{program.title}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{program.subtitle}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-blue-600 font-semibold text-sm">Klik untuk detail</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-800">{selectedProgram.title}</h3>
              <button
                onClick={closeModal}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                ×
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              {selectedProgram.details && (
                <>
                  <p className="text-gray-700 leading-relaxed">{selectedProgram.details.fullDescription}</p>
                  
                  <div className="flex gap-4">
                    <button 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                      onClick={() => redirectToWhatsApp('daftar', selectedProgram)}
                    >
                      Daftar Sekarang
                    </button>
                    <button 
                      className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-full font-semibold transition-colors"
                      onClick={() => redirectToWhatsApp('tanya', selectedProgram)}
                    >
                      Tanya Program
                    </button>
                  </div>

                  {selectedProgram.details.benefits && (
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-3">💫 Manfaat Program</h4>
                      <ul className="space-y-2">
                        {selectedProgram.details.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedProgram.details.method && (
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-3">🖊️ Metode Belajar</h4>
                      <p className="text-gray-700 mb-3">{selectedProgram.details.method}</p>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <span className="font-semibold text-blue-800">Durasi:</span>
                          <span className="text-gray-700 ml-2">{selectedProgram.details.duration}</span>
                        </div>
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <span className="font-semibold text-purple-800">Jadwal:</span>
                          <span className="text-gray-700 ml-2">{selectedProgram.details.frequency}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedProgram.details.targetAge && (
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-3">👶 Untuk Siapa Program Ini?</h4>
                      <ul className="space-y-2">
                        {selectedProgram.details.targetAge.map((target, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-700">{target}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Programs;
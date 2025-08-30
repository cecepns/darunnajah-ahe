import { MapPin, Award, Heart, Shield } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Heart,
      title: 'Suasana Nyaman',
      description: 'Jauh dari keramaian dan lalu lalang kendaraan sehingga membuat anak lebih fokus dalam konsentrasi belajar.',
      color: 'from-pink-400 to-rose-500'
    },
    {
      icon: Award,
      title: 'Guru Berlisensi',
      description: 'Guru sabar dan telah mengikuti pelatihan dan memiliki lisensi untuk mengajar sesuai dengan metode belajar yang tepat.',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: MapPin,
      title: 'Lokasi Ramah Anak',
      description: 'Lokasi belajar yang nyaman, tempat yang luas aman untuk bermain anak.',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Metode Teruji',
      description: 'Belajar membaca yang menyenangkan anak lewat senam otak dan permainan dengan metode AHE yang telah terbukti efektif.',
      color: 'from-purple-400 to-violet-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Mengapa Memilih Kami?</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Pilih kami karena kami adalah yang terbaik di bidang ini, memberikan layanan unggul dan terpercaya 
            yang memenuhi setiap kebutuhan dan harapan anda dengan dedikasi serta komitmen yang tinggi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="text-center group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative mb-6">
                  <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r from-white to-gray-100 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white" data-aos="fade-up" data-aos-delay="400">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Metode AHE Terbukti Efektif</h3>
              <p className="text-lg leading-relaxed mb-6">
                Belajar membaca yang menyenangkan anak lewat senam otak dan permainan. 
                Metode yang telah teruji dan terbukti membuat anak-anak senang belajar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  Pelajari Metode AHE
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-full font-semibold transition-colors">
                  Lihat Testimoni
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
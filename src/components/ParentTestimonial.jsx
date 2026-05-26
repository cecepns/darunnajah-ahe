import { useState } from 'react';
import testimonial1 from '../assets/testimonial-orangtua/1.png';
import testimonial2 from '../assets/testimonial-orangtua/2.png';
import testimonial3 from '../assets/testimonial-orangtua/3.png';
import testimonial4 from '../assets/testimonial-orangtua/4.png';

const ParentTestimonial = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const testimonials = [
    { id: 1, image: testimonial1, name: 'Bunda Aimar' },
    { id: 2, image: testimonial2, name: 'Bunda Azka' },
    { id: 3, image: testimonial3, name: 'Bunda Gibran' },
    { id: 4, image: testimonial4, name: 'Mama Haikal' },
  ];

  return (
    <section id="testimoni-orangtua" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Testimoni Orang Tua
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Apa kata orang tua walimurid tentang pengalaman belajar anak di RBN Darunnajah AHE
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-[1.02]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => setSelectedImage(testimonial.image)}
            >
              <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <img
                  src={testimonial.image}
                  alt={`Testimoni ${testimonial.name}`}
                  className="w-full h-72 object-cover object-top group-hover:brightness-105 transition-all duration-300"
                />
                <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50">
                  <h3 className="font-semibold text-gray-800 text-center">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600 text-center mt-1">
                    Klik untuk melihat detail
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-2 sm:p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-md max-h-[90vh] flex items-center justify-center">
              <img
                src={selectedImage}
                alt="Testimoni orang tua"
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-2 -right-2 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-300 z-10"
                aria-label="Tutup"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ParentTestimonial;

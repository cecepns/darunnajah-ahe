import { useState } from 'react';

// Import testimonial images
import testimonial1 from '../assets/testimonial/1.jpeg';
import testimonial2 from '../assets/testimonial/2.jpeg';
import testimonial3 from '../assets/testimonial/3.jpeg';
import testimonial4 from '../assets/testimonial/4.jpeg';
import testimonial5 from '../assets/testimonial/5.jpeg';
import testimonial6 from '../assets/testimonial/6.jpeg';
import testimonial7 from '../assets/testimonial/7.jpeg';
import testimonial8 from '../assets/testimonial/8.jpeg';
import testimonial9 from '../assets/testimonial/9.jpeg';
import testimonial10 from '../assets/testimonial/10.jpeg';

const Testimonial = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const testimonials = [
    { id: 1, image: testimonial1 },
    { id: 2, image: testimonial2 },
    { id: 3, image: testimonial3 },
    { id: 4, image: testimonial4 },
    { id: 5, image: testimonial5 },
    { id: 6, image: testimonial6 },
    { id: 7, image: testimonial7 },
    { id: 8, image: testimonial8 },
    { id: 9, image: testimonial9 },
    { id: 10, image: testimonial10 },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Testimoni Siswa
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lihat testimoni dari siswa-siswi yang telah merasakan manfaat belajar di AHE
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => openModal(testimonial.image)}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={testimonial.image}
                  alt={`Testimoni ${testimonial.id}`}
                  className="w-full h-64 object-cover group-hover:brightness-110 transition-all duration-300"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 text-center">
                    Testimoni #{testimonial.id}
                  </h3>
                  <p className="text-sm text-gray-600 text-center mt-1">
                    Klik untuk melihat detail
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for full-size image */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-2 sm:p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-4xl max-h-[85vh] flex items-center justify-center">
              <div className="relative">
                <img
                  src={selectedImage}
                  alt="Testimoni Detail"
                  className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
                <button
                  onClick={closeModal}
                  className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-300 z-10"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonial;

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

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
import siswa1 from '../assets/siswa/1.png';
import siswa2 from '../assets/siswa/2.png';
import siswa3 from '../assets/siswa/3.png';
import siswa4 from '../assets/siswa/4.png';
import siswa5 from '../assets/siswa/5.png';
import siswa6 from '../assets/siswa/6.png';

const Testimonial = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

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
    { id: 11, image: siswa1 },
    { id: 12, image: siswa2 },
    { id: 13, image: siswa3 },
    { id: 14, image: siswa4 },
    { id: 15, image: siswa5 },
    { id: 16, image: siswa6 },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-yellow-50">
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

        <div data-aos="fade-up" className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop
            autoplay={{ delay: 2800, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            onSwiper={setSwiperInstance}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="testimonial-swiper pb-12 px-2"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div
                  className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                  onClick={() => openModal(testimonial.image)}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-yellow-100">
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
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-1 sm:px-2">
            <button
              type="button"
              onClick={() => swiperInstance?.slidePrev()}
              className="pointer-events-auto w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/95 border border-blue-200 text-blue-700 shadow-md hover:bg-yellow-100 transition-colors flex items-center justify-center"
              aria-label="Sebelumnya"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              type="button"
              onClick={() => swiperInstance?.slideNext()}
              className="pointer-events-auto w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/95 border border-blue-200 text-blue-700 shadow-md hover:bg-yellow-100 transition-colors flex items-center justify-center"
              aria-label="Berikutnya"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
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

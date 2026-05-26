import { useState } from 'react';
import siswa1 from '../assets/siswa/1.png';
import siswa2 from '../assets/siswa/2.png';
import siswa3 from '../assets/siswa/3.png';
import siswa4 from '../assets/siswa/4.png';
import siswa5 from '../assets/siswa/5.png';
import siswa6 from '../assets/siswa/6.png';

const StudentsGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const students = [
    { id: 1, image: siswa1 },
    { id: 2, image: siswa2 },
    { id: 3, image: siswa3 },
    { id: 4, image: siswa4 },
    { id: 5, image: siswa5 },
    { id: 6, image: siswa6 },
  ];

  return (
    <section id="siswa" className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Siswa Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Momen belajar seru bersama siswa-siswi RBN Darunnajah AHE
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {students.map((student, index) => (
            <div
              key={student.id}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 80}
              onClick={() => setSelectedImage(student.image)}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={student.image}
                  alt={`Siswa AHE ${student.id}`}
                  className="w-full h-64 object-cover object-center group-hover:brightness-110 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-lg max-h-[90vh]">
              <img
                src={selectedImage}
                alt="Foto siswa"
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-2 -right-2 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-300"
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

export default StudentsGallery;

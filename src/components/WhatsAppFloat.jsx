import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { WHATSAPP_CONTACTS, DEFAULT_WHATSAPP_MESSAGE, openWhatsApp } from '../constants/contact';

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50" ref={menuRef} data-aos="fade-up" data-aos-delay="300">
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-72 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 mb-2">
          <div className="bg-green-500 text-white px-4 py-3 font-semibold text-sm">
            Pilih kontak WhatsApp
          </div>
          <div className="divide-y divide-gray-100">
            {WHATSAPP_CONTACTS.map((contact) => (
              <button
                key={contact.waNumber}
                onClick={() => {
                  openWhatsApp(contact.waNumber, DEFAULT_WHATSAPP_MESSAGE);
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-3 hover:bg-green-50 transition-colors"
              >
                <p className="font-semibold text-gray-800 text-sm">{contact.name}</p>
                <p className="text-green-600 text-sm">{contact.display}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 hover:bg-green-600 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label={isOpen ? 'Tutup menu WhatsApp' : 'Chat WhatsApp'}
      >
        {isOpen ? (
          <X className="w-8 h-8" />
        ) : (
          <MessageCircle className="w-8 h-8" />
        )}
      </button>
    </div>
  );
};

export default WhatsAppFloat;

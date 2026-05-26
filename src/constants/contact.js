export const WHATSAPP_CONTACTS = [
  {
    name: 'Eln Deriyanti, S.Si',
    display: '0821-6267-6622',
    waNumber: '6282162676622',
  },
  {
    name: 'Pausi, S.Ag',
    display: '0821-5111-1535',
    waNumber: '6282151111535',
  },
];

export const DEFAULT_WHATSAPP_MESSAGE =
  'Halo! Saya tertarik dengan program les di AHE. Bisa minta informasi lebih lanjut?';

export const openWhatsApp = (waNumber, message = DEFAULT_WHATSAPP_MESSAGE) => {
  const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};

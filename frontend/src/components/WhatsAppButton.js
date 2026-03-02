import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  const phoneNumber = '917604848540'; // Your WhatsApp number without + or spaces
  const message = 'Hello! I would like to inquire about your logistics services.';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-button"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center gap-3 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} strokeWidth={2} />
      <span className="font-body font-medium text-sm whitespace-nowrap opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-xs transition-all duration-300 overflow-hidden">
        Chat with us
      </span>
    </a>
  );
};

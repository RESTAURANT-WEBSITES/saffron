// import { MessageCircle } from "lucide-react";

// const whatsapp_number = "1234567890";

// const WhatsAppButton = () => (
//   <a
//     href={`https://wa.me/${whatsapp_number}`}
//     target="_blank"
//     rel="noopener noreferrer"
//     aria-label="Chat on WhatsApp"
//     className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-green-900/30 transition-transform duration-300 hover:scale-110"
//     style={{ backgroundColor: "#25D366" }}
//   >
//     <MessageCircle size={26} className="text-foreground" style={{ color: "#fff" }} />
//   </a>
// );

// export default WhatsAppButton;


// import { FaWhatsapp } from "react-icons/fa";
// import { useCart } from "@/context/CartContext";

// const whatsappNumber = "919876543210";

// const WhatsAppButton = () => {
//   const { items, total, itemCount } = useCart();

//   const sendOrder = () => {
//     if (items.length === 0) return;

//     let message =
//       "Hello Highrise Restaurant & Cafe,%0A%0AI would like to order:%0A";

//     items.forEach((item, index) => {
//       message += `${index + 1}. ${item.name} x${item.quantity} - $${item.price * item.quantity}%0A`;
//     });

//     message += `%0ATotal: $${total}%0A%0ADelivery / Pickup:%0AAddress:`;

//     const url = `https://wa.me/${whatsappNumber}?text=${message}`;

//     window.open(url, "_blank");
//   };

//   if (items.length === 0) return null;

//   return (
//     <button
//       onClick={sendOrder}
//       className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-green-600 transition"
//     >
//       <FaWhatsapp size={22} />
//       Order ({itemCount})
//     </button>
//   );
// };

// export default WhatsAppButton;


import { FaWhatsapp, FaPhone } from "react-icons/fa";

const whatsappNumber = "919876543210"; // your WhatsApp number
const callNumber = "6238426420"; // phone call number

const WhatsAppButton = () => {

  const openWhatsApp = () => {
    const message = "Hello Saffron Restaurant & Cafe";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <button
        onClick={openWhatsApp}
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full shadow-lg shadow-green-900/30 flex items-center justify-center transition-transform duration-300 hover:scale-110"
        style={{ backgroundColor: "#25D366" }}
      >
        <FaWhatsapp size={24} className="text-white" />
      </button>

      <a
        href={`tel:${callNumber}`}
        aria-label="Call Saffron Restaurant"
        className="w-14 h-14 rounded-full shadow-lg shadow-emerald-900/20 flex items-center justify-center bg-gold text-primary-foreground transition-transform duration-300 hover:scale-110"
      >
        <FaPhone size={22} />
      </a>
    </div>
  );
};

export default WhatsAppButton;
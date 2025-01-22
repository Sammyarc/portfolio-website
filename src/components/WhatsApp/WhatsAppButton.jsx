
import { BsWhatsapp } from "react-icons/bs";

const WhatsAppButton = () => {
  const phoneNumber = "2347058667431"; // Replace with your WhatsApp number
  const message = "Hello! I just viewed your portfolio and I'm impressed. I'd love to discuss how we can collaborate or work together. Looking forward to hearing from you!";

  const handleWhatsAppClick = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div
      onClick={handleWhatsAppClick}
      className="fixed bottom-[2vw] right-[2vw] bg-green-500 text-white p-[3vw] md:p-[0.8vw] rounded-full shadow-lg cursor-pointer hover:bg-green-600 transition duration-300"
    >
      <BsWhatsapp size="2.5em"/>
    </div>
  );
};

export default WhatsAppButton;

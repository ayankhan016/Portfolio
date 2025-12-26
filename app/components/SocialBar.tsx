import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp
} from "react-icons/fa";

export default function SocialBar() {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">

      <a
        href="https://instagram.com/ayannkhan_"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-pink-500 transition"
      >
        <FaInstagram size={20} />
      </a>

      <a
        href="https://wa.me/6005605241"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-green-500 transition"
      >
        <FaWhatsapp size={20} />
      </a>

      <a
        href="https://github.com/ayankhan016"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-gray-800 transition"
      >
        <FaGithub size={20} />
      </a>

    

      <a
        href="mailto:ayaankhan016xd@gmail.com"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-rose-500 transition"
      >
        <FaEnvelope size={20} />
      </a>

    </div>
  );
}

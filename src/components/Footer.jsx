import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaXTwitter, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-gray-300 py-12 mt-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 tracking-wide">About Us</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Empowering Nigeria’s business centers with digital visibility, ease of service, and trusted online presence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 tracking-wide">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition duration-200">About</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition duration-200">Contact</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition duration-200">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 tracking-wide">Connect</h3>
            <p className="text-sm text-gray-400">Follow us for updates and support:</p>
            <div className="flex gap-4 mt-4 text-white">
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-pink-600 transition">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-black transition">
                <FaXTwitter className="w-4 h-4" />
              </a>
              <a href="https://wa.me/2348100000000" className="p-2 rounded-full bg-gray-800 hover:bg-green-600 transition">
                <FaWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          &copy; 2025 Visarc Business Center. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

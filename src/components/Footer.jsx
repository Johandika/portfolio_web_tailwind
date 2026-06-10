import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import logo from "../assets/images/logo.svg";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-Black border-t border-Red/20 pt-16 pb-8 font-SpaceMono text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src={logo}
              alt="Johandika Logo"
              className="h-16 w-auto mb-4 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => navigate("/")}
            />
            <p className="text-gray-400 text-sm text-center md:text-left max-w-xs leading-relaxed">
              Crafting elegant and responsive web experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 tracking-widest text-RedDarkest">QUICK LINKS</h3>
            <ul className="space-y-3 text-center md:text-left">
              <li>
                <button
                  onClick={() => navigate("/")}
                  className="text-gray-300 hover:text-white hover:underline decoration-Red transition-all"
                >
                  Home
                </button>
              </li>
              {/* <li>
                <button
                  onClick={() => navigate("/products/uidesign")}
                  className="text-gray-300 hover:text-white hover:underline decoration-Red transition-all"
                >
                  UI Design
                </button>
              </li> */}
              <li>
                <button
                  onClick={() => navigate("/products/logo")}
                  className="text-gray-300 hover:text-white hover:underline decoration-Red transition-all"
                >
                  Logos
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/products/fonts")}
                  className="text-gray-300 hover:text-white hover:underline decoration-Red transition-all"
                >
                  Fonts
                </button>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 tracking-widest text-RedDarkest">CONNECT</h3>
            <div className="flex space-x-5">
              <a
                href="https://github.com/johandika"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/johandika"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://instagram.com/johandika_"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="mailto:johanelyosse@gmail.com"
                className="text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300"
                aria-label="Email"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Johandika Syahputra Lubis. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>Built with</span>
            <span className="text-Red">♥</span>
            <span>in React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

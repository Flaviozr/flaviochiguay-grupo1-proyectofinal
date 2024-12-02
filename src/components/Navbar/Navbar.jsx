import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { BiCart } from "react-icons/bi";

const Logo =
  "https://i.pinimg.com/736x/fa/4a/fb/fa4afbc3c818ca960867f33aa9d701dd.jpg"; // Logo urbano

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-gradient-to-r from-gray-800 via-black to-gray-900 shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Menú izquierdo */}
        <div className="hidden md:flex items-center space-x-10">
          <Link
            to="/"
            className="text-white text-lg font-semibold tracking-wider hover:text-gold transition-all duration-300 transform hover:scale-110"
          >
            Inicio
          </Link>
          <Link
            to="/products"
            className="text-white text-lg font-semibold tracking-wider hover:text-gold transition-all duration-300 transform hover:scale-110"
          >
            Tienda
          </Link>
          <Link
            to="/marcas"
            className="text-white text-lg font-semibold tracking-wider hover:text-gold transition-all duration-300 transform hover:scale-110"
          >
            Marcas
          </Link>
        </div>

        {/* Logo central */}
        <div className="flex items-center justify-center flex-grow text-center">
          <Link to="/" className="flex flex-col items-center">
            <img
              src={Logo}
              alt="Logo"
              className="h-16 w-auto transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-6"
            />
            <span className="text-white text-2xl font-bold mt-2 transform transition-all duration-300 ease-in-out hover:text-gold hover:scale-105">
              REALKING-STORE
            </span>
          </Link>
        </div>

        {/* Menú derecho */}
        <div className="hidden md:flex items-center space-x-10">
          <Link
            to="/about"
            className="text-white text-lg font-semibold tracking-wider hover:text-gold transition-all duration-300 transform hover:scale-110"
          >
            Nosotros
          </Link>
          <Link
            to="/contact"
            className="text-white text-lg font-semibold tracking-wider hover:text-gold transition-all duration-300 transform hover:scale-110"
          >
            Contacto
          </Link>
          {/* Botón del carrito */}
          <Link
            to="/cart"
            className="relative bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 p-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-2xl"
          >
            <BiCart className="w-7 h-7 text-gray-900" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center transform translate-x-2 -translate-y-2 shadow-md">
              
            </span>
          </Link>
        </div>

        {/* Menú móvil */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú desplegable en móvil */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:hidden bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white text-lg font-semibold px-6 py-4`}
      >
        <ul className="space-y-4">
          <li>
            <Link
              to="/"
              className="hover:text-gold transition-all duration-300 transform hover:scale-110"
              onClick={() => setMenuOpen(false)}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="hover:text-gold transition-all duration-300 transform hover:scale-110"
              onClick={() => setMenuOpen(false)}
            >
              Tienda
            </Link>
          </li>
          <li>
            <Link
              to="/marcas"
              className="hover:text-gold transition-all duration-300 transform hover:scale-110"
              onClick={() => setMenuOpen(false)}
            >
              Marcas
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-gold transition-all duration-300 transform hover:scale-110"
              onClick={() => setMenuOpen(false)}
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-gold transition-all duration-300 transform hover:scale-110"
              onClick={() => setMenuOpen(false)}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

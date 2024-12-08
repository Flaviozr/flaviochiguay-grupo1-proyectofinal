import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { BiCart } from "react-icons/bi";

const Logo =
  "https://img.freepik.com/vector-premium/logotipo-marca-zapatos-que-llama-ks-deporte-vector-ilustracion-plano-2_764382-209977.jpg";

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
          ? "bg-gradient-to-r from-black via-gray-900 to-gray-800 shadow-lg"
          : "bg-gradient-to-r from-gray-800 via-black to-gray-900"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              alt="Logo"
              className="h-16 w-16 rounded-full transition-all duration-300 ease-in-out hover:scale-125 hover:rotate-6"
            />
          </Link>

          <Link
            to="/"
            className="text-4xl font-bold text-white font-sans transform hover:scale-110 hover:text-yellow-400 transition-all duration-300"
            style={{
              fontFamily: "'Permanent Marker', cursive", 
            }}
          >
            REALKING-STORE
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-10">
          <Link
            to="/"
            className="text-white text-lg font-semibold tracking-wider hover:text-yellow-400 transition-all duration-300 transform hover:scale-110"
          >
            Inicio
          </Link>
          <Link
            to="/products"
            className="text-white text-lg font-semibold tracking-wider hover:text-yellow-400 transition-all duration-300 transform hover:scale-110"
          >
            Tienda
          </Link>
          <Link
            to="/marcas"
            className="text-white text-lg font-semibold tracking-wider hover:text-yellow-400 transition-all duration-300 transform hover:scale-110"
          >
            Marcas
          </Link>
        </div>

        <div className="flex items-center space-x-6">

          <Link
            to="/cart"
            className="relative flex items-center space-x-3 bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 p-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-2xl"
          >
            <BiCart className="w-7 h-7 text-gray-900" />
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            <span className="text-2xl">☰</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black text-white p-4 space-y-4">
          <Link
            to="/"
            className="block text-lg hover:text-yellow-400 transition-all duration-300 transform hover:scale-110"
          >
            Inicio
          </Link>
          <Link
            to="/products"
            className="block text-lg hover:text-yellow-400 transition-all duration-300 transform hover:scale-110"
          >
            Tienda
          </Link>
          <Link
            to="/marcas"
            className="block text-lg hover:text-yellow-400 transition-all duration-300 transform hover:scale-110"
          >
            Marcas
          </Link>
          <Link
            to="/about"
            className="block text-lg hover:text-yellow-400 transition-all duration-300 transform hover:scale-110"
          >
            Nosotros
          </Link>
          <Link
            to="/contact"
            className="block text-lg hover:text-yellow-400 transition-all duration-300 transform hover:scale-110"
          >
            Contacto
          </Link>
        </div>
      )}
    </nav>
  );
}

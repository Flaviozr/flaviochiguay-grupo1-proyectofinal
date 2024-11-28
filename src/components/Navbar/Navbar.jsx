import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { BiCart } from "react-icons/bi"; 

const Logo = "https://i.pinimg.com/474x/06/0c/91/060c9122ee9f5ddd780056324f06047b.jpg";

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
          ? "bg-gradient-to-r from-gray-700 via-gray-800 to-black shadow-xl"
          : "bg-gradient-to-r from-gray-600 via-gray-700 to-black"
      }`}
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="text-gray-50 text-lg font-semibold uppercase tracking-wide hover:text-yellow-300 transition-all duration-300 transform hover:scale-105"
          >
            Inicio
          </Link>
          <Link
            to="/products"
            className="text-gray-50 text-lg font-semibold uppercase tracking-wide hover:text-yellow-300 transition-all duration-300 transform hover:scale-105"
          >
            Tienda
          </Link>
          <Link
            to="/marcas"
            className="text-gray-50 text-lg font-semibold uppercase tracking-wide hover:text-yellow-300 transition-all duration-300 transform hover:scale-105"
          >
            Marcas
          </Link>
        </div>

        <div className="flex items-center justify-center flex-grow text-center">
          <Link to="/" className="flex flex-col items-center">
            <img
              src={Logo}
              alt="Logo"
              className="h-12 w-auto transform transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-3 hover:opacity-90"
            />
            <span className="navbar-logo mt-2 text-sm font-semibold transform transition-all duration-300 ease-in-out hover:text-yellow-400 hover:scale-110">
              REALKING-STORE
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/about"
            className="text-gray-50 text-lg font-semibold uppercase tracking-wide hover:text-yellow-300 transition-all duration-300 transform hover:scale-105"
          >
            Nosotros
          </Link>
          <Link
            to="/contact"
            className="text-gray-50 text-lg font-semibold uppercase tracking-wide hover:text-yellow-300 transition-all duration-300 transform hover:scale-105"
          >
            Contacto
          </Link>
          <Link
            to="/cart"
            className="text-gray-50 text-lg font-semibold uppercase tracking-wide hover:text-yellow-300 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <BiCart className="icono-carrito w-6 h-6" />
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-50 focus:outline-none"
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
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:hidden bg-gradient-to-r from-gray-700 via-gray-800 to-black text-gray-50 text-lg font-semibold px-6 py-4`}
      >
        <ul className="space-y-4">
          <li>
            <Link
              to="/"
              className="hover:text-yellow-300 transition-all duration-300 transform hover:scale-105"
              onClick={() => setMenuOpen(false)}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="hover:text-yellow-300 transition-all duration-300 transform hover:scale-105"
              onClick={() => setMenuOpen(false)}
            >
              Tienda
            </Link>
          </li>
          <li>
            <Link
              to="/marcas"
              className="hover:text-yellow-300 transition-all duration-300 transform hover:scale-105"
              onClick={() => setMenuOpen(false)}
            >
              Marcas
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-yellow-300 transition-all duration-300 transform hover:scale-105"
              onClick={() => setMenuOpen(false)}
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-yellow-300 transition-all duration-300 transform hover:scale-105"
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

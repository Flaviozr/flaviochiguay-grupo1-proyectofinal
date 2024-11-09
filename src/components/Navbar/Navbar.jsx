
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Logo = 'https://w7.pngwing.com/pngs/777/349/png-transparent-sneaker-collecting-logo-brand-t-shirt-sneakers-t-shirt-angle-electronics-text-thumbnail.png';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`${scrolled ? 'bg-gray-900 shadow-lg' : 'bg-cover bg-center'} fixed top-0 w-full z-50 transition-all duration-300`}
            style={{
                backgroundImage: scrolled
                    ? 'none'
                    : 'url(https://images.unsplash.com/photo-1663970206579-c157cba7edda?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9uZG8lMjBkZSUyMHBhbnRhbGxhJTIwcGFyYSUyMHBjfGVufDB8fDB8fHww)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="w-full px-6 py-4 flex items-center justify-between">
                {/* Logo */}
        
                <div className="flex items-center">
                    <Link to="/" className="flex items-center">
                        <img src={Logo} alt="Logo" className="h-12 w-auto mr-3" />
                    </Link>
                </div>

                {/* Menú de Navegación */}
                <ul className="hidden md:flex space-x-6 text-white text-lg font-medium ml-auto">
                    <li><Link to="/" className="hover:text-red-400 transition-colors">Home</Link></li>
                    <li><Link to="/products" className="hover:text-red-400 transition-colors">Shop</Link></li>
                    <li><Link to="/category/niños" className="hover:text-red-400 transition-colors">Niños</Link></li>
                    <li><Link to="/category/adultos" className="hover:text-red-400 transition-colors">Adultos</Link></li>
                    <li><Link to="/about" className="hover:text-red-400 transition-colors">About</Link></li>
                    <li><Link to="/contact" className="hover:text-red-400 transition-colors">Contact</Link></li>
                </ul>

                {/* Botón de Menú para Móvil */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white focus:outline-none"
                    >
                        <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                    </button>
                </div>
            </div>

            {/* Menú Móvil Desplegable */}
            {menuOpen && (
                <div className="md:hidden bg-gray-800">
                    <ul className="flex flex-col items-center space-y-6 py-6 text-white text-lg font-medium">
                        <li><Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-red-400 transition-colors">Home</Link></li>
                        <li><Link to="/products" onClick={() => setMenuOpen(false)} className="hover:text-red-400 transition-colors">Shop</Link></li>
                        <li><Link to="/category/niños" onClick={() => setMenuOpen(false)} className="hover:text-red-400 transition-colors">Niños</Link></li>
                        <li><Link to="/category/adultos" onClick={() => setMenuOpen(false)} className="hover:text-red-400 transition-colors">Adultos</Link></li>
                        <li><Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-red-400 transition-colors">About</Link></li>
                        <li><Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-red-400 transition-colors">Contact</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
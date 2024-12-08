import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';


export default function Footer() {
    return (
        <footer className="bg-[#171e27] text-white py-10 w-full">
            <div className="container mx-auto px-6">
                {/* Grid principal */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Acerca de Nosotros */}
                    <div>
                        <h5 className="text-lg font-semibold mb-4 uppercase">Acerca de Nosotros</h5>
                        <p className="text-gray-400">
                            Somos una tienda en línea dedicada a ofrecer las mejores marcas al mejor precio. Con una amplia gama de productos, siempre tenemos algo para ti.
                        </p>
                    </div>
                    
                    {/* Enlaces Rápidos */}
                    <div>
                        <h5 className="text-lg font-semibold mb-4 uppercase">Enlaces Rápidos</h5>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-gray-400 hover:text-white">Inicio</a></li>
                            <li><a href="products" className="text-gray-400 hover:text-white">Productos</a></li>
                            <li><a href="contact" className="text-gray-400 hover:text-white">Contacto</a></li>
                            <li><a href="about" className="text-gray-400 hover:text-white">Términos y Condiciones</a></li>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div>
                        <h5 className="text-lg font-semibold mb-4 uppercase">Contacto</h5>
                        <p className="text-gray-400">
                            Email: <a href="mailto:Flavioluis.chiguay@alumnosulagos.cl" className="hover:text-white">Flavioluis.chiguay@alumnosulagos.cl</a>
                        </p>
                        <p className="text-gray-400">Teléfono: +56998672468</p>
                        <p className="text-gray-400">Dirección: CALLE BLANCO 123, CASTRO, CHILE</p>
                    </div>

                    {/* Síguenos */}
                    <div className="mt-10 text-center">
                    <h2 className="text-2xl font-semibold mb-4">Síguenos</h2>
                    <div className="flex justify-center space-x-6">
                        <a href="https://www.facebook.com/" className="text-blue-600 hover:text-blue-700 text-3xl">
                            <FaFacebook />
                        </a>
                        <a href="https://twitter.com/" className="text-blue-400 hover:text-blue-500 text-3xl">
                            <FaTwitter />
                        </a>
                        <a href="https://www.instagram.com/" className="text-pink-600 hover:text-pink-700 text-3xl">
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com/" className="text-blue-800 hover:text-blue-900 text-3xl">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
                </div>

                {/* Derechos reservados */}
                <div className="text-center mt-10 text-gray-400">
                    <p>&copy; 2024 Tu Empresa. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
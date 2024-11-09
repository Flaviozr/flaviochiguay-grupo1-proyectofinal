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
                    <div>
                        <h5 className="text-lg font-semibold mb-4 uppercase">Síguenos</h5>
                        <div className="flex space-x-4 text-2xl">
                            <a href="https://www.facebook.com/" className="text-gray-400 hover:text-white"><i className="bi bi-facebook"></i></a>
                            <a href="https://x.com/?lang=es" className="text-gray-400 hover:text-white"><i className="bi bi-twitter"></i></a>
                            <a href="https://www.instagram.com/" className="text-gray-400 hover:text-white"><i className="bi bi-instagram"></i></a>
                            <a href="https://cl.linkedin.com/" className="text-gray-400 hover:text-white"><i className="bi bi-linkedin"></i></a>
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
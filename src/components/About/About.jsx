export default function About() {
    return (
        <div className="container mx-auto max-w-[1170px] py-12 px-6 mt-20">
            <div 
                className="bg-gray-800 bg-opacity-90 p-10 rounded-lg shadow-lg text-white"
                style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <h1 className="text-4xl font-bold mb-6 text-center">
                    Acerca de Nosotros
                </h1>

                <p className="text-lg text-gray-300 mb-8 text-center">
                    Somos una tienda de calzado comprometida en ofrecer la mejor selección de zapatillas y accesorios de las marcas más reconocidas a nivel mundial. 
                    Nuestra misión es proporcionar a nuestros clientes productos de alta calidad, estilo y comodidad.
                </p>

                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-2xl font-semibold mb-4">Nuestra Historia</h2>
                        <p className="text-gray-300 mb-4">
                            Fundada en 2010, nuestra tienda comenzó como un pequeño negocio local enfocado en satisfacer a los amantes de las zapatillas. A través de los años, hemos crecido y evolucionado, expandiéndonos y adaptándonos a las necesidades del mercado.
                        </p>
                        <p className="text-gray-300 mb-4">
                            Hoy, somos reconocidos por ofrecer productos únicos y exclusivos que cumplen con los más altos estándares de calidad, satisfaciendo a nuestros clientes en cada paso.
                        </p>
                    </div>

                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-2xl font-semibold mb-4">Compromiso con Nuestros Clientes</h2>
                        <p className="text-gray-300 mb-4">
                            Nos enorgullece brindar una experiencia de compra excepcional, priorizando la atención y satisfacción de nuestros clientes. Sabemos que cada cliente es único, por eso ofrecemos asesoría personalizada en cada compra.
                        </p>
                        <p className="text-gray-300 mb-4">
                            Nos esforzamos por mantener una relación cercana y duradera con nuestra comunidad, asegurándonos de que cada cliente reciba un trato especial.
                        </p>
                    </div>
                </div>

                <div className="mt-10 text-center">
                    <h2 className="text-2xl font-semibold mb-4">Nuestros Valores</h2>
                    <p className="text-gray-300 mb-2">
                        <strong>Calidad:</strong> Solo trabajamos con marcas reconocidas y garantizamos productos auténticos y duraderos.
                    </p>
                    <p className="text-gray-300 mb-2">
                        <strong>Confianza:</strong> Nuestra relación con los clientes está basada en la honestidad y el respeto mutuo.
                    </p>
                    <p className="text-gray-300 mb-2">
                        <strong>Innovación:</strong> Nos adaptamos constantemente a las tendencias para ofrecer productos actuales y de moda.
                    </p>
                </div>
            </div>
        </div>
    );
}

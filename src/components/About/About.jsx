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
                    En <span className="font-extrabold text-pink-500">RealKing Store</span>, somos apasionados por ofrecer la mejor selección de zapatillas y accesorios de las marcas más reconocidas a nivel mundial. Nuestra misión es proporcionar a nuestros clientes productos de alta calidad, estilo y comodidad, todo bajo el mismo techo.
                </p>

                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-2xl font-semibold mb-4">Nuestra Historia</h2>
                        <p className="text-gray-300 mb-4">
                            Fundada en 2010, nuestra tienda comenzó como un pequeño negocio local enfocado en satisfacer a los amantes de las zapatillas. A lo largo de los años, hemos crecido y evolucionado, expandiéndonos a nivel nacional y ofreciendo un catálogo más amplio de productos para todos los gustos.
                        </p>
                        <p className="text-gray-300 mb-4">
                            Hoy en día, somos un referente en el mercado de calzado urbano y deportivo. Nos enorgullece ofrecer productos exclusivos que no solo destacan por su diseño, sino por la calidad y comodidad que brindan.
                        </p>
                    </div>

                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-2xl font-semibold mb-4">Compromiso con Nuestros Clientes</h2>
                        <p className="text-gray-300 mb-4">
                            En <span className="font-extrabold text-pink-500">RealKing Store</span>, sabemos lo importante que es la experiencia de compra. Por eso, nos esforzamos por brindar un servicio personalizado que se adapte a las necesidades de cada cliente. Ya sea que busques un par para correr, para el día a día o para una ocasión especial, nuestro equipo está listo para asesorarte.
                        </p>
                        <p className="text-gray-300 mb-4">
                            La satisfacción de nuestros clientes es nuestra prioridad. Nos enorgullece ofrecer un servicio al cliente de primera calidad, asegurándonos de que cada compra sea una experiencia agradable y sin complicaciones.
                        </p>
                    </div>
                </div>

                <div className="mt-10 text-center">
                    <h2 className="text-2xl font-semibold mb-4">Nuestros Valores</h2>
                    <p className="text-gray-300 mb-2">
                        <strong>Calidad:</strong> Trabajamos solo con marcas líderes en la industria, asegurando que cada producto que ofrecemos sea auténtico, duradero y cumpla con los estándares más altos.
                    </p>
                    <p className="text-gray-300 mb-2">
                        <strong>Confianza:</strong> En <span className="font-extrabold text-pink-500">RealKing Store</span> valoramos la transparencia y el trato honesto con nuestros clientes. Estamos comprometidos con mantener una relación basada en la confianza.
                    </p>
                    <p className="text-gray-300 mb-2">
                        <strong>Innovación:</strong> El mundo de la moda siempre está en movimiento, y nosotros también. Nos mantenemos al tanto de las últimas tendencias para ofrecerte productos modernos y de alta tecnología.
                    </p>
                    <p className="text-gray-300 mb-2">
                        <strong>Pasión:</strong> Nuestra pasión por las zapatillas y la moda urbana nos impulsa a seguir ofreciendo lo mejor a nuestros clientes. Cada par de zapatillas que vendemos representa nuestra dedicación por lo que hacemos.
                    </p>
                </div>

                <div className="mt-10 text-center">
                    <h2 className="text-2xl font-semibold mb-4">Nuestra Visión</h2>
                    <p className="text-gray-300 mb-4">
                        En <span className="font-extrabold text-pink-500">RealKing Store</span>, buscamos ser la tienda en línea líder para todos los fanáticos de las zapatillas y el calzado urbano. Nuestro objetivo es llegar a todos los rincones del mundo, ofreciendo una experiencia de compra única, con productos exclusivos y un servicio al cliente impecable.
                    </p>
                    <p className="text-gray-300 mb-4">
                        Queremos que cada cliente que visite nuestra tienda se sienta parte de una comunidad que comparte la misma pasión por la moda y el estilo. Creemos que la zapatilla perfecta no es solo un accesorio, es una forma de expresar tu identidad.
                    </p>
                </div>

                <div className="mt-10 text-center">
                    <h2 className="text-2xl font-semibold mb-4">¿Por qué Elegirnos?</h2>
                    <ul className="list-disc text-lg text-gray-300 pl-8">
                        <li>Entrega rápida y segura, porque sabemos lo importante que es tener tus zapatillas a tiempo.</li>
                        <li>Precios competitivos que te permiten acceder a lo mejor del mercado sin que tu bolsillo sufra.</li>
                        <li>Una atención al cliente que te hace sentir valorado y acompañado durante todo el proceso de compra.</li>
                        <li>Productos exclusivos de marcas de renombre que garantizan calidad, estilo y durabilidad.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

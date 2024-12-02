export default function Contact() {
    return (
        <div 
            className="container mx-auto max-w-[1170px] py-12 px-6 mt-20"
        >
            <div 
                className="bg-gray-800 bg-opacity-90 p-10 rounded-lg shadow-lg text-white"
                style={{
                    backgroundImage: 'url("https://your-background-image-url.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <h1 className="text-4xl font-bold mb-6 text-center">
                    Contáctanos
                </h1>

                <p className="text-lg text-gray-300 mb-8 text-center">
                    En nuestra tienda, nos importa cada cliente. Si tienes alguna pregunta sobre nuestros productos, pedidos o servicios, no dudes en ponerte en contacto con nosotros. Nuestro equipo está siempre dispuesto a ayudarte.
                </p>

                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-2xl font-semibold mb-4">Información de Contacto</h2>
                        <p className="text-gray-300 mb-2">
                            <strong>Dirección:</strong> Calle Blanco 123, Castro, Chile
                        </p>
                        <p className="text-gray-300 mb-2">
                            <strong>Teléfono:</strong> +569 9867 2468
                        </p>
                        <p className="text-gray-300 mb-2">
                            <strong>Email:</strong> <a href="mailto:flavioluis.chiguay@alumnosulagos.cl" className="text-blue-400 hover:underline">flavioluis.chiguay@alumnosulagos.cl</a>
                        </p>
                    </div>

                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-2xl font-semibold mb-4">Horario de Atención</h2>
                        <p className="text-gray-300 mb-2">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-300 mb-2">Sábado: 10:00 AM - 4:00 PM</p>
                        <p className="text-gray-300 mb-2">Domingo: Cerrado</p>
                    </div>
                </div>

                <div className="mt-10">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Envíanos un mensaje</h2>
                    <form className="flex flex-col gap-4">
                        <input 
                            type="text" 
                            placeholder="Nombre completo" 
                            className="p-4 rounded-lg bg-gray-900 bg-opacity-75 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input 
                            type="email" 
                            placeholder="Correo electrónico" 
                            className="p-4 rounded-lg bg-gray-900 bg-opacity-75 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea 
                            placeholder="Tu mensaje" 
                            rows="4" 
                            className="p-4 rounded-lg bg-gray-900 bg-opacity-75 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button 
                            type="submit" 
                            className="bg-blue-600 hover:bg-blue-700 transition duration-300 p-4 rounded-lg text-lg font-semibold"
                        >
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

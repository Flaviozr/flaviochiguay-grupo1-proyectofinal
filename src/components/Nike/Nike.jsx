import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Loading from "../Loading/Loading";

export default function NikePage() {
    const [isLoading, setIsLoading] = useState(true);

    const nikeInfo = {
        name: "Nike",
        description: "Nike, sinónimo de innovación y estilo, es la marca líder en ropa y calzado deportivo. Desde sus orígenes, ha sido pionera en la creación de productos de alto rendimiento y con un diseño que marca tendencia. Hoy, Nike continúa revolucionando la industria del deporte con tecnología avanzada y diseños que potencian el rendimiento de los atletas en todo el mundo.",
        image: "https://i.pinimg.com/736x/49/f8/dd/49f8ddf2b4684a56dc843425815b41dd.jpg",
        link: "/productos/nike",
    };

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="relative bg-gray-900">
            {/* Video de fondo */}
            <div className="relative w-full h-screen overflow-hidden">
                <div className="absolute inset-0">
                    <iframe
                        src="https://www.youtube.com/embed/o1ud8Z6JTew?autoplay=1&mute=1&loop=1&playlist=o1ud8Z6JTew"
                        title="Nike Commercial"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 bg-black bg-opacity-40">
                    <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg">
                        Nike - Innovación que inspira
                    </h1>
                    <p className="text-xl mb-8 opacity-90 drop-shadow-lg">
                        Descubre la última tecnología en calzado y ropa deportiva de Nike, diseñada para llevar tu rendimiento al siguiente nivel.
                    </p>
                    <Link
                        to='/productos'
                        className="bg-blue-600 text-white px-8 py-3 rounded-full text-xl font-bold transform hover:scale-110 hover:bg-blue-700 transition-all"
                    >
                        Explorar Productos
                    </Link>
                </div>
            </div>

            {/* Información de Nike */}
            <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-xl overflow-hidden transition-all transform hover:scale-105 hover:shadow-lg hover:border-4 border-indigo-600 p-8 animate__animated animate__fadeIn mt-16 mx-8">
                <div className="md:w-1/2">
                    <img
                        src={nikeInfo.image}
                        alt={nikeInfo.name}
                        className="w-full h-80 object-cover rounded-xl shadow-lg transition-opacity opacity-80 hover:opacity-100"
                    />
                </div>
                <div className="md:w-1/2 p-8">
                    <h2 className="text-5xl font-extrabold text-gray-900 mb-6">{nikeInfo.name}</h2>
                    <p className="text-lg text-gray-700 mb-6">{nikeInfo.description}</p>
                    <Link
                        to={nikeInfo.link}
                        className="bg-blue-600 text-white px-8 py-4 rounded-lg text-xl hover:bg-blue-700 transition-all transform hover:scale-110 hover:shadow-xl"
                    >
                        Ver más productos
                    </Link>
                </div>
            </div>

            {/* Lo más destacado de Nike */}
            <div className="mt-32 text-white text-center">
                <h2 className="text-5xl font-extrabold mb-12">Lo más destacado de Nike</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mx-4">
                    <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transform transition-all hover:scale-105 hover:border-4 border-indigo-600">
                        <img
                            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e3cd566f-fc36-420f-a1b9-c4283cb87b32/air-force-1-07-zapatos-2P7hL9.png"
                            alt="Nike Air Force 1"
                            className="w-full h-56 object-cover rounded-lg mb-6"
                        />
                        <h3 className="text-2xl font-semibold text-white mb-4">Nike Air Force 1</h3>
                        <p className="text-gray-400">Un ícono del calzado que nunca pasa de moda. Diseño atemporal para todos los días.</p>
                    </div>
                    <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transform transition-all hover:scale-105 hover:border-4 border-indigo-600">
                        <img
                            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e56fa4e0-3ad5-4676-b727-67bfe59c95a9/nike-zoomx-vaporfly-next-2-zapatos-de-correr-vzrlgX.png"
                            alt="Nike ZoomX Vaporfly Next%"
                            className="w-full h-56 object-cover rounded-lg mb-6"
                        />
                        <h3 className="text-2xl font-semibold text-white mb-4">Nike ZoomX Vaporfly Next% 2</h3>
                        <p className="text-gray-400">Calzado de alto rendimiento, ideal para maratones y carreras largas. Siente la velocidad.</p>
                    </div>
                    <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transform transition-all hover:scale-105 hover:border-4 border-indigo-600">
                        <img
                            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/178e56bb-45f9-4e7d-b4b2-69c7b8a0d11e/nike-dri-fit-elite-top-sudadera-de-fitness-TqXgq8.png"
                            alt="Nike Dri-FIT Elite"
                            className="w-full h-56 object-cover rounded-lg mb-6"
                        />
                        <h3 className="text-2xl font-semibold text-white mb-4">Nike Dri-FIT Elite</h3>
                        <p className="text-gray-400">Tecnología Dri-FIT que mantiene la transpiración a raya mientras entrenas. Confort y frescura.</p>
                    </div>
                </div>
            </div>

            {/* Características de Nike */}
            <div className="mt-32 px-8 text-center">
                <h2 className="text-5xl font-extrabold text-white mb-16">Características clave de Nike</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mx-4">
                    <div className="bg-white p-10 rounded-xl shadow-xl hover:shadow-2xl transform transition-all hover:scale-105 hover:border-4 border-indigo-600">
                        <div className="flex justify-center items-center mb-6">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/0/06/Nike_logo.svg"
                                alt="Innovación"
                                className="w-20 h-20"
                            />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Innovación</h3>
                        <p className="text-gray-600">Tecnologías avanzadas diseñadas para ofrecerte el máximo rendimiento.</p>
                    </div>
                    <div className="bg-white p-10 rounded-xl shadow-xl hover:shadow-2xl transform transition-all hover:scale-105 hover:border-4 border-indigo-600">
                        <div className="flex justify-center items-center mb-6">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/a/af/Nike_Swoosh_Logo.svg"
                                alt="Estilo"
                                className="w-20 h-20"
                            />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Estilo</h3>
                        <p className="text-gray-600">Diseños icónicos que combinan estética y funcionalidad.</p>
                    </div>
                    <div className="bg-white p-10 rounded-xl shadow-xl hover:shadow-2xl transform transition-all hover:scale-105 hover:border-4 border-indigo-600">
                        <div className="flex justify-center items-center mb-6">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Nike_Spree_Logo_2017.svg"
                                alt="Confort"
                                className="w-20 h-20"
                            />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Confort</h3>
                        <p className="text-gray-600">Materiales suaves y flexibles que se adaptan a tu cuerpo para un ajuste perfecto.</p>
                    </div>
                    <div className="bg-white p-10 rounded-xl shadow-xl hover:shadow-2xl transform transition-all hover:scale-105 hover:border-4 border-indigo-600">
                        <div className="flex justify-center items-center mb-6">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/7/76/Nike_Wordmark.svg"
                                alt="Durabilidad"
                                className="w-20 h-20"
                            />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Durabilidad</h3>
                        <p className="text-gray-600">Materiales de alta calidad que garantizan una larga vida útil.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Loading from "../Loading/Loading";
export default function NikePage() {
    const [isLoading, setIsLoading] = useState(true);

    const nikeInfo = {
        name: "Nike",
        description: "Nike no solo es una marca, es un símbolo de innovación. Con sus productos diseñados para llevar el rendimiento deportivo al siguiente nivel, Nike se ha convertido en la elección de los atletas más exigentes. Desde calzado hasta ropa deportiva, Nike es la marca que impulsa los límites de quienes buscan siempre más.",
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
        <div>

            <div className="relative w-full h-screen overflow-hidden">
                <div className="absolute inset-0">
                    <iframe
                        src="https://www.youtube.com/embed/o1ud8Z6JTew?autoplay=1&mute=1&loop=1&playlist=o1ud8Z6JTew"
                        title="New Balance Commercial | Sony A7SIII"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 bg-black bg-opacity-30">
                    <h1 className="text-6xl font-bold mb-6 drop-shadow-lg">
                    Nike - Innovación y Estilo
                    </h1>
                    <p className="text-xl mb-8 opacity-90 drop-shadow-lg">
                    Explora los productos de Nike, la marca que ha revolucionado el mundo del deporte y el estilo. Con tecnología de vanguardia, cada uno de sus productos está diseñado para maximizar tu rendimiento y estilo. 
                    </p>
                    <Link
                        to='/products'
                        className="bg-blue-600 text-white px-8 py-3 rounded-full text-xl font-bold transform hover:scale-110 hover:bg-blue-700 transition-all"
                    >
                        Explorar Productos
                    </Link>
                </div>
            </div>

                <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-2xl overflow-hidden transition-all transform hover:scale-105 hover:shadow-lg hover:border-4 border-indigo-600 p-4 animate__animated animate__fadeIn">
                    <div className="md:w-1/2">
                        <img
                            src={nikeInfo.image}
                            alt={nikeInfo.name}
                            className="w-full h-80 object-cover rounded-xl shadow-lg transition-opacity opacity-80 hover:opacity-100"
                        />
                    </div>
                    <div className="md:w-1/2 p-10">
                        <h2 className="text-5xl font-semibold text-gray-900 mb-4 text-gradient">{nikeInfo.name}</h2>
                        <p className="text-gray-700 text-lg mb-6">{nikeInfo.description}</p>
                        <Link
                            to={nikeInfo.link}
                            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-xl hover:bg-blue-700 transition-all transform hover:scale-110 hover:shadow-xl"
                        >
                            Ver más productos
                        </Link>
                    </div>
                </div>

                <div className="mt-32 bg-gray-900 p-16 rounded-xl text-white">
                    <h2 className="text-5xl font-extrabold text-center mb-12">Lo que dicen nuestros clientes</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="bg-gray-800 p-8 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-lg">
                            <p className="text-lg mb-4">"Las zapatillas Nike han cambiado mi rendimiento en la cancha. Son cómodas y ofrecen un soporte increíble."</p>
                            <h4 className="font-bold">Carlos M.</h4>
                        </div>
                        <div className="bg-gray-800 p-8 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-lg">
                            <p className="text-lg mb-4">"Como corredor, las Nike son mis favoritas. Su tecnología de amortiguación es insuperable."</p>
                            <h4 className="font-bold">Sofía R.</h4>
                        </div>
                        <div className="bg-gray-800 p-8 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-lg">
                            <p className="text-lg mb-4">"Nunca había tenido un calzado tan ligero y resistente. Nike siempre me sorprende con la calidad."</p>
                            <h4 className="font-bold">Luis G.</h4>
                        </div>
                    </div>
                </div>

                <div className="mt-32">
                    <h2 className="text-5xl font-extrabold text-center text-white mb-12 animate__animated animate__fadeIn">
                        Características de Nike
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                        <div className="bg-white p-8 rounded-xl shadow-xl text-center transform transition-all hover:scale-105 hover:shadow-lg hover:border-4 border-indigo-600">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/0/06/Nike_logo.svg"
                                alt="Innovación"
                                className="w-24 mx-auto mb-6"
                            />
                            <h3 className="text-2xl font-semibold text-gray-800">Innovación</h3>
                            <p className="text-gray-600 mt-2">Tecnologías avanzadas que mejoran el rendimiento.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-xl text-center transform transition-all hover:scale-105 hover:shadow-lg hover:border-4 border-indigo-600">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/a/af/Nike_Swoosh_Logo.svg"
                                alt="Estilo"
                                className="w-24 mx-auto mb-6"
                            />
                            <h3 className="text-2xl font-semibold text-gray-800">Estilo</h3>
                            <p className="text-gray-600 mt-2">Diseños modernos que se adaptan a todos.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-xl text-center transform transition-all hover:scale-105 hover:shadow-lg hover:border-4 border-indigo-600">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Nike_Spree_Logo_2017.svg"
                                alt="Confort"
                                className="w-24 mx-auto mb-6"
                            />
                            <h3 className="text-2xl font-semibold text-gray-800">Confort</h3>
                            <p className="text-gray-600 mt-2">Comodidad excepcional en cada paso.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-xl text-center transform transition-all hover:scale-105 hover:shadow-lg hover:border-4 border-indigo-600">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/7/76/Nike_Wordmark.svg"
                                alt="Durabilidad"
                                className="w-24 mx-auto mb-6"
                            />
                            <h3 className="text-2xl font-semibold text-gray-800">Durabilidad</h3>
                            <p className="text-gray-600 mt-2">Materiales de alta calidad que duran por años.</p>
                        </div>
                    </div>
                </div>

            </div>
    );
}

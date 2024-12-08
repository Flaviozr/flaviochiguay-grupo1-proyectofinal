import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

export default function AdidasPage() {
    const [isLoading, setIsLoading] = useState(true);

    const adidasInfo = {
        name: "Adidas",
        description:
            "Adidas es una de las marcas más icónicas en el mundo del deporte. Con su enfoque en la sostenibilidad y la innovación, Adidas ha creado productos diseñados para rendir al más alto nivel. Desde calzado hasta ropa, la marca alemana se dedica a inspirar a atletas y personas activas alrededor del mundo.",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Adidas_Logo.svg",
        link: "/products",
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
        <div
            className="w-full min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: `linear-gradient(to bottom, #000, #444), url('https://img.wallscloud.net/uploads/thumb/2538057574/adidas-logo-black-white-stripe-K6z8-1024x576-RM-80.webp')`,
            }}
        >
            <div className="bg-black bg-opacity-80 min-h-screen">
                <div className="relative h-screen">
                    <iframe
                        src="https://www.youtube.com/embed/LnCpGsZgTkI?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=LnCpGsZgTkI"
                        title="Adidas Commercial"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover"
                    ></iframe>

                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 bg-black bg-opacity-50">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                            Adidas: Innovación y Rendimiento
                        </h1>
                        <p className="text-lg md:text-xl mb-8 opacity-90 drop-shadow-lg">
                            Con un enfoque en la innovación, Adidas redefine el deporte y la moda.
                            Descubre productos diseñados para inspirarte y alcanzar nuevas alturas.
                        </p>
                        <Link
                            to="/products"
                            className="bg-green-600 text-white px-8 py-3 rounded-full text-lg md:text-xl font-bold transform hover:scale-110 hover:bg-green-700 transition-all"
                            aria-label="Explorar productos de Adidas"
                        >
                            Explorar Productos
                        </Link>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-blue-900 via-gray-800 to-black py-16">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-2xl overflow-hidden transition-all transform hover:scale-105 hover:shadow-lg hover:border-4 border-indigo-600 p-4">
                            <div className="md:w-1/2">
                                <img
                                    src={adidasInfo.image}
                                    alt={adidasInfo.name}
                                    className="w-full h-80 object-cover rounded-xl shadow-lg transition-opacity opacity-80 hover:opacity-100"
                                />
                            </div>
                            <div className="md:w-1/2 p-10">
                                <h2 className="text-5xl font-semibold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                                    {adidasInfo.name}
                                </h2>
                                <p className="text-gray-700 text-lg mb-6">
                                    {adidasInfo.description}
                                </p>
                                <Link
                                    to={adidasInfo.link}
                                    className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg md:text-xl hover:bg-green-700 transition-all transform hover:scale-110 hover:shadow-xl"
                                    aria-label="Ver más productos de Adidas"
                                >
                                    Ver más productos
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

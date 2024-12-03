import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading"; 

export default function NewBalanceProducts() {
    const [isLoading, setIsLoading] = useState(true);

    const newBalanceProducts = [
        {
            name: "New Balance 990v5",
            description: "Con una excelente amortiguación y un diseño icónico, las New Balance 990v5 son ideales para aquellos que buscan comodidad y estilo.",
            image: "https://www.newbalance.es/dw/image/v2/BDDN_PRD/on/demandware.static/-/Sites-new-balance-master-catalog/default/dw1a1224a6/images/hi-res/M990v5_Silver_M_hero.png?sw=775&sh=775&sm=fit",
            link: "/producto/new-balance-990v5",
        },
        {
            name: "New Balance Fresh Foam 1080v11",
            description: "Las Fresh Foam 1080v11 ofrecen la mejor tecnología de amortiguación para una experiencia de carrera suave y cómoda.",
            image: "https://www.newbalance.es/dw/image/v2/BDDN_PRD/on/demandware.static/-/Sites-new-balance-master-catalog/default/dw86e5b785/images/hi-res/W1080v11_KV_hero.png?sw=775&sh=775&sm=fit",
            link: "/producto/new-balance-fresh-foam-1080v11",
        },
        {
            name: "New Balance 574",
            description: "Un clásico renovado, las New Balance 574 combinan estilo y comodidad para todos los días.",
            image: "https://www.newbalance.es/dw/image/v2/BDDN_PRD/on/demandware.static/-/Sites-new-balance-master-catalog/default/dw9b4207a0/images/hi-res/M574OGG_hero.png?sw=775&sh=775&sm=fit",
            link: "/producto/new-balance-574",
        },
    ];

    // Simulamos la carga de datos con un retraso
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000); // Simula la carga de datos
    }, []);

    if (isLoading) {
        return <Loading />; // Muestra el componente de carga
    }

    return (
        <div className="bg-gradient-to-r from-blue-900 via-gray-700 to-blue-900 min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4">
                <h1 className="text-5xl font-extrabold text-center text-white mb-12 tracking-wide text-shadow-xl animate__animated animate__fadeIn">
                    Productos New Balance Más Populares
                </h1>
                <p className="text-center text-lg text-white mb-12 leading-relaxed max-w-3xl mx-auto animate__animated animate__fadeIn">
                    Descubre los mejores modelos de New Balance, conocidos por su comodidad y estilo. Encuentra tu par perfecto aquí.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {newBalanceProducts.map((product, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
                        >
                            <div className="relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-72 object-cover rounded-t-xl group-hover:opacity-80 transition-opacity"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Link
                                        to={product.link}
                                        className="text-white text-lg font-semibold uppercase px-6 py-3 rounded-md bg-indigo-600 hover:bg-indigo-700 transition-all"
                                    >
                                        Ver Más
                                    </Link>
                                </div>
                            </div>

                            <div className="p-6">
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">{product.name}</h2>
                                <p className="text-gray-600 text-lg">{product.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading"; // Componente de carga

export default function NikeProducts() {
    const [isLoading, setIsLoading] = useState(true);

    // Simulación de productos de Nike
    const nikeProducts = [
        {
            name: "Nike Air Max 2024",
            description: "Con una nueva tecnología de amortiguación, estos Nike Air Max están diseñados para ofrecer el máximo confort y estilo.",
            image: "https://www.elespectador.com/resizer/v2/476MUNYYNFDCNPQJKCDN4DUK6I.jpg?auth=32dcaf42b83a7e661f8584a9b6c5441af83f7264d0512bacbeb677a63b848745&width=920&height=613&smart=true&quality=60",
            link: "/producto/nike-air-max-2024",
        },
        {
            name: "Nike ZoomX Vaporfly Next%",
            description: "Los Nike ZoomX Vaporfly Next% están diseñados para corredores de alto rendimiento, proporcionando una sensación ligera y velocidad inigualable.",
            image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,cs_srgb/1d704ff6-e0a7-4d26-9e99-020232b130e0/zoomx-vaporfly-next-2-road-racing-zapatillas-nd7Hpd.jpg",
            link: "/producto/nike-zoomx-vaporfly-next",
        },
        {
            name: "Nike Air Force 1 '07",
            description: "El clásico que nunca pasa de moda. Los Nike Air Force 1 '07 están diseñados con una silueta limpia y elegante que ofrece comodidad y estilo todo el día.",
            image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,cs_srgb/3e8b7be4-f1f2-4dbd-b3cf-433c2e7d647f/air-force-1-07-zapatillas-pvNkVV.jpg",
            link: "/producto/nike-air-force-1-07",
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
        <div className="bg-gradient-to-r from-black via-gray-800 to-black min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4">
                <h1 className="text-5xl font-extrabold text-center text-white mb-12 tracking-wide text-shadow-xl animate__animated animate__fadeIn">
                    Productos Nike Más Populares
                </h1>
                <p className="text-center text-lg text-white mb-12 leading-relaxed max-w-3xl mx-auto animate__animated animate__fadeIn">
                    Descubre los mejores productos de Nike, diseñados para el máximo rendimiento y estilo. Encuentra tus favoritos aquí.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {nikeProducts.map((product, index) => (
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

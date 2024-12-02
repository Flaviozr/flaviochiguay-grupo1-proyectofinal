import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";

export default function Adidas() {
    const [isLoading, setIsLoading] = useState(true);

    // Simulación de carga
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false); // Finaliza la carga después de 2 segundos
        }, 2000);

        return () => clearTimeout(timer); // Limpia el temporizador al desmontar
    }, []);

    const products = [
        {
            id: 1,
            name: "Ultraboost 21",
            description: "Zapatillas de alto rendimiento diseñadas para el máximo confort.",
            img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/5b5c774c491b4bbba803aa0d0143c7af_9366/Ultraboost_21_Zapatos_Blanco_GX5052_01_standard.jpg",
        },
        {
            id: 2,
            name: "Adilette Slides",
            description: "La sandalia perfecta para relajarte con estilo.",
            img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/79bc5c5d48f148369b82aa910138c9da_9366/Adilette_Comfort_Slides_Negro_EG1756_01_standard.jpg",
        },
        {
            id: 3,
            name: "Superstar",
            description: "El clásico atemporal que define generaciones.",
            img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/1d702af347f44ff58434ad7200f76f89_9366/Superstar_Zapatos_Blanco_FX4031_01_standard.jpg",
        },
    ];

    // Muestra el componente Loading mientras isLoading sea true
    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="bg-gradient-to-r from-gray-900 via-black to-gray-800 min-h-screen text-white pt-28">
            {/* Sección de historia */}
            <section className="py-16 px-8 text-center max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-6">La Filosofía Adidas</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                    Desde 1949, Adidas ha sido pionera en la creación de calzado, ropa y accesorios que
                    combinan innovación y estilo. Nuestra misión es inspirar y permitir a las personas superar
                    sus límites a través de productos diseñados para todos.
                </p>
            </section>

            {/* Carrusel de productos */}
            <section className="py-16 bg-gray-800 bg-opacity-50">
                <h2 className="text-4xl font-bold text-center mb-10">Productos Destacados</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white text-black rounded-lg shadow-lg overflow-hidden group hover:scale-105 transform transition-all duration-500"
                        >
                            <img
                                src={product.img}
                                alt={product.name}
                                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                                <p className="text-gray-700 mb-4">{product.description}</p>
                                <button className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition">
                                    Ver Más
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Galería de imágenes */}
            <section className="py-16">
                <h2 className="text-4xl font-bold text-center mb-10">Galería Inspiradora</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-8">
                    <img
                        src="https://wallpapers.com/images/featured/adidas-logo-5120x2880-qxdchbujtjv8msdp.jpg"
                        alt="Galería 1"
                        className="w-full h-64 object-cover rounded-lg shadow-lg transform hover:scale-105 transition"
                    />
                    <img
                        src="https://assets.adidas.com/images/w_600,f_auto,q_auto/32b13c4c0ddf42379643ac9800953eb1_9366/Originals_3D_Low-Res.png"
                        alt="Galería 2"
                        className="w-full h-64 object-cover rounded-lg shadow-lg transform hover:scale-105 transition"
                    />
                    <img
                        src="https://wallpapers.com/images/hd/adidas-ultraboost-sneaker-design-6qihtlxv0lt8vfs6.jpg"
                        alt="Galería 3"
                        className="w-full h-64 object-cover rounded-lg shadow-lg transform hover:scale-105 transition"
                    />
                </div>
            </section>
        </div>
    );
}

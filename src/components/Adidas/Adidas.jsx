import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

export default function AdidasPage() {
    const [isLoading, setIsLoading] = useState(true);

    const adidasInfo = {
        name: "Adidas",
        description:
            "Adidas combina innovación, sostenibilidad y diseño para liderar en el mundo del deporte y la moda. Con productos de alto rendimiento y una visión hacia el futuro, Adidas inspira a quienes buscan alcanzar lo extraordinario.",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Adidas_Logo.svg",
        link: "/products",
    };

    const featuredProducts = [
        {
            title: "Ultraboost 22",
            description: "Rendimiento excepcional con estilo incomparable.",
            image: "https://source.unsplash.com/400x300/?adidas,ultraboost",
            link: "/productos/ultraboost",
        },
        {
            title: "Stan Smith",
            description: "El ícono renovado con materiales ecológicos.",
            image: "https://source.unsplash.com/400x300/?adidas,stan-smith",
            link: "/productos/stansmith",
        },
        {
            title: "ZX 2K Boost",
            description: "Innovación audaz en cada paso.",
            image: "https://source.unsplash.com/400x300/?adidas,zx-2k-boost",
            link: "/productos/zx2kboost",
        },
    ];

    const galleryImages = [
        "https://source.unsplash.com/600x400/?adidas,shoes",
        "https://source.unsplash.com/600x400/?adidas,running",
        "https://source.unsplash.com/600x400/?adidas,apparel",
        "https://source.unsplash.com/600x400/?adidas,training",
    ];

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
            {/* Hero Section */}
            <section className="relative w-full h-screen">
                <iframe
                    src="https://www.youtube.com/embed/LnCpGsZgTkI?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=LnCpGsZgTkI"
                    title="Adidas Commercial"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                ></iframe>
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center p-6">
                    <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
                        Adidas: Líder en Innovación
                    </h1>
                    <p className="text-lg md:text-xl mt-4 mb-8 max-w-3xl">
                        Redefiniendo los límites del deporte y la moda. Descubre la colección
                        que transforma tu rendimiento y estilo.
                    </p>
                    <Link
                        to="/products"
                        className="bg-green-500 px-8 py-3 rounded-full text-lg font-bold hover:bg-green-600 transform transition-transform hover:scale-105"
                    >
                        Explorar Colección
                    </Link>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 px-6 md:px-12 bg-gray-800 text-gray-100">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <img
                            src={adidasInfo.image}
                            alt="Adidas Logo"
                            className="w-full max-w-sm mx-auto"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-bold mb-4">{adidasInfo.name}</h2>
                        <p className="text-lg leading-relaxed">{adidasInfo.description}</p>
                        <Link
                            to={adidasInfo.link}
                            className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600 transition"
                        >
                            Ver Más
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-16 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-100">
                <h2 className="text-center text-4xl font-extrabold mb-10">
                    Productos Destacados
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {featuredProducts.map((product, index) => (
                        <div
                            key={index}
                            className="bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                        >
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold">{product.title}</h3>
                                <p className="mt-2">{product.description}</p>
                                <Link
                                    to={product.link}
                                    className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-600 transition"
                                >
                                    Ver Producto
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Image Gallery */}
            <section className="py-16 bg-gray-900">
                <h2 className="text-center text-4xl font-extrabold text-gray-100 mb-10">
                    Galería de Inspiración
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
                        >
                            <img
                                src={image}
                                alt={`Adidas Gallery ${index + 1}`}
                                className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <p className="text-white font-bold text-lg">Ver Detalles</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}


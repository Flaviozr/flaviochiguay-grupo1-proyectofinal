import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

export default function NewBalancePage() {
    const [isLoading, setIsLoading] = useState(true);

    const newBalanceInfo = {
        name: "New Balance",
        description:
            "Desde sus inicios, New Balance ha combinado la innovación con el estilo. Con una misión clara: ofrecer productos que mejoren el rendimiento deportivo sin sacrificar la comodidad ni la calidad.",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/New_Balance_logo.svg",
        link: "/productos/newbalance",
    };

    const galleryImages = [
        {
            src: "https://source.unsplash.com/1200x800/?running,shoes",
            text: "Innovación en cada paso: Diseño y rendimiento.",
        },
        {
            src: "https://source.unsplash.com/1200x800/?sport,shoes",
            text: "Zapatillas diseñadas para superar tus límites.",
        },
        {
            src: "https://source.unsplash.com/1200x800/?fitness",
            text: "El equilibrio perfecto entre estilo y confort.",
        },
    ];

    const featuredProducts = [
        {
            title: "Zapatillas 574",
            description: "Clásicas y versátiles, ideales para cualquier ocasión.",
            image: "https://source.unsplash.com/400x400/?shoes,newbalance",
            link: "/productos/574",
        },
        {
            title: "Zapatillas Fresh Foam",
            description: "Comodidad extrema para corredores exigentes.",
            image: "https://source.unsplash.com/400x400/?running,newbalance",
            link: "/productos/freshfoam",
        },
        {
            title: "Zapatillas FuelCell",
            description: "Rendimiento superior para competencias.",
            image: "https://source.unsplash.com/400x400/?athletics,newbalance",
            link: "/productos/fuelcell",
        },
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
        <div>

            <div className="relative w-full h-screen overflow-hidden">
                <div className="absolute inset-0">
                    <iframe
                        src="https://www.youtube.com/embed/ZnGKt9f7yMQ?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=ZnGKt9f7yMQ"
                        title="New Balance Commercial | Sony A7SIII"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 bg-black bg-opacity-30">
                    <h1 className="text-6xl font-bold mb-6 drop-shadow-lg">
                        New Balance: Innovación y Estilo
                    </h1>
                    <p className="text-xl mb-8 opacity-90 drop-shadow-lg">
                        Con el objetivo de redefinir el rendimiento deportivo, New Balance ha sido la marca de elección para atletas que exigen lo mejor de sí mismos.
                    </p>
                    <Link
                        to={newBalanceInfo.link}
                        className="bg-blue-600 text-white px-8 py-3 rounded-full text-xl font-bold transform hover:scale-110 hover:bg-blue-700 transition-all"
                    >
                        Explorar Productos
                    </Link>
                </div>
            </div>

            <div className="py-12 bg-gray-100">
                <h2 className="text-4xl font-bold text-center mb-8">Inspiración New Balance</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-12">
                    {galleryImages.map((image, index) => (
                        <div key={index} className="relative group">
                            <img
                                src={image.src}
                                alt="Galería New Balance"
                                className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
                            />
                            <p className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg text-sm shadow-lg">
                                {image.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="py-12 bg-white">
                <h2 className="text-4xl font-bold text-center mb-8">Productos Destacados</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-12">
                    {featuredProducts.map((product, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                        >
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-40 object-cover rounded-t-lg"
                            />
                            <h3 className="text-xl font-bold mt-4">{product.title}</h3>
                            <p className="text-gray-700 mt-2">{product.description}</p>
                            <Link
                                to={product.link}
                                className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold transform hover:scale-105 hover:bg-blue-700 transition-all"
                            >
                                Ver Producto
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


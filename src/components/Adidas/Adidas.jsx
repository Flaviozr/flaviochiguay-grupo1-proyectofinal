import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Loading from "../Loading/Loading";

export default function AdidasPage() {
    const [isLoading, setIsLoading] = useState(true);

    const adidasInfo = {
        name: "Adidas",
        description: "Adidas es una de las marcas más icónicas en el mundo del deporte. Con su enfoque en la sostenibilidad y la innovación, Adidas ha creado productos diseñados para rendir al más alto nivel. Desde calzado hasta ropa, la marca alemana se dedica a inspirar a atletas y personas activas alrededor del mundo.",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Adidas_Logo.svg",
        link: "/productos/adidas",
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
        <div className="w-full min-h-screen">
            {/* Video de fondo */}
            <div className="relative h-screen">
                <iframe
                    src="https://www.youtube.com/embed/LnCpGsZgTkI?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=LnCpGsZgTkI"
                    title="Adidas Commercial"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full object-cover"
                ></iframe>

                {/* Título y descripción superpuestos */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 bg-black bg-opacity-50">
                    <h1 className="text-6xl font-bold mb-6 drop-shadow-lg">
                        Adidas: Innovación y Rendimiento
                    </h1>
                    <p className="text-xl mb-8 opacity-90 drop-shadow-lg">
                        Con un enfoque en la innovación, Adidas redefine el deporte y la moda. Descubre productos diseñados para inspirarte y alcanzar nuevas alturas.
                    </p>
                    <Link
                        to='/products'
                        className="bg-green-600 text-white px-8 py-3 rounded-full text-xl font-bold transform hover:scale-110 hover:bg-green-700 transition-all"
                    >
                        Explorar Productos
                    </Link>
                </div>
            </div>

            {/* Resto del contenido */}
            <div className="bg-gradient-to-r from-blue-900 via-gray-800 to-black py-16">
                <div className="container mx-auto px-4">
                    {/* Información de Adidas */}
                    <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-2xl overflow-hidden transition-all transform hover:scale-105 hover:shadow-lg hover:border-4 border-indigo-600 p-4">
                        <div className="md:w-1/2">
                            <img
                                src={adidasInfo.image}
                                alt={adidasInfo.name}
                                className="w-full h-80 object-cover rounded-xl shadow-lg transition-opacity opacity-80 hover:opacity-100"
                            />
                        </div>
                        <div className="md:w-1/2 p-10">
                            <h2 className="text-5xl font-semibold text-gray-900 mb-4 text-gradient">{adidasInfo.name}</h2>
                            <p className="text-gray-700 text-lg mb-6">{adidasInfo.description}</p>
                            <Link
                                to={adidasInfo.link}
                                className="bg-green-600 text-white px-8 py-4 rounded-lg text-xl hover:bg-green-700 transition-all transform hover:scale-110 hover:shadow-xl"
                            >
                                Ver más productos
                            </Link>
                        </div>
                    </div>
{/* Testimonios y otras secciones */}
<div className="mt-16">
    {/* Testimonios */}
    <section className="bg-gray-100 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Lo que nuestros clientes dicen
        </h2>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
                {
                    name: "María González",
                    comment: "Los productos de Adidas son increíbles. Su calidad y diseño me inspiran a dar lo mejor de mí cada día.",
                    image: "https://randomuser.me/api/portraits/women/1.jpg",
                },
                {
                    name: "Carlos Pérez",
                    comment: "La atención al cliente es impecable y las entregas siempre llegan a tiempo. ¡Gracias, Adidas!",
                    image: "https://randomuser.me/api/portraits/men/2.jpg",
                },
                {
                    name: "Sofía Rojas",
                    comment: "La comodidad de las zapatillas es incomparable. ¡Recomiendo Adidas a todos mis amigos!",
                    image: "https://randomuser.me/api/portraits/women/3.jpg",
                },
            ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                    <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold text-gray-800 text-center">{testimonial.name}</h3>
                    <p className="text-gray-600 text-center mt-4">{testimonial.comment}</p>
                </div>
            ))}
        </div>
    </section>

    {/* Carrusel de logros */}
    <section className="bg-gradient-to-r from-gray-800 to-gray-900 py-16 text-white">
        <h2 className="text-4xl font-bold text-center mb-12">
            Nuestros logros
        </h2>
        <div className="flex overflow-x-auto no-scrollbar space-x-6 px-6">
            {[
                { title: "10M+ Clientes Satisfechos", icon: "👟" },
                { title: "150 Países Alcanzados", icon: "🌎" },
                { title: "50 Años Innovando", icon: "🏆" },
                { title: "100+ Premios Globales", icon: "⭐" },
            ].map((achievement, index) => (
                <div key={index} className="min-w-[250px] bg-gray-700 p-8 rounded-lg shadow-lg text-center">
                    <div className="text-5xl mb-4">{achievement.icon}</div>
                    <h3 className="text-xl font-semibold">{achievement.title}</h3>
                </div>
            ))}
        </div>
    </section>

    {/* Galería de imágenes */}
    <section className="py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Momentos icónicos de Adidas
        </h2>
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
                "https://source.unsplash.com/600x400/?adidas,sports",
                "https://source.unsplash.com/600x400/?shoes,adidas",
                "https://source.unsplash.com/600x400/?athlete,adidas",
                "https://source.unsplash.com/600x400/?fitness,adidas",
                "https://source.unsplash.com/600x400/?adidas,training",
                "https://source.unsplash.com/600x400/?running,adidas",
            ].map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Adidas Moment ${index + 1}`}
                    className="w-full h-60 object-cover rounded-lg shadow-lg hover:scale-105 transform transition-all"
                />
            ))}
        </div>
    </section>
</div>

                </div>
            </div>
        </div>
    );
}

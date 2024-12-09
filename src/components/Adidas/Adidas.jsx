import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

export default function AdidasPage() {
    const [isLoading, setIsLoading] = useState(true);

    const adidasInfo = {
        name: "Adidas",
        description:
            "Adidas combina innovación, sostenibilidad y diseño para liderar en el mundo del deporte y la moda. Con productos de alto rendimiento y una visión hacia el futuro, Adidas inspira a quienes buscan alcanzar lo extraordinario.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxImYunKT-k4m18cpJCWGOmqoDxNnwxOgzhA&s",
        link: "/products",
    };

    const featuredProducts = [
        {
            title: "Adidas forum Low",
            description: "Rendimiento excepcional con estilo incomparable.",
            image: "https://i.pinimg.com/736x/58/74/6d/58746dd24d4491eff8d1a3a49157c022.jpg",
            link: "/productos/ultraboost",
        },
        {
            title: "Zapatillas Adidas Handball Spezial Originals",
            description: "El ícono renovado con materiales ecológicos.",
            image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/b638f655103f47eba01c2ea67cee0851_9366/Zapatillas_adidas_VL_Court_3.0_Negro_IH4789.jpg",
            link: "/products/10",
        },
        {
            title: "Zapatillas Adidas Adi2000 ",
            description: "Innovación audaz en cada paso.",
            image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/24ccaf91e6324e9cb42bf426ab32c15b_9366/Zapatillas_Adi2000_Negro_IF8821_011_hover_standard.jpg",
            link: "/products/31",
        },
    ];

    const galleryImages = [
        "https://media.fashionnetwork.com/cdn-cgi/image/format=auto/m/a266/06db/5ced/83ef/33d4/7f3c/060b/564a/7c6a/2188/2188.png",
        "https://campaign.theline.cl/wp-content/uploads/2021/11/adidas-forum-blog-header-1376x467px-1024x348.jpeg",
        "https://static.euronews.com/articles/stories/08/59/05/26/808x608_cmsv2_75aa317e-1504-50c0-8d93-325ce11ece0e-8590526.jpg",
        "https://blog.footdistrict.com/wp-content/uploads/2023/10/16_9-blog-ppal-adidas-original-1-scaled.jpg",
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
                                    to='/products/6'
                                    className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-600 transition"
                                >
                                    Ver Producto
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="mt-32 px-8 text-center">
    <h2 className="text-5xl font-extrabold text-white mb-16">Características clave de Adidas</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mx-4">
        {[
            {
                title: "Durabilidad",
                description: "Materiales resistentes y de alta calidad que aseguran una larga vida útil.",
                imgSrc:"https://media.fashionnetwork.com/cdn-cgi/image/format=auto/m/a266/06db/5ced/83ef/33d4/7f3c/060b/564a/7c6a/2188/2188.png",
                 
            },
            {
                title: "Tecnología",
                description: "Innovaciones como Boost y Primeknit para una experiencia más cómoda y dinámica.",
                imgSrc: "https://hips.hearstapps.com/hmg-prod/images/fw24-ub5-deconstructed-shoe-6695478bc774e.jpg?resize=980:*",
            },
            {
                title: "Estilo",
                description: "Diseños modernos y atrevidos que se adaptan a cualquier estilo personal.",
                imgSrc: "https://static.euronews.com/articles/stories/08/59/05/26/808x608_cmsv2_75aa317e-1504-50c0-8d93-325ce11ece0e-8590526.jpg",
            },
            {
                title: "Confort",
                description: "Tecnologías de amortiguación que brindan comodidad durante todo el día.",
                imgSrc: "https://blog.footdistrict.com/wp-content/uploads/2023/10/16_9-blog-ppal-adidas-original-1-scaled.jpg",
            },
        ].map((item, index) => (
            <div
                key={index}
                className="relative bg-white rounded-xl shadow-xl hover:shadow-2xl transform transition-all hover:scale-105 hover:border-4 border-indigo-600 overflow-hidden"
                style={{ width: "300px", height: "450px", margin: "auto" }}
            >
                <div className="relative h-full">
                    <img
                        src={item.imgSrc}
                        alt={item.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-200 px-4">{item.description}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>

            <div className="py-12 bg-blue-600 text-white text-center">
                <h2 className="text-4xl font-bold mb-6">Suscríbete para Más</h2>
                <p className="text-lg mb-6">Recibe ofertas exclusivas y las últimas novedades directamente en tu correo.</p>
                <form className="flex justify-center">
                    <input
                        type="email"
                        placeholder="Tu correo electrónico"
                        className="px-4 py-2 rounded-l-lg focus:outline-none text-black"
                    />
                    <button
                        type="submit"
                        className="bg-white text-blue-600 px-6 py-2 rounded-r-lg font-bold hover:bg-gray-200 transition-all"
                    >
                        Suscribirme
                    </button>
                </form>
            </div>
        </div>
    );
}


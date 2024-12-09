import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

export default function NewBalancePage() {
    const [isLoading, setIsLoading] = useState(true);

    const newBalanceInfo = {
        name: "New Balance",
        description:
            "Desde sus inicios, New Balance ha combinado la innovación con el estilo. Con una misión clara: ofrecer productos que mejoren el rendimiento deportivo sin sacrificar la comodidad ni la calidad.",
        link: "/products",
    };

    const galleryImages = [
        {
            src: "https://www.hipercalzado.com/img/leoblog/b/1/25/lg-b-new_balance_500_sneakers.jpg",
            text: "Innovación en cada paso: Diseño y rendimiento.",
        },
        {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFvaf0k5ukNLw9l9PnTXzvlGMGtps7v51bwQ&s",
            text: "Zapatillas diseñadas para superar tus límites.",
        },
        {
            src: "https://grailify.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMUdmQXc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--e4946f496217162037f6f645f3ab42b613f3f79b/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtDc0FScEFuUUNPZ3h4ZFdGc2FYUjVhV009IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--a33afcf2561dadd1dd8c8a8ec2ee9b1d76dacbef/image",
            text: "El equilibrio perfecto entre estilo y confort.",
        },
    ];

    const featuredProducts = [
        {
            title: "Zapatillas 574",
            description: "Clásicas y versátiles, ideales para cualquier ocasión.",
            image: "https://img.asmedia.epimg.net/resizer/v2/GBVT5RY6MJE5RPTEO42MKTM7YU.png?auth=8ed73630b10bcb4449241c3362cc5ac41d16decd4d92e28e14dc2fc9311e8885&width=1472&height=1104&smart=true",
            link: "/products/4",
        },
        {
            title: "Zapatillas Running Hombre New Balance 1080 V13",
            description: "Comodidad extrema para corredores exigentes.",
            image: "https://sparta.cl/media/catalog/product/z/a/zapatillas-running-hombre-new-balance-1080-v13-azul-marino-lateral.png?quality=80&bg-color=255,255,255&fit=bounds&height=550&width=600&canvas=600:550",
            link: "/products/32",
        },
        {
            title: "Zapatillas New Balance 530",
            description: "Rendimiento superior para competencias.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGuEyhjuF8MVLaWolRSLqTd1CWGQi9bc_oqw&s",
            link: "/products/25",
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

            <div className="py-12 bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700">
    <h2 className="text-4xl font-extrabold text-center text-white mb-16">Inspiración New Balance</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
        {galleryImages.map((image, index) => (
            <div
                key={index}
                className="relative group rounded-xl overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl"
            >
                <img
                    src={image.src}
                    alt="Galería New Balance"
                    className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white font-bold text-xl px-6 text-center">{image.text}</p>
                </div>
            </div>
        ))}
    </div>
</div>

<div className="py-12 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800">
    <h2 className="text-4xl font-extrabold text-center text-white mb-16">Productos Destacados</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
        {featuredProducts.map((product, index) => (
            <div
                key={index}
                className="bg-gray-800 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl overflow-hidden"
            >
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-6">
                    <h3 className="text-2xl font-bold text-white">{product.title}</h3>
                    <p className="text-gray-300 mt-2">{product.description}</p>
                    <Link
                        to={product.link}
                        className="inline-block mt-6 bg-blue-600 text-white px-8 py-3 rounded-full font-bold text-sm transform hover:scale-105 hover:bg-blue-700 transition-all"
                    >
                        Ver Producto
                    </Link>
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

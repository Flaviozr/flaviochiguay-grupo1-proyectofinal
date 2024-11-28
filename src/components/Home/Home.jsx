import { Link } from "react-router-dom";

export default function Home() {
    const banners = [
        "https://wallpapers.com/images/featured/fondos-de-zapatillas-nln3t3z56a1d7bfe.webp",
        "https://png.pngtree.com/background/20220726/original/pngtree-sneakers-pattern-fitness-sport-footwear-picture-image_1815139.jpg",
        "https://wallpapers.com/images/hd/sneakers-zaowzbpbbqmby6cm.jpg",
    ];

    return (
        <div className="bg-gradient-to-r from-indigo-900 via-gray-800 to-black min-h-screen pt-36 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                {banners.map((imgUrl, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-500">
                        <img
                            src={imgUrl}
                            alt={`Banner ${index + 1}`}
                            className="w-full h-96 object-cover transform group-hover:scale-110 transition duration-500"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <div className="text-center px-8 py-6">
                                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-wider">
                                    Zapatillas Exclusivas
                                </h2>
                                <p className="text-lg text-gray-300 mb-6">
                                    La colección más grande de zapatillas de las mejores marcas: Nike, Adidas, New Balance y mucho más.
                                </p>
                                <Link
                                    to="/products"
                                    className="text-lg text-white bg-yellow-500 py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-600 hover:shadow-xl transition-all duration-300 ease-in-out"
                                >
                                    ¡Explora la Colección!
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="container mx-auto px-4 mb-24 text-center">
                <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-16 tracking-wider">
                    Bienvenido a la Tienda de Zapatillas
                </h1>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed">
                    Encuentra las mejores zapatillas para cualquier ocasión. Desde deportivas hasta casuales, ¡te tenemos cubierto con marcas premium!
                </p>
            </div>

            <div className="container mx-auto px-4 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="text-center">
                        <h2 className="text-4xl font-extrabold text-white mb-4">Diseño Moderno</h2>
                        <p className="text-lg text-gray-300 leading-relaxed mb-4">
                            Nuestras zapatillas no solo son funcionales, sino que también cuentan con un diseño de vanguardia que se adapta a tu estilo de vida.
                        </p>
                    </div>
                    <img
                        src="https://via.placeholder.com/600x400"
                        alt="Diseño moderno"
                        className="rounded-lg shadow-2xl transform hover:scale-105 transition duration-500"
                    />
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <h2 className="text-5xl font-semibold text-center text-white mb-20">
                    Nuestras Marcas
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <Link
                        to="/marca/adidas"
                        className="group relative overflow-hidden rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105 hover:shadow-xl"
                    >
                        <img
                            src="https://w7.pngwing.com/pngs/475/281/png-transparent-adidas-logo-adidas-logo-adidas-text-photography-shoes-thumbnail.png"
                            alt="Adidas"
                            className="w-full h-64 object-contain bg-white p-6 transition-all duration-500 ease-in-out transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4">
                            <h4 className="text-3xl font-extrabold text-white uppercase tracking-wider text-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                                Adidas
                            </h4>
                        </div>
                    </Link>

                    <Link
                        to="/marca/nike"
                        className="group relative overflow-hidden rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105 hover:shadow-xl"
                    >
                        <img
                            src="https://i.pinimg.com/originals/1f/b4/7e/1fb47eae62439eb56c30e9673830d957.jpg"
                            alt="Nike"
                            className="w-full h-64 object-contain bg-white p-6 transition-all duration-500 ease-in-out transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4">
                            <h4 className="text-3xl font-extrabold text-white uppercase tracking-wider text-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                                Nike
                            </h4>
                        </div>
                    </Link>

                    <Link
                        to="/marca/new-balance"
                        className="group relative overflow-hidden rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105 hover:shadow-xl"
                    >
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4F3GD-ZtR9PT0Pq7eQCSyAERljB0SbYGd3w&s"
                            alt="New Balance"
                            className="w-full h-64 object-contain bg-white p-6 transition-all duration-500 ease-in-out transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4">
                            <h4 className="text-3xl font-extrabold text-white uppercase tracking-wider text-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                                New Balance
                            </h4>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="container mx-auto px-4 py-16 bg-gradient-to-r from-purple-700 via-pink-700 to-red-600 rounded-xl shadow-xl">
                <h2 className="text-5xl text-center text-white font-extrabold mb-16">
                    ¡Conoce lo Último en Zapatillas Urbanas!
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    <div className="text-center p-8 bg-black rounded-xl shadow-2xl hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105">
                        <img
                            src="https://example.com/adidas.jpg"
                            alt="Adidas Urban"
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h2 className="text-4xl font-extrabold text-white mb-4">Adidas</h2>
                        <p className="text-lg text-gray-300 mb-4">
                            Innovación en cada paso. Diseños audaces para un estilo único en las calles.
                        </p>
                        <button className="bg-pink-500 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-pink-600 transition duration-300 ease-in-out transform hover:scale-105">
                            Ver Más
                        </button>
                    </div>

                    <div className="text-center p-8 bg-black rounded-xl shadow-2xl hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105">
                        <img
                            src="https://example.com/nike.jpg"
                            alt="Nike Urban"
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h2 className="text-4xl font-extrabold text-white mb-4">Nike</h2>
                        <p className="text-lg text-gray-300 mb-4">
                            El poder del movimiento. Llega lejos con el estilo de Nike, siempre innovando.
                        </p>
                        <button className="bg-pink-500 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-pink-600 transition duration-300 ease-in-out transform hover:scale-105">
                            Ver Más
                        </button>
                    </div>

                    <div className="text-center p-8 bg-black rounded-xl shadow-2xl hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105">
                        <img
                            src="https://example.com/newbalance.jpg"
                            alt="New Balance Urban"
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h2 className="text-4xl font-extrabold text-white mb-4">New Balance</h2>
                        <p className="text-lg text-gray-300 mb-4">
                            La comodidad nunca pasa de moda. Encuentra el equilibrio perfecto entre estilo y confort.
                        </p>
                        <button className="bg-pink-500 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-pink-600 transition duration-300 ease-in-out transform hover:scale-105">
                            Ver Más
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-24">
                <h2 className="text-5xl font-semibold text-center text-white mb-16">Productos Más Vendidos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                    <div className="w-full bg-black rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        <img
                            src="https://example.com/producto1.jpg"
                            alt="Producto 1"
                            className="w-full h-56 object-cover rounded-t-xl"
                        />
                        <div className="p-6 text-center">
                            <h3 className="text-2xl text-white font-semibold mb-4">Zapatillas Air Max</h3>
                            <p className="text-lg text-gray-300 mb-4">Comodidad y estilo en cada paso. ¡Hazla tuya ahora!</p>
                            <button className="bg-pink-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-pink-600 transform transition duration-300">
                                Ver Producto
                            </button>
                        </div>
                    </div>

                    <div className="w-full bg-black rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        <img
                            src="https://example.com/producto2.jpg"
                            alt="Producto 2"
                            className="w-full h-56 object-cover rounded-t-xl"
                        />
                        <div className="p-6 text-center">
                            <h3 className="text-2xl text-white font-semibold mb-4">Zapatillas Ultra Boost</h3>
                            <p className="text-lg text-gray-300 mb-4">Máxima amortiguación para un confort sin igual.</p>
                            <button className="bg-pink-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-pink-600 transform transition duration-300">
                                Ver Producto
                            </button>
                        </div>
                    </div>

                    <div className="w-full bg-black rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        <img
                            src="https://example.com/producto3.jpg"
                            alt="Producto 3"
                            className="w-full h-56 object-cover rounded-t-xl"
                        />
                        <div className="p-6 text-center">
                            <h3 className="text-2xl text-white font-semibold mb-4">Zapatillas Classic 990</h3>
                            <p className="text-lg text-gray-300 mb-4">Comodidad en cada paso con el estilo clásico de New Balance.</p>
                            <button className="bg-pink-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-pink-600 transform transition duration-300">
                                Ver Producto
                            </button>
                        </div>
                    </div>

                    <div className="w-full bg-black rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        <img
                            src="https://example.com/producto4.jpg"
                            alt="Producto 4"
                            className="w-full h-56 object-cover rounded-t-xl"
                        />
                        <div className="p-6 text-center">
                            <h3 className="text-2xl text-white font-semibold mb-4">Zapatillas Superstar</h3>
                            <p className="text-lg text-gray-300 mb-4">Un diseño clásico para un look casual y urbano.</p>
                            <button className="bg-pink-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-pink-600 transform transition duration-300">
                                Ver Producto
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-24 bg-gray-900 rounded-xl shadow-xl">
                <h2 className="text-5xl text-center text-white font-extrabold mb-16">
                    ¡Últimas Tendencias en Zapatillas Urbanas!
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                    <div className="text-center p-8 bg-black rounded-xl shadow-2xl hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105">
                        <img
                            src="https://example.com/tendencia1.jpg"
                            alt="Tendencia 1"
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h2 className="text-4xl font-extrabold text-white mb-4">Sneakers de Alta Moda</h2>
                        <p className="text-lg text-gray-300 mb-4">
                            La tendencia más caliente en las calles: sneakers que combinan estilo y comodidad.
                        </p>
                        <button className="bg-pink-500 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-pink-600 transition duration-300 ease-in-out transform hover:scale-105">
                            Ver Más
                        </button>
                    </div>

                    <div className="text-center p-8 bg-black rounded-xl shadow-2xl hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105">
                        <img
                            src="https://example.com/tendencia2.jpg"
                            alt="Tendencia 2"
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h2 className="text-4xl font-extrabold text-white mb-4">Estilo Urbano Vintage</h2>
                        <p className="text-lg text-gray-300 mb-4">
                            Combina lo retro con lo moderno. Zapatillas de estilo urbano vintage que nunca pasan de moda.
                        </p>
                        <button className="bg-pink-500 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-pink-600 transition duration-300 ease-in-out transform hover:scale-105">
                            Ver Más
                        </button>
                    </div>

                    {/* Tendencia 3 */}
                    <div className="text-center p-8 bg-black rounded-xl shadow-2xl hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105">
                        <img
                            src="https://example.com/tendencia3.jpg"
                            alt="Tendencia 3"
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h2 className="text-4xl font-extrabold text-white mb-4">Sneakers con Tecnología</h2>
                        <p className="text-lg text-gray-300 mb-4">
                            Zapatillas equipadas con la última tecnología en amortiguación y soporte para el máximo confort.
                        </p>
                        <button className="bg-pink-500 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-pink-600 transition duration-300 ease-in-out transform hover:scale-105">
                            Ver Más
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

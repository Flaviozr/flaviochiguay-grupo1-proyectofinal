import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Loading from "../Loading/Loading";  

export default function Brands() {

    const [isLoading, setIsLoading] = useState(true);  
    const brands = [
        {
            name: "New Balance",
            description: "New Balance es una marca pionera en ofrecer calzado y ropa deportiva que combina confort, estilo y rendimiento. Fundada en 1906, ha liderado la industria deportiva con su innovadora tecnología de amortiguación, ofreciendo productos ideales para quienes buscan la perfección en sus entrenamientos y en su día a día.",
            image: "https://cdn.sanity.io/images/c1chvb1i/production/43a4253bb9b31b32cf91fa59f90a691c1603a7ab-1100x735.jpg",
            link: "/newbalance",
        },
        {
            name: "Adidas",
            description: "Con más de 70 años de historia, Adidas es una marca global que ha revolucionado la industria deportiva con sus productos innovadores. Famosa por sus tres rayas, Adidas combina diseño moderno y tecnología de alto rendimiento, siendo la opción preferida de atletas y aficionados de todos los deportes.",
            image: "https://wallpaper.dog/large/1678.jpg",
            link: "/adidas",
        },
        {
            name: "Nike",
            description: "Nike no solo es una marca, es un símbolo de innovación. Con sus productos diseñados para llevar el rendimiento deportivo al siguiente nivel, Nike se ha convertido en la elección de los atletas más exigentes. Desde calzado hasta ropa deportiva, Nike es la marca que impulsa los límites de quienes buscan siempre más.",
            image: "https://i.pinimg.com/736x/49/f8/dd/49f8ddf2b4684a56dc843425815b41dd.jpg",
            link: "/nike",
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
        <div className="bg-gradient-to-r from-indigo-900 via-purple-800 to-black min-h-screen pt-32 pb-16">
            <div className="container mx-auto px-4">
                <h1 className="text-7xl font-extrabold text-center text-white mb-16 tracking-wide text-shadow-xl animate__animated animate__fadeIn">
                    Nuestras Marcas Más Destacadas
                </h1>
                <p className="text-center text-xl text-white mb-12 leading-relaxed max-w-3xl mx-auto animate__animated animate__fadeIn">
                    Explora las mejores marcas de calzado y ropa deportiva, cada una con una historia única de innovación, confort y rendimiento. Aquí encontrarás la marca que se adapta perfectamente a tu estilo y necesidades deportivas.
                </p>

                <div className="space-y-16">
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center bg-white rounded-xl shadow-2xl overflow-hidden transition-all transform hover:scale-105 hover:shadow-lg hover:border-4 border-indigo-600 p-4 animate__animated animate__fadeIn`}
                        >
                            <div className="md:w-1/2">
                                <img
                                    src={brand.image}
                                    alt={brand.name}
                                    className="w-full h-80 object-cover rounded-xl shadow-lg transition-opacity opacity-80 hover:opacity-100"
                                />
                            </div>
                            <div className="md:w-1/2 p-10">
                                <h2 className="text-5xl font-semibold text-gray-900 mb-4 text-gradient">{brand.name}</h2>
                                <p className="text-gray-700 text-lg mb-6">{brand.description}</p>
                                <Link
                                    to={brand.link}
                                    className="bg-blue-600 text-white px-8 py-4 rounded-lg text-xl hover:bg-blue-700 transition-all transform hover:scale-110 hover:shadow-xl"
                                >
                                    Ver más productos
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-32">
                    <h2 className="text-6xl font-extrabold text-center text-white mb-12 animate__animated animate__fadeIn">
                        Últimos Modelos De Grandes Marcas
                    </h2>
                    <p className="text-center text-xl text-white mb-12 leading-relaxed max-w-3xl mx-auto animate__animated animate__fadeIn">
                        En esta sección, encontrarás algunos de los modelos más recientes y populares de las marcas más prestigiosas.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="bg-white p-8 rounded-xl shadow-xl transform transition-all hover:scale-105 hover:shadow-lg hover:border-4 border-indigo-600 animate__animated animate__fadeIn">
                            <img
                                src="https://www.elespectador.com/resizer/v2/476MUNYYNFDCNPQJKCDN4DUK6I.jpg?auth=32dcaf42b83a7e661f8584a9b6c5441af83f7264d0512bacbeb677a63b848745&width=920&height=613&smart=true&quality=60"
                                alt="Nike Air Max"
                                className="w-full h-56 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-2xl font-semibold text-gray-800">Nike Air Max 2024</h3>
                            <p className="text-gray-600 mt-2">
                                Con una nueva tecnología de amortiguación, estos Nike Air Max están diseñados para ofrecer el máximo confort y estilo.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-xl transform transition-all hover:scale-105 hover:shadow-lg hover:border-4 border-indigo-600 animate__animated animate__fadeIn">
                            <img
                                src="https://files.merca20.com/uploads/2024/03/adidas-samba-gazelle.jpg"
                                alt="Adidas Samba"
                                className="w-full h-56 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-2xl font-semibold text-gray-800">Adidas Samba OG</h3>
                            <p className="text-gray-600 mt-2">
                                Un clásico de Adidas que combina estilo retro y confort moderno.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-xl transform transition-all hover:scale-105 hover:shadow-lg hover:border-4 border-indigo-600 animate__animated animate__fadeIn">
                            <img
                                src="https://media.revistagq.com/photos/5ca5f0b9c4b7fb80b5ba9284/16:9/w_1280,c_limit/zapatillas_new_balance_1783.jpg"
                                alt="New Balance 990v5"
                                className="w-full h-56 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-2xl font-semibold text-gray-800">New Balance 990v5</h3>
                            <p className="text-gray-600 mt-2">
                                Con su diseño elegante y tecnología avanzada, las New Balance 990v5 son ideales para quienes buscan lo mejor en rendimiento y comodidad.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

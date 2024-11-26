

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

export default function Home() {
    const banners = [
        'https://wallpapers.com/images/featured/fondos-de-zapatillas-nln3t3z56a1d7bfe.webp',
        'https://png.pngtree.com/background/20220726/original/pngtree-sneakers-pattern-fitness-sport-footwear-picture-image_1815139.jpg',
        'https://wallpapers.com/images/hd/sneakers-zaowzbpbbqmby6cm.jpg',
    ];

    return (
        <div className="bg-gray-900 min-h-screen text-white font-sans">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="w-full h-[700px] mb-12"
            >
                {banners.map((imgUrl, index) => (
                    <SwiperSlide key={index}>
                        <div 
                            className="h-full w-full bg-cover bg-center flex items-center justify-center"
                            style={{ backgroundImage: `url(${imgUrl})` }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                <div className="text-center text-white p-8 rounded-lg bg-gradient-to-r from-black to-transparent max-w-[700px] mx-auto">
                                    <h2 className="text-5xl md:text-7xl font-serif font-bold uppercase tracking-tight leading-tight mb-6">
                                        Zapatillas Exclusivas
                                    </h2>
                                    <p className="text-lg md:text-xl mt-4 mb-8 opacity-90">
                                        Descubre la mayor colección de zapatillas de las mejores marcas: Nike, Adidas, New Balance y más.
                                    </p>
                                    <Link 
                                        to="/products" 
                                        className="inline-block bg-[#2d3a4b] px-8 py-3 text-lg uppercase text-white rounded-full shadow-lg hover:bg-[#3c4b5c] transition duration-300"
                                    >
                                        Explorar Colección
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="container mx-auto max-w-5xl px-6 my-16 text-center">
                <h3 className="text-4xl font-serif font-semibold text-gray-200 mb-6">
                    Bienvenido a la Tienda de Zapatillas
                </h3>
                <p className="text-lg text-gray-400 mb-6 p-8 bg-opacity-75 bg-gradient-to-r from-black to-transparent rounded-xl shadow-lg">
                    Encuentra la mejor selección de zapatillas para todas las ocasiones, desde modelos deportivos hasta casuales. 
                    Nuestro compromiso es ofrecerte productos de alta calidad y de las mejores marcas del mercado.
                </p>
                <p className="text-lg text-gray-400 mb-8 p-8 bg-opacity-75 bg-gradient-to-r from-black to-transparent rounded-xl shadow-lg">
                    Desde las clásicas zapatillas blancas hasta los modelos más exclusivos, aquí podrás encontrar el par ideal 
                    que se ajuste a tu estilo y necesidades. Ya seas un fanático del running o un amante de la moda urbana, 
                    tenemos el calzado perfecto para ti.
                </p>
            </div>

            <div className="container mx-auto max-w-6xl px-6 my-16">
                <h3 className="text-4xl font-serif font-semibold text-gray-200 mb-12 text-center">
                    Nuestras Marcas
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <Link to="/marca/adidas" className="group relative">
                        <img 
                            src="https://w7.pngwing.com/pngs/475/281/png-transparent-adidas-logo-adidas-logo-adidas-text-photography-shoes-thumbnail.png" 
                            alt="Adidas" 
                            className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 p-6 rounded-lg opacity-90">
                            <h4 className="text-xl text-white font-serif font-semibold">Adidas</h4>
                            <Link to="/marca/adidas" className="text-white font-bold text-sm mt-2 inline-block">
                                Ver Ofertas
                            </Link>
                        </div>
                    </Link>
                    <Link to="/marca/nike" className="group relative">
                        <img 
                            src="https://i.pinimg.com/originals/1f/b4/7e/1fb47eae62439eb56c30e9673830d957.jpg" 
                            alt="Nike" 
                            className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 p-6 rounded-lg opacity-90">
                            <h4 className="text-xl text-white font-serif font-semibold">Nike</h4>
                            <Link to="/marca/nike" className="text-white font-bold text-sm mt-2 inline-block">
                                Ver Ofertas
                            </Link>
                        </div>
                    </Link>
                    <Link to="/marca/new-balance" className="group relative">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4F3GD-ZtR9PT0Pq7eQCSyAERljB0SbYGd3w&s" 
                            alt="New Balance" 
                            className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 p-6 rounded-lg opacity-90">
                            <h4 className="text-xl text-white font-serif font-semibold">New Balance</h4>
                            <Link to="/marca/new-balance" className="text-white font-bold text-sm mt-2 inline-block">
                                Ver Ofertas
                            </Link>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="container mx-auto max-w-6xl px-6 my-16 text-center">
                <h2 className="text-4xl font-serif font-semibold text-gray-200 mb-8">Ofertas Especiales</h2>
                <p className="text-lg text-gray-400 mb-8 p-8 bg-opacity-75 bg-gradient-to-r from-black to-transparent rounded-xl shadow-lg">
                    Aprovecha nuestras increíbles ofertas y descuentos en zapatillas de las mejores marcas. Solo por tiempo limitado, 
                    puedes encontrar precios especiales en modelos seleccionados. ¡No te pierdas estas oportunidades únicas para 
                    conseguir tu par de zapatillas favorito!
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <a href="https://link-to-oferta-1.com" target="_blank" rel="noopener noreferrer" className="group relative">
                        <div className="aspect-w-16 aspect-h-9">
                            <img 
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyaXRm_BUGj9I3mFBQ3eUCwPKiBbUpcc384Q&s"  
                                alt="Oferta 1" 
                                className="w-full h-full object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300" 
                            />
                        </div>
                        <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 p-6 rounded-lg opacity-90">
                            <h4 className="text-lg text-white font-serif font-semibold">Descuento en Nike</h4>
                            <p className="text-sm text-white">Aprovecha descuentos exclusivos en las mejores zapatillas Nike. ¡No te lo puedes perder!</p>
                        </div>
                    </a>
                    <a href="https://link-to-oferta-2.com" target="_blank" rel="noopener noreferrer" className="group relative">
                        <div className="aspect-w-16 aspect-h-9">
                            <img 
                                src="https://static1.tiendeo.com/images/tiendas/0/catalogos/sf-es_es-24529-s2s-0/paginas/mid/00001.jpg" 
                                alt="Oferta 2" 
                                className="w-full h-full object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300" 
                            />
                        </div>
                        <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 p-6 rounded-lg opacity-90">
                            <h4 className="text-lg text-white font-serif font-semibold">Ofertas Adidas</h4>
                            <p className="text-sm text-white">Las mejores zapatillas Adidas a precios inigualables. ¡Compra ahora y ahorra!</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

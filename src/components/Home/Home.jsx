import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

export default function Home() {
    const banners = [
        'https://wallpapers.com/images/featured/fondos-de-zapatillas-nln3t3z56a1d7bfe.webp',
    ];

    return (
        <div className="bg-gray-900 min-h-screen text-white"> {/* Fondo oscuro sólido */}
            {/* Slider de Banners */}
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="w-full h-[600px] mb-12"
            >
                {banners.map((imgUrl, index) => (
                    <SwiperSlide key={index}>
                        <div 
                            className="h-full w-full bg-cover bg-center flex items-center justify-center"
                            style={{ backgroundImage: `url(${imgUrl})` }}
                        >
                            <div className="text-center text-white bg-black bg-opacity-60 p-8 rounded-lg max-w-[600px]">
                                <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-wide leading-tight">
                                    Zapatillas Exclusivas
                                </h2>
                                <p className="text-lg md:text-xl mt-4 mb-6">
                                    Descubre la mayor colección de zapatillas de todas las marcas.
                                </p>
                                <Link 
                                    to="/products" 
                                    className="inline-block bg-[#2d3a4b] px-8 py-3 text-lg uppercase text-white rounded shadow-md hover:bg-[#3c4b5c] transition duration-300"
                                >
                                    Explorar Colección
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Introducción de la Tienda */}
            <div className="container mx-auto max-w-4xl px-6 my-12 text-center">
                <h3 className="text-3xl font-semibold text-gray-200 mb-4"> {/* Texto en gris claro para contraste */}
                    Bienvenido a la Tienda de Zapatillas
                </h3>
                <p className="text-lg text-gray-400 mb-4">
                    Encuentra la mejor selección de zapatillas para todas las ocasiones, desde modelos deportivos hasta casuales. 
                    Nuestro compromiso es ofrecerte productos de alta calidad y de las mejores marcas del mercado.
                </p>
                <p className="text-lg text-gray-400 mb-8">
                    Desde las clásicas zapatillas blancas hasta los modelos más exclusivos, aquí podrás encontrar el par ideal 
                    que se ajuste a tu estilo y necesidades.
                </p>
            </div>

            {/* Imágenes de Marcas */}
            <div className="container mx-auto max-w-4xl px-6 my-12">
                <h3 className="text-3xl font-semibold text-gray-200 mb-8 text-center">
                    Nuestras Marcas
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <Link to="/marca/adidas">
                        <img 
                            src="https://w7.pngwing.com/pngs/475/281/png-transparent-adidas-logo-adidas-logo-adidas-text-photography-shoes-thumbnail.png" 
                            alt="Adidas" 
                            className="w-full h-full object-cover rounded-lg shadow-lg hover:opacity-90 transition duration-200"
                        />
                    </Link>
                    <Link to="/marca/nike">
                        <img 
                            src="https://i.pinimg.com/originals/1f/b4/7e/1fb47eae62439eb56c30e9673830d957.jpg" 
                            alt="Nike" 
                            className="w-full h-full object-cover rounded-lg shadow-lg hover:opacity-90 transition duration-200"
                        />
                    </Link>
                    <Link to="/marca/new-balance">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4F3GD-ZtR9PT0Pq7eQCSyAERljB0SbYGd3w&s" 
                            alt="New Balance" 
                            className="w-full h-full object-cover rounded-lg shadow-lg hover:opacity-90 transition duration-200"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}
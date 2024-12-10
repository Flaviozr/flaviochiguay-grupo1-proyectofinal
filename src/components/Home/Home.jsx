import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const banners = [
    {
        imgUrl: "https://wallpapers.com/images/hd/new-balance-triple-coloured-shoes-zoo7i8gfvx1wvkkt.jpg",
        title: "Zapatillas Deportivas",
        description: "Encuentra las mejores zapatillas deportivas para tu rendimiento."
    },
    {
        imgUrl: "https://images.pexels.com/photos/48262/pexels-photo-48262.jpeg",
        title: "Moda en Zapatillas",
        description: "Conoce las últimas tendencias en zapatillas de las marcas más exclusivas."
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1519931127525-6b6a7619a003?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fHw%3D",
        title: "Colección Exclusiva",
        description: "Nuestra colección exclusiva te está esperando. ¡No te la pierdas!"
    }
];

export default function AutoSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % banners.length);
        }, 3000);  

        return () => clearInterval(intervalId);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
    };

    return (
            <div className="min-h-screen pt-36 pb-16">
                <div className="relative group overflow-hidden rounded-xl shadow-lg">
                    <img
                        src={banners[currentIndex].imgUrl}
                        alt={`Banner ${currentIndex + 1}`}
                        className="w-full h-[500px] object-cover transform transition-all duration-500"/>
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="text-center px-8 py-6">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-wide transform transition-all duration-300">
                                {banners[currentIndex].title}
                            </h2>
                            <p className="text-lg text-gray-300 mb-6 max-w-md mx-auto">
                                {banners[currentIndex].description}
                            </p>
                            <Link
                                to="/products"
                                className="text-lg text-black bg-yellow-500 py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-600 hover:shadow-xl transform transition-all duration-300 ease-in-out">
                                ¡Explora la Colección!
                            </Link>
                        </div>
                    </div>
                        
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-black p-2 rounded-full hover:bg-gray-800 transition-all duration-300">
                    &lt;
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-black p-2 rounded-full hover:bg-gray-800 transition-all duration-300" >
                    &gt;
                </button>
            </div>
            <div className="container mx-auto px-4 mb-36 text-center mt-24 bg-gray-900 bg-opacity-90 py-16 rounded-lg shadow-2xl animate-fade-in">
    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-12 tracking-wider uppercase leading-tight drop-shadow-lg">
        Bienvenido a <span className="text-yellow-500">REALKING-STORE</span>
    </h1>
    <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed drop-shadow-md">
        En <span className="font-extrabold text-yellow-500">REALKING-STORE</span>, nos especializamos en ofrecerte lo <span className="font-extrabold text-yellow-500">MEJOR</span>. 
        <span className="font-bold text-yellow-500">Zapatillas</span> exclusivas, con estilo <span className="font-bold text-yellow-500">URBANO</span> y <span className="font-bold text-yellow-500">PODEROSO</span>. 
        Si quieres destacar, este es tu lugar.
    </p>
    <p className="text-xl text-white max-w-4xl mx-auto mb-12 leading-relaxed drop-shadow-lg">
        Tenemos lo que necesitas para conquistar las calles: 
        <span className="font-bold text-yellow-500">Adidas</span>, <span className="font-bold text-yellow-500">Nike</span>, <span className="font-bold text-yellow-500">New balance. </span>
        Todo pensado para ti, porque aquí no solo compras, <span className="font-extrabold text-yellow-500">PISAS FUERTE.</span>
    </p>
    <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed drop-shadow-md">
        Esto no es solo moda, es <span className="font-bold text-yellow-500">ACTITUD</span>. Con <span className="font-bold text-yellow-500">REALKING-STORE</span>, 
        no solo te pones zapatillas, te pones <span className="font-bold text-yellow-500">PODER</span>, <span className="font-bold text-yellow-500">ESTILO</span> y <span className="font-bold text-yellow-500">DOMINIO</span>. 
        ¿Estás listo para ser <span className="font-extrabold text-yellow-500">LEYENDA</span>? <span className="font-extrabold text-yellow-500">¡Únete a nosotros!</span>
    </p>
</div>

<div className="container mx-auto px-4 mb-36 bg-gray-900 bg-opacity-90 py-16 rounded-lg shadow-2xl animate-fade-in">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-white mb-6 tracking-wide uppercase drop-shadow-lg">
                Diseño Moderno
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6 max-w-lg mx-auto md:mx-0 drop-shadow-md">
                En <span className="font-bold text-yellow-500">REALKING-STORE</span>, nuestras zapatillas combinan 
                <span className="font-extrabold text-yellow-500"> ESTILO</span> y <span className="font-extrabold text-yellow-500">DESEMPEÑO</span> como ninguna otra. 
                Con un diseño vanguardista, cada par está pensado para quienes buscan 
                <span className="font-bold text-yellow-500"> IMPACTAR</span> en las calles y rendir al máximo en su día a día.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed max-w-lg mx-auto md:mx-0 drop-shadow-md">
                Con modelos que redefinen el estilo urbano y tecnologías que garantizan 
                <span className="font-bold text-yellow-500"> CONFORT</span> y <span className="font-bold text-yellow-500">DURABILIDAD</span>, 
                encontrarás la combinación perfecta entre diseño y funcionalidad. ¡Deja huella con 
                <span className="font-extrabold text-yellow-500">REAL IMPACT!</span>
            </p>
        </div>
        <div className="flex justify-center items-center">
            <img
                src="https://www.backseries.com/wp-content/uploads/lanzamientos-de-sneakers-diciembre-2019-primera-semana.jpg"
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
                        to="/adidas"
                        className="group relative overflow-hidden rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105 hover:shadow-xl" >
                        <img
                            src="https://w7.pngwing.com/pngs/475/281/png-transparent-adidas-logo-adidas-logo-adidas-text-photography-shoes-thumbnail.png"
                            alt="Adidas"
                            className="w-full h-64 object-contain bg-white p-6 transition-all duration-500 ease-in-out transform group-hover:scale-110"/>
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4">
                            <h4 className="text-3xl font-extrabold text-white uppercase tracking-wider text-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                                Adidas
                            </h4>
                        </div>
                    </Link>

                    <Link
                        to="/nike"
                        className="group relative overflow-hidden rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105 hover:shadow-xl" >
                        <img
                            src="https://i.pinimg.com/originals/1f/b4/7e/1fb47eae62439eb56c30e9673830d957.jpg"
                            alt="Nike"
                            className="w-full h-64 object-contain bg-white p-6 transition-all duration-500 ease-in-out transform group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4">
                            <h4 className="text-3xl font-extrabold text-white uppercase tracking-wider text-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                                Nike
                            </h4>
                        </div>
                    </Link>

                    <Link
                        to="/newbalance"
                        className="group relative overflow-hidden rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105 hover:shadow-xl">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4F3GD-ZtR9PT0Pq7eQCSyAERljB0SbYGd3w&s"
                            alt="New Balance"
                            className="w-full h-64 object-contain bg-white p-6 transition-all duration-500 ease-in-out transform group-hover:scale-110"/>
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
            src="https://images.pexels.com/photos/18188499/pexels-photo-18188499/free-photo-of-adidas-sneakers-on-feet.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Adidas Urban"
            className="w-full h-48 object-cover rounded-lg mb-4"/>
        <h2 className="text-4xl font-extrabold text-white mb-4">Adidas</h2>
        <p className="text-lg text-gray-300 mb-4">
            Innovación en cada paso. Diseños audaces para un estilo único en las calles.
        </p>
        <Link to="/adidas">
            <button className="bg-pink-500 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-pink-600 transition duration-300 ease-in-out transform hover:scale-105">
                Ver Más
            </button>
        </Link>
    </div>
 <div className="text-center p-8 bg-black rounded-xl shadow-2xl hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105">
        <img
            src="https://images.pexels.com/photos/3116969/pexels-photo-3116969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Nike Urban"
            className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h2 className="text-4xl font-extrabold text-white mb-4">Nike</h2>
        <p className="text-lg text-gray-300 mb-4">
            El poder del movimiento. Llega lejos con el estilo de Nike, siempre innovando.
        </p>
        <Link to="/nike">
            <button className="bg-pink-500 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-pink-600 transition duration-300 ease-in-out transform hover:scale-105">
                Ver Más
            </button>
        </Link>
    </div>
  <div className="text-center p-8 bg-black rounded-xl shadow-2xl hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105">
        <img
            src="https://www.newbalance.com/dw/image/v2/AAGI_PRD/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dw51ef2d0a/images/page-designer/2024/November/NB883_Comp_E_Image1.jpg?sw=991&sfrm=jpg"
            alt="New Balance Urban"
            className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h2 className="text-4xl font-extrabold text-white mb-4">New Balance</h2>
        <p className="text-lg text-gray-300 mb-4">
            La comodidad nunca pasa de moda. Encuentra el equilibrio perfecto entre estilo y confort.
        </p>
        <Link to="/newbalance">
            <button className="bg-pink-500 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-pink-600 transition duration-300 ease-in-out transform hover:scale-105">
                Ver Más
            </button>
        </Link>
      </div>
        </div>
            </div>
             <div className="container mx-auto px-4 py-24">
                <h2 className="text-5xl font-semibold text-center text-white mb-16">Productos Más Vendidos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                    <div className="w-full bg-black rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        <img
                            src="https://images.footlocker.com/content/dam/final/footlockereurope/Online_activations/fl-campaign/2024/2024_01_16_fl_omni_tn_drift_ecom_crm_assets/05_final_output_files/launch/striper-hub/2024_01_16_fl_omni_tn_drift_Phase2_Striperhub_Banner_800x300.jpg"
                            alt="Producto 1"
                            className="w-full h-56 object-cover rounded-t-xl"
                        />
                        <div className="p-6 text-center">
                            <h3 className="text-2xl text-white font-semibold mb-4">Zapatillas Air Max</h3>
                            <p className="text-lg text-gray-300 mb-4">Comodidad y estilo en cada paso. ¡Hazla tuya ahora!</p>
                            <Link to="/products/16">
            <button className="bg-pink-500 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-pink-600 transition duration-300 ease-in-out transform hover:scale-105">
                Ver Más
            </button>
        </Link>
             </div>
                </div>
                    <div className="w-full bg-black rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        <img
                            src="https://cdn.sanity.io/images/c1chvb1i/production/222e1d147d9b1faff32544d6e8be3b53b66f8b0c-600x600.jpg?auto=format&fit=max&q=75&w=600"
                            alt="Producto 2"
                            className="w-full h-56 object-cover rounded-t-xl" />
                        <div className="p-6 text-center">
                            <h3 className="text-2xl text-white font-semibold mb-4">Zapatillas Ultra Boost</h3>
                            <p className="text-lg text-gray-300 mb-4">Máxima amortiguación para un confort sin igual.</p>
                            <Link to="/products/24">
                            <button className="bg-pink-500 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-pink-600 transition duration-300 ease-in-out transform hover:scale-105">
                                Ver Más
                            </button>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full bg-black rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        <img
                            src="https://workshopcol.co/cdn/shop/files/image00041.jpg?v=1713991623&width=1946"
                            alt="Producto 3"
                            className="w-full h-56 object-cover rounded-t-xl"/>
                        <div className="p-6 text-center">
                            <h3 className="text-2xl text-white font-semibold mb-4">Zapatillas Classic 9060</h3>
                            <p className="text-lg text-gray-300 mb-4">Comodidad en cada paso con el estilo clásico de New Balance.</p>
                            <Link to="/products/3">
                            <button className="bg-pink-500 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-pink-600 transition duration-300 ease-in-out transform hover:scale-105">
                             Ver Más
                             </button>
                             </Link>
                        </div>
                    </div>
                    <div className="w-full bg-black rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        <img
                            src="https://www.shutterstock.com/image-photo/ivanofrankivsk-ukraine-may-16-2020-600nw-2367802385.jpg"
                            alt="Producto 4"
                            className="w-full h-56 object-cover rounded-t-xl"/>
                        <div className="p-6 text-center">
                            <h3 className="text-2xl text-white font-semibold mb-4">Zapatillas Superstar</h3>
                            <p className="text-lg text-gray-300 mb-4">Un diseño clásico para un look casual y urbano.</p>
                            <Link to="/products/33">
            <button className="bg-pink-500 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-pink-600 transition duration-300 ease-in-out transform hover:scale-105">
                Ver Más
            </button>
        </Link>       
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
                        src="https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_363,c_limit/73cb1361-b4a5-4616-a48a-96889010f6eb/descubre-los-mejores-estilos-de-calzado-chunky-de-nike.jpg"
                        alt="Tendencia 1"
                        className="w-full h-48 object-cover rounded-lg mb-4"/>
                        
        <h2 className="text-4xl font-extrabold text-white mb-4">Sneakers de Alta Moda</h2>
        <p className="text-lg text-gray-300 mb-4">
            La tendencia más caliente en las calles: sneakers que combinan estilo y comodidad.
        </p>
        <Link
            to="/nike"
            className="bg-pink-500 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-pink-600 transition duration-300 ease-in-out transform hover:scale-105">
            Ver Más
        </Link>
    </div>
    <div className="text-center p-8 bg-black rounded-xl shadow-2xl hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105">
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhs4FHtpvUHowvqy-YLriqWfTK40fiAWJz-g&s"
            alt="Tendencia 2"
            className="w-full h-48 object-cover rounded-lg mb-4"/>
        <h2 className="text-4xl font-extrabold text-white mb-4">Estilo Urbano Vintage</h2>
        <p className="text-lg text-gray-300 mb-4">
            Combina lo retro con lo moderno. Zapatillas de estilo urbano vintage que nunca pasan de moda.
        </p>
        <Link
            to="/adidas"
            className="bg-pink-500 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-pink-600 transition duration-300 ease-in-out transform hover:scale-105">
            Ver Más
        </Link>
    </div>
    <div className="text-center p-8 bg-black rounded-xl shadow-2xl hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105">
        <img
            src="https://images2.minutemediacdn.com/image/upload/c_crop,w_1080,h_607,x_0,y_45/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/kicks/01j9s7g4fmjcbrx5j6dt.jpg"
            alt="Tendencia 3"
            className="w-full h-48 object-cover rounded-lg mb-4"/>
        <h2 className="text-4xl font-extrabold text-white mb-4">Sneakers con Tecnología</h2>
        <p className="text-lg text-gray-300 mb-4">
            Zapatillas equipadas con la última tecnología en amortiguación y soporte para el máximo confort.
        </p>
        <Link
            to="/newbalance"
            className="bg-pink-500 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-pink-600 transition duration-300 ease-in-out transform hover:scale-105">
                Ver Más
            </Link>
         </div>
        </div>
    </div>
</div>
</div>
    );
}

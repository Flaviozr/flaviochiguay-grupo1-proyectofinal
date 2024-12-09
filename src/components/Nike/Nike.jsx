import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Loading from "../Loading/Loading";

export default function NikePage() {
    const [isLoading, setIsLoading] = useState(true);

    const nikeInfo = {
        name: "Nike",
        description: "Nike, sinónimo de innovación y estilo, es la marca líder en ropa y calzado deportivo. Desde sus orígenes, ha sido pionera en la creación de productos de alto rendimiento y con un diseño que marca tendencia. Hoy, Nike continúa revolucionando la industria del deporte con tecnología avanzada y diseños que potencian el rendimiento de los atletas en todo el mundo.",
        image: "https://i.pinimg.com/736x/49/f8/dd/49f8ddf2b4684a56dc843425815b41dd.jpg",
        link: "/productos/nike",
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
        <div className="relative bg-gray-900">
         <div className="relative w-full h-screen overflow-hidden">
             <div className="absolute inset-0">
                    <iframe
                        src="https://www.youtube.com/embed/o1ud8Z6JTew?autoplay=1&mute=1&loop=1&playlist=o1ud8Z6JTew"
                        title="Nike Commercial"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 bg-black bg-opacity-40">
                    <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg">
                        Nike - Innovación que inspira
                    </h1>
                    <p className="text-xl mb-8 opacity-90 drop-shadow-lg">
                        Descubre la última tecnología en calzado y ropa deportiva de Nike, diseñada para llevar tu rendimiento al siguiente nivel.
                    </p>
                    <Link
                        to='/productos'
                        className="bg-blue-600 text-white px-8 py-3 rounded-full text-xl font-bold transform hover:scale-110 hover:bg-blue-700 transition-all"
                    >
                        Explorar Productos
                    </Link>
                </div>
            </div>

            {/* Información de Nike */}
            <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-xl overflow-hidden transition-all transform hover:scale-105 hover:shadow-lg hover:border-4 border-indigo-600 p-8 animate__animated animate__fadeIn mt-16 mx-8">
                <div className="md:w-1/2">
                    <img
                        src={nikeInfo.image}
                        alt={nikeInfo.name}
                        className="w-full h-80 object-cover rounded-xl shadow-lg transition-opacity opacity-80 hover:opacity-100"
                    />
                </div>
                <div className="md:w-1/2 p-8">
                    <h2 className="text-5xl font-extrabold text-gray-900 mb-6">{nikeInfo.name}</h2>
                    <p className="text-lg text-gray-700 mb-6">{nikeInfo.description}</p>
                    <Link
                        to={nikeInfo.link}
                        className="bg-blue-600 text-white px-8 py-4 rounded-lg text-xl hover:bg-blue-700 transition-all transform hover:scale-110 hover:shadow-xl"
                    >
                        Ver más productos
                    </Link>
                </div>
            </div>

            <div className="mt-32 text-white text-center">
      <h2 className="text-5xl font-extrabold mb-12">Lo más destacado de Nike</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mx-4">
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transform transition-all hover:scale-105 hover:border-4 border-indigo-600">
          <img
            src="https://media.gq.com/photos/5fa2ce5dc0e38edb6bd3ac91/16:9/w_1280,c_limit/airmax.jpg"
            alt="Zapatillas Nike Air Max 90"
            className="w-full h-72 object-cover rounded-lg mb-6"
          />
          <h3 className="text-3xl font-semibold text-white mb-4">
            Zapatillas Nike Air Max 90
          </h3>
          <p className="text-gray-400 mb-6">
            Un ícono del calzado que nunca pasa de moda. Diseño atemporal para todos los días.
          </p>
          <Link
            to="/products/5"
            className="bg-indigo-600 text-white py-3 px-6 rounded-lg shadow hover:bg-indigo-700 transition-all duration-300"
          >
            Ver productos
          </Link>
        </div>
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transform transition-all hover:scale-105 hover:border-4 border-indigo-600">
          <img
            src="https://www.marathon.cl/on/demandware.static/-/Sites-catalog-equinox/default/dwb1f25974/images/marathon/196604405164_2-20240903120000-mrtChile.jpg"
            alt="Zapatillas Nike Gamma Force"
            className="w-full h-72 object-cover rounded-lg mb-6"
          />
          <h3 className="text-3xl font-semibold text-white mb-4">
            Zapatillas Nike Gamma Force
          </h3>
          <p className="text-gray-400 mb-6">
            Calzado de alto rendimiento, ideal para maratones y carreras largas. Siente la velocidad.
          </p>
          <Link
            to="/products/11"
            className="bg-indigo-600 text-white py-3 px-6 rounded-lg shadow hover:bg-indigo-700 transition-all duration-300"
          >
            Ver productos
          </Link>
        </div>
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transform transition-all hover:scale-105 hover:border-4 border-indigo-600">
          <img
            src="https://e0.pxfuel.com/wallpapers/661/136/desktop-wallpaper-sean-wotherspoon-x-nike-air-max-97-1-bambas-nike-zapatillas-lacoste-zapatos-nike.jpg"
            alt="Zapatillas Nike Air Max 97 Se Iron Grey"
            className="w-full h-72 object-cover rounded-lg mb-6"
          />
          <h3 className="text-3xl font-semibold text-white mb-4">
            Zapatillas Nike Air Max 97 Se Iron Grey
          </h3>
          <p className="text-gray-400 mb-6">
            Tecnología que mantiene la transpiración a raya mientras las usas. Confort y frescura.
          </p>
          <Link
            to="/products/23"
            className="bg-indigo-600 text-white py-3 px-6 rounded-lg shadow hover:bg-indigo-700 transition-all duration-300"
          >
            Ver productos
          </Link>
        </div>
      </div>
    </div>

            {/* Características de Nike */}
            <div className="mt-32 px-8 text-center">
    <h2 className="text-5xl font-extrabold text-white mb-16">Características clave de Nike</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mx-4">
        {[
            {
                title: "Innovación",
                description: "Tecnologías avanzadas diseñadas para ofrecerte el máximo rendimiento.",
                imgSrc: "https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_363,c_limit/a4f5f089-4cba-470b-b66e-86ccc94f3106/nike-debuta-tecnolog%C3%ADa-innovadora-con-el-lanzamiento-del-calzado-air-max-dn.jpg",
            },
            {
                title: "Estilo",
                description: "Diseños icónicos que combinan estética y funcionalidad.",
                imgSrc: "https://fotos.perfil.com/2023/07/06/trim/720/410/nikeperu-1604268.jpeg",
            },
            {
                title: "Confort",
                description: "Materiales suaves y flexibles que se adaptan a tu cuerpo para un ajuste perfecto.",
                imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQlP0D61QtiSZHIKug_OSx1EOJZ5g6FE_X_Q&s",
            },
            {
                title: "Durabilidad",
                description: "Materiales de alta calidad que garantizan una larga vida útil.",
                imgSrc: "https://cdn.shopify.com/s/files/1/0285/9715/8027/files/Air_Force_1_Low_FlaxWheat_3_600x600.png?v=1714179488",
            },
        ].map((item, index) => (
            <div
                key={index}
                className="relative bg-white rounded-xl shadow-xl hover:shadow-2xl transform transition-all hover:scale-105 hover:border-4 border-indigo-600 overflow-hidden"
                style={{ width: "300px", height: "450px", margin: "auto" }}
            >
                {/* Imagen con superposición */}
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

            </div>
    );
}

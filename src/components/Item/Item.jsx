import { useState } from "react";
import { Link } from "react-router-dom";
import useStore from "../../Store/Store"; // Asegúrate de que el path de Store sea correcto

export default function Item({ id, title, price, img }) {
    const addToCart = useStore((state) => state.addToCart);
    const [showMessage, setShowMessage] = useState(false);

    // Función para manejar el click en el botón "Añadir al carrito"
    const handleAddToCart = () => {
        const productToAdd = {
            id,
            title,
            price,
            img,
            quantity: 1,
        };
        addToCart(productToAdd);

        // Mostrar el mensaje de confirmación
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 3000); // Ocultar mensaje después de 3 segundos
    };

    return (
        <div className="relative flex flex-col items-center my-6 mx-4 p-6 bg-white rounded-2xl shadow-2xl hover:scale-105 transform transition-all duration-300 ease-in-out">
            {/* Mensaje de confirmación */}
            {showMessage && (
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-sm font-semibold py-2 px-6 rounded-lg shadow-xl z-10">
                    Producto añadido al carrito ✅
                </div>
            )}

            {/* Imagen del producto */}
            <Link to={`/products/${id}`} className="w-full h-64 overflow-hidden rounded-lg mb-4 transition-transform duration-500 ease-in-out hover:scale-105">
                <img
                    src={img}
                    alt={`Imagen de ${title}`}
                    className="w-full h-full object-cover rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
                />
            </Link>

            {/* Título del producto */}
            <Link
                to={`/products/${id}`}
                className="text-xl font-semibold text-gray-800 mb-2 tracking-wide hover:text-yellow-500 transition duration-300"
            >
                {title}
            </Link>

            {/* Precio del producto */}
            <h4 className="text-lg font-bold text-gray-700 mb-4">${price}</h4>

            {/* Botones de acción */}
            <div className="flex justify-between w-full space-x-4">
                <Link
                    to={`/products/${id}`}
                    className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Ver Producto
                </Link>

                <button
                    onClick={handleAddToCart}
                    className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Añadir al carrito
                </button>
            </div>
        </div>
    );
}

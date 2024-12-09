import { useState } from "react";
import { Link } from "react-router-dom";
import useStore from "../../Store/Store"; 

export default function Item({ id, title, price, img }) {
    const addToCart = useStore((state) => state.addToCart);
    const [showMessage, setShowMessage] = useState(false);

    const handleAddToCart = () => {
        const productToAdd = {
            id,
            title,
            price,
            img,
            quantity: 1,
        };
        addToCart(productToAdd);

        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 3000); 
    };

    return (
        <div className="relative flex flex-col items-center my-4 mx-3 p-4 bg-white rounded-2xl shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out">
            {showMessage && (
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-sm font-semibold py-1 px-4 rounded-lg shadow-xl z-10">
                    Producto añadido al carrito ✅
                </div>
            )}

            <Link to={`/products/${id}`} className="w-full h-48 overflow-hidden rounded-lg mb-3 transition-transform duration-500 ease-in-out hover:scale-105">
                <img
                    src={img}
                    alt={`Imagen de ${title}`}
                    className="w-full h-full object-contain rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
                />
            </Link>

            <Link
                to={`/products/${id}`}
                className="text-xl font-semibold text-gray-800 mb-1 tracking-wide hover:text-yellow-500 transition duration-300"
            >
                {title}
            </Link>

            <h4 className="text-lg font-bold text-gray-700 mb-2">${price}</h4>

            <div className="flex flex-col sm:flex-row justify-between w-full space-y-3 sm:space-y-0 sm:space-x-3">
                <Link
                    to={`/products/${id}`}
                    className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto"
                >
                    Ver Producto
                </Link>

                <button
                    onClick={handleAddToCart}
                    className="bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto"
                >
                    Añadir al carrito
                </button>
            </div>
        </div>
    );
}

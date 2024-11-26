import React from 'react';
import useStore from '../../Store/Store'; // Asegúrate de que el path sea correcto
import { Link } from 'react-router-dom';

export default function CartPage() {
    const cart = useStore((state) => state.cart);
    const removeFromCart = useStore((state) => state.removeFromCart);
    const clearCart = useStore((state) => state.clearCart);

    if (cart.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
                <h2 className="text-4xl font-extrabold mb-6">
                    Tu carrito está vacío
                </h2>
                <Link
                    to="/"
                    className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 px-6 rounded-full text-lg shadow-lg hover:from-purple-600 hover:to-indigo-600 transition-all duration-300"
                >
                    Regresar a la tienda
                </Link>
            </div>
        );
    }

    const handleRemove = (productId) => {
        removeFromCart(productId);
    };

    const handleClearCart = () => {
        clearCart();
    };

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-10">
            <div className="container mx-auto max-w-[1170px] px-6">
                <h2 className="text-5xl font-extrabold text-center mb-12">
                    Carrito de Compras
                </h2>

                <div className="space-y-8">
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="flex justify-between items-center bg-gradient-to-r from-gray-700 to-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                        >
                            <div className="flex items-center space-x-6">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-24 h-24 object-cover rounded-lg"
                                />
                                <div>
                                    <h3 className="text-2xl font-bold">{item.title}</h3>
                                    <p className="text-gray-300">
                                        Cantidad: <span className="font-bold">{item.quantity}</span>
                                    </p>
                                    <p className="text-gray-300">
                                        Precio: <span className="font-bold">${item.price}</span>
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => handleRemove(item.id)}
                                className="bg-gradient-to-r from-red-500 to-red-700 text-white py-2 px-4 rounded-lg shadow-lg hover:from-red-600 hover:to-red-800 transition-all duration-300"
                            >
                                Eliminar
                            </button>
                        </div>
                    ))}
                </div>

                <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-8 mt-12 rounded-lg shadow-lg">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-3xl font-bold">Total:</h3>
                        <p className="text-3xl font-extrabold text-green-400">
                            ${total.toFixed(3)}
                        </p>
                    </div>
                    <div className="flex justify-between space-x-6">
                        <Link
                            to="/checkout"
                            className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white py-3 px-6 text-center rounded-full text-lg shadow-lg hover:from-green-600 hover:to-green-800 transition-all duration-300"
                        >
                            Proceder al Pago
                        </Link>
                        <button
                            onClick={handleClearCart}
                            className="w-full bg-gradient-to-r from-gray-500 to-gray-700 text-white py-3 px-6 text-center rounded-full text-lg shadow-lg hover:from-gray-600 hover:to-gray-800 transition-all duration-300"
                        >
                            Vaciar Carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

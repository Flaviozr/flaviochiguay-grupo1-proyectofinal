import React from "react";
import useStore from "../../Store/Store";
import { Link } from "react-router-dom";

export default function CartPage() {
  const cart = useStore((state) => state.cart);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const clearCart = useStore((state) => state.clearCart);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center">
          Tu carrito está vacío
        </h2>
        <Link
          to="/products"
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
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8">
          Carrito de Compras
        </h2>

        {/* Lista de Productos */}
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center justify-between bg-gradient-to-r from-gray-700 to-gray-800 p-6 rounded-lg shadow-lg gap-6"
            >
              {/* Imagen y Detalles */}
              <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-2/3">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    Cantidad:{" "}
                    <span className="font-bold text-yellow-400">
                      {item.quantity}
                    </span>
                  </p>
                  <p className="text-sm sm:text-base text-gray-300">
                    Precio unitario:{" "}
                    <span className="font-bold text-green-400">
                      ${item.price}
                    </span>
                  </p>
                </div>
              </div>

              {/* Botón Eliminar */}
              <button
                onClick={() => handleRemove(item.id)}
                className="w-full sm:w-auto bg-gradient-to-r from-red-500 to-red-700 text-white py-2 px-4 rounded-lg shadow-lg hover:from-red-600 hover:to-red-800 transition-all duration-300"
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>

        {/* Total y Acciones */}
        <div className="mt-12 bg-gradient-to-r from-gray-700 to-gray-800 p-8 rounded-lg shadow-lg">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <h3 className="text-xl sm:text-2xl font-bold">Total:</h3>
            <p className="text-2xl sm:text-3xl font-extrabold text-green-400">
              ${total.toFixed(3)}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/checkout"
              className="flex-1 bg-gradient-to-r from-green-500 to-green-700 text-white py-3 px-6 text-center rounded-full shadow-lg hover:from-green-600 hover:to-green-800 transition-all duration-300"
            >
              Proceder al Pago
            </Link>
            <button
              onClick={handleClearCart}
              className="flex-1 bg-gradient-to-r from-gray-500 to-gray-700 text-white py-3 px-6 text-center rounded-full shadow-lg hover:from-gray-600 hover:to-gray-800 transition-all duration-300"
            >
              Vaciar Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

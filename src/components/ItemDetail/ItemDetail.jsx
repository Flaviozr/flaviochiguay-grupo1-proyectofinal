import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../data/Zapatilla";
import useStore from "../../Store/Store";
import Loading from "../Loading/Loading.jsx";

export default function ItemDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({ price: 0, stock: 0 });
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [showNotification, setShowNotification] = useState(false);

  const addToCart = useStore((state) => state.addToCart);

  useEffect(() => {
    getProductById(productId).then((data) => {
      setProduct(data);
      setLoading(false);
    });
  }, [productId]);

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = () => {
    const productToAdd = {
      id: product.id,
      title: product.title,
      price: product.price,
      img: product.img,
      quantity: quantity,
    };
    addToCart(productToAdd);

    // Mostrar notificación temporal
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const precioTotal = product.price * quantity;

  if (loading) {
    return (
      <div className="container mx-auto mt-20 flex justify-center">
        <Loading />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="mt-20 text-center text-yellow-500 font-bold text-2xl">
        Producto no encontrado
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-gray-200 p-8 relative">
      {showNotification && (
        <div className="fixed top-5 right-5 bg-yellow-500 text-black font-bold py-3 px-5 rounded-lg shadow-lg transition-all duration-300 transform animate-slide-in-out">
          ¡Producto añadido al carrito!
        </div>
      )}
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Imagen del producto */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl hover:shadow-yellow-400 transform transition-all duration-500 hover:scale-105">
            <img
              src={product.img}
              alt={product.title}
              className="w-full object-cover rounded-lg"
            />
            <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-500 text-black text-sm font-bold uppercase rounded-lg">
              Nuevo
            </div>
          </div>
        </div>

        {/* Información del producto */}
        <div className="w-full lg:w-1/2 space-y-8 bg-gray-900 p-8 rounded-xl shadow-xl">
          <h1 className="text-5xl font-extrabold text-yellow-400 uppercase tracking-widest">
            {product.title}
          </h1>
          <p className="text-lg leading-relaxed text-gray-300">
            {product.description}
          </p>

          {/* Tallas */}
          <div>
            <h3 className="text-xl font-bold text-gray-200 mb-4">
              Tallas disponibles
            </h3>
            <div className="flex space-x-4">
              {product.sizes.map((size, index) => (
                <div
                  key={index}
                  className="w-12 h-12 flex items-center justify-center bg-gray-800 text-white rounded-full cursor-pointer hover:bg-yellow-400 hover:text-black transition-all"
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          {/* Cantidad */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={decrementQuantity}
                className="w-10 h-10 flex items-center justify-center bg-gray-700 text-white text-2xl rounded-full hover:bg-yellow-400 hover:text-black transform hover:scale-110 transition-all"
              >
                -
              </button>
              <p className="text-2xl font-bold">{quantity}</p>
              <button
                onClick={incrementQuantity}
                className="w-10 h-10 flex items-center justify-center bg-gray-700 text-white text-2xl rounded-full hover:bg-yellow-400 hover:text-black transform hover:scale-110 transition-all"
              >
                +
              </button>
            </div>
            <p className="text-xl font-semibold text-gray-300">
              Stock: <span className="text-yellow-400">{product.stock}</span>
            </p>
          </div>

          {/* Precio */}
          <div className="text-right space-y-2">
            <p className="text-lg">Precio por unidad:</p>
            <p className="text-3xl font-bold text-yellow-400">${product.price}</p>
            <p className="text-lg">Total:</p>
            <p className="text-4xl font-extrabold text-green-500">
              ${precioTotal.toFixed(2)}
            </p>
          </div>

          {/* Botones */}
          <div className="flex flex-col space-y-4">
            <button
              onClick={handleAddToCart}
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-lg py-3 rounded-lg shadow-md hover:shadow-yellow-500 hover:bg-gradient-to-l transform hover:scale-105 transition-all"
            >
              Añadir al carrito
            </button>
            <button className="w-full bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold text-lg py-3 rounded-lg shadow-md hover:shadow-yellow-500 hover:bg-gradient-to-l transform hover:scale-105 transition-all">
              Comprar ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

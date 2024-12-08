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
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const incrementQuantity = () => {
    if (quantity < product.stock) setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    const productToAdd = {
      id: product.id,
      title: product.title,
      price: product.price,
      img: product.img,
      quantity,
    };
    addToCart(productToAdd);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const precioTotal = product.price * quantity;

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loading />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center mt-20 text-yellow-500 font-bold text-2xl">
        Producto no encontrado
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-gray-200 p-4 sm:p-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-6">

        <div className="w-full lg:w-1/2">
          <div className="relative bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-auto object-cover"
            />
            <span className="absolute top-4 right-4 bg-yellow-500 text-black text-xs sm:text-sm font-bold px-2 py-1 rounded">
              Nuevo
            </span>
          </div>
        </div>

        <div className="w-full lg:w-1/2 space-y-4 bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg">
      
          <h1 className="text-3xl sm:text-4xl font-bold text-yellow-400">
            {product.title}
          </h1>
          <p className="text-gray-300 text-sm sm:text-base">{product.description}</p>
          <div>
            <h3 className="text-lg font-bold text-gray-300">Tallas disponibles</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {product.sizes.map((size, index) => (
                <div
                  key={index}
                  className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-700 text-white rounded-full cursor-pointer hover:bg-yellow-400 hover:text-black transition"
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button
                onClick={decrementQuantity}
                className="w-8 h-8 flex items-center justify-center bg-gray-700 text-white rounded-full hover:bg-yellow-400 hover:text-black transition"
              >
                -
              </button>
              <p className="text-lg sm:text-xl font-bold">{quantity}</p>
              <button
                onClick={incrementQuantity}
                className="w-8 h-8 flex items-center justify-center bg-gray-700 text-white rounded-full hover:bg-yellow-400 hover:text-black transition"
              >
                +
              </button>
            </div>
            <p className="text-sm sm:text-base text-gray-300">
              Stock: <span className="text-yellow-400">{product.stock}</span>
            </p>
          </div>

          <div className="text-right space-y-1">
            <p className="text-sm sm:text-base">Precio unitario: ${product.price}</p>
            <p className="text-xl sm:text-2xl font-bold text-green-500">
              Total: ${precioTotal.toFixed(3)}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-yellow-500 text-black py-2 rounded-lg hover:bg-yellow-600 transition"
            >
              Añadir al carrito
            </button>
            <button className="flex-1 bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-600 transition">
              Comprar ahora
            </button>
          </div>

          {showNotification && (
            <div className="mt-2 bg-yellow-500 text-black text-center py-2 rounded-lg">
              ¡Producto añadido al carrito!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}



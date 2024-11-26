import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/Zapatilla';
import useStore from '../../Store/Store';
import Loading from '../Loading/Loading.jsx';

export default function ItemDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState({ price: 0, stock: 0 });
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);

    // Obtener la función addToCart desde el Store
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
        // Crear un objeto con los datos del producto para agregarlo al carrito
        const productToAdd = {
            id: product.id,
            title: product.title,
            price: product.price,
            img: product.img,
            quantity: quantity,
        };
        addToCart(productToAdd); // Agregar al carrito
    };

    const precioTotal = product.price * quantity;

    if (loading) {
        return (
            <div className="container mx-auto max-w-[1170px] mt-20">
                <Loading />
            </div>
        );
    }

    if (!product) {
        return <div className="mt-20">Producto no encontrado</div>;
    }

    return (
        <div className="container mx-auto max-w-[1170px] py-16 px-6 mt-20 bg-gradient-to-r from-blue-50 via-white to-blue-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="bg-white shadow-2xl rounded-lg overflow-hidden p-6 transition-transform duration-500 ease-in-out hover:scale-105 transform hover:shadow-xl">
                    <img src={product.img} alt="Imagen del producto" className="w-full h-auto object-cover rounded-lg" />
                </div>

                <div className="bg-white shadow-xl rounded-lg p-8 space-y-8">
                    <h1 className="text-4xl font-bold text-indigo-800 uppercase tracking-wide">{product.title}</h1>
                    <p className="text-lg text-gray-600 mb-6">{product.description}</p>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Tallas disponibles:</h3>
                        <ul className="flex space-x-6">
                            {product.sizes.map((size, index) => (
                                <li key={index} className="text-gray-700 border-2 border-gray-400 rounded-full w-14 h-14 flex items-center justify-center cursor-pointer hover:bg-indigo-600 hover:text-white transition-all">
                                    {size}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <p className="text-lg text-gray-700">
                        Stock disponible: <span className="font-semibold">{product.stock}</span>
                    </p>

                    <div className="flex items-center space-x-6 mb-6">
                        <button onClick={decrementQuantity} className="bg-indigo-500 text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl hover:bg-indigo-600 transition-all transform hover:scale-105 focus:outline-none">
                            -
                        </button>
                        <p className="text-2xl font-semibold">{quantity}</p>
                        <button onClick={incrementQuantity} className="bg-indigo-500 text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl hover:bg-indigo-600 transition-all transform hover:scale-105 focus:outline-none">
                            +
                        </button>
                    </div>

                    <p className="text-lg text-gray-700">
                        Precio: <span className="font-semibold">${product.price} por unidad</span>
                    </p>

                    <p className="text-2xl font-semibold text-gray-800 mt-4">
                        Total: <span className="text-xl text-green-500">${precioTotal.toFixed(2)}</span>
                    </p>

                    <div className="flex flex-col space-y-4">
                        <button onClick={handleAddToCart} className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white text-lg py-4 rounded-lg hover:shadow-2xl hover:bg-gradient-to-l transform transition-all duration-500 mt-6 focus:outline-none">
                            Añadir al carrito
                        </button>
                        <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-500 text-white text-lg py-4 rounded-lg hover:shadow-2xl hover:bg-gradient-to-l transform transition-all duration-500 mt-6 focus:outline-none">
                            Comprar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

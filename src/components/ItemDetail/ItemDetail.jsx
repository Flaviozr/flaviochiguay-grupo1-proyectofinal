import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/asyncMock.jsx';

import Loading from '../Loading/Loading.jsx';

export default function ItemDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState({ product: 0, stock: 0 });
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);

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

    const precioTotal = product.price * quantity;

    if (loading) {
        return <div className="container mx-auto max-w-[1170px]"><Loading /></div>;
    }
    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="container mx-auto max-w-[1170px] py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                
                {/* Imagen del Producto */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
                    <img src={product.img} alt="Imagen del producto" className="w-full h-auto object-cover rounded-lg" />
                </div>
                
                {/* Información del Producto */}
                <div className="bg-white shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl font-semibold text-gray-800 uppercase mb-4">{product.title}</h1>
                    <p className="text-lg text-gray-600 mb-6">{product.description}</p>

                    {/* Tallas Disponibles */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-700">Tallas disponibles:</h3>
                        <ul className="flex space-x-3 mt-2">
                            {product.sizes.map((size, index) => (
                                <li key={index} className="text-gray-700 border rounded-full w-12 h-12 flex items-center justify-center cursor-pointer hover:bg-gray-200">
                                    {size}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Stock */}
                    <p className="text-lg text-gray-700 mb-4">Stock disponible: <span className="font-semibold">{product.stock}</span></p>

                    {/* Cantidad */}
                    <div className="flex items-center mb-6">
                        <button onClick={decrementQuantity} className="text-gray-700 border rounded-lg w-10 h-10 flex items-center justify-center text-lg hover:bg-gray-200">-</button>
                        <p className="text-lg mx-4">{quantity}</p>
                        <button onClick={incrementQuantity} className="text-gray-700 border rounded-lg w-10 h-10 flex items-center justify-center text-lg hover:bg-gray-200">+</button>
                    </div>

                    {/* Precio */}
                    <p className="text-lg text-gray-700 mb-4">Precio: <span className="font-semibold">${product.price} por unidad</span></p>

                    {/* Precio Total */}
                    <p className="text-xl font-semibold text-gray-800 mb-6">Total: ${precioTotal}</p>

                    {/* Botón de Compra */}
                    <button className="w-full bg-[#171e27] text-white text-lg py-3 rounded-lg hover:bg-[#0d1a1b] transition-all">
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    );
}
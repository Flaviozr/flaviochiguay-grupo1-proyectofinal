import Item from "../Item/Item";
import { getProducts } from "../../data/Zapatilla";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import Search from "../Search/Search";

export default function ItemList({ initialProducts }) {
    const [products, setProducts] = useState(initialProducts || []);
    const [loading, setLoading] = useState(!initialProducts);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    useEffect(() => {
        if (!initialProducts) {
            getProducts().then((data) => {
                setProducts(data);
                setLoading(false);
            });
        } else {
            setProducts(initialProducts);
            setLoading(false);
        }
    }, [initialProducts]);

    const filteredProducts = products
        .filter((product) =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .filter((product) =>
            selectedCategory ? product.category === selectedCategory : true
        );

    return (
        <>
            {loading ? (
                <div className="flex items-center justify-center min-h-[60vh]">
                    <Loading />
                </div>
            ) : (
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <Search setSearchQuery={setSearchQuery} />

                    <div className="mb-6 flex flex-wrap justify-center gap-4">
                        <button
                            onClick={() => handleCategoryClick('')}
                            className={`px-5 py-3 text-sm sm:text-base font-semibold rounded-full shadow-md ${
                                selectedCategory === '' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'
                            } hover:bg-indigo-500 hover:text-white`}
                        >
                            Ver Todos
                        </button>
                        <button
                            onClick={() => handleCategoryClick('nino')}
                            className={`px-5 py-3 text-sm sm:text-base font-semibold rounded-full shadow-md ${
                                selectedCategory === 'nino' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
                            } hover:bg-blue-500 hover:text-white`}
                        >
                            Niños
                        </button>
                        <button
                            onClick={() => handleCategoryClick('adulto')}
                            className={`px-5 py-3 text-sm sm:text-base font-semibold rounded-full shadow-md ${
                                selectedCategory === 'adulto' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
                            } hover:bg-blue-500 hover:text-white`}
                        >
                            Adultos
                        </button>
                    </div>

                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        {filteredProducts.map((prod) => (
                            <div 
                                key={prod.id} 
                                className="rounded-xl overflow-hidden shadow-lg bg-gray-50 hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
                            >
                                <Item {...prod} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

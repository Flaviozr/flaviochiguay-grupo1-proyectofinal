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
                <div>
                    <Loading />
                </div>
            ) : (
                <div className="container mx-auto max-w-[1200px] p-4">

                    <Search setSearchQuery={setSearchQuery} />

                    <div className="mb-4 flex space-x-4">
                        <button
                            onClick={() => handleCategoryClick('')}
                            className={`px-4 py-2 rounded-md font-semibold ${
                                selectedCategory === '' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'
                            }`}
                        >
                            Ver Todos
                        </button>
                        <button
                            onClick={() => handleCategoryClick('nino')}
                            className={`px-4 py-2 rounded-md font-semibold ${
                                selectedCategory === 'nino' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
                            }`}
                        >
                            Niños
                        </button>
                        <button
                            onClick={() => handleCategoryClick('adulto')}
                            className={`px-4 py-2 rounded-md font-semibold ${
                                selectedCategory === 'adulto' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
                            }`}
                        >
                            Adultos
                        </button>
                    </div>

                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                        {filteredProducts.map((prod) => (
                            <Item {...prod} key={prod.id} />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

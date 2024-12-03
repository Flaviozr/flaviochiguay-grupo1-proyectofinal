import { useState } from "react";
import { BiSearch } from "react-icons/bi";

export default function Search({ setSearchQuery }) {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        const query = e.target.value;
        setInputValue(query);
        setSearchQuery(query);
    };

    return (
        <div className="mb-6 flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-xl overflow-hidden">
            <div className="p-3 bg-white text-blue-600">
                <BiSearch size={22} />
            </div>
            <input
                type="text"
                placeholder="Buscar productos..."
                value={inputValue}
                onChange={handleChange}
                className="w-full p-4 pl-12 rounded-lg border border-transparent text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
            />
        </div>
    );
}


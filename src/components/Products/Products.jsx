import ItemList from "../ItemList/ItemList";

export default function Product() {
    return (
        <section className="bg-gradient-to-r from-indigo-900 via-gray-800 to-black py-20 mt-40"> {/* Aumentamos mt-40 y cambiamos fondo */}
            <div className="container mx-auto max-w-[1170px] px-4">
                {/* Título de la Sección */}
                <h2 className="text-5xl font-extrabold text-center text-white mb-6 tracking-wide leading-tight">
                    Explora Nuestra Colección de Productos
                </h2>
                
                {/* Descripción de la Sección */}
                <p className="text-center text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                    Descubre productos de alta calidad y encuentra el par perfecto de zapatillas que se adapte a tu estilo
                    y necesidades. Ofrecemos una amplia gama de opciones para cada ocasión, con diseños exclusivos que te harán destacar.
                </p>

               {/* Lista de Productos */}
<div className="bg-gray-800 rounded-lg shadow-lg p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-yellow-500/50">
    <ItemList />
</div>

            </div>
        </section>
    );
}


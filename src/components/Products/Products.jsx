import ItemList from "../ItemList/ItemList";

export default function Product() {
    return (
        <section className="bg-gray-100 py-12 mt-20">
            <div className="container mx-auto max-w-[1170px] px-4">
                {/* Título de la Sección */}
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
                    Explora Nuestra Colección de Productos
                </h2>
                
                {/* Descripción de la Sección */}
                <p className="text-center text-gray-600 text-lg mb-8">
                    Descubre productos de alta calidad y encuentra el par perfecto de zapatillas que se adapte a tu estilo
                    y necesidades. Ofrecemos una amplia gama de opciones para cada ocasión.
                </p>

                {/* Lista de Productos */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <ItemList />
                </div>
            </div>
        </section>
    );
}
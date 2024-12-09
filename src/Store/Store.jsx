import { create } from 'zustand';

const useStore = create((set) => ({
    cart: [],  
    addToCart: (product) => set((state) => {
        const existingProduct = state.cart.find(item => item.id === product.id);
        if (existingProduct) {
            return {
                cart: state.cart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
                )
            };
        } else {
            return { cart: [...state.cart, product] };
        }
    }),
    removeFromCart: (productId) => set((state) => ({
        cart: state.cart.filter(item => item.id !== productId)
    })),
    clearCart: () => set(() => ({
        cart: []  
    }))
}));

export default useStore;
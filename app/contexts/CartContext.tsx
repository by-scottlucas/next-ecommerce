'use client';

import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    stock: number;
    image: string;
}

interface CartContextType {
    cartItems: CartItem[];
    addItem: (item: CartItem) => void;
    updateQuantity: (id: number, quantity: number) => void;
    removeItem: (id: number) => void;
    clearCart: () => void;
    totalItems: number;
    totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

interface CartProviderProps {
    children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const findItem = (id: number) => cartItems.find((item) => item.id === id);

    const addItem = (item: CartItem): void => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((i) => i.id === item.id);
            if (existingItem) {
                return prevItems.map((i) =>
                    i.id === item.id
                        ? { ...i, quantity: i.quantity + item.quantity }
                        : i
                );
            }
            return [...prevItems, item];
        });
    };

    const updateQuantity = (id: number, quantity: number): void => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    const removeItem = (id: number): void => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.id !== id)
        );
    };

    const clearCart = (): void => {
        setCartItems([]);
    };

    const totalItems = useMemo(() => cartItems.length, [cartItems]);

    const totalPrice = useMemo(
        () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
        [cartItems]
    );

    const value: CartContextType = {
        cartItems,
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
        totalItems,
        totalPrice,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

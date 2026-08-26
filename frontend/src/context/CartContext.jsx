import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addItem = (product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      // Normalize product fields to ensure name, img, and numeric price exist
      const formattedPrice =
        typeof product.price === "string"
          ? parseFloat(product.price.replace(/[^0-9.]/g, ""))
          : product.price;

      const normalizedProduct = {
        ...product,
        name: product.name || product.title,       // Handles 'title' vs 'name'
        img: product.img || product.image,         // Handles 'image' vs 'img'
        price: isNaN(formattedPrice) ? 0 : formattedPrice, // Ensures price is a clean number
      };

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, { ...normalizedProduct, quantity }];
      }
    });
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  const clearCart = () => setCartItems([]);

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + (item.price || 0) * item.quantity,
    0
  );

  const cartCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalAmount,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
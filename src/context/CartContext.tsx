import { createContext, useContext, useState, type ReactNode } from "react";
import { type Product } from "../data/mockData";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  restaurantCart: CartItem[];
  storeCart: CartItem[];
  addToRestaurantCart: (product: Product) => void;
  removeFromRestaurantCart: (productId: string) => void;
  updateRestaurantQuantity: (productId: string, quantity: number) => void;
  clearRestaurantCart: () => void;
  addToStoreCart: (product: Product) => void;
  removeFromStoreCart: (productId: string) => void;
  updateStoreQuantity: (productId: string, quantity: number) => void;
  clearStoreCart: () => void;
  getRestaurantTotal: () => number;
  getStoreTotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [restaurantCart, setRestaurantCart] = useState<CartItem[]>([]);
  const [storeCart, setStoreCart] = useState<CartItem[]>([]);

  const addToRestaurantCart = (product: Product) => {
    setRestaurantCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const removeFromRestaurantCart = (productId: string) => {
    setRestaurantCart((prev) =>
      prev.filter((item) => item.product.id !== productId),
    );
  };

  const updateRestaurantQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromRestaurantCart(productId);
      return;
    }
    setRestaurantCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item,
      ),
    );
  };

  const clearRestaurantCart = () => {
    setRestaurantCart([]);
  };

  const addToStoreCart = (product: Product) => {
    setStoreCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const removeFromStoreCart = (productId: string) => {
    setStoreCart((prev) =>
      prev.filter((item) => item.product.id !== productId),
    );
  };

  const updateStoreQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromStoreCart(productId);
      return;
    }
    setStoreCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item,
      ),
    );
  };

  const clearStoreCart = () => {
    setStoreCart([]);
  };

  const getRestaurantTotal = () => {
    return restaurantCart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    );
  };

  const getStoreTotal = () => {
    return storeCart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    );
  };

  return (
    <CartContext.Provider
      value={{
        restaurantCart,
        storeCart,
        addToRestaurantCart,
        removeFromRestaurantCart,
        updateRestaurantQuantity,
        clearRestaurantCart,
        addToStoreCart,
        removeFromStoreCart,
        updateStoreQuantity,
        clearStoreCart,
        getRestaurantTotal,
        getStoreTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}

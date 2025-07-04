import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import './App.css';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

interface CartItem {
  id: string;
  name: string;
  price: number;
  priceLBP: number;
  quantity: number;
  image: string;
  description: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  priceLBP: number;
  image: string;
  description: string;
}

interface CartContextType {
  cart: { [key: string]: number };
  cartItems: CartItem[];
  addToCart: (productId: string, product?: Product) => void;
  removeFromCart: (productId: string) => void;
  getTotalItems: () => number;
  updateCartQuantity: (id: string, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (productId: string, product?: Product) => {
    setCart(prev => ({ ...prev, [productId]: (prev[productId] || 0) + 1 }));
    
    if (product) {
      setCartItems(prev => {
        const existing = prev.find(item => item.id === productId);
        if (existing) {
          return prev.map(item =>
            item.id === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          return [...prev, { ...product, quantity: 1 }];
        }
      });
    }
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[productId] > 1) {
        newCart[productId]--;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });

    setCartItems(prev => {
      const existing = prev.find(item => item.id === productId);
      if (existing && existing.quantity > 1) {
        return prev.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prev.filter(item => item.id !== productId);
      }
    });
  };

  const updateCartQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
      setCart(prev => {
        const newCart = { ...prev };
        delete newCart[id];
        return newCart;
      });
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
      setCart(prev => ({ ...prev, [id]: quantity }));
    }
  };

  const getTotalItems = () => Object.values(cart).reduce((sum, count) => sum + count, 0);

  return (
    <CartContext.Provider value={{
      cart,
      cartItems,
      addToCart,
      removeFromCart,
      getTotalItems,
      updateCartQuantity
    }}>
      {children}
    </CartContext.Provider>
  );
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

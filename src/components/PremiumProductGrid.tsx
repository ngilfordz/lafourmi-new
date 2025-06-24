
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Minus, ShoppingCart, Star } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  priceLBP: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  inStock: boolean;
}

interface PremiumProductGridProps {
  onAddToCart: (product: Product, quantity: number) => void;
  cart: { [key: string]: number };
}

const PremiumProductGrid = ({ onAddToCart, cart }: PremiumProductGridProps) => {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  const products: Product[] = [
    {
      id: '1',
      name: 'Coca-Cola 330ml',
      price: 2.50,
      priceLBP: 37500,
      image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300&h=300&fit=crop',
      category: 'Soft Drinks',
      description: 'Classic Coca-Cola in 330ml can',
      rating: 4.8,
      inStock: true
    },
    {
      id: '2',
      name: 'Sprite 330ml',
      price: 2.25,
      priceLBP: 33750,
      image: 'https://images.unsplash.com/photo-1625772299848-391b8f6b3d8c?w=300&h=300&fit=crop',
      category: 'Soft Drinks',
      description: 'Refreshing lemon-lime soda',
      rating: 4.6,
      inStock: true
    },
    {
      id: '3',
      name: 'Marlboro Red',
      price: 8.50,
      priceLBP: 127500,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop',
      category: 'Premium Tobacco',
      description: 'Premium cigarettes pack',
      rating: 4.2,
      inStock: true
    },
    {
      id: '4',
      name: 'Arak Kefraya',
      price: 25.00,
      priceLBP: 375000,
      image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300&h=300&fit=crop',
      category: 'Lebanese Alcohol',
      description: 'Traditional Lebanese arak',
      rating: 4.9,
      inStock: true
    },
    {
      id: '5',
      name: 'Lebanese Red Wine',
      price: 35.00,
      priceLBP: 525000,
      image: 'https://images.unsplash.com/photo-1586370434639-0fe43b2d32d6?w=300&h=300&fit=crop',
      category: 'Lebanese Alcohol',
      description: 'Premium Lebanese red wine',
      rating: 4.7,
      inStock: true
    },
    {
      id: '6',
      name: 'Almaza Beer',
      price: 3.75,
      priceLBP: 56250,
      image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=300&h=300&fit=crop',
      category: 'Lebanese Alcohol',
      description: 'Lebanese premium beer',
      rating: 4.5,
      inStock: true
    },
    {
      id: '7',
      name: 'Za\'atar Manakish Mix',
      price: 4.50,
      priceLBP: 67500,
      image: 'https://images.unsplash.com/photo-1586511934875-5c5411eebf79?w=300&h=300&fit=crop',
      category: 'Authentic Snacks',
      description: 'Traditional Lebanese za\'atar blend',
      rating: 4.8,
      inStock: true
    },
    {
      id: '8',
      name: 'Lebanese Olive Oil',
      price: 15.00,
      priceLBP: 225000,
      image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&h=300&fit=crop',
      category: 'Authentic Products',
      description: 'Extra virgin Lebanese olive oil',
      rating: 4.9,
      inStock: true
    },
    {
      id: '9',
      name: 'Tide Detergent',
      price: 12.00,
      priceLBP: 180000,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop',
      category: 'Cleaning Supplies',
      description: 'Premium laundry detergent',
      rating: 4.6,
      inStock: true
    },
    {
      id: '10',
      name: 'Head & Shoulders Shampoo',
      price: 8.75,
      priceLBP: 131250,
      image: 'https://images.unsplash.com/photo-1571781764885-d1096c2e37c4?w=300&h=300&fit=crop',
      category: 'Premium Toiletries',
      description: 'Anti-dandruff shampoo',
      rating: 4.4,
      inStock: true
    },
    {
      id: '11',
      name: 'Pepsi 330ml',
      price: 2.25,
      priceLBP: 33750,
      image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=300&h=300&fit=crop',
      category: 'Soft Drinks',
      description: 'Classic Pepsi cola',
      rating: 4.5,
      inStock: true
    },
    {
      id: '12',
      name: 'Lebanese Honey',
      price: 18.00,
      priceLBP: 270000,
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&h=300&fit=crop',
      category: 'Authentic Products',
      description: 'Pure Lebanese mountain honey',
      rating: 4.9,
      inStock: true
    }
  ];

  const updateQuantity = (productId: string, change: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(0, (prev[productId] || 0) + change)
    }));
  };

  const handleAddToCart = (product: Product) => {
    const quantity = quantities[product.id] || 1;
    onAddToCart(product, quantity);
    setQuantities(prev => ({ ...prev, [product.id]: 0 }));
  };

  return (
    <section id="products" className="py-32 px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-6xl font-bold mb-8 font-mono">
            Premium{' '}
            <span className="text-gradient animate-glow">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            Discover our carefully curated selection of Lebanese and international premium products. 
            From authentic local treasures to global favorites, every item is chosen for quality and authenticity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group hover:scale-105 transition-all duration-500 glow-effect border-grocery-yellow/20 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">Out of Stock</span>
                    </div>
                  )}
                  
                  <div className="absolute top-4 right-4 bg-grocery-yellow text-black px-2 py-1 rounded-full text-sm font-bold">
                    {product.category}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center mb-3">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(product.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                          }`} 
                        />
                      ))}
                      <span className="ml-2 text-sm text-muted-foreground">
                        ({product.rating})
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-grocery-yellow">
                        ${product.price}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {product.priceLBP.toLocaleString()} LBP
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(product.id, -1)}
                        disabled={!quantities[product.id]}
                        className="h-8 w-8 p-0"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      
                      <span className="w-8 text-center font-semibold">
                        {quantities[product.id] || 1}
                      </span>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(product.id, 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>

                    <Button
                      onClick={() => handleAddToCart(product)}
                      disabled={!product.inStock}
                      className="bg-grocery-yellow text-black hover:bg-grocery-yellow-light font-semibold"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add
                      {cart[product.id] && (
                        <span className="ml-1 bg-black text-grocery-yellow rounded-full px-2 py-0.5 text-xs">
                          {cart[product.id]}
                        </span>
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumProductGrid;

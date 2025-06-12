
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Package, Wine, Cookie, Cigarette, Plus, Minus, ShoppingCart } from 'lucide-react';

const EnhancedProductCategories = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [cart, setCart] = useState<{[key: string]: number}>({});
  
  // Sample products based on Lebanese grocery items
  const products = [
    // Pantry Essentials
    { id: '1', name: 'Basmati Rice', category: 'pantry', price: 8.50, priceLBP: 127500, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=200&fit=crop' },
    { id: '2', name: 'Extra Virgin Olive Oil', category: 'pantry', price: 12.00, priceLBP: 180000, image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&h=200&fit=crop' },
    { id: '3', name: 'Lebanese Spice Mix', category: 'pantry', price: 6.75, priceLBP: 101250, image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&h=200&fit=crop' },
    
    // Snacks & Biscuits
    { id: '4', name: 'Zaatar Crackers', category: 'snacks', price: 4.25, priceLBP: 63750, image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=300&h=200&fit=crop' },
    { id: '5', name: 'Halawet El Jibn', category: 'snacks', price: 7.50, priceLBP: 112500, image: 'https://images.unsplash.com/photo-1571267188581-bd5b6b08c30d?w=300&h=200&fit=crop' },
    { id: '6', name: 'Kaak Bread', category: 'snacks', price: 3.00, priceLBP: 45000, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=200&fit=crop' },
    
    // Beverages
    { id: '7', name: 'Ayran Yogurt Drink', category: 'beverages', price: 2.50, priceLBP: 37500, image: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=300&h=200&fit=crop' },
    { id: '8', name: 'Lebanese Coffee', category: 'beverages', price: 9.00, priceLBP: 135000, image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=300&h=200&fit=crop' },
    { id: '9', name: 'Rose Water', category: 'beverages', price: 5.25, priceLBP: 78750, image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=200&fit=crop' },
    
    // Alcohol
    { id: '10', name: 'Arak Kefraya', category: 'alcohol', price: 35.00, priceLBP: 525000, image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300&h=200&fit=crop' },
    { id: '11', name: 'Lebanese Red Wine', category: 'alcohol', price: 28.00, priceLBP: 420000, image: 'https://images.unsplash.com/photo-1506377247379-461a39b057e6?w=300&h=200&fit=crop' },
    { id: '12', name: 'Almaza Beer', category: 'alcohol', price: 3.50, priceLBP: 52500, image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop' },
    
    // More products to reach 100...
    ...Array.from({ length: 88 }, (_, i) => ({
      id: String(13 + i),
      name: `Product ${13 + i}`,
      category: ['pantry', 'snacks', 'beverages', 'alcohol', 'tobacco', 'sweets'][i % 6],
      price: (Math.random() * 50 + 1),
      priceLBP: (Math.random() * 50 + 1) * 15000,
      image: `https://images.unsplash.com/photo-${1586201375761 + i}?w=300&h=200&fit=crop`
    }))
  ];

  const categories = [
    { id: 'pantry', name: 'Pantry Essentials', icon: Package, count: products.filter(p => p.category === 'pantry').length },
    { id: 'snacks', name: 'Snacks & Biscuits', icon: Cookie, count: products.filter(p => p.category === 'snacks').length },
    { id: 'beverages', name: 'Soft Drinks', icon: Package, count: products.filter(p => p.category === 'beverages').length },
    { id: 'alcohol', name: 'Alcoholic Beverages', icon: Wine, count: products.filter(p => p.category === 'alcohol').length },
    { id: 'tobacco', name: 'Tobacco Products', icon: Cigarette, count: products.filter(p => p.category === 'tobacco').length },
    { id: 'sweets', name: 'Sweets & Candy', icon: Package, count: products.filter(p => p.category === 'sweets').length }
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategories.length === 0 || selectedCategories.includes(product.category))
  );

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const addToCart = (productId: string) => {
    setCart(prev => ({ ...prev, [productId]: (prev[productId] || 0) + 1 }));
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
  };

  const getTotalItems = () => Object.values(cart).reduce((sum, count) => sum + count, 0);

  return (
    <section id="products" className="py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">
            Premium{' '}
            <span className="text-gradient">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of quality products
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 rounded-full glow-effect"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategories.includes(category.id) ? "default" : "outline"}
              onClick={() => toggleCategory(category.id)}
              className="rounded-full"
            >
              <category.icon className="h-4 w-4 mr-2" />
              {category.name} ({category.count})
            </Button>
          ))}
          {selectedCategories.length > 0 && (
            <Button
              variant="ghost"
              onClick={() => setSelectedCategories([])}
              className="rounded-full"
            >
              Clear All
            </Button>
          )}
        </div>

        {/* Cart Summary */}
        {getTotalItems() > 0 && (
          <div className="fixed top-24 right-4 z-40 bg-card border rounded-lg p-4 shadow-lg">
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              <span className="font-semibold">{getTotalItems()} items</span>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.slice(0, 20).map((product, index) => (
            <Card 
              key={product.id} 
              className="group glow-effect hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                <div className="space-y-2">
                  <div className="flex flex-col gap-1">
                    <span className="text-lg font-bold text-primary">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {product.priceLBP.toLocaleString()} LBP
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    {cart[product.id] ? (
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => removeFromCart(product.id)}
                          className="h-8 w-8 p-0 rounded-full"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="font-semibold min-w-[2rem] text-center">
                          {cart[product.id]}
                        </span>
                        <Button
                          size="sm"
                          onClick={() => addToCart(product.id)}
                          className="h-8 w-8 p-0 rounded-full"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    ) : (
                      <Button
                        size="sm"
                        onClick={() => addToCart(product.id)}
                        className="w-full rounded-full"
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {filteredProducts.length > 20 && (
          <div className="text-center mt-8">
            <Button variant="outline" className="rounded-full">
              Load More Products
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default EnhancedProductCategories;

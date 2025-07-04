import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Package, Wine, Cookie, Cigarette, Plus, Minus, ShoppingCart, Coffee, Sparkles, Milk, Snowflake, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { products, productCategories } from '@/data/products';
import { useCart } from '@/App';
import { HyperText } from '@/components/ui/hyper-text';

const EnhancedProductCategories = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  
  const { cart, addToCart, removeFromCart, getTotalItems } = useCart();
  
  const categoryIcons: {[key: string]: React.ElementType} = {
    'soft-drinks': Coffee,
    'alcohol': Wine,
    'tobacco': Cigarette,
    'snacks': Cookie,
    'pantry': Package,
    'dairy': Milk,
    'cleaning': Sparkles,
    'toiletries': Package,
    'authentic': Package,
    'frozen': Snowflake
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.brand?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory ? product.category === selectedCategory :
                           selectedCategories.length === 0 || selectedCategories.includes(product.category);
    
    return matchesSearch && matchesCategory;
  });

  const toggleCategory = (categoryId: string) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryId);
      setSelectedCategories([]);
    }
  };

  const toggleFilter = (categoryId: string) => {
    setSelectedCategory(null);
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleAddToCart = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      addToCart(productId, product);
    }
  };

  return (
    <section id="products" className="py-20 px-4 min-h-screen bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold mb-4 font-mono">
            <HyperText 
              text="Our" 
              className="text-5xl font-bold font-mono mr-4"
              animateOnLoad={false}
            />
            <span className="text-gradient">
              <HyperText 
                text="Premium Collection" 
                className="text-5xl font-bold font-mono text-gradient"
                animateOnLoad={false}
              />
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Over 200 carefully selected products from local Lebanese treasures to international favorites
          </p>
        </motion.div>

        {/* Search Bar with Glowing Border */}
        <motion.div 
          className="max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className={`relative ${isSearchFocused ? 'glow-border' : ''} rounded-full`}>
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5 z-10" />
            <Input
              type="text"
              placeholder="Search for Coca-Cola, Almaza beer, Marlboro..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="pl-12 pr-4 py-6 text-lg rounded-full border-2 border-grocery-yellow/30 focus:border-grocery-yellow transition-all duration-300"
            />
            {searchTerm && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSearchTerm('')}
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              >
                Clear
              </Button>
            )}
          </div>
        </motion.div>

        {/* Category Icons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          {productCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Package;
            const productCount = products.filter(p => p.category === category.id).length;
            
            return (
              <motion.button
                key={category.id}
                onClick={() => toggleCategory(category.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-300 ${
                  selectedCategory === category.id 
                    ? 'bg-grocery-yellow text-black shadow-lg' 
                    : 'bg-card hover:bg-muted'
                }`}
              >
                <div className={`p-3 rounded-full ${
                  selectedCategory === category.id 
                    ? 'bg-black/10' 
                    : 'bg-grocery-yellow/10'
                }`}>
                  <Icon className="h-8 w-8" />
                </div>
                <span className="text-sm font-medium">{category.name}</span>
                <span className="text-xs opacity-70">{productCount} items</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Filter Toggle */}
        <div className="flex justify-center mb-8">
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="rounded-full glow-border"
          >
            <Filter className="h-4 w-4 mr-2" />
            {showFilters ? 'Hide' : 'Show'} Filters
          </Button>
        </div>

        {/* Multi-select Filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div 
              className="flex flex-wrap justify-center gap-2 mb-8"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {productCategories.map((category) => (
                <Button
                  key={category.id}
                  size="sm"
                  variant={selectedCategories.includes(category.id) ? "default" : "outline"}
                  onClick={() => toggleFilter(category.id)}
                  className="rounded-full"
                >
                  {category.name}
                </Button>
              ))}
              {selectedCategories.length > 0 && (
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedCategory(null);
                  }}
                  className="rounded-full text-destructive"
                >
                  Clear All
                </Button>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results Count */}
        {(searchTerm || selectedCategory || selectedCategories.length > 0) && (
          <p className="text-center text-muted-foreground mb-6">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        )}

        {/* Cart Summary */}
        <AnimatePresence>
          {getTotalItems() > 0 && (
            <motion.div 
              className="fixed bottom-8 right-8 z-40 bg-card border-2 border-grocery-yellow rounded-2xl p-6 shadow-2xl glow-border"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
            >
              <div className="flex items-center gap-3">
                <div className="bg-grocery-yellow/10 p-3 rounded-full">
                  <ShoppingCart className="h-6 w-6 text-grocery-yellow" />
                </div>
                <div>
                  <p className="font-bold text-lg">{getTotalItems()} items</p>
                  <p className="text-sm text-muted-foreground">in your cart</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.5) }}
            >
              <Card className="group hover:scale-105 transition-all duration-300 h-full flex flex-col overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&h=300&fit=crop';
                      }}
                    />
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <span className="text-white font-bold">Out of Stock</span>
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="p-4 flex-1 flex flex-col">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-1 line-clamp-2">{product.name}</CardTitle>
                    {product.brand && (
                      <p className="text-sm text-muted-foreground mb-2">{product.brand}</p>
                    )}
                  </div>
                  
                  <div className="space-y-3 mt-auto">
                    <div className="flex flex-col gap-1">
                      <span className="text-xl font-bold text-grocery-yellow">
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {product.priceLBP.toLocaleString()} LBP
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      {product.inStock ? (
                        cart[product.id] ? (
                          <div className="flex items-center gap-2 w-full">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => removeFromCart(product.id)}
                              className="h-9 w-9 p-0 rounded-full"
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="font-bold text-lg flex-1 text-center">
                              {cart[product.id]}
                            </span>
                            <Button
                              size="sm"
                              onClick={() => handleAddToCart(product.id)}
                              className="h-9 w-9 p-0 rounded-full bg-grocery-yellow text-black hover:bg-grocery-yellow-light"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        ) : (
                          <Button
                            size="sm"
                            onClick={() => handleAddToCart(product.id)}
                            className="w-full rounded-full bg-grocery-yellow text-black hover:bg-grocery-yellow-light"
                          >
                            <ShoppingCart className="h-4 w-4 mr-2" />
                            Add to Cart
                          </Button>
                        )
                      ) : (
                        <Button
                          size="sm"
                          disabled
                          className="w-full rounded-full"
                        >
                          Out of Stock
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-muted-foreground">No products found</p>
            <p className="text-muted-foreground mt-2">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default EnhancedProductCategories;

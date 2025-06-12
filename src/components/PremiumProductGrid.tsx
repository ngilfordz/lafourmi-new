
import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Plus, Minus, ShoppingCart, Filter } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  priceLBP: number;
  image: string;
  description: string;
}

interface PremiumProductGridProps {
  onAddToCart: (product: Product, quantity: number) => void;
  cart: { [key: string]: number };
}

const PremiumProductGrid = ({ onAddToCart, cart }: PremiumProductGridProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  // Mock 100 products - Lebanese grocery items
  const products: Product[] = useMemo(() => [
    // Soft Drinks
    { id: '1', name: 'Coca Cola 330ml', category: 'Soft Drinks', price: 1.50, priceLBP: 133500, image: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=300&h=200&fit=crop', description: 'Classic Coca Cola' },
    { id: '2', name: 'Pepsi 330ml', category: 'Soft Drinks', price: 1.45, priceLBP: 129050, image: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=300&h=200&fit=crop', description: 'Pepsi Cola' },
    { id: '3', name: 'Sprite 330ml', category: 'Soft Drinks', price: 1.40, priceLBP: 124600, image: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=300&h=200&fit=crop', description: 'Lemon-lime soda' },
    { id: '4', name: 'Orange Juice 1L', category: 'Soft Drinks', price: 3.20, priceLBP: 284800, image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=200&fit=crop', description: 'Fresh orange juice' },
    { id: '5', name: 'Water 1.5L', category: 'Soft Drinks', price: 0.75, priceLBP: 66750, image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=200&fit=crop', description: 'Spring water' },

    // Tobacco
    { id: '6', name: 'Marlboro Red', category: 'Tobacco', price: 4.50, priceLBP: 400500, image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300&h=200&fit=crop', description: 'Cigarettes pack' },
    { id: '7', name: 'Parliament Blue', category: 'Tobacco', price: 4.75, priceLBP: 422750, image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300&h=200&fit=crop', description: 'Premium cigarettes' },
    { id: '8', name: 'Cigars Cuban', category: 'Tobacco', price: 25.00, priceLBP: 2225000, image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300&h=200&fit=crop', description: 'Premium cigars' },

    // Alcohol
    { id: '9', name: 'Arak Kefraya 750ml', category: 'Alcohol', price: 35.00, priceLBP: 3115000, image: 'https://images.unsplash.com/photo-1506377247379-461a39b057e6?w=300&h=200&fit=crop', description: 'Lebanese Arak' },
    { id: '10', name: 'Lebanese Red Wine', category: 'Alcohol', price: 28.00, priceLBP: 2492000, image: 'https://images.unsplash.com/photo-1506377247379-461a39b057e6?w=300&h=200&fit=crop', description: 'Chateau Musar' },
    { id: '11', name: 'Almaza Beer 330ml', category: 'Alcohol', price: 3.50, priceLBP: 311500, image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop', description: 'Lebanese beer' },
    { id: '12', name: 'Whiskey Johnny Walker', category: 'Alcohol', price: 45.00, priceLBP: 4005000, image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300&h=200&fit=crop', description: 'Scotch whiskey' },

    // Snacks
    { id: '13', name: 'Zaatar Chips', category: 'Snacks', price: 2.25, priceLBP: 200250, image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=300&h=200&fit=crop', description: 'Lebanese flavored chips' },
    { id: '14', name: 'Hummus Cup', category: 'Snacks', price: 3.75, priceLBP: 333750, image: 'https://images.unsplash.com/photo-1571267188581-bd5b6b08c30d?w=300&h=200&fit=crop', description: 'Fresh hummus' },
    { id: '15', name: 'Pita Chips', category: 'Snacks', price: 2.95, priceLBP: 262550, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=200&fit=crop', description: 'Crispy pita chips' },
    { id: '16', name: 'Mixed Nuts', category: 'Snacks', price: 8.50, priceLBP: 756500, image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=300&h=200&fit=crop', description: 'Premium nut mix' },

    // Cleaning Supplies
    { id: '17', name: 'Detergent Liquid 1L', category: 'Cleaning Supplies', price: 5.25, priceLBP: 467250, image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=300&h=200&fit=crop', description: 'Laundry detergent' },
    { id: '18', name: 'Dish Soap 500ml', category: 'Cleaning Supplies', price: 3.80, priceLBP: 338200, image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=300&h=200&fit=crop', description: 'Kitchen cleaner' },
    { id: '19', name: 'Paper Towels', category: 'Cleaning Supplies', price: 4.50, priceLBP: 400500, image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=300&h=200&fit=crop', description: 'Absorbent towels' },

    // Toiletries
    { id: '20', name: 'Shampoo 400ml', category: 'Toiletries', price: 7.25, priceLBP: 645250, image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=300&h=200&fit=crop', description: 'Hair care' },
    { id: '21', name: 'Toothpaste', category: 'Toiletries', price: 3.95, priceLBP: 351550, image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=300&h=200&fit=crop', description: 'Dental care' },
    { id: '22', name: 'Body Soap', category: 'Toiletries', price: 2.75, priceLBP: 244750, image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=300&h=200&fit=crop', description: 'Cleansing bar' },

    // Generate more products to reach 100
    ...Array.from({ length: 78 }, (_, i) => {
      const categories = ['Soft Drinks', 'Tobacco', 'Alcohol', 'Snacks', 'Cleaning Supplies', 'Toiletries'];
      const category = categories[i % categories.length];
      const basePrice = Math.random() * 50 + 1;
      return {
        id: String(23 + i),
        name: `${category} Product ${i + 1}`,
        category,
        price: Math.round(basePrice * 100) / 100,
        priceLBP: Math.round(basePrice * 89000),
        image: `https://images.unsplash.com/photo-${1581636625402 + i}?w=300&h=200&fit=crop`,
        description: `Premium ${category.toLowerCase()} product`
      };
    })
  ], []);

  const categories = ['Soft Drinks', 'Tobacco', 'Alcohol', 'Snacks', 'Cleaning Supplies', 'Toiletries'];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategories]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(0, quantity)
    }));
  };

  const handleAddToCart = (product: Product) => {
    const quantity = quantities[product.id] || 1;
    onAddToCart(product, quantity);
    setQuantities(prev => ({ ...prev, [product.id]: 0 }));
  };

  return (
    <section id="products" className="py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-6">
            Premium{' '}
            <span className="text-gradient animate-glow">
              Lebanese Products
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our carefully curated selection of over 100 premium products from Lebanon and beyond
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-lg mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-14 text-lg rounded-full glow-effect border-2"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="flex items-center gap-2 mb-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Filter by category:</span>
          </div>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategories.includes(category) ? "default" : "outline"}
              onClick={() => toggleCategory(category)}
              className="rounded-full font-medium glow-effect"
            >
              {category}
              <Badge variant="secondary" className="ml-2">
                {products.filter(p => p.category === category).length}
              </Badge>
            </Button>
          ))}
          {selectedCategories.length > 0 && (
            <Button
              variant="ghost"
              onClick={() => setSelectedCategories([])}
              className="rounded-full text-muted-foreground"
            >
              Clear All
            </Button>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.slice(0, 20).map((product, index) => (
            <Card 
              key={product.id} 
              className="group glow-effect hover:scale-105 transition-all duration-500 animate-fade-in-up border-2 overflow-hidden"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <CardHeader className="p-0">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-card/90 backdrop-blur-sm">
                      {product.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6 space-y-4">
                <div>
                  <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {product.description}
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex flex-col gap-1">
                    <span className="text-2xl font-bold text-primary">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {product.priceLBP.toLocaleString()} LBP
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    {/* Quantity Selector */}
                    <div className="flex items-center justify-center gap-3">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateQuantity(product.id, (quantities[product.id] || 1) - 1)}
                        className="h-9 w-9 p-0 rounded-full"
                        disabled={(quantities[product.id] || 1) <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="font-bold text-lg min-w-[3rem] text-center">
                        {quantities[product.id] || 1}
                      </span>
                      <Button
                        size="sm"
                        onClick={() => updateQuantity(product.id, (quantities[product.id] || 1) + 1)}
                        className="h-9 w-9 p-0 rounded-full"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <Button
                      onClick={() => handleAddToCart(product)}
                      className="w-full rounded-full glow-effect font-medium"
                      size="lg"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {filteredProducts.length > 20 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="rounded-full px-8 glow-effect">
              Load More Products ({filteredProducts.length - 20} remaining)
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PremiumProductGrid;

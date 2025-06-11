
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Package, Wine, Cookie, Cigarette } from 'lucide-react';

const ProductCategories = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    {
      id: 'pantry',
      name: 'Pantry Essentials',
      icon: Package,
      description: 'Rice, pasta, oils, spices, and cooking essentials',
      productCount: 89,
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop',
      gradient: 'from-orange-400 to-red-500'
    },
    {
      id: 'snacks',
      name: 'Snacks & Biscuits',
      icon: Cookie,
      description: 'Chips, crackers, cookies, and sweet treats',
      productCount: 67,
      image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=300&fit=crop',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      id: 'beverages',
      name: 'Soft Drinks',
      icon: Package,
      description: 'Sodas, juices, water, and refreshing beverages',
      productCount: 45,
      image: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=400&h=300&fit=crop',
      gradient: 'from-blue-400 to-purple-500'
    },
    {
      id: 'alcohol',
      name: 'Alcoholic Beverages',
      icon: Wine,
      description: 'Wine, beer, spirits, and premium drinks',
      productCount: 78,
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      id: 'tobacco',
      name: 'Tobacco Products',
      icon: Cigarette,
      description: 'Cigarettes and tobacco accessories',
      productCount: 23,
      image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=400&h=300&fit=crop',
      gradient: 'from-gray-400 to-gray-600'
    },
    {
      id: 'sweets',
      name: 'Sweets & Candy',
      icon: Package,
      description: 'Chocolates, candies, and delicious treats',
      productCount: 56,
      image: 'https://images.unsplash.com/photo-1571267188581-bd5b6b08c30d?w=400&h=300&fit=crop',
      gradient: 'from-pink-400 to-red-500'
    }
  ];

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="products" className="py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">
            Explore Our{' '}
            <span className="text-gradient">Categories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover premium quality products across all your favorite categories
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search categories or products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 rounded-full glow-effect"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category, index) => (
            <Card 
              key={category.id} 
              className="group glow-effect hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden animate-fade-in-up border-0 bg-gradient-to-br from-card to-card/50"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-60`}></div>
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-2 py-1 rounded-full text-sm font-semibold">
                    {category.productCount} items
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <category.icon className="h-8 w-8 mb-2" />
                    <CardTitle className="text-xl font-bold">{category.name}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <Button 
                  className="w-full glow-effect rounded-full hover:scale-105 transition-transform"
                  variant="outline"
                >
                  Browse {category.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No results message */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">No categories found</h3>
            <p className="text-muted-foreground">Try a different search term</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCategories;

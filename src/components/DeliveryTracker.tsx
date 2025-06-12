
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Clock, Package, Truck, MessageCircle } from 'lucide-react';

const DeliveryTracker = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [isTracking, setIsTracking] = useState(false);

  const deliverySteps = [
    { icon: Package, title: 'Order Confirmed', time: '10:30 AM', completed: true },
    { icon: Package, title: 'Preparing Order', time: '10:45 AM', completed: true },
    { icon: Truck, title: 'Out for Delivery', time: '11:30 AM', completed: false, current: true },
    { icon: MapPin, title: 'Delivered', time: 'Est. 12:15 PM', completed: false }
  ];

  const handleTrackOrder = () => {
    if (orderNumber.trim()) {
      setIsTracking(true);
    }
  };

  const openWhatsApp = () => {
    window.open('https://web.whatsapp.com/send?autoload=1&app_absent=0&phone=96181692437&text=Hello%2C+I+want+to+make+a+delivery', '_blank');
  };

  return (
    <section id="delivery" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-6">
            Track Your{' '}
            <span className="text-gradient animate-glow">Delivery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated on your order's journey from our premium Lebanese collection to your doorstep
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Tracking form and steps */}
          <div className="space-y-8">
            {/* Order tracking input */}
            <Card className="glow-effect animate-fade-in-up">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Package className="mr-3 h-6 w-6" />
                  Track Your Order
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-3">
                  <Input
                    placeholder="Enter your order number (e.g., LF-2024-001)"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    className="flex-1 glow-effect h-12"
                  />
                  <Button 
                    onClick={handleTrackOrder}
                    className="glow-effect hover:scale-105 transition-transform h-12 px-6"
                  >
                    Track
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Order number can be found in your confirmation email
                </p>
                
                {/* WhatsApp Contact */}
                <div className="pt-4 border-t">
                  <Button 
                    onClick={openWhatsApp}
                    variant="outline"
                    className="w-full glow-effect hover:scale-105 transition-transform h-12"
                  >
                    <MessageCircle className="mr-2 h-5 w-5 text-green-600" />
                    Contact us on WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Delivery progress */}
            {isTracking && (
              <Card className="glow-effect animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-xl">
                    <span className="flex items-center">
                      <Truck className="mr-3 h-6 w-6" />
                      Order #LF-2024-001
                    </span>
                    <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                      In Transit
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between text-sm bg-primary/5 p-4 rounded-lg">
                      <span className="flex items-center text-primary font-medium">
                        <Clock className="mr-2 h-4 w-4" />
                        Est. Delivery: 12:15 PM
                      </span>
                      <span className="text-muted-foreground">30 min remaining</span>
                    </div>
                    
                    <div className="space-y-4">
                      {deliverySteps.map((step, index) => (
                        <div key={index} className="flex items-center space-x-4">
                          <div className={`p-3 rounded-full transition-all duration-300 ${
                            step.completed 
                              ? 'bg-primary text-primary-foreground shadow-lg' 
                              : step.current 
                              ? 'bg-primary/20 text-primary animate-pulse border-2 border-primary' 
                              : 'bg-muted text-muted-foreground'
                          }`}>
                            <step.icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-center">
                              <span className={`font-medium ${
                                step.completed || step.current ? 'text-foreground' : 'text-muted-foreground'
                              }`}>
                                {step.title}
                              </span>
                              <span className="text-sm text-muted-foreground">{step.time}</span>
                            </div>
                            {step.current && (
                              <p className="text-sm text-muted-foreground mt-1">
                                Your order is on its way! Our delivery partner is heading to your location.
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right side - Map */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Card className="glow-effect h-96">
              <CardContent className="p-0 h-full">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg relative overflow-hidden">
                  {/* Simulated map with Lebanon location */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        <MapPin className="h-16 w-16 text-primary animate-bounce mx-auto mb-4" />
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                      </div>
                      <div className="text-center">
                        <h3 className="text-xl font-semibold mb-2">Live Delivery Map</h3>
                        <p className="text-muted-foreground text-sm">
                          Beirut, Lebanon
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          Real-time tracking integration
                        </p>
                      </div>
                    </div>
                    
                    {/* Animated delivery route */}
                    <div className="absolute inset-0">
                      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary rounded-full animate-ping"></div>
                      <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-primary/60 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-primary/30 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Google Maps Link */}
            <div className="mt-4 text-center">
              <Button 
                variant="outline" 
                onClick={() => window.open('https://maps.app.goo.gl/Mp5d8puAvpUgq1rCA', '_blank')}
                className="glow-effect hover:scale-105 transition-transform"
              >
                <MapPin className="mr-2 h-4 w-4" />
                View on Google Maps
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryTracker;

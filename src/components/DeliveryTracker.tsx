
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Clock, Package, Truck } from 'lucide-react';

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

  return (
    <section id="delivery" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">
            Track Your{' '}
            <span className="text-gradient">Delivery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated on your order's journey from our store to your doorstep
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Tracking form and steps */}
          <div className="space-y-8">
            {/* Order tracking input */}
            <Card className="glow-effect animate-fade-in-up">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="mr-2 h-5 w-5" />
                  Track Your Order
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter your order number"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    className="flex-1 glow-effect"
                  />
                  <Button 
                    onClick={handleTrackOrder}
                    className="glow-effect hover:scale-105 transition-transform"
                  >
                    Track
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Order number can be found in your confirmation email
                </p>
              </CardContent>
            </Card>

            {/* Delivery progress */}
            {isTracking && (
              <Card className="glow-effect animate-fade-in-up">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center">
                      <Truck className="mr-2 h-5 w-5" />
                      Order #LF-2024-001
                    </span>
                    <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                      In Transit
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center text-primary">
                        <Clock className="mr-1 h-4 w-4" />
                        Est. Delivery: 12:15 PM
                      </span>
                      <span className="text-muted-foreground">30 min remaining</span>
                    </div>
                    
                    <div className="space-y-3">
                      {deliverySteps.map((step, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className={`p-2 rounded-full ${
                            step.completed 
                              ? 'bg-primary text-primary-foreground' 
                              : step.current 
                              ? 'bg-primary/20 text-primary animate-pulse' 
                              : 'bg-muted text-muted-foreground'
                          }`}>
                            <step.icon className="h-4 w-4" />
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
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right side - Map placeholder */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Card className="glow-effect h-96">
              <CardContent className="p-0 h-full">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="text-center z-10">
                    <MapPin className="h-16 w-16 text-primary mx-auto mb-4 animate-glow" />
                    <h3 className="text-xl font-semibold mb-2">Live Delivery Map</h3>
                    <p className="text-muted-foreground">
                      Interactive map integration coming soon
                    </p>
                  </div>
                  
                  {/* Animated dots representing delivery route */}
                  <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-primary/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryTracker;

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Package, Truck, MapPin, Clock, CheckCircle2, Search, Loader2 } from 'lucide-react';
import { HyperText } from '@/components/ui/hyper-text';

const DeliveryTracker = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [carPosition, setCarPosition] = useState(0);
  const [trackingId, setTrackingId] = useState('');
  const [isTracking, setIsTracking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [deliveryInfo, setDeliveryInfo] = useState<{
    orderId: string;
    customerName: string;
    items: number;
    driver: string;
    estimatedTime: string;
  } | null>(null);

  const deliverySteps = [
    { id: 1, title: 'Order Placed', description: 'Your order has been confirmed', icon: Package, time: '2:30 PM' },
    { id: 2, title: 'Preparing', description: 'Items being picked and packed', icon: Clock, time: '2:45 PM' },
    { id: 3, title: 'Out for Delivery', description: 'Driver is on the way', icon: Truck, time: 'ETA 3:15 PM' },
    { id: 4, title: 'Delivered', description: 'Order delivered successfully', icon: CheckCircle2, time: 'Pending' }
  ];

  useEffect(() => {
    if (isTracking) {
      const interval = setInterval(() => {
        setCarPosition(prev => (prev + 2) % 100);
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isTracking]);

  const handleTrack = async () => {
    if (!trackingId.trim()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setDeliveryInfo({
      orderId: trackingId,
      customerName: 'Mr. John Doe',
      items: 5,
      driver: 'Khalil (#437)',
      estimatedTime: '15 minutes'
    });
    
    setIsTracking(true);
    setActiveStep(2);
    setIsLoading(false);
  };

  return (
    <section id="delivery" className="py-32 px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-6xl font-bold mb-8 font-mono">
            <HyperText 
              text="Track Your" 
              className="text-6xl font-bold font-mono mr-4"
              animateOnLoad={false}
            />
            <span className="text-gradient animate-glow">
              <HyperText 
                text="Delivery" 
                className="text-6xl font-bold font-mono text-gradient animate-glow"
                animateOnLoad={false}
              />
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            Real-time tracking from our store to your door. Experience the convenience of 24/7 delivery with live updates.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Delivery Tracker */}
          <div className="space-y-6">
            {/* Tracking Input */}
            <Card className="glow-border relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-grocery-yellow to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out opacity-20"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-xl">Enter Delivery ID</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Track your order by entering the delivery ID sent to your phone
                </p>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <div className="flex gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="e.g., LF-2024-1234"
                      value={trackingId}
                      onChange={(e) => setTrackingId(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleTrack()}
                      className="pl-10 glow-border"
                      disabled={isLoading}
                    />
                  </div>
                  <Button
                    onClick={handleTrack}
                    disabled={isLoading || !trackingId.trim()}
                    className="bg-grocery-yellow text-black hover:bg-grocery-yellow-light"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Tracking...
                      </>
                    ) : (
                      'Track'
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Status */}
            <Card className={`glow-effect border-grocery-yellow/20 transition-all duration-500 relative overflow-hidden group ${
              isTracking ? 'opacity-100' : 'opacity-50'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-grocery-yellow to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out opacity-20"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl font-bold text-center">
                  {isTracking ? 'Live Delivery Status' : 'Awaiting Tracking ID'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8 relative z-10">
                {isTracking && deliveryInfo && (
                  <div className="bg-grocery-yellow/10 rounded-lg p-4 space-y-2 animate-fade-in-up">
                    <h4 className="font-semibold">Delivery Found!</h4>
                    <div className="text-sm space-y-1">
                      <p><span className="text-muted-foreground">Order ID:</span> {deliveryInfo.orderId}</p>
                      <p><span className="text-muted-foreground">Customer:</span> {deliveryInfo.customerName}</p>
                      <p><span className="text-muted-foreground">Items:</span> {deliveryInfo.items} products</p>
                      <p><span className="text-muted-foreground">Driver:</span> {deliveryInfo.driver}</p>
                      <p><span className="text-muted-foreground">ETA:</span> {deliveryInfo.estimatedTime}</p>
                    </div>
                  </div>
                )}

                {deliverySteps.map((step, index) => (
                  <div key={step.id} className={`flex items-center space-x-4 transition-all duration-500 ${
                    !isTracking ? 'opacity-50' : ''
                  }`}>
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                      isTracking && index <= activeStep 
                        ? 'bg-grocery-yellow border-grocery-yellow text-black' 
                        : 'border-muted bg-background text-muted-foreground'
                    }`}>
                      <step.icon className="h-5 w-5" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className={`font-semibold ${
                            isTracking && index <= activeStep ? 'text-foreground' : 'text-muted-foreground'
                          }`}>
                            {step.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                        <span className={`text-sm font-mono ${
                          isTracking && index <= activeStep ? 'text-grocery-yellow' : 'text-muted-foreground'
                        }`}>
                          {step.time}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Animated Delivery Route */}
                {isTracking && (
                  <div className="mt-8 p-4 bg-muted/20 rounded-lg animate-fade-in-up">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold">🏪 La Fourmi</span>
                      <span className="text-sm font-semibold">🏠 Your Location</span>
                    </div>
                    <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-grocery-yellow to-grocery-yellow-light rounded-full"></div>
                      <div 
                        className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-grocery-yellow rounded-full flex items-center justify-center text-xs transition-all duration-300 shadow-lg"
                        style={{ left: `${carPosition}%`, transform: `translateX(-50%) translateY(-50%)` }}
                      >
                        🚗
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>0 km</span>
                      <span>2.3 km</span>
                    </div>
                  </div>
                )}

                {!isTracking && (
                  <div className="text-center text-muted-foreground">
                    <Package className="h-12 w-12 mx-auto mb-4 opacity-30" />
                    <p>Enter your delivery ID to track your order</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Embedded Google Map */}
          <Card className="glow-effect border-grocery-yellow/20 h-fit">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
                <MapPin className="h-6 w-6 text-grocery-yellow" />
                Our Location
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="w-full h-96 rounded-b-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.0943!2d35.5018!3d33.8938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUzJzM3LjciTiAzNcKwMzAnMDYuNSJF!5e0!3m2!1sen!2slb!4v1640000000000!5m2!1sen!2slb"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="La Fourmi Market Location"
                />
              </div>
              <div className="p-4 bg-grocery-yellow/10">
                <div className="flex items-center justify-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-grocery-yellow" />
                  <span className="font-semibold">Beirut, Lebanon</span>
                </div>
                <p className="text-center text-xs text-muted-foreground mt-1">
                  24/7 Delivery Available • Free delivery over $25
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DeliveryTracker;

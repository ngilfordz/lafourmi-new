
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageCircle, Send, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${name}! You've been subscribed to our newsletter.`);
    setEmail('');
    setName('');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
    setMessage('');
  };

  const openWhatsApp = () => {
    window.open('https://web.whatsapp.com/send?autoload=1&app_absent=0&phone=96181692437&text=Hello%2C+I+want+to+make+a+delivery', '_blank');
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-background to-grocery-warm">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-6">
            Get In{' '}
            <span className="text-gradient animate-glow">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our community and stay updated with the latest from Lafourmi's premium Lebanese collection
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Newsletter Signup */}
          <Card className="glow-effect animate-fade-in-up">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Mail className="mr-3 h-6 w-6" />
                Join Our Newsletter
              </CardTitle>
              <p className="text-muted-foreground">
                Get exclusive updates on new products, special offers, and Elie's latest finds
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleNewsletterSignup} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="glow-effect h-12"
                  required
                />
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="glow-effect h-12"
                  required
                />
                <Button 
                  type="submit" 
                  className="w-full glow-effect hover:scale-105 transition-transform h-12"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Subscribe Now
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="glow-effect animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <MessageCircle className="mr-3 h-6 w-6" />
                Send us a Message
              </CardTitle>
              <p className="text-muted-foreground">
                Have questions about our products or need help with your order?
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <Textarea
                  placeholder="Tell us how we can help you..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="glow-effect min-h-[120px]"
                  required
                />
                <Button 
                  type="submit" 
                  className="w-full glow-effect hover:scale-105 transition-transform h-12"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>

              {/* WhatsApp Contact */}
              <div className="mt-6 pt-6 border-t">
                <Button 
                  onClick={openWhatsApp}
                  variant="outline"
                  className="w-full glow-effect hover:scale-105 transition-transform h-12"
                >
                  <MessageCircle className="mr-2 h-5 w-5 text-green-600" />
                  Chat on WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {[
            {
              icon: Phone,
              title: 'Call Us',
              content: '+961 81 692 437',
              description: 'Mon-Fri 9AM-8PM'
            },
            {
              icon: Mail,
              title: 'Email Us',
              content: 'hello@lafourmi.market',
              description: 'We reply within 24h'
            },
            {
              icon: MapPin,
              title: 'Visit Our Store',
              content: 'Beirut, Lebanon',
              description: 'Premium Lebanese Products'
            }
          ].map((item, index) => (
            <Card key={item.title} className="text-center glow-effect hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-primary font-medium mb-1">{item.content}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

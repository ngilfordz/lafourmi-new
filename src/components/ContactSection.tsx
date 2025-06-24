
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { StarBorder } from '@/components/ui/star-border';
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
    <section id="contact" className="py-32 px-8 bg-gradient-to-br from-background to-grocery-warm">
      <div className="container mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-6xl font-bold mb-8 font-mono">
            Get In{' '}
            <span className="text-gradient animate-glow">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
            Join our community and stay updated with the latest from La Fourmi's premium Lebanese collection
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Newsletter Signup */}
          <Card className="glow-effect animate-fade-in-up border-grocery-yellow/20">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-mono">
                <Mail className="mr-3 h-6 w-6" />
                Join Our Newsletter
              </CardTitle>
              <p className="text-muted-foreground font-light">
                Get exclusive updates on new products, special offers, and Elie's latest finds
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleNewsletterSignup} className="space-y-6">
                <StarBorder>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-14 border-grocery-yellow/30 font-light"
                    required
                  />
                </StarBorder>
                <StarBorder>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-14 border-grocery-yellow/30 font-light"
                    required
                  />
                </StarBorder>
                <StarBorder>
                  <Button 
                    type="submit" 
                    className="w-full hover:scale-105 transition-transform h-14 bg-grocery-yellow text-black hover:bg-grocery-yellow-light font-semibold"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Subscribe Now
                  </Button>
                </StarBorder>
              </form>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="glow-effect animate-fade-in-up border-grocery-yellow/20" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-mono">
                <MessageCircle className="mr-3 h-6 w-6" />
                Send us a Message
              </CardTitle>
              <p className="text-muted-foreground font-light">
                Have questions about our products or need help with your order?
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <StarBorder>
                  <Textarea
                    placeholder="Tell us how we can help you..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="min-h-[120px] border-grocery-yellow/30 font-light"
                    required
                  />
                </StarBorder>
                <StarBorder>
                  <Button 
                    type="submit" 
                    className="w-full hover:scale-105 transition-transform h-14 bg-grocery-yellow text-black hover:bg-grocery-yellow-light font-semibold"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </StarBorder>
              </form>

              {/* WhatsApp Contact */}
              <div className="mt-8 pt-8 border-t border-grocery-yellow/20">
                <StarBorder>
                  <Button 
                    onClick={openWhatsApp}
                    variant="outline"
                    className="w-full hover:scale-105 transition-transform h-14 border-grocery-yellow text-grocery-yellow hover:bg-grocery-yellow hover:text-black font-semibold"
                  >
                    <MessageCircle className="mr-2 h-5 w-5 text-green-600" />
                    Chat on WhatsApp
                  </Button>
                </StarBorder>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
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
              content: 'Lafourmimarket@gmail.com',
              description: 'We reply within 24h'
            },
            {
              icon: MapPin,
              title: 'Visit Our Store',
              content: 'Beirut, Lebanon',
              description: 'Premium Lebanese Products'
            }
          ].map((item, index) => (
            <Card key={item.title} className="text-center glow-effect hover:scale-105 transition-all duration-300 border-grocery-yellow/20">
              <CardContent className="p-8">
                <item.icon className="h-16 w-16 text-grocery-yellow mx-auto mb-6" />
                <h3 className="font-bold text-xl mb-3 font-mono">{item.title}</h3>
                <p className="text-grocery-yellow font-medium mb-2">{item.content}</p>
                <p className="text-sm text-muted-foreground font-light">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

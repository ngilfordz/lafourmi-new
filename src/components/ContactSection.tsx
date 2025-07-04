import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send, MessageCircle, ExternalLink } from 'lucide-react';
import { HyperText } from '@/components/ui/hyper-text';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-32 px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-6xl font-bold mb-8 font-mono">
            <HyperText 
              text="Get In" 
              className="text-6xl font-bold font-mono mr-4"
              animateOnLoad={false}
            />
            <span className="text-gradient animate-glow">
              <HyperText 
                text="Touch" 
                className="text-6xl font-bold font-mono text-gradient animate-glow"
                animateOnLoad={false}
              />
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            Have questions about our products or need assistance? We're here to help! 
            Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="glow-effect border-grocery-yellow/20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-grocery-yellow to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out opacity-20"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl font-bold text-center">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-grocery-yellow/10 transition-colors duration-300 group">
                  <div className="w-12 h-12 bg-grocery-yellow/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-6 w-6 text-grocery-yellow" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone / WhatsApp</h3>
                    <a 
                      href="tel:+96181692437" 
                      className="text-muted-foreground hover:text-grocery-yellow transition-colors"
                    >
                      +961 81 692 437
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-grocery-yellow/10 transition-colors duration-300 group">
                  <div className="w-12 h-12 bg-grocery-yellow/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-6 w-6 text-grocery-yellow" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a 
                      href="mailto:lafourmimarket@gmail.com" 
                      className="text-muted-foreground hover:text-grocery-yellow transition-colors"
                    >
                      lafourmimarket@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-grocery-yellow/10 transition-colors duration-300 group">
                  <div className="w-12 h-12 bg-grocery-yellow/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-6 w-6 text-grocery-yellow" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-muted-foreground">Beirut, Lebanon</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-grocery-yellow/10 transition-colors duration-300 group">
                  <div className="w-12 h-12 bg-grocery-yellow/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <ExternalLink className="h-6 w-6 text-grocery-yellow" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Product Catalog</h3>
                    <a 
                      href="https://nextar.shop/Lafourmi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-grocery-yellow transition-colors"
                    >
                      Browse Full Catalog
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Links */}
            <Card className="glow-effect border-grocery-yellow/20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-grocery-yellow to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out opacity-20"></div>
              <CardContent className="p-6 relative z-10">
                <h3 className="text-xl font-bold mb-4 text-center">Follow Us</h3>
                <div className="flex justify-center space-x-4">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => window.open('https://www.instagram.com/lafourmi_market/', '_blank')}
                    className="rounded-full glow-effect hover:scale-110 transition-transform duration-300"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Instagram
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => window.open('https://www.threads.com/@lafourmi_market', '_blank')}
                    className="rounded-full glow-effect hover:scale-110 transition-transform duration-300"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Threads
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="glow-effect border-grocery-yellow/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-grocery-yellow to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out opacity-20"></div>
            <CardHeader className="relative z-10">
              <CardTitle className="text-2xl font-bold text-center">
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-lg bg-muted/50 border border-grocery-yellow/30 focus:outline-none focus:border-grocery-yellow transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded-lg bg-muted/50 border border-grocery-yellow/30 focus:outline-none focus:border-grocery-yellow transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-muted/50 border border-grocery-yellow/30 focus:outline-none focus:border-grocery-yellow transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-muted/50 border border-grocery-yellow/30 focus:outline-none focus:border-grocery-yellow transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-grocery-yellow text-black hover:bg-grocery-yellow-light font-semibold rounded-lg glow-effect"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

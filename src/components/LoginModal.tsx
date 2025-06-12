
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { X, Mail, Lock, User, Github, Chrome } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (username: string, password: string) => boolean;
}

const LoginModal = ({ isOpen, onClose, onLogin }: LoginModalProps) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignUp) {
      // Mock signup
      alert('Account created successfully! Please login.');
      setIsSignUp(false);
      setError('');
    } else {
      // Mock login
      if (onLogin(username, password)) {
        onClose();
        setError('');
      } else {
        setError('Invalid credentials. Try: Elie / lafourmi');
      }
    }
  };

  return (
    <>
      {/* Backdrop with meteor animation */}
      <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 overflow-hidden">
          {/* Meteor animation elements */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-70"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `meteor ${2 + Math.random() * 3}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        {/* Login Card */}
        <Card className="w-full max-w-md bg-card/95 backdrop-blur-xl border shadow-2xl glow-effect relative z-10">
          <CardHeader className="relative">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-bold">
                {isSignUp ? 'Create Account' : 'Welcome Back'}
              </CardTitle>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-muted-foreground">
              {isSignUp ? 'Join Lafourmi Grocery 2.0' : 'Sign in to your account'}
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* OAuth Buttons */}
            <div className="space-y-3">
              <Button variant="outline" className="w-full" size="lg">
                <Chrome className="h-4 w-4 mr-2" />
                Continue with Google
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                <Github className="h-4 w-4 mr-2" />
                Continue with GitHub
              </Button>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>
            
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignUp && (
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              {error && (
                <p className="text-destructive text-sm">{error}</p>
              )}
              
              <Button type="submit" className="w-full glow-effect" size="lg">
                {isSignUp ? 'Create Account' : 'Sign In'}
              </Button>
            </form>
            
            <div className="text-center">
              <Button 
                variant="link" 
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-sm"
              >
                {isSignUp 
                  ? 'Already have an account? Sign in' 
                  : 'Don\'t have an account? Sign up'
                }
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <style>{`
        @keyframes meteor {
          0% {
            transform: translateY(-100vh) translateX(-100px);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) translateX(100px);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default LoginModal;

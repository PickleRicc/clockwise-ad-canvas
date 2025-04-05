
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import Logo from '@/components/Logo';
import { toast } from 'sonner';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Please enter both email and password');
      return;
    }
    
    // For demo purposes, we'll just navigate to the dashboard
    toast.success('Login successful');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-clockwise-300/20 blur-3xl"></div>
        <div className="absolute top-1/4 -left-40 w-80 h-80 rounded-full bg-clockwise-400/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-clockwise-500/10 blur-3xl"></div>
        <div className="absolute -bottom-20 left-1/3 w-64 h-64 rounded-full bg-clockwise-600/10 blur-3xl"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      {/* Left side - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 relative z-10">
        <div className="w-full max-w-md bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-gray-100">
          <div className="mb-8 flex justify-center">
            <Logo textColor="text-clockwise-900" size="lg" />
          </div>
          
          <h1 className="text-2xl font-semibold text-center mb-2 text-gray-900">
            Welcome back
          </h1>
          <p className="text-gray-500 text-center mb-8">
            Automated Ad Campaigns to Grow Your ETF Reach
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="yourname@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/60"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <a 
                  href="#" 
                  className="text-sm text-clockwise-500 hover:text-clockwise-700"
                >
                  Forgot password?
                </a>
              </div>
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white/60"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="remember" 
                checked={rememberMe}
                onCheckedChange={() => setRememberMe(!rememberMe)}
              />
              <Label 
                htmlFor="remember" 
                className="text-sm text-gray-500 cursor-pointer"
              >
                Remember me for 30 days
              </Label>
            </div>
            
            <Button 
              type="submit" 
              className="w-full btn-primary shadow-md hover:shadow-lg transition-all"
            >
              Sign in
            </Button>
          </form>
          
          <p className="text-center text-sm text-gray-500 mt-8">
            Don't have an account?{' '}
            <a href="#" className="text-clockwise-500 hover:text-clockwise-700 font-medium">
              Contact your administrator
            </a>
          </p>
        </div>
      </div>
      
      {/* Right side - Image and copy */}
      <div className="hidden lg:block lg:w-1/2 clockwise-gradient relative">
        <div className="absolute inset-0 bg-gradient-to-br from-clockwise-800/90 to-clockwise-950/80"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="h-full flex flex-col justify-center items-center p-8 text-white relative z-10">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold mb-6">
              Optimize your ETF marketing across all major platforms
            </h2>
            <p className="text-lg mb-8 text-gray-200">
              Clockwise Capital's campaign management platform helps you attract more investors with data-driven advertising strategies.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shadow-inner">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span>Multi-platform campaigns</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shadow-inner">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span>Detailed analytics</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shadow-inner">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span>Budget optimization</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shadow-inner">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span>Investor targeting</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

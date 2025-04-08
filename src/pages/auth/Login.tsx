
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Mail, Globe } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const { login, loginWithGoogle, signup, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSignup) {
      if (!name.trim()) {
        alert("Please enter your name");
        return;
      }
      await signup(email, name);
    } else {
      await login(email);
    }
    
    navigate("/");
  };

  const handleGoogleLogin = async () => {
    await loginWithGoogle();
    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <div className="m-auto w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-10 h-10 rounded-md bg-nigeria-green flex items-center justify-center">
            <span className="font-bold text-white text-sm">EDU</span>
          </div>
          <div className="font-montserrat font-semibold text-lg tracking-tight">
            EDU Transparency <span className="text-nigeria-green">Hub</span>
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-6">
          {isSignup ? "Create an Account" : "Welcome Back"}
        </h1>
        
        <Button 
          variant="outline" 
          className="w-full mb-4 flex items-center gap-2"
          onClick={handleGoogleLogin}
          disabled={isLoading}
        >
          <Globe className="h-4 w-4" />
          Continue with Google
        </Button>
        
        <div className="flex items-center gap-4 my-6">
          <Separator className="flex-1" />
          <span className="text-xs text-muted-foreground">OR</span>
          <Separator className="flex-1" />
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignup && (
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-nigeria-green hover:bg-nigeria-darkGreen"
            disabled={isLoading}
          >
            <Mail className="mr-2 h-4 w-4" />
            {isSignup ? "Sign Up with Email" : "Login with Email"}
          </Button>
        </form>
        
        <p className="mt-6 text-center text-sm">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            className="text-nigeria-green font-medium hover:underline"
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;

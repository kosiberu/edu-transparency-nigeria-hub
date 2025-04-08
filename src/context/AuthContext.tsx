
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";

interface User {
  id: string;
  name: string;
  email: string;
  isEmailVerified: boolean;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, name?: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => void;
  signup: (email: string, name: string) => Promise<void>;
  resendVerificationEmail: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check for authenticated user in localStorage on initial load
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing stored user", error);
        localStorage.removeItem("user");
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, name?: string) => {
    try {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if user exists in localStorage (mock database)
      const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
      const existingUser = storedUsers.find((u: any) => u.email === email);
      
      if (!existingUser) {
        toast({
          title: "Error",
          description: "No account found with this email",
          variant: "destructive"
        });
        return;
      }

      // Update user state
      const authUser = {
        id: existingUser.id,
        name: existingUser.name,
        email: existingUser.email,
        isEmailVerified: existingUser.isEmailVerified,
        avatar: existingUser.avatar
      };
      
      setUser(authUser);
      localStorage.setItem("user", JSON.stringify(authUser));
      
      toast({
        title: "Success",
        description: "You have been logged in successfully"
      });
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Error",
        description: "An error occurred during login",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    try {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create mock Google user
      const googleUser = {
        id: `google-${Date.now()}`,
        name: "Google User",
        email: `user${Date.now()}@gmail.com`,
        isEmailVerified: true,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=google"
      };
      
      // Save to mock DB
      const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
      if (!storedUsers.find((u: any) => u.email === googleUser.email)) {
        storedUsers.push(googleUser);
        localStorage.setItem("users", JSON.stringify(storedUsers));
      }
      
      // Update user state
      setUser(googleUser);
      localStorage.setItem("user", JSON.stringify(googleUser));
      
      toast({
        title: "Success",
        description: "You have been logged in with Google successfully"
      });
    } catch (error) {
      console.error("Google login error:", error);
      toast({
        title: "Error",
        description: "An error occurred during Google login",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (email: string, name: string) => {
    try {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if user already exists
      const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
      if (storedUsers.some((u: any) => u.email === email)) {
        toast({
          title: "Error",
          description: "An account with this email already exists",
          variant: "destructive"
        });
        return;
      }
      
      // Create new user
      const newUser = {
        id: `user-${Date.now()}`,
        name,
        email,
        isEmailVerified: false,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`
      };
      
      // Save to mock DB
      storedUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(storedUsers));
      
      // Send verification email (simulated)
      sendVerificationEmail(email);
      
      toast({
        title: "Account created",
        description: "Please check your email to verify your account"
      });
    } catch (error) {
      console.error("Signup error:", error);
      toast({
        title: "Error",
        description: "An error occurred during signup",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    toast({
      title: "Logged out",
      description: "You have been logged out successfully"
    });
  };

  const resendVerificationEmail = async () => {
    if (!user) return;
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      sendVerificationEmail(user.email);
      
      toast({
        title: "Email sent",
        description: "Verification email has been sent to your inbox"
      });
    } catch (error) {
      console.error("Error sending verification email", error);
      toast({
        title: "Error",
        description: "Failed to send verification email",
        variant: "destructive"
      });
    }
  };

  // Helper function to simulate sending verification emails
  const sendVerificationEmail = (email: string) => {
    console.log(`Sending verification email to ${email}`);
    // In a real app, this would call an API endpoint
    
    // For demo purposes, we'll create a verification link that works
    const verifyUrl = `/verify-email?email=${encodeURIComponent(email)}&token=demo-token-${Date.now()}`;
    console.log(`Verification URL: ${verifyUrl}`);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        loginWithGoogle,
        logout,
        signup,
        resendVerificationEmail
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

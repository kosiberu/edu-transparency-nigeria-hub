
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { CheckCircle, XCircle } from "lucide-react";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const [isVerifying, setIsVerifying] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();
  
  const email = searchParams.get("email");
  const token = searchParams.get("token");
  
  useEffect(() => {
    const verifyEmail = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        if (!email || !token) {
          throw new Error("Invalid verification link");
        }
        
        // Update user's verification status in our mock database
        const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
        const userIndex = storedUsers.findIndex((u: any) => u.email === email);
        
        if (userIndex === -1) {
          throw new Error("User not found");
        }
        
        storedUsers[userIndex].isEmailVerified = true;
        localStorage.setItem("users", JSON.stringify(storedUsers));
        
        // If the user is currently logged in, update their session
        const currentUser = JSON.parse(localStorage.getItem("user") || "null");
        if (currentUser && currentUser.email === email) {
          currentUser.isEmailVerified = true;
          localStorage.setItem("user", JSON.stringify(currentUser));
        }
        
        setIsSuccess(true);
        toast({
          title: "Email verified",
          description: "Your email has been successfully verified"
        });
      } catch (error) {
        console.error("Email verification failed:", error);
        setIsSuccess(false);
        toast({
          title: "Verification failed",
          description: "Could not verify your email address",
          variant: "destructive"
        });
      } finally {
        setIsVerifying(false);
      }
    };
    
    verifyEmail();
  }, [email, token]);
  
  return (
    <div className="flex min-h-screen bg-slate-50">
      <div className="m-auto w-full max-w-md p-8 bg-white rounded-xl shadow-lg text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-10 h-10 rounded-md bg-nigeria-green flex items-center justify-center">
            <span className="font-bold text-white text-sm">EDU</span>
          </div>
          <div className="font-montserrat font-semibold text-lg tracking-tight">
            EDU Transparency <span className="text-nigeria-green">Hub</span>
          </div>
        </div>

        {isVerifying ? (
          <>
            <h1 className="text-xl font-bold mb-4">Verifying your email...</h1>
            <div className="animate-pulse flex justify-center py-8">
              <div className="h-12 w-12 rounded-full border-4 border-nigeria-green border-t-transparent animate-spin"></div>
            </div>
          </>
        ) : isSuccess ? (
          <>
            <div className="flex justify-center mb-4 text-green-500">
              <CheckCircle className="h-16 w-16" />
            </div>
            <h1 className="text-xl font-bold mb-2">Email Verified</h1>
            <p className="text-muted-foreground mb-6">
              Your email has been successfully verified. You can now access all features.
            </p>
          </>
        ) : (
          <>
            <div className="flex justify-center mb-4 text-red-500">
              <XCircle className="h-16 w-16" />
            </div>
            <h1 className="text-xl font-bold mb-2">Verification Failed</h1>
            <p className="text-muted-foreground mb-6">
              We couldn't verify your email address. The link may be expired or invalid.
            </p>
          </>
        )}
        
        <Button 
          className="bg-nigeria-green hover:bg-nigeria-darkGreen w-full"
          onClick={() => navigate("/")}
        >
          Return to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default VerifyEmail;

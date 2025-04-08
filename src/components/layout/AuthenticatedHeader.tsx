
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoveRight, Menu, AlertTriangle } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function AuthenticatedHeader() {
  const { user, isAuthenticated, logout, resendVerificationEmail } = useAuth();
  
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };
  
  return (
    <header className="border-b bg-white py-3 px-5 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-2">
        <SidebarTrigger>
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SidebarTrigger>
        <div className="md:hidden text-sm font-montserrat font-medium">EDU Transparency Hub</div>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" className="hidden sm:flex">
          <MoveRight className="mr-2 h-4 w-4" />
          Embed Dashboard
        </Button>
        <Button variant="outline" size="sm">Download PDF</Button>
        
        {isAuthenticated ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user?.avatar} alt={user?.name} />
                  <AvatarFallback>{user?.name ? getInitials(user.name) : "U"}</AvatarFallback>
                </Avatar>
                {!user?.isEmailVerified && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-amber-500 flex items-center justify-center">
                    <AlertTriangle className="h-3 w-3 text-white" />
                  </span>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem disabled>
                <span className="truncate">{user?.email}</span>
              </DropdownMenuItem>
              
              {!user?.isEmailVerified && (
                <>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    className="text-amber-500 flex items-center gap-2 cursor-pointer"
                    onClick={() => resendVerificationEmail()}
                  >
                    <AlertTriangle className="h-4 w-4" />
                    Verify Email Address
                  </DropdownMenuItem>
                </>
              )}
              
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer" onClick={logout}>
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button size="sm" className="bg-nigeria-green hover:bg-nigeria-darkGreen" asChild>
            <Link to="/login">Login</Link>
          </Button>
        )}
      </div>
    </header>
  );
}

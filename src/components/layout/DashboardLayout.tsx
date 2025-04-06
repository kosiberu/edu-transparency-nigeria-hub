
import React, { useState } from "react";
import { Sidebar, SidebarContent, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { MoveRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const isMobile = useIsMobile();
  const [collapsed, setCollapsed] = useState(isMobile);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-slate-50">
        <DashboardSidebar />
        <main className="flex-1 overflow-auto">
          <DashboardHeader />
          <div className="dashboard-content">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}

function DashboardHeader() {
  return (
    <header className="border-b bg-white py-3 px-5 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-2">
        <SidebarTrigger asChild>
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
        <Button size="sm" className="bg-nigeria-green hover:bg-nigeria-darkGreen">Login</Button>
      </div>
    </header>
  );
}

function DashboardSidebar() {
  return (
    <Sidebar className="border-r">
      <SidebarContent>
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-nigeria-green flex items-center justify-center">
                <span className="font-bold text-white text-sm">EDU</span>
              </div>
              <div className="font-montserrat font-semibold text-sm tracking-tight">
                EDU Transparency <span className="text-nigeria-green">Hub</span>
              </div>
            </div>
          </div>

          <nav className="flex-1 py-4">
            <div className="px-3 pb-1">
              <h3 className="text-xs font-medium text-muted-foreground mb-2 px-4">DASHBOARD</h3>
            </div>
            <SidebarNavItem href="/" active>
              Overview
            </SidebarNavItem>
            <div className="px-3 py-2">
              <h3 className="text-xs font-medium text-muted-foreground mb-2 px-4">REPORTS</h3>
            </div>
            <SidebarNavItem href="/budget">Annual Budget Allocation</SidebarNavItem>
            <SidebarNavItem href="/research-grants">Research Grant Revenue</SidebarNavItem>
            <SidebarNavItem href="/tetfund">TETFund Allocation</SidebarNavItem>
            <SidebarNavItem href="/endowment">Endowment Fund</SidebarNavItem>
            <SidebarNavItem href="/student-population">Student Population</SidebarNavItem>
            
            <div className="px-3 py-2">
              <h3 className="text-xs font-medium text-muted-foreground mb-2 px-4">OTHER</h3>
            </div>
            <SidebarNavItem href="/about">About This Data</SidebarNavItem>
          </nav>

          <div className="p-4 border-t">
            <div className="py-3 px-4 rounded-md bg-nigeria-green/10 text-xs">
              <p className="font-medium text-nigeria-green mb-1">Compliance Status</p>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">4 of 5 reports updated</span>
                <span className="font-medium">80%</span>
              </div>
              <div className="mt-2 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-nigeria-green rounded-full" style={{ width: "80%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}

interface SidebarNavItemProps {
  children: React.ReactNode;
  href: string;
  active?: boolean;
}

function SidebarNavItem({ children, href, active = false }: SidebarNavItemProps) {
  return (
    <a 
      href={href}
      className={cn(
        "flex items-center px-4 py-2 mx-3 text-sm rounded-md transition-colors",
        active 
          ? "bg-nigeria-green text-white font-medium" 
          : "text-foreground hover:bg-muted"
      )}
    >
      {children}
    </a>
  );
}

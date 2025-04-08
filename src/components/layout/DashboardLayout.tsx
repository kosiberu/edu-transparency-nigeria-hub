import React, { useState, useEffect } from "react";
import { Sidebar, SidebarContent, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { MoveRight, Menu, BarChart2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { AuthenticatedHeader } from "./AuthenticatedHeader";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const isMobile = useIsMobile();
  const [collapsed, setCollapsed] = useState(false);

  // Set collapsed state based on mobile detection when component mounts
  useEffect(() => {
    if (isMobile !== undefined) {
      setCollapsed(isMobile);
    }
  }, [isMobile]);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-slate-50">
        <DashboardSidebar />
        <main className="flex-1 overflow-auto">
          <AuthenticatedHeader />
          <div className="dashboard-content p-4 md:p-6">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}

function DashboardSidebar() {
  // Financial data to match dashboard
  const budgetTotal = "₦1,000,000,000";
  const researchGrantTotal = "₦345,000,000";
  const tetFundTotal = "₦580,000,000";
  const studentTotal = "20,000";
  const endowmentTotal = "₦1,000,000,000";

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
            <SidebarNavItem href="/budget" figure={budgetTotal}>
              Annual Budget Allocation
            </SidebarNavItem>
            <SidebarNavItem href="/research-grants" figure={researchGrantTotal}>
              Research Grant Revenue
            </SidebarNavItem>
            <SidebarNavItem href="/tetfund" figure={tetFundTotal}>
              TETFund Allocation
            </SidebarNavItem>
            <SidebarNavItem href="/endowment" figure={endowmentTotal}>
              Endowment Fund
            </SidebarNavItem>
            <SidebarNavItem href="/student-population" figure={studentTotal}>
              Student Population
            </SidebarNavItem>
            
            <div className="px-3 py-2">
              <h3 className="text-xs font-medium text-muted-foreground mb-2 px-4">OTHER</h3>
            </div>
            <SidebarNavItem href="/about">
              About This Data
            </SidebarNavItem>
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
  figure?: string;
}

function SidebarNavItem({ children, href, active = false, figure }: SidebarNavItemProps) {
  return (
    <a 
      href={href}
      className={cn(
        "flex items-center justify-between px-4 py-2 mx-3 text-sm rounded-md transition-colors",
        active 
          ? "bg-nigeria-green text-white font-medium" 
          : "text-foreground hover:bg-muted"
      )}
    >
      <span>{children}</span>
      {figure && (
        <span className={cn(
          "text-xs font-medium",
          active ? "text-white/90" : "text-muted-foreground"
        )}>
          {figure}
        </span>
      )}
    </a>
  );
}

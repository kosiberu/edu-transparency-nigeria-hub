
import React, { useState, useEffect } from "react";
import { Sidebar, SidebarContent, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Settings, Users, Database, FileText, BarChart2, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface AdminDashboardLayoutProps {
  children: React.ReactNode;
}

export function AdminDashboardLayout({ children }: AdminDashboardLayoutProps) {
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
        <AdminSidebar />
        <main className="flex-1 overflow-auto">
          <AdminHeader />
          <div className="admin-content p-4 md:p-6">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}

function AdminHeader() {
  return (
    <header className="border-b bg-white py-3 px-5 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-2">
        <SidebarTrigger>
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SidebarTrigger>
        <div className="md:hidden text-sm font-montserrat font-medium">EDU Admin</div>
      </div>
      <div className="flex items-center gap-4">
        <Button size="sm" className="bg-nigeria-green hover:bg-nigeria-darkGreen">Logout</Button>
      </div>
    </header>
  );
}

function AdminSidebar() {
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
                EDU Admin <span className="text-nigeria-green">Portal</span>
              </div>
            </div>
          </div>

          <nav className="flex-1 py-4">
            <div className="px-3 pb-1">
              <h3 className="text-xs font-medium text-muted-foreground mb-2 px-4">DASHBOARD</h3>
            </div>
            <AdminSidebarNavItem href="/admin" active>
              Overview
            </AdminSidebarNavItem>
            <div className="px-3 py-2">
              <h3 className="text-xs font-medium text-muted-foreground mb-2 px-4">MANAGEMENT</h3>
            </div>
            <AdminSidebarNavItem href="/admin/users" icon={<Users className="h-4 w-4" />}>
              User Management
            </AdminSidebarNavItem>
            <AdminSidebarNavItem href="/admin/data" icon={<Database className="h-4 w-4" />}>
              Data Entry
            </AdminSidebarNavItem>
            <AdminSidebarNavItem href="/admin/reports" icon={<FileText className="h-4 w-4" />}>
              Reports
            </AdminSidebarNavItem>
            <AdminSidebarNavItem href="/admin/analytics" icon={<BarChart2 className="h-4 w-4" />}>
              Analytics
            </AdminSidebarNavItem>
            <AdminSidebarNavItem href="/admin/settings" icon={<Settings className="h-4 w-4" />}>
              Settings
            </AdminSidebarNavItem>
          </nav>

          <div className="p-4 border-t">
            <a href="/" className="block text-center text-xs text-muted-foreground hover:text-foreground transition-colors">
              View Public Dashboard
            </a>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}

interface AdminSidebarNavItemProps {
  children: React.ReactNode;
  href: string;
  active?: boolean;
  icon?: React.ReactNode;
}

function AdminSidebarNavItem({ children, href, active = false, icon }: AdminSidebarNavItemProps) {
  return (
    <a 
      href={href}
      className={cn(
        "flex items-center gap-2 px-4 py-2 mx-3 text-sm rounded-md transition-colors",
        active 
          ? "bg-nigeria-green text-white font-medium" 
          : "text-foreground hover:bg-muted"
      )}
    >
      {icon && <span className={active ? "text-white" : "text-muted-foreground"}>{icon}</span>}
      <span>{children}</span>
    </a>
  );
}

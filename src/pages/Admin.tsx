
import React from "react";
import { AdminDashboardLayout } from "@/components/layout/AdminDashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SimpleBarChart, ChartCard, SimpleLineChart } from "@/components/ui/chart-card";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// Mock data for the admin dashboard
const monthlyUsersData = [
  { name: "Jan", users: 345 },
  { name: "Feb", users: 412 },
  { name: "Mar", users: 578 },
  { name: "Apr", users: 621 },
  { name: "May", users: 547 },
  { name: "Jun", users: 698 },
];

const activityData = [
  { name: "Mon", activities: 45 },
  { name: "Tue", activities: 52 },
  { name: "Wed", activities: 38 },
  { name: "Thu", activities: 62 },
  { name: "Fri", activities: 55 },
  { name: "Sat", activities: 20 },
  { name: "Sun", activities: 15 },
];

// Very basic mock authentication check
const isAdmin = () => {
  // In a real application, this would check session/token validity
  // For this demo, we'll use localStorage to simulate auth state
  return localStorage.getItem("adminLoggedIn") === "true";
};

export default function Admin() {
  const navigate = useNavigate();
  
  // Basic admin check - navigate away if not admin
  useEffect(() => {
    // For demo purposes only - this would be replaced with proper auth
    if (!isAdmin()) {
      navigate("/admin/login");
    }
  }, [navigate]);

  return (
    <AdminDashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold tracking-tight">Admin Dashboard</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,345</div>
              <p className="text-xs text-muted-foreground">+15% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Data Entry Completion</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">86%</div>
              <p className="text-xs text-muted-foreground">+2% from last week</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Compliance Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">93%</div>
              <p className="text-xs text-muted-foreground">Target: 95%</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Reports Generated</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">124</div>
              <p className="text-xs text-muted-foreground">Last 30 days</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          <ChartCard 
            title="Monthly User Growth" 
            description="Number of new users per month"
            updatedAt="Today at 2:30 PM"
          >
            <SimpleBarChart 
              data={monthlyUsersData} 
              dataKey="Monthly Users" 
              barKey="users" 
              xAxisKey="name"
              color="#008751"
            />
          </ChartCard>
          
          <ChartCard 
            title="Daily Admin Activities" 
            description="Number of actions performed by admins"
            updatedAt="Today at 2:30 PM"
          >
            <SimpleLineChart 
              data={activityData} 
              lineKey="activities" 
              xAxisKey="name"
              color="#008751"
            />
          </ChartCard>
        </div>
      </div>
    </AdminDashboardLayout>
  );
}

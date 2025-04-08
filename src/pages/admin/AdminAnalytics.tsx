
import React from "react";
import { AdminDashboardLayout } from "@/components/layout/AdminDashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SimpleBarChart, ChartCard, SimpleLineChart, SimplePieChart } from "@/components/ui/chart-card";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// Mock data for the analytics dashboard
const websiteTrafficData = [
  { name: "Jan", visitors: 845 },
  { name: "Feb", visitors: 932 },
  { name: "Mar", visitors: 1148 },
  { name: "Apr", visitors: 1267 },
  { name: "May", visitors: 1032 },
  { name: "Jun", visitors: 1154 },
];

const reportDownloadsData = [
  { name: "Financial", value: 42 },
  { name: "Academic", value: 28 },
  { name: "Research", value: 35 },
  { name: "Infrastructure", value: 21 },
  { name: "HR", value: 15 },
];

const userActivityData = [
  { name: "Mon", activities: 28 },
  { name: "Tue", activities: 35 },
  { name: "Wed", activities: 41 },
  { name: "Thu", activities: 37 },
  { name: "Fri", activities: 30 },
  { name: "Sat", activities: 12 },
  { name: "Sun", activities: 8 },
];

// Very basic mock authentication check
const isAdmin = () => {
  return localStorage.getItem("adminLoggedIn") === "true";
};

export default function AdminAnalytics() {
  const navigate = useNavigate();
  
  // Basic admin check - navigate away if not admin
  useEffect(() => {
    if (!isAdmin()) {
      navigate("/admin/login");
    }
  }, [navigate]);

  return (
    <AdminDashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold tracking-tight">Analytics</h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          <ChartCard 
            title="Website Traffic" 
            description="Monthly visitors to transparency portal"
            updatedAt="Updated daily"
          >
            <SimpleBarChart 
              data={websiteTrafficData} 
              dataKey="Monthly Visitors" 
              barKey="visitors" 
              xAxisKey="name"
              color="#008751"
            />
          </ChartCard>
          
          <ChartCard 
            title="Report Downloads" 
            description="Distribution by category"
            updatedAt="Last 30 days"
          >
            <SimplePieChart 
              data={reportDownloadsData}
              dataKey="value"
              nameKey="name"
              colors={["#008751", "#00A86B", "#4CB963", "#96E072", "#D8F793"]}
            />
          </ChartCard>
          
          <ChartCard 
            title="User Activity" 
            description="Daily admin activity"
            updatedAt="Updated hourly"
          >
            <SimpleLineChart 
              data={userActivityData} 
              lineKey="activities" 
              xAxisKey="name"
              color="#008751"
            />
          </ChartCard>
          
          <Card>
            <CardHeader>
              <CardTitle>Key Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-1">Most Viewed Data</h4>
                <p className="text-sm text-muted-foreground">Financial transparency section receives 62% of all page views</p>
              </div>
              <div>
                <h4 className="font-medium mb-1">Peak Usage Time</h4>
                <p className="text-sm text-muted-foreground">Highest user activity is between 10am-2pm on weekdays</p>
              </div>
              <div>
                <h4 className="font-medium mb-1">Device Usage</h4>
                <p className="text-sm text-muted-foreground">67% mobile, 28% desktop, 5% tablet</p>
              </div>
              <div>
                <h4 className="font-medium mb-1">Geographical Reach</h4>
                <p className="text-sm text-muted-foreground">85% Nigeria, 15% international visitors</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminDashboardLayout>
  );
}

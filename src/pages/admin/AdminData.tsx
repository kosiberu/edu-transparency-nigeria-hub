
import React from "react";
import { AdminDashboardLayout } from "@/components/layout/AdminDashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// Very basic mock authentication check
const isAdmin = () => {
  return localStorage.getItem("adminLoggedIn") === "true";
};

export default function AdminData() {
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
        <h1 className="text-2xl font-bold tracking-tight">Data Entry</h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Financial Data</CardTitle>
              <CardDescription>Enter and manage financial information</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Update budget allocations, expenditure reports, and other financial metrics.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Last updated: 2025-04-05</span>
                <button className="text-sm font-medium text-nigeria-green hover:underline">
                  Update Data
                </button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Student Data</CardTitle>
              <CardDescription>Enter and manage student information</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Update student enrollment figures, demographics, and academic performance metrics.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Last updated: 2025-04-02</span>
                <button className="text-sm font-medium text-nigeria-green hover:underline">
                  Update Data
                </button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Faculty Data</CardTitle>
              <CardDescription>Enter and manage faculty information</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Update faculty staffing levels, qualifications, and research output metrics.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Last updated: 2025-03-28</span>
                <button className="text-sm font-medium text-nigeria-green hover:underline">
                  Update Data
                </button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Infrastructure Data</CardTitle>
              <CardDescription>Enter and manage infrastructure information</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Update data on physical facilities, equipment, and maintenance records.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Last updated: 2025-03-30</span>
                <button className="text-sm font-medium text-nigeria-green hover:underline">
                  Update Data
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminDashboardLayout>
  );
}


import React from "react";
import { AdminDashboardLayout } from "@/components/layout/AdminDashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// Mock data for the users table
const usersData = [
  { id: 1, name: "John Doe", email: "john.doe@edu.ng", role: "Administrator", status: "Active", lastLogin: "2025-04-07" },
  { id: 2, name: "Jane Smith", email: "jane.smith@edu.ng", role: "Data Entry", status: "Active", lastLogin: "2025-04-06" },
  { id: 3, name: "Robert Johnson", email: "robert.j@edu.ng", role: "Viewer", status: "Inactive", lastLogin: "2025-03-28" },
  { id: 4, name: "Alice Williams", email: "alice.w@edu.ng", role: "Data Entry", status: "Active", lastLogin: "2025-04-05" },
  { id: 5, name: "Michael Brown", email: "michael.b@edu.ng", role: "Administrator", status: "Active", lastLogin: "2025-04-08" },
];

// Very basic mock authentication check
const isAdmin = () => {
  return localStorage.getItem("adminLoggedIn") === "true";
};

export default function AdminUsers() {
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
        <h1 className="text-2xl font-bold tracking-tight">User Management</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>System Users</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Login</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {usersData.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        user.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                      }`}>
                        {user.status}
                      </span>
                    </TableCell>
                    <TableCell>{user.lastLogin}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        <p className="text-sm text-muted-foreground">
          Total of {usersData.length} users in the system. User accounts are counted based on unique email addresses, so each user represents a distinct individual with system access.
        </p>
      </div>
    </AdminDashboardLayout>
  );
}

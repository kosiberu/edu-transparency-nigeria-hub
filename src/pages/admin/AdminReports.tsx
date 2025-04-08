
import React from "react";
import { AdminDashboardLayout } from "@/components/layout/AdminDashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { FileText, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// Mock data for reports
const reportsData = [
  { id: 1, name: "Annual Financial Report 2024", type: "Financial", created: "2025-03-15", downloads: 42 },
  { id: 2, name: "Student Enrollment Statistics", type: "Academic", created: "2025-04-01", downloads: 28 },
  { id: 3, name: "Research Output Analysis", type: "Research", created: "2025-03-20", downloads: 35 },
  { id: 4, name: "Infrastructure Development Plan", type: "Infrastructure", created: "2025-02-28", downloads: 21 },
  { id: 5, name: "Faculty Staff Report", type: "Human Resources", created: "2025-03-10", downloads: 15 },
  { id: 6, name: "Quarterly Budget Analysis Q1 2025", type: "Financial", created: "2025-04-05", downloads: 19 },
];

// Very basic mock authentication check
const isAdmin = () => {
  return localStorage.getItem("adminLoggedIn") === "true";
};

export default function AdminReports() {
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
        <h1 className="text-2xl font-bold tracking-tight">Reports</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Generated Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Report Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Downloads</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reportsData.map((report) => (
                  <TableRow key={report.id}>
                    <TableCell className="font-medium flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      {report.name}
                    </TableCell>
                    <TableCell>{report.type}</TableCell>
                    <TableCell>{report.created}</TableCell>
                    <TableCell>{report.downloads}</TableCell>
                    <TableCell>
                      <button className="inline-flex items-center text-sm text-nigeria-green hover:text-nigeria-darkGreen">
                        <Download className="h-4 w-4 mr-1" />
                        Download PDF
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        
        <div className="text-sm text-muted-foreground">
          <p>Reports are generated as PDF documents and can be downloaded by users with appropriate permissions.</p>
          <p>Total of {reportsData.length} reports available. New reports can be generated from the data entry sections.</p>
        </div>
      </div>
    </AdminDashboardLayout>
  );
}

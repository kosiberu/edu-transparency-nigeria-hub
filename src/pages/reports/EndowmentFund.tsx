
import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function EndowmentFund() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold tracking-tight">Endowment Fund</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Endowment Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">₦1,000,000,000</div>
            <p className="text-muted-foreground mt-2">
              Current total value of the institution's endowment fund.
            </p>
            <div className="mt-6 space-y-4">
              <h3 className="text-lg font-semibold">Endowment Sources</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Alumni Contributions: ₦350,000,000 (35%)</li>
                <li>Corporate Donations: ₦300,000,000 (30%)</li>
                <li>Investment Returns: ₦200,000,000 (20%)</li>
                <li>Government Matching Funds: ₦100,000,000 (10%)</li>
                <li>Other Sources: ₦50,000,000 (5%)</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Endowment Allocations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-b pb-3">
                <h4 className="font-medium">Student Scholarships</h4>
                <p className="text-sm text-muted-foreground">Annual Allocation: ₦150,000,000</p>
                <p className="text-sm mt-1">Financial support for outstanding and indigent students.</p>
              </div>
              
              <div className="border-b pb-3">
                <h4 className="font-medium">Research Chairs</h4>
                <p className="text-sm text-muted-foreground">Annual Allocation: ₦120,000,000</p>
                <p className="text-sm mt-1">Funding for distinguished professorships and research positions.</p>
              </div>
              
              <div className="border-b pb-3">
                <h4 className="font-medium">Innovation Hub</h4>
                <p className="text-sm text-muted-foreground">Annual Allocation: ₦80,000,000</p>
                <p className="text-sm mt-1">Support for student and faculty entrepreneurship initiatives.</p>
              </div>
              
              <div>
                <h4 className="font-medium">Community Projects</h4>
                <p className="text-sm text-muted-foreground">Annual Allocation: ₦50,000,000</p>
                <p className="text-sm mt-1">Financing community development projects and outreach activities.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

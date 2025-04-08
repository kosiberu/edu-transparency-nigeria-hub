
import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TetFund() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold tracking-tight">TETFund Allocation</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>TETFund Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">₦580,000,000</div>
            <p className="text-muted-foreground mt-2">
              Total Tertiary Education Trust Fund (TETFund) allocation for the current fiscal year.
            </p>
            <div className="mt-6 space-y-4">
              <h3 className="text-lg font-semibold">Allocation Breakdown</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Infrastructure Development: ₦230,000,000 (39.7%)</li>
                <li>Academic Staff Training & Development: ₦145,000,000 (25.0%)</li>
                <li>Research Equipment & Materials: ₦115,000,000 (19.8%)</li>
                <li>Library Development: ₦60,000,000 (10.3%)</li>
                <li>ICT Infrastructure: ₦30,000,000 (5.2%)</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Key Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-b pb-3">
                <h4 className="font-medium">New Engineering Complex</h4>
                <p className="text-sm text-muted-foreground">Allocation: ₦150,000,000</p>
                <p className="text-sm mt-1">Construction of a modern engineering complex with state-of-the-art laboratories.</p>
              </div>
              
              <div className="border-b pb-3">
                <h4 className="font-medium">PhD Training Program</h4>
                <p className="text-sm text-muted-foreground">Allocation: ₦95,000,000</p>
                <p className="text-sm mt-1">Sponsorship for academic staff pursuing doctoral degrees locally and abroad.</p>
              </div>
              
              <div className="border-b pb-3">
                <h4 className="font-medium">Advanced Research Equipment</h4>
                <p className="text-sm text-muted-foreground">Allocation: ₦85,000,000</p>
                <p className="text-sm mt-1">Procurement of specialized research equipment for various departments.</p>
              </div>
              
              <div>
                <h4 className="font-medium">Digital Library Resources</h4>
                <p className="text-sm text-muted-foreground">Allocation: ₦45,000,000</p>
                <p className="text-sm mt-1">Subscription to international journals and expansion of digital library resources.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

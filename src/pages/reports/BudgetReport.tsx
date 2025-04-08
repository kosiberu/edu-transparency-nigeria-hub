
import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function BudgetReport() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold tracking-tight">Annual Budget Allocation</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Budget Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">₦1,000,000,000</div>
            <p className="text-muted-foreground mt-2">
              This represents the total annual budget allocated to the institution for the current fiscal year.
            </p>
            <div className="mt-6 space-y-4">
              <h3 className="text-lg font-semibold">Budget Breakdown</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Academic Affairs: ₦450,000,000 (45%)</li>
                <li>Infrastructure Development: ₦250,000,000 (25%)</li>
                <li>Research and Development: ₦150,000,000 (15%)</li>
                <li>Student Affairs: ₦100,000,000 (10%)</li>
                <li>Administration: ₦50,000,000 (5%)</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Historical Budget Data</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>Budget allocations over the past 5 years:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>2024: ₦1,000,000,000</li>
                <li>2023: ₦950,000,000</li>
                <li>2022: ₦900,000,000</li>
                <li>2021: ₦850,000,000</li>
                <li>2020: ₦800,000,000</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

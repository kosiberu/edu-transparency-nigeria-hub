
import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ResearchGrants() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold tracking-tight">Research Grant Revenue</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Research Grants Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">₦345,000,000</div>
            <p className="text-muted-foreground mt-2">
              Total funding received for research activities in the current academic year.
            </p>
            <div className="mt-6 space-y-4">
              <h3 className="text-lg font-semibold">Grant Sources</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Federal Government Grants: ₦150,000,000 (43.5%)</li>
                <li>International Research Partnerships: ₦95,000,000 (27.5%)</li>
                <li>Industry Sponsored Research: ₦65,000,000 (18.8%)</li>
                <li>NGO Funding: ₦35,000,000 (10.2%)</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Major Research Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-b pb-3">
                <h4 className="font-medium">Renewable Energy Solutions</h4>
                <p className="text-sm text-muted-foreground">Funding: ₦85,000,000</p>
                <p className="text-sm mt-1">Research into sustainable energy solutions for rural communities.</p>
              </div>
              
              <div className="border-b pb-3">
                <h4 className="font-medium">Advanced Materials Development</h4>
                <p className="text-sm text-muted-foreground">Funding: ₦75,000,000</p>
                <p className="text-sm mt-1">Development of new composite materials for aerospace applications.</p>
              </div>
              
              <div className="border-b pb-3">
                <h4 className="font-medium">Agricultural Technology Innovation</h4>
                <p className="text-sm text-muted-foreground">Funding: ₦65,000,000</p>
                <p className="text-sm mt-1">Improving crop yields through technology and sustainable practices.</p>
              </div>
              
              <div>
                <h4 className="font-medium">Healthcare Systems Research</h4>
                <p className="text-sm text-muted-foreground">Funding: ₦50,000,000</p>
                <p className="text-sm mt-1">Improving healthcare delivery in underserved communities.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

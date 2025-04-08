
import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutData() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold tracking-tight">About This Data</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Data Sources & Methodology</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              All data presented in this transparency hub is sourced from official financial records, 
              institutional reports, and verified administrative documents. The data collection and 
              presentation methodology follows the guidelines established by the Federal Ministry of 
              Education for Educational Transparency Initiative.
            </p>
            
            <h3 className="text-lg font-semibold mt-4">Data Collection Process</h3>
            <p>
              Data is collected quarterly from various departments and consolidated by the Office of 
              Finance and Administration. All figures undergo multiple levels of verification before 
              publication on this platform.
            </p>
            
            <h3 className="text-lg font-semibold mt-4">Financial Data</h3>
            <p>
              Financial data includes all allocations, expenditures, and revenue sources as recorded 
              in the institution's financial management system and audited financial statements.
            </p>
            
            <h3 className="text-lg font-semibold mt-4">Student Data</h3>
            <p>
              Student enrollment data is based on official registration records maintained by the 
              Academic Registry. All personal identifiable information has been removed to maintain privacy.
            </p>
            
            <h3 className="text-lg font-semibold mt-4">Data Updates</h3>
            <p>
              This platform is updated quarterly with the most recent financial data, and annually 
              for student population statistics and other institutional metrics.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Compliance Statement</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              This transparency hub has been developed in compliance with the Federal Ministry of Education 
              Directive FME/HE/TP/2023/001, which mandates all federal educational institutions to 
              publish key financial and operational data.
            </p>
            
            <p>
              The current compliance status of the institution is at 80%, with efforts underway to 
              achieve full compliance by the end of the current fiscal year.
            </p>
            
            <div className="bg-nigeria-green/10 p-4 rounded-md mt-4">
              <h3 className="text-nigeria-green font-medium">Contact Information</h3>
              <p className="text-sm mt-2">
                For inquiries regarding the data presented on this platform, please contact:
              </p>
              <p className="text-sm mt-2">
                Office of Transparency and Public Affairs<br />
                Email: transparency@edu.ng<br />
                Phone: +234 (0) 123 456 7890
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

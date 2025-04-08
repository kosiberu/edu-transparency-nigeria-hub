
import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function StudentPopulation() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold tracking-tight">Student Population</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Student Population Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">20,000 Students</div>
            <p className="text-muted-foreground mt-2">
              Total student enrollment for the current academic year across all programs and faculties.
            </p>
            <div className="mt-6 space-y-4">
              <h3 className="text-lg font-semibold">Enrollment by Level</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Undergraduate: 15,500 (77.5%)</li>
                <li>Postgraduate Diploma: 500 (2.5%)</li>
                <li>Masters: 3,200 (16%)</li>
                <li>PhD: 800 (4%)</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Faculty Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-b pb-3">
                <h4 className="font-medium">Engineering</h4>
                <p className="text-sm text-muted-foreground">Students: 5,800</p>
                <p className="text-sm mt-1">Includes Mechanical, Electrical, Civil, and Chemical Engineering departments.</p>
              </div>
              
              <div className="border-b pb-3">
                <h4 className="font-medium">Sciences</h4>
                <p className="text-sm text-muted-foreground">Students: 4,500</p>
                <p className="text-sm mt-1">Includes Physics, Chemistry, Biology, and Computer Science departments.</p>
              </div>
              
              <div className="border-b pb-3">
                <h4 className="font-medium">Management Sciences</h4>
                <p className="text-sm text-muted-foreground">Students: 4,200</p>
                <p className="text-sm mt-1">Includes Accounting, Business Administration, and Economics departments.</p>
              </div>
              
              <div className="border-b pb-3">
                <h4 className="font-medium">Environmental Sciences</h4>
                <p className="text-sm text-muted-foreground">Students: 3,000</p>
                <p className="text-sm mt-1">Includes Architecture, Building Technology, and Urban Planning departments.</p>
              </div>
              
              <div>
                <h4 className="font-medium">Agriculture</h4>
                <p className="text-sm text-muted-foreground">Students: 2,500</p>
                <p className="text-sm mt-1">Includes Agricultural Engineering, Crop Science, and Animal Science departments.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

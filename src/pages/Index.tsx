
import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { DataCard, StatCard } from "@/components/ui/data-card";
import { ChartCard, SimplePieChart, SimpleBarChart, SimpleLineChart } from "@/components/ui/chart-card";
import { YearSelector, YearTabs } from "@/components/ui/year-selector";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Award, BookOpen, DollarSign, Download, FileBarChart, Users } from "lucide-react";

const Index = () => {
  const [selectedYear, setSelectedYear] = useState(2025);

  // Mock data
  const budgetData = [
    { name: 'Personnel Cost', value: 450000000 },
    { name: 'Overhead Cost', value: 250000000 },
    { name: 'Capital Expenditure', value: 300000000 },
  ];

  const researchGrantData = [
    { name: 'Domestic Grants', value: 125000000 },
    { name: 'International Grants', value: 220000000 },
  ];

  const studentData = [
    { name: 'Undergraduate', value: 15000 },
    { name: 'Postgraduate', value: 5000 },
  ];

  const endowmentData = [
    { name: 'Jan', value: 800000000 },
    { name: 'Feb', value: 825000000 },
    { name: 'Mar', value: 840000000 },
    { name: 'Apr', value: 860000000 },
    { name: 'May', value: 880000000 },
    { name: 'Jun', value: 900000000 },
    { name: 'Jul', value: 920000000 },
    { name: 'Aug', value: 940000000 },
    { name: 'Sep', value: 955000000 },
    { name: 'Oct', value: 975000000 },
    { name: 'Nov', value: 990000000 },
    { name: 'Dec', value: 1000000000 },
  ];

  const pieColors = ['#008751', '#1F2937', '#00A86B'];
  const researchColors = ['#008751', '#FFD700'];
  const studentColors = ['#1F2937', '#00A86B'];

  return (
    <DashboardLayout>
      <div className="animate-enter">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-1">Institution Dashboard</h1>
            <p className="text-muted-foreground">
              Federal University of Technology, Akure
            </p>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <YearSelector currentYear={selectedYear} onChange={setSelectedYear} />
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export All Reports
            </Button>
          </div>
        </div>

        <div className="dashboard-section">
          <h2 className="text-lg font-semibold mb-4">Financial Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard 
              title="Total Annual Budget" 
              value={`₦${(1000000000).toLocaleString()}`} 
              subtitle="2025 Financial Year"
              trend="up"
              trendValue="8% from previous year"
              icon={<FileBarChart className="h-5 w-5 text-nigeria-green" />}
              updatedAt="April 1, 2025"
            />
            <StatCard 
              title="Research Grant Revenue" 
              value={`₦${(345000000).toLocaleString()}`} 
              subtitle="2025 Financial Year"
              trend="up"
              trendValue="12% from previous year"
              icon={<Award className="h-5 w-5 text-nigeria-green" />}
              updatedAt="March 28, 2025"
            />
            <StatCard 
              title="TETFund Allocation" 
              value={`₦${(580000000).toLocaleString()}`} 
              subtitle="2025 Financial Year"
              trend="neutral"
              trendValue="Same as previous year"
              icon={<DollarSign className="h-5 w-5 text-nigeria-green" />}
              updatedAt="April 2, 2025"
            />
            <StatCard 
              title="Total Student Population" 
              value={(20000).toLocaleString()} 
              subtitle="2024/2025 Session"
              trend="up"
              trendValue="5% from previous year"
              icon={<Users className="h-5 w-5 text-nigeria-green" />}
              updatedAt="March 15, 2025"
            />
          </div>
        </div>

        <div className="dashboard-section">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Budget Allocation Breakdown</h2>
            <Button variant="ghost" size="sm" asChild>
              <a href="/budget">View Detailed Report</a>
            </Button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard 
              title="Annual Budget Distribution" 
              description="Breakdown of budget allocation by category"
              updatedAt="April 1, 2025"
            >
              <SimplePieChart data={budgetData} colors={pieColors} />
            </ChartCard>
            
            <ChartCard 
              title="Research Grant Revenue" 
              description="Distribution of research grants by source"
              updatedAt="March 28, 2025"
            >
              <SimplePieChart data={researchGrantData} colors={researchColors} />
            </ChartCard>
          </div>
        </div>
        
        <div className="dashboard-section">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Endowment Fund Growth</h2>
            <Button variant="ghost" size="sm" asChild>
              <a href="/endowment">View Detailed Report</a>
            </Button>
          </div>
          <ChartCard 
            title="Endowment Fund Value" 
            description="Monthly growth for 2025"
            updatedAt="April 2, 2025"
          >
            <SimpleLineChart data={endowmentData} lineKey="value" color="#008751" />
          </ChartCard>
        </div>
        
        <div className="dashboard-section">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Student Population</h2>
            <Button variant="ghost" size="sm" asChild>
              <a href="/student-population">View Detailed Report</a>
            </Button>
          </div>
          <ChartCard 
            title="Student Population Distribution" 
            description="2024/2025 Academic Session"
            updatedAt="March 15, 2025"
          >
            <SimplePieChart data={studentData} colors={studentColors} />
          </ChartCard>
        </div>
        
        <div className="dashboard-section">
          <DataCard 
            title="Embed This Dashboard" 
            className="mb-4"
            footer={
              <div className="flex justify-between items-center w-full">
                <span>Copy this code to embed the dashboard on your institution's website.</span>
                <Button size="sm" className="bg-nigeria-green hover:bg-nigeria-darkGreen">Copy Code</Button>
              </div>
            }
          >
            <div className="embed-container">
              <code className="text-sm whitespace-pre-wrap text-gray-600">
{`<iframe 
  src="https://edu-transparency-nigeria-hub.ng/embed/federal-university-of-technology-akure"
  width="100%" 
  height="800" 
  frameBorder="0"
  style="border: 1px solid #f3f4f6; border-radius: 0.5rem;"
  title="FUTA Transparency Dashboard"
></iframe>`}
              </code>
            </div>
          </DataCard>
          
          <DataCard 
            title="About This Data" 
            footer={
              <div className="flex justify-between items-center w-full">
                <span>Last reviewed on April 5, 2025</span>
                <Button size="sm" variant="outline" asChild>
                  <a href="/documents/fg-policy-circular.pdf">FG Policy Circular</a>
                </Button>
              </div>
            }
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
              </div>
              <div className="text-sm">
                <h3 className="font-montserrat font-medium mb-1">Compliance with Federal Ministry of Education Directive</h3>
                <p className="text-muted-foreground">
                  This dashboard is published in compliance with the April 5, 2025 directive from the Federal 
                  Ministry of Education requiring all Federal Universities, Polytechnics, and Colleges of Education 
                  to publish key institutional data on their official websites. The data presented here is 
                  updated quarterly or as new information becomes available.
                </p>
              </div>
            </div>
          </DataCard>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;

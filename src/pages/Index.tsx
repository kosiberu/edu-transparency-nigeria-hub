
import React, { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { DataCard, StatCard } from "@/components/ui/data-card";
import { ChartCard, SimplePieChart, SimpleBarChart, SimpleLineChart } from "@/components/ui/chart-card";
import { YearSelector, YearTabs } from "@/components/ui/year-selector";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Award, BookOpen, DollarSign, Download, FileBarChart, Users, FileText, Info, ExternalLink } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Index = () => {
  const [selectedYear, setSelectedYear] = useState(2025);
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);

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
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5 text-amber-600" />
                </div>
                <div className="text-sm">
                  <h3 className="font-montserrat font-medium mb-1">Compliance with Federal Ministry of Education Directive</h3>
                  <p className="text-muted-foreground mb-2">
                    This dashboard is published in compliance with the April 5, 2025 directive from the Federal 
                    Ministry of Education requiring all Federal Universities, Polytechnics, and Colleges of Education 
                    to publish key institutional data on their official websites. The data presented here is 
                    updated quarterly or as new information becomes available.
                  </p>
                  
                  {/* Fix: Wrap the CollapsibleTrigger and CollapsibleContent within a Collapsible component */}
                  <Collapsible open={isAboutExpanded}>
                    <CollapsibleTrigger 
                      onClick={() => setIsAboutExpanded(!isAboutExpanded)}
                      className="text-nigeria-green flex items-center hover:underline cursor-pointer"
                    >
                      <span>{isAboutExpanded ? "Show less" : "Learn more about this data"}</span>
                      <Info className="h-4 w-4 ml-1" />
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent className="pl-14 text-sm space-y-4 mt-2">
                      <div>
                        <h4 className="font-medium mb-1">Data Accuracy and Verification</h4>
                        <p className="text-muted-foreground">
                          All financial data presented in this dashboard is extracted from the institution's
                          audited financial reports, verified by the Office of the Bursar, and approved by
                          the institution's Governing Council. Student population figures are collected from
                          the Academic Planning Unit and verified by the Registrar's Office.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-1">Data Collection Timeline</h4>
                        <p className="text-muted-foreground">
                          Financial data is updated quarterly, with annual figures finalized after the end of 
                          each fiscal year. Student population figures are updated at the beginning of each 
                          academic session, with adjustments made after the add/drop period.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-1">Data Categories Explained</h4>
                        <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                          <li><span className="font-medium text-gray-700">Annual Budget:</span> Total financial allocations from the Federal Government, broken down by personnel, overhead, and capital expenditure.</li>
                          <li><span className="font-medium text-gray-700">Research Grants:</span> Funds secured specifically for research activities, separated by domestic and international sources.</li>
                          <li><span className="font-medium text-gray-700">TETFund Allocation:</span> Interventions received from the Tertiary Education Trust Fund for various projects and academic support.</li>
                          <li><span className="font-medium text-gray-700">Endowment Fund:</span> Cumulative donations, investments, and returns managed by the institution for long-term financial stability.</li>
                          <li><span className="font-medium text-gray-700">Student Population:</span> Total enrolled students, categorized by level of study.</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-1">Use of This Information</h4>
                        <p className="text-muted-foreground">
                          This dashboard is provided for transparency purposes as mandated by the Federal Ministry of Education. 
                          The information may be used for research, analysis, and public information purposes. 
                          For permission to reproduce or distribute this information, please contact the institution's 
                          Public Relations Office.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-1">Related Resources</h4>
                        <div className="flex flex-col gap-2">
                          <a href="#" className="text-nigeria-green hover:underline inline-flex items-center">
                            <FileText className="h-4 w-4 mr-1" />
                            Annual Financial Report (2025)
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                          <a href="#" className="text-nigeria-green hover:underline inline-flex items-center">
                            <FileText className="h-4 w-4 mr-1" />
                            Academic Planning Report (2024/2025)
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                          <a href="#" className="text-nigeria-green hover:underline inline-flex items-center">
                            <FileText className="h-4 w-4 mr-1" />
                            Federal Education Transparency Initiative
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
            </div>
          </DataCard>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;

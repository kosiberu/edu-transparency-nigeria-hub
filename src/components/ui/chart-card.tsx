
import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { cn } from "@/lib/utils";

interface ChartCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  updatedAt?: string;
  className?: string;
  action?: React.ReactNode;
}

export function ChartCard({ title, description, children, updatedAt, className, action }: ChartCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="bg-muted/50 p-4">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-sm font-medium">{title}</CardTitle>
            {description && <p className="text-xs text-muted-foreground mt-1">{description}</p>}
          </div>
          {action}
        </div>
      </CardHeader>
      <CardContent className="p-0 pt-4">
        {children}
      </CardContent>
      {updatedAt && (
        <CardFooter className="bg-muted/30 px-6 py-2 text-xs text-muted-foreground border-t">
          Last updated: {updatedAt}
        </CardFooter>
      )}
    </Card>
  );
}

export function SimplePieChart({ 
  data, 
  dataKey = "value", 
  nameKey = "name", 
  colors 
}: { 
  data: { name: string; value: number }[]; 
  dataKey?: string; 
  nameKey?: string;
  colors: string[] 
}) {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey={dataKey}
          nameKey={nameKey}
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `₦${value.toLocaleString()}`} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}

export function SimpleBarChart({ 
  data, 
  dataKey, 
  barKey, 
  xAxisKey = "name",
  color = "#008751" 
}: { 
  data: any[];
  dataKey: string;
  barKey: string;
  xAxisKey?: string;
  color?: string;
}) {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <BarChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 20,
          bottom: 40,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey={xAxisKey} angle={-45} textAnchor="end" height={60} />
        <YAxis />
        <Tooltip formatter={(value) => `₦${value.toLocaleString()}`} />
        <Legend />
        <Bar name={dataKey} dataKey={barKey} fill={color} radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function SimpleLineChart({ 
  data, 
  lineKey, 
  xAxisKey = "name",
  color = "#008751" 
}: { 
  data: any[];
  lineKey: string;
  xAxisKey?: string;
  color?: string;
}) {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <LineChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 20,
          bottom: 40,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey={xAxisKey} />
        <YAxis />
        <Tooltip formatter={(value) => `₦${value.toLocaleString()}`} />
        <Legend />
        <Line 
          type="monotone" 
          dataKey={lineKey} 
          stroke={color} 
          activeDot={{ r: 8 }} 
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

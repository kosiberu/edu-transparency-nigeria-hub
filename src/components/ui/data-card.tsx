
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DataCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  footer?: React.ReactNode;
}

export function DataCard({ title, children, className, footer }: DataCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="bg-muted/50 p-4">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {children}
      </CardContent>
      {footer && (
        <CardFooter className="bg-muted/30 px-6 py-3 text-xs text-muted-foreground border-t">
          {footer}
        </CardFooter>
      )}
    </Card>
  );
}

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  updatedAt?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function StatCard({ 
  title, 
  value, 
  subtitle, 
  trend, 
  trendValue,
  updatedAt,
  icon,
  className 
}: StatCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
            <h3 className="text-2xl font-bold font-montserrat">{value}</h3>
            {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
            
            {trend && (
              <div className={cn(
                "flex items-center mt-2 text-xs",
                trend === "up" && "text-green-600",
                trend === "down" && "text-red-600",
                trend === "neutral" && "text-amber-600"
              )}>
                {trend === "up" && "▲"}
                {trend === "down" && "▼"}
                {trend === "neutral" && "►"}
                <span className="ml-1">{trendValue}</span>
              </div>
            )}
          </div>
          
          {icon && (
            <div className="h-10 w-10 rounded-full bg-nigeria-green/10 flex items-center justify-center">
              {icon}
            </div>
          )}
        </div>
      </CardContent>
      
      {updatedAt && (
        <CardFooter className="bg-muted/30 px-6 py-2 text-xs text-muted-foreground border-t">
          Last updated: {updatedAt}
        </CardFooter>
      )}
    </Card>
  );
}

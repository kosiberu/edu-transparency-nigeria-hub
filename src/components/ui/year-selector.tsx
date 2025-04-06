
import React from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface YearSelectorProps {
  currentYear: number;
  onChange: (year: number) => void;
  startYear?: number;
  endYear?: number;
}

export function YearSelector({ currentYear, onChange, startYear = 2020, endYear = 2025 }: YearSelectorProps) {
  const years = Array.from(
    { length: endYear - startYear + 1 },
    (_, i) => startYear + i
  ).reverse();

  return (
    <Select
      value={currentYear.toString()}
      onValueChange={(value) => onChange(parseInt(value))}
    >
      <SelectTrigger className="w-32">
        <SelectValue placeholder="Select Year" />
      </SelectTrigger>
      <SelectContent>
        {years.map((year) => (
          <SelectItem key={year} value={year.toString()}>
            {year}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

interface YearTabsProps {
  years: number[];
  selectedYear: number;
  onChange: (year: number) => void;
}

export function YearTabs({ years, selectedYear, onChange }: YearTabsProps) {
  return (
    <div className="flex border rounded-md overflow-hidden">
      {years.map((year) => (
        <Button
          key={year}
          variant={year === selectedYear ? "default" : "ghost"}
          className={year === selectedYear ? "bg-nigeria-green hover:bg-nigeria-darkGreen" : ""}
          onClick={() => onChange(year)}
        >
          {year}
        </Button>
      ))}
    </div>
  );
}

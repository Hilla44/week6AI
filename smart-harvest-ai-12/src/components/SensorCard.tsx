import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface SensorCardProps {
  name: string;
  value: string;
  unit: string;
  status: "optimal" | "warning" | "critical";
  icon: LucideIcon;
  trend?: "up" | "down" | "stable";
}

export const SensorCard = ({ name, value, unit, status, icon: Icon, trend }: SensorCardProps) => {
  const statusColors = {
    optimal: "bg-growth text-growth-foreground",
    warning: "bg-soil text-white",
    critical: "bg-destructive text-destructive-foreground",
  };

  const trendIcons = {
    up: "↑",
    down: "↓",
    stable: "→",
  };

  return (
    <Card className="bg-gradient-card border-border/50 hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{name}</CardTitle>
        <Icon className="h-4 w-4 text-primary" />
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline justify-between">
          <div className="flex items-baseline gap-1">
            <div className="text-3xl font-bold text-foreground">{value}</div>
            <span className="text-sm text-muted-foreground">{unit}</span>
          </div>
          {trend && (
            <span className="text-xl text-muted-foreground">{trendIcons[trend]}</span>
          )}
        </div>
        <Badge className={`mt-2 ${statusColors[status]}`} variant="secondary">
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      </CardContent>
    </Card>
  );
};

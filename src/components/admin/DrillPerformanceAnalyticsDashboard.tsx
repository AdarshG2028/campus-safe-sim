import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BarChart3, Calendar, Clock, Users, CheckCircle, AlertCircle } from "lucide-react";

export const DrillPerformanceAnalyticsDashboard = () => {
  const recentDrills = [
    { 
      date: "2024-01-15", 
      type: "Fire Drill", 
      building: "Main Block", 
      participants: 450, 
      evacuationTime: "3m 45s", 
      status: "Excellent",
      score: 95 
    },
    { 
      date: "2024-01-10", 
      type: "Earthquake Drill", 
      building: "Science Block", 
      participants: 320, 
      evacuationTime: "4m 12s", 
      status: "Good",
      score: 88 
    },
    { 
      date: "2024-01-05", 
      type: "Lockdown Drill", 
      building: "Admin Block", 
      participants: 180, 
      evacuationTime: "2m 30s", 
      status: "Excellent",
      score: 97 
    },
  ];

  const upcomingDrills = [
    { date: "2024-01-20", type: "Fire Drill", building: "Hostel Block A", scheduled: "10:00 AM" },
    { date: "2024-01-25", type: "Medical Emergency", building: "Library", scheduled: "2:00 PM" },
    { date: "2024-01-30", type: "Earthquake Drill", building: "Sports Complex", scheduled: "11:30 AM" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Excellent": return "bg-secondary text-secondary-foreground";
      case "Good": return "bg-warning text-warning-foreground";
      case "Needs Improvement": return "bg-danger text-danger-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    return status === "Excellent" ? 
      <CheckCircle className="w-4 h-4 text-secondary" /> : 
      <AlertCircle className="w-4 h-4 text-warning" />;
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Drill Performance Analytics</h2>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Calendar className="w-4 h-4 mr-2" />
          Schedule New Drill
        </Button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Drill Performance */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Recent Drill Performance</h3>
          <div className="space-y-4">
            {recentDrills.map((drill, index) => (
              <div key={index} className="p-4 border border-border rounded-lg bg-card">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="font-semibold text-foreground">{drill.type}</div>
                    <div className="text-sm text-muted-foreground">{drill.building} • {drill.date}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(drill.status)}
                    <Badge className={getStatusColor(drill.status)}>{drill.status}</Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-foreground">{drill.participants} participants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-foreground">{drill.evacuationTime}</span>
                  </div>
                </div>
                
                <div className="mt-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Performance Score</span>
                    <span className="font-medium text-foreground">{drill.score}%</span>
                  </div>
                  <Progress value={drill.score} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Drills */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Upcoming Drills</h3>
          <div className="space-y-3 mb-6">
            {upcomingDrills.map((drill, index) => (
              <div key={index} className="p-3 border border-border rounded-lg bg-muted/50">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-foreground">{drill.type}</div>
                    <div className="text-sm text-muted-foreground">{drill.building}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-foreground">{drill.date}</div>
                    <div className="text-xs text-muted-foreground">{drill.scheduled}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Performance Metrics */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Overall Metrics</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary">92%</div>
                <div className="text-xs text-muted-foreground">Avg Performance</div>
              </div>
              <div className="text-center p-3 bg-secondary/5 rounded-lg">
                <div className="text-2xl font-bold text-secondary">3m 29s</div>
                <div className="text-xs text-muted-foreground">Avg Evacuation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
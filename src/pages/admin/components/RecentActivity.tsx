import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function RecentActivity() {
  // Data dummy untuk aktivitas terbaru
  const activities = [
    { name: "Siti Aminah", action: "menyelesaikan ritual Sa'i." },
    { name: "Admin", action: "mengirim broadcast: 'Jadwal Ziarah'." },
    { name: "Budi Santoso", action: "telah menyelesaikan semua ritual." },
    { name: "Ahmad Yani", action: "menyelesaikan ritual Tawaf Ifadah." },
  ];

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Aktivitas Terbaru</CardTitle>
        <CardDescription>
          Pantau aktivitas jamaah dan admin secara real-time.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-center gap-4">
              <Avatar className="h-9 w-9">
                <AvatarFallback className="bg-mabrurx-navy text-white">
                  {activity.name.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <span className="font-medium">{activity.name}</span>
                <span className="text-muted-foreground"> {activity.action}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
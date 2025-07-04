import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  linkTo?: string;
}

export function StatCard({ title, value, icon, linkTo }: StatCardProps) {
  const cardContent = (
    <Card
      className={`transition-all hover:shadow-lg ${
        linkTo ? "cursor-pointer hover:border-mabrurx-gold" : ""
      }`}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold text-mabrurx-navy">{value}</div>
      </CardContent>
    </Card>
  );

  if (linkTo) {
    return <Link to={linkTo}>{cardContent}</Link>;
  }

  return cardContent;
}
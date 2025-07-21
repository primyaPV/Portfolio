import { Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface TimelineItem {
  title: string;
  company: string;
  date: string;
  description: string;
  icon?: "work" | "education";
}

interface TimelineProps {
  items: TimelineItem[];
}

const TimelineIcon = ({ icon }: { icon?: "work" | "education" }) => {
  const Icon = icon === "work" ? Briefcase : GraduationCap;
  return (
    <div className="absolute -left-[1.125rem] mt-1.5 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
      <Icon className="h-5 w-5" />
    </div>
  );
};

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="absolute left-3 top-0 h-full w-0.5 bg-border"></div>
      {items.map((item, index) => (
        <div key={index} className="relative mb-8 pl-12">
          <TimelineIcon icon={item.icon} />
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                <p className="font-semibold">{item.company}</p>
                <time>{item.date}</time>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}

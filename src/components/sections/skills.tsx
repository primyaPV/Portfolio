"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { AngularIcon, ReactIcon, NodeIcon, MongoDBIcon, CassandraIcon, GithubIcon } from "@/lib/icons";

const skills = [
  { name: "Angular", level: 90, icon: <AngularIcon className="h-8 w-8" /> },
  { name: "React", level: 85, icon: <ReactIcon className="h-8 w-8" /> },
  { name: "Node.js", level: 80, icon: <NodeIcon className="h-8 w-8" /> },
  { name: "MongoDB", level: 75, icon: <MongoDBIcon className="h-8 w-8" /> },
  { name: "Cassandra", level: 70, icon: <CassandraIcon className="h-8 w-8" /> },
  { name: "GitHub", level: 95, icon: <GithubIcon className="h-8 w-8" /> },
];

const SkillBar = ({ level, name, icon }: { level: number, name: string, icon: React.ReactNode }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(level), 100);
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-4">
        <div className="text-primary">{icon}</div>
        <h3 className="text-lg font-medium">{name}</h3>
      </div>
      <div className="flex items-center gap-4">
        <Progress value={progress} className="h-3 w-full" />
        <span className="font-semibold">{level}%</span>
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="w-full bg-muted/50 py-20 lg:py-32">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            My Skills
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
            A snapshot of the technologies and tools I work with.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

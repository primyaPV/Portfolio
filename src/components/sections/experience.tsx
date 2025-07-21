import Timeline from "../timeline";

const experience = [
  {
    title: "Software Developer",
    company: "Iwin",
    date: "Aug 2022 – Nov 2024",
    description: "Developed and maintained web applications using Angular, React, and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions. Implemented responsive user interfaces and optimized application performance.",
  },
  {
    title: "Full-Stack Developer Intern",
    company: "Relaxplzz",
    date: "Jan 2025 – Jun 2025",
    description: "Contributed to the development of a task management application. Gained hands-on experience with full-stack development, including front-end frameworks and backend technologies. Assisted in bug fixing and feature implementation.",
  },
];


export default function Experience() {
  return (
    <section id="experience" className="w-full bg-muted/50 py-20 lg:py-32">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Work Experience
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
            My professional journey and key contributions.
          </p>
        </div>
        <div className="mt-12">
            <Timeline items={experience} />
        </div>
      </div>
    </section>
  );
}

import Timeline from "../timeline";

const education = [
  {
    title: "Master of Computer Applications (MCA)",
    company: "University of Excellence",
    date: "2018 – 2020",
    description: "Specialized in advanced software development, database management, and web technologies. Completed a thesis project on scalable web architectures.",
    icon: "education" as "education",
  },
  {
    title: "Bachelor of Computer Applications (BCA)",
    company: "College of Technology",
    date: "2015 – 2018",
    description: "Gained a strong foundation in computer science, programming fundamentals, and data structures. Actively participated in coding competitions and tech clubs.",
    icon: "education" as "education",
  },
];


export default function Education() {
  return (
    <section id="education" className="w-full py-20 lg:py-32">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Education
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
            My academic background and qualifications.
          </p>
        </div>
        <div className="mt-12">
            <Timeline items={education} />
        </div>
      </div>
    </section>
  );
}

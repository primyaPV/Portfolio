import ProjectCard from "../project-card";

const projects = [
  {
    title: "Iwin Life Platform",
    description: "A comprehensive platform for managing life goals, tasks, and progress tracking, built with a modern front-end framework.",
    image: "/iwin-logo.png",
    imageHint: "platform dashboard",
    tags: ["Angular", "TypeScript", "SCSS", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
    details: "The Iwin Life Platform is a full-stack application designed to help users organize their personal and professional lives. It features a modular architecture, real-time data synchronization, and an intuitive user interface for a seamless experience."
  },
  {
    title: "Relaxplzz Task Manager",
    description: "A streamlined task management application designed for simplicity and efficiency, helping users to focus on what matters most.",
    image: "https://placehold.co/600x400.png",
    imageHint: "task manager",
    tags: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
    details: "Relaxplzz is a lightweight yet powerful task manager built with React. It leverages modern hooks for state management and Firebase for backend services, providing a fast and responsive user experience for daily task tracking."
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-20 lg:py-32">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            My Work
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
            Here are some of the projects I'm proud to have worked on.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { Button } from "../ui/button";
import { Download } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="w-full py-20 lg:py-32">
      <div className="container mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <p className="text-muted-foreground md:text-lg">
              A passionate and dedicated software developer with expertise in creating dynamic, responsive web applications. With a strong foundation in both front-end and full-stack development, I excel at building modern user interfaces with Angular and React, and robust server-side logic with Node.js. I thrive on solving complex problems and am committed to writing clean, efficient, and maintainable code.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="flex h-64 w-64 items-center justify-center rounded-full bg-primary/10 p-4 animate-float">
               <div className="flex h-full w-full items-center justify-center rounded-full bg-primary/20 p-4">
                 <div className="flex h-full w-full items-center justify-center rounded-full bg-primary/30">
                  <span className="font-headline text-5xl font-bold text-primary">PV</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="gap-2">
            <a href="/primya.pdf" download rel="noopener noreferrer">
              <Download className="h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

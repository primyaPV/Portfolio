import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Github, Link as LinkIcon } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  imageHint: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  details: string;
}

export default function ProjectCard({ title, description, image, imageHint, tags, liveUrl, githubUrl, details }: ProjectCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="group overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 duration-300">
          <CardContent className="p-0">
            <div className="relative h-56 w-full">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={imageHint}
              />
            </div>
            <div className="p-6">
              <CardTitle className="font-headline text-xl font-bold">{title}</CardTitle>
              <p className="mt-2 text-muted-foreground">{description}</p>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </CardFooter>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <div className="relative mb-4 h-64 w-full rounded-lg overflow-hidden">
             <Image src={image} alt={title} fill className="object-cover" data-ai-hint={imageHint} />
          </div>
          <DialogTitle className="font-headline text-2xl font-bold">{title}</DialogTitle>
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
          <DialogDescription className="pt-4 text-base">
            {details}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 flex gap-4">
          <Button asChild>
            <Link href={liveUrl} target="_blank" className="gap-2">
              <LinkIcon className="h-4 w-4" /> Live Demo
            </Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href={githubUrl} target="_blank" className="gap-2">
              <Github className="h-4 w-4" /> GitHub
            </Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

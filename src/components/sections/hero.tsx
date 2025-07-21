import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Typewriter from '../typewriter';
import ParticleBackground from '../particle-background';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full">
      <ParticleBackground />
      <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Hi, I’m <span className="text-primary">Primya PV</span>
          <br />
          Software Developer
        </h1>
        <div className="mt-6">
          <Typewriter
            strings={['Angular', 'React', 'Node.js', 'Full-Stack Development']}
            wrapperClassName="text-lg font-medium text-muted-foreground sm:text-xl md:text-2xl"
            cursorClassName="text-accent"
          />
        </div>
        <div className="mt-8 flex gap-4">
          <Button asChild size="lg">
            <Link href="#projects">View My Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

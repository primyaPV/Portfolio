'use client';

import Link from 'next/link';
import { Menu, Code, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from './theme-toggle';
import { useState, useEffect, useTransition } from 'react';
import { getResumeFile } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownload = () => {
    startTransition(async () => {
      const result = await getResumeFile();
      if (result.success && result.file) {
        const link = document.createElement('a');
        link.href = `data:application/pdf;base64,${result.file}`;
        link.download = 'primya.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        toast({
          title: 'Uh oh! Something went wrong.',
          description: result.error,
          variant: 'destructive',
        });
      }
    });
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'border-b bg-background/80 backdrop-blur-sm' : 'bg-background'}`}>
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="hidden font-bold sm:inline-block font-headline">Primya PV</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="font-medium text-muted-foreground transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" onClick={handleDownload} disabled={isPending}>
            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Download Resume
          </Button>
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium">
                <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
                  <Code className="h-6 w-6 text-primary" />
                  <span className="sr-only">Primya PV</span>
                </Link>
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

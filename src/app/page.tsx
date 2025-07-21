import Header from '@/components/header';
import About from '@/components/sections/about';
import Contact from '@/components/sections/contact';
import Education from '@/components/sections/education';
import Experience from '@/components/sections/experience';
import Hero from '@/components/sections/hero';
import Projects from '@/components/sections/projects';
import Skills from '@/components/sections/skills';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

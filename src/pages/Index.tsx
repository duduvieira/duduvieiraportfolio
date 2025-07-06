
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Contact from '@/components/Contact';

const Index = () => {
  useEffect(() => {
    document.title = 'Dudu Vieira | Desenvolvedor';
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
      
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Dudu Vieira. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};

export default Index;

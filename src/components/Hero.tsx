import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import heroImage from '@/assets/programmer-hero.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="order-2 md:order-1 relative">
          <div className="relative glass-card p-4 floating-animation">
            <img 
              src={heroImage} 
              alt="Programmer workspace" 
              className="w-full h-auto rounded-xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
          </div>
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl pulse-glow"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full blur-xl pulse-glow"></div>
        </div>

        {/* Content */}
        <div className="order-1 md:order-2 text-center md:text-left animate-fade-in">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="gradient-text">Cześć!</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Jestem <span className="text-accent">Full Stack Developer</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Tworzę nowoczesne aplikacje webowe z pasją do czystego kodu 
              i innowacyjnych rozwiązań. Specjalizuję się w React, Node.js 
              i najnowszych technologiach frontendowych.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
            <Button 
              size="lg" 
              className="neon-glow hover-glow bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Zobacz moje projekty
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground hover-glow"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Skontaktuj się
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center md:justify-start">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-3 hover-glow transition-all duration-300 hover:text-primary"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-3 hover-glow transition-all duration-300 hover:text-primary"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:contact@example.com"
              className="glass-card p-3 hover-glow transition-all duration-300 hover:text-primary"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
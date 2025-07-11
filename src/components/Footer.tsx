import { Code2, Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'O mnie', href: '#about' },
    { name: 'Doświadczenie', href: '#experience' },
    { name: 'Portfolio', href: '#portfolio' }
  ];

  const services = [
    'Aplikacje React/Next.js',
    'Backend Node.js',
    'API Development',
    'UI/UX Design',
    'Konsultacje techniczne',
    'Code Review'
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-20 border-t border-border/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/20 to-transparent"></div>
      
      <div className="relative max-w-6xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Code2 className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold gradient-text">DevPortfolio</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Jestem pasjonatem technologii, który tworzy nowoczesne aplikacje webowe. 
              Specjalizuję się w React, Node.js i najnowszych technologiach frontend/backend.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card p-3 hover-glow transition-all duration-300 hover:text-primary"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card p-3 hover-glow transition-all duration-300 hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:contact@example.com"
                className="glass-card p-3 hover-glow transition-all duration-300 hover:text-primary"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Nawigacja</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Usługi</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-muted-foreground text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="glass-card p-6 mb-12 text-center">
          <h3 className="text-xl font-semibold mb-3 gradient-text">
            Bądź na bieżąco
          </h3>
          <p className="text-muted-foreground mb-4">
            Zapisz się do newslettera i otrzymuj informacje o nowych projektach
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Twój email"
              className="flex-1 px-4 py-2 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
            />
            <Button className="neon-glow bg-primary text-primary-foreground hover:bg-primary/90">
              Zapisz się
            </Button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>© {currentYear} DevPortfolio. Stworzone z</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>przy użyciu React & TypeScript</span>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Polityka prywatności
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Regulamin
              </a>
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="glass-card hover-glow"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-accent/5 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('wszystkie');

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Kompleksowa platforma e-commerce z koszykiem, płatnościami i panelem admina.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "fullstack",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Aplikacja do zarządzania zadaniami z funkcjami team collaboration.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      category: "frontend",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      id: 3,
      title: "Real-time Chat App",
      description: "Aplikacja czatu w czasie rzeczywistym z socket.io i autentykacją.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop",
      technologies: ["React", "Socket.io", "JWT"],
      category: "fullstack",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Dashboard pogodowy z prognozami i interaktywnymi mapami.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["React", "Chart.js", "API"],
      category: "frontend",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      id: 5,
      title: "API Gateway",
      description: "Mikroservice API Gateway z rate limiting i monitoringiem.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      technologies: ["Node.js", "Docker", "Redis"],
      category: "backend",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Responsywna strona portfolio z animacjami i ciemnym motywem.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      technologies: ["React", "Tailwind", "Framer Motion"],
      category: "frontend",
      github: "https://github.com",
      live: "https://example.com"
    }
  ];

  const filters = [
    { name: 'wszystkie', label: 'Wszystkie' },
    { name: 'frontend', label: 'Frontend' },
    { name: 'fullstack', label: 'Full Stack' },
    { name: 'backend', label: 'Backend' }
  ];

  const filteredProjects = activeFilter === 'wszystkie' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Oto niektóre z moich projektów, które pokazują moje umiejętności 
            i podejście do rozwiązywania problemów
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.name}
                variant={activeFilter === filter.name ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.name)}
                className={`transition-all duration-300 ${
                  activeFilter === filter.name 
                    ? "neon-glow bg-primary text-primary-foreground" 
                    : "border-primary/30 text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="glass-card hover-glow group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="glass-card p-3 hover:bg-white/20 transition-colors"
                  >
                    <Github className="h-5 w-5 text-white" />
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="glass-card p-3 hover:bg-white/20 transition-colors"
                  >
                    <Eye className="h-5 w-5 text-white" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-primary/20 text-primary rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">
              Chcesz zobaczyć więcej?
            </h3>
            <p className="text-muted-foreground mb-6">
              Mam więcej projektów na GitHub i chętnie opowiem o nich więcej podczas rozmowy.
            </p>
            <Button 
              size="lg"
              className="neon-glow hover-glow bg-primary text-primary-foreground"
              onClick={() => window.open('https://github.com', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              Zobacz wszystkie projekty
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
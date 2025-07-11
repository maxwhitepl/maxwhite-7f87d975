import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Obecne",
      location: "Warszawa, Polska",
      description: "Prowadzenie zespołu 5 programistów, architektura aplikacji React/Node.js, implementacja mikroserwisów i optymalizacja wydajności.",
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      period: "2020 - 2022",
      location: "Kraków, Polska",
      description: "Tworzenie responsywnych aplikacji webowych, współpraca z UX/UI designerami, integracja z API i optymalizacja SEO.",
      technologies: ["React", "Vue.js", "SASS", "Webpack", "Jest"]
    },
    {
      title: "Junior Developer",
      company: "StartupTech",
      period: "2019 - 2020",
      location: "Gdańsk, Polska",
      description: "Rozwój umiejętności w JavaScript, tworzenie komponentów UI, debugging i nauka najlepszych praktyk programowania.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "Git"]
    }
  ];

  const skills = [
    { name: "React.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "AWS", level: 75 },
    { name: "Docker", level: 85 }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-muted/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Doświadczenie & Umiejętności</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Moja droga zawodowa i technologie, które opanowałem
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-8 text-accent">Doświadczenie zawodowe</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="glass-card p-6 hover-glow relative">
                  <div className="absolute -left-3 top-6 w-6 h-6 bg-primary rounded-full border-4 border-background"></div>
                  {index !== experiences.length - 1 && (
                    <div className="absolute -left-1 top-12 w-0.5 h-24 bg-primary/30"></div>
                  )}
                  
                  <div className="ml-6">
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      {exp.title}
                    </h4>
                    <div className="text-primary font-medium mb-2">{exp.company}</div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="animate-scale-in">
            <h3 className="text-2xl font-semibold mb-8 text-accent">Umiejętności techniczne</h3>
            <div className="glass-card p-6 hover-glow">
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 0.2}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="font-semibold mb-4 text-foreground">Inne technologie:</h4>
                <div className="flex flex-wrap gap-2">
                  {["MongoDB", "PostgreSQL", "Redis", "GraphQL", "Next.js", "Tailwind CSS", "Figma", "Jira"].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-full text-sm hover:bg-secondary/70 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
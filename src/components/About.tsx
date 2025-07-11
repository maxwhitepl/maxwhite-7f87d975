import { User, Code, Coffee, Lightbulb } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, label: 'Projekty', value: '50+' },
    { icon: Coffee, label: 'Kawy wypitych', value: '1000+' },
    { icon: Lightbulb, label: 'Lata doświadczenia', value: '5+' },
    { icon: User, label: 'Zadowolonych klientów', value: '25+' },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">O mnie</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Jestem pasjonatem technologii z wieloletnim doświadczeniem w tworzeniu 
            aplikacji webowych. Lubię przekształcać pomysły w funkcjonalne, 
            estetyczne rozwiązania.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="animate-slide-up">
            <div className="glass-card p-8 hover-glow">
              <h3 className="text-2xl font-semibold mb-6 text-accent">Moja historia</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Rozpocząłem swoją przygodę z programowaniem w 2019 roku, 
                  fascynując się możliwościami nowoczesnych technologii webowych. 
                  Od tamtej pory nieustannie rozwijam swoje umiejętności.
                </p>
                <p>
                  Specjalizuję się w React.js, Node.js, TypeScript oraz nowoczesnych 
                  frameworkach. Lubię tworzyć aplikacje, które nie tylko dobrze wyglądają, 
                  ale też zapewniają doskonałe doświadczenie użytkownika.
                </p>
                <p>
                  Wierzę, że dobry kod to nie tylko funkcjonalność, ale też czytelność, 
                  skalowalność i elegancja rozwiązania. Zawsze staram się pisać kod, 
                  który będzie zrozumiały dla innych programistów.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="animate-scale-in">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="glass-card p-6 text-center hover-glow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
          <div className="glass-card p-6 text-center hover-glow">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-xl font-semibold mb-3">Czysty kod</h4>
            <p className="text-muted-foreground">
              Piszę kod, który jest czytelny, testowalny i łatwy w utrzymaniu.
            </p>
          </div>

          <div className="glass-card p-6 text-center hover-glow">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="h-8 w-8 text-accent" />
            </div>
            <h4 className="text-xl font-semibold mb-3">Innowacja</h4>
            <p className="text-muted-foreground">
              Ciągle uczę się nowych technologii i implementuję najlepsze praktyki.
            </p>
          </div>

          <div className="glass-card p-6 text-center hover-glow">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="h-8 w-8 text-primary" />
            </div>
            <h4 className="text-xl font-semibold mb-3">Współpraca</h4>
            <p className="text-muted-foreground">
              Wierzę w siłę teamworku i otwartą komunikację z klientami.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
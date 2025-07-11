import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const SocialMedia = () => {
  const socialPlatforms = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com',
      description: 'Sprawdź moje projekty i kod',
      color: 'hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com',
      description: 'Połączmy się profesjonalnie',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com',
      description: 'Śledź moje przemyślenia o tech',
      color: 'hover:text-blue-500'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com',
      description: 'Zajrzyj za kulisy mojej pracy',
      color: 'hover:text-pink-500'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com',
      description: 'Tutoriale i tech talks',
      color: 'hover:text-red-500'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:contact@example.com',
      description: 'Napisz do mnie bezpośrednio',
      color: 'hover:text-green-500'
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Znajdź mnie online</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Śledź moje projekty, dziel się pomysłami i nawiąż ze mną kontakt 
            na różnych platformach społecznościowych
          </p>
        </div>

        {/* Social Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {socialPlatforms.map((platform, index) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 hover-glow group transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <platform.icon className={`h-6 w-6 text-primary transition-colors ${platform.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {platform.name}
                </h3>
              </div>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                {platform.description}
              </p>
            </a>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="glass-card p-8 text-center max-w-4xl mx-auto animate-fade-in">
          <div className="mb-6">
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 pulse-glow">
              <Mail className="h-10 w-10 text-accent" />
            </div>
            <h3 className="text-3xl font-bold mb-4">
              <span className="gradient-text">Newsletter</span>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Chcesz być na bieżąco z moimi projektami i najnowszymi trendami w tech? 
              Zapisz się do newslettera i otrzymuj regularne updates o moich pracach, 
              nowych projektach oraz ciekawych artykułach.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
            <input
              type="email"
              placeholder="Twój adres email"
              className="flex-1 px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
            />
            <Button 
              className="neon-glow hover-glow bg-accent text-accent-foreground hover:bg-accent/90 px-8"
            >
              Zapisz się
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Żadnego spamu, tylko wartościowe treści. Możesz się wypisać w każdej chwili.
          </p>
        </div>

        {/* Follow Links */}
        <div className="flex flex-wrap justify-center gap-4 mt-12 animate-fade-in">
          <span className="text-muted-foreground">Śledź mnie:</span>
          {socialPlatforms.slice(0, 4).map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-2 hover-glow transition-all duration-300 hover:scale-110"
            >
              <platform.icon className={`h-5 w-5 text-muted-foreground transition-colors ${platform.color}`} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
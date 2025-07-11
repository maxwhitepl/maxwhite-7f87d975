import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Send, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Wiadomość wysłana!",
        description: "Dziękuję za kontakt. Odpowiem najszybciej jak to możliwe.",
      });
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@example.com',
      subtitle: 'Odpowiadam w ciągu 24h'
    },
    {
      icon: Phone,
      title: 'Telefon',
      content: '+48 123 456 789',
      subtitle: 'Pon-Pt 9:00-17:00'
    },
    {
      icon: MapPin,
      title: 'Lokalizacja',
      content: 'Warszawa, Polska',
      subtitle: 'Praca zdalna dostępna'
    },
    {
      icon: Clock,
      title: 'Dostępność',
      content: 'Pon-Pt 9:00-18:00',
      subtitle: 'Weekend na życzenie'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Skontaktuj się</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Masz projekt do zrealizowania? Chcesz porozmawiać o współpracy? 
            Napisz do mnie - chętnie odpowiem na Twoje pytania.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 animate-slide-up">
            <div className="glass-card p-8 hover-glow h-fit">
              <h3 className="text-2xl font-semibold mb-6 text-accent">
                Informacje kontaktowe
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      <p className="text-muted-foreground mb-1">
                        {info.content}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="font-semibold mb-4 text-foreground">
                  Preferowane formy kontaktu:
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Email dla projektów komercyjnych</li>
                  <li>• LinkedIn dla współpracy biznesowej</li>
                  <li>• Telefon dla pilnych spraw</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-scale-in">
            <div className="glass-card p-8 hover-glow">
              <h3 className="text-2xl font-semibold mb-6 text-accent">
                Wyślij wiadomość
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Imię i nazwisko *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-all"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-all"
                      placeholder="jan@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Temat *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-all"
                    placeholder="Współpraca przy projekcie React"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Wiadomość *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-all resize-none"
                    placeholder="Opisz swój projekt lub zadaj pytanie..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full neon-glow hover-glow bg-primary text-primary-foreground hover:bg-primary/90 py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                      Wysyłanie...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="h-5 w-5" />
                      Wyślij wiadomość
                    </div>
                  )}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Wszystkie pola oznaczone * są wymagane. Twoje dane są bezpieczne i nie będą udostępniane.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 glass-card p-8 animate-fade-in">
          <h3 className="text-2xl font-semibold mb-6 text-center gradient-text">
            Często zadawane pytania
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                Jak długo trwa realizacja projektu?
              </h4>
              <p className="text-muted-foreground">
                Czas realizacji zależy od złożoności projektu. Proste strony: 1-2 tygodnie, 
                aplikacje webowe: 4-8 tygodni.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                Czy oferujesz wsparcie po zakończeniu projektu?
              </h4>
              <p className="text-muted-foreground">
                Tak, oferuję 3 miesiące bezpłatnego wsparcia oraz płatne usługi 
                rozwoju i utrzymania.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                Jakie są Twoje stawki?
              </h4>
              <p className="text-muted-foreground">
                Stawki ustalamy indywidualnie w zależności od zakresu projektu. 
                Skontaktuj się, aby otrzymać wycenę.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                Czy pracujesz zdalnie?
              </h4>
              <p className="text-muted-foreground">
                Tak, większość projektów realizuję zdalnie. Możliwe są również 
                spotkania w Warszawie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Portfolio from '@/components/Portfolio';
import SocialMedia from '@/components/SocialMedia';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <SocialMedia />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

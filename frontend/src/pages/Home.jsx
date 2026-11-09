import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import ContactSection from '../components/home/ContactSection';
import AboutSection from '../components/home/AboutSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Home;
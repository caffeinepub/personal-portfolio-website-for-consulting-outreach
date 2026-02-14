import { PortfolioNav } from './components/PortfolioNav';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { WorkSection } from './components/sections/WorkSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { ContactSection } from './components/sections/ContactSection';
import { SiLinkedin, SiGithub } from 'react-icons/si';

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background">
      <PortfolioNav />
      
      <main>
        <HeroSection />
        
        <div className="relative">
          <img 
            src="/assets/generated/section-divider.png" 
            alt="" 
            className="w-full h-12 object-cover opacity-20"
            aria-hidden="true"
          />
        </div>
        
        <AboutSection />
        
        <div className="relative">
          <img 
            src="/assets/generated/section-divider.png" 
            alt="" 
            className="w-full h-12 object-cover opacity-20 rotate-180"
            aria-hidden="true"
          />
        </div>
        
        <ServicesSection />
        
        <div className="relative">
          <img 
            src="/assets/generated/section-divider.png" 
            alt="" 
            className="w-full h-12 object-cover opacity-20"
            aria-hidden="true"
          />
        </div>
        
        <WorkSection />
        
        <div className="relative">
          <img 
            src="/assets/generated/section-divider.png" 
            alt="" 
            className="w-full h-12 object-cover opacity-20 rotate-180"
            aria-hidden="true"
          />
        </div>
        
        <TestimonialsSection />
        
        <div className="relative">
          <img 
            src="/assets/generated/section-divider.png" 
            alt="" 
            className="w-full h-12 object-cover opacity-20"
            aria-hidden="true"
          />
        </div>
        
        <ContactSection />
      </main>

      <footer className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn profile"
              >
                <SiLinkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub profile"
              >
                <SiGithub className="w-5 h-5" />
              </a>
            </div>
            
            <div className="text-sm text-muted-foreground text-center md:text-right">
              <p>© {currentYear} All rights reserved.</p>
              <p className="mt-1">
                Built with{' '}
                <span className="text-accent-foreground">♥</span>
                {' '}using{' '}
                <a 
                  href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors underline decoration-dotted"
                >
                  caffeine.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

import { PortfolioNav } from './components/PortfolioNav';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ResumeSection } from './components/sections/ResumeSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { WorkSection } from './components/sections/WorkSection';
import { ContactSection } from './components/sections/ContactSection';

// Decorative SVG divider with traditional geometric motif
function OrnamentDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`relative w-full overflow-hidden ${flip ? 'rotate-180' : ''}`} aria-hidden="true">
      <div className="flex items-center justify-center py-2 px-8 opacity-30">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <svg
          className="mx-4 w-8 h-8 text-primary shrink-0"
          viewBox="0 0 32 32"
          fill="currentColor"
        >
          <path d="M16 2 L18 14 L30 16 L18 18 L16 30 L14 18 L2 16 L14 14 Z" opacity="0.6" />
          <circle cx="16" cy="16" r="3" />
        </svg>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>
    </div>
  );
}

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-background">
      <PortfolioNav />

      <main>
        <HeroSection />
        <OrnamentDivider />
        <AboutSection />
        <OrnamentDivider flip />
        <ResumeSection />
        <OrnamentDivider />
        <ServicesSection />
        <OrnamentDivider flip />
        <WorkSection />
        <OrnamentDivider />
        <ContactSection />
      </main>

      <footer className="border-t border-border bg-foreground/5">
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Brand */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <img
                src="/assets/image.png"
                alt="Vayutaksha Consultancy"
                className="h-14 w-auto object-contain"
              />
              <span className="text-xs text-muted-foreground font-body tracking-widest uppercase">
                Aerospace Structural Design &amp; FEA
              </span>
            </div>

            {/* Copyright */}
            <div className="text-sm text-muted-foreground text-center font-body">
              <p>© {currentYear} Vayutaksha Consultancy. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

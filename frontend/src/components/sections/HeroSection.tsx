import { ArrowRight, Mail } from 'lucide-react';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-background.dim_1600x900.png"
          alt=""
          className="w-full h-full object-cover opacity-25"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/75 to-background" />
      </div>

      {/* Subtle geometric mandala accent */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <svg
          className="w-[600px] h-[600px] opacity-[0.04] text-primary"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          <circle cx="100" cy="100" r="90" />
          <circle cx="100" cy="100" r="70" />
          <circle cx="100" cy="100" r="50" />
          <circle cx="100" cy="100" r="30" />
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const x1 = 100 + 30 * Math.cos(rad);
            const y1 = 100 + 30 * Math.sin(rad);
            const x2 = 100 + 90 * Math.cos(rad);
            const y2 = 100 + 90 * Math.sin(rad);
            return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} />;
          })}
          {[0, 45, 90, 135].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const x1 = 100 + 50 * Math.cos(rad);
            const y1 = 100 + 50 * Math.sin(rad);
            const x2 = 100 - 50 * Math.cos(rad);
            const y2 = 100 - 50 * Math.sin(rad);
            return <line key={`d-${angle}`} x1={x1} y1={y1} x2={x2} y2={y2} />;
          })}
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo mark */}
          <div className="mb-8 flex justify-center">
            <img
              src="/assets/image.png"
              alt="Vayutaksha Consultancy"
              className="h-36 w-auto object-contain animate-in fade-in slide-in-from-bottom-4 duration-700"
            />
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 leading-tight">
            Precision Structures.
            <span className="block text-primary mt-1">Trusted Analysis.</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 leading-relaxed">
            Aerospace structural design and finite element analysis consulting — delivering high-reliability engineering solutions for spacecraft, aircraft, and ground systems.
          </p>

          {/* Decorative Sanskrit-inspired tagline */}
          <p className="font-display text-base italic text-accent-foreground/70 mb-10 animate-in fade-in duration-700 delay-200">
            "Where the wind meets the sky, structure meets purpose."
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <button
              onClick={() => scrollToSection('work')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-semibold rounded hover:bg-primary/90 transition-all hover:scale-105 shadow-warm hover:shadow-warm-lg tracking-wide"
            >
              View Our Work
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary/40 text-foreground font-body font-semibold rounded hover:bg-primary/8 transition-all hover:scale-105 tracking-wide"
            >
              Begin a Conversation
              <Mail className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-6 h-10 border-2 border-muted-foreground/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-muted-foreground/40 rounded-full" />
        </div>
      </div>
    </section>
  );
}

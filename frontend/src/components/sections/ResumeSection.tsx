import { Briefcase } from 'lucide-react';

export function ResumeSection() {
  return (
    <section id="resume" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-body text-xs tracking-[0.25em] uppercase text-primary mb-3">Our Credentials</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Professional Background
            </h2>
            <div className="ornament-divider max-w-xs mx-auto mb-6">
              <span className="text-primary text-lg">✦</span>
            </div>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              A foundation built on rigorous engineering education and mission-critical aerospace experience.
            </p>
          </div>

          {/* Professional Summary */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              Professional Summary
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              Aerospace structural design and analysis engineer with expertise in structural design, operational systems setup, and facility infrastructure development. Proven track record in multidisciplinary collaboration and delivering high-reliability aerospace solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

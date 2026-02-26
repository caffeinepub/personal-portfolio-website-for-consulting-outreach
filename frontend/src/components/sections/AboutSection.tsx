import { Target, Layers, Award, Wrench } from 'lucide-react';

const highlights = [
  {
    icon: Target,
    title: 'Precision FEA',
    description: 'Linear and nonlinear structural analysis with validated accuracy for critical aerospace applications.',
  },
  {
    icon: Layers,
    title: 'Multidisciplinary',
    description: 'Seamless collaboration across structural, materials, systems, and manufacturing disciplines.',
  },
  {
    icon: Wrench,
    title: 'Structural Design',
    description: 'Primary structure design for spacecraft modules, aircraft airframes, and ground support equipment.',
  },
  {
    icon: Award,
    title: 'Mission-Critical',
    description: 'Proven track record on human spaceflight and advanced aircraft programs demanding zero-failure standards.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-body text-xs tracking-[0.25em] uppercase text-primary mb-3">Who We Are</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Vayutaksha
            </h2>
            <div className="ornament-divider max-w-xs mx-auto">
              <span className="text-primary text-lg">✦</span>
            </div>
          </div>

          {/* Main Description */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                Vayutaksha Consultancy is a specialized aerospace engineering practice focused on structural design and finite element analysis. We bring deep expertise in designing structures that endure the most demanding load environments across the full spectrum of aerospace applications.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                Our work spans spacecraft crew modules, aircraft structures, ground support equipment, and design for manufacturing and assembly. We combine rigorous analytical methods with automation tools to deliver reliable, well-documented engineering solutions.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Rooted in humility and a commitment to truth in engineering, we approach every project with the patience of a craftsman and the precision of a scientist — ensuring that every structure we design can be trusted with lives and missions.
              </p>

              {/* Highlights */}
              <div className="mt-8 space-y-3">
                {[
                  'Nonlinear FEA with geometric and material nonlinearities',
                  'Systems integration and multidisciplinary collaboration',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-primary mt-1 text-lg leading-none">✦</span>
                    <span className="font-body text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-5">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="p-6 bg-card border border-border rounded-lg hover:shadow-warm transition-all hover:-translate-y-1 group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

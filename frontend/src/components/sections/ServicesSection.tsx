import {
  Cpu,
  PenTool,
  Building2,
  ChevronRight,
} from 'lucide-react';

const services = [
  {
    icon: Cpu,
    title: 'Structural Analysis & FEA',
    description:
      'Comprehensive finite element analysis for aerospace and industrial structures using ANSYS Mechanical and ABAQUS. We handle linear and nonlinear static analyses, contact simulations, shell-beam modeling, and results validation against design requirements.',
    engagements: [
      'Linear and nonlinear static analysis',
      'Material and geometric nonlinearity modeling',
      'Contact and boundary condition setup',
      'Results validation and technical reporting',
    ],
  },
  {
    icon: PenTool,
    title: 'Aerospace Structural Design',
    description:
      'Primary structure design for spacecraft modules, aircraft airframes, and launch vehicle components. We optimize load paths, size joints and fasteners, and ensure designs are manufacturable and compliant with program specifications.',
    engagements: [
      'Primary structure design and sizing',
      'Load path optimization and trade studies',
      'Joint and fastener margin calculations',
      'Design for manufacturing and assembly',
    ],
  },
  {
    icon: Building2,
    title: 'Facility & Lab Infrastructure Setup',
    description:
      'End-to-end aerospace manufacturing facility setup including facility layout design, process workflow development, and equipment procurement. We identify, evaluate, and source machinery, tooling, and support systems for general aerospace manufacturing operations.',
    engagements: [
      'Lab layout and workflow design',
      'Equipment specification and procurement',
      'Aerospace manufacturing process setup',
      'Vendor partnerships and negotiations',
    ],
  },
];

export function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-body text-xs tracking-[0.25em] uppercase text-primary mb-3">What We Offer</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Services
            </h2>
            <div className="ornament-divider max-w-xs mx-auto mb-6">
              <span className="text-primary text-lg">✦</span>
            </div>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized aerospace engineering services delivered with precision, integrity, and deep domain expertise.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-8 hover:shadow-warm-lg transition-all hover:-translate-y-1 group flex flex-col"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors shrink-0">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="font-body text-muted-foreground leading-relaxed mb-6 flex-1 text-sm">
                    {service.description}
                  </p>

                  <div className="border-t border-border pt-5">
                    <h4 className="font-body text-xs font-semibold text-foreground mb-3 tracking-widest uppercase">
                      Engagements Include
                    </h4>
                    <ul className="space-y-2">
                      {service.engagements.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                          <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <p className="font-body text-muted-foreground mb-6">
              Have a project in mind? Let's discuss how we can help.
            </p>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-body font-medium rounded hover:bg-primary/90 transition-colors"
            >
              Start a Conversation
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

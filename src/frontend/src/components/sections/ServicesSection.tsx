import { Briefcase, LineChart, Lightbulb, Rocket, Settings, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    title: 'Strategy Consulting',
    description: 'Develop comprehensive strategies that align with your business goals and market opportunities.',
    engagements: [
      'Strategic planning workshops',
      'Market analysis and positioning',
      'Business model development',
      'Growth strategy roadmaps',
    ],
  },
  {
    icon: Rocket,
    title: 'Digital Transformation',
    description: 'Guide your organization through technology adoption and digital-first operational models.',
    engagements: [
      'Technology stack assessment',
      'Digital maturity evaluation',
      'Implementation roadmaps',
      'Change management support',
    ],
  },
  {
    icon: Settings,
    title: 'Operational Excellence',
    description: 'Optimize processes, reduce costs, and improve efficiency across your organization.',
    engagements: [
      'Process mapping and redesign',
      'Performance metrics design',
      'Workflow automation',
      'Quality improvement programs',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Growth & Scaling',
    description: 'Build scalable systems and strategies to support rapid growth and market expansion.',
    engagements: [
      'Go-to-market strategy',
      'Sales process optimization',
      'Organizational scaling',
      'Partnership development',
    ],
  },
  {
    icon: LineChart,
    title: 'Data & Analytics',
    description: 'Leverage data-driven insights to make informed decisions and measure impact.',
    engagements: [
      'Analytics framework design',
      'Dashboard development',
      'Predictive modeling',
      'KPI definition and tracking',
    ],
  },
  {
    icon: Briefcase,
    title: 'Interim Leadership',
    description: 'Step into executive roles to drive critical initiatives and bridge leadership gaps.',
    engagements: [
      'Interim C-suite roles',
      'Project leadership',
      'Team building and mentoring',
      'Crisis management',
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Services
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive consulting services tailored to your unique challenges and opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 group"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="border-t border-border pt-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Typical Engagements:</h4>
                    <ul className="space-y-2">
                      {service.engagements.map((engagement, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{engagement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Need something specific? I offer customized consulting packages tailored to your needs.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all hover:scale-105"
            >
              Let's Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

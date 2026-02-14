import { Award, Target, Users, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Target,
    title: 'Strategic Vision',
    description: 'Aligning business objectives with actionable roadmaps',
  },
  {
    icon: Zap,
    title: 'Rapid Execution',
    description: 'Delivering results through agile methodologies',
  },
  {
    icon: Users,
    title: 'Collaborative Approach',
    description: 'Building consensus across stakeholder groups',
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description: '10+ years driving measurable business outcomes',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a strategic consultant specializing in digital transformation, operational excellence, and growth strategy. With over a decade of experience across Fortune 500 companies and high-growth startups, I help organizations navigate complexity and achieve sustainable results.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                My approach combines analytical rigor with creative problem-solving, ensuring that every recommendation is both data-driven and practically implementable. I believe in building lasting partnerships with clients, not just delivering reports.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're scaling operations, entering new markets, or optimizing existing processes, I bring the expertise and dedication needed to turn your vision into reality.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-muted/50 rounded-2xl p-8 md:p-12">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">Core Competencies</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Strategy & Planning</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Business model innovation</li>
                  <li>• Market entry strategy</li>
                  <li>• Competitive analysis</li>
                  <li>• Strategic roadmapping</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Operations</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Process optimization</li>
                  <li>• Change management</li>
                  <li>• Performance metrics</li>
                  <li>• Organizational design</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Technology</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Digital transformation</li>
                  <li>• Technology assessment</li>
                  <li>• Data analytics</li>
                  <li>• Product development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

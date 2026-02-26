import { ProjectCard } from '../ProjectCard';
import { projects } from '../../data/projects';

export function WorkSection() {
  return (
    <section id="work" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-body text-xs tracking-[0.25em] uppercase text-primary mb-3">Our Portfolio</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="ornament-divider max-w-xs mx-auto mb-6">
              <span className="text-primary text-lg">✦</span>
            </div>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of structural design and analysis work spanning spacecraft, aircraft, and ground systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

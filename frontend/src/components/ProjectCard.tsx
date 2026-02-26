import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-warm-lg transition-all hover:-translate-y-1 group flex flex-col">
      {project.image && (
        <div className="relative h-56 overflow-hidden bg-muted shrink-0">
          <img
            src={project.image.src}
            alt={project.image.alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      <div className="p-8 flex flex-col flex-1">
        <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
          {project.title}
        </h3>

        <p className="font-body text-muted-foreground leading-relaxed flex-1">
          {project.description}
        </p>
      </div>
    </div>
  );
}

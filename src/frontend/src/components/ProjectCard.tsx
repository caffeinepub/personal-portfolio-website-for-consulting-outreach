import { ExternalLink, Github } from 'lucide-react';
import { SafeExternalLink } from './SafeExternalLink';
import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group">
      <div className="p-8">
        <h3 className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-foreground mb-2">Role & Technologies:</h4>
          <p className="text-sm text-muted-foreground">{project.roleStack}</p>
        </div>

        {(project.links.demo || project.links.repository) && (
          <div className="flex flex-wrap gap-3 pt-6 border-t border-border">
            {project.links.demo && (
              <SafeExternalLink
                href={project.links.demo}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                View Project
              </SafeExternalLink>
            )}
            
            {project.links.repository && (
              <SafeExternalLink
                href={project.links.repository}
                className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/80 transition-all hover:scale-105"
              >
                <Github className="w-4 h-4" />
                Repository
              </SafeExternalLink>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

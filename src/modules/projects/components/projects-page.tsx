import { Button } from "@/components/ui/button";

import { ProjectCard } from "./project-card";
import { projects } from "../data/projects";

export function ProjectsPage() {
  return (
    <section className="flex flex-1 flex-col gap-8">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>

          <p className="mt-1 text-sm text-muted-foreground">
            Manage all your client and personal projects.
          </p>
        </div>

        <Button>New Project</Button>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            description={project.description}
            status={project.status}
            updatedAt={project.updatedAt}
            clients={project.clients}
            environments={project.environments}
            services={project.services}
          />
        ))}
      </div>
    </section>
  );
}

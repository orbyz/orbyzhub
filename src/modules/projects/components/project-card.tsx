import { Calendar, FolderKanban, MoreHorizontal } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import type { Project } from "../types/project";

type ProjectCardProps = Pick<
  Project,
  | "name"
  | "description"
  | "status"
  | "updatedAt"
  | "clients"
  | "environments"
  | "services"
>;

export function ProjectCard({
  name,
  description,
  status,
  updatedAt,
  clients,
  environments,
  services,
}: ProjectCardProps) {
  return (
    <article
      className="
        group
        rounded-xl
        border
        bg-card
        p-6
        transition-all
        duration-200
        hover:-translate-y-1
        hover:border-primary/40
        hover:bg-accent/40
        hover:shadow-lg
      "
    >
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg border bg-muted">
          <FolderKanban className="h-6 w-6" />
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="opacity-0 transition-opacity group-hover:opacity-100"
        >
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </div>

      <div className="mt-5 space-y-3">
        <div>
          <h2 className="text-lg font-semibold transition-colors group-hover:text-primary">
            {name}
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        </div>

        <Badge variant="secondary">{status}</Badge>

        <div className="grid grid-cols-3 gap-3 rounded-lg border bg-muted/40 p-3">
          <div className="text-center">
            <p className="text-lg font-semibold">{clients}</p>
            <p className="text-xs text-muted-foreground">Clients</p>
          </div>

          <div className="text-center">
            <p className="text-lg font-semibold">{environments}</p>
            <p className="text-xs text-muted-foreground">Environments</p>
          </div>

          <div className="text-center">
            <p className="text-lg font-semibold">{services}</p>
            <p className="text-xs text-muted-foreground">Services</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>Updated {updatedAt}</span>
        </div>

        <Badge variant="secondary">{status}</Badge>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="h-4 w-4" />

          <span>Updated {updatedAt}</span>
        </div>
      </div>
    </article>
  );
}

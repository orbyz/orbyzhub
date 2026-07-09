"use client";

import { useState } from "react";

import { Calendar, FolderKanban, MoreHorizontal } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import type { Project } from "../types/project";

type ProjectCardProps = {
  project: Project;
  onDelete: (id: number) => void;
  onEdit: (project: Project) => void;
};

export function ProjectCard({ project, onDelete, onEdit }: ProjectCardProps) {
  const {
    name,
    description,
    status,
    updatedAt,
    clients,
    environments,
    services,
  } = project;
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

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

        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="opacity-0 transition-opacity group-hover:opacity-100"
              />
            }
          >
            <MoreHorizontal className="h-4 w-4" />
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onEdit(project)}>
              Edit project
            </DropdownMenuItem>
            <DropdownMenuItem
              variant="destructive"
              onClick={() => setDeleteDialogOpen(true)}
            >
              Delete project
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
      </div>
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete project?</AlertDialogTitle>

            <AlertDialogDescription>
              This action cannot be undone. The project
              <strong> {project.name}</strong> will be permanently removed.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>

            <AlertDialogAction
              variant="destructive"
              onClick={() => {
                onDelete(project.id);
                setDeleteDialogOpen(false);
              }}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </article>
  );
}

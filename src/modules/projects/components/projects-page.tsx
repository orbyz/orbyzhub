"use client";

import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import { projects } from "../data/projects";
import type { Project } from "../types/project";

import { NewProjectDialog } from "./new-project-dialog";
import { ProjectCard } from "./project-card";

export type CreateProjectInput = {
  name: string;
  description: string;
};

export type CreateProjectResult =
  | {
      success: true;
    }
  | {
      success: false;
      message: string;
    };

export function ProjectsPage() {
  const [projectList, setProjectList] = useState<Project[]>(projects);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  function openCreateDialog() {
    setEditingProject(null);
    setDialogOpen(true);
  }

  function openEditDialog(project: Project) {
    setEditingProject(project);
    setDialogOpen(true);
  }

  function closeDialog() {
    setDialogOpen(false);
    setEditingProject(null);
  }

  function handleCreateProject({
    name,
    description,
  }: CreateProjectInput): CreateProjectResult {
    const normalizedName = name.trim().toLowerCase();

    const exists = projectList.some(
      (project) => project.name.trim().toLowerCase() === normalizedName,
    );

    if (exists) {
      return {
        success: false,
        message: "A project with this name already exists.",
      };
    }

    const newProject: Project = {
      id: Date.now(),
      name: name.trim(),
      description: description.trim(),
      status: "Active",
      updatedAt: "just now",
      clients: 0,
      environments: 0,
      services: 0,
    };

    setProjectList((current) => [newProject, ...current]);

    toast.success("Project created successfully.");

    closeDialog();

    return {
      success: true,
    };
  }

  function handleUpdateProject(
    id: number,
    data: CreateProjectInput,
  ): CreateProjectResult {
    const normalizedName = data.name.trim().toLowerCase();

    const exists = projectList.some(
      (project) =>
        project.id !== id &&
        project.name.trim().toLowerCase() === normalizedName,
    );

    if (exists) {
      return {
        success: false,
        message: "A project with this name already exists.",
      };
    }

    setProjectList((current) =>
      current.map((project) =>
        project.id === id
          ? {
              ...project,
              name: data.name.trim(),
              description: data.description.trim(),
              updatedAt: "just now",
            }
          : project,
      ),
    );

    toast.success("Project updated successfully.");

    closeDialog();

    return {
      success: true,
    };
  }

  function handleDeleteProject(id: number) {
    const project = projectList.find((project) => project.id === id);

    if (!project) return;

    setProjectList((current) => current.filter((project) => project.id !== id));

    toast.success(`"${project.name}" has been deleted.`);
  }

  return (
    <section className="flex flex-1 flex-col gap-8">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>

          <p className="mt-1 text-sm text-muted-foreground">
            Manage all your client and personal projects.
          </p>
        </div>

        <Button onClick={openCreateDialog}>New Project</Button>
      </header>

      {projectList.length === 0 ? (
        <div className="flex min-h-[320px] flex-col items-center justify-center rounded-xl border border-dashed bg-muted/20 text-center">
          <h2 className="text-xl font-semibold">No projects yet</h2>

          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            Create your first project to start managing clients, environments
            and services.
          </p>

          <Button className="mt-6" onClick={openCreateDialog}>
            New Project
          </Button>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projectList.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onDelete={handleDeleteProject}
              onEdit={openEditDialog}
            />
          ))}
        </div>
      )}

      <NewProjectDialog
        open={dialogOpen}
        project={editingProject}
        onOpenChange={(open) => {
          if (!open) {
            closeDialog();
          }
        }}
        onCreate={handleCreateProject}
        onUpdate={handleUpdateProject}
      />
    </section>
  );
}

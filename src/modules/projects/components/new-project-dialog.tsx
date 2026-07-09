"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import type { Project } from "../types/project";
import type { CreateProjectInput, CreateProjectResult } from "./projects-page";

type NewProjectDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: Project | null;
  onCreate: (project: CreateProjectInput) => CreateProjectResult;
  onUpdate: (id: number, project: CreateProjectInput) => CreateProjectResult;
};

export function NewProjectDialog(props: NewProjectDialogProps) {
  const formKey = props.project?.id ?? "new";

  return (
    <Dialog
      open={props.open}
      onOpenChange={(open) => {
        if (!open) {
          props.onOpenChange(false);
        }
      }}
    >
      <DialogContent className="sm:max-w-lg">
        <ProjectForm key={formKey} {...props} />
      </DialogContent>
    </Dialog>
  );
}

type ProjectFormProps = NewProjectDialogProps;

function ProjectForm({
  project,
  onCreate,
  onUpdate,
  onOpenChange,
}: ProjectFormProps) {
  const [name, setName] = useState(project?.name ?? "");
  const [description, setDescription] = useState(project?.description ?? "");
  const [error, setError] = useState("");

  function handleSubmit() {
    const payload: CreateProjectInput = {
      name: name.trim(),
      description: description.trim(),
    };

    const result: CreateProjectResult = project
      ? onUpdate(project.id, payload)
      : onCreate(payload);

    if (!result.success) {
      setError(result.message);
      return;
    }

    onOpenChange(false);
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle>{project ? "Edit Project" : "Create Project"}</DialogTitle>

        <DialogDescription>
          {project
            ? "Update your project information."
            : "Add a new project to your workspace."}
        </DialogDescription>
      </DialogHeader>

      <div className="grid gap-6 py-2">
        <div className="grid gap-2">
          <Label htmlFor="project-name">Project name</Label>

          <Input
            id="project-name"
            placeholder="OrByZ Hub"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
              if (error) {
                setError("");
              }
            }}
          />

          {error && <p className="text-sm text-destructive">{error}</p>}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="project-description">Description</Label>

          <Textarea
            id="project-description"
            rows={4}
            placeholder="Describe the purpose of this project..."
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </div>
      </div>

      <DialogFooter>
        <DialogClose render={<Button variant="outline" />}>Cancel</DialogClose>

        <Button disabled={!name.trim()} onClick={handleSubmit}>
          {project ? "Save Changes" : "Create Project"}
        </Button>
      </DialogFooter>
    </>
  );
}

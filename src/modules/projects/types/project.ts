export type ProjectStatus = "Active" | "Archived";

export interface Project {
  id: number;
  name: string;
  description: string;
  status: ProjectStatus;
  updatedAt: string;

  clients: number;
  environments: number;
  services: number;
}

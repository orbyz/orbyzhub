import { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: 1,
    name: "OrByZ Hub",
    description: "Internal workspace and business management platform.",
    status: "Active",
    updatedAt: "today",
    clients: 3,
    environments: 4,
    services: 12,
  },
  {
    id: 2,
    name: "OrByZ Studio",
    description: "Agency website and digital services platform.",
    status: "Active",
    updatedAt: "2 days ago",
    clients: 8,
    environments: 2,
    services: 6,
  },
  {
    id: 3,
    name: "SafeFind",
    description: "Volunteer platform for locating missing people.",
    status: "Active",
    updatedAt: "last week",
    clients: 1,
    environments: 1,
    services: 3,
  },
];

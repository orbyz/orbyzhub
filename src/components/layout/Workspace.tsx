import type { PropsWithChildren } from "react";

export function Workspace({ children }: PropsWithChildren) {
  return (
    <main className="flex-1 overflow-auto p-6">{children || "Workspace"}</main>
  );
}

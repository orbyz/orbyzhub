import type { PropsWithChildren } from "react";

export function Workspace({ children }: PropsWithChildren) {
  return <main className="flex-1">{children}</main>;
}

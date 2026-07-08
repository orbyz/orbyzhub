import type { PropsWithChildren } from "react";

export function HeaderContent({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-1 items-center justify-between">{children}</div>
  );
}

import type { PropsWithChildren } from "react";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { StatusBar } from "./StatusBar";
import { Workspace } from "./Workspace";

export function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <Header />

        <Workspace>{children}</Workspace>

        <StatusBar />
      </div>
    </div>
  );
}

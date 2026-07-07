import type { PropsWithChildren } from "react";

import { AppLayout } from "@/components/layout/AppLayout";

export default function WorkspaceLayout({ children }: PropsWithChildren) {
  return <AppLayout>{children}</AppLayout>;
}

import { SidebarBrand } from "./SidebarBrand";
import { SidebarNavigation } from "./SidebarNavigation";
import { SidebarRecentProjects } from "./SidebarRecentProjects";
import { SidebarSearch } from "./SidebarSearch";
import { SidebarUser } from "./SidebarUser";

export function Sidebar() {
  return (
    <aside
      className="flex h-screen shrink-0 flex-col border-r p-4"
      style={{ width: "var(--layout-sidebar-width)" }}
    >
      <SidebarBrand />

      <SidebarSearch />

      <SidebarNavigation />

      <SidebarRecentProjects />

      <SidebarUser />
    </aside>
  );
}

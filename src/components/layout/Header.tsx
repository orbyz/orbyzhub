import { HeaderBreadcrumb } from "./HeaderBreadcrumb";
import { HeaderContent } from "./HeaderContent";

export function Header() {
  return (
    <header className="flex h-[var(--layout-header-height)] items-center border-b px-6">
      <HeaderContent>
        <HeaderBreadcrumb />
      </HeaderContent>
    </header>
  );
}

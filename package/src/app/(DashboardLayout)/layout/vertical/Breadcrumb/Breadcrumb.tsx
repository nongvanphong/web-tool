import { Icon } from "@iconify/react/dist/iconify.js";
import SidebarContent, { ChildItem, MenuItem } from "../sidebar/Sidebaritems";
import { usePathname } from "next/navigation";
import Link from "next/link";

import Card from "@/app/components/common/card";

const findMenuName = (
  menu: MenuItem[] | ChildItem[],
  path: string,
): { name: string | null; path: string | null } | null => {
  for (const item of menu) {
    if (item.url === path)
      return { name: item.name ?? null, path: item.url ?? null };
    if (item.children) {
      const found = findMenuName(item.children, path);
      if (found) return found;
    }
  }
  return null;
};

const Breadcrumb = () => {
  const pathname = usePathname();
  const menuName = findMenuName(SidebarContent, pathname);
  return (
    <div className="py-3 sm:px-30 px-4">
      <Card className="flex justify-between">
        <h6>{menuName?.name}</h6>
        <div className="flex gap-1">
          <Link href={SidebarContent[0].children![0].url}>
            <Icon icon={SidebarContent[0].children![0].icon} height={18} />
          </Link>
          <div> / {menuName?.name}</div>
        </div>
      </Card>
    </div>
  );
};

export default Breadcrumb;

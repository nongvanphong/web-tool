import { Icon } from "@iconify/react/dist/iconify.js";
import { usePathname } from "next/navigation";
import Link from "next/link";

import Card from "@/app/components/common/card";
import { DNavigator } from "@/app/data";
import { INavigator } from "@/app/types";

const findBreadcrumbs = (
  menu: INavigator[],
  url: string,
  parentUrl: string = "",
  breadcrumbs: INavigator[] = [],
): INavigator[] => {
  url = url.replace(/\/$/, "") || "/"; // Xóa `/` cuối cùng nhưng giữ nguyên `/`

  for (const item of menu) {
    // Xây dựng đường dẫn đầy đủ của item
    const fullPath = parentUrl + (item.url !== "/" ? item.url : "");
    const cleanedFullPath = fullPath.replace(/\/$/, "") || "/"; // Xóa `/` cuối

    if (url === cleanedFullPath || url.startsWith(cleanedFullPath + "/")) {
      breadcrumbs.push({ ...item, url: cleanedFullPath });

      if (item.children) {
        const found = findBreadcrumbs(
          item.children,
          url,
          cleanedFullPath,
          breadcrumbs,
        );
        if (found.length > 0) return found; // Nếu tìm thấy thì return ngay
      }

      return breadcrumbs; // Nếu không có children hoặc đã tìm thấy
    }
  }

  return []; // Không tìm thấy đường dẫn phù hợp
};

const Breadcrumb = () => {
  const pathname = usePathname();

  const breadcrumbs = findBreadcrumbs(DNavigator, pathname);

  return (
    <div className="py-3 sm:px-30 px-4">
      <Card className="flex justify-between">
        <h6>
          {breadcrumbs.length > 0 ? (breadcrumbs.at(-1)?.name ?? "") : ""}
        </h6>

        <div className="flex gap-1">
          <Link href={DNavigator[0].url}>
            <Icon icon={DNavigator[0].icon} height={18} />
          </Link>
          {breadcrumbs.map((crumb, index) => (
            <Link key={index} href={crumb.url}>
              / {crumb?.name}
            </Link>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Breadcrumb;

export interface ChildItem {
  id?: number | string;
  name?: string;
  icon?: any;
  children?: ChildItem[];
  item?: any;
  url?: any;
  color?: string;
}

export interface MenuItem {
  heading?: string;
  name?: string;
  icon?: any;
  id?: number;
  to?: string;
  items?: MenuItem[];
  children?: ChildItem[];
  url?: any;
}

import { DNavigator } from "@/app/data";

const SidebarContent: MenuItem[] = [
  {
    heading: "Bảng điều khiển",
    children: [DNavigator[0]],
  },
  {
    heading: "Tiện ích",
    children: [
      {
        id: DNavigator[1].id,
        name: DNavigator[1].name,
        url: DNavigator[1].url,
        icon: DNavigator[1].icon,
      },
      DNavigator[2],
      DNavigator[3],
      DNavigator[4],
    ],
  },
  {
    heading: "Xác minh",
    children: [DNavigator[5], DNavigator[6]],
  },
  {
    heading: "Extra",
    children: [DNavigator[7], DNavigator[8]],
  },
];

export default SidebarContent;

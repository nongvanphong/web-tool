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

import { uniqueId } from "lodash";

const SidebarContent: MenuItem[] = [
  {
    heading: "Bảng điều khiển",
    children: [
      {
        name: "Trung tâm",
        icon: "solar:widget-add-line-duotone",
        id: uniqueId(),
        url: "/",
      },
    ],
  },
  {
    heading: "Tiện ích",
    children: [
      {
        name: "Bot Facebook",
        icon: "fa-brands:facebook",
        id: uniqueId(),
        url: "/ui/facebookbot",
        // url: "/ui/typography",
      },
      {
        name: "Bot Telegarm",
        icon: "fa-brands:telegram-plane",
        id: uniqueId(),
        // url: "/ui/table",
        url: "/ui/telegrambot",
      },
      {
        name: "Form",
        icon: "solar:password-minimalistic-outline",
        id: uniqueId(),
        url: "/ui/form",
      },
      {
        name: "Shadow",
        icon: "solar:airbuds-case-charge-outline",
        id: uniqueId(),
        url: "/ui/shadow",
      },
    ],
  },
  {
    heading: "Xác minh",
    children: [
      {
        name: "Đăng nhập",
        icon: "solar:login-2-linear",
        id: uniqueId(),
        url: "/auth/login",
      },
      {
        name: "Đăng ký",
        icon: "solar:shield-user-outline",
        id: uniqueId(),
        url: "/auth/register",
      },
    ],
  },
  {
    heading: "Extra",
    children: [
      {
        name: "Icons",
        icon: "solar:smile-circle-outline",
        id: uniqueId(),
        url: "/icons/solar",
      },
      {
        name: "Sample Page",
        icon: "solar:notes-minimalistic-outline",
        id: uniqueId(),
        url: "/sample-page",
      },
    ],
  },
];

export default SidebarContent;

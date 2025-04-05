import type { UserInfo } from "./types";
import type { MenuItems } from "~/types/menu";

export interface ComponentSidebarProps {
  user: UserInfo;
  componentMenu?: string;
}

export interface ComponentMenuProps {
  user: UserInfo;
  menuItems: MenuItems;
  position: string;
}

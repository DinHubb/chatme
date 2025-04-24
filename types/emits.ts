import type { CallMenu } from "./menu";

export interface ComponentSidebarEmits {
  next: [value: CallMenu];
  goBack: [];
}

export interface ComponentMenuEmits {
  selectMenuItem: [value: CallMenu];
}

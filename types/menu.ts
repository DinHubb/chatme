import type { Component } from "vue";

export type CallMenu = Component | Function | undefined;

export type MenuItem = {
  name: string;
  avatar?: string;
  prefixIcon?: any;
  suffixIcon?: string;
  call?: CallMenu;
};

export type MenuItems = {
  accounts?: MenuItem[];
  additionals: MenuItem[];
};

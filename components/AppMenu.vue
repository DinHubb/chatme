<script setup lang="ts">
import { CogIcon, EllipsisVerticalIcon } from "@heroicons/vue/20/solid";
import { Bars3Icon } from "@heroicons/vue/24/solid";

type MenuItem = {
  name: string;
  avatar?: string;
  prefixIcon?: any;
  suffixIcon?: string;
  call?: string;
};

type MenuItems = {
  accounts: MenuItem[];
  additionals: MenuItem[];
};

const props = defineProps<{
  user: any;
}>();
const emit = defineEmits<{
  logout: [];
  selectMenuItem: [value: string];
}>();

const menuItems: MenuItems = {
  accounts: [
    {
      name: props.user?.username,
      avatar: props.user?.avatar,
      call: "setting",
    },
  ],
  additionals: [
    {
      name: "Settings",
      prefixIcon: CogIcon,
      suffixIcon: "",
      call: "settings",
    },
    {
      name: "More",
      prefixIcon: EllipsisVerticalIcon,
      suffixIcon: "",
    },
  ],
};

function handleSelectMenuItem(menuItem: MenuItem) {
  if (menuItem.call) {
    emit("selectMenuItem", menuItem.call);
  }
}
</script>
<template>
  <div>
    <HeadlessMenu>
      <HeadlessMenuButton>
        <UIButton :class-name="'p-2 hover:bg-hgray'">
          <Bars3Icon class="fill-secondary stroke-2 w-6 h-6" /> </UIButton
      ></HeadlessMenuButton>
      <transition
        enter-active-class="transition-opacity transition-transform duration-200 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)]"
        enter-from-class="opacity-0 scale-95 -translate-x-2 -translate-y-2"
        enter-to-class="opacity-100 scale-100 translate-x-0 translate-y-0"
        leave-active-class="transition-opacity transition-transform duration-200 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)]"
        leave-from-class="opacity-100 scale-100 translate-x-0 translate-y-0"
        leave-to-class="opacity-0 scale-95 -translate-x-2 -translate-y-2"
      >
        <HeadlessMenuItems
          class="mt-2 py-1.5 w-auto absolute text-sm font-medium rounded-lg shadow-[0px_0px_10px_rgba(0,0,0,0.15)] bg-white/85 backdrop-blur-2xl"
        >
          <HeadlessMenuItem
            v-slot="{ active }"
            v-for="menu in menuItems.accounts"
          >
            <button
              class="flex items-center min-w-48 max-w-48 min-h-8 mx-1 w-full py-1 pl-3 pr-1.5"
              :class="{
                'bg-lightSecond transition-all duration-200 ease-in-out rounded-md':
                  active,
              }"
              @click="handleSelectMenuItem(menu)"
            >
              <div class="mr-[18px] -ml-0.5 w-6 h-6 max-w-6 max-h-6 flex">
                <UIProfileAvatar
                  :user="user"
                  :className="'w-6 h-6 text-[0.56rem] ring-1 ring-tg ring-offset-2'"
                />
              </div>
              <span class="w-full text-left flex-auto">
                {{ menu.name }}
              </span>
            </button>
          </HeadlessMenuItem>
          <hr class="my-1.5 border-brcolor opacity-60" />
          <HeadlessMenuItem
            v-slot="{ active }"
            v-for="menu in menuItems.additionals"
          >
            <button
              class="flex items-center min-w-48 max-w-48 min-h-8 mx-1 w-full py-1 pl-3 pr-1.5"
              :class="{
                'bg-lightSecond transition-all duration-200 ease-in-out rounded-md':
                  active,
              }"
              @click="handleSelectMenuItem(menu)"
            >
              <span class="mr-5 flex items-center w-6 h-6">
                <component :is="menu.prefixIcon" class="w-5 h-5" />
              </span>
              <span class="w-full text-left flex-auto">
                {{ menu.name }}
                <span v-if="menu.suffixIcon" class="ml-2">
                  <component :is="menu.prefixIcon" class="w-5 h-5" />
                </span>
              </span>
            </button>
          </HeadlessMenuItem>
        </HeadlessMenuItems>
      </transition>
    </HeadlessMenu>
  </div>
</template>
<!-- <button @click="emit('logout')" :class="{ 'bg-blue-500': active }">
  logout
</button> -->

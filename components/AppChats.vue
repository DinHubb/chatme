<script setup lang="ts">
import type { ComponentSidebarProps } from "~/types/props";
import type { ComponentSidebarEmits } from "~/types/emits";
import type { CallMenu, MenuItem, MenuItems } from "~/types/menu";
import { CogIcon, EllipsisVerticalIcon } from "@heroicons/vue/20/solid";
import { Bars3Icon } from "@heroicons/vue/24/solid";
import AppSetting from "./AppSetting.vue";
import type { Component } from "vue";

const { toLocaleTime } = useToLocaleTime();
const { createRipple } = useRipple();

const props = defineProps<ComponentSidebarProps>();
const emit = defineEmits<ComponentSidebarEmits>();

const menuItems: MenuItems = {
  accounts: [
    {
      name: props.user?.username,
      avatar: props.user?.avatar,
      call: AppSetting,
    },
  ],
  additionals: [
    {
      name: "Settings",
      prefixIcon: CogIcon,
      suffixIcon: "",
      call: AppSetting,
    },
    {
      name: "More",
      prefixIcon: EllipsisVerticalIcon,
      suffixIcon: "",
      call: undefined,
    },
  ],
};

const handleSelectMenuItem = (menuItem: CallMenu) => {
  if (!menuItem) return;
  emit("next", menuItem);
};
</script>

<template>
  <div class="absolute w-full bg-white h-full">
    <div class="bg-white z-10 px-4 py-2">
      <div class="flex items-center space-x-4">
        <UIMenu
          :user="user"
          :menu-items="menuItems"
          :position="'left'"
          @select-menu-item="handleSelectMenuItem"
        >
          <template #menu-button>
            <UIButton :class-name="'p-2 hover:bg-hgray'">
              <Bars3Icon class="fill-secondary stroke-2 w-6 h-6" />
            </UIButton>
          </template>
        </UIMenu>
        <UISearch />
      </div>
    </div>
    <ul class="flex flex-col w-full p-2 max-h-[calc(100vh-50px)] overflow-auto">
      <li
        v-for="chat in user.chats"
        class="flex relative overflow-hidden"
        @click="createRipple"
      >
        <NuxtLink
          class="w-full p-2 rounded-xl"
          :to="`#${chat.id}`"
          :data-peer-id="chat.id"
          :class="[
            user.currentChat?.user.username === chat.user.username
              ? 'bg-tg'
              : 'hover:bg-hgray',
          ]"
        >
          <div class="flex items-center space-x-4">
            <div
              class="relative shadow bg-none w-[3.375rem] h-[3.375rem] min-w-[3.375rem] min-h-[3.375rem] rounded-full overflow-hidden"
            >
              <img
                :src="chat.user.avatar"
                alt=""
                class="object-contain min-w-full min-h-full w-full h-full bg-white"
              />
            </div>
            <div class="w-full flex justify-between space-x-2">
              <div>
                <h4
                  class="text-primary font-medium text-base"
                  :class="{
                    'text-white font-normal':
                      user.currentChat?.user.username === chat.user.username,
                  }"
                >
                  {{ chat.user.fullName }}
                </h4>
                <p
                  class="text-sm text-secondary mt-1"
                  :class="{
                    'text-white':
                      user.currentChat?.user.username === chat.user.username,
                  }"
                >
                  {{ chat.messages[chat.messages.length - 1].message }}
                </p>
              </div>
              <p
                class="text-xs text-secondary"
                :class="{
                  'text-white':
                    user.currentChat?.user.username === chat.user.username,
                }"
              >
                {{
                  toLocaleTime(
                    chat.messages[chat.messages.length - 1].createdAt
                  )
                }}
              </p>
            </div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

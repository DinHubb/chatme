<script setup lang="ts">
import {
  ArrowRightStartOnRectangleIcon,
  EllipsisVerticalIcon,
  PencilIcon,
  PhoneIcon,
} from "@heroicons/vue/24/outline";
import { ArrowLeftIcon } from "@heroicons/vue/24/outline";
import type { ComponentSidebarEmits } from "~/types/emits";
import type { CallMenu, MenuItems } from "~/types/menu";
import type { ComponentSidebarProps } from "~/types/props";
import AppEditProfile from "./AppEditProfile.vue";

const props = defineProps<ComponentSidebarProps>();
const emit = defineEmits<ComponentSidebarEmits>();
const { logout } = useAuth();

const isMessageVisible = ref<boolean>(false);
const menuItems: MenuItems = {
  additionals: [
    {
      name: "Log Out",
      prefixIcon: ArrowRightStartOnRectangleIcon,
      suffixIcon: "",
      call: logout,
    },
  ],
};

const handleSelectMenuItem = (menuItem: CallMenu) => {
  if (!menuItem) return;

  if (typeof menuItem === "function") {
    (menuItem as Function)();
  }
};

const textPopupMessage = shallowRef<string>("");
const messageStyle = shallowRef({ left: "0px", top: "0px" });
const containerRef = shallowRef<HTMLElement | null>(null);
const tooltipSize = { width: 120, height: 40 };

const findMousePosition = (event: MouseEvent) => {
  if (!containerRef.value) return;

  const rect = containerRef.value.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  let adjustedX = x;
  let adjustedY = y;

  if (adjustedX + tooltipSize.width > rect.width) {
    adjustedX = x - tooltipSize.width - 10;
  }

  if (adjustedY + tooltipSize.height > rect.height) {
    adjustedY = y - tooltipSize.height - 10;
  }

  messageStyle.value = { left: `${adjustedX}px`, top: `${adjustedY}px` };
};

const handleCopyText = (event: MouseEvent, copy: string) => {
  findMousePosition(event);
  isMessageVisible.value = true;

  navigator.clipboard
    .writeText(copy)
    .then(() => {
      textPopupMessage.value = "The text is copied";
    })
    .catch((err) => {
      textPopupMessage.value = "Error";
    })
    .finally(() => {
      setTimeout(() => {
        isMessageVisible.value = false;
      }, 2000);
    });
};
</script>

<template>
  <div class="absolute w-full h-full">
    <div class="py-2 px-4 bg-white">
      <div class="flex items-center">
        <button class="p-2 rounded-full hover:bg-hgray" @click="emit('goBack')">
          <ArrowLeftIcon class="w-6 h-6 stroke-2 stroke-secondary" />
        </button>
        <div class="flex items-center justify-between w-full">
          <div class="pl-6 first-letter:uppercase text-xl font-medium">
            {{ componentMenu }}
          </div>
          <div class="space-x-2 flex">
            <UIButton
              :class-name="' p-2 hover:bg-hgray'"
              @click="emit('next', AppEditProfile)"
            >
              <PencilIcon class="w-6 h-6 stroke-2 stroke-secondary" />
            </UIButton>

            <UIMenu
              :user="user"
              :menu-items="menuItems"
              :position="'right'"
              @select-menu-item="handleSelectMenuItem"
            >
              <template #menu-button>
                <UIButton :class-name="'p-2 hover:bg-hgray'">
                  <EllipsisVerticalIcon
                    class="w-6 h-6 stroke-[2.5px] stroke-secondary"
                  />
                </UIButton>
              </template>
            </UIMenu>
          </div>
        </div>
      </div>
      <div class="flex flex-col py-8 items-center">
        <div class="w-[120px] h-[120px] max-w-32 max-h-32 mb-4">
          <UIProfileAvatar
            :user="user"
            :class-name="'w-full h-full text-4xl'"
          />
        </div>
        <div class="text-center">
          <p class="font-medium text-xl text-ellipsis overflow-hidden break">
            {{ user.username }}
          </p>
          <span class="text-sm text-secondary">Last seen</span>
        </div>
      </div>
      <div
        ref="containerRef"
        class="relative flex rounded-xl items-center pl-[72px] py-[7px] pr-4 hover:bg-hgray -mx-2 cursor-pointer"
        @click="handleCopyText($event, user.email)"
      >
        <button class="absolute left-2 p-2">
          <PhoneIcon class="w-6 h-6 stroke-secondary" />
        </button>
        <div>
          <p class="font-light">{{ user.email }}</p>
          <span class="text-sm text-secondary">Phone</span>
        </div>
        <div
          v-if="isMessageVisible"
          class="absolute p-2 bg-black/80 z-50 text-white text-xs rounded-md transition-opacity duration-300"
          :style="messageStyle"
        >
          {{ textPopupMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

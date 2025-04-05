<script setup lang="ts">
import type { Component } from "vue";
import type { ComponentMenuEmits } from "~/types/emits";
import type { ComponentMenuProps } from "~/types/props";

const props = defineProps<ComponentMenuProps>();
const emit = defineEmits<ComponentMenuEmits>();

const transitionClasses = computed(() => {
  if (props.position === "right") {
    return {
      enterFrom: "opacity-0 scale-95 translate-x-2 -translate-y-2",
      leaveTo: "opacity-0 scale-95 translate-x-2 -translate-y-2",
    };
  }
  return {
    enterFrom: "opacity-0 scale-95 -translate-x-2 -translate-y-2",
    leaveTo: "opacity-0 scale-95 -translate-x-2 -translate-y-2",
  };
});
</script>
<template>
  <div>
    <HeadlessMenu>
      <HeadlessMenuButton>
        <slot name="menu-button"></slot>
      </HeadlessMenuButton>
      <transition
        enter-active-class="transition-opacity transition-transform duration-200 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)]"
        :enter-from-class="transitionClasses.enterFrom"
        enter-to-class="opacity-100 scale-100 translate-x-0 translate-y-0"
        leave-active-class="transition-opacity transition-transform duration-200 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)]"
        leave-from-class="opacity-100 scale-100 translate-x-0 translate-y-0"
        :leave-to-class="transitionClasses.leaveTo"
      >
        <HeadlessMenuItems
          class="mt-2.5 py-1.5 w-auto absolute text-sm font-medium rounded-lg shadow-[0px_0px_10px_rgba(0,0,0,0.15)] bg-white/85 backdrop-blur-2xl"
          :class="props.position === 'right' ? 'right-4' : 'left-4'"
        >
          <HeadlessMenuItem
            v-if="menuItems.accounts"
            v-slot="{ active }"
            v-for="menu in menuItems.accounts"
          >
            <button
              class="flex items-center min-w-48 max-w-48 min-h-8 mx-1 w-full py-1 pl-3 pr-1.5"
              :class="{
                'bg-lightSecond transition-all duration-200 ease-in-out rounded-md':
                  active,
              }"
              @click="emit('selectMenuItem', menu.call)"
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
          <hr
            v-if="
              Object.values(menuItems).some((section) => section.length > 1)
            "
            class="my-1.5 border-brcolor opacity-60"
          />
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
              @click="emit('selectMenuItem', menu.call)"
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

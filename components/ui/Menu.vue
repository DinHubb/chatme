<script setup lang="ts">
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
          class="mt-2.5 w-[200px] py-1.5 absolute z-40 text-sm font-medium rounded-lg shadow-[0px_0px_10px_rgba(0,0,0,0.15)] bg-white/85 backdrop-blur-2xl"
          :class="props.position === 'right' ? 'right-4' : 'left-4'"
        >
          <HeadlessMenuItem
            v-if="menuItems.accounts"
            v-slot="{ active }"
            v-for="(menu, index) in menuItems.accounts"
            :key="index"
          >
            <div
              class="h-8 mx-1 py-1 pl-3 pr-1.5 flex items-center overflow-hidden cursor-pointer"
              :class="{
                'bg-lightSecond transition-all duration-200 ease-in-out rounded-md':
                  active,
              }"
              @click="emit('selectMenuItem', menu.call)"
            >
              <div class="mr-5 -ml-0.5">
                <UIProfileAvatar
                  :user="user"
                  :class-name="'w-6 h-6 ring-1 ring-tg ring-offset-2 text-[0.56rem]'"
                />
              </div>
              <span class="w-full text-left flex-auto">
                {{ menu.name }}
              </span>
            </div>
          </HeadlessMenuItem>
          <hr
            v-if="
              Object.values(menuItems).some((section) => section.length > 1)
            "
            class="my-1.5 border-brcolor opacity-60"
          />
          <HeadlessMenuItem
            v-slot="{ active }"
            v-for="(menu, index) in menuItems.additionals"
            :key="index"
          >
            <div
              class="flex items-center mx-1 h-8 py-1 pl-3 pr-1.5 cursor-pointer"
              :class="{
                'bg-lightSecond transition-all duration-200 ease-in-out rounded-md':
                  active,
              }"
              @click="emit('selectMenuItem', menu.call)"
            >
              <span class="mr-5 flex items-center">
                <component :is="menu.prefixIcon" class="w-6 h-6" />
              </span>
              <span class="w-full text-left flex-auto">
                {{ menu.name }}
                <span v-if="menu.suffixIcon" class="ml-2">
                  <component :is="menu.prefixIcon" class="w-6 h-6" />
                </span>
              </span>
            </div>
          </HeadlessMenuItem>
        </HeadlessMenuItems>
      </transition>
    </HeadlessMenu>
  </div>
</template>

<script setup lang="ts">
import type { UserInfo } from "~/types/types";

const props = defineProps<{
  data: any;
}>();
const emit = defineEmits<{
  selectChat: [value: any];
}>();

const { createRipple } = useRipple();

const handleSelectChat = (event: MouseEvent, item: any) => {
  createRipple(event);

  emit("selectChat", item);
};
</script>

<template>
  <ul class="flex flex-col w-full p-2 max-h-[calc(100vh-50px)] overflow-auto">
    <li
      v-for="item in data"
      class="flex relative overflow-hidden rounded-xl"
      @click="handleSelectChat($event, item)"
    >
      <slot :item="item"></slot>
    </li>
  </ul>
</template>

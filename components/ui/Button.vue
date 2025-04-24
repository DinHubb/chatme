<script setup lang="ts">
const props = defineProps<{
  className: string;
}>();
const emit = defineEmits<{
  onClick: [];
}>();

const { createRipple } = useRipple();

function onClick(event: MouseEvent) {
  createRipple(event);
  emit("onClick");
}
</script>
<template>
  <button
    :class="[
      'relative inline-block overflow-hidden rounded-full focus:outline-none outline-none transition-all duration-200 ease-out',
      className,
    ]"
    @click="onClick($event)"
  >
    <slot></slot>
  </button>
</template>

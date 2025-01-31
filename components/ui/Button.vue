<script setup lang="ts">
const props = defineProps<{
  className: string;
}>();

const { createRipple } = useRipple();
</script>
<template>
  <button
    :class="[
      'relative inline-block overflow-hidden rounded-full focus:outline-none outline-none transition-all duration-200 ease-out',
      className,
    ]"
    @click="createRipple"
  >
    <slot></slot>
    <div class="rounded-full absolute z-10 w-full h-full inset-0"></div>
  </button>
</template>

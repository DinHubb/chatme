<script setup lang="ts">
const props = defineProps<{
  link?: string;
}>();
</script>

<template>
  <NuxtLink
    class="transition-all duration-200 ease-out hover:text-primary"
    :to="link"
  >
    <slot />
  </NuxtLink>
</template>

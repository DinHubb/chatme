<script setup lang="ts">
const { refresh } = useAuth();
await refresh();
</script>
<template>
  <div class="absolute top-0 left-0 min-h-full h-full w-full overflow-hidden">
    <slot />
  </div>
</template>

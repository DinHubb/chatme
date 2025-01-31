<script setup lang="ts">
const props = defineProps<{ type?: boolean | null }>();
</script>
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="20"
    viewBox="0 0 12 20"
    fill="none"
  >
    <path
      d="M0 19.5V0C0 7.52549 6.7304 15.3393 10.9313 19.0877C11.2826 19.4012 11.0619 20 10.5911 20H0.5C0.223858 20 0 19.7761 0 19.5Z"
      :fill="type ? '#e3fee0' : 'white'"
    />
  </svg>
</template>

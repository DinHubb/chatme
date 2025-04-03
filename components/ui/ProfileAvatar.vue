<script setup lang="ts">
const props = defineProps<{
  user: any;
  className: string;
}>();
</script>

<template>
  <div
    class="flex justify-center items-center font-medium bg-gradient-to-b uppercase text-white from-[#5CAFFA] to-[#408ACF] rounded-full overflow-hidden"
    :class="className"
  >
    {{ user.username[0] }}
  </div>
</template>

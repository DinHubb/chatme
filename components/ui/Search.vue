<script setup lang="ts">
import { MagnifyingGlassIcon } from "@heroicons/vue/24/solid";

const emit = defineEmits<{
  focused: [value: void];
}>();
</script>
<template>
  <div class="relative w-full flex items-center">
    <input
      type="text"
      class="search__input rounded-3xl w-full transition-colors duration-200 ease-in-out border border-brcolor hover:border-hvBrcolor focus:!border-tg focus:border-2 h-[42px] pr-4 pl-14"
      placeholder="Search"
      @focus="emit('focused')"
    />
    <div
      class="search__container__icon absolute left-4 w-6 h-6 pointer-events-none"
    >
      <MagnifyingGlassIcon
        class="search__icon w-6 h-6 min-w-6 min-h-6 font-bold fill-secondary"
      />
    </div>
  </div>
</template>
<style scoped>
.search__input:focus + .search__container__icon .search__icon {
  fill: #3390ec;
}
</style>

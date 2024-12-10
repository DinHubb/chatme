<script setup lang="ts">
import { MagnifyingGlassIcon } from "@heroicons/vue/24/solid";
</script>
<template>
  <div class="relative w-full flex items-center">
    <input
      type="text"
      class="rounded-3xl w-full border-brcolor h-[42px] bg-hgray pr-4 pl-14"
      placeholder="Search"
    />
    <button class="absolute left-4 w-6 h-6">
      <MagnifyingGlassIcon
        class="w-6 h-6 min-w-6 min-h-6 font-bold fill-secondary"
      />
    </button>
  </div>
</template>

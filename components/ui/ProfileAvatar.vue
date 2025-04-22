<script setup lang="ts">
import type { User } from "~/types/types";

const props = defineProps<{
  user: User;
  className: string;
}>();
</script>

<template>
  <div
    v-if="user.avatar_url"
    class="relative rounded-full overflow-hidden bg-tg"
    :class="className"
  >
    <img
      :src="user.avatar_url"
      class="object-fill"
      :alt="user.full_name + '`s avatar'"
    />
  </div>
  <div
    v-else
    class="flex justify-center items-center font-medium bg-gradient-to-b uppercase text-white from-[#5CAFFA] to-[#408ACF] rounded-full overflow-hidden"
    :class="className"
    :style="{
      '--color-top': '#7cb7f2',
      '--color-bottom': '#3390ec',
      background: 'linear-gradient(#7cb7f2,#3390ec)',
    }"
  >
    {{ user.username[0] }}
  </div>
</template>

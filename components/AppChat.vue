<script setup lang="ts">
import {
  MagnifyingGlassIcon,
  PhoneIcon,
  EllipsisVerticalIcon,
} from "@heroicons/vue/24/outline";

const props = defineProps<{
  user: object;
}>();
</script>
<template>
  <div class="bg-white relative shadow z-10 w-full px-4 py-2">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <div
          class="relative shadow w-11 h-11 min-w-11 min-h-11 rounded-full overflow-hidden"
        >
          <img :src="user?.img" alt="" class="object-cover" />
        </div>
        <div>
          <h4 class="text-primary font-medium text-base">{{ user?.name }}</h4>
          <p class="text-sm text-secondary">{{ user?.lastDiscussion }}</p>
        </div>
      </div>
      <div class="flex items-center space-x-3">
        <button class="w-10 h-10 min-w-10 min-h-10 p-2 mt`">
          <PhoneIcon
            class="w-full h-full min-h-full min-w-full stroke-secondary"
          />
        </button>
        <button class="w-10 h-10 min-w-10 min-h-10 p-2">
          <MagnifyingGlassIcon
            class="w-full h-full min-w-full min-h-full font-bold stroke-secondary"
          />
        </button>
        <button class="w-10 h-10 min-w-10 min-h-10 p-2">
          <EllipsisVerticalIcon
            class="w-full h-full min-w-full min-h-full font-bold stroke-secondary"
          />
        </button>
      </div>
    </div>
  </div>
  <div class="flex-1 px-4">
    <ul class="flex flex-col w-full h-full pb-2 gap-y-1 overflow-auto">
      <li
        v-for="message in user?.messages || []"
        :class="[
          'py-1 px-2 rounded-full',
          message.author.user_id === '@din'
            ? 'self-end bg-messageBg'
            : 'self-start bg-white',
        ]"
      >
        <p>{{ message.text }}</p>
        <span></span>
      </li>
    </ul>
  </div>
  <div class="flex items-center px-4 gap-2">
    <UIInput />
    <UIButton />
  </div>
</template>

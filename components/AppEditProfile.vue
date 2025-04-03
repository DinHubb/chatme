<script setup lang="ts">
import { ArrowLeftIcon } from "@heroicons/vue/24/outline";

const props = defineProps<{
  user: any;
}>();
const emit = defineEmits<{
  goBack: [];
}>();
</script>

<template>
  <div class="h-full bg-bgColor">
    <div class="bg-white">
      <div class="py-2 px-4 flex items-center">
        <button
          class="w-10 h-10 min-w-10 min-h-10 p-2 rounded-full hover:bg-hgray"
          @click="emit('goBack')"
        >
          <ArrowLeftIcon class="w-6 h-6 stroke-2 stroke-secondary" />
        </button>
        <div class="flex items-center justify-between w-full">
          <span class="pl-6 text-xl font-medium"> Edit Profile </span>
        </div>
      </div>
      <div class="flex flex-col py-8 items-center">
        <div class="w-[120px] h-[120px] max-w-32 max-h-32 mb-4">
          <UIProfileAvatar
            :user="user"
            :class-name="'w-full h-full text-4xl'"
          />
        </div>
        <div class="text-center">
          <form>
            <div>
              <input
                type="text"
                class="rounded-lg border border-hgrey caret-tg transition-all duration-200 easy-out w-full h-10 p-2 mt-1 focus:border-tg hover:border-tg"
              />
              <label for=""></label>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

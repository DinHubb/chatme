<script setup lang="ts">
import { ArrowLeftIcon } from "@heroicons/vue/24/outline";
import type { ComponentSidebarEmits } from "~/types/emits";
import type { ComponentSidebarProps } from "~/types/props";

const props = defineProps<ComponentSidebarProps>();
const emit = defineEmits<ComponentSidebarEmits>();
</script>

<template>
  <div class="absolute w-full h-full bg-bgColor">
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
      <div class="flex flex-col py-8 mx-2 items-center">
        <div class="w-[120px] h-[120px] max-w-32 max-h-32 mb-5">
          <UIProfileAvatar
            :user="user"
            :class-name="'w-full h-full text-4xl'"
          />
        </div>
        <FormKit
          type="form"
          :actions="false"
          :incomplete-message="false"
          :classes="{
            form: 'w-full px-3 my-3',
            messages: 'text-red-600 text-center pt-3',
          }"
        >
          <FormKit
            name="text"
            label="Name"
            :classes="{
              outer: 'pb-4 relative',
              wrapper: 'flex items-center',
              inner: 'w-full',
              label:
                'edit__profile__label absolute left-3.5 text-placeholderInput text-lg px-1 bg-white cursor-text font-light transition-all duration-200',
              input:
                'rounded-[10px] outline-none bg-white border border-hgrey caret-tg transition-all  duration-200 easy-out w-full p-3.5 focus:border-tg hover:border-tg',
              message: 'mt-1 font-normal text-red-600 text-sm',
            }"
          />
          <!-- <input
                type="text"
                class="rounded-lg border border-hgrey caret-tg transition-all duration-200 easy-out w-full h-10 p-2 mt-1 focus:border-tg hover:border-tg"
              />
              <label for="">Username</label> -->
        </FormKit>
      </div>
    </div>
  </div>
</template>

<style>
.formkit-wrapper:hover .edit__profile__label {
  color: #3390ec;
}
.formkit-wrapper:focus-within .formkit-label {
  transform: translateY(-1.5rem) scale(0.9);
  font-weight: 500;
  color: #3390ec;
  transform-origin: left center;
}
</style>

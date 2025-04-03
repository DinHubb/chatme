<script setup lang="ts">
import {
  EllipsisVerticalIcon,
  PencilIcon,
  PhoneIcon,
} from "@heroicons/vue/24/outline";
import { ArrowLeftIcon } from "@heroicons/vue/24/outline";

const props = defineProps<{
  user: any;
  menuItem: string;
}>();

const emit = defineEmits<{
  goBack: [];
}>();

const selectEditProfile = ref<boolean>(false);
</script>

<template>
  <div v-if="!selectEditProfile" class="h-full bg-bgColor">
    <div class="py-2 px-4 bg-white">
      <div class="flex items-center">
        <button
          class="w-10 h-10 min-w-10 min-h-10 p-2 rounded-full hover:bg-hgray"
          @click="emit('goBack')"
        >
          <ArrowLeftIcon class="w-6 h-6 stroke-2 stroke-secondary" />
        </button>
        <div class="flex items-center justify-between w-full">
          <div class="pl-6 first-letter:uppercase text-xl font-medium">
            {{ menuItem }}
          </div>
          <div class="space-x-2">
            <UIButton
              :class-name="'w-10 h-10 min-w-10 min-h-10 p-2 hover:bg-hgray'"
              @click="selectEditProfile = true"
            >
              <PencilIcon
                class="w-full h-full min-w-full min-h-full stroke-2 stroke-secondary"
              />
            </UIButton>
            <UIButton
              :class-name="'w-10 h-10 min-w-10 min-h-10 p-2 hover:bg-hgray'"
            >
              <EllipsisVerticalIcon
                class="w-full h-full min-w-full min-h-full stroke-[2.5px] stroke-secondary"
              />
            </UIButton>
          </div>
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
          <p class="font-medium text-xl text-ellipsis overflow-hidden break">
            {{ user.username }}
          </p>
          <span class="text-sm text-secondary">Last seen</span>
        </div>
      </div>
      <div
        class="relative flex rounded-xl items-center pl-[72px] py-[7px] pr-4 hover:bg-hgray -mx-2"
      >
        <button class="absolute left-2 w-10 h-10 min-w-10 min-h-10 p-2">
          <PhoneIcon
            class="w-full h-full min-h-full min-w-full stroke-secondary"
          />
        </button>
        <div>
          <p class="font-light">{{ user.email }}</p>

          <span class="text-sm text-secondary">Phone</span>
        </div>
      </div>
    </div>
  </div>
  <AppEditProfile v-else :user="user" @go-back="selectEditProfile = false" />
</template>

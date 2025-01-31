<script setup lang="ts">
import type { Message, UserChat, Chat, UserInfo } from "~/types/types";

const props = defineProps<{
  chatRooms: Chat[];
  currentChat: UserChat | undefined;
}>();
const emit = defineEmits(["select-chat"]);
const { toLocaleTime } = useToLocaleTime();
const { createRipple } = useRipple();
</script>
<template>
  <div
    class="relative max-w-[420px] w-full overflow-hidden border-r border-brcolor"
  >
    <div class="bg-white z-10 px-4 py-2">
      <div class="flex items-center space-x-4">
        <AppMenu />
        <UISearch />
      </div>
    </div>
    <ul class="flex flex-col w-full p-2 max-h-[calc(100vh-50px)] overflow-auto">
      <li
        v-for="chat in chatRooms"
        class="flex relative overflow-hidden"
        @click="createRipple"
      >
        <NuxtLink
          class="w-full p-2 rounded-xl"
          :to="`#${chat.id}`"
          :data-peer-id="chat.id"
          @click="emit('select-chat', chat)"
          :class="[
            currentChat?.sub === chat.user.sub ? 'bg-tg' : 'hover:bg-hgray',
          ]"
        >
          <div class="flex items-center space-x-4">
            <div
              class="relative shadow bg-none w-[3.375rem] h-[3.375rem] min-w-[3.375rem] min-h-[3.375rem] rounded-full overflow-hidden"
            >
              <img
                :src="chat.user.avatar"
                alt=""
                class="object-contain min-w-full min-h-full w-full h-full bg-white"
              />
            </div>
            <div class="w-full flex justify-between space-x-2">
              <div>
                <h4
                  class="text-primary font-medium text-base"
                  :class="{
                    'text-white font-normal':
                      currentChat?.sub === chat.user.sub,
                  }"
                >
                  {{ chat.user.fullName }}
                </h4>
                <p
                  class="text-sm text-secondary mt-1"
                  :class="{
                    'text-white': currentChat?.sub === chat.user.sub,
                  }"
                >
                  {{ chat.messages[chat.messages.length - 1].message }}
                </p>
              </div>
              <p
                class="text-xs text-secondary"
                :class="{
                  'text-white': currentChat?.sub === chat.user.sub,
                }"
              >
                {{
                  toLocaleTime(
                    chat.messages[chat.messages.length - 1].createdAt
                  )
                }}
              </p>
            </div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

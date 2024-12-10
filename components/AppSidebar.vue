<script setup lang="ts">
const props = defineProps<{
  users: any;
  selectedChat: boolean;
}>();

const route = useRoute();
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
      <li v-for="user in users" class="flex">
        <NuxtLink
          class="w-full p-2 rounded-xl active:bg-darkTg transition-all duration-200 ease-out"
          :to="`/#${user.user_id}`"
          @click="$emit('select-chat', user)"
          :class="[
            user.user_id === route.hash.replace(/#/, '')
              ? 'bg-tg'
              : 'hover:bg-hgray',
          ]"
        >
          <div class="flex items-center space-x-4">
            <div
              class="relative shadow bg-none w-12 h-12 min-w-12 min-h-12 rounded-full overflow-hidden"
            >
              <img
                :src="user.img"
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
                      user.user_id === route.hash.replace(/#/, ''),
                  }"
                >
                  {{ user.name }}
                </h4>
                <p
                  class="text-sm text-secondary"
                  :class="{
                    'text-white': user.user_id === route.hash.replace(/#/, ''),
                  }"
                >
                  {{ user.messages[user.messages.length - 1].text }}
                </p>
              </div>
              <p
                class="text-xs text-secondary"
                :class="{
                  'text-white': user.user_id === route.hash.replace(/#/, ''),
                }"
              >
                {{ user.lastDiscussion }}
              </p>
            </div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

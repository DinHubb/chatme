<script setup lang="ts">
import type { ComponentSidebarProps } from "~/types/props";
import type { ComponentSidebarEmits } from "~/types/emits";
import type { CallMenu, MenuItem, MenuItems } from "~/types/menu";
import { CogIcon, EllipsisVerticalIcon } from "@heroicons/vue/20/solid";
import { Bars3Icon } from "@heroicons/vue/24/solid";
import AppSetting from "./AppSetting.vue";
import { ArrowLeftIcon } from "@heroicons/vue/24/outline";
import type { Chat, User, UserInfo } from "~/types/types";

const props = defineProps<ComponentSidebarProps>();
const emit = defineEmits<ComponentSidebarEmits>();
const { user, setChatsToUserChats, setCurrentChat } = useUserStore();
const { getChats, createChat } = useChats();
const { toLocaleTime } = useToLocaleTime();
const route = useRoute();

const menuItems: MenuItems = {
  accounts: [
    {
      name: user.username,
      avatar: user.avatar_url,
      call: AppSetting,
    },
  ],
  additionals: [
    {
      name: "Settings",
      prefixIcon: CogIcon,
      suffixIcon: "",
      call: AppSetting,
    },
    {
      name: "More",
      prefixIcon: EllipsisVerticalIcon,
      suffixIcon: "",
      call: undefined,
    },
  ],
};
const isOpenSearchBar = ref<boolean>(false);

const handleSelectMenuItem = (menuItem: CallMenu) => {
  if (!menuItem) return;
  emit("next", menuItem);
};

const { submit, inProgress, ValidationErrors, error } = useSubmit(
  async () => {
    return getChats(user.id);
  },
  {
    onSuccess: (res) => {
      setChatsToUserChats(res);

      if (route.query?.chat) {
        handleSelectChat(route.query.chat as string);
      }
    },
    onError: () => {},
  }
);

onMounted(() => submit());

const handleSelectChat = (value: any) => {
  const id = value?.participant?.id ?? value;

  useSubmit(() => createChat(user.id, id), {
    onSuccess: (res) => {
      setCurrentChat(res);
    },
  }).submit();
};
</script>

<template>
  <div class="absolute w-full bg-white h-full">
    <div class="bg-white z-10 px-4 py-2">
      <div class="flex justify-start items-center space-x-4">
        <UIMenu
          v-if="!isOpenSearchBar"
          :user="user"
          :menu-items="menuItems"
          :position="'left'"
          @select-menu-item="handleSelectMenuItem"
        >
          <template #menu-button>
            <UIButton :class-name="'p-2 hover:bg-hgray'">
              <Bars3Icon class="fill-secondary stroke-2 w-6 h-6" />
            </UIButton>
          </template>
        </UIMenu>
        <button
          v-else
          class="p-2 rounded-full hover:bg-hgray transition-all duration-200 ease-out"
          @click="isOpenSearchBar = false"
        >
          <ArrowLeftIcon class="w-6 h-6 stroke-2 stroke-secondary" />
        </button>
        <UISearch @focused="isOpenSearchBar = true" />
      </div>
    </div>
    <Transition
      enter-active-class="transition-all duration-100 ease-out"
      enter-from-class="opacity-0 -translate-y-2 scale-90"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition-all duration-100 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 -translate-y-2 scale-90"
      mode="out-in"
    >
      <UISidebarList
        v-if="!isOpenSearchBar"
        :data="user.chats"
        @select-chat="handleSelectChat"
        v-slot="{ item }: { item: Chat }"
      >
        <NuxtLink
          class="w-full p-2 rounded-xl select-none"
          :to="`?chat=${item?.participant.id}`"
          :data-peer-id="item?.chat_id"
          :class="[
            item.chat_id === user.currentChat?.chat_id
              ? 'bg-tg'
              : 'hover:bg-hgray',
          ]"
        >
          <div class="flex items-center space-x-4">
            <div
              class="relative shadow bg-none w-[3.375rem] h-[3.375rem] min-w-[3.375rem] min-h-[3.375rem] rounded-full overflow-hidden"
            >
              <UIProfileAvatar
                :user="item.participant"
                :class-name="'object-contain min-w-full min-h-full w-full h-full bg-white'"
              />
            </div>
            <div class="w-full flex justify-between space-x-2">
              <div>
                <h4
                  class="text-primary font-medium text-base"
                  :class="{
                    'text-white font-normal':
                      item.chat_id === user.currentChat?.chat_id,
                  }"
                >
                  {{ item.participant.username }}
                </h4>
                <p
                  class="text-sm text-secondary mt-0.5"
                  :class="{
                    'text-white': item.chat_id === user.currentChat?.chat_id,
                  }"
                >
                  {{ item?.last_message?.content }}
                </p>
              </div>
              <p
                class="text-xs text-secondary"
                :class="{
                  'text-white': item.chat_id === user.currentChat?.chat_id,
                }"
              >
                {{ toLocaleTime(item.participant.lastseen) }}
              </p>
            </div>
          </div>
        </NuxtLink>
      </UISidebarList>

      <AppSearchBar v-else @select="() => (isOpenSearchBar = false)" />
    </Transition>
  </div>
</template>

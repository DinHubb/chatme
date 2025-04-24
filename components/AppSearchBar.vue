<script setup lang="ts">
import type { User } from "~/types/types";

const emit = defineEmits<{
  select: [value: void];
}>();
const { createRipple } = useRipple();

const { user, setCurrentChat } = useUserStore();
const { getUsers } = useUser();
const { createChat } = useChats();
const { toLocaleTime } = useToLocaleTime();

const searchBarItems = [
  { id: 1, name: "Chats" },
  {
    id: 2,
    name: "Channels",
  },
  {
    id: 3,
    name: "Media",
  },
  {
    id: 4,
    name: "Links",
  },
  {
    id: 5,
    name: "Files",
  },
  {
    id: 6,
    name: "Voice",
  },
];
const selectedItem = ref<number>(1);
const fetchData = ref<any>(null);

onMounted(() => submit());

const setActive = (event: MouseEvent, id: number) => {
  const rippleColor = "rgba(51,144,236,0.08)";
  createRipple(event, rippleColor);

  selectedItem.value = id;

  submit();
};

const { submit, inProgress, ValidationErrors, error } = useSubmit(
  async () => {
    return getUsers(user.id);
  },
  {
    onSuccess: (res) => {
      fetchData.value = res.users;
    },
    onError: () => {},
  }
);

const handleSelectChat = (value: User) => {
  if (!value.id) return;

  useSubmit(() => createChat(user.id, value.id as string), {
    onSuccess: (res) => {
      setCurrentChat(res);
      emit("select");
    },
  }).submit();
};
</script>

<template>
  <div>
    <nav class="px-2 border-b border-brcolor">
      <ul
        class="flex justify-start w-auto flex-auto overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
      >
        <li
          v-for="item in searchBarItems"
          :key="item.id"
          class="relative overflow-hidden min-w-max rounded-t-lg px-4 cursor-pointer text-secondary font-medium hover:bg-lightSecond"
          :class="selectedItem === item.id ? 'hover:bg-lightTg text-tg' : ''"
          @click="setActive($event, item.id)"
        >
          <div class="relative h-12 flex justify-center items-center">
            {{ item.name }}
            <span
              v-show="selectedItem === item.id"
              class="bg-tg absolute bottom-0 left-0 z-10 h-[2px] w-full rounded-t-2xl"
            ></span>
          </div>
        </li>
      </ul>
    </nav>
    <div>
      <UISidebarList
        :data="fetchData"
        @select-chat="handleSelectChat"
        v-slot="{ item }: { item: User }"
      >
        <NuxtLink
          class="w-full p-2 rounded-xl hover:bg-hgray"
          :to="`#${item.id}`"
          :data-peer-id="item.id"
        >
          <div class="flex items-center space-x-4">
            <div
              class="relative shadow bg-none w-[3.375rem] h-[3.375rem] min-w-[3.375rem] min-h-[3.375rem] rounded-full overflow-hidden"
            >
              <UIProfileAvatar
                :user="item"
                :class-name="'object-contain min-w-full min-h-full w-full h-full bg-white'"
              />
            </div>
            <div class="w-full flex justify-between space-x-2">
              <div>
                <h4 class="text-primary font-medium text-base">
                  {{ item.username }}
                </h4>
              </div>
            </div>
          </div>
        </NuxtLink>
      </UISidebarList>
    </div>
  </div>
</template>

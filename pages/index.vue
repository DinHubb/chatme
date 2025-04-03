<script setup lang="ts">
import { useUserStore } from "~/stores/UserStore";
import type { UserInfo, Message, Chat } from "~/types/types";

definePageMeta({
  middleware: "auth",
});

// const users: User[] = [
//   {
//     id: 1,
//     user_id: "@walletme",
//     name: "Wallet Me",
//     phone: "+1234567890",
//     avatar: "https://avatars0.githubusercontent.com/mui?v=3&s=306",
//     isOnline: true,
//     createdAt: "2022-01-01T12:00:00Z",
//     updatedAt: "2022-02-01T12:00:00Z",
//   },
//   {
//     id: 2,
//     user_id: "12313312",
//     name: "Greg James",
//     phone: "+9876543210",
//     avatar:
//       "https://cdn.prod.website-files.com/655cb5bd2de1fe156ffb8384/66eb27f2407059ff110e3044_nadav_profile_linkedin.jpeg",
//     isOnline: false,
//     createdAt: "2022-01-10T12:00:00Z",
//     updatedAt: "2022-02-05T12:00:00Z",
//   },
//   {
//     id: 3,
//     user_id: "@asgrid",
//     name: "As Grid",
//     phone: "+992234567890",
//     avatar:
//       "https://github.com/tannerlinsley/files/raw/master/sponsorships/sponsor-aggrid.png",
//     isOnline: true,
//     createdAt: "2022-01-01T12:00:00Z",
//     updatedAt: "2022-02-01T12:00:00Z",
//   },
//   {
//     id: 4,
//     user_id: "@support",
//     name: "Support",
//     phone: "+876543210",
//     avatar: "https://go.neo4j.com/rs/710-RRC-335/images/neo4j_logo.svg",
//     isOnline: false,
//     createdAt: "2022-01-10T12:00:00Z",
//     updatedAt: "2022-02-05T12:00:00Z",
//   },
// ];

const store = useUserStore();

const { user } = storeToRefs(store);

onMounted(() => {});

const handleSelectChat = (event: Chat) => {
  if (!user.value) return;

  user.value.currentChat = event;
};
</script>

<template>
  <div class="__container min-h-full h-full">
    <div class="flex min-h-full h-full border border-brcolor">
      <AppSidebar
        :user="user"
        :chatRooms="user.chats"
        :currentChat="user.currentChat?.user"
        @selectChat="handleSelectChat"
      />
      <main class="overflow-hidden flex-1 relative flex flex-col pb-5">
        <UIBackgroundChat />
        <AppChat v-if="user?.currentChat" :chat="user?.currentChat" />
      </main>
    </div>
  </div>
</template>

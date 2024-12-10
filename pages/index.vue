<script setup lang="ts">
import AppChat from "~/components/AppChat.vue";

definePageMeta({
  middleware: "auth",
});

const route = useRoute();
const users = [
  {
    img: "https://avatars0.githubusercontent.com/mui?v=3&s=306",
    name: "Wallet Me",
    user_id: "@walletme",
    messages: [
      {
        message_id: "1",
        author: {
          user_id: "12313312",
          username: "Greg James",
          profile_picture:
            "https://avatars0.githubusercontent.com/mui?v=3&s=306",
        },
        text: "Привет, как дела?",
        timestamp: "2024-12-09T14:30:00Z",
        status: "delivered",
        message_type: "text",
        reply_to: null,
      },
      {
        message_id: "2",
        author: {
          user_id: "12313312",
          username: "Greg James",
          profile_picture:
            "https://avatars0.githubusercontent.com/mui?v=3&s=306",
        },
        text: "Что делаешь?",
        timestamp: "2024-12-09T14:31:00Z",
        status: "delivered",
        message_type: "text",
        reply_to: null,
      },
      {
        message_id: "3",
        author: {
          user_id: "@din",
          username: "din",
          profile_picture: "https://example.com/me.jpg",
        },
        text: "Привет!",
        timestamp: "2024-12-09T14:32:00Z",
        status: "delivered",
        message_type: "text",
        reply_to: "1",
      },
      {
        message_id: "4",
        author: {
          user_id: "@din",
          username: "din",
          profile_picture: "https://example.com/me.jpg",
        },
        text: "Ничего.",
        timestamp: "2024-12-09T14:33:00Z",
        status: "delivered",
        message_type: "text",
        reply_to: "2",
      },
    ],
    lastDiscussion: "12:16",
  },
  {
    img: "https://cdn.prod.website-files.com/655cb5bd2de1fe156ffb8384/66eb27f2407059ff110e3044_nadav_profile_linkedin.jpeg",
    name: "Greg James",
    user_id: "12313312",
    messages: [
      {
        message_id: "1",
        author: {
          user_id: "12313312",
          username: "Greg James",
          profile_picture:
            "https://cdn.prod.website-files.com/655cb5bd2de1fe156ffb8384/66eb27f2407059ff110e3044_nadav_profile_linkedin.jpeg",
        },
        text: "Привет, как дела?",
        timestamp: "2024-12-09T14:30:00Z",
        status: "delivered",
        message_type: "text",
        reply_to: null,
      },
      {
        message_id: "2",
        author: {
          user_id: "12313312",
          username: "Greg James",
          profile_picture:
            "https://cdn.prod.website-files.com/655cb5bd2de1fe156ffb8384/66eb27f2407059ff110e3044_nadav_profile_linkedin.jpeg",
        },
        text: "Что делаешь?",
        timestamp: "2024-12-09T14:31:00Z",
        status: "delivered",
        message_type: "text",
        reply_to: null,
      },
      {
        message_id: "3",
        author: {
          user_id: "@din",
          username: "din",
          profile_picture: "https://example.com/me.jpg",
        },
        text: "Привет!",
        timestamp: "2024-12-09T14:32:00Z",
        status: "delivered",
        message_type: "text",
        reply_to: "1",
      },
      {
        message_id: "4",
        author: {
          user_id: "@din",
          username: "din",
          profile_picture: "https://example.com/me.jpg",
        },
        text: "Ничего.",
        timestamp: "2024-12-09T14:33:00Z",
        status: "delivered",
        message_type: "text",
        reply_to: "2",
      },
      {
        message_id: "5",
        author: {
          user_id: "12313312",
          username: "Greg James",
          profile_picture:
            "https://cdn.prod.website-files.com/655cb5bd2de1fe156ffb8384/66eb27f2407059ff110e3044_nadav_profile_linkedin.jpeg",
        },
        text: "Что нового?",
        timestamp: "2024-12-09T14:35:00Z",
        status: "delivered",
        message_type: "text",
        reply_to: null,
      },
      {
        message_id: "6",
        author: {
          user_id: "@din",
          username: "din",
          profile_picture: "https://example.com/me.jpg",
        },
        text: "Не знаю, все как всегда.",
        timestamp: "2024-12-09T14:36:00Z",
        status: "delivered",
        message_type: "text",
        reply_to: "5",
      },
      {
        message_id: "7",
        author: {
          user_id: "12313312",
          username: "Greg James",
          profile_picture:
            "https://cdn.prod.website-files.com/655cb5bd2de1fe156ffb8384/66eb27f2407059ff110e3044_nadav_profile_linkedin.jpeg",
        },
        text: "Я вот только что на работу пришел.",
        timestamp: "2024-12-09T14:37:00Z",
        status: "delivered",
        message_type: "text",
        reply_to: null,
      },
      {
        message_id: "8",
        author: {
          user_id: "@din",
          username: "din",
          profile_picture: "https://example.com/me.jpg",
        },
        text: "Я тоже, но сейчас перерыв.",
        timestamp: "2024-12-09T14:38:00Z",
        status: "delivered",
        message_type: "text",
        reply_to: "7",
      },
      {
        message_id: "9",
        author: {
          user_id: "12313312",
          username: "Greg James",
          profile_picture:
            "https://cdn.prod.website-files.com/655cb5bd2de1fe156ffb8384/66eb27f2407059ff110e3044_nadav_profile_linkedin.jpeg",
        },
        text: "Отлично, значит можно поболтать!",
        timestamp: "2024-12-09T14:40:00Z",
        status: "delivered",
        message_type: "text",
        reply_to: null,
      },
      {
        message_id: "10",
        author: {
          user_id: "@din",
          username: "din",
          profile_picture: "https://example.com/me.jpg",
        },
        text: "Согласен, что-нибудь интересное расскажешь?",
        timestamp: "2024-12-09T14:41:00Z",
        status: "delivered",
        message_type: "text",
        reply_to: "9",
      },
      {
        message_id: "11",
        author: {
          user_id: "12313312",
          username: "Greg James",
          profile_picture:
            "https://cdn.prod.website-files.com/655cb5bd2de1fe156ffb8384/66eb27f2407059ff110e3044_nadav_profile_linkedin.jpeg",
        },
        text: "Недавно ездил в отпуск, классно провел время.",
        timestamp: "2024-12-09T14:42:00Z",
        status: "delivered",
        message_type: "text",
        reply_to: null,
      },
      {
        message_id: "12",
        author: {
          user_id: "@din",
          username: "din",
          profile_picture: "https://example.com/me.jpg",
        },
        text: "Куда ездил?",
        timestamp: "2024-12-09T14:43:00Z",
        status: "delivered",
        message_type: "text",
        reply_to: "11",
      },
      {
        message_id: "13",
        author: {
          user_id: "12313312",
          username: "Greg James",
          profile_picture:
            "https://cdn.prod.website-files.com/655cb5bd2de1fe156ffb8384/66eb27f2407059ff110e3044_nadav_profile_linkedin.jpeg",
        },
        text: "На юг, в Крым. Там красиво, море, горы.",
        timestamp: "2024-12-09T14:45:00Z",
        status: "delivered",
        message_type: "text",
        reply_to: "12",
      },
      {
        message_id: "14",
        author: {
          user_id: "@din",
          username: "din",
          profile_picture: "https://example.com/me.jpg",
        },
        text: "Звучит здорово! Как долго был?",
        timestamp: "2024-12-09T14:46:00Z",
        status: "delivered",
        message_type: "text",
        reply_to: "13",
      },
      {
        message_id: "15",
        author: {
          user_id: "12313312",
          username: "Greg James",
          profile_picture:
            "https://cdn.prod.website-files.com/655cb5bd2de1fe156ffb8384/66eb27f2407059ff110e3044_nadav_profile_linkedin.jpeg",
        },
        text: "Недели две. Время пролетело быстро.",
        timestamp: "2024-12-09T14:47:00Z",
        status: "delivered",
        message_type: "text",
        reply_to: "14",
      },
      {
        message_id: "16",
        author: {
          user_id: "@din",
          username: "din",
          profile_picture: "https://example.com/me.jpg",
        },
        text: "Класс! А погода какая была?",
        timestamp: "2024-12-09T14:48:00Z",
        status: "delivered",
        message_type: "text",
        reply_to: "15",
      },
      {
        message_id: "17",
        author: {
          user_id: "12313312",
          username: "Greg James",
          profile_picture:
            "https://cdn.prod.website-files.com/655cb5bd2de1fe156ffb8384/66eb27f2407059ff110e3044_nadav_profile_linkedin.jpeg",
        },
        text: "В основном солнечная, пару дней дождило.",
        timestamp: "2024-12-09T14:50:00Z",
        status: "delivered",
        message_type: "text",
        reply_to: "16",
      },
      {
        message_id: "18",
        author: {
          user_id: "@din",
          username: "din",
          profile_picture: "https://example.com/me.jpg",
        },
        text: "Значит, удачно повезло с погодой!",
        timestamp: "2024-12-09T14:51:00Z",
        status: "delivered",
        message_type: "text",
        reply_to: "17",
      },
      {
        message_id: "19",
        author: {
          user_id: "12313312",
          username: "Greg James",
          profile_picture:
            "https://cdn.prod.website-files.com/655cb5bd2de1fe156ffb8384/66eb27f2407059ff110e3044_nadav_profile_linkedin.jpeg",
        },
        text: "Да, вообще здорово было. Рекомендую поехать.",
        timestamp: "2024-12-09T14:52:00Z",
        status: "delivered",
        message_type: "text",
        reply_to: "18",
      },
      {
        message_id: "20",
        author: {
          user_id: "@din",
          username: "din",
          profile_picture: "https://example.com/me.jpg",
        },
        text: "Обязательно! Когда-нибудь поеду.",
        timestamp: "2024-12-09T14:53:00Z",
        status: "delivered",
        message_type: "text",
        reply_to: "19",
      },
    ],
    lastDiscussion: "2024-12-09T14:53:00Z",
  },
  {
    img: "https://go.neo4j.com/rs/710-RRC-335/images/neo4j_logo.svg",
    name: "Support",
    user_id: "@support",
    messages: [
      {
        message_id: "1",
        author: {
          user_id: "12313312",
          username: "Greg James",
          profile_picture:
            "https://go.neo4j.com/rs/710-RRC-335/images/neo4j_logo.svg",
        },
        text: "Привет, как дела?",
        timestamp: "2024-12-09T14:30:00Z",
        status: "delivered",
        message_type: "text",
        reply_to: null,
      },
      {
        message_id: "2",
        author: {
          user_id: "12313312",
          username: "Greg James",
          profile_picture:
            "https://go.neo4j.com/rs/710-RRC-335/images/neo4j_logo.svg",
        },
        text: "Что делаешь?",
        timestamp: "2024-12-09T14:31:00Z",
        status: "delivered",
        message_type: "text",
        reply_to: null,
      },
      {
        message_id: "3",
        author: {
          user_id: "@din",
          username: "din",
          profile_picture: "https://example.com/me.jpg",
        },
        text: "Привет!",
        timestamp: "2024-12-09T14:32:00Z",
        status: "delivered",
        message_type: "text",
        reply_to: "1",
      },
      {
        message_id: "4",
        author: {
          user_id: "@din",
          username: "din",
          profile_picture: "https://example.com/me.jpg",
        },
        text: "Ничего.",
        timestamp: "2024-12-09T14:33:00Z",
        status: "delivered",
        message_type: "text",
        reply_to: "2",
      },
    ],
    lastDiscussion: "23:13",
  },
  {
    img: "https://github.com/tannerlinsley/files/raw/master/sponsorships/sponsor-aggrid.png",
    name: "As Grid",
    user_id: "@asgrid",
    messages: [
      {
        message_id: "1",
        author: {
          user_id: "12313312",
          username: "Greg James",
          profile_picture:
            "https://github.com/tannerlinsley/files/raw/master/sponsorships/sponsor-aggrid.png",
        },
        text: "Привет, как дела?",
        timestamp: "2024-12-09T14:30:00Z",
        status: "delivered",
        message_type: "text",
        reply_to: null,
      },
      {
        message_id: "2",
        author: {
          user_id: "12313312",
          username: "Greg James",
          profile_picture:
            "https://github.com/tannerlinsley/files/raw/master/sponsorships/sponsor-aggrid.png",
        },
        text: "Что делаешь?",
        timestamp: "2024-12-09T14:31:00Z",
        status: "delivered",
        message_type: "text",
        reply_to: null,
      },
      {
        message_id: "3",
        author: {
          user_id: "@din",
          username: "din",
          profile_picture: "https://example.com/me.jpg",
        },
        text: "Привет!",
        timestamp: "2024-12-09T14:32:00Z",
        status: "delivered",
        message_type: "text",
        reply_to: "1",
      },
      {
        message_id: "4",
        author: {
          user_id: "@din",
          username: "din",
          profile_picture: "https://example.com/me.jpg",
        },
        text: "Ничего.",
        timestamp: "2024-12-09T14:33:00Z",
        status: "delivered",
        message_type: "text",
        reply_to: "2",
      },
    ],
    lastDiscussion: "Tue",
  },
];

const hash = ref<string>("");
const user = ref<object>({});
const selectedChat = ref<boolean>(false);

onMounted(() => {
  hash.value = route.hash;
  user.value = users.filter(
    (o) => o.user_id === hash.value.replace(/#/, "")
  )[0];
});

const currentComponent = computed(() => {
  if (hash.value) return AppChat;
});

const handleSelectChat = (event: object) => {
  user.value = event;
  hash.value = route.hash;
  selectedChat.value = true;
  return;
};

watch(user, () => {
  if (!user.value) return;

  selectedChat.value = true;
});
</script>

<template>
  <div class="__container min-h-full h-full">
    <div class="flex min-h-full h-full border border-brcolor">
      <AppSidebar
        :users="users"
        :selectedChat="selectedChat"
        @selectChat="handleSelectChat"
      />
      <div class="overflow-hidden flex-1 relative flex flex-col pb-5">
        <UIBackgroundChat />
        <component :is="currentComponent" :user="user" />
      </div>
    </div>
  </div>
</template>

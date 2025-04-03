<script setup lang="ts">
import {
  MagnifyingGlassIcon,
  PhoneIcon,
  EllipsisVerticalIcon,
} from "@heroicons/vue/24/outline";
import type { Message, Chat, UserChat } from "~/types/types";

const props = defineProps<{
  chat: Chat;
}>();
const emit = defineEmits(["createMessage"]);
const store = useUserStore();
const { toLocaleTime } = useToLocaleTime();

const message = ref<Message>({ sub: "", message: "", createdAt: "" });
const messagesContainer = ref<HTMLDivElement | null>(null);

const onCreateMessage = () => {
  if (!message.value.message.trim()) return;

  message.value.sub = store.user.sub;
  message.value.createdAt = `${Date.now()}`;

  let newMessage = message.value;
  store.createMessage(newMessage);
  message.value = { sub: "", message: "", createdAt: "" };
};

const scrollToBottom = () => {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
};

onBeforeMount(() => nextTick(scrollToBottom));
onUpdated(() => nextTick(scrollToBottom));
</script>
<template>
  <div class="bg-white relative shadow z-10 w-full py-2">
    <div class="flex items-center justify-between px-4">
      <div class="flex items-center space-x-4">
        <div
          class="relative shadow w-11 h-11 min-w-11 min-h-11 rounded-full overflow-hidden"
        >
          <img :src="chat?.user.avatar" alt="" class="object-cover" />
        </div>
        <div>
          <h4 class="text-primary font-medium text-base">
            {{ chat?.user.fullName }}
          </h4>
          <p class="text-sm text-secondary">{{ "last seen" }}</p>
        </div>
      </div>
      <div class="flex items-center space-x-3">
        <UIButton
          :class-name="'w-10 h-10 min-w-10 min-h-10 p-2 hover:bg-hgray'"
        >
          <PhoneIcon
            class="w-full h-full min-h-full min-w-full stroke-secondary"
          />
        </UIButton>
        <UIButton
          :class-name="'w-10 h-10 min-w-10 min-h-10 p-2 hover:bg-hgray'"
        >
          <MagnifyingGlassIcon
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
  <div class="relative flex-1 overflow-hidden px-4">
    <ul
      ref="messagesContainer"
      class="absolute left-0 top-0 px-20 flex flex-col w-full h-full min-h-full pt-3 pb-0 overflow-y-auto"
    >
      <li
        v-for="(message, idx) in chat?.messages"
        :class="[
          'relative px-2 pt-1 pb-[5px] max-w-[464px] my-1 flex',
          message.sub === chat?.user.sub
            ? 'self-start bg-white'
            : 'self-end bg-messageBg',
          message.message.length > 46 ? 'rounded-[15px]' : 'rounded-full ',
        ]"
      >
        <p class="leading-5 whitespace-pre-wrap break-words break-all">
          {{ message.message }}
        </p>
        <span class="self-end pl-1 leading-none text-nowrap text-xs">{{
          toLocaleTime(message.createdAt)
        }}</span>
      </li>
    </ul>
  </div>
  <div class="flex items-center px-20 pt-1 gap-2">
    <UIInput :message="message" @keyup.enter="onCreateMessage" />
    <UIButton
      :class-name="'p-4 bg-tg hover:bg-darkTg'"
      @click="onCreateMessage"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 20 20"
        class="fill-white min-w-6 min-h-6"
      >
        <path
          d="M10.815 10.197L3.28299 11.453C3.19639 11.4675 3.11513 11.5045 3.04737 11.5603C2.97961 11.6161 2.92775 11.6888 2.89699 11.771L0.299988 18.728C0.0519883 19.368 0.720988 19.978 1.33499 19.671L19.335 10.671C19.4597 10.6088 19.5645 10.513 19.6378 10.3945C19.7111 10.276 19.7499 10.1394 19.7499 10C19.7499 9.86066 19.7111 9.72406 19.6378 9.60554C19.5645 9.48702 19.4597 9.39126 19.335 9.32901L1.33499 0.329007C0.720988 0.0220075 0.0519883 0.633008 0.299988 1.27201L2.89799 8.22901C2.9286 8.31142 2.98041 8.38431 3.04818 8.44031C3.11594 8.49632 3.19728 8.53347 3.28399 8.54801L10.816 9.80301C10.8623 9.81113 10.9043 9.83533 10.9346 9.87136C10.9649 9.9074 10.9815 9.95295 10.9815 10C10.9815 10.0471 10.9649 10.0926 10.9346 10.1287C10.9043 10.1647 10.8623 10.1889 10.816 10.197H10.815Z"
        />
      </svg>
    </UIButton>
  </div>
</template>

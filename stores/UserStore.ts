import type { UserInfo, Message, Chat } from "~/types/types";
const route = useRoute();

export const useUserStore = defineStore("user", () => {
  const user = ref<UserInfo>({
    id: 1,
    sub: "@din",
    avatar: "https://avatars0.githubusercontent.com/mui?v=3&s=306",
    fullName: "Din",
    chats: [
      {
        id: 1,
        participants: ["@din", "@alex"],
        messages: [
          {
            sub: "@din",
            message: "Привет, Алекс!",
            createdAt: "1738043243273",
          },
          {
            sub: "@alex",
            message: "Привет, Дин!",
            createdAt: "1738043243273",
          },
          {
            sub: "@din",
            message: "Как дела?",
            createdAt: "1738043243273",
          },
          {
            sub: "@alex",
            message: "Все отлично, как у тебя?",
            createdAt: "1738043243273",
          },
        ],
        sub1HasViewed: true,
        sub2HasViewed: false,
        user: {
          sub: "@alex",
          fullName: "Alex",
          avatar: "https://avatars0.githubusercontent.com/alex",
        },
      },
      {
        id: 2,
        participants: ["@din", "@lisa"],
        messages: [
          {
            sub: "@din",
            message: "Здравствуй, Лиза!",
            createdAt: "1738043243273",
          },
          { sub: "@lisa", message: "Привет, Дин!", createdAt: "1738043243273" },
          { sub: "@din", message: "Как ты?", createdAt: "1738043243273" },
          {
            sub: "@lisa",
            message: "Все нормально, а ты?",
            createdAt: "1738043243273",
          },
          {
            sub: "@din",
            message: "Как твои дела?",
            createdAt: "1738043243273",
          },
          {
            sub: "@lisa",
            message: "Хорошо, а у тебя?",
            createdAt: "1738043243273",
          },
          {
            sub: "@din",
            message: "Чем занимаешься?",
            createdAt: "1738043243273",
          },
          {
            sub: "@lisa",
            message: "Работаю, а ты?",
            createdAt: "1738043243273",
          },
          {
            sub: "@din",
            message: "Тоже работаю. Вижу, что ты занята.",
            createdAt: "1738043243273",
          },
          {
            sub: "@lisa",
            message: "Да, немного. А ты как проводишь день?",
            createdAt: "1738043243273",
          },
          {
            sub: "@din",
            message: "Смотрю сериалы, расслабляюсь.",
            createdAt: "1738043243273",
          },
          {
            sub: "@lisa",
            message: "Что смотришь?",
            createdAt: "1738043243273",
          },
          {
            sub: "@din",
            message: "Недавно начал новый триллер. Довольно интересный.",
            createdAt: "1738043243273",
          },
          {
            sub: "@lisa",
            message: "О, это что-то новое? Как называется?",
            createdAt: "1738043243273",
          },
          {
            sub: "@din",
            message: "Да, называется 'Тень'. Очень захватывающее.",
            createdAt: "1738043243273",
          },
          {
            sub: "@lisa",
            message: "Ага, посмотрю. Рекомендации всегда полезны.",
            createdAt: "1738043243273",
          },
          {
            sub: "@din",
            message: "Ты любишь триллеры?",
            createdAt: "1738043243273",
          },
          {
            sub: "@lisa",
            message: "Да, но больше люблю детективы. А ты?",
            createdAt: "1738043243273",
          },
          {
            sub: "@din",
            message:
              "Я тоже люблю детективы, но триллеры захватывают на грани нервов.",
            createdAt: "1738043243273",
          },
          {
            sub: "@lisa",
            message: "Хаха, да. Это правда. Надо будет посмотреть.",
            createdAt: "1738043243273",
          },
          {
            sub: "@din",
            message: "Тогда потом обсудим! Как тебе твои выходные?",
            createdAt: "1738043243273",
          },
          {
            sub: "@lisa",
            message: "Выходные прошли быстро. Что у тебя?",
            createdAt: "1738043243273",
          },
          {
            sub: "@din",
            message: "Я тоже был занят, но удалось немного отдохнуть.",
            createdAt: "1738043243273",
          },
          {
            sub: "@lisa",
            message: "Отлично, хоть немного времени для себя!",
            createdAt: "1738043243273",
          },
          {
            sub: "@din",
            message:
              "Да, нужно иногда переключаться. Впрочем, как у тебя с друзьями?",
            createdAt: "1738043243273",
          },
          {
            sub: "@lisa",
            message:
              "Все в порядке. Недавно виделась с Микой. Как у тебя с друзьями?",
            createdAt: "1738043243273",
          },
          {
            sub: "@din",
            message:
              "С друзьями все ок. В последний раз встречались с Александром, но давно.",
            createdAt: "1738043243273",
          },
          {
            sub: "@lisa",
            message: "Надо будет встретиться в следующий раз! Больше общения!",
            createdAt: "1738043243273",
          },
          {
            sub: "@din",
            message: "Согласен! Будем договариваться.",
            createdAt: "1738043243273",
          },
          {
            sub: "@lisa",
            message: "Давай, когда будут свободные дни, напишу.",
            createdAt: "1738043243273",
          },
          {
            sub: "@din",
            message: "Хорошо, жду твоего сообщения.",
            createdAt: "1738043243273",
          },
          { sub: "@lisa", message: "До встречи!", createdAt: "1738043243273" },
          {
            sub: "@din",
            message: "До встречи, Лиза!",
            createdAt: "1738043243273",
          },
          { sub: "@lisa", message: "Пока, Дин!", createdAt: "1738043243273" },
          { sub: "@din", message: "Пока-пока!", createdAt: "1738043243273" },
          {
            sub: "@lisa",
            message: "Скоро увидимся!",
            createdAt: "1738043243273",
          },
          {
            sub: "@din",
            message: "Надеюсь на это!",
            createdAt: "1738043243273",
          },
          {
            sub: "@lisa",
            message: "Будет весело!",
            createdAt: "1738043243273",
          },
          { sub: "@din", message: "Точно!", createdAt: "1738043243273" },
          {
            sub: "@lisa",
            message: "Пока, до связи!",
            createdAt: "1738043243273",
          },
          { sub: "@din", message: "Пока, Лиза!", createdAt: "1738043243273" },
        ],
        sub1HasViewed: false,
        sub2HasViewed: true,
        user: {
          sub: "@lisa",
          fullName: "Lisa",
          avatar: "https://avatars0.githubusercontent.com/lisa",
        },
      },
    ],
    allUsers: [
      {
        sub: "@alex",
        fullName: "Alex",
        avatar: "https://avatars0.githubusercontent.com/alex",
      },
      {
        sub: "@lisa",
        fullName: "Lisa",
        avatar: "https://avatars0.githubusercontent.com/lisa",
      },
      {
        sub: "@mike",
        fullName: "Mike",
        avatar: "https://avatars0.githubusercontent.com/mike",
      },
      {
        sub: "@emily",
        fullName: "Emily",
        avatar: "https://avatars0.githubusercontent.com/emily",
      },
    ],
    userDataForChat: [],
    showFindFriends: true,
    currentChat: null,
  });
  const hashRoute = route.hash.replace(/#/, "");

  // function getAllUsers(chats: UserInfo) {

  //   return chats.find((o) => o.id);
  // }

  const findChat = () => {
    user.value.currentChat =
      user.value.chats.find((o) => o.id === Number(hashRoute)) || null;
  };

  const createMessage = (message: Message) => {
    user.value.currentChat?.messages.push(message);
  };

  return {
    user,
    findChat,
    createMessage,
    // getAllUsers,
  };
});

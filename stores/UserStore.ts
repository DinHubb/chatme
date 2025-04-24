import type { UserInfo, Message, Chat, User } from "~/types/types";

export const useUserStore = defineStore("user", () => {
  const user = ref<UserInfo>({
    id: "",
    username: "",
    msisdn: "",
    full_name: "",
    bio: "",
    avatar_url: "",
    chats: [] as Chat[],
    currentChat: null as Chat | null,
    showFindFriends: false,
  });
  const isLoggedIn = ref<boolean>(false);
  const tokenCookie = useCookie("access_token");

  const setUser = (person: any) => {
    if (!person) return;

    user.value = { ...user.value, ...person.user };
    isLoggedIn.value = true;
  };

  const checkLogged = () => {
    if (tokenCookie.value) {
      isLoggedIn.value = true;
    }
  };

  const updateUser = (updatedUser: User) => {
    user.value = { ...user.value, ...updatedUser };
  };

  const setChatsToUserChats = (chat: Chat[]) => {
    if (!chat.length) return;

    user.value.chats = chat;
  };

  const setCurrentChat = (chat: Chat) => {
    user.value.currentChat = chat;
  };

  function clearUser() {
    user.value = {
      id: "",
      username: "",
      avatar_url: "",
      msisdn: "",
      full_name: "",
      chats: [] as Chat[],
      bio: "",
      currentChat: null,
      showFindFriends: false,
    };
    isLoggedIn.value = false;
    tokenCookie.value = null;
  }

  return {
    user,
    isLoggedIn,
    setUser,
    checkLogged,
    updateUser,
    setChatsToUserChats,
    setCurrentChat,
    clearUser,
  };
});

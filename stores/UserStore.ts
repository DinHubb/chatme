import type { UserInfo, Message, Chat } from "~/types/types";
const route = useRoute();
const router = useRouter();

export const useUserStore = defineStore("user", () => {
  const user = ref<UserInfo>({
    id: null,
    username: "",
    avatar: "",
    email: "",
    fullName: "",
    chats: [],
    allUsers: [],
    userDataForChat: [],
    showFindFriends: true,
    currentChat: null,
  });
  const isLoggedIn = ref<boolean>(false);
  const componentMenu = shallowRef<string | null>(null);
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

  // const findChat = () => {
  //   user.value.currentChat =
  //     user.value.chats.find((o) => o.id === Number(hashRoute)) || null;
  // };

  // const createMessage = (message: Message) => {
  //   user.value.currentChat?.messages.push(message);
  // };

  const setComponentMenu = (menu: string | null) => {
    componentMenu.value = menu;
  };

  function clearUser() {
    user.value = {
      id: null,
      username: "",
      avatar: "",
      email: "",
      fullName: "",
      chats: [],
      allUsers: [],
      userDataForChat: [],
      showFindFriends: true,
      currentChat: null,
    };
    isLoggedIn.value = false;
    tokenCookie.value = null;
  }

  return {
    user,
    isLoggedIn,
    componentMenu,
    setUser,
    checkLogged,
    setComponentMenu,
    clearUser,
  };
});

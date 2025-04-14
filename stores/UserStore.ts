import type { UserInfo, Message, Chat } from "~/types/types";
const route = useRoute();
const router = useRouter();

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
      showFindFriends: true,
    };
    isLoggedIn.value = false;
    tokenCookie.value = null;
  }

  return {
    user,
    isLoggedIn,
    setUser,
    checkLogged,
    clearUser,
  };
});

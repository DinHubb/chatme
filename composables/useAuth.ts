export type loginCredentials = {
  login: string;
  password: string;
};

export type registerCredentials = {
  username: string;
  email: string;
  password: string;
};

export const useAuth = () => {
  const storeUser = useUserStore();
  const router = useRouter();

  async function refresh() {
    try {
      const response = await $jwtFetch("/auth/me", {
        method: "GET",
      });

      if (response) {
        storeUser.setUser(response);
      }
    } catch (error: any) {
      storeUser.clearUser();
    }
  }

  async function login(credentials: loginCredentials) {
    if (storeUser.isLoggedIn) return;

    await $jwtFetch("/auth/login", {
      method: "POST",
      body: credentials,
    });

    await refresh();
  }

  async function register(credentials: registerCredentials) {
    await $jwtFetch("/auth/register", {
      method: "POST",
      body: credentials,
    });

    await refresh();
  }

  function logout() {
    storeUser.clearUser();
    router.push("/login");
  }

  return {
    register,
    login,
    refresh,
    logout,
  };
};

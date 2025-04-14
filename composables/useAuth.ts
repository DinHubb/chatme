export type LoginCredentials = {
  login: string;
  password: string;
};

export type RegisterCredentials = {
  username: string;
  msisdn: string;
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
      if (
        router.currentRoute.value.fullPath !== "/login" &&
        router.currentRoute.value.fullPath !== "/register"
      ) {
        logout();
      }
    }
  }

  async function login(credentials: LoginCredentials) {
    if (storeUser.isLoggedIn) return;

    await $jwtFetch("/auth/login", {
      method: "POST",
      body: credentials,
    });

    await refresh();
  }

  async function register(credentials: RegisterCredentials) {
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

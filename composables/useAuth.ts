export type User = {
  name: string;
  login?: string;
};

export type loginCredentials = {
  msisdn: string;
  password: string;
};

export type registerCredentials = {
  name: string;
  msisdn: string;
};

// Value is initialized in: ~/plugins/auth.ts
export const useUser = () => {
  return useState<User | undefined | null>("user", () => undefined);
};

export const useAuth = () => {
  const user = useUser();
  const isLoggedIn = computed(() => !!user.value);

  async function refresh() {
    try {
      user.value = await fetchCurrentUser();
    } catch (error: any) {
      user.value = null;
    }
  }

  async function login(credentials: loginCredentials) {
    if (isLoggedIn.value) return;

    await $jwtFetch("/auth/login", { method: "POST", body: credentials });

    await refresh();
  }

  async function register(credentials: registerCredentials) {
    await $jwtFetch("/auth/reset-password", {
      method: "POST",
      body: credentials,
    });

    await refresh();
  }

  async function logout() {
    if (!isLoggedIn.value) return;

    await $jwtFetch("/auth/logout", { method: "post" });
    user.value = null;
  }

  return {
    user,
    isLoggedIn,
    register,
    login,
    logout,
    refresh,
  };
};

export const fetchCurrentUser = async () => {
  return await $jwtFetch<User>("/auth/me", {
    redirectIfNotAuthenticated: false,
  });
};

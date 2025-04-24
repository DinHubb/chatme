export default defineNuxtRouteMiddleware(async () => {
  const useStore = useUserStore();

  // Check logged when the middleware runs
  useStore.checkLogged();

  if (!useStore.isLoggedIn) return navigateTo("/login", { replace: true });
});

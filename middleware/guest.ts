export default defineNuxtRouteMiddleware((to, from) => {
  const user = useUser();

  if (to.path === "/admin" && !user?.admin) return navigateTo(from.path);
});

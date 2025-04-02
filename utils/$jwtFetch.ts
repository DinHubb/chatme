import { $fetch, FetchError } from "ofetch";

const JWT_HEADER = "Authorization";
const ACCESS_TOKEN = "access_token";

export const $jwtFetch = $fetch.create({
  credentials: "include",

  async onRequest({ request, options }) {
    const { apiBase, urlBase } = useRuntimeConfig().public;
    const token = useCookie(ACCESS_TOKEN).value;

    let headers: any = {
      accept: "application/json",
      ...options?.headers,
      ...(token && { [JWT_HEADER]: `Bearer ${token}` }),
      referer: urlBase,
    };

    options.headers = headers;
    options.baseURL = apiBase;
  },

  async onResponse({ response }) {
    const token = response._data?.meta?.token;

    if (token) {
      const tokenCookie = useCookie(ACCESS_TOKEN);
      tokenCookie.value = token;
    }
  },

  async onResponseError({ response }) {
    const status = response.status;

    if ([500].includes(status)) {
      console.error("Server error", response.statusText, response._data);
    }
  },
});

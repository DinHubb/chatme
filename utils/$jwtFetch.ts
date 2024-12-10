import { $fetch, FetchOptions, FetchError } from "ofetch";

const JWT_HEADER = "Authorization";
const ACCESS_TOKEN = "access_token";

// could not import these types from ofetch, so copied them here
interface ResponseMap {
  blob: Blob;
  text: string;
  arrayBuffer: ArrayBuffer;
}

type ResponseType = keyof ResponseMap | "json";
// end of copied types

export type JwtfetchOptions<R extends ResponseType> = FetchOptions<R> & {
  redirectIfNotAuthenticated?: boolean;
};

export async function $jwtFetch<T, R extends ResponseType = "json">(
  path: RequestInfo,
  { redirectIfNotAuthenticated = true, ...options }: JwtfetchOptions<R> = {}
) {
  const { apiBase, urlBase } = useRuntimeConfig().public;
  let token = useCookie(ACCESS_TOKEN).value;
  const router = useRouter();

  // on client initiate a csrf request and get it from the cookie set by laravel
  if (
    process.client &&
    ["post", "delete", "put", "patch"].includes(
      options?.method?.toLowerCase() ?? ""
    )
  ) {
    // cannot use nuxt composables such as useCookie after an async operation:
    // https://github.com/nuxt/framework/issues/5238

    token = getCookie(ACCESS_TOKEN);
  }

  let headers = {
    accept: "application/json",
    ...options?.headers,
    ...(token && { [JWT_HEADER]: "Bearer " + token }),
  };

  if (process.server) {
    headers = {
      ...headers,
      ...useRequestHeaders(["cookie"]),
      referer: urlBase,
    };
  }

  try {
    const response = await $fetch<T, R>(path, {
      baseURL: apiBase,
      ...options,
      headers,
      credentials: "include",
    });

    if (response.meta?.token) {
      const token = useCookie(ACCESS_TOKEN);
      token.value = response.meta.token;
    }

    return response;
  } catch (error) {
    if (!(error instanceof FetchError)) throw error;

    // when any of the following redirects occur and the final throw is not caught then nuxt SSR will log the following error:
    // [unhandledRejection] Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client

    const status = error.response?.status ?? -1;
    if (redirectIfNotAuthenticated && [401, 419].includes(status)) {
      router.push("/login");
    }
  }
}

function getCookie(name: string) {
  const match = document.cookie.match(
    new RegExp("(^|;\\s*)(" + name + ")=([^;]*)")
  );
  return match ? decodeURIComponent(match[3]) : null;
}

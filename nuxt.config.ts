// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },

  app: {
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      noscript: [{ children: "JavaScript is required" }],
    },
  },

  ssr: false,

  modules: ["@formkit/nuxt", "nuxt-headlessui", "@pinia/nuxt", "dayjs-nuxt"],

  formkit: {
    configFile: "./formkit.config.ts",
    autoImport: true,
  },

  headlessui: {
    prefix: "Headless",
  },

  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },

  dayjs: {
    locales: ["ru", "uz"],
    plugins: ["relativeTime", "utc", "timezone"],
    defaultLocale: "en",
    defaultTimezone: "Uzbekistan/Tashkent",
  },

  components: {
    dirs: [
      {
        path: "~/components/ui",
        prefix: "UI",
      },
      {
        path: "~/components",
      },
    ],
  },

  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_API_BASE,
      urlBase: process.env.NUXT_URL_BASE,
    },
  },
});

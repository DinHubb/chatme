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

  modules: ["@formkit/nuxt", "nuxt-headlessui"],

  formkit: {
    configFile: "./formkit.config.ts",
    autoImport: true,
  },
  headlessui: {
    prefix: "Headless",
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
      apiAdmin: process.env.NUXT_API_ADMIN,
      urlBase: process.env.NUXT_URL_BASE,
    },
  },
});

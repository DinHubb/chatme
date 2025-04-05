/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "formkit.theme.ts",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#011627",
        secondary: "#707579",
        tg: "#3390ec",
        darkTg:
          "hsl(209.83783783783787, 82.95964125560539%, 52.27450980392157%)",
        placeholderInput: "#9e9e9e",
        link: "#34aaf2",
        hgray: "#F5F5F5",
        brcolor: "#dfe1e5",
        hvBrcolor: "#c4c9cc",
        messageBg: "#e3fee0",
        darkBg: "#181818",
        primaryIndigo: "rgb(135,116,225)",
        lightSecond: "rgba(112, 117, 121, 0.08)",
        bgColor: "#f4f4f5",
      },
    },
  },
  plugins: [],
};

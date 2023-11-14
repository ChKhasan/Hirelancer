export default {
  head: {
    title: "Hirelancer",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
  },

  css: ["ant-design-vue/dist/antd.css", "@/assets/css/main.css"],

  plugins: [
    { src: "~plugins/antdv.js" },
    { src: "~plugins/v-mask.js", ssr: false },
    { src: "~plugins/vue-otp-input.js", ssr: false },
    { src: "~plugins/vue-drawer-layout.js", ssr: false },
  ],

  components: true,

  buildModules: ["@nuxtjs/tailwindcss"],

  modules: ["@nuxtjs/axios"],
  axios: {
    credentials: false,
    init(axios) {
      axios.defaults.withCredentials = true;
    },
    baseURL: "https://hirelancer.kifa.uz/api",
  },

  build: {
    babel: {
      compact: true,
    },
    vendor: ["aos"],
    standalone: true,
    extend(config, ctx) {
      config.externals = [
        {
          encoding: "encoding",
        },
      ];
    },
  },
};

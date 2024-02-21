import Nuxtus from "..";

export default defineNuxtConfig({
  modules: [Nuxtus],
  directus: {
    url: "http://localhost:8055",
  },
  nuxtus: {
    authDirectus: true,
  },
  runtimeConfig: {
    nuxtus: {
      directus: {
        email: "admin@example.com",
        password: "password",
      },
    },
  },
});

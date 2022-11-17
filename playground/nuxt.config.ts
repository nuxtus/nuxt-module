import Nuxtus from '..'

export default defineNuxtConfig({
  modules: ['nuxt-directus', Nuxtus],
  directus: {
    url: 'http://localhost:8055',
    email: 'admin@example.com',
    password: 'password'
  },
  nuxtus: {
    authDirectus: true
  }
})

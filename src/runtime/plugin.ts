import { defineNuxtPlugin, useRuntimeConfig } from '#app'

import { useDirectusAuth } from '#imports'

export default defineNuxtPlugin(async (nuxtApp) => {
  try {
    const config = useRuntimeConfig()
    if (!Object.hasOwn(config.public.nuxtus.directus, 'token')) {
      const { login } = useDirectusAuth()
      await login({
        email: config.public.nuxtus.directus.email,
        password: config.public.nuxtus.directus.password
      })
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  }
})

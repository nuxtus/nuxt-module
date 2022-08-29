import { defineNuxtPlugin, useRuntimeConfig } from '#app'

import { useDirectusAuth } from '#imports'

export default defineNuxtPlugin(async (nuxtApp) => {
  try {
    const config = useRuntimeConfig()
    if (!Object.hasOwn(config.directus, 'token')) {
      const { login } = useDirectusAuth()
      await login({
        email: config.public.directusEmail,
        password: config.public.directusPassword
      })
    }
  } catch (error) {
    console.error(error)
  }
})

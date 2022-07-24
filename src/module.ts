import { addPlugin, defineNuxtModule } from '@nuxt/kit'

import { fileURLToPath } from 'url'
import { resolve } from 'path'

export interface ModuleOptions {
  authDirectus: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxtus',
    configKey: 'nuxtus'
  },
  defaults: {
    authDirectus: true
  },
  setup (options, nuxt) {
    if (options.authDirectus) {
      const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
      nuxt.options.build.transpile.push(runtimeDir)
      addPlugin(resolve(runtimeDir, 'plugin'))
    }
  }
})

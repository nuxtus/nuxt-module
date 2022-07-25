import { addDevServerHandler, addPlugin, defineNuxtModule } from '@nuxt/kit'

import collectionHandler from './endpoints/collection.post'
import fieldHandler from './endpoints/field.post'
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
    addDevServerHandler({
      route: '/api/directus/field',
      // method: 'POST', // Not required as we are only adding to dev server
      handler: fieldHandler
    })
    addDevServerHandler({
      route: '/api/directus/collection',
      // method: 'POST', // Not required as we are only adding to dev server
      handler: collectionHandler
    })
  }
})

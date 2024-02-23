import {
  addDevServerHandler,
  addPlugin,
  createResolver,
  defineNuxtModule,
} from "@nuxt/kit";

import collectionHandler from "./endpoints/collection.post";
import { eventHandler } from "h3";
import fieldHandler from "./endpoints/field.post";

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxtus",
    configKey: "nuxtus",
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_, nuxt) {
    const resolver = createResolver(import.meta.url);

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve("./runtime/plugin"));

    addDevServerHandler({
      route: "/api/directus/field",
      handler: eventHandler(fieldHandler),
    });
    addDevServerHandler({
      route: "/api/directus/collection",
      handler: eventHandler(collectionHandler),
    });
  },
});

import { fileURLToPath } from "url";
import { resolve } from "path";
import { addDevServerHandler, addPlugin, defineNuxtModule } from "@nuxt/kit";

import { eventHandler } from "h3";
import collectionHandler from "./endpoints/collection.post";
import fieldHandler from "./endpoints/field.post";

export interface ModuleOptions {
  authDirectus: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxtus",
    configKey: "nuxtus",
  },
  defaults: {
    authDirectus: true,
  },
  setup(options, nuxt) {
    if (options.authDirectus) {
      const runtimeDir = fileURLToPath(new URL("./runtime", import.meta.url));
      nuxt.options.build.transpile.push(runtimeDir);
      addPlugin(resolve(runtimeDir, "plugin"));
    }
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

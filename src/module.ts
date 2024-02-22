import { fileURLToPath } from "url";
import { resolve } from "path";
import { addDevServerHandler, addPlugin, defineNuxtModule } from "@nuxt/kit";

import { eventHandler } from "h3";
import collectionHandler from "./endpoints/collection.post";
import fieldHandler from "./endpoints/field.post";

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxtus",
    configKey: "nuxtus",
  },
  defaults: {},
  setup(options, nuxt) {
    const runtimeDir = fileURLToPath(new URL("./runtime", import.meta.url));
    nuxt.options.build.transpile.push(runtimeDir);
    addPlugin(resolve(runtimeDir, "plugin"));

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

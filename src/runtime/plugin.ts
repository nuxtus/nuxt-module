import type {
  DirectusClient,
  RestClient,
  StaticTokenClient,
} from "@directus/sdk";
import {
  createDirectus,
  readItem,
  readItems,
  readSingleton,
  rest,
  staticToken,
} from "@directus/sdk";
import { createError, defineNuxtPlugin, useRuntimeConfig } from "#app";

import type { NuxtError } from "#app";
import type { Ref } from "vue";

// TODO: Import schema from ../interfaces/nuxtus.ts?
type Schema = {};

declare module "nuxt/schema" {
  interface RuntimeConfig {
    public: PublicRuntimeConfig;
    nuxtus: {
      directus: {
        email: string;
        password: string;
        token?: string;
      };
    };
  }
  interface PublicRuntimeConfig {
    nuxtus: {
      authDirectus: Boolean;
      directus: {
        url: string;
      };
    };
  }
}

type DirectusRest = DirectusClient<Schema> & RestClient<Schema>;

type DirectusRestToken = DirectusClient<Schema> &
  RestClient<Schema> &
  StaticTokenClient<Schema>;

let directus: DirectusRest | DirectusRestToken;

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();

  if (process.client || !runtimeConfig.public.nuxtus.authDirectus) {
    directus = createDirectus(runtimeConfig.public.nuxtus.directus.url).with(
      rest()
    ) as DirectusRest;
  } else {
    if (!runtimeConfig.nuxtus.directus.token) {
      throw createError({
        statusCode: 400,
        statusMessage:
          "No Directus token set when requiring authenticated user or using on client.",
      });
    }
    directus = createDirectus(runtimeConfig.public.nuxtus.directus.url)
      .with(rest())
      .with(
        staticToken(runtimeConfig.nuxtus.directus.token)
      ) as DirectusRestToken;
  }

  function checkError(error: Ref<NuxtError<unknown> | null>): void {
    if (error.value) {
      throw createError({
        statusCode: error.value.statusCode,
        statusMessage:
          "An error occurred fetching Directus data. Check server logs - this is usually caused by invalid/missing permissions.",
      });
    }
  }

  return {
    provide: { checkError, directus, readItem, readItems, readSingleton },
  };
});

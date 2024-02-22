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

import type { Ref } from "vue";
import type { NuxtError } from "#app";

// TODO: Import schema from ../interfaces/nuxtus.ts?
type Schema = {};

type DirectusRest = DirectusClient<Schema> & RestClient<Schema>;

type DirectusRestToken = DirectusClient<Schema> &
  RestClient<Schema> &
  StaticTokenClient<Schema>;

let directus: DirectusRest | DirectusRestToken;

export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig();

  if (process.client || !runtimeConfig.public.nuxtus.authDirectus) {
    directus = createDirectus(runtimeConfig.public.nuxtus.directus.url).with(
      rest()
    ) as DirectusRest;
  } else {
    if (!runtimeConfig.public.nuxtus.directus.token) {
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

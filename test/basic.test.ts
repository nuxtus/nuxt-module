import { $fetch, setup } from "@nuxt/test-utils/e2e";
import { describe, expect, it } from "vitest";

import { fileURLToPath } from "node:url";

describe("ssr", async () => {
  await setup({
    rootDir: fileURLToPath(new URL("./fixtures/basic", import.meta.url)),
  });

  it("renders the index page", async () => {
    // Get response to a server-rendered page with `$fetch`.
    // const html = await $fetch("/");
    // expect(html).toContain('<div>basic</div>')
  });
});

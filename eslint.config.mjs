import { createConfigForNuxt } from "@nuxt/eslint-config/flat";

export default createConfigForNuxt({
  dirs: {
    src: ["./src", "./playground"],
  },
}).append({
  ignores: ["dist", "node_modules"],
});

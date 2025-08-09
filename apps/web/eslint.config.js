import { svelteKitConfig } from "@repo/eslint-config/sveltekit";
import svelteConfig from "./svelte.config.js";

/** @type {import("eslint").Linter.Config} */
export default [
  ...svelteKitConfig,
  {
    files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
    languageOptions: {
      parserOptions: {
        svelteConfig,
      },
    },
  },
];

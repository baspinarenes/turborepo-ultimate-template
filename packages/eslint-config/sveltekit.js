import svelte from "eslint-plugin-svelte";
import globals from "globals";
import ts from "typescript-eslint";
import baseConfig from "./base.js";

/**
 * A custom ESLint configuration for libraries that use Next.js.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const svelteKitConfig = [
  ...baseConfig,
  ...svelte.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    ignores: [".svelte-kit/*"],
  },
  {
    files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        extraFileExtensions: [".svelte"], // Add support for additional file extensions, such as .svelte
        parser: ts.parser,
      },
    },
  },
  {
    rules: {},
  },
];

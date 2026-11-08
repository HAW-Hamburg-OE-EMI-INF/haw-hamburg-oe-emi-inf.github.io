import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: ["dist/**", ".astro/**", "node_modules/**"],
  },
  // TypeScript recommended
  ...tseslint.configs.recommended,
  // Astro recommended
  ...eslintPluginAstro.configs.all,
  {
    rules: {
      "astro/sort-attributes": "off",
    },
  },
];

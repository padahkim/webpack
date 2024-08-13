import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling"],
            "index",
            "unknown",
          ],
          pathGroups: [
            {
              pattern: "react*,react*/**",
              group: "external",
              position: "before",
            },
            {
              pattern: "@Components/**/*",
              group: "internal",
              position: "after",
            },
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
          },
        },
      ],
    },
  },
];

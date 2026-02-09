import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default tseslint.config(
    { ignores: ["./apps/*/dist"] },
    {
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            prettierConfig,
        ],
        languageOptions: {
            ecmaVersion: 2022,
            parserOptions: {
                tsconfigRootDir: import.meta.dirname,
                projectService: {
                    allowDefaultProject: [
                        "eslint.config.js",
                        "vitest.config.ts",
                    ],
                    defaultProject: "./tsconfig.base.json",
                },
            },
        },
        plugins: {
            prettier: prettierPlugin,
        },
        rules: {
            quotes: ["error", "double"],
            "prettier/prettier": "error",
        },
    },
);

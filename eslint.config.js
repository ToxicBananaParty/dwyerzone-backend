import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default tseslint.config({ ignores: ['**/dist/**']}, {
    extends: [js.configs.recommended, ...tseslint.configs.recommended, prettierConfig],
    files: ['**/*.ts'],
    languageOptions: {
        ecmaVersion: 2022,
    },
    plugins: {
        'prettier': prettierPlugin,
    },
    rules: {
        'quotes': ['error', 'double'],
        'prettier/prettier': 'error',
    },
});
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default defineConfig([
  globalIgnores(['dist']),
  eslintPluginPrettierRecommended,
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      complexity: ['error', { max: 12 }],

      // Restricts deep callback nesting to prevent "callback hell"
      'max-nested-callbacks': ['warn', { max: 4 }],

      // Limits depth of blocks (e.g., deeply nested loops/if conditions)
      'max-depth': ['warn', { max: 4 }],

      // Restricts maximum number of parameters allowed per function
      'max-params': ['error', { max: 3 }],

      // Restricts maximum number of statements inside a single function
      'max-statements': ['warn', { max: 20 }],
    },
  },
]);

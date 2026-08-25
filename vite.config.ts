import { configDefaults, defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/lead_dev/', // Deployed base url
  test: {
    exclude: [...configDefaults.exclude, 'e2e_tests'],
    coverage: {
      provider: 'v8',
    },
  },
  css: {
    modules: {
      // This converts kebab-case classes to camelCase
      localsConvention: 'camelCase',
    },
  },
});

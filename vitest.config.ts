import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

import viteConfig from './vite.config';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  resolve: viteConfig.resolve,
  server: { open: false },
  test: {
    coverage: {
      provider: 'istanbul',
      reporter: ['json', 'json-summary', 'html'],
      reportOnFailure: true,
      thresholds: {
        branches: 0,
        functions: 0,
        lines: 0,
        statements: 0,
      },
    },
    css: {
      modules: { classNameStrategy: 'non-scoped' },
    },
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.spec.ts', 'src/**/*.spec.tsx'],
    setupFiles: ['src/setupTests.ts'],
  },
});

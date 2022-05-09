import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

import { aliases } from './vite/aliases';

export default defineConfig(() => {
  return {
    resolve: { alias: aliases },

    css: {
      modules: {
        generateScopedName: '[name]__[local]___[hash:base64:5]',
      },
    },

    plugins: [
      react(),
      tsconfigPaths(),
      checker({
        overlay: true,
        typescript: false,
        eslint: {
          lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
        },
      }),
    ],
  };
});

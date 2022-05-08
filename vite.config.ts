import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig((options) => {
  console.log('options', options);
  return {
    resolve: {
      alias: {
        '@core': path.resolve(__dirname, 'src/core'),
        '@tasks': path.resolve(__dirname, 'src/tasks'),
        '@screens': path.resolve(__dirname, 'src/screens'),
      },
    },
    css: {
      modules: {
        generateScopedName: '[name]__[local]___[hash:base64:5]',
      },
    },
    plugins: [react()],
  };
});

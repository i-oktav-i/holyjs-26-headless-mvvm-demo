import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
  ],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly',
      generateScopedName: '[name]__[local]__[hash:base64:5]',
    },
  },
  server: {
    open: false,
    port: 5173,
  },
  resolve: {
    alias: {
      '@tokens': path.join(import.meta.dirname, './src/ui/cssModules/index.ts'),
      // '@tokens': path.join(import.meta.dirname, './src/ui/material/index.ts'),
    },
  },
});

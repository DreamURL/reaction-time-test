import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/reaction-time-test/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  }
});

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';


export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  base: '/bolg/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        404: '404.html'
      }
    }
  },
});
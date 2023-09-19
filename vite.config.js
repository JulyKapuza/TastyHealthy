import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import ViteGhPages from 'vite-plugin-gh-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // ViteGhPages({
    //   base: 'https://julykapuza.github.io/TastyHealthy/'
    // })
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})

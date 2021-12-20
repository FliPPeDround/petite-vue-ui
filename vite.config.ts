import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    target: 'esnext',
    minify: false,
    lib: {
      entry: 'src/components/index.ts',
      name: 'PetiteVueUi',
      formats: ['es', 'umd', 'iife']
    }
  },
  server: {
    open: true
  }
})

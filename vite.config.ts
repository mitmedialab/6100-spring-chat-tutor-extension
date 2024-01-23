import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/content.ts',
      formats: ['es'],
      fileName: "content"
    }
  },
})

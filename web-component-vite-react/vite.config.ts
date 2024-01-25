import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/index.tsx',
      name: 'mywebcomponent',
      fileName: (format) => `mywebcomponent.${format}.js`,
    },
    target: 'es2020',
  }
})


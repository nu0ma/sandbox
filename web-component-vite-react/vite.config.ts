import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/index.tsx',
      name: 'mywebcomponent',
      fileName: 'bundle.js',
    },
    target: 'es2020',
  },
});

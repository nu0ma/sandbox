import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
    }),
  ],
  build: {
    lib: {
      entry: './src/index.tsx',
      name: 'mywebcomponent',
      fileName: 'bundle',
    },
    target: 'es2020',
  },
});

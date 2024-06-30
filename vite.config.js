import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/kosa-2024/',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables/breakpoints.scss"; @import "./src/styles/variables/colors.scss"; @import "./src/styles/variables/sizing.scss";`,
      },
    },
  },
});

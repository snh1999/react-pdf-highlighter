import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'


export default defineConfig({
  base: "/react-pdf-highlighter/",
  build: {
    outDir: "dist",
  },
  plugins: [react()],
  server: {
    port: 3000,
  },
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
});

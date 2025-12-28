import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: path.resolve(__dirname, "src/public"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "src/public/2026-1.pdf"),
      },
    },
  },
  publicDir: path.resolve(__dirname, "dist/public/photos"),
  server: {
    port: 5173,
    open: false,
  },
  plugins: [],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/dist"),
    },
  },
});

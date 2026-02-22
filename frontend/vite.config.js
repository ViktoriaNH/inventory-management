import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Отключаем CSP-заголовок со стороны Vite (если хочешь)
    headers: {
      "Content-Security-Policy": "",
    },
    // Проксируем /api на твой backend
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, "/api"), // оставляем как есть
      },
    },
  },
});


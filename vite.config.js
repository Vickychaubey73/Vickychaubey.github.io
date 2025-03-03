import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    host: true, // Mengizinkan akses dari jaringan lain
    cors: true, // Mengaktifkan CORS untuk akses eksternal
    allowedHosts: ['739b-182-253-250-251.ngrok-free.app'], // Mengizinkan akses dari domain ini
  },
})

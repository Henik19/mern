import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/mern/task26/',   // 👈 THIS FIXES YOUR ERROR
})
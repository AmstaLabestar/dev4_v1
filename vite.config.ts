import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/dev4_v1/',  // Remplace par le nom de ton repo GitHub
  plugins: [react()],
})

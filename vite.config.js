import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Hello_World_app/',  // Replace with your actual repo name
  plugins: [react()],
})
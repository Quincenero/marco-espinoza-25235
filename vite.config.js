import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/marco-espinoza-25235/', //nombre del repo
  build: {
    outDir: 'dist'
  }
})
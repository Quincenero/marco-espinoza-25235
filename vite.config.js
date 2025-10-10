import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  //base: '/marco-espinoza-25235/',
  build: {
    outDir: 'docs',  // Cambia dist por docs
    emptyOutDir: true
  }
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Detectar destino de despliegue
const deployTarget = process.env.DEPLOY_TARGET

const isGitHubPages = deployTarget === 'gh-pages'

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? '/marco-espinoza-25235/' : '/',
  build: {
    outDir: isGitHubPages ? 'docs' : 'dist',
    emptyOutDir: true
  }
})
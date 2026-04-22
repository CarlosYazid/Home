import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  // Ensure environment variables with VITE_ prefix are exposed
  // (this is the default behavior, documented here for clarity)
  envPrefix: 'VITE_',
})

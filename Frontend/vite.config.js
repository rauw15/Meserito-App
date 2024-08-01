import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'js-cookie': 'js-cookie/dist/js.cookie.js'
    }
  }
})

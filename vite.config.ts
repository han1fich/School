import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'firebase/app': '@firebase/app',
      'firebase/auth': '@firebase/auth',
      'firebase/firestore': '@firebase/firestore',
    },
  },
  server: {
    port: 3000,
    host: true
  }
})

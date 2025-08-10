/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // gives you test(), describe(), expect()
    environment: "jsdom", // DOM environment
    setupFiles: "./vitest.setup.ts",
  },
})

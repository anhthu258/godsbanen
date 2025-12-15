import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({command}) => {
  const isDev = command === 'serve';
  
  return {
    base: isDev ? '/' : '/godsbanen/',
    plugins: [react(), tailwindcss()],
  }
})

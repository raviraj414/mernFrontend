import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allows external access
    port: parseInt(process.env.PORT, 10) || 5173, // Uses PORT from environment or defaults to 5173
  },
});

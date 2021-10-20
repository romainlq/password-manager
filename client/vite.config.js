import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    define: {
        ...(process.env.NODE_ENV !== 'production'
            ? { API_URL: `'http://localhost:3001/api'` }
            : { API_URL: `'https://password-manager-koa.herokuapp.com/'` }),
    },
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});

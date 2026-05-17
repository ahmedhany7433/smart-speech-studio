import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        host: '0.0.0.0',
        port: 5173,
        allowedHosts: ['smart-speech-studio-production-020d.up.railway.app'],
    },
    preview: {
        host: '0.0.0.0',
        port: 4173,
        allowedHosts: ['smart-speech-studio-production-020d.up.railway.app'],
    },
});
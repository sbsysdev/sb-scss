import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

export default defineConfig({
    resolve: {
        alias: {
            '@sbsys/sb-scss': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern',
            },
        },
    },
});

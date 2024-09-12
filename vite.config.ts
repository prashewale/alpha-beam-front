import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// import inject from "@rollup/plugin-inject";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        // inject({
        //   $: "jquery",
        //   jQuery: "jquery",
        //   "window.jQuery": "jquery",
        // }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})

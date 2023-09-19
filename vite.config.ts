import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const { VITE_AUTH_BASE_URL } = loadEnv(mode, process.cwd())
  return {
    base: './',
    plugins: [
      react(),
      visualizer({
        emitFile: true,
        filename: 'visualizer.html',
        open: true,
        gzipSize: true,
        brotliSize: true
      })
    ],
    server: {
      host: '0.0.0.0',
      proxy: {
        '/api': {
          target: VITE_AUTH_BASE_URL,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
        }
      }
    },
    build: {
      // sourcemap: true
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@components': path.resolve(__dirname, './src/components'),
        '@utils': path.resolve(__dirname, './src/utils'),
        '@stores': path.resolve(__dirname, './src/stores'),
        '@api': path.resolve(__dirname, './src/api'),
        '@mock': path.resolve(__dirname, './src/mock')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/assets/mixin.scss";'
        }
      }
    }
  }
})

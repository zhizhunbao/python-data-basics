import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/python-data-basics/',
  plugins: [
    react(),
    mdx({
      providerImportSource: '@mdx-js/react'
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@common': resolve(__dirname, 'src/common'),
      '@modules': resolve(__dirname, 'src/modules'),
      '@assets': resolve(__dirname, 'src/assets'),
      // 具体模块别名
      '@business': resolve(__dirname, 'src/modules/Business'),
      '@dataTools': resolve(__dirname, 'src/modules/DataTools'),
      '@visualization': resolve(__dirname, 'src/modules/Visualization'),
      '@workflow': resolve(__dirname, 'src/modules/Workflow'),
      // 通用模块别名
      '@layout': resolve(__dirname, 'src/common/modules/Layout'),
      '@elements': resolve(__dirname, 'src/common/modules/Elements'),
      '@mdx': resolve(__dirname, 'src/common/modules/MDX'),
      '@codeBlock': resolve(__dirname, 'src/common/modules/CodeBlock'),
      '@dataTable': resolve(__dirname, 'src/common/modules/DataTable'),
      '@pythonChart': resolve(__dirname, 'src/common/modules/PythonChart'),
      // 工具和配置别名
      '@utils': resolve(__dirname, 'src/common/utils'),
      '@i18n': resolve(__dirname, 'src/common/i18n'),
      '@store': resolve(__dirname, 'src/common/modules')
    }
  },
  server: {
    port: 3000,
    open: true,
    host: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          state: ['zustand'],
          mdx: ['@mdx-js/react', '@mdx-js/mdx']
        }
      }
    }
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'zustand',
      '@mdx-js/react',
      'prismjs',
      'lucide-react'
    ]
  }
})

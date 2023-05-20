import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    eslintPlugin({
      cache: false, // 可选项：是否启用缓存，默认为 true
      include: ['src/**/*.@(js|jsx|ts|tsx|vue)'], // 可选项：指定要进行 ESLint 检查的文件路径
      exclude: [], // 可选项：指定要排除的文件路径
      fix: true, // 可选项：是否自动修复错误，默认为 false
    }),
  ]
})

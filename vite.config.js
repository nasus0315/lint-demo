import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      cache: false, // 可选项：是否启用缓存，默认为 true
      include: ['src/**/*.@(js|jsx|ts|tsx|vue)'], // 可选项：指定要进行 ESLint 检查的文件路径
      exclude: ['node_modules/**'], // 可选项：指定要排除的文件路径
      fix: true, // 可选项：是否自动修复错误，默认为 false
      lintOnStart: true // 可选项：是否在开发生命周期的开始阶段执行 lint 任务，默认为 true
    })
  ],
  // // 生产环境取消console.log
  // minify: 'terser',
  // terserOptions: {
  //   compress: {
  //     drop_console: true,
  //     drop_debugger: true,
  //   }
  // },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
      '@img': path.resolve(__dirname, '/src/assets/img')
    }
  }
});

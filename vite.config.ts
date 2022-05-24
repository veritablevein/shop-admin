import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslint({
      // 配置选项
    }),
    vueJsx({
      // 配置选项
    })
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 配置scss变量注入方便<style>使用
        additionalData: '@import "@/styles/variables.scss";'
      }
    }
  },
  server: {
    proxy: {
      // 字符串简写写法
      // /foo/123 => http://localhost:4567/foo/123
      // '/foo': 'http://localhost:4567/foo',
      // 选项写法
      '/admin': {
        target: 'https://shop.fed.lagounews.com/api', // 代理的目标地址
        /**
         * 兼容基于名字的虚拟主机
         * a.com localhost:xxx
         * b.com localhost:xxx
         * HTTP请求头部的origin字段
         * 我们在开发模式：默认的origin是真实的origin：localhost:3000
         * changeOrigin: true，代理服务会把origin修改为目标地址http://jsonplaceholder.typicode.com
         */
        changeOrigin: true
        // 路径重写
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})

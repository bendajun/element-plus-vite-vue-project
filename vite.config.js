/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */

import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const envDevelopmentConfig = loadEnv('development', './')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`, // 设置 `@` 指向 `src` 目录
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/element/index.scss" as *;`,
      },
    },
  },
  plugins: [
    vue(),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
    }),
  ],
  base: './', // 设置打包路径
  server: {
    port: 4500, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    // 反向代理，自行配置，参考vite官网
    [envDevelopmentConfig.VITE_APP_BASE_API]: {
      target: envDevelopmentConfig.VITE_PROXY_TARGET,
      changeOrigin: true,
      rewrite: (paths) => paths.replace(`^${envDevelopmentConfig.VITE_APP_BASE_API}`, ''),
    },
  },
})

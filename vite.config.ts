import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    vue({
      include: [/\.md$/, /\.vue$/],
    }),
    Markdown(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      com: path.resolve(__dirname, "./src/components"),
    },
  },
  // build: {
  //   rollupOptions: {
  //     external: ["vue"],
  //     output: {
  //       globals: {
  //         vue: "Vue",
  //       },
  //     },
  //   },
  //   lib: {
  //     entry: "./packages/index.ts",
  //     name: "mar-ui",
  //   },
  // },
  build: {
    target: "modules",
    outDir: "dist", //指定输出路径
    assetsDir: "static", // 指定生成静态资源的存放路径
    minify: "terser",
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "./src/assets/styles/style.scss" as *;',
      },
    },
  },
});

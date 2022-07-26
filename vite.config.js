import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

const htmlPlugin = () => {
  return {
    name: 'html-transform',
    transformIndexHtml(html) {
      return html.replace(/<title>(.*?)<\/title>/, `<title>video-upload</title>`)
    },
  }
}

const resolvePlugin = () => {
  return {
    name: 'resolve-muted',
    config: () => ({
      resolve: {
        alias: [
          // 针对以 ~@/[包名称]开头的，替换为 node_modules/@[包名称]
          { find: /^(~@)(?!\/)(.+)/, replacement: path.join('node_modules/@$2') },
          // 针对以 ~@/ 开头，替换为 src/
          { find: /^~@\//, replacement: path.join(__dirname, 'src/') },
          // 针对以 @/ 开头的，替换为 src/
          { find: /^@\//, replacement: path.join(__dirname, './src', '/') },
        ],
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'], // 当前是默认值
      },
    }),
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), resolvePlugin(), htmlPlugin()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'packages/index.js'),
      name: 'video-upload',
      fileName: (format) => `video-upload.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
        // 资源文件名：css 图片等
        assetFileNames: (assetsName) => {
          if (assetsName.name.includes('.css')) {
            return 'index.css'
          }
          return assetsName.name
        }
      },
    },
    // 默认输出到lib下
    outDir: 'lib',
    sourcemap: () => {
      return import.meta.env.MODE == 'development'
    },
  },
})

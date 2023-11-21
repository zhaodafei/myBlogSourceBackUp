---
title: -vue-router 路由
date: 2020-07-04
categories: 
- Vue
tags:
- Vue
---
`vue-cli3` 中 `vue.config.js` 配置
`vue-cli3` 中 `vue.config.js` 配置

<!-- more -->

### `vue.config.js`  配置文件

 在根目录下创建 vue.config.js 即可使用  [ 和 package.json 同级]

```javascript

module.exports = {
    // 基本路径
    publicPath: './',
    // 打包输出文件目录
    outputDir: 'dist',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,
    // use the full build with in-browser compiler?
    // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
    runtimeCompiler: false,
    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: () => {},
    configureWebpack: () => {},
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    // css相关配置
    /*css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {},
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },*/
    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores
    parallel: require('os').cpus().length > 1,
    // 是否启用dll
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
    // dll: false,
    // PWA 插件相关配置
    // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {},
    // webpack-dev-server 相关配置
    devServer: {
        // open: process.platform === 'darwin',
        //将服务启动后默认打开浏览器
        open: true,
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {// 设置代理
            '/api': {
                target: 'https://www.cnblogs.com/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        },
        before: app => {}
    },
    // 第三方插件配置
    pluginOptions: {
        // ...
    }
};
```

### 在vite 中配置

```js
// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  // 获取环境变量
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: createVitePlugins(env, command === 'build'),
    base: "./",   // 打包相对路径 ================
    resolve: {
      // https://cn.vitejs.dev/config/#resolve-alias
      alias: {
        // 设置路径
        '~': path.resolve(__dirname, './'),
        // 设置别名 这里的./指的是 vite.config.js 的所载目录（根目录）下面的 src
        '@': path.resolve(__dirname, './src')
      },
      // https://cn.vitejs.dev/config/#resolve-extensions
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    build: {
      outDir: mode === 'staging' ? 'dist-staging' : 'dist'
    },
    css: {
      /*preprocessorOptions: {
        // 引入公用的样式
        scss: {
          charset: false,
          additionalData: `
                        @import "@/assets/styles/index.scss";
                        @import "@/assets/styles/mixin.scss";
                    `
        }
      }, */
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: atRule => {
                if (atRule.name === 'charset') {
                  atRule.remove()
                }
              }
            }
          }
        ]
      }
    },
    // vite 相关配置
    server: {
      port: 4100,
      host: true,
      // open: true, // 是否自动打开浏览器
      proxy: {
        '^/api': {
          target: 'http://demo.dafei.com', // 本地 PHP 接口地址
          // target: env.VITE_APP_SHOW_URL,
          changeOrigin: true,
          logLevel: 'debug',
          // tip: 所有接口需要带上前缀/api
          // rewrite: path => path.replace(/^\/api/, '/api')
        }
      }
    }
  }
})
```
































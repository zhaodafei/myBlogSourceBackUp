---
title: vue_webstorm _跳转
date: 2020-07-04
categories: 
- Vue
tags:
- WebStorm
---
### `webstrom` 和 `vue`

解决Vue项目中import xxx from '@/utils' 符号下有灰色波浪线的问题,并且解决文件不能跳转
解决Vue项目中import xxx from '@/utils' 符号下有灰色波浪线的问题,并且解决文件不能跳转
解决了下划线后,鼠标点击可以跳转到对应的文件
解决了下划线后,鼠标点击可以跳转到对应的文件

<!-- more -->

前2中是常见的设置,第三个是针对`vite`开发`vue`

![webstrom vue 波浪线](/img/vue/idea/web_01.png "webstrom vue 波浪线")

![webstrom vue 波浪线](/img/vue/idea/web_02.png "webstrom vue 波浪线")

### vite 中波浪线

`vite`开发的时候没有`webpack`配置文件,需要我们手动建一个文件,让`webstorm识别`,名字可以随便起,最后在设置中吧`webpack`的配置地址指向这文件即可,我这里起的文件名字叫做`zzz_fei.config.js`,文件内容如下

```javascript
/** 此文件没有在项目中使用，
 * 只是为了让 Webstorm 可以识别实际位置
 **/
const path = require("path");

function resolve (dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  resolve: {
    alias: {
      "@": resolve("src"),
    },
  },
};
```

创建完文件后,记得修改`webstorm`中`webpack`的配置

![webstrom vue 波浪线](/img/vue/idea/web_02.png "webstrom vue 波浪线")

### vite 中波浪线2

```wiki
#主要文件 jsconfig.json 和 vite.config.mjs
```

> 01)在项目根目录`jsconfig.json`文件如下
>
> ```json
> {
>   "compilerOptions": {
>     "baseUrl": "./",
>     "paths": {
>       "@/*": [
>         "src/*"
>       ]
>     }
>   },
>   "exclude": [
>     "node_modules",
>     "dist"
>   ]
> }
> ```
>
> 

> 02)在项目根目录`vite.config.mjs`中添加
>
> ```js
> import { resolve } from 'path'
> 
> 
> resolve: {
>   alias: {
>     '~': resolve(__dirname, './'),
>     '@': resolve(__dirname, './src'),
>     components: resolve(__dirname, './src/components'),
>     styles: resolve(__dirname, './src/styles'),
>     utils: resolve(__dirname, './src/utils'),
>   },
> },
> server: { // 给resolve中的alias一个参考
>   port: 8001,
>   proxy: {
>     '/api': {
>       changeOrigin: true,
>       secure: false,
>       target: env.VITE_APP_SERVER,
>       rewrite: path => path.replace(/^\/api/, '')
>     }
>   },
> },
> ```
>
> 

![webstrom vue3 波浪线](/img/vue/idea/web_06.jpg "webstrom vue3 波浪线")




























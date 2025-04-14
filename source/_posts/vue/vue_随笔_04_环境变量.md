---
title: -vue 随笔04
date: 2025-03-28
categories: 
- Vue
tags:
- Vue
---
项目`Vue`种`package.json`与环境变量`env`文件
项目`Vue`种`package.json`与环境变量`env`文件
项目`Vue`种`package.json`与环境变量`env`文件

注: 本文内容,基本都是来自官网信息, 按照个人理解挑选出部分核心内容, 需要了解具体详细内容可以通过本文底部链接查看官网详细内容新

<!-- more -->

本文以`cli`服务为例说明,另外`vite`同理

### 启动`serve`参数

```shell
用法：vue-cli-service serve [options] [entry]

选项：

  --open    在服务器启动时打开浏览器
  --copy    在服务器启动时将 URL 复制到剪切版
  --mode    指定环境模式 (默认值：development)
  --host    指定 host (默认值：0.0.0.0)
  --port    指定 port (默认值：8080)
  --https   使用 https (默认值：false)
```

### 构建`build`参数

```shell
用法：vue-cli-service build [options] [entry|pattern]

选项：

  --mode        指定环境模式 (默认值：production)
  --dest        指定输出目录 (默认值：dist)
  --modern      面向现代浏览器带自动回退地构建应用
  --target      app | lib | wc | wc-async (默认值：app)
  --name        库或 Web Components 模式下的名字 (默认值：package.json 中的 "name" 字段或入口文件名)
  --no-clean    在构建项目之前不清除目标目录的内容
  --report      生成 report.html 以帮助分析包内容
  --report-json 生成 report.json 以帮助分析包内容
  --watch       监听文件变化
```

### 模式和环境变量

**模式**是 Vue CLI 项目中一个重要的概念。默认情况下，一个 Vue CLI 项目有三个模式：

- `development` 模式用于 `vue-cli-service serve`
- `test` 模式用于 `vue-cli-service test:unit`
- `production` 模式用于 `vue-cli-service build` 和 `vue-cli-service test:e2e`

你可以通过传递 `--mode` 选项参数为命令行覆写默认的模式。例如，如果你想要在构建命令中使用开发环境变量

```shell
vue-cli-service build --mode development
```

当你运行 `vue-cli-service build` 命令时，无论你要部署到哪个环境，应该始终把 `NODE_ENV` 设置为 `"production"` 来获取可用于部署的应用程序。

#### 环境变量优先级

```shell
#环境变量文件优先级
01) .env 任何环境都会调用
02) .env.development  测试环境调用并覆盖 .env 文件
03) .env.production  生产环境调用并覆盖 .env 文件 ( 打包发版用 )
04) .env.staging  测试环境调用并覆盖 .env 文件  ( 打包发版用 )
注意: 这四个文件中的 .env.production 和 .env.staging 都是用来给项目打包发版使用里面的必须都定义为 NODE_ENV = production


#在 cli 环境中demo1:
00) 启动文件 package.json
  "scripts": {
    "dev": "vue-cli-service serve",
    "build:prod": "vue-cli-service build",
    "build:stage": "vue-cli-service build --mode staging",
    "preview": "node build/index.js --preview",
  },

01-1).env 文件内容
    VUE_APP_TITLE = '项目名称项目标题'

01-2).env.development 文件内容
    # 开发环境配置
    ENV = 'development'
    # 开发环境
    VUE_APP_BASE_API = '/dev-api'
    # 路由懒加载
    VUE_CLI_BABEL_TRANSPILE_MODULES = true

01-3).env.production 文件内容
    # 生产环境配置
    ENV = 'production'
    # 若依管理系统/生产环境
    VUE_APP_BASE_API = '/prod-api'

01-4).env.staging 文件内容
    NODE_ENV = production
    # 测试环境配置
    ENV = 'staging'
    # 若依管理系统/测试环境
    VUE_APP_BASE_API = '/stage-api'

02)使用判断环境
process.env.NODE_ENV === "production" ? "/" : "/",
```

```shell
#在 vite 环境中demo:

00) 启动文件 package.json
  "scripts": {
    "dev": "vite",
    "build:prod": "vite build",
    "build:stage": "vite build --mode staging",
    "preview": "vite preview"
  },

01-1).env 文件内容
    VITE_APP_TITLE = '项目名称项目标题'

01-2).env.development 文件内容
    # 开发环境配置
    VITE_APP_ENV = 'development'
    # 开发环境
    VITE_APP_BASE_API = '/dev-api'

01-3).env.production 文件内容
    # 生产环境配置
    VITE_APP_ENV = 'production'
    # 生产环境
    VITE_APP_BASE_API = '/prod-api'
    # 是否在打包时开启压缩，支持 gzip 和 brotli
    VITE_BUILD_COMPRESS = gzip

01-4).env.staging 文件内容
    # 生产环境配置
    VITE_APP_ENV = 'staging'
    # 若依管理系统/生产环境
    VITE_APP_BASE_API = '/stage-api'
    # 是否在打包时开启压缩，支持 gzip 和 brotli
    VITE_BUILD_COMPRESS = gzip

02)使用判断环境
import.meta.env.VITE_APP_ENV === 'production' ? '/' : '/',
```

#### staging 模式

```shell
#文件 .env
VUE_APP_TITLE=我是标题

#文件 .env.staging
VUE_APP_TITLE=My App
VUE_APP_TITLE=我是标题新的
```

- `vue-cli-service build` 会加载可能存在的 `.env`、`.env.production` 和 `.env.production.local` 文件然后构建出生产环境应用。
- `vue-cli-service build --mode staging` 会在 staging 模式下加载可能存在的 `.env`、`.env.staging` 和 `.env.staging.local` 文件然后构建出生产环境应用。

<font color="#ff6b81">这两种情况下，根据 `NODE_ENV`，构建出的应用都是生产环境应用，但是在 staging 版本中，`process.env.VUE_APP_TITLE` 被覆写成了另一个值。</font>

### 简单理解

```shell
01) vue-cli-service build 运行后构建的都是生产环境的包
02) --mode staging 只是指定了那个文件运行
```




### 底部

1. [CLI 服务](https://cli.vuejs.org/zh/guide/cli-service.html)

2. [CLI 模式和环境变量](https://cli.vuejs.org/zh/guide/mode-and-env.html)

3. [vite 环境变量和模式](https://cn.vitejs.dev/guide/env-and-mode.html)

4. [webpack 生产环境](https://www.webpackjs.com/guides/production/)

   ```wiki
   #中文: https://www.webpackjs.com/guides/production/
   #英文: https://webpack.js.org/guides/production/
   ```

5. [webpack 模式 ](https://www.webpackjs.com/configuration/mode/)

   ```wiki
   #中文: https://www.webpackjs.com/configuration/mode/
   #英文: https://webpack.js.org/configuration/mode/
   ```

6. xxx
























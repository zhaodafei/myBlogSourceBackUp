---
title: 微信与webstorm
date: 2024-12-10
categories: 
- 微信
tags:
- WebStorm
---
微信与WebStorm开发常见问题01
微信与WebStorm开发常见问题01
微信与WebStorm开发常见问题01

<!-- more -->

### webstorm支持wx语法提示

```wiki
当前webstorm版本2023.1.5

01)安装插件  Wechat mini program support
   插件地址: https://plugins.jetbrains.com/plugin/13396-wechat-mini-program-support
   
02) settings/Languages & Frameworks /JavaScript /Libraries/  
    把这个里面的配置 uni-api 勾选上就可以了
```

![wx语法提示](/img/vue/idea/web_05_wx.jpg "wx语法提示")

### webstorm支持`@`语法跳转

当前webstorm版本2023.1.5

> 1) 配置映射路径在`app.json`
>
> ```json
> {
>   "pages": [
>     "pages/index/index",
>     "pages/index/my",
>   ],
>   "window": {
>     "navigationBarTitleText": "跳转路径配置在resolveAlias",
>     "navigationBarTextStyle": "black",
>     "navigationBarBackgroundColor": "#ffffff",
>     "navigationStyle": "custom"
>   },
>   "resolveAlias": {
>     "~/*": "/*",
>     "@/config/*": "config/*",
>     "@/utils/*": "utils/*"
>   }
> }
> ```
>
> [官网: resolveAlias映射](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#resolveAlias)

> 2) 在项目更路径下创建文件`jsconfig.json`
>
> ```json
> 这个app.json 就是在根路径下面
> {
>   "compilerOptions": {
>     "baseUrl": "./",
>     "paths": {
>       "@/*": [
>         "/*"
>       ]
>     }
>   },
>   "exclude": ["node_modules", "miniprogram_npm"]
> }
> ```
>
> ```json
> 这个app.json 和 jsconfig.json不是同一层
> {
>   "compilerOptions": {
>     "baseUrl": "./",
>     "paths": {
>       "@/*": [
>         "miniprogram/*"
>       ]
>     }
>   },
>   "exclude": ["node_modules", "miniprogram_npm"]
> }
> 
> ```

![路径跳转和映射](/img/vue/idea/web_07_wx.jpg "路径跳转和映射")

### 代码格式化`prettier`

当前webstorm版本2023.1.5

```
npm install prettier --save-dev
```

让`webstorm`中支持`prettier`格式化代码

```shell
01)安装  File->Settings->Plugins( 搜索 prettier)
02)配置  File->Setting->Languages & Frmeworks->JavaScript->prettier 中修改Run for files
        {**/*,*}.{js,ts,jsx,tsx,vue,astro,wxml,wxss}
03)在项目中安装: npm install prettier --save-dev
04)在 package.json 同级目录下面创建 .prettierrc.json 文件,内容如下
```

```json
.prettierrc.json文件内容
{
  "semi": false,
  "singleQuote": true,
  "printWidth": 120,
  "tabWidth": 2,
  "useTabs": false,
  "trailingComma": "none",
  "arrowParens": "avoid",
  "vueIndentScriptAndStyle": true,
  "endOfLine": "auto",
  "proseWrap": "never",
  "htmlWhitespaceSensitivity": "strict"
}

```

```json
.prettierrc.json文件内容( 如果上面文件不生效可以用这个)

{
  "semi": false,
  "singleQuote": true,
  "printWidth": 120,
  "tabWidth": 2,
  "useTabs": false,
  "trailingComma": "none",
  "arrowParens": "avoid",
  "vueIndentScriptAndStyle": true,
  "endOfLine": "auto",
  "proseWrap": "never",
  "htmlWhitespaceSensitivity": "strict",
  "overrides": [
    {"files": "*.wxml", "options": {"parser": "html"}}, 
    {"files": "*.wxss", "options": {"parser": "css"}}, 
    {"files": "*.wxs", "options": {"parser": "babel"}}
  ]
}
```

![代码格式化](/img/vue/idea/web_08_wx.jpg "代码格式化")

1. [WebStorm官网: prettier](https://www.jetbrains.com/help/webstorm/2023.1/prettier.html)
2. [prettier官网: 配置文件](https://prettier.io/docs/en/configuration.html)

### 底部

1. [官网: 基本语法](https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/)
2. xxxx
























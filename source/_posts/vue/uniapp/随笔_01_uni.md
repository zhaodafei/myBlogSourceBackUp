---
title: uni-app基本使用
date: 2022-08-20
categories: 
- uni-app
tags:
- uni-app
---
uni-app基本使用
uni-app基本使用
uni-app基本使用


<!-- more -->

### 基本常见

当前node版本v14.18.0
vue-cli 版本 @vue/cli 5.0.8
我这里使用当前目录下安装脚手架,并且安装uniapp,

```bash
#npm install @vue/cli@4.5.15  #安装到当前目录下脚手架
#./node_modules/.bin/vue -V   #检测版本

## --- 选择模板的时候对应1,2,3,4 输入数字可以选中某个模板 ---
#注意这里版本不要选5.0以上,这时候用5.0以上版本,启动的时候会一直报奇怪的错
#这是使用4.5.15以下版本,创建的是Vue2的项目
## ./node_modules/.bin/vue create -p dcloudio/uni-preset-vue  fei_text

######################## @vue/cli@5.0.8 和 Vue3 ################################
npm install @vue/cli@5.0.8
./node_modules/.bin/vue -V   #检测版本
#vue-cli 版本 @vue/cli 5.0.8 创建支持Vue3的项目
npx degit dcloudio/uni-preset-vue#vite fei_test3


#uniapp 部分报错缺少包,需求单独安装
npm install 
yarn add -D @dcloudio/uni-cli-i18n @dcloudio/uni-i18n
npm add -D @dcloudio/uni-cli-i18n @dcloudio/uni-i18n


#启动
npm run dev:h5  #h5启动,浏览器中启动
npm run dev:mp-weixin  #启动后,微信小程序中访问
```

![uniapp 启动成功](/img/vue/uniapp/uni_01.png "uniapp 启动成功")

### 其他

```shell
# 创建以 javascript 开发的工程  
npx degit dcloudio/uni-preset-vue#vite my-vue3-project  

# 创建以 typescript 开发的工程  
npx degit dcloudio/uni-preset-vue#vite-ts my-vue3-project  
```


















---
title: -vue-router 路由02
date: 2020-07-04
categories: 
- Vue
tags:
- Vue
---
路由 `vue-router`
路由 `vue-route` 基本使用

路由 `vue-router` 基本使用

<!-- more -->

### 全局导航守卫`beforeEach`处理元数据`meta`

```javascript
// src/router/index.js 文件中

// 全局导航守卫
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});

// 在组件中获取meta数据信息
<div> {{ $route.meta.title}} </div>
```

### 组件内导航守卫

```javascript
// beforeRouteEnter
// beforeRouteUpdate 
// beforeRouteLeave

beforeRouteLeave(to, from, next) {
    console.log(to,"去那个页面");
    console.log(from,"来自哪个页面");
    next();  //这个不要丢了
}

```







 [vue-router](https://router.vuejs.org/zh/api/#tag "vue-router")






























---
title: -vue-router 路由01
categories: 
- WEB
- Vue
tags:
- Vue
- vue-router
---
路由 `vue-router`

路由 `vue-router` 基本使用

`$route` 和 `$router` 的区别
`$router` 为`VueRouter` 实例,想要导航到不同的`URL`,则使用 `$router.push`方法
`$route` 为当前 `router`跳转对象里面可以获取 `name`、`path`、`query`、`params`等

### 01) 基本目录结构

![vue-router](/img/vue/vue_router.png "vue-router")

### 02)  `src/router/index.js` 路由文件

```javascript
import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home.vue');
const Login = () => import('../views/Login.vue');

// 01)安装 VueRouter
Vue.use(VueRouter);

// 02)配置路由信息
const routes = [
    {path: '/', component: Home, meta: {title: '首页'}},
    {path: '/home', component: Home, meta: {title: 'home首页'}},
    {path: '/login', component: Login, meta: {title: 'login页面'}},
];

// 03)创建路由对象
const router = new VueRouter({
    mode: 'history',
    routes
});

//04) 导出
export default router;

```

### 03) `src/main.js` 加载路由

```javascript
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
```

### 04) `src/App.vue`  渲染路径匹配到的视图

```vue
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'app'
  }
</script>
```

### 05-01) `src/views/Home.vue` 视图文件

```vue
<template>
    <div id="home">
        <div>我是home</div>
        <router-link :to="{path: '/login'}">login</router-link> &nbsp;
        <router-link :to="{path: '/login'}" tag="button">
            tag属性,我是自定义标签
        </router-link> &nbsp;
    </div>

</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>
```

### 05-02) `src/views/Login.vue` 视图文件

```vue
<template>
    <div id="login">
        <div>我是login</div>
        <router-link :to="{ path: '/home' }">home</router-link>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>

</style>
```

### 全局导航守卫处理元数据`meta`

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







 [vue-router](https://router.vuejs.org/zh/api/#tag "vue-router")






























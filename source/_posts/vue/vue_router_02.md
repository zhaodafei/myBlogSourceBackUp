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

### 动态路由addRoutes

场景: 登录系统后从后台接口拿到路由数据, 动态添加到前端`vue`的路由中

```js
// 普通路由
const routes = [
  {
    path: '/',
    name: 'Home',
    component: 'Home__组件xxx'
  },
  {
    path: '/pageA',
    name: 'pageA',
    component: 'pageA__组件xxx',
  }
]
const router = new VueRouter({
  routes
})
```

```js
// 用 router.addRoutes 改写,从后端拿到接口数据
const routes = [
  {
    path: '/',
    name: 'Home',
    component: 'Home__组件xx'
  }
]
const router = new VueRouter({
  routes
})

// 开始改写
let routeFei = [
  {
    path: '/pageA',
    name: 'pageA',
    component: 'pageA__组件xx',
  }
]
router.addRoutes(routeFei); // 注意这里添加的要是从顶级开始的
```

#### 动态路由与404

场景描述: 经过动态路由`addRoutes`添加的路由,刷新浏览器后会出现找不到页面场景

```js
// 用 router.addRoutes 改写,从后端拿到接口数据
const routes = [
  {
    path: '/',
    name: 'Home',
    component: 'Home__组件xx'
  }
]
const router = new VueRouter({
  routes
})

// 模拟后端接口返回的数据
let APIRouteFei = [
  {
    path: '/pageA',
    name: 'pageA',
    component: 'pageA',
  },
  {
    path: '*',
    name: 'NotFound',
    component: 'pageA__组件xx',
    meta: { unAuth: true }
  },
]
router.addRoutes(APIRouteFei); // 注意这里添加的要是从顶级开始的
next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ====这个是重点

// 知识扩展
```

> **知识扩展**
>
> 其实在路由守卫中，只有next()是放行，其他的诸如：next(’/logo’) 、 next(to) 或者 next({ …to, replace: true })
> 都不是放行，而是：中断当前导航，执行新的导航
>
> 可以这么理解：
> next() 是放行，但是如果next()里有参数的话，next()就像被重载一样，就有了不同的功能。
>
> 正以为如此很多情况下在使用动态添加路由`addRoutes()`会遇到下面的情况：
> 在`addRoutes()`之后第一次访问被添加的路由会白屏，这是因为刚刚`addRoutes()`就立刻访问被添加的路由，然而此时`addRoutes()`没有执行结束，因而找不到刚刚被添加的路由导致白屏。因此需要从新访问一次路由才行。
>
> **该如何解决这个问题 ?**
> 此时就要使用`next({ …to, replace: true })`来确保`addRoutes()`时动态添加的路由已经被完全加载上去。
>
> `next({ …to, replace: true })`中的`replace: true`只是一个设置信息，告诉`VUE`本次操作后，不能通过浏览器后退按钮，返回前一个路由。
>
> 因此`next({ …to, replace: true })`可以写成`next({ …to })`
>
> 

### 跳转到404页面

```js
const routes = [
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/Error/404.vue')
  },
  // 当什么都没有匹配到的时候，重定向页面到 404 页面
  {
    path: '/:pathMatch(.*)',
    redirect: '/404',
    name: 'notMatch',
  },
]
```





 [vue-router](https://router.vuejs.org/zh/api/#tag "vue-router")






























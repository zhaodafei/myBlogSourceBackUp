---
title: vue -meta 元数据
date: 2020-07-04
categories: 
- WEB
- Vue
tags:
- Vue
- meta
---
 `vue` 中 `meta` 元数据使用和页面中`title`处理,登录判断处理
 `vue` 中 `meta` 元数据使用和页面中`title`处理,登录判断处理
 `vue` 中 `meta` 元数据使用和页面中`title`处理,登录判断处理

<!-- more -->

### `router.js` 路由文件中设置`meta`

```javascript
export default new Router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            meta:{
                title: "首页-title",
                content: "首页-content",
                isLogin: false, // 是否需要登录
                selfContent: "首页-selfContent", // 自定义属性
            },
            component: () => import('../views/Home.vue'),
        },
        {
            path: '/HelloWorld',
            name: 'HelloWorld',
            meta:{
                title: "我是title",
                content: "我是content",
                isLogin: true,
            },
            component: HelloWorld
        },
    ]
})
```

### `main.js` 中代码

```javascript
router.beforeEach((to, form, next) => {
    /* 路由发生变化修改页面meta */
    if (to.meta.content) {
        // !!!这里的meta在页面上会越来越多,请自行解决!!!
        let head = document.getElementsByTagName('head');
        let meta = document.createElement('meta');
        meta.content = to.meta.content;
        head[0].appendChild(meta)
    }
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title;
    }

    // 登录判断
    if (to.path === '/http-login') {
        sessionStorage.removeItem('user');
    }
    // 没有登录跳转到登录界面
    if (to.meta.isLogin && !JSON.parse(sessionStorage.getItem('user'))) {
        next({path: '/http-login'})
    }

    next()
});
```


































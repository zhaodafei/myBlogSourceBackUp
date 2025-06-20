---
title: -vue 随笔01
date: 2020-07-04
categories: 
- Vue
tags:
- Vue
---
vue 随笔01
vue 随笔01
vue 随笔01

<!-- more -->

### `vue-cli3` 基本使用

```shell
vue-cli3:
vue create my-project

npm install axios
npm install element-ui
npm install vue-router
npm install qs
npm install vuex
npm install echarts

```

[vuejs-templates_webpack_Quickstart](http://vuejs-templates.github.io/webpack/)

### 响应式赋值

```javascript
Object.assign(vueFoo,{fei:"111",bar:"222"})
```



### `$router` 和 `$route` 区别

```html
$router 为 VueRouter 实例,想要导航到不同URL,则使用
$router.push({path:'foo',query:{id:'123',name:'大飞'}})

$route 为当前router跳转对象,里面可以获取到name、path、query、params
this.$route.query
this.$route.params
```

#### this.$router.push 中get 和post 请求

```javascript
// 01) 路由文件配置
export default new Router({
    mode:'history',
    routes: [
        {
            path: '/HelloWorld',
            name: 'HelloWorld',
            component:HelloWorld
        },
    ]
})

//02) 点击事件
<button @click="clickBut">push 点击我</button>
//push 点击我 path ===> 对应query |||| name==>对应params
clickBut() {
    this.$router.push({
        path: 'HelloWorld',
        query: {
            id: 123,
            username: "dafei 我是path==>query" 
        }
    });//get 请求
    this.$router.push({
        name: 'HelloWorld',
        params: {
            id: 123,
            username: "dafei 我是name==>params "
        }
    }) //post 请求
}

// 03) 在 HelloWorld 页面接受参数
<p>get方法接收参数 {{this.$route.query.username}}</p>
<p>post方法接收参数 {{this.$route.params.username}}</p>
```

![路由](/img/vue/router_route/route_01.png "路由")

![提交](/img/vue/router_route/route_02.png "提交")

![接受参数](/img/vue/router_route/route_03.png "接受参数")

### `ES6`异步操作 `promise`

```javascript
// 输出 success bar
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success');//成功调用函数resolve()
    }, 1000);
}).then(data => {
    console.log(data + " bar");
});

//--------------------------
//输出 success bar foo
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success');
    }, 1000);
}).then(data => {
    console.log(data + " bar");
}).then(data=>{
    console.log("foo");
});

//--------------------------
// 输出 failure foo
new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('failure');//失败调用函数reject()
    }, 1000);
}).then(data => {
    console.log(data + " bar");
},error=>{
    console.log(error + ' foo');
});
```

 [Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise "Promise")

### 那些数组操作是响应式

```html
<div id="app">
    <ul>
        <li v-for="item in items" :key="item ">{{item}}</li>
    </ul>
</div>

<script>
    const app = new Vue({
        el: '#app',
        data(){
            return {
                items: ['fei', 'foo', 'bar'],
                number: 123
            }
        }
    });
    
// !!! 通过索引直接修改不是响应式 !!!
// Vue.set(app.items, 3, 'aaa');
// app.items.push('bbb','ccc'); //在数组最后面添加元素
// app.items.pop(); // 删除最后一个元素
// app.items.shift(); // 从数组中删除第一个元素
// app.items.unshift('ddd','eee'); // 在数组中最前面添加元素
// app.items.reverse()  // 翻转数组
// app.items.sort()   //排序数组
    
// splice作用:删除元素/插入元素/替换元素
// 只有一个参数,从第几个开始删除后面元素
// 2个参数从第几个开始,删除几个元素
// 3个参数插入元素
// app.items.splice(1,0,'bbbb');
</script>
```

### 设置全局变量 `Vue.prototype`

```javascript
Vue.prototype.$appName = 'My App'

new Vue({
  beforeCreate: function () {
    console.log(this.$appName)
  }
})
```

 [Vue.prototype](https://cn.vuejs.org/v2/cookbook/adding-instance-properties.html "Vue.prototype")

### 高阶函数 `filter` `map` `reduce`

```javascript
// 高阶函数 filter map reduce  用es6语法
// 过滤小于20的值,返回布尔值 true 或者 false
// 循环数组中的每一个元素
//接受一个函数作为参数，这个函数作为一个累加器，从左到右遍历整个类型数组，最后返回一个单一的值
const nums = [10, 15, 18, 25, 34];
let newNums = nums.filter(item => item < 20) 
.map(item2 => item2 * 2) 
.reduce((total, item3) => total + item3); 

//--------------------
const nums = [10, 15, 18, 25, 34];
let newNum_1 = nums.filter(function (item1) {
    return item1 < 20;
});
console.log(newNum_1); // [10, 15, 18]

let newNum_2 = newNum_1.map(function (item2) {
    return item2 * 2;
});
console.log(newNum_2); // [20, 30, 36]

let newNum_3 = newNum_2.reduce(function (total, item3) {
    return total + item3;
})
console.log(newNum_3); // 86
```

### nginx中配置vue项目

```nginx
#这是在一个PHP的laravel中配置的前后端
server {
    listen       80;
    server_name  demo.fei.com;
    charset utf-8;
    root  E:/selfweb/fei_laravel/public/;
    index index.php index.html;
    #laravel
    location / {
        #autoindex on;
        try_files $uri $uri/ /index.php?$query_string;
    }
    #php
    location ~ .+\.php($|/) {
        fastcgi_pass 127.0.0.1:9000;
        fastcgi_index index.php;
        include fastcgi.conf;
    }
    #vue
    location /web {
        alias   E:/selfweb/vue/temp_vue2/dist;
        index  index.html;
    }
}
```

### `webpack`搭建`Vue` 

```bash
# http://vuejs-templates.github.io/webpack/
$ npm install -g vue-cli
$ vue init webpack my-project
$ cd my-project
$ npm install
$ npm run dev
```



### `vue-cli` 搭建`vue`

```bash
npm root -g  #查看全局下载目录
vue create my-project
npm install vue-router
yarn add  vue-router
```



2种搭建区别

> vue create 和vue init webpack的区别
> vue create 是 vue-cli3.x 的初始化方式,模板可以自由配置
> vue init webpack 是vue-cli2.x的初始化方式,模板使用webpack官方推荐的标准模板
>
> vue init webpack 项目名称
> vue create 项目名称




























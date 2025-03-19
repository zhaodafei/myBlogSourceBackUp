---
title: 传统项目项目引入Vue
date: 2021-12-04
categories: 
- Vue
tags:
- Vue
---
传统项目项目引入`Vue`
传统项目项目引入`Vue`
传统项目项目引入`Vue`
下面more是分隔符

<!-- more -->

## Vue

```vue
<div id="app">
    {{ message }}
    <button type="button" @click="foo()">提交</button>
</div>
<script src="./vue-2.6.14.js"></script>
<script>
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello C#!',
      visible: false
    },
    methods:{
      foo() {
        console.log('我是vue');
      },
    }
  })
</script>
```

### Vue3

```vue
<div id="app"></div>
<script src="./vue.global.js"></script>
<script>
    const app = Vue.createApp({
        setup(propos,context) {
            return {
                msg:"hello world"
            };
        },
        template:`
            <div>{{msg}}</div>
        `
    }).mount("#app")
</script>
```

```vue
<div id="app">
    <div>{{msg1}}___{{msg2}}___{{msg3}}___{{msg4}}</div>
</div>
<script src="./vue.global.js"></script>
<script>
    const app = Vue.createApp({
        setup(propos, context) {
            let msg1 = "hello world";
            let msg3 = Vue.ref("fei22");

            const {ref} = Vue;
            let msg4 = ref("fei33");
            return {
                msg1,
                msg2:"daFei",
                msg3,
                msg4
            };
        },
    }).mount("#app");
</script>
```

```vue
<div id="app">
    <div>
        <p>{{msg4.name}}</p>
        <p>{{msg4.web.name3}}</p>
        <p>ssssss{{msg4.xxx}}</p>
    </div>
    <button @click="updateFei">更新</button>
</div>
<script src="./vue.global.js"></script>
<script>
    const {reactive} = Vue;
    const app = Vue.createApp({
        setup(propos, context) {
            let msg4 = reactive({
                name:"daFei",
                age: 18,
                web:{
                    name:"HTML",
                    name2:"CSS",
                    name3:"JavaScript",
                }
            });

            function updateFei() {
                // msg4.name = msg4.name + "_1";
                // msg4.web.name3 = msg4.web.name3 + "_1";
              delete msg4.name;
            }

            return {
                msg4,
                updateFei
            };
        },
    }).mount("#app");
</script>
```



## jQ和Vue

```html
<button type="button" onclick="foo()">提交</button>
<script>
  function foo() {
    console.log('ok');
    app.foo() // 调用Vue 中的方法
  }
</script>
```



## axios

```html
// tip: 在 axios-0.24.0.min.js 同级目录下需要下载好 axios.min.map
<script src="./axios-0.24.0.min.js"></script>

// 使用方法参考官网 https://www.npmjs.com/package/axios
```



## element-ui

```html
// 下载链接地址 https://unpkg.com/browse/element-ui@2.15.6/lib/theme-chalk/fonts/
// https://unpkg.com/browse/element-ui@2.15.6/lib/theme-chalk/fonts/
// tip: 在同级目录下需要有 
/font/element-icons.woff 
/font/
<link rel="stylesheet" href="./element-ui-2.15.6.css">

<script src="../common/js/element-ui-2.15.6.js"></script>
<script>
    // 使用
    ELEMENT.Message("消息提示")
    
    ELEMENT.MessageBox({
      type: 'alert',
      title: "标题",
      message: "我是弹窗",
      callback:()=>{
        console.log('回调ok');
      }
    })
</script>
```








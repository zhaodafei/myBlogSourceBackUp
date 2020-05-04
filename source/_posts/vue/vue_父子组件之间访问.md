---
title: vue 父子组件之间访问
categories: 
- web前端
- vue
tags:
- vue
---
vue 父子组件之间访问 `this.$refs` 和 `this.$parent` 

访问跟组件 `this.$root.xxxxxxxx`

### `vue` 父组件访问子组件 `this.$refs`

```html
<div id="app">
    {{ message }}
    <button value="点击" @click="p_click">点击获取子组件</button>
    <children_fei ref="children_ref"> </children_fei>
</div>
<template id="children_foo"> <!--子组件-->
    <div><button  value="点击">点击</button></div>
</template>
<script src="vue.js"></script>
<script>
    const children_fei = {
        template: '#children_foo',
        data() {
            return {
                children_message: "我是子组件bar"
            }
        },
        methods: {

        }
    };

    const app = new Vue({
        el: '#app',
        data() {
            return {
                message: 'Hello Vue!'
            }
        },
        methods: {
            p_click:function () { // 访问子组件 children_message
                console.log(this.$refs.children_ref.children_message);
            }
        },
        components: {
            children_fei
        }
    });
</script>

```

![vue refs](/img/vue/vue_refs.png "vue refs")

 [refs](https://cn.vuejs.org/v2/guide/components-edge-cases.html#%E8%AE%BF%E9%97%AE%E5%AD%90%E7%BB%84%E4%BB%B6%E5%AE%9E%E4%BE%8B%E6%88%96%E5%AD%90%E5%85%83%E7%B4%A0 "refs")

### `vue` 子组件访问父组件  `this.$parent`

```html
<div id="app">
    {{ message }}
    <children_fei> </children_fei>
</div>
<template id="children_foo"> <!--子组件-->
    <div><button  value="点击" @click="ccc_click">点击</button></div>
</template>
<script src="vue.js"></script>
<script>
    const children_fei = {
        template: '#children_foo',
        data() {
            return {children_message: "我是子组件bar"}
        },
        methods: {
            ccc_click: function () {
                console.log(this.$parent.message);
            }
        }
    };
    const app = new Vue({
        el: '#app',
        data() {
            return {message: 'Hello Vue!'}
        },
        methods: {},
        components: { children_fei }
    });
</script>

```

![vue parent](/img/vue/vue_parent.png "vue parent")


































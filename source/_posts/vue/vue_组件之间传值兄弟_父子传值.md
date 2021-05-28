---
title: vue 组件之间传值
categories: 
- WEB
- Vue
tags:
- vuex
- Bus
- props
- emit
---
vue 父子之间传值 `props` 和  `emit`

### `vue` 父组件传值子组件 `props`

```html
<div id="app">
    {{ message }}  {{ books }}
    <children_fei :children_message="message" :children_books="books"></children_fei>
</div>
<template id="children_foo"> <!-- 子组件 -->
    <div> {{ children_message }} {{ children_books }} </div>
</template>
<script src="vue.js"></script>
<script>
    const children_fei = {
        template:'#children_foo',
        props:{
            children_message: String,
            children_books: Array
        }
    };
    const app = new Vue({
        el: '#app',
        data(){
            return {
                message: 'Hello Fei!',
                books: ['论语', '史记', '左传', '汉书', '战国策']
            }
        },
        components:{
            children_fei
        }
    });
</script>
```

![vue props](/img/vue/vue_props.png "vue props")

 [props](https://cn.vuejs.org/v2/api/#props "props")

### `vue` 子组件传值父组件  `emit`

```html
<div id="app">
    {{ message }}
    <children_fei @item_click="parent_function"> </children_fei>
</div>
<template id="children_foo"> <!--子组件-->
    <div><button @click="btnClick()" value="点击">点击</button></div>
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
            btnClick() {
                this.$emit('item_click', this.children_message) // 发射一个事件
            }
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
            parent_function(items) {
                console.log(items);
            }
        },
        components: {
            children_fei
        }
    });
</script>
```

![vue emit](/img/vue/vue_emit.png "vue emit")

### `vue` 跨级组件传值 `provider/inject`

```html
<div id="app">
    <children_fei></children_fei>
</div>

<!-- 子组件 -->
<template id="children_foo">
    <div>
        我是第一
        <children_fei222></children_fei222>
    </div>
</template>

<!-- 子组件22222 -->
<template id="children_foo222">
    <div>
        我是第222222222  隔代组件 <br />
        {{foo}}   <br />
        <ul>
            <li v-for="item in books">{{item}}</li>
        </ul>
    </div>
</template>

<script src="vue.js"></script>
<script>
    const children_fei222 = {
        template: '#children_foo222',
        inject: ["foo", "books"], // 接受 ************
        created() {
            console.log(this.foo);
            console.log(this.books);
        }
    };
    const children_fei = {
        template: '#children_foo',
        components: {
            children_fei222
        },
    };
    const app = new Vue({
        el: '#app',
        provide: { // 传值 ************
            foo: "bar",
            books: ['论语', '史记', '左传', '汉书', '战国策']
        },
        components: {
            children_fei
        }
    });
</script>
```

![provider/inject](/img/vue/vue_provide_inject.png "provider/inject")

###  `vue` 兄弟组件传值  `事件总线 EventBus` 

```javascript
// src/utils/eventBus.js 文件内容  ***新建全局vue实例***
// 事件总线
// 非父子组件传参  
import Vue from "vue";
export default new Vue();


// src/App.vue  文件内容  ***接受事件***
import eventBus from './utils/eventBus';
export default {
    mounted() {
        eventBus.$on("daFei", function (val) {
            console.log("我是接受数据__", val);
        })
    }
}

// src/views/index.vue  文件内容  ***发送事件***
import eventBus from '../../utils/eventBus';
export default {
    created() {
        eventBus.$emit("daFei","hello foo_bar")
    }
}
```

![eventBus](/img/vue/vue_eventBus.png "eventBus")

### 使用 `vuex` 状态管理

参考另一篇文章,有详细介绍

### vue-cli 中使用父子之间传值_父组件传值子组件_封装button按钮

study01.vue 中代码

```html
<template>
    <div>
        <header-btn @handleSave="handleSave" @handleSubmit="handleSubmit" :headerBtns="headerBtns"/>
    </div>
</template>

<script>
    import HeaderBtn from "../../components/headerBtn.vue";

    export default {
        components: {
            HeaderBtn,
        },
        data() {
            return {
                headerBtns: [
                    {type: 'primary', icon: 'save', name: '保存', handleClick: 'handleSave'},
                    {type: 'primary', icon: 'check-submit', name: '提交', handleClick: 'handleSubmit'},
                ],
            }
        },
        methods: {
            handleSave() {
                console.log("handleSave");
            },
            handleSubmit() {
                console.log("handleSubmit");
            }
        },
    }
</script>
```

 02) 组件headerBtn.vue 中代码

```html
<template>
    <div>
        <button v-for="(item,index) in headerBtns" :key="index" @click="$emit(item.handleClick)">
            {{ item.name}}
        </button>
    </div>
</template>

<script>
    export default {
        name: "headerBtn",
        props: {
            headerBtns: {  //父组件没有传参时,使用这个
                type: Array,
                default() {
                    return [
                        {type: 'primary', icon: 'goBack', name: '返回', handleClick: 'handleBack'},
                        {type: 'primary', icon: 'save', name: '保存', handleClick: 'handleSave'},
                        {type: 'primary', icon: 'check-submit', name: '提交', handleClick: 'handleSubmit'},
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>
```
































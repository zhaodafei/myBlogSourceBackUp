---
title: vue 插槽
categories: 
- vue
tags:
- vue
- slot
---
具名插槽、作用域插槽、理解编译作用域

编译作用域

```
父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的
```

### 插槽

```html
<div id="app">
    <children_fei></children_fei>
    <children_fei><span slot="center">父_中间</span></children_fei><!-- 具名插槽 -->
    <children_fei>
        <ul slot="name_c" slot-scope="slot_bar"> <!-- 作用域插槽 -->
            <span v-for="item in slot_bar.data_fei">{{item}}</span>
        </ul>
    </children_fei>
</div>
<template id="children_foo">
    <div>
        <slot name="left"><span>左边</span></slot>
        <slot name="center"><span>中间</span></slot>
        <slot name="right"><span>右边</span></slot>
        <slot name="name_c" :data_fei="c_books">
            <ul>
                <li v-for="item in c_books">{{item}}</li>
            </ul>
        </slot>
    </div>
</template>
<script src="vue.js"></script>
<script>
    const children_fei = {
        template: '#children_foo',
        data() {
            return {
                children_message: "我是子组件bar",
                c_books: ['论语', '史记', '左传', '汉书', '战国策']
            }
        }
    };
    const app = new Vue({
        el: '#app',
        data() {
            return {
                message: 'Hello Vue!',
            }
        },
        components: {
            children_fei
        }
    });
</script>
```

![vue slot](/img/vue/vue_slot.png "vue slot")






























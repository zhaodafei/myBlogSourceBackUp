---
title: vue 响应式
date: 2020-07-04
categories: 
- Vue
tags:
- Vue
---
响应式可以刷新视图中数据
响应式可以刷新视图中数据
响应式可以刷新视图中数据

<!-- more -->

```javascript
this.$set(对象, '属性', '值');
/// this.$set(this.obj, 'hobby', 'obj.Hobby');

[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
```

### demo:

```html
<div id="app">
    <ul>
        <li v-for="value in obj" :key="value"> {{value}} </li>
    </ul>
    <button @click="addAge">添加 obj.age</button>
    <button @click="addHobby">添加 obj.hobby</button>
</div>

<script src="vue.js"></script>
<script>
    const app = new Vue({
        el: '#app',
        data() {
            return {
                obj: {
                    name: 'obj.name'
                }
            }
        },
        methods: {
            addAge () {
                this.obj.age = 'obj.age';
                console.log(this.obj)
            },
            addHobby () {
                this.$set(this.obj, 'hobby', 'obj.Hobby');
                console.log(this.obj);
            }
        }
    });

</script>
```






























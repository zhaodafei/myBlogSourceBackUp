---
title: vue3 指令 -directive
date: 2023-08-04
categories: 
- Vue
tags:
- Vue
---
vue3_指令directive
vue3_指令directive
vue3_指令directive

<!-- more -->

### Vue 自定义指令简单使用

```html
<script>
    // mian.js
    //指令--1
    app.directive('my-fei-directive', {
      mounted: function (el, binging, vnode, oldVnode) {
        el.focus();
        el.style.borderColor = "red";
        el.value = "我是fei";
      }
    });

    //指令--2
    app.directive('my-fei-directive2', {
      mounted: function (el, binging, vnode, oldVnode) {
        console.log(binging.value);
        el.focus();
        el.style.borderColor = binging.value.color;
        el.value = binging.value.text;
      }
    });
</script>

在 test.vue 文件中使用
<input type="text" v-my-fei-directive>
<input type="text" v-my-fei-directive2="{color:'blue',text:'图书_论语'}">
```

### 防止按钮多次点击

```js
//指令--按钮点击事件处理
app.directive('my-fei-directive2', {
  mounted(el, binding, vnode) {
    el.addEventListener('click', e => {
      el.classList.add('is-disabled')
      el.disabled = true
      setTimeout(() => {
        el.disabled = false
        el.classList.remove('is-disabled')
      }, binding.value || 3000) // 默认3000毫秒(3秒)不能再次点击[注意这个值不要特别特别大,否则会立即实现]
    })
  }
});
```





### 底部

[指令directive](https://cn.vuejs.org/guide/reusability/custom-directives.html)




























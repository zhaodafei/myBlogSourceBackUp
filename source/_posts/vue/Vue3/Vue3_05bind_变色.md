---
title: Vue3之v-bind变色
date: 2024-03-12
categories: 
- Vue3
tags:
- Vue3
---
`Vue3`之`v-bind`变色
`Vue3`之`v-bind`变色
`Vue3`之`v-bind`变色

<!-- more -->

### v-bind变色

```css
/* 核心代码 */
let color-fei = ref("#90ee90");

.text {
  color: v-bind(color-fei);
}
```

```vue
<template>
  <div>
    <h3 class="fei-color">v-bind 绑定样式</h3>
    <button @click="changeColor">点击我变色</button>
  </div>
</template>

<script setup>
  import {reactive, ref} from "vue";
  let myTheme = reactive({
    bgColor: "#ff6b81",
  });
  let myColor = ref("#90ee90");

  const isChangeColor = ref(false) // 是否改变颜色
  const changeColor = () => {
    if (isChangeColor.value) {
      myTheme.bgColor = "#ff6b81";
      myColor.value="#90ee90"
      isChangeColor.value = false;
    }else{
      myTheme.bgColor = "#808080";
      myColor.value="#00ffff"
      isChangeColor.value = true;
    }
  }
</script>

<style scoped>
  .fei-color {
    width: 200px;
    height: 200px;
    /* background-color: pink; */
    /* color: wheat; */

    /* 对象属性的形式需要加引号 */
    background-color: v-bind("myTheme.bgColor");
    /* 单独的变量引号可加可不加 */
    color: v-bind(myColor);
}
</style>

```



### 其他

[ CSS 中的 v-bind() ](https://cn.vuejs.org/api/sfc-css-features.html#v-bind-in-css)












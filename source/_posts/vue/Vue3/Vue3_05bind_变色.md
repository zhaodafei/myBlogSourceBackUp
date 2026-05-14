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
let colorFei = ref("#90ee90");

.text {
  color: v-bind(colorFei);
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

### 伪元素中使用

```vue
<template>
  <div class="text">测试内容1,使用计算属性</div>
  <div class="text2" :style="{ '--dynamic-color': colorFei, '--dynamic-content': `'${contentText}'` }">
    测试内容2,使用 CSS 变量中转
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const colorFei = ref("#90ee90")
  const contentText = ref("★")  // 要显示的内容
  // 计算属性返回带引号的字符串
  const contentValue = computed(() => `"${contentText.value}"`)
</script>

<style scoped lang="scss">
  .text {
    color: v-bind(colorFei);
  }

  .text::before {
    content: v-bind(contentValue); // 使用计算属性
    color: v-bind(colorFei);
    margin-right: 5px;
  }

  .text2 {
    color: v-bind(colorFei);
  }
  .text2::before {
    content: var(--dynamic-content); // 使用 CSS 变量中转
    color: v-bind(colorFei);
    margin-right: 5px;
  }
</style>

```



### 外部文件使用变色

```vue
第一种
<style scoped lang="scss">
  /* 占位样式：激活 v-bind 响应式绑定机制，使导入的 SCSS 文件中 v-bind('myColor') 生效 */
  .theme-color-activation {
    color: v-bind('myColor');
    background-color: v-bind('myColor');
  }
  @import './fei.scss'; /*  在这个文件中就可以使用了 */
</style>

外部文件写法
background: v-bind('myColor');
```

```vue
第二种

<div class="hall-navigator" :style="{ '--dynamic-color': myColor }">
在这里先调用一次
</div>
<style scoped lang="scss">
  @import './xyHallNavigator.scss';
</style>

外部文件写法
color: var(--dynamic-color); // 这样也就可以使用了
```



### 遇到css函数calc

```css
/* 核心代码 */
let size-fei = ref("158px");

.text {
  /** height: v-bind(height); */
  height: calc(100vh - v-bind(size-fei));
}
```



### 其他

[ CSS 中的 v-bind() ](https://cn.vuejs.org/api/sfc-css-features.html#v-bind-in-css)












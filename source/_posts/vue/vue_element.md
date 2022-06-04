---
title: Vue Element
date: 2013-07-04
categories: 
- Element
tags:
- Element
---
`Element-ui` 的 `el-scrollbar` 滚动条
`Element-ui` 的 `el-scrollbar` 滚动条
`Element-ui` 的 `el-scrollbar` 滚动条

`el-scrollbar` 作用,只是美化了浏览器自己的滚动条,`el-scrollbar`使用前先把浏览器自己的滚动条调试号,最后在外层加上 `el-scrollbar`标签并设置为`height: 100%;` 即可

<font color="#ff6b81"> el-scrollbar 只是美化滚动条 </font>
<font color="#ff6b81"> el-scrollbar 只是美化滚动条 </font>
<font color="#ff6b81"> el-scrollbar 只是美化滚动条 </font>

<!-- more -->

### 滚动条实现

```html
<template>
  <div style="height: 100%">

    <el-aside class="fei-scrollbar" style="height: 100%; width: 200px">
      <el-scrollbar style="height: 100%" data-title="使用框架的滚动条样式,但是要自己设置内容区域高度">

      <el-menu default-active="2">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>大飞菜单一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">飞选项1</el-menu-item>
            <el-menu-item index="1-2">飞选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">飞选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">飞选项4</template>
            <el-menu-item index="1-4-1">飞选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>

      </el-scrollbar>
    </el-aside>

  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="less">
html, body, #app { // 设置高度
  height: 100%;
}

// 隐藏 x 轴滚动条
.fei-scrollbar {
  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
}
</style>

```




![滚动条](/img/vue/element/el_scroll_01.png "滚动条")



### 底部

没有了


























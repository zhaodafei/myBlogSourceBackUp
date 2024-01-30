---
title: -ant-design-vue 随笔02
date: 2024-01-04
categories: 
- ant-design-vue
tags:
- ant-design-vue
---
ant-design-vue 随笔02,动态菜单, 用到了`Vue2`函数式组件`functional `

<!-- more -->

技术背景:

- 前端框架：vue2 + Vue Cli
- 前端UI框架：Ant Design of Vue（v1.6.4）
- 技术点Vue2 函数式组件`functional `

### 一般菜单

```vue
<template>
    <div>
      <div style="width: 500px">
        <a-menu
            theme="dark"
            :default-selected-keys="['sub1']"
            :selected-keys="['sub1']"
            mode="inline"
        >
          <a-sub-menu key="sub1">
            <span slot="title">初始化设置</span>
            <a-menu-item key="1">
              <router-link :to="{path:'/system/set',query:{}}">
                系统设置
              </router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title">其他设置</span>
            <a-menu-item key="5">
              <router-link :to="{path:'/system/mainColor',query:{}}">
                网站主题色
              </router-link>
            </a-menu-item>
            <a-menu-item key="6">
              <router-link :to="{path:'/system/mainTitle',query:{}}">
                网站标题
              </router-link>
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </div>
    </div>
</template>
<script>
    /* 这是ant-design-vue */
    import Vue from 'vue'
    import Antd, { message,Select } from 'ant-design-vue'  //这是ant-design-vue
    import 'ant-design-vue/dist/antd.css'
    Vue.use(Antd);
    /* 这是ant-design-vue */
    
    export default {
      components: {},
      data() {
        return {
          // isShowFile: true, //是否展示文件,选择上传
        }
      },
      methods: {},
      watch: {},
    };
</script>
```

### 函数式组件菜单

#### 父级组件

```vue
<template>
  <div>
    <div style="width: 600px;margin-top: 20px">
      <a-menu theme="dark" mode="inline">
        <template v-for="item in FeiMenu">
          <a-menu-item v-if="!item.children" :key="item.name">
            <span>  <a-icon :type="item.iconType"/> {{ item.name }} (第一层)</span>
          </a-menu-item>

          <FeiMenuItem v-else :menuInfo="item" :key="item.name"/>
        </template>
      </a-menu>
    </div>
  </div>
</template>
<script>

/* 这是ant-design-vue */
import Vue from 'vue'
import Antd, { message,Select } from 'ant-design-vue'  //这是ant-design-vue
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd);
/* 这是ant-design-vue */

import FeiMenuItem from './component/FeiMenuItem.vue'
const FeiMenu = [
  {
    name: '首页',
    url: 'http://127.0.0.1:8888',
    iconType: 'menu'
  },
  {
    name: '系统管理',
    url: null,
    iconType: 'bars',
    children: [
      {
        name: '菜单管理',
        url: 'http://127.0.0.1:8888/system/role.html',
        iconType: 'laptop',
        // children: []
      },
      {
        name: '角色管理',
        url: 'http://127.0.0.1:8888/system/role.html',
        iconType: 'like',
        // children: []
      }
    ]
  },
  {
    name: '系统工具',
    url: null,
    iconType: 'lock',
    children: [
      {
        name: '日志分类',
        url: null,
        iconType: 'mail',
        children: [
          {
            name: '系统日志222',
            url: 'http://127.0.0.1:8888/system/log.html',
            iconType: 'mail',
          }
        ]
      }
    ]
  },
  {
    name: '关于网站',
    url: 'http://127.0.0.1:8888/about.html',
    iconType: 'ordered-list'
  }
]

export default {
  components: {
    FeiMenuItem,
  },
  data() {
    return {
      FeiMenu,
    }
  },
  methods: {},
  watch: {},
};
</script>

<style scoped>

</style>

```



#### 子组件(函数式)

文件名称 `./component/FeiMenuItem.vue`

```vue
<template functional>
  <a-sub-menu :key="props.menuInfo.name">
    <span slot="title">
      <a-icon :type="props.menuInfo.iconType" />
      {{ props.menuInfo.name }} (???)
    </span>

    <template v-for="item in props.menuInfo.children">
      <a-menu-item v-if="!item.children" :key="item.name">
        <span tip-fei="多于2级菜单">{{ item.name }} (多级)</span>
      </a-menu-item>

      <!-- FeiMenuItem 当前组件名字(文件名字) -->
      <FeiMenuItem v-else :key="item.name" :menu-info="item" />
    </template>
  </a-sub-menu>
</template>

<script>
export default {
  name: "FeiMenuItem",
  props: ['menuInfo']
}
</script>

<style scoped>

</style>


```







[Vue2函数式组件](https://v2.cn.vuejs.org/v2/guide/render-function.html)




























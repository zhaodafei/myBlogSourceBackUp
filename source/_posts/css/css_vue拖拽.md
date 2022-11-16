---
title: css_vue 中拖拽
date: 2013-07-04
categories: 
- css
tags:
- css
---
css_vue 中拖拽
css_vue 中拖拽
css_vue 中拖拽
下面more是分隔符

<!-- more -->

### 基本常见

这个版本没有办法实现父元素和子元素一起拖动

```html
<template>
  <!-- https://www.cnblogs.com/lgjava/p/13370435.html -->
  <!-- https://www.cnblogs.com/lgjava/p/13370435.html -->

  <!-- 扩展 -->
  <!-- https://www.jb51.net/article/138909.htm -->
  <!-- https://www.jb51.net/article/138909.htm -->
  <div style="border: 1px solid">
    <p>{{ positionX }}</p>
    <p>{{ positionY }}</p>
    <div style="width: 800px; height: 500px; margin-left: 100px; border: 2px solid; position: relative">
      <div id="fei" style="border: 1px solid" @mousedown="move">
        <!--实现用指令形式实现拖拽效果-->
        <!--{{ positionX }}
        {{ positionY }}-->
        <div style="text-align: center">
          <p>{{ positionX }}</p>
          <p>{{ positionY }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        positionX: 0,
        positionY: 0
      }
    },
    computed: {},
    methods: {
      move(e) {
        // 可移动范围大小
        const cardWidth = 800
        const cardHeigh = 500
        // 元素自身大小
        const seflWidth = 100
        const seflHeight = 100

        let odiv = e.target //获取目标元素
        // console.log('page___', e.pageX + '__' + e.pageY) // 对于整个页面来说，包括了被卷去的body部分的长度
        // console.log('position___', e.position + '__' + e.position)
        console.log('xxxxxxxxx', e)

        //算出鼠标相对元素的位置
        let disX = e.clientX - odiv.offsetLeft
        let disY = e.clientY - odiv.offsetTop

        // console.log('position___', odiv.offsetLeft + '__' + odiv.offsetTop)
        document.onmousemove = e => {
          // console.log('????????')

          //鼠标按下并移动的事件
          //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
          let left = e.clientX - disX
          let top = e.clientY - disY
          if (Number(left) <= 0) {
            left = 0
          } else if (Number(left) >= cardWidth - seflWidth) {
            left = cardWidth - seflWidth
          }
          if (Number(top) <= 0) {
            top = 0
          } else if (Number(top) >= cardHeigh - seflHeight) {
            top = cardHeigh - seflHeight
          }

          //绑定元素位置到positionX和positionY上面
          this.positionX = left
          this.positionY = top

          //移动当前元素
          odiv.style.left = left + 'px'
          odiv.style.top = top + 'px'
        }
        document.onmouseup = e => {
          console.log('鼠标抬起清空')
          document.onmousemove = null
          document.onmouseup = null
        }
      }
    }
  }
</script>

<style scoped>
  #fei {
    position: relative; /*定位*/
    top: 10px;
    left: 10px;
    width: 100px;
    height: 100px;
    background: #cccccc; /*设置一下背景*/
  }
</style>

```

### 使用插件vue-drag-resize

```html
 <VueDragResize :isActive="true" :w="120" :h="120" :parentW="500" :parentH="375" :parentLimitation="true">
           
```



```html
<template>
  <div id="app">
    <!--https://blog.csdn.net/weixin_50644805/article/details/125980693-->
    <!-- https://www.npmjs.com/package/vue-drag-resize/v/1.5.2 -->
    <VueDragResize :isActive="true" :w="200" :h="200">
      <!--<h3>Hello World!</h3>
      <p>{{ top }} х {{ left }} </p>
      <p>{{ width }} х {{ height }}</p>-->
      <img
        src="/src/assets/tempCard/images.jpg"
        name="aaa"
        alt=""
        title="bbb"
        style="width: 50px; height: 50px"
        @mousedown="move"
      />
    </VueDragResize>
  </div>
</template>

<script>
  import VueDragResize from 'vue-drag-resize/src'

  export default {
    name: 'App',

    components: {
      VueDragResize
    },

    data() {
      return {
        width: 0,
        height: 0,
        top: 0,
        left: 0
      }
    },

    methods: {
      resize(newRect) {
        this.width = newRect.width
        this.height = newRect.height
        this.top = newRect.top
        this.left = newRect.left
      }
    }
  }
</script>

```




























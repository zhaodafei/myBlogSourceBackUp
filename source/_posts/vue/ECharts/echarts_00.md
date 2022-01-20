---
title: ECharts4.9 基本地图
date: 2022-01-04
categories: 
- Vue
- ECharts
tags:
- ECharts
---
`Vue` 中  `ECharts4.9` 基本地图
`Vue` 中  `ECharts4.9` 基本地图
`Vue` 中  `ECharts4.9` 基本地图

<!-- more -->

### 地图实现01

```Vue
<template>
  <div>
    <h3>Vue + echarts4.9 基本地图</h3>
    <div id="daFeiMap" ref="daFeiMap" />
  </div>
</template>
<script>

/*
*  main.js 全局注册
*   import echarts from 'echarts'
*   Vue.prototype.$echarts = echarts
*   import 'echarts/map/js/china';
*
* 使用 this.$echarts.init()
* */
import echarts from 'echarts'
import 'echarts/map/js/china'; // 这个主要执行了 echarts.registerMap('china', " china.json 数据 ");

export default {
  mounted() {
    this.drawMap();
  },
  methods: {
    drawMap() {
     // const myChart = echarts.init(document.getElementById('daFeiMap'))
      const myChart = echarts.init(this.$refs.daFeiMap)
      const mapBoxOption = {
        series: [
          {
            type: 'map',
            mapType: 'china',
            label: {
              normal: {
                show: true, // 显示省份标签
                textStyle: {
                  color: 'blue' // 省份标签字体颜色
                }
              },
              emphasis: { // 对应的鼠标悬浮效果
                show: false,
                textStyle: {
                  color: '#800080'
                }
              }
            },
            itemStyle: {
              normal: {
                borderWidth: 0.5, // 区域边框宽度
                borderColor: '#009fe8', // 区域边框颜色
                areaColor: '#ffefd5' // 区域颜色
              },
              emphasis: {
                borderWidth: 0.5,
                borderColor: '#4b0082',
                areaColor: '#ffdead'
              }
            },
          }
        ],
      }

      // myChart.registerMap("china"," china.json 数据 ")
      myChart.setOption(mapBoxOption)
    }
  },
};
</script>

<style scoped>
#daFeiMap {
  width: 500px;
  height: 480px;
}
</style>

```

![ECharts map 基本地图](/img/vue/ECharts/map_00.png "ECharts map 基本地图")

### 地图实现02

world 地图,和地图01代码逻辑类似

```vue
<template>
  <div>
    <h3>Vue + echarts 基本地图</h3>
    <div id="daFeiMap" />
  </div>
</template>
<script>

/*
*  main.js 全局注册
*   import echarts from 'echarts'
*   Vue.prototype.$echarts = echarts
*   import 'echarts/map/js/china';
*
* 使用 this.$echarts.init()
* */
import echarts from 'echarts'
import 'echarts/map/js/world'; // 这个主要执行了 echarts.registerMap('world', " world.json 数据 ");

export default {
  mounted() {
    this.drawMap();
  },
  methods: {
    drawMap() {
      /* 获取地图数据*/
      const myChart = echarts.init(document.getElementById('daFeiMap'))
      const mapBoxOption = {
        series: [
          {
            type: 'map',
            mapType: 'world',
            label: {
              normal: {
                // show: true, // 显示省份标签
                textStyle: {
                  color: 'blue' // 省份标签字体颜色
                }
              },
              emphasis: { // 对应的鼠标悬浮效果
                show: false,
                textStyle: {
                  color: '#800080'
                }
              }
            },
            itemStyle: {
              normal: {
                borderWidth: 0.5, // 区域边框宽度
                borderColor: '#009fe8', // 区域边框颜色
                areaColor: '#ffefd5' // 区域颜色
              },
              emphasis: {
                borderWidth: 0.5,
                borderColor: '#4b0082',
                areaColor: '#ffdead'
              }
            },
          }
        ],
      }

      // myChart.registerMap("world"," world.json 数据 ")
      myChart.setOption(mapBoxOption)
    }
  },
};
</script>

<style scoped>
#daFeiMap {
  width: 500px;
  height: 480px;
}
</style>

```

### 其他

```vue
<template>
  <div id="fei" class="fei" :style="{ height: '100px', width: '100px' }" />
</template>
<script>
    //Vue 初始化echart
    this.chart = this.$echarts.init(this.$el, 'tdTheme')
    this.chart.setOption(this.options, true)
</script>
```

### 世界地图显示中文

使用 `nameMap`,自定义地区的名称映射

```json
nameMap:{
    'China' : '中华人民共和国',
    'Australia': '澳大利亚',
    'Canada': '加拿大',
     'Brazil': '巴西',
}
```



### footer

xxx





 [series-map 配置](https://echarts.apache.org/zh/option.html#series-map "series-map 配置")






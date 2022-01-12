---
title: ECharts4.9 地图飞线实例
date: 2022-01-04
categories: 
- Vue
- ECharts
tags:
- ECharts
---
`Vue` 中  `ECharts4.9` 地图飞线实例
`Vue` 中  `ECharts4.9` 地图飞线实例
`Vue` 中  `ECharts4.9` 地图飞线实例

<!-- more -->

地区坐标自行找坐标资料,本文只写几个demo
地区坐标自行找坐标资料,本文只写几个demo
地区坐标自行找坐标资料,本文只写几个demo

### 地图实现

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

const planePath =
    'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.' +
    '662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,' +
    '121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,' +
    '241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,' +
    '42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';


export default {
  data () {
    return {
      msg: '涟漪特效动画 effectScatter',
      geoCoordMapChina: { // 出发地  -------------------------地区坐标自行找坐标资料
        '新疆': [87.36, 43.45],
        '北京': [116.413554, 39.911013],
        '杭州': [120.161693, 30.280059],
        '广东': [113.14, 23.08],
      },
      destinationMsg: { // 目的地
        name: "北京", value: [116.413554, 39.911013, ""]
      },
      planePath: planePath
    }
  },
  mounted() {
    this.drawMap();
  },
  methods: {
    drawMap() {
      let planePath = this.planePath; // fei_tip: 见下面
      // 接口给的数据格式---可以考虑用这种格式
      let seriesData = [ // todo: 接口数据
        {"name": "杭州", "value": ""},
        {"name": "广东", "value": ""},
        {"name": "新疆", "value": ""}
      ];

      let resData = this.convertData(seriesData)

      const myChart = echarts.init(this.$refs.daFeiMap)
      const mapBoxOption = {
        geo: { // 地理坐标系
          show: true,
          map: 'china',
        },
        series: [
          { // 基本地图
            type: 'map',
            mapType: 'china',
          },
          { // fei_tip:线路---航线
            type: 'lines',
            symbolSize: 10,
            effect: { // 航线动态
              show: true,
              period: 6,
              trailLength: 0,
              symbol: planePath,
              symbolSize: 15
            },
            lineStyle: {
              color: '#2d9df1',   //航线的颜色
              width: 1,
              opacity: 0.6,
              curveness: 0.2 //  弯曲程度
            },
            // data: [
            //   {
            //     "fromName": "杭州",
            //     "toName": "北京",
            //     "coords": [[120.161693, 30.280059], [116.413554, 39.911013, ""]],
            //     "value": [116.413554, 39.911013, ""]
            //   },
            //   {
            //     "fromName": "广东",
            //     "toName": "北京",
            //     "coords": [[113.14, 23.08], [116.413554, 39.911013, ""]],
            //     "value": [116.413554, 39.911013, ""]
            //   },
            //   {
            //     "fromName": "新疆",
            //     "toName": "北京",
            //     "coords": [[87.36, 43.45], [116.413554, 39.911013, ""]],
            //     "value": [116.413554, 39.911013, ""]
            //   }
            // ],
            data: resData.resResult
          },
          { // fei_tip: 出发地
            type: 'effectScatter',
            coordinateSystem: 'geo',  // fei_tip: 使用地理坐标系
            rippleEffect: { //涟漪特效
              period: 4, //动画时间，值越小速度越快
              brushType: 'stroke', //波纹绘制方式 stroke, fill
              scale: 4 //波纹圆环最大限制，值越大波纹越大
            },
            label: {
              show: true,
              position: 'right', //显示位置
              offset: [5, -10], //偏移设置
              formatter: function (params) { // 圆环显示文字
                return params.data.name;
              },
              fontSize: 13,
              color: '#ff6b81',
            },
            symbol: 'circle',
            symbolSize: function (val) {
              return 6; //圆环大小
            },
            itemStyle: {
              show: true,
              color: '#90a5dc'  // 圆环颜色
            },
            // data: [
            //   {name: '杭州', value: [120.161693, 30.280059, ""]},
            //   {name: '广东', value: [113.14, 23.08, ""]},
            //   {name: '新疆', value: [87.36, 43.45, ""]},
            // ]
            data: resData.resFromResult
          },
          { // 目的地样式---北京
            type: 'effectScatter',
            coordinateSystem: 'geo',
            label: {
              show: true,
              position: 'right',
              formatter: '{b}',
              color: '#ff6b81'
            },
            symbolSize: function (val) {
              return 8
            },
            itemStyle: {
              color: '#fe4272',
            },
            data: [
              // {name: "北京", value: [116.413554, 39.911013, ""]},
              this.destinationMsg
            ]
          }
        ],
      }

      myChart.setOption(mapBoxOption)
    },

    /**
     * 数据处理
     * @param resData
     * @returns {{resFromResult: *[], resResult: *[]}}
     *
     *
     * resResult 数据格式
     * [
     *   {
     *     "fromName": "杭州",
     *     "toName": "北京",
     *     "coords": [[120.161693, 30.280059], [116.413554, 39.911013, ""]],
     *     "value": [116.413554, 39.911013, ""]
     *   }
     * ]
     *
     * resFromResult 数据格式
     * [
     *   {
     *     "name": "杭州",
     *     "value": [120.161693, 30.280059]
     *   }
     * ]
     *
     */
    convertData(resData) {
      let resResult = []; // 航线覆盖地址
      let resFromResult = []; // 飞行来源地址

      for (let i = 0; i < resData.length; i++) {
        let fromCoord = this.geoCoordMapChina[resData[i].name];
        resResult.push({
          fromName: resData[i].name,
          toName: this.destinationMsg.name,
          coords: [fromCoord, this.destinationMsg.value],
          value: this.destinationMsg.value
        })

        resFromResult.push({
          name: resData[i].name,
          value: fromCoord
        });
      }

      return {resResult, resFromResult};
    },
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

![ECharts map](/img/vue/ECharts/map_03_1.png "ECharts map")

### footer

航线`planePath` 

```javascript
// 航线
export const planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

```

汽车行驶图

```javascript
// 汽车行驶图
export const planePath = 'path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z';

```





 [effectScatter-涟漪特效 配置](https://echarts.apache.org/zh/option.html#series-map.type "seffectScatter-涟漪特效 配置")






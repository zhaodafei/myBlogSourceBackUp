---
title: ECharts5.2 基本地图
date: 2022-01-04
categories: 
- Vue
- ECharts
tags:
- ECharts
---
`Vue` 中  `ECharts5.2.2` 基本地图
`Vue` 中  `ECharts5.2.2` 基本地图
`Vue` 中  `ECharts5.2.2` 基本地图

<!-- more -->

### 地图实现

```Vue
<template>
 <div id="main-map">
   <div id="myChart" ref="myChart" style="width: 600px; height:300px"></div>
 </div>
</template>

<script>

// 加载echarts，注意引入文件的路径
var echarts = require("echarts");

// 地图 GeoJson 数据,  可以从之前版本中下载 
// 	可选。GeoJson 格式的数据，具体格式见 https://geojson.org/。
//  可以是 JSON 字符串，也可以是解析得到的对象。这个参数也可以写为 geoJson，效果相同    
import echartMap  from './map/json/china'; 

export default {
  components: {},
  data () {
    return {}
  },
  mounted () {
    this.fei();
  },
  methods:{
    fei() {
      let myChart  = echarts.init(document.getElementById("myChart"));
      echarts.registerMap('china', echartMap);

      let option = {
        series: [
          {  // 地图
            type: 'map',
            map: 'china',
            label: {
              show: true, //显示省份标签
              color: "#ff6b81"
            },
          },
        ]
      }
      myChart.setOption(option,true)
    }
  }
}
</script>
```

![ECharts map](/img/vue/ECharts/map_02.png "ECharts map")

### footer

地图 `GeoJson`结构`demo`格式

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "id": "130000",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          ["@@o~Z]ªrºc_ħ²G¼s`jÎŸnüsÂłNX_M`Ç½ÓnUKĜēs¤­©yrý§uģcJe"],
          ["@@U`Ts¿mÂ"],
          ["@@oºƋÄdeVDJj£J|ÅdzÂFt~KŨ¸IÆv|¢r}èonb}`RÎÄn°ÒdÞ²^®lnÐèĄlðÓ×]ªÆ}LiĂ±Ö`^°Ç¶p®đDcŋ`ZÔ¶êqvFÆN®ĆTH®¦O¾IbÐã´BĐɢŴÆíȦpĐÞXR·nndO¤OÀĈƒ­QgµFo|gȒęSWb©osx|hYhgŃfmÖĩnºTÌSp¢dYĤ¶UĈjlǐpäìë|³kÛfw²Xjz~ÂqbTÑěŨ@|oMzv¢ZrÃVw¬ŧĖ¸f°ÐTªqs{S¯r æÝlNd®²Ğ ǆiGĘJ¼lr}~K¨ŸƐÌWöÆzR¤lêmĞLÎ@¡|q]SvKÑcwpÏÏĿćènĪWlĄkT}J¤~ÈTdpddʾĬBVtEÀ¢ôPĎƗè@~kü\\rÊĔÖæW_§¼F´©òDòjYÈrbĞāøŀG{ƀ|¦ðrb|ÀH`pʞkvGpuARhÞÆǶgĘTǼƹS£¨¡ù³ŘÍ]¿ÂyôEP xX¶¹ÜO¡gÚ¡IwÃé¦ÅBÏ|Ç°N«úmH¯âDùyŜŲIÄuĐ¨D¸dɂFOhđ©OiÃ`ww^ÌkÑH«ƇǤŗĺtFu{Z}Ö@U´ʚLg®¯Oı°Ãw ^VbÉsmAê]]w§RRl£ȭµu¯b{ÍDěïÿȧuT£ġěŗƃĝQ¨fVƋƅn­a@³@ďyÃ½IĹÊKŭfċŰóxV@tƯJ]eR¾fe|rHA|h~Ėƍl§ÏlTíb ØoÅbbx³^zÃĶ¶Sj®AyÂhðk`«PËµEFÛ¬Y¨Ļrõqi¼Wi°§Ð±´°^[À|ĠO@ÆxO\\ta\\tĕtû{ġȧXýĪÓjùÎRb^ÎfK[ÝděYfíÙTyuUSyŌŏů@Oi½éŅ­aVcř§ax¹XŻácWU£ôãºQ¨÷Ñws¥qEHÙ|šYQoŕÇyáĂ£MÃ°oťÊP¡mWO¡v{ôvîēÜISpÌhp¨ jdeŔQÖjX³àĈ[n`Yp@UcM`RKhEbpŞlNut®EtqnsÁgAiúoHqCXhfgu~ÏWP½¢G^}¯ÅīGCÑ^ãziMáļMTÃƘrMc|O_¯Ŏ´|morDkO\\mĆJfl@cĢ¬¢aĦtRıÒ¾ùƀ^juųœK­UFyƝīÛ÷ąV×qƥV¿aȉd³BqPBmaËđŻģmÅ®V¹d^KKonYg¯XhqaLdu¥Ípǅ¡KąÅkĝęěhq}HyÃ]¹ǧ£Í÷¿qáµ§g¤o^á¾ZE¤i`ĳ{nOl»WÝĔįhgF[¿¡ßkOüš_ūiǱàUtėGyl}ÓM}jpEC~¡FtoQiHkk{Ãmï"]
        ],
        "encodeOffsets": [
          [[119712, 40641]],
          [[121616, 39981]],
          [[116462, 37237]]
        ]
      },
      "properties": {
        "cp": [114.502461, 38.045474],
        "name": "河北",
        "childNum": 3
      }
    }
  ],
  "UTF8Encoding": true
}

```





 [series-map 配置](https://echarts.apache.org/zh/option.html#series-map.type "series-map 配置")






---
title: ECharts5.2 柱状图
date: 2022-01-04
categories: 
- Vue
- ECharts
tags:
- ECharts
---
`Vue` 中  `ECharts5.2.2` 柱状图
`Vue` 中  `ECharts5.2.2` 柱状图
`Vue` 中  `ECharts5.2.2` 柱状图

<!-- more -->

### 柱状图__`垂直`

```javascript
option = {
  // title: { text: '', left: 'center' },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['A人数', 'B人数']
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value',
    min: 0
    max: 30 // 最大最小值控制
  },
  series: [
    {
      name: 'A人数',
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    },
    {
      name: 'B人数',
      data: [100, 220, 274, 118, 165, 47, 200],
      type: 'line'
    }
  ]
}
```

#### 控制最大最小值

```wiki
yAxis: [
  {
    type: 'value',
    min: 0,
    max: 50
  }
],
```



### 底部`footer`








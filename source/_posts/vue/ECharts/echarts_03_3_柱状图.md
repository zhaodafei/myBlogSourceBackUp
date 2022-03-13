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
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 250, 80, 70, 110, 130],
      type: 'bar',
    }
  ]
};
```



### 柱状图__`水平`

```javascript
option = {
  xAxis: {
    type: 'value',
  },
  yAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  series: [
    {
      data: [120, 200, 250, 80, 70, 110, 130],
      type: 'bar',
    }
  ]
};
```

### 底部`footer`








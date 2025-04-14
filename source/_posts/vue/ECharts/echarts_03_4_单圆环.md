---
title: ECharts5.2 柱状图
date: 2022-01-04
categories: 
- Vue
- ECharts
tags:
- ECharts
---
`Vue` 中  `ECharts5.2.2` 单个圆环,中间显示百分比
`Vue` 中  `ECharts5.2.2` 单个圆环,中间显示百分比
`Vue` 中  `ECharts5.2.2` 单个圆环,中间显示百分比

<!-- more -->

### 单个圆环

```javascript
option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  color: ['#5fb878', '#eeeeee'],
  title: {
    text: '负载状态',
    left: 'center'
  },
  series: [
    {
      name: '使用情况',
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: false,
      label: {
        // show: true,
        position: 'center',
        formatter: '{d}%',
        fontSize: '20'
      },
      data: [
        {
          value: 80,
          name: 'Search Engine',
          label: { show: true }
        },
        {
          value: 20,
          name: 'Direct',
          label: { show: false }
        }
      ]
    }
  ]
};
```



### 底部`footer`

[pie饼图](https://echarts.apache.org/examples/zh/editor.html?c=pie-doughnut)






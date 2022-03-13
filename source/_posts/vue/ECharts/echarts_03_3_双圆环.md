---
title: ECharts5.2 双圆环
date: 2022-01-04
categories: 
- Vue
- ECharts
tags:
- ECharts
---
`Vue` 中  `ECharts5.2.2` 双圆环
`Vue` 中  `ECharts5.2.2` 双圆环
`Vue` 中  `ECharts5.2.2` 双圆环

<!-- more -->

### 双圆环

利用`pie`实现双圆环,`options`配置如下

```javascript
option = {
    tooltip: {
      trigger: 'item',
      formatter: function (params) {
        return `${params.name}`
      }
    },
    color: ['#ff6b81', '#00ffff'], // 外到内

    series: [
        {
          name: '',
          type: 'pie',
          emphasis: { // 鼠标移入变大,背景色
            scale: false,
            disabled: true
          },
          radius: ['105px', '130px'],
          label: { // 不显示外部指示线
            show: false,
          },
          data: [
            {
              value: 90,
              name: 'fei001',
              itemStyle: {
                color: "#ff6b81",
                // borderRadius: '50%'
              },
            },
            {
              value: 10,
              name: '',
              itemStyle: {
                color: "#c0c0c0",
              },
            }
          ]
        },

        {
          name: '',
          type: 'pie',
          emphasis: { // 鼠标移入变大,背景色
            scale: false,
            disabled: true
          },
          radius: ['80px', '104px'],
          label: { // 不显示外部指示线
            show: false,
          },
          data: [
            {
              value: 80,
              name: 'fei002',
              itemStyle: {
                color: "#00ffff",
              },
            },
            {
              value: 20,
              name: '',
              itemStyle: {
                color: "#c0c0c0",
              },
            }
          ]
        },

      ]
  };
```

### 底部`footer`








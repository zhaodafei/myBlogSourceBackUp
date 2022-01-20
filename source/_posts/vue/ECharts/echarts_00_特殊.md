---
title: ECharts 特殊图形
date: 2022-01-04
categories: 
- Vue
- ECharts
tags:
- ECharts
---
 `ECharts` 特殊图形
 `ECharts` 特殊图形
 `ECharts` 特殊图形

<!-- more -->

### 无数据提示01

```javascript
let option = {
  graphic: {
    type: 'text',
    left: 'center',
    top: '45%',
    style: {
      text: '暂无数据',
      // fill: '#ff68b1',
      fontSize: 20,
      // fontWeight: 700
    }
  },
  series: [
    {
      // name: '空数据',
      type: 'pie',
      radius: ['65%', '70%'],
    }
  ]
}

```



### 无数据提示02

```javascript
let option = {
  title: {
    text: '暂无数据',
    left: 'center',
    top: '45%',
    textStyle: {
      // color: '#27D9C8',
      fontSize: 20,
    }
  },
  // color: ['#ff68b1', '#D8D8D8'], 控制圆环颜色
  series: [
    {
      // name: '空数据',
      type: 'pie',
      radius: ['65%', '70%'],
      // data: [ // 控制圆环颜色,用了这个后会有一根线
      //  {value: 0, name: ''}
      // ]
    }
  ]
}
```

### 无数据提示03

```javascript
let option = {
  graphic: {
    type: 'text',
    left: 'center',
    top: '40%',
    style: {
      text: '暂无数据',
      textAlign: 'center',
      fill: '#c0c0c0',
      fontSize: 20,
      fontWeight: 700
    }
  },
};
```

### 无数据提示04

```javascript
let option = {
  title: {
    text: '暂无数据',
    left: 'center',
    top: '50%',
    textStyle: {
      color: '#dda0dd',
      fontSize: 36,
    }
  },
};
```



### footer

xxx






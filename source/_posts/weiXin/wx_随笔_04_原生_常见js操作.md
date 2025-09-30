---
title: 微信与js
date: 2025-01-18
categories: 
- 微信
tags:
- js
---
微信与js常见操作
微信与js常见操作
微信与js常见操作

<!-- more -->

### 数组中添加和删除

```js
data:{
	activeTab: ['论语', '汉书'], // 选中 
}

handleTag(e) {
    // const { item } = e.currentTarget.dataset
    const item = {label:"论语"}
    const { activeTab } = this.data
    const findIndex = activeTab.findIndex(row => row === item.label)

    if (findIndex !== -1) {
      // 删除
      activeTab.splice(findIndex, 1)
      this.setData({ activeTab: activeTab })
    } else {
      // 添加
      activeTab.push(item.label)
      this.setData({ activeTab: activeTab })
    }
  }
```



## wxs语法

### 字典翻译

```js
// 新建wxs文件, 哪里使用哪里引入( 可以放到全局 )
// optionArr: 数组内容; val: 具体值
function getDictName(optionArr,val) {
  var item = {}
  // var optionArr = [
  //   { value: 'val01', label: '付款' },
  //   { value: 'val02', label: '取消' },
  // ]
  for (var i = 0; i < optionArr.length; i++) {
    if( optionArr[i].value == val) {
      item = optionArr[i]
      break
    }
  }

  return item.label ? item.label : '-';
}

module.exports = {
  getDictName: getDictName,
}
```

```js
// 可以放到单个目录下面
// val: 具体值; str: 那个字典
function getDictName(val,str) {
  var item = {}
  var dictMap = {
    paymentStatusList:[
      { value: 'val01', label: '付款' },
      { value: 'val02', label: '取消' },
    ],
    paymentStatusList:[
      { value: 'val01', label: '付款' },
      { value: 'val02', label: '取消' },
    ]
  }

  for (var i = 0; i < dictMap[str].length; i++) {
    if (dictMap[str][i].value == val) {
      item = dictMap[str][i]
      break
    }
  }

  return item.label ? item.label : '-';
}

module.exports = {
  getDictName: getDictName,
}

```



### 底部

1. [官网: 基本语法](https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/)
2. xxxx
























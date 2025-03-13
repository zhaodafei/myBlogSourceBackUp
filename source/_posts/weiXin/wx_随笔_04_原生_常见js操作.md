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



### 底部

1. [官网: 基本语法](https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/)
2. xxxx
























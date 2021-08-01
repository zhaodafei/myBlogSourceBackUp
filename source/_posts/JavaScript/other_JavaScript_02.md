---
title: other JavaScript02
categories: 
- JavaScript
tags:
- JavaScript
---
### 重绘(repaint)和回流(reflow)

全局回流(reflow),   部分重画(重绘 repaint)

1. 重绘(repaint): 屏幕的一部分要重画,更新当前节点外观不影响布局,比如`color`
2. 全局回流(reflow): 布局或者几何属性尺寸改变(HTML使用的是 flow based layout,也就是流式布局,所以如果某元素的几何尺寸发生了改变,需要重新布局,也叫reflow) 

#### 下面这些动作很大可能会是导致性能问题:

1. 改变`window`窗口大小
2. 改变字体大小
3. 添加,删除,修改DOM节点
4. 定位或者浮动引起DOM的位置变化

- `display:none` 会触发回流(reflow)
- `visibility:hidden` 只会引起重绘(repaint)

#### 减少重绘(repaint)和回流(reflow)

1. `DOM`样式集中修改
2. 不要把`DOM`节点的属性值放在一个循环里当成循环里的变量
3. 尽可能修改层级比较低的`DOM`
4. 为动画的`HTML`元素使用`fixed`或者 `absolute`的`position`(原因:动画速度越快,回流次数越多,修改`fixed`和`absolute`不会回流)
5. 减少使用`table`布局,因为可能很小的一个小改动会造成整个table的重新布局
6. 




































---
title:   --JavaScript -3种事件绑定
---

```javascript
/**
 * 第一种绑定:行为结构不分离,效率也低    
 * <a onclick="xxx()">
 *
 *  第二种绑定:只能绑定1个事件
 *  xxxDomObject.onclick = function(){}
 *
 *  第三种绑定: addEventLister
 */

// 一个页面的 js 由多人团队开发;
// A,B 都在写 onload 事件
// 则 后面的事件,吧前面的onload 属性值都给覆盖了
// 这里只会输出 world
window.onload = function () {
    alert("hello");
};
window.onload = function () {
    alert('world')
};
```


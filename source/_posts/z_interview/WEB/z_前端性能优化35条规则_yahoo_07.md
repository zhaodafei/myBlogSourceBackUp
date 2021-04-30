---
title: 前端性能优化35条规则 yahoo -mobile
categories: 
- WEB
tags:
- WEB
---
前端性能优化35条规则 yahoo -mobile
前端性能优化35条规则 yahoo -mobile
前端性能优化35条规则 yahoo -mobile



### 01) 保证所有组件都小于`25K`

此限制与以下事实有关：iPhone不会缓存大于25K的组件。请注意，这是*未压缩的*大小。在这里，缩小是很重要的，因为仅使用gzip可能还不够。

有关更多信息，请参阅Wayne Shea和Tenni Theurer撰写的“[性能研究，第5部分：iPhone缓存能力-坚持下去](http://yuiblog.com/blog/2008/02/06/iphone-cacheability/)”。

### 02) 打包内容分段文档

将组件打包到一个多部分文档中就像一封带有附件的电子邮件，它可以帮助您通过一个HTTP请求获取多个组件（请记住：HTTP请求很昂贵）。使用此技术时，请首先检查用户代理是否支持它（iPhone不支持）。

## 其他:

[Yahoo Developer Network](https://developer.yahoo.com/performance/rules.html?guccounter=1)

[All 总则](../z_前端性能优化35条规则_yahoo/ "All")

[一、页面内容](../z_前端性能优化35条规则_yahoo_01/ "页面内容")

[二、服务器](../z_前端性能优化35条规则_yahoo_02/ "服务器")

[三、Cookie](../z_前端性能优化35条规则_yahoo_03/ "Cookie")

[四、CSS](../z_前端性能优化35条规则_yahoo_04/ "CSS")

[五、JavaScript](../z_前端性能优化35条规则_yahoo_05/ "JavaScript")

[六、图片](../z_前端性能优化35条规则_yahoo_06/ "图片")

[七、移动端](../z_前端性能优化35条规则_yahoo_07/ "移动端")






























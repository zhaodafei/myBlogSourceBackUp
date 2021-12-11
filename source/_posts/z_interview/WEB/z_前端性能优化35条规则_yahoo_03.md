---
title: 前端性能优化35条规则 yahoo -cookie
date: 2015-10-04
categories: 
- WEB
tags:
- WEB
---
前端性能优化35条规则 yahoo -cookie
前端性能优化35条规则 yahoo -cookie
前端性能优化35条规则 yahoo -cookie

<!-- more -->

### 01) 减少`Cookie`的大小

使用HTTP cookie的原因有多种，例如身份验证和个性化。有关cookie的信息在Web服务器和浏览器之间的HTTP标头中交换。保持Cookie的大小尽可能小很重要，以最大程度地减少对用户响应时间的影响。

有关更多信息，请查看 Tenni Theurer和Patty Chi撰写的[“当Cookie崩溃时”](http://yuiblog.com/blog/2007/03/01/performance-research-part-3/)。这项研究的主要内容：

- 消除不必要的Cookie
- 保持尽可能小的Cookie大小，以最大程度地减少对用户响应时间的影响
- 请注意在适当的域级别上设置Cookie，以便不影响其他子域
- 适当设置到期日期。较早的失效日期或没有失效日期会更快地删除Cookie，从而缩短了用户响应时间

### 02) 静态资源使用无`Cookie`域名

当浏览器发出静态图像请求并与请求一起发送cookie时，服务器对这些cookie没有任何用处。因此，它们只会无缘无故地创建网络流量。您应确保使用无Cookie的请求来请求静态组件。创建一个子域并在其中托管所有静态组件。

如果您的域是`www.example.org`，则可以在上托管静态组件`static.example.org`。但是，如果您已经在顶级域`example.org`（而不是）上设置了cookie `www.example.org`，则所有的请求都 `static.example.org`将包含这些cookie。在这种情况下，您可以购买一个全新的域，在其中托管静态组件，并使该域保持无Cookie状态。雅虎！使用`yimg.com`，YouTube使用`ytimg.com`，Amazon使用`images-amazon.com`等等。

在无cookie的域上托管静态组件的另一个好处是，某些代理可能拒绝缓存cookie所请求的组件。在相关说明中，如果您想在首页上使用example.org还是www.example.org，请考虑Cookie的影响。省略www会让您别无选择，只能将cookie写入`*.example.org`，因此出于性能方面的考虑，最好使用www子域并将cookie写入该子域。



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






























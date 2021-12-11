---
title: 前端性能优化35条规则 yahoo -JavaScript
date: 2015-10-04
categories: 
- WEB
tags:
- WEB
---
前端性能优化35条规则 yahoo -JavaScript
前端性能优化35条规则 yahoo -JavaScript
前端性能优化35条规则 yahoo -JavaScript

<!-- more -->

### 01) 把脚本防止页面底部

脚本引起的问题是它们阻止并行下载。的[HTTP / 1.1规范](http://www.w3.org/Protocols/rfc2616/rfc2616-sec8.html#sec8.1.4)建议的浏览器下载不超过每主机名并行两种组分。如果从多个主机名提供映像，则可以并行进行两个以上的下载。但是，在下载脚本时，即使使用不同的主机名，浏览器也不会启动任何其他下载。

在某些情况下，将脚本移到底部并不容易。例如，如果脚本用于`document.write`插入页面内容的一部分，则不能将其在页面中移至较低位置。可能还会存在范围界定问题。在许多情况下，有一些方法可以解决这些情况。

经常出现的另一种建议是使用延迟脚本。该`DEFER`属性指示脚本不包含document.write，并且是浏览器可以继续呈现的线索。不幸的是，Firefox不支持该`DEFER`属性。在Internet Explorer中，该脚本可能会被延迟，但不会达到所需的程度。如果可以推迟脚本，则也可以将其移至页面底部。这将使您的网页加载速度更快。

### 02) 使用外部`JavaScript`和`CSS`

这些性能规则中有许多涉及如何管理外部组件。但是，在考虑这些因素之前，您应该提出一个更基本的问题：JavaScript和CSS是否应该包含在外部文件中，还是应该内联在页面本身中？

在现实世界中使用外部文件通常会产生更快的页面，因为JavaScript和CSS文件是由浏览器缓存的。每次请求HTML文档时，都会下载HTML文档中内联的JavaScript和CSS。这减少了所需的HTTP请求的数量，但增加了HTML文档的大小。另一方面，如果JavaScript和CSS位于浏览器缓存的外部文件中，则可以在不增加HTTP请求数量的情况下减小HTML文档的大小。

那么，关键因素是相对于请求的HTML文档数量而言，缓存外部JavaScript和CSS组件的频率。尽管难以量化，但可以使用各种度量标准来衡量此因素。如果您站点上的用户每个会话具有多个页面视图，并且您的许多页面都重复使用相同的脚本和样式表，则缓存的外部文件将带来更大的潜在利益。

许多网站都属于这些指标的中间。对于这些站点，最好的解决方案通常是将JavaScript和CSS部署为外部文件。最好使用内联的唯一例外是主页，例如[Yahoo!的首页](http://www.yahoo.com/)和[My Yahoo!。](http://my.yahoo.com/)。每个会话的页面浏览量很少（也许只有一个）的主页可能会发现，内联JavaScript和CSS可以缩短最终用户的响应时间。

对于通常是许多页面视图中第一个的首页，有些技术可以利用减少内联提供的HTTP请求以及通过使用外部文件获得的缓存优势。一种这样的技术是在首页内联JavaScript和CSS，但是在页面加载完成后动态下载外部文件。后续页面将引用应该已经在浏览器缓存中的外部文件。

### 03) 压缩`JavaScript`和`CSS`

最小化是从代码中删除不必要的字符以减小其大小，从而缩短加载时间的实践。当代码最小化时，所有注释以及不需要的空格字符（空格，换行符和制表符）都将被删除。在使用JavaScript的情况下，由于减小了下载文件的大小，因此可以提高响应时间性能。最小化JavaScript代码的两种流行工具是[JSMin](http://crockford.com/javascript/jsmin)和[YUI Compressor](https://developer.yahoo.com/yui/compressor/)。YUI压缩器还可以缩小CSS。

混淆是可以应用于源代码的替代优化。它比缩小更复杂，因此由于混淆步骤本身而更容易产生错误。在对xxx十大顶级网站的调查中，缩小后的大小减少了21％，而混淆处理的大小减少了25％。尽管混淆处理的大小减小程度更高，但缩小JavaScript的风险较小。

除了最小化外部脚本和样式，内联`<script>`和`<style>`块也可以并且也应该被最小化。即使您对脚本和样式进行gzip压缩，将它们缩小也会使大小减小5％或更多。随着JavaScript和CSS的使用和大小的增加，通过减少代码量而节省的费用也将随之增加。

### 04) 移除重复脚本

在同一页面中两次包含相同的JavaScript文件会损害性能。这并不像您想的那样不寻常。对xxx十大顶级网站的审查显示，其中两个包含重复的脚本。两个主要因素增加了在单个网页中复制脚本的几率：团队规模和脚本数量。当确实发生这种情况时，重复的脚本会通过创建不必要的HTTP请求和浪费的JavaScript执行而损害性能。

不必要的HTTP请求在Internet Explorer中发生，但在Firefox中不发生。在Internet Explorer中，如果两次包含一个外部脚本且该脚本不可缓存，则它将在页面加载期间生成两个HTTP请求。即使脚本是可缓存的，当用户重新加载页面时，也会发生额外的HTTP请求。

除了生成浪费的HTTP请求之外，还浪费了多次评估脚本的时间。无论脚本是否可缓存，这种冗余的JavaScript执行都会在Firefox和Internet Explorer中进行。

避免意外地两次包含相同脚本的一种方法是在模板系统中实现脚本管理模块。包括脚本的典型方法是在HTML页面中使用SCRIPT标记。

```html
<script type =“ text / javascript” src =“ menu_1.0.17.js”> </ script>
```

PHP中的一种替代方法是创建一个名为的函数`insertScript`。

```php+HTML
<？php insertScript（“ menu.js”）？>
```

除了防止多次插入同一脚本外，此函数还可以处理脚本的其他问题，例如依赖性检查以及向脚本文件名添加版本号以支持将来的Expires标头。

### 05) 减少`DOM`操作

使用JavaScript访问DOM元素的速度很慢，因此，为了使页面更具响应性，您应该：

- 缓存对已访问元素的引用
- 更新节点“离线”，然后将其添加到树中
- 避免使用JavaScript修复布局

有关更多信息，请查看 Julien Lecomte的YUI剧院的 [“高性能Ajax应用程序”](http://yuiblog.com/blog/2007/12/20/video-lecomte/)。

### 06) 使用高效的事件处理

### 开发智能事件处理程序

标签：javascript

有时页面会因为响应事件处理程序的响应性降低而失败，这是因为将过多的事件处理程序附加到DOM树的不同元素上，而这些事件处理程序却经常执行。这就是为什么使用*事件委托*是一种很好的方法。如果a中有10个按钮`div`，则仅将一个事件处理程序附加到div包装器，而不是为每个按钮使用一个处理程序。事件冒泡，因此您可以捕获事件并弄清楚它来自哪个按钮。

您也无需等待onload事件即可开始对DOM树进行操作。通常，您需要的只是您要访问的元素在树中可用。您不必等待所有图像都被下载。 `DOMContentLoaded`是您可能考虑使用的事件，而不是onload，但是在所有浏览器中都可用之前，可以使用带有方法的[YUI Event](https://developer.yahoo.com/yui/event/)实用程序`onAvailable`。

有关更多信息，请查看 Julien Lecomte的YUI剧院的 [“高性能Ajax应用程序”](http://yuiblog.com/blog/2007/12/20/video-lecomte/)。



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






























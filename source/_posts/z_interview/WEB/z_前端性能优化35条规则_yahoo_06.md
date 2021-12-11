---
title: 前端性能优化35条规则 yahoo -images
date: 2015-10-04
categories: 
- WEB
tags:
- WEB
---
前端性能优化35条规则 yahoo -images
前端性能优化35条规则 yahoo -images
前端性能优化35条规则 yahoo -images

<!-- more -->

#### 01)  优化图片

设计人员完成为您的网页创建图像后，仍然可以尝试一些操作，然后再将这些图像通过FTP传输到Web服务器。

- 您可以检查GIF并查看它们是否使用的调色板尺寸与图像中的颜色数量相对应。使用[imagemagick](http://www.imagemagick.org/)可以很容易地进行检查。
  `identify -verbose image.gif`
  当您在调色板中看到使用4种颜色和256种颜色的“插槽”的图像时，还有改进的余地。
- 尝试将GIF转换为PNG，看看是否有节省。经常有。由于浏览器支持有限，开发人员经常不愿使用PNG，但这已成为过去。唯一的实际问题是真彩色PNG中的alpha透明度，但是同样，GIF也不是真彩色，也不支持可变透明度。因此，GIF可以做的任何事情，调色板PNG（PNG8）都可以做（动画除外）。这个简单的imagemagick命令产生了完全安全使用的PNG：
  `convert image.gif image.png`
  “我们所说的是：给PiNG一个机会！”
- 在所有PNG上 运行[pngcrush](http://pmt.sourceforge.net/pngcrush/)（或任何其他PNG优化器工具）。例子：
  `pngcrush image.png -rem alla -reduce -brute result.png`
- 在所有JPEG上运行jpegtran。该工具执行无损JPEG操作（例如旋转），也可以用于优化和删除图像中的注释和其他无用信息（例如EXIF信息）。
  `jpegtran -copy none -optimize -perfect src.jpg dest.jpg`

#### 02) 优化`CSS` ` Sprite`

- 将图片中的图片水平排列而不是垂直排列通常会导致文件较小。
- 在子画面中组合相似的颜色可以帮助您保持较低的颜色计数，理想情况下应少于256种颜色，以适合PNG8。
- “对移动设备友好”，并且在sprite中的图像之间不要留有很大的空隙。这不会对文件大小产生太大影响，但需要较少的内存供用户代理将图像解压缩为像素图。100x100图像是1万像素，其中1000x1000是1百万像素

#### 03) 不要在`HTML`中缩放图片

不要使用比您需要的大的图像，仅因为可以在HTML中设置宽度和高度。如果需要，
`<img width="100" height="100" src="mycat.jpg" alt="My Cat" />`
则您的图片（mycat.jpg）应该为100x100px，而不是缩小为500x500px的图片

#### 04) 使用体积小、可缓存的`favicon.ico`

favicon.ico是保留在服务器根目录中的映像。这是一个必不可少的邪恶(???)，因为即使您不关心它，浏览器仍然会请求它，因此最好不要使用来响应`404 Not Found`。另外，由于它在同一台服务器上，因此每次请求时都会发送cookie。该映像还会干扰下载顺序，例如，在IE中，当您在onload中请求额外的组件时，将在这些额外的组件之前下载favicon。

因此，要减轻拥有favicon.ico的弊端，请确保：

- 它很小，最好在1K以下。
- 根据需要设置Expires标头（因为如果决定更改它，则无法重命名）。您可能可以在未来几个月安全地设置Expires标头。您可以检查当前favicon.ico的最后修改日期，以做出明智的决定。

[Imagemagick](http://www.imagemagick.org/)可以帮助您创建小型网站图标



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






























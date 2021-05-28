---
title: php -GD -imagettftext库制作图片
categories: 
- PHP
tags:
- PHP
- GD
---
### php GD  用 `STHUPO.TTF` 字体向图像写入文本

`php GD`  用 `STHUPO.TTF` 字体向图像写入文本

`php GD`  用 `STHUPO.TTF` 字体向图像写入文本

```php
// GD 和图像处理函数
// https://php.net/manual/zh/function.imagettftext.php
// https://php.net/manual/zh/function.imagettftext.php

// !!!为 imagettftext() 这函数使用相对路径做准备----------------------
putenv('GDFONTPATH=' . realpath('.'));

//1. 绘制图像资源（创建一个画布）
$image = imagecreatetruecolor(500, 300);
//2. 先分配一个绿色
$green = imagecolorallocate($image, 22, 153, 0);
//3. 使用绿色填充画布
// imagefill($image, 0, 0, $green);

//03-02)使用抗锯齿（antialias）功能  ↓↓↓
// imageantialias($image,true);
// $red_aa = imagecolorallocate($image, 255, 0, 0);
// $red_aa2 = imagecolorallocate($image, 255, 0, 0);
// imageline($image, 0, 0, 300, 300, $red_aa);
// imageline($image, 100, 0, 400, 300, $red_aa2);
//使用抗锯齿（antialias）功能  ↑↑↑

//4. 在画布中绘制图像
$bai = imagecolorallocate($image, 255, 255, 255);
//使用指定的字体文件绘制文字
//参数2：字体大小
//参数3：字体倾斜的角度
//参数4、5：文字的x、y坐标
//参数6：文字的颜色
//参数7：字体文件
//参数8：绘制的文字
//------- !!! --------------  imagettftext() 这个函数中的路径使用绝对路径,要想使用相对路径请注意 第一行代码 putenv()
imagettftext($image, 30, 30, 200, 250, $bai, './STHUPO.TTF', 'helloworld');
// imagettftext($image, 30, 30, 200, 250, $bai, __DIR__.'/STHUPO.TTF', 'helloworld');
// imagettftext($image, 30, 30, 200, 250, $bai, realpath('./').'/STHUPO.TTF', 'helloworld');
// imagettftext($image, 30, 30, 200, 250, $bai, 'C:/Windows/Fonts/aparajbi.ttf', 'helloworld');
// imagettftext($image, 30, 30, 200, 250, $bai, 'C:/Windows/Fonts/STHUPO.TTF', 'helloworld');

//5. 在浏览器直接输出图像资源
header("Content-Type:image/jpeg");
imagejpeg($image);

//6. 销毁图像资源
imagedestroy($image);
```

![gd imagettftext](/img/php/gd_imagettftext.png "gd imagettftext")

![gd imageantialias](/img/php/gd_imageantialias.png "gd imageantialias")

 [GD 和图像处理 函数](https://php.net/manual/zh/function.imagettftext.php "GD 和图像处理 函数")






























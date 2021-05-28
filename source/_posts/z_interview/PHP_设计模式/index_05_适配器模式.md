---
title: -适配器模式
categories: 
- PHP
tags:
- PHP
- 适配器模式
---

将一个类的接口转换成客户希望的另外一个接口。适配器模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。

```php
// 适配器模式   -------- 其实平时一直在使用,没有起个名字, 呵呵呵

// 服务器端的代码
class weather
{
    public static function show()
    {
        $today = ['temperature' => 25, 'wind' => 7, 'sun' => 'sunny'];
        return serialize($today);
    }
}

// ========= 客户端调用 ==========
$weather = unserialize(weather::show());
echo '温度: ', $weather['temperature'], '<br>';
echo '风力: ', $weather['wind'], '<br>';
echo '阳光: ', $weather['sun'], '<br>';

// 来了一批手机上的 java 客户端,不认识 PHP 的串行化后的字符串,怎么办?
//  把服务器端的代码改了?? ---旧的客户端又会受影响???

// 增加一个适配器
class AdapterWeather extends weather{
    public static function show()
    {
        $today = parent::show();
        $today = unserialize($today);
        $today = json_encode($today);
        return $today;
    }
}

// =====  客户端调用 ======
$todayWeather = AdapterWeather::show();
$todayWeather = json_decode($todayWeather, true);

echo '温度: ', $weather['temperature'], '<br>';
echo '风力: ', $weather['wind'], '<br>';
echo '阳光: ', $weather['sun'], '<br>';
```


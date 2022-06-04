---
title: 常见4种排序： 冒泡排序、选择排序、插入排序、快速排序
date: 2015-10-04
categories: 
- PHP
tags:
- PHP
- 常见4种排
---
PHP算法

这里介绍4种常见排序： 冒泡排序、选择排序、插入排序、快速排序 、二分查找

<!-- more -->

### 冒泡排序

原理：对一组数据，比较相邻数的大小，将值大的放到后面。

``` php
<?php
// 冒泡排序
function bubbleOrder($arr)
{
    $count = count($arr);
    $temp = 0;
    // 外层控制排序次数
    for ($i = 0; $i < $count - 1; $i++) {
        // 内层控制每轮比较次数
        for ($j = 0; $j < $count - 1 - $i; $j++) {
            if ($arr[$j] > $arr[$j + 1]) {
                $temp = $arr[$j];
                $arr[$j] = $arr[$j + 1];
                $arr[$j + 1] = $temp;
            }   // print_r($arr);  echo "<br>";
        }
    }
    return $arr;
}

$arr = array(5, 2, 7, 6, 9, 3);
$res = bubbleOrder($arr);
var_dump($res);
```

![冒泡排序代码](/img/interview/algorithm/sort/冒泡排序_01.png "冒泡排序代码")

![冒泡排序运行结果](/img/interview/algorithm/sort/冒泡排序_02.png "冒泡排序运行结果")

### 选择排序

原理：在一组数据中，选出最小的数与第一个位置交换，
​     然后在剩下的数据中在找出最小的数和第二个位置交换
​     然后在剩下的数据中在找出最小的数和第三个位置交换
​     依次类推直到倒数第二个数和最后一个数对比

```php
<?php
// 选择排序
function selcetOrder($arr)
{
    // 定义中间变量
    $temp = 0;
    $count = count($arr);
    for ($i = 0; $i < $count - 1; $i++) {
        //定义最小位置
        $minIndex = $i;
        for ($j = $i + 1; $j < $count; $j++) {
            if ($arr[$j] < $arr[$minIndex]) {
                $minIndex = $j;
            }
        }

        if ($i != $minIndex) {
            $temp = $arr[$i];
            $arr[$i] = $arr[$minIndex];
            $arr[$minIndex] = $temp;
        }
    }
    return $arr;
}

$arr = array(5, 2, 7, 6, 9, 3);
$res = selcetOrder($arr);
var_dump($res);
```

![选择排序代码](/img/interview/algorithm/sort/选择排序_01.png "选择排序代码")

![选择排序运行结果](/img/interview/algorithm/sort/选择排序_02.png "选择排序运行结果")

### 插入排序

原理： 将需要排序的书，与前面已经排好的数据从后往前进行比较，使其插入到相应的位置；

```php
<?php
// 插入排序
function insertOrder($arr)
{
    $len = count($arr);
    //控制总循环次数
    for ($i = 0; $i < $len; $i++) {
        $temp = $arr[$i];
        for ($j = $i - 1; $j >= 0; $j--) {
            //从当前位置从后往前进行对比
            if ($temp < $arr[$j]) {
                $arr[$j + 1] = $arr[$j];
                $arr[$j] = $temp;
            }else{
                break;
            }
        }
    }
    return $arr;
}
$arr = array(5, 2, 7, 6, 9, 3);
$res = insertOrder($arr);
var_dump($res);
```

![插入排序代码](/img/interview/algorithm/sort/插入排序_01.png "插入排序代码")

![插入排序结果](/img/interview/algorithm/sort/插入排序_02.png "插入排序运行结果")

### 快速排序

原理：初始一个中间值(一般选择第一个)，将需要排序的数组分成3部分，小于中间的值放左边、中间值、大于中间值的放右边，继续用递归用相同的方式来排序左边和右边，最后合并数组

```php
<?php
// 快速排序
function quickOrder($arr)
{
    // 判断是否需要运行,下面要拿出一个中间值
    if (count($arr)<=1) {
        return $arr;
    }
    $middle = $arr[0]; // 中间值
    $left   = array();
    $right  = array();
    for ($i = 1; $i < count($arr); $i++) {
        if ($middle < $arr[$i]) {
            $right[] = $arr[$i];
        } else {
            $left[] = $arr[$i];
        }
    }
    // 递归排序划分好的2边数组
    $left = quickOrder($left);
    $right = quickOrder($right);
    return array_merge($left, array($middle), $right);
}
$arr = array(5, 2, 7, 6, 9, 3);
$res = quickOrder($arr);
var_dump($res);
```

### 二分查找

```php
// 正向排序的数组
$arr = array(1, 3, 5, 7, 9, 11);
// $arr = array(1, 3, 20, 7, 9, 11);
// $arr2 = array(11, 9, 7, 5, 3, 1);

function binary_search($array, $low, $high, $k){
    if ($low <= $high){
        $mid = intval(($low+$high)/2);  //intval();floor() 都可以无所谓
        if ($array[$mid] == $k){
            return $mid;
        }elseif ($k < $array[$mid]){
            return binary_search($array, $low, $mid-1, $k);
        }else{
            return binary_search($array, $mid+1, $high, $k);
        }
    }
    return '必须是正向排序数组';
}

echo binary_search($arr, 0, 5, 9);
```


















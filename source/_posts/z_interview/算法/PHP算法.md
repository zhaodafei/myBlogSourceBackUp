---
title: -算法01
date: 2015-10-04
categories: 
- PHP
tags:
- PHP
- 算法
---

PHP算法01
PHP算法01
PHP算法01

<!-- more -->

### 01).  羊生羊  

一种羊, 第一年生一只小羊, 第四年生生一只小羊, 第五年死 20年后有多少只羊

```php
$arr = [1, 0, 0, 0, 0];
for ($i = 1; $i <= 20; $i++) {
    $tmp = $arr[1] + $arr[3];
    array_unshift($arr, $tmp);
    array_pop($arr);
}
print_r($arr);
echo array_sum($arr);
```

### 02). 猴子选大王

一群猴子排成一圈，按1,2,…,n依次编号。然后从第1只开始数，数到第m只,把它踢出圈，从它后面再开始数，再数到第m只，在把它踢出去…，如此不停的进行下去，直到最后只剩下一只猴子为止，那只猴子就叫做大王。要求编程模拟此过程，输入m、n, 输出最后那个大王的编号。用程序模拟该过程

```php
function monkey($n ,$m){
    $arr = range(1,$n);     //构造数组  array(1,2,3,4,5,6,7,8);
    $i = 0;                 //设置数组指针
    while(count($arr)>1){
        //遍历数组，判断当前猴子是否为出局序号，如果是则出局，否则放到数组最后
        if(($i+1) % $m ==0) {
            unset($arr[$i]);
        } else {
            //array_push() 函数向第一个参数的数组尾部添加一个或多个元素（入栈），然后返回新数组的长度。
            array_push($arr ,$arr[$i]); //本轮非出局猴子放数组尾部
            unset($arr[$i]);   //删除
        }
        $i++;
    }
    return $arr;
}

print_r(monkey(10,4));
```

### 03).  10 进制; 8进制; 16进制 ; 2 进制

```php
/**
 * 生活中常用10进制
 * 计算机中常用2进制,8进制,16进制
 */

// 10 进制
echo 123;  echo "<br>";   //从右到左3个位,分别是以1顶1,以1顶10,以1顶100
echo 100 * 1 + 10 * 2 + 1 * 3; echo "<br>";

// 8 进制
echo 0123; echo "<br>"; //从做到右3个位,分别是以1顶1,以1顶8,以1顶64
echo 64 * 1 + 8 * 2 + 3;  echo "<br>";

echo 027;  echo "<br>";
echo 8 * 2 + 7;  echo "<br>";

//16进制   0、1、2、3、4、5、6、7、8、9、A、B、C、D、E、F
// A、B、C、D、E、F 不去分大小写
echo 0x123; echo "<br>";  //从左到右3个位,分别是1顶1,以1顶16,以1顶256
echo 256 * 1 + 16 * 2 + 3; echo "<br>";

// 2 进制, PHP 目前不支持直接表示
// 从右到左,分别以1顶1,顶2,顶4,顶8...........
/**
 *  10 进制    2 进制
 *    5       0000 0101
 *   255      1111 1111, 128+64+32+16+8+4+2+1
 *   -1       1111 1111
 * 像上面8个1,到底理解成255,还是理解成-1
 * 这个取决于程序
 * 比如在 mysql 中 ,int 则理解为 -1 ,unsigned  int理解为255
 */

// 为什么 程序员总是分不清万圣节和圣诞节? 因为 Oct 31=Dec 25
```

### 04). 8瓶水,其中1瓶有毒,那小白鼠做试验,药效发挥需要2小时

```php
// 8瓶水,其中1瓶有毒,拿小白鼠做试验,药效发挥需要2小时,最少需要几只老鼠,只能试一次
// 分析:
//       2 个小时后,小白鼠,只有2种状态: 死/活
//       2只小白鼠,有4中组合状态;
//       n只小白鼠有2^n 次方组合状态
//       一共有8瓶药水,最多需要8中状态,就可以区分
//       3只老鼠,组合8种状态
//       因此理论上与3只老鼠就可以
//
// 思路:
//      把8瓶药水分成两堆,让一只老鼠在其中一堆里面喝水,如果死了,毒药就在这堆里面,
//      反之,毒药就在另外一堆里面, 然后
//      把有毒药的那一堆分成2堆,让第2只老鼠在其中一堆里喝,如果喝死毒药就在这堆里面,
//      反之,毒药就在另外一堆里面, 然后
//      把有毒要的那一堆再分成2堆,让第三只老鼠喝就能知道毒药在几号里
//
// 解答:
//     1代表活着,0代表死
//     毒药:      1 2 3 4 5 6 7 8
//     白鼠1:     0 0 0 0 1 1 1 1
//     白鼠2:     0 0 1 1 0 0 1 1
//     白鼠3:     0 1 0 1 0 1 0 1
//    
//     白鼠一死, 毒药在 1 2 3 4
//     白鼠二死, 毒药在 3 4
//     白鼠三死, 毒药在 4
```

### 05). 递归

```php
function sum($n)
{
    if ($n == 1) {
        return 1;
    }
    return $n + sum($n-1);
}

echo sum(100);
```

### 06). PHP实现斐波那契数列

```php
1 1 2 3 5 8 13 21 34 55 .........

//用递归实现 输出某一位的数字
function fbnq($n){
    if($n <= 0) return 0;
    if($n == 1 || $n == 2) return 1;
    return fbnq($n - 1) + fbnq($n - 2);
}
echo fbnq(10);  //输出第十个数是 55
//经典案例
//有一对兔子，从出生后第3个月起每个月都生一对兔子，小兔子长到第三个月后每个月又生一对兔子，假如兔子都不死，问每个月的兔子总数为多少 (注意:这里是总数,还是对, 斐波那契数列结果是对)

// 第30位数字的值
$arr = [1,1];
for ($i=2; $i < 30; $i++) { 
	$arr[$i]=$arr[$i-1]+$arr[$i-2];
}
var_dump($arr);
```

### 07). 静态变量

```php
/**
 *  静态变量
 *  static 变量有一个特点,在第一次调用声明之后存在,切不随函数结束而结束
 *  当函数再次调用时,可以直接利用上次的结果
 */
function t()
{
    static $a = 5;
    // $a = 5;
    $a += 1;
    return $a;
}

echo t();
echo t();
echo t();
```

### 08). 递归练习,计算所有单元的和

```php
// 递归函数,计算所有单元的和
$arr = [1, 2, 3, [4, [5, 6]]];

function sum($arr)
{
    static  $sum = 0;  // static 当函数再次调用时,可以直接利用上次的结果
    foreach ($arr as $value) {
        if (is_array($value)) {
            sum($value);
        } else {
            $sum += $value;
        }
    }
    return $sum;
}

echo sum($arr);
```

### 09). 递归练习  一个多维数组,如果单元值为数字,则把其值修改为原来2倍

```php
// 一个多维数组,如果单元值为数字,则把其值修改为原来2倍
// 方法1
$arr = [1, 2, 'b', [3, 'c', [5, 6]]];
function double($arr)
{
    foreach ($arr as $key=>$value) {
        if (is_array($value)) {
            $arr[$key] = double($arr[$key]);
        } else {
            if (is_numeric($value)) {
                $arr[$key] *= 2;
            }
        }
    }
    return $arr;
}
echo "<pre>";
print_r( double($arr));

/////////////-----------------------
// 方法2 ,使用系统函数 array_walk_recursive
// @see http://php.net/manual/zh/function.array-walk-recursive.php
$crr = [1, 2, 'b', [3, 'c', [5, 6]]];;
function double_2(&$crr,$key)
{
    if (is_numeric($crr)) {
        $crr*=2;
    }
}

array_walk_recursive($crr, 'double_2');
echo "<pre>";
print_r($crr);
```

### 10). 递归创建目录

```php
$filepath = "./test/upload/2018/test.txt";

mk_dir($filepath);
//  循环创建目录
//  注意,$filepath 最后的文件,名字也会被当成目录创建
function mk_dir($dir, $mode = 0755)
{
    if (is_dir($dir) || @mkdir($dir,$mode)) return true;
    if (!mk_dir(dirname($dir),$mode)) return false;
    return @mkdir($dir,$mode);
}

/////////////-----------------------
// 方法2 ,使用系统函数 mkdir  第三个参数
// @see http://www.php.net/mkdir
//  注意,$filepath 最后的文件,名字也会被当成目录创建
$filepath = "./test/upload/2018/test.txt";
mkdir($filepath, 0755, true);
```










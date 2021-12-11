---
title: other JavaScript03 深拷贝注意问题
date: 2015-08-04
categories: 
- JavaScript
tags:
- JavaScript
---
`JSON.parse(JSON.stringify(obj))` 进行深拷贝时注意问题
`JSON.parse(JSON.stringify(obj))` 进行深拷贝时注意问题
`JSON.parse(JSON.stringify(obj))` 进行深拷贝时注意问题

<!-- more -->

1、时间: 如果obj里面存在***时间对象***，`JSON.parse(JSON.stringify(obj))`之后，时间对象变成了字符串。
2、正则: 如果obj里有***RegExp、Error***对象，则序列化的结果将只得到空对象。
3、函数: 如果obj里有***函数，undefined***，则序列化的结果会把函数， undefined丢失。
4、如果obj里有***NaN、Infinity和-Infinity***，则序列化的结果会变成null。
5、JSON.stringify()只能序列化对象的**可枚举的自有属性**。如果obj中的对象是有构造函数生成的， 则使用JSON.parse(JSON.stringify(obj))深拷贝后，会丢弃对象的constructor。
6、如果对象中存在循环引用的情况也无法正确实现深拷贝。
























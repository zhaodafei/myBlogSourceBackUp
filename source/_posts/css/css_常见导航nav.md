---
title: -CSS 常见导航nav
date: 2015-03-04
categories: 
- CSS
tags:
- CSS
---
CSS 常见导航`nav`
CSS 常见导航`nav`
CSS 常见导航`nav`

<!-- more -->

### 水平导航

```html
<style>
    ul.menu, ul.menu li{margin:0px;padding:0px;list-style:none;position:relative;}
    ul.menu li{line-height:25px}
    ul.menu li{float:left;margin-left:10px}
    ul.menu div{display:none;position:absolute;top:20px;left:0px}
    ul.menu div a{display:block}
    ul.menu li:hover div{display:block;}
</style>
<ul class="menu">
    <li><a href="#">Menu1</a>
        <div><a href="#">menu11</a><a href="#">menu12</a></div>
    </li>
    <li><a href="#">Menu2</a><div><a href="#">menu21</a><a href="#">menu22</a></div></li>
    <li><a href="#">Menu3</a><div><a href="#">menu31</a><a href="#">menu32</a></div></li>
</ul>

<div style="clear: both;height: 20px;background-color:#c0c0c0;"></div>

```
































---
title: Android入门,视图操作
date: 2023-09-16
categories: 
- Android
tags:
- Android
---
Android入门之视图操作
Android入门之视图操作
Android入门之视图操作

<!-- more -->

### 文本设置操作

```java
// 02)页面内容重新赋值
TextView fooText = findViewById(R.id.foo_text);
// fooText.setText("我是新的内容");
fooText.setText(R.string.foo_new_text1); // 设置文本内容
fooText.setTextSize(50);  // 设置字体大小(默认单位sp)
```

### 设置文本颜色

```xml
<TextView android:textColor="#90EE90" />
```

```java
fooText.setTextColor(0xFFFFFF);
fooText.setTextColor(Color.RED);
fooText.setTextColor(Color.parseColor("#FF6B81"));
fooText.setTextColor(Color.rgb(255,255,255));
fooText.setTextColor(getResources().getColor(R.color.fei_watermelon)); // 使用静态资源中定义颜色

// 背景颜色
fooText.setBackgroundColor(Color.parseColor("#00FFFF")); // 背景颜色
fooText.setBackgroundColor(getResources().getColor(R.color.fei_color_aqua)); // 背景颜色

```

### 视图的宽高

```java
// 04)设置宽高
TextView fooText02 = findViewById(R.id.foo_text02);
// 获取布局参数(含宽度和高度)
ViewGroup.LayoutParams params = fooText02.getLayoutParams();
// 修改布局参数中的宽度值,注意默认px单位,把db数值转为px数值
params.width = 100; // !!!注意默认单位px!!!
fooText02.setLayoutParams(params); // 设置布局参数
```

### 视图的间距

```wiki
layout_margin 和 padding
```

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="300dp"
    android:background="#c0c0c0"
    android:orientation="vertical">

    <!-- 中间层的布局背景为浅绿-->
    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:layout_margin="20dp"
        android:background="#90ee90"
        android:padding="60dp">

        <!-- 最内层的布局为野生西瓜色-->
        <View
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:background="#ff6b81"/>

    </LinearLayout>

</LinearLayout>
```

![视图的间距](/img/Android/and_03_1.png "视图的间距")

### 视图的对齐

```wiki
01) 设置视图的对齐方式有两种途径
01-1)采用 layout_gravity 属性,它指定了当前视图相对于**上级视图**的对齐方式
01-2)采用 gravity 属性,它指定了**下级视图**相对于视图的对齐方式

02)layout_gravity 与 gravity 的取值包括: left、right、top、bottom, 还可以用竖线
   连接各取值,例如"left|top"表示即靠左又靠上,也就是朝左上角对齐
```

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="300dp"
    android:background="#c0c0c0"
    android:orientation="horizontal">

    <!-- 左侧视图,它在上级视图中朝下对齐,它的下级视图靠左对齐-->
    <LinearLayout
        android:layout_width="0dp"
        android:layout_height="200dp"
        android:layout_gravity="bottom"
        android:layout_margin="10dp"
        android:layout_weight="1"
        android:background="#90ee90"
        android:gravity="left"
        android:padding="10dp">

        <!-- 最内层的布局为野生西瓜色-->
        <View
            android:layout_width="100dp"
            android:layout_height="100dp"
            android:background="#ff6b81"/>

    </LinearLayout>


    <!-- 右侧视图,它在上级视图中朝上对齐,它的下级视图靠右对齐 -->
    <LinearLayout
        android:layout_width="0dp"
        android:layout_height="200dp"
        android:layout_gravity="top"
        android:layout_margin="10dp"
        android:layout_weight="1"
        android:background="#90ee90"
        android:gravity="right"
        android:padding="10dp">

        <!-- 最内层的布局为野生西瓜色-->
        <View
            android:layout_width="100dp"
            android:layout_height="100dp"
            android:background="#ff6b81"/>

    </LinearLayout>

</LinearLayout>
```

![视图的对齐](/img/Android/and_03_2.png "视图的对齐")




### 底部

没有了
























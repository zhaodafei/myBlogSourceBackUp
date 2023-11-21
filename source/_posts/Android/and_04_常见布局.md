---
title: Android入门,常见布局
date: 2023-09-16
categories: 
- Android
tags:
- Android
---
Android入门之`常见布局`
Android入门之`常见布局`
Android入门之`常见布局`

<!-- more -->

### LinearLayout 线性布局

线性布局内部的各视图有两种排列方式:

> - `orientation` 属性值为`horizontal`时, 内部视图在水平方向从左往右排列
> - `orientation` 属性值为`vertical`时,内部视图在垂直方向从上往下排列

如果不指定`orientation`属性,则`linearLayout`默认水平方向排列

```wiki
#属性
android:layout_weight="1"  权重,用于分配占比
```

```xml
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">
        <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="horizontal">

        <TextView
            android:layout_width="0dp"
            android:layout_height="wrap_content"
            android:layout_weight="1"
            android:background="#ff6b81"
            android:text="水平方向排列 占用三分之一" />

        <TextView
            android:layout_width="0dp"
            android:layout_height="wrap_content"
            android:layout_weight="2"
            android:background="#c0c0c0"
            android:text="水平方向排列 占用三分之二" />
    </LinearLayout>
</LinearLayout>
```



### RelativeLayout 相对布局

```wiki
android:layout_above                控件的底部置于给定ID的控件之上
android:layout_below                控件的底部置于给定ID的控件之下
android:layout_toLeftOf             控件的右边缘与给定ID的控件左边缘对齐
android:layout_toRightOf            控件的左边缘与给定ID的控件右边缘对齐
android:layout_alignBaseline        控件的baseline与给定ID的baseline对齐
android:layout_alignTop             控件的顶部边缘与给定ID的顶部边缘对齐
android:layout_alignBottom          控件的底部边缘与给定ID的底部边缘对齐
android:layout_alignLeft            控件的左边缘与给定ID的左边缘对齐
android:layout_alignRight           控件的右边缘与给定ID的右边缘对齐


android:layout_centerHorizontal     取值布尔值，水平居中
android:layout_centerVertical       取值布尔值，垂直居中
android:layout_centerInParent       取值布尔值，父控件的中央
```

```xml
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_centerHorizontal="true"
        android:text="我的位置:水平中间"
        android:textSize="20sp" />

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_centerVertical="true"
        android:text="我的位置:垂直中间"
        android:textSize="20sp" />

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_centerInParent="true"
        android:text="我的位置(水平+垂直)中间"
        android:textSize="20sp"/>

</RelativeLayout>
```



### GridLayout 网格布局

```wiki
网格布局默认从左到右、从上到下排列, 主要属性

#GridLayout的几个重要属性：
rowCount：行数
columnCount：列数

#GridLayout的子View将能够应用属性：
layout_rowSpan：纵向跨几个单元格
layout_columnSpan：横向跨几个单元格

layout_columnWeight: 权重
```

```xml
<!-- 05 RelativeLayout 网格布局, 简单的田字-->
<GridLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:columnCount="2"
    android:rowCount="2">

    <TextView
        android:layout_width="0dp"
        android:layout_height="60dp"
        android:layout_columnWeight="1"
        android:background="#c0c0c0"
        android:text="我的位置1"
        android:textSize="20sp" />

    <TextView
        android:layout_width="0dp"
        android:layout_height="60dp"
        android:layout_columnWeight="1"
        android:background="#dda0dd"
        android:text="我的位置2"
        android:textSize="20sp" />

    <TextView
        android:layout_width="0dp"
        android:layout_height="60dp"
        android:layout_columnWeight="1"
        android:background="#90ee90"
        android:text="我的位置3"
        android:textSize="20sp" />

    <TextView
        android:layout_width="0dp"
        android:layout_height="60dp"
        android:layout_columnWeight="1"
        android:background="#00ffff"
        android:text="我的位置4"
        android:textSize="20sp" />
</GridLayout>

```



### ScrollView 滚动视图

水平和垂直滚动

1. `HorizontalScrollView`水平方向滚动视图
2. `ScrollView` 垂直方向滚动视图

```xml
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">

    <!-- 水平方向滚动 -->
    <HorizontalScrollView
        android:layout_width="wrap_content"
        android:layout_height="200dp">

        <LinearLayout
            android:layout_width="wrap_content"
            android:layout_height="match_parent"
            android:orientation="horizontal">

            <TextView
                android:layout_width="300dp"
                android:layout_height="match_parent"
                android:background="#c0c0c0"
                android:text="我的位置1,水平滚动"
                android:textSize="20sp" />

            <TextView
                android:layout_width="300dp"
                android:layout_height="match_parent"
                android:background="#dda0dd"
                android:text="我的位置2,需要水平滚动才可以看到"
                android:textSize="20sp" />

        </LinearLayout>

    </HorizontalScrollView>

    <!-- 垂直方向滚动-->
    <ScrollView
        android:layout_width="match_parent"
        android:layout_height="wrap_content">

        <LinearLayout
            android:layout_width="wrap_content"
            android:layout_height="match_parent"
            android:orientation="vertical">

            <TextView
                android:layout_width="match_parent"
                android:layout_height="500dp"
                android:background="#c0c0c0"
                android:text="我的位置3,垂直方向滚动"
                android:textSize="20sp" />
            <TextView
                android:layout_width="match_parent"
                android:layout_height="700dp"
                android:background="#c0c0c0"
                android:text="我的位置4,需要垂直方向滚动看到我所有内容"
                android:textSize="20sp" />

        </LinearLayout>

    </ScrollView>

</LinearLayout>
```




### 底部

没有了
























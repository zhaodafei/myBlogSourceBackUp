---
title: Android入门
date: 2023-09-16
categories: 
- Android
tags:
- Android
---
Android入门之`hello world`
Android入门之`hello world`
Android入门之`hello world`

<!-- more -->

`Android Studio 2022.3.1` 软件安装步骤略过,注意: 这个安装过程第一次很慢,尽量使用网线安装

### 第一个程序

1. 第一个程序`hello wolrd`的创建
2. 在使用新版`Android studio2022.3.1`创建Empty Activity工程时会遇到没有语言选项，默认创建的工程是kotlin语言
3. 所以我们创建的时候选择`Empty Views Activity`,这个里面就有选择语言,并且创建完后,有`hello world`

![第一个程序](/img/Android/Android_01.png "hello wolrd")

### 启动

创建模拟器后,直接运行就可以看到`hello world`第一个程序运行界面

```wiki
#第一个程序核心代码位置
java/com/example/myapplication1/MainActivity.java
res/layout/activity_main.xml

这2个文件,代码会自动生成的,不需要手动创建
```

```java
package com.example.myapplication1;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
}
```

```xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Hello World!,美好的一天开始了"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent" />

</androidx.constraintlayout.widget.ConstraintLayout>
```

![第一个程序](/img/Android/Android_02.png "hello wolrd")

### 找到应用

```wiki
#虚拟机中
在虚拟机中底部中间圆点,按住往上拖,就可以看到自己的应用
```



![第一个程序](/img/Android/Android_03.png "hello wolrd")






### 底部

没有了
























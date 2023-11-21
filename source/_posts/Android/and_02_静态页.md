---
title: Android入门2,静态页
date: 2023-09-16
categories: 
- Android
tags:
- Android
---
Android入门之一个简单的按钮跳转

<!-- more -->

### 创建布局文件

```wiki
创建布局文件
01)在layout->右键->New->XML->Layout XML File->( layout File Name: activity_foo; Root tag: LinearLayout)

创建新Activity
02)仿照 MainActivity.java 写一个即可(FooActivity.java)
03)创建完成后需要在(AndroidManifest.xml)中注册一个activity,否则访问不到
   demo: <activity android:name=".FooActivity" />
 
 
 #便捷方法,一次都创建出来
 01)在layout->右键->New->Activity->Empty Views Activity
    这样可以吧xml和java文件都创建,并且在(AndroidManifest.xml)中注册一个activity
```

### 按钮跳转

```java
package com.fei.myfei;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main); // 首页

        // 按钮跳转开始
        Button HomeButton = findViewById(R.id.home_button);
        HomeButton.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view) {
                Intent intent = new Intent();
                intent.setClass(MainActivity.this, FooActivity.class);
                startActivity(intent); // 注意这个方法,不要选错了,这个方法有多个,参数不一样
            }
        });
    }
}
```






### 底部

没有了
























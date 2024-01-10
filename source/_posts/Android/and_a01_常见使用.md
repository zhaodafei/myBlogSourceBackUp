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

### 左右布局

主要属性`layout_weight`

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <LinearLayout
        android:layout_width="0dp"
        android:layout_height="match_parent"
        android:layout_weight="1"
        android:background="#2fc1ff" />

    <LinearLayout
        android:layout_width="0dp"
        android:layout_height="match_parent"
        android:layout_weight="2"
        android:background="#f7242b" />
</LinearLayout>
```

### 表格布局处理按钮

```xml
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">

    <!--指定第二列允许收缩，第三列允许拉伸-->
    <TableLayout
        android:id="@+id/table1"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:shrinkColumns="1"
        android:stretchColumns="2">

        <Button
            android:id="@+id/btn1"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="first" />

        <TableRow>
            <Button
                android:id="@+id/btn2"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="普通按钮" />
            <Button
                android:id="@+id/btn3"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="收缩的按钮" />
            <Button
                android:id="@+id/btn4"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="拉伸的按钮" />
        </TableRow>

    </TableLayout>
</LinearLayout>
```

```xml
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">
    <!--指定第二列隐藏-->
    <TableLayout
        android:id="@+id/table2"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:collapseColumns="1">
        <Button
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="first" />
        <TableRow>
            <Button
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="普通按钮" />
            <Button
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="收缩的按钮" />
            <Button
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="拉伸的按钮" />
        </TableRow>
    </TableLayout>
</LinearLayout>
```

```xml
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">
    <!--指定第二列第三列允许被拉伸-->
    <TableLayout
        android:id="@+id/table4"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:stretchColumns="1,2">

        <Button
            android:id="@+id/btn9"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="thrid" />

        <TableRow>

            <Button
                android:id="@+id/btn10"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="普通按钮" />

            <Button
                android:id="@+id/btn11"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="收缩的按钮" />

            <Button
                android:id="@+id/btn12"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="拉伸的按钮" />
        </TableRow>

        <TableRow>

            <Button
                android:id="@+id/btn13"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="普通按钮" />

            <Button
                android:id="@+id/btn14"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="拉伸的按钮" />
        </TableRow>

    </TableLayout>
</LinearLayout>
```

### TextView 性质

```xml
<?xml version="1.0" encoding="utf-8"?>
<FrameLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <!-- 依次定义3个TextView:
     先定义的TextView位于底层，后定义的TextView位于上层 -->
    <TextView
        android:id="@+id/view01"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_gravity="center"
        android:width="200dp"
        android:height="200dp"
        android:background="#f00" />

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_gravity="center"
        android:width="180dp"
        android:height="180dp"
        android:background="#0f0" />

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_gravity="center"
        android:width="160dp"
        android:height="160dp"
        android:background="#00f" />
</FrameLayout>
```

### TextView 性质2(上下左右)

```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <!-- 定义该组件位于父容器中间 -->
    <TextView
        android:id="@+id/view01"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_centerInParent="true"
        android:background="@drawable/circle" />
    <!-- 定义该组件位于view01组件的上方 -->
    <TextView
        android:id="@+id/view02"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_above="@id/view01"
        android:layout_alignLeft="@id/view01"
        android:background="@drawable/circle" />
    <!-- 定义该组件位于view01组件的下方 -->
    <TextView
        android:id="@+id/view03"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_below="@id/view01"
        android:layout_alignLeft="@id/view01"
        android:background="@drawable/circle" />
    <!-- 定义该组件位于view01组件的左边 -->
    <TextView
        android:id="@+id/view04"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_alignTop="@id/view01"
        android:layout_toLeftOf="@id/view01"
        android:background="@drawable/circle" />
    <!-- 定义该组件位于view01组件的右边 -->
    <TextView
        android:id="@+id/view05"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_alignTop="@id/view01"
        android:layout_toRightOf="@id/view01"
        android:background="@drawable/circle" />
</RelativeLayout>
```

### 约束布局

```wiki
#主要属性
app:layout_constraintBottom_toBottomOf="parent"
app:layout_constraintLeft_toLeftOf="parent"
app:layout_constraintRight_toRightOf="parent"
app:layout_constraintTop_toTopOf="parent"
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
        android:id="@+id/tv_show"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Hello World!"
        android:textSize="22sp"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintLeft_toLeftOf="parent"
        app:layout_constraintRight_toRightOf="parent"
        app:layout_constraintTop_toTopOf="parent" />

    <Button
        android:id="@+id/btn"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:background="@android:color/holo_orange_dark"
        android:padding="10dp"
        android:layout_marginTop="20dp"
        android:text="约束布局"
        android:textColor="@android:color/white"
        android:textSize="20sp"
        app:layout_constraintEnd_toEndOf="@+id/tv_show"
        app:layout_constraintStart_toStartOf="@+id/tv_show"
        app:layout_constraintTop_toBottomOf="@+id/tv_show" />

</androidx.constraintlayout.widget.ConstraintLayout>
```

### TextView 属性

```xml
<!-- 设置字号为20，在文本框结尾处绘制图片 -->
<TextView
    android:layout_width="match_parent"
    android:layout_height="0dp"
    android:layout_weight="1"
    android:drawableEnd="@drawable/icon_circle"
    android:text="Hello World!"
    android:textSize="30sp" />
```

```xml
<!-- 设置中间省略，所有字母大写 -->
<TextView
    android:layout_width="match_parent"
    android:layout_height="0dp"
    android:layout_weight="1"
    android:ellipsize="middle"
    android:text="Hello World! Hello World! Hello World!"
    android:textAllCaps="true" />

```

```xml
<!-- 对邮件、电话增加链接 -->
<TextView
    android:layout_width="match_parent"
    android:layout_height="0dp"
    android:layout_weight="1"
    android:autoLink="email|phone"
    android:text="12345@123.com，18888888888" />
```

```xml
<!-- 设置文字颜色、大小，并使用阴影 -->
<TextView
    android:layout_width="match_parent"
    android:layout_height="0dp"
    android:layout_weight="1"
    android:shadowColor="#00f"
    android:shadowDx="10.0"
    android:shadowDy="8.0"
    android:shadowRadius="3.0"
    android:text="Hello World! Hello World!"
    android:textColor="#f00"
    android:textSize="18sp" />
```

```xml
<!-- 测试密码框 -->
<TextView
    android:layout_width="match_parent"
    android:layout_height="0dp"
    android:layout_weight="1"
    android:password="true"
    android:text="Hello World!" />
```

### 简单表单

```xml
<?xml version="1.0" encoding="utf-8"?>
<TableLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:padding="10dp"
    android:stretchColumns="1">
    <TableRow>
        <TextView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="用户名"
            android:textSize="16sp"/>
        <EditText
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:hint="请填写登录帐号"
            android:selectAllOnFocus="true"/>
    </TableRow>
    
    <TableRow>
        <TextView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="密码："
            android:textSize="16sp"/>
        <!-- android:inputType="numberPassword"表明只能接受数字密码 -->
        <EditText
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:inputType="numberPassword"/>
    </TableRow>
    
    <TableRow>
        <TextView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="年龄："
            android:textSize="16sp"/>
        <!-- android:inputType="number" 表明是数值输入框 -->
        <EditText
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:inputType="number"/>
    </TableRow>
    
    <TableRow>
        <TextView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="生日："
            android:textSize="16sp"/>
        <!-- android:inputType="date" 表明是日期输入框 -->
        <EditText
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:inputType="date"/>
    </TableRow>
    
    <TableRow>
        <TextView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="电话号码："
            android:textSize="16sp"/>
        <!-- android:inputType="phone" 表明输入电话号码的输入框-->
        <EditText
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:hint="请输入您的电话号码"
            android:inputType="phone"
            android:selectAllOnFocus="true"/>
    </TableRow>
    
    <Button
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="注册"/>
</TableLayout>
```

### 读写SD卡

```java
package com.example.chapater9_3;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.os.Environment;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.RandomAccessFile;

public class SDCardActivity extends AppCompatActivity
        implements View.OnClickListener{

    private final static String SD_FILE_NAME = "/fei_sdFileName";
    private EditText et_write, et_read;
    private Button start_write, start_read;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        setTitle("读写SD卡中的文件示例");

        et_write = (EditText) findViewById(R.id.et_write);
        start_write = (Button) findViewById(R.id.btn_write);
        et_read = (EditText) findViewById(R.id.et_read);
        start_read = (Button) findViewById(R.id.btn_read);

        start_write.setOnClickListener(this);
        start_read.setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {
        switch (v.getId()){
            case R.id.btn_write:
                if (!et_write.getText().toString().isEmpty()) {
                    write(et_write.getText().toString());
                    et_write.setText("");
                }
                break;

            case R.id.btn_read:
                et_read.setText(read());
                break;
        }
    }

    public void write(String content) {
        try {
            if(Environment.getExternalStorageState().equals(
                    Environment.MEDIA_MOUNTED)) {
                //获取SD卡的目录
                File sdCardDir =
                        Environment.getExternalStorageDirectory();
                File targetFile = new File(sdCardDir.getCanonicalPath()
                        + SD_FILE_NAME);
                //以指定文件创建RandomAccessFile对象
                RandomAccessFile raf =
                        new RandomAccessFile(targetFile, "rw");
                //将文件记录指针移到最后
                raf.seek(targetFile.length());
                //输出文件内容
                raf.write(content.getBytes());
                //关闭RandomAccessFile
                raf.close();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public String read() {
        try {
            if(Environment.getExternalStorageState().equals(
                    Environment.MEDIA_MOUNTED)) {
                //获取SD卡对应的存储目录
                File sdCardDir =
                        Environment.getExternalStorageDirectory();
                //获取指定文件对应的输入流
                FileInputStream fis = new FileInputStream(
                        sdCardDir.getCanonicalPath() + SD_FILE_NAME);
                //将指定输入流包装成BufferedReader
                BufferedReader br = new BufferedReader(
                        new InputStreamReader(fis));
                StringBuilder sb = new StringBuilder("");
                String line = null;
                //循环读取文件内容
                while ((line = br.readLine()) != null) {
                    sb.append(line);
                }
                br.close();
                return sb.toString();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
```

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:layout_marginLeft="20dp"
    android:layout_marginTop="20dp">

    <EditText
        android:id="@+id/et_write"
        android:layout_width="150dp"
        android:layout_height="wrap_content"/>
    <Button
        android:id="@+id/btn_write"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="@string/btn_write"/>

    <EditText
        android:id="@+id/et_read"
        android:layout_width="150dp"
        android:layout_height="wrap_content"/>
    <Button
        android:id="@+id/btn_read"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="@string/btn_read"/>
</LinearLayout>
```



![第一个程序](/img/Android/Android_01.png "hello wolrd")


### 底部

没有了
























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

![第一个程序](/img/Android/and_01.png "hello wolrd")

### 模拟器

```wiki
模拟器我习惯用: Pixel 7 API 30, 这个手机有返回键,用起来适合我
Pixel 7 API 30
Pixel 7 API 30
```



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

![第一个程序](/img/Android/and_01_2.png "hello wolrd")

### 找到应用

```wiki
#虚拟机中
在虚拟机中底部中间圆点,按住往上拖,就可以看到自己的应用
```

![第一个程序](/img/Android/and_01_3.png "hello wolrd")

### 日志

```java
// 代码
Log.d("feiFoo", "12345");
// 在编译器底部的 Logcat 中可以看到,输入搜索条件 feiFoo,可以立马定位过去

// 其他代码,打印日志
Log.e("feiFoo", "12345"); // 错误信息
Log.w("feiFoo", "12345"); // 警告信息
Log.i("feiFoo", "12345"); // 一般消息
Log.d("feiFoo", "12345"); // 调试信息, d 代表 debug
Log.v("feiFoo", "12345"); // 冗余信息
```

### 真机调试

```wiki
华为手机

01)usb 连接到电脑
02)设置->系统->关于手机->版本信息-> 然后连续点击8次左右,即可处于开发者模式
03)系统和更新->开发人员选项->USB调试
04)在 Android Studio 设备哪里会自动显示华为手机

```

### adb

```wiki
adb全称: Android debug bridge
位置(找你的sdk安装位置):  D:\soft_position\Java\Android\Sdk\platform-tools\adb.exe
```

### 图标

```wiki
安装apk后,第一次看到的图标位于代码的: 
app/src/main/res/mipmap-hdpi
app/src/main/res/mipmap-mdpi
app/src/main/res/mipmap-xhdpi
app/src/main/res/mipmap-anydpi
app/src/main/res/mipmap-xxhdpi
app/src/main/res/mipmap-xxxhdpi
```

### 清单文件 AndroidManifest.xml

```wiki
#清单文件 AndroidManifest.xml
这个文件中包含了APP配置信息,系统需要根据里面的内容运行APP的代码,显示界面

#allowBackup 是否备份
#android:icon 指定在手机屏幕上显示的图标
#android:label 指定app在手机屏幕上显示的名称
#android:roundIcon 指定APP的圆角图片
#android:supportsRtl 是否支持阿拉伯语/波斯语这种从右往左的文字排列顺序,为true表示支持,false表示不支持
#android:theme 指定角标风格

#<activity android:name=".MainActivity"  应用启动后,打开的第一个页面是哪个activity

#相当于路由,入口
启动任何一个没有在清单中定义的Activity时都会抛出一个运行时异常。
```

### 显示界面和逻辑

```wiki
在xml中描述样式
在java中写逻辑

#xmlns:android : xmlns(全名: xml name space) 命名空间

#属性
match_parent 容器宽高
wrap_content 包裹宽高
```

### 第二个程序

```java
package com.fei.myfei;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        TextView feiHome = findViewById(R.id.feiHome);
        feiHome.setText("北京,你好");
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
        android:id="@+id/feiHome"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Hello World!"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent" />

</androidx.constraintlayout.widget.ConstraintLayout>
```

### 快速创建一个activity

```wiki
在java的主文件 java/com/fei/myfei 右键 New->Activity->Empty Views Activity
```

### 创建2个应用

在一个项目中创建2个应用

```wiki
Project 模式下,在文件最顶层右键->New->Module-> (起个名字,比如app02,下一步) ->Empty View Activity
```



![创建2个应用](/img/Android/and_01_4.png "创建2个应用")

### 快捷键使用

1. 使用this

   ```java
   RadioGroup btnRg_login = findViewById(R.id.btnRg_login); // RadioGroup 单选按钮组
   
   // 鼠标放到this上面, alt + enter,
   // 选择 make Fei03Activity implements android.widget.RadioGroup.OnCheckedChangeListener
   btnRg_login.setOnCheckedChangeListener(this);
   ```

   ```java
   package com.fei.myfei;
   
   import androidx.appcompat.app.AppCompatActivity;
   
   import android.os.Bundle;
   import android.view.View;
   import android.widget.RadioGroup;
   
   // 完整的一个 RadioGroup 监听事件
   public class Fei03Activity extends AppCompatActivity implements View.OnClickListener, RadioGroup.OnCheckedChangeListener {
   
       @Override
       protected void onCreate(Bundle savedInstanceState) {
           super.onCreate(savedInstanceState);
           setContentView(R.layout.activity_fei03);
   
           RadioGroup btnRg_login = findViewById(R.id.btnRg_login); // RadioGroup 单选按钮组
           btnRg_login.setOnCheckedChangeListener(this);
       }
   
       @Override
       public void onClick(View v) {
           // 按钮,点击事件
       }
   
       @Override
       public void onCheckedChanged(RadioGroup radioGroup, int CheckId) {
           // 单选按钮,监听事件
       }
   }
   ```

   

2. 让变量定义到类上面
   ```java
   // 让 ck_remember 定义到最上面私有方法
   // 在 ck_remember 上 alt + enter,选择 create field 'ck_remember' in Fei03Activity
   ck_remember = findViewById(R.id.ck_remember);
   ```

   ```java
   // 完整的一个 demo
   public class Fei03Activity extends AppCompatActivity implements View.OnClickListener, RadioGroup.OnCheckedChangeListener {
   
       private TextView tv_password;
       private EditText et_password;
       private Button btn_forget;
       private CheckBox ck_remember; // 定义上来了 ============
   
       @Override
       protected void onCreate(Bundle savedInstanceState) {
           super.onCreate(savedInstanceState);
           setContentView(R.layout.activity_fei03);
   
           RadioGroup btnRg_login = findViewById(R.id.rg_login); // RadioGroup 单选按钮组
           btnRg_login.setOnCheckedChangeListener(this); // 设置单选监听器
   
           tv_password = findViewById(R.id.tv_password);
           et_password = findViewById(R.id.et_password);
           btn_forget = findViewById(R.id.btn_forget);
           ck_remember = findViewById(R.id.ck_remember);
       }
   }
   ```

   

3. xxx




### 其他

[Android基础入门教程](https://www.runoob.com/w3cnote/android-tutorial-intro.html)

[Android 开发者>Jetpack>room](https://developer.android.google.cn/jetpack/androidx/releases/room?hl=zh_cn#kts)




















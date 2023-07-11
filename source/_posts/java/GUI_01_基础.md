---
title: Java图形界面GUI
date: 2013-07-04
categories: 
- Java
tags:
- Java
---
Java图形界面GUI
Java图形界面GUI
Java图形界面GUI

<!-- more -->

### 一个简单的窗体

```java
package com.baihe.thread.ml;

import javax.swing.*;
import java.awt.*;

public class BarGUI extends JFrame {
    public BarGUI() {
        // 创建窗口
        JFrame frame = new JFrame("我是主窗体-飞");

        frame.setSize(500, 300); // 设置窗口大小
        frame.setBackground(Color.WHITE); // 设置窗口底色
        frame.setLocation(300, 200); // 设置窗口位置

        frame.setVisible(true); // 设置窗口显示

    }

    public static void main(String[] args) {
        BarGUI BarGUI = new BarGUI();
    }
}

```

### 背景颜色

```java
package com.baihe.thread.ml;

import javax.swing.*;
import java.awt.*;

public class FooGUI  extends JFrame {

    public FooGUI() {
        // 创建窗口
        JFrame frame = new JFrame();
        //设置窗口标题
        this.setTitle("我是主窗体-飞");
        //设置窗口的x,y位置，窗口大小x,y.
        this.setBounds(600, 300, 500, 400);
        //设置窗体的大小
        this.setSize(600, 600);
        //设置窗体的位置
        this.setLocation(600, 300);

        //窗体背景
        Container container = this.getContentPane();
        container.setBackground(new Color(175,238,238)); // #afeeee 藏宝石绿

        //设置默认的关闭窗口4
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setVisible(true);
    }
    public static void main(String[] args) {
        FooGUI FooGUI = new FooGUI();
    }
}

```

### 设置一个按钮

注意: 只有一个按钮元素是会填满整个窗口

```java
package com.baihe.thread.ml;

import javax.swing.*;
import java.awt.*;

public class FeiGUI extends JFrame {

    public FeiGUI() {
        // 实例化标签组件是为了不让按钮默认样式生效，当只有一个按钮组件的时候，默认填满整个窗口
        JFrame frame = new JFrame("我是主窗体-飞"); // 实例化窗口对象，这里主要是设置显示文字内容
        JButton but = new JButton("这是一个按钮"); // 实例化按钮
        JLabel lab = new JLabel("这是一个空白区域",JLabel.CENTER); // 实例化标签对象

        frame.add(but); // 将按钮添加进窗口
        frame.add(lab); // 将标签添加进窗口
        frame.setSize(500,300); // 设置窗口大小
        frame.setBackground(Color.WHITE); // 设置窗口底色
        frame.setLocation(300,200); // 设置窗口位置
        frame.setVisible(true); // 设置窗口显示

        but.setBounds(0,0,150,30); // 设置按钮大小及位置
        lab.setBounds(0,0,50,50);
    }

    public static void main(String[] args) {
        FeiGUI FeiGUI = new FeiGUI();
    }

}

```




### 底部

没有了
























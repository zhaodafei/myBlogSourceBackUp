---
title: Android入门之Activity
date: 2023-09-16
categories: 
- Android
tags:
- Android
---
Android有四大基本组件：Activity、Service服务、BroadcastReceiver广播接收器、Content Provider内容提供者

Android入门之`Activity`
Android入门之`Activity`
Android入门之`Activity`

Activity是一个应用程序组件，提供一个屏幕，用户可以用来交互为了完成某项任务

Activity中所有操作都与用户密切相关，是一个负责与**用户交互**的组件，可以通过`setContentView(View)`来**显示指定控件**

在一个`android`应用中，一个`Activity`通常就是一个单独的屏幕，它上面可以显示一些控件也可以监听并处理用户的事件做出响应。`Activity`之间通过`Intent`进行通信

<!-- more -->

### Activity页面跳转

```wiki
#从当前页面跳转到新页面
startActivity(new Intent(Fei00MenuActivity.this, FooActivity.class));

#从当前页面返回到上个页面,相当于关闭当前页面
finish();
```

### 生命周期

1. onCreate()：在Activity创建时调用，通常做一些初始化设置，不可见，只在Activity创建时执行一次
2. onStart()：在Activity即将可见时调用，可见，在Activity中多次调用，不在前台，不可交互，初始化工作
3. onResume()：在Activity获取焦点开始与用户交互时调用，在前台，开启动画和独占设备
4. onPause()：在当前Activity被其它Activity覆盖或锁屏时调用，可见，程序状态的保存，独占设备和动画的关闭，以及一些数据的保存最好在onPause中进行，但不能太耗时
5. onStop()：在Activity对用户不可见时调用，不可见，其对象还在内存中，系统内存不足时可能不会执行onStop()方法
6. onDestroy()：在Activity销毁时调用
7. onRestart()：在Activity从停止状态再次启动时调用

```wiki
#Activity生命周期
01) 打开新页面的方法调用顺序为:
  onCreate -> onStart -> onResume
02) 关闭旧页面的方法调用顺序为:
  onPause ->  onStop -> onDestroy
```

![生命周期](/img/Android/and_05_1.png "生命周期")

![生命周期](/img/Android/and_05_2.png "生命周期")

### 启动模式

启动模式的类别

- 标准模式（standard）
- 栈顶复用模式（singleTop）
- 栈内复用模式（singleTask）
- 单例模式（singleInstance）

```wiki
#启动模式的设置: 
01)在AndroidMainifest设置
    在AndroidMainifest的Activity配置进行设置, 通过android:launchMode属性设置 
    
    <activity
    android:name="com.demo.Main4Activity"
    android:launchMode="singleTask"/>
    
02)通过Intent设置标志位 ,通过Intent的Flag设置
 Intent inten = new Intent (ActivityA.this,ActivityB.class);
 intent,addFlags(Intent,FLAG_ACTIVITY_NEW_TASK);
 startActivity(intent); 
 
 
#标记为属性
FLAG_ACTIVITY_NEW_TASK  开辟一个新的任务线
FLAG_ACTIVITY_SINGLE_TOP 当栈顶为带跳转的活动实例之时,则重用栈顶的实例
FLAG_ACTIVITY_CLEAR_TOP  当栈中存在带跳转的活动实例时,则重新创建一个新的实例,并清除原实例上的所有实例
FLAG_ACTIVITY_NO_HISTORY  栈中不保存新启动的活动实例
FLAG_ACTIVITY_CLEAR_TASK  跳转到新页面时,栈中的原有实例都被清空

```

```java
//demo1 登录成功后不在返回登录页面
 //创建一个意图对象,准备跳转到指定的活动页面
 Intent intent = new Intent (ActivityA.this, ActivityLogin.class);
 //设置启动标志,跳转到页面时,栈中的原有实例被清空,同时开辟新任务的活动栈
 intent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_NEW_TASK, Intent.FLAG_ACTIVITY_NEW_TASK);
 // 跳转到意图指定的活动页面
 startActivity(intent); 
```

### 显式intent和隐式intent

intent是个个组件之间信息沟通的桥梁,它用于Android各个组件之间的通信,主要完成下列工作:

1. 标明本次通信请求从哪里来、到哪里去、要怎么走。
2. 发起方携带本次通信需要的数据内容，接收方从接收的意图中解析数据。
3. 发起方若想判断接收方的处理结果，意图就要负责让接收方回应答的数据内容。

```wiki
元素名称	设置方法	     说明与用途
Component	setComponent	组件，它指定意图的来源于目标
Action	    setAction	   动作，它指定意图的动作行为
Data	    setData	    即Uri，它指定动作要操作的数据路径
Category	addCateGory   	类别，它指定意图的操作类别
Type	    setType	    数据类型，它指定消息的数据类型
Extras	    putExtras	 扩展信息，它指定装载的包裹信息
Flags	    setFlags	 标志位，它指定活动的启动标志
```

### 传输数据

向下个`activity`传输数据

```java
// 页面直接传递参数

// 提供者
Intent intent = new Intent();
intent.setClass(Fei00MenuActivity.this, FooActivity.class);
Bundle bundle = new Bundle();
bundle.putString("params_fei1","我是第1个参数");
bundle.putString("params_fei2","我是第2个参数");
intent.putExtras(bundle);
startActivity(intent); // 注意这个方法,不要选错了,这个方法有多个,参数不一样

// 接受者
// 05)接受其他页面跳转过来的参数
Bundle extras = getIntent().getExtras();
Object params1 = extras.getString("params_fei1");
Object params2 = extras.getString("params_fei2");
TextView fooText03 = findViewById(R.id.foo_text03);
String allparams = String.format("参数1为%s: ", params1);
// fooText03.setText("ssssssssss");
fooText03.setText(allparams);
```

向上个`activity`传输数据

```java
private ActivityResultLauncher<Intent> register;

// 在onCreate中
register = registerForActivityResult(new ActivityResultContracts.StartActivityForResult(), result -> {
    // 执行  finish(); 这里的 onActivityResult 会执行到
    Log.d(TAG, "onActivityResult: 接受到了没有 ");

    Intent intent = result.getData();
    if (intent != null && result.getResultCode() == Activity.RESULT_OK) {
        Bundle bundle = intent.getExtras();
        String response01 = bundle.getString("request_time");
        String response02 = bundle.getString("request_content");

        Log.d("feiFoo", String.format("接受参数为:", response01));

        TextView showResponseText = findViewById(R.id.fei02_text2_response);
        showResponseText.setText(response02);
    }
});

// 在监听事件 onClick 中, 一定要用 register.launch(intent); 跳转
public void onClick(View v) {
    if (v.getId() == R.id.fei02_btn1) {
        // 不能用 startActivity 跳转了,要用 register.launch(intent);
        // startActivity(new Intent(this, Fei021Activity.class));

        // 创建一个数据包裹
        Intent intent = new Intent(this, Fei021Activity.class);
        // Bundle bundle = new Bundle();
        // bundle.putString("request_time", "2023年11月1日22:31:45");
        // bundle.putString("request_content", mRequest);
        // intent.putExtras(bundle);

        register.launch(intent); // 传递走
    }
}
```




### 底部

没有了




















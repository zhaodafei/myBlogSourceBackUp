---
title:  -Java入门基础之线程
date: 2024-01-14
categories: 
- Java
tags:
- Java
---

Java基础入门之线程

<!-- more -->

### 线程

```java
// 获取当前线程的名字
String name = Thread.currentThread().getName();
System.out.println(name);
```

### 自定义线程类

```java
// ctrl + o, 显示类中方法
// 自定义线程类
class MyThread extends Thread{
    @Override
    public void run() {
        String name = Thread.currentThread().getName();
        System.out.println("MyThread: "+name);
    }
}


MyThread myThread = new MyThread();
myThread.start(); // 启动线程

```

### 休眠

```java
Thread.sleep(3000); //休息3秒钟
```

### 线程运行

```java
new Thread(() -> {
    System.out.println("创建线程01");
}).start();


new Thread(new Runnable() {
    @Override
    public void run() {
        System.out.println("创建线程02");
    }
}).start();
```

### 线程池01

```java
// 创建一个大小为3的线程池
ExecutorService threadPool = Executors.newFixedThreadPool(3);

// 给线程池添加任务5个, 只会使用大小为3的线程池,或者等待
for (int i = 0; i < 5; i++) {
    threadPool.submit(new Runnable() {
        @Override
        public void run() {
            String name = Thread.currentThread().getName();
            System.out.println(name);
        }
    });
}
```

### 线程池02

```java
// 根据需求动态创建线程
ExecutorService threadPool = Executors.newCachedThreadPool();

for (int i = 0; i < 5; i++) {
    threadPool.submit(new Runnable() {
        @Override
        public void run() {
            String name = Thread.currentThread().getName();
            System.out.println(name);
        }
    });
}
```

### 线程池03

```java
// 单一线程
ExecutorService threadPool = Executors.newSingleThreadExecutor();

for (int i = 0; i < 5; i++) {
    threadPool.submit(new Runnable() {
        @Override
        public void run() {
            String name = Thread.currentThread().getName();
            System.out.println(name);
        }
    });
}
```

### 线程池04

```java
// 定时调度线程
ExecutorService threadPool = Executors.newScheduledThreadPool(3);

for (int i = 0; i < 5; i++) {
    threadPool.submit(new Runnable() {
        @Override
        public void run() {
            String name = Thread.currentThread().getName();
            System.out.println(name);
        }
    });
}
```

### 线程安全

```java
class User {
    public String name;
}


// 线程安全
// 所谓的线程安全问题,其实就是多个线程在并发执行时,
// 修改了共享内存中共享对象的属性,导致的数据冲突问题
User user = new User();

Thread t1 = new Thread(() -> {
    user.name = "论语";
    try{
        Thread.sleep(1000);
    } catch (InterruptedException e) {
        throw new RuntimeException(e);
    }

    System.out.println(user.name);
});

Thread t2 = new Thread(() -> {
    user.name = "史记";
    try{
        Thread.sleep(1000);
    } catch (InterruptedException e) {
        throw new RuntimeException(e);
    }

    System.out.println(user.name);
});

t1.start();
t2.start();
```



### 底部

没有了


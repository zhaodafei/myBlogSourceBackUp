---
title:  -Java入门基础
date: 2024-01-14
categories: 
- Java
tags:
- Java
---

Java基础入门

2004年9月, 推出 `Java 5` 版本
2014年3月18日, 推出 `Java 8` 版本
2021年9月14日, 推出 `Java 17` 版本

<!-- more -->

### Java发展史

```javascript
2004年9月,推出 Java 5 版本
2014年3月18日,推出 Java 8 版本
2021年9月14日,推出 Java 17 版本

Java17版本应用
Spring Framework 6
Srpring Boot 3
Elasticsearch 8.X
Kafka 4.0
```

### 简单`java`文件运行原理

```wiki
jdk 安装目录 D:\soft_position\Java\jdk1.8.0_191\bin 这个下面值java相关的一些命令
#javac.exe
## 编译器编译java的代码,输出到 out 下面 对应的 xxx.class 文件

#java.exe  
## 启动JVM
```

![java 入门](/img/java/base/base_01.png "java 入门")

### 简单运行一个`java`文件

```wiki
以Windows10 系统为例
01) 找到 java 的 jdk 安装位置: 我的在 D:\soft_position\Java\jdk1.8.0_191\bin
02) 创建 文件 HelloWorld.java
03) 执行2条命令 
D:\soft_position\Java\jdk1.8.0_191\bin\javac .\HelloWorld.java

D:\soft_position\Java\jdk1.8.0_191\bin\java HelloWorld

04) 看到输出内容 Hello World
```

```java
// 文件名字为 HelloWorld.java; 文件名字和类同名
public class HelloWorld {
    /* 第一个Java程序
     * 它将输出字符串 Hello World
     */
    public static void main(String[] args) {
        System.out.println("Hello World"); // 输出 Hello World
    }
}
```



### 逻辑运算符

#### 与或

```java
// 逻辑运算法: &,称之为与运算
// 与运算,要求两个条件表达式都必须计算出结果,
// 只有当两个结果都是true时,最终结果为true,其他情况全是false
int i = 10;
boolean resA = (i < 5) & (i < 20);

//===============================================================
// 逻辑运算符: |,称之为或运算符
// 或运算,要求两个条件表达式都必须计算出结果,
// 只要任何一个结果为true,那么最后结果就是true
//     两个表达式的结果都是false,那么最终结果才是false
int n = 10;
boolean resB = (n < 5) | (n > 20);
```

#### 短路与或

```java
// 逻辑运算符: &&,称之为短路与运算符
// 短路与运算符,会根据第一个条件表达式的结果来判断,是否执行第二个条件表达式,
//     如果第一个表达式的结果为false,那么第二个表达式就不会执行
int m = 10;
int n = 20;
boolean resA = (m > 10) && (++n > 30);
System.out.println(n); // 第二个表达式不执行,输出20

boolean resB = (m > 5) && (++n > 30);
System.out.println(n); // 第二个表达式执行了,输出21

//===================================================================
// 逻辑运算符: ||,称之为短路或运算符
// 短路或运算符,会根据第一个条件表达式的结果来判断,是否执行第二个条件表达式
//      如果第一个表达的结果为true,那么第二个表达式就不会执行了
int x = 10;
int y = 20;
boolean resA = (x == 10) || (++y > 30);
System.out.println(y); // 第二个表达式不执行,输出20

boolean resB = (x == 50) || (++y > 30);
System.out.println(y); // 第二个表达式执行了,输出21
```

### 面向对象

```java
// 面向对象
class Book {
    private String name; // 图书名字
    private String author; // 图书作者
    private String type; // 图书类型
    private int price; // 图书价格
}
```

### 构造方法

```java
class Book {
    // 方法名和类名一样
    Book() {
        System.out.println("我是构造方法,自动执行");
    }
}
```

### 多态

```java
class Person {
    void testPerson() {
        System.out.println("输出Person");
    }
}

class Boy extends Person{
    void testBoy() {
        System.out.println("输出boy");
    }
}

class Girl extends Person{
    void testGirl() {
        System.out.println("输出girl");
    }
}

// 使用
// 所谓的多态,其实就是一个对象在不同场景下表现出来的不同状态和形态
// 多态语法其实就是对对象使用场景进行了约束
Person p = new Person();
p.testPerson();
// 以父类声明的子类对象,只能使用父类中的方法
Person p1 = new Boy();
p1.testPerson();
// p1.testBoy(); // 调用不到
Person p2 = new Girl();
p2.testPerson();

Boy boy = new Boy();
boy.testBoy(); // 这样就可以调用到了
```

### 递归

#### 斐波那契

```java
public class Fei01_HelloWorld {
    public static void main(String[] args) {
        // 利用函数递归 输出 斐波那契 数列前10项
        for (int i = 0; i < 10; i++) {
            System.out.println(funFoo(i));
        }

    }

    // 利用函数递归 输出 斐波那契 数列前10项
    public static int funFoo(int n){
        if (n == 0 || n == 1) {
            return 1;
        }else {
            return funFoo(n - 1) + funFoo(n - 2);
        }
    }
}
```

### 枚举类

```java
public class Fei01_HelloWorld {
    public static void main(String[] args) {
        System.out.println(City.BEIJING.name);
        System.out.println(City.SHANGHAI.code);
    }
}

// 枚举类:是一个特殊的类,其中包含了一组特定的对象,这些对象不会发生改变
// 一般用大写字母标识符
// 枚举类使用enum关键字使用
// 枚举类会将对象放置在最前面,那么和后面的语法需要使用分号隔开
enum City {
    BEIJING("北京", 1001),
    SHANGHAI("上海", 1002);

    public final String name;
    public final int code;

    City(String name, int code) {
        this.name = name;
        this.code = code;
    }
}
```

### 匿名类

```java
public class Fei01_HelloWorld {
    public static void main(String[] args) {

        // 在模型场合下,类的名字不重要,我们指向使用类中的方法或功能
        //  那么此时我们可以采用特使语法: 匿名类
        // 所谓的匿名类,就是没有名字的类
        Fei fei = new Fei();
        fei.sayHello(new Person() {
            public String name() {
                return "张三";
            }
        });
        fei.sayHello(new Person() {
            public String name() {
                return "李四";
            }
        });
    }
}

abstract class Person{
    public abstract String name();
}
class Fei{
    public void sayHello(Person person) {
        System.out.println("hello" + person.name());
    }
}

```

```java
// demo02
public class Fei01_HelloWorld {
    public static void main(String[] args) {
        Person p = new Person() {
            public void eat() {
                System.out.println("eat something");
            }
        };
        p.eat();
    }
}

interface Person {
    public void eat();
}
```

### Bean类

```java
// Bean类作用: 01.主要用于建立数据模型(Bean)
// Bean类设计规范
// 01.类要求必须含有无参数,公共构造方法
// 02.属性必须私有化,然后提供公共的set、get方法
```



```java
public class Fei01_HelloWorld {
    public static void main(String[] args) {
        UserBean userBean = new UserBean();
        userBean.setAccount("dafei");
        userBean.setPassword("123");
        boolean isLogin = login(userBean);
        if (isLogin) {
            System.out.println("登录成功");
        } else {
            System.out.println("登录失败");
        }
    }

    public static boolean login(UserBean userBean) {
        if (userBean.getAccount().equals("dafei") &&
                userBean.getPassword().equals("123")
        ) {
            return true;
        } else {
            return false;
        }
    }
}

// Bean类作用: 01.主要用于建立数据模型(Bean)
// Bean类设计规范
// 01.类要求必须含有无参数,公共构造方法
// 02.属性必须私有化,然后提供公共的set、get方法
class UserBean {
    private String account;
    private String password;

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

```

### 常见类和对象-Object

创建一个类后,使用快捷键`Ctrl + o`,可以看到复写方法

```java
public class Fei01_HelloWorld {
    public static void main(String[] args) {
        Person person = new Person();
        String s = person.toString();
        // 输出 Person@1b6d3586
        //     类名字@内存地址
        // 这里的内存地址是16进制
        System.out.println("十六进制内存地址" + s);

        // 输出内存地址(这里为十进制)
        int i = person.hashCode();
        System.out.println("十进制内存地址" + i);

        // 把十进制转为16进制
        String s1 = Integer.toHexString(i);
        System.out.println("十六进制内存地址" + s1);

        // 判断两个对象是否相等,如果相等,那么返回true否则返回false
        // equals 方法比较对象时,默认比较的就是内存地址
        Person otherPerson = new Person();
        int n = otherPerson.hashCode();
        System.out.println("十六进制内存地址" + n);
        System.out.println(person.equals(otherPerson));
    }
}

// 创建一个类后,默认继承了 java.lang.Object,使用快捷键ctrl+o可以看到复写方法
class Person {
    @Override
    public boolean equals(Object obj) {
        // 这里强制返回true,用这个方法检查是否是同一个对象
        return true;
    }
}

```

### 常见类和对象-数组

```java
// 一般数组知识
public class Fei01_HelloWorld {
    public static void main(String[] args) {
        String[] names = new String[3];
        names[0] = "张三";
        names[1] = "李四";
        names[2] = "王五";
        // names[3] = "大飞"; // 会发生数组越界

        // 输出为 ['张三', '李四', '王五']
        System.out.println(Arrays.toString(names));
        
        for (int i = 0; i < names.length; i++) {
            System.out.println(names[i]); // 依次输出单个内容
        }
        // 和上面for循环等效
        for (String name : names) {
            System.out.println(name);
        }
    }
}
```

```java
// 开始使用
public class Fei01_HelloWorld {
    public static void main(String[] args) {
        User[] users = new User[3];
        for (int i = 0; i < users.length; i++) {
            users[i] = new User();
        }
        // 调用输出内容
        for (int i = 0; i < users.length; i++) {
            users[i].test();
        }
        // 和上面for循环等效
        for (User user : users) {
            user.test();
        }
    }
}

class User {
    public void test() {
        System.out.println("输出内容test");
    }
}
```





### 底部

没有了

---
title:  -Java入门基础-集合
date: 2024-01-14
categories: 
- Java
tags:
- Java
---

Java基础入门-集合;

以下所有内容,在`jdk8`环境下

<!-- more -->

### 集合简介

`Java`中的集合是一个名词,数据是一种容器,用于溶解数据,`Java`提供了完整的集合框架

什么时候需要一个容纳数据的容器,也就是集合对象?

> Java集合框架中就包含了对不确定个数的数据处理的集合类

如果只是为了容纳数据,可以是直接使用数组,为什么要学习集合?

> 数组使用起来不方便,在数据格式不确定的场合,数组使用起来不是很方便

总结: 对不确定的有关系的数据进行相同的逻辑处理的场合,使用集合是一个不错的选择

根据数据的不同,`Java`的集合分为2大体系:

1. 单一数据体系: `Collection`接口定义了相关的规则

2. 成对的数据体系: `Collection`接口定义了相关的规则

   > 所谓的成对的数据,就是2个数据有关系,可以根据第一个数据关联到第二个数据,也称之为键值对数据,`(12345,dafei)=>(key,value)`

### 集合-常用的接口和类

1. `Collection`接口

   > 常用的子接口
   >
   > 1. List: 按照插入顺序保存数据, 数据可以重复的,具体的实现类: `ArrayList`,`LinkedList`
   > 2. Set: 集,无序保存,数据不能重复,具体的实现类: `HashSet`
   > 3. Queue: 队列,具体的实现类: `ArrayBlockingQueue`

2. `Map`接口

   > 具体的实现: `HashMap` 和 `Hashtable`

### `ArrayList`基本操作

```java
// 集合: Collection - list
//      ArrayList: Array + List
// List: 列表, 清单
//       按照数据插入顺序进行存储
// Array: 数组, 阵列

// 创建第一个集合对象: ArrayList
// ArrayList的参数说明
// 1.不需要传递构造参数,直接new就可以,底层数组为空数组
// 2.构造参数需要传递一个int类型的值,用于设定底层数组的长度
// 3.构造参数需要传递一个Collection集合类型的值,用于将其他集合中的数据放置在当前集合中
ArrayList list = new ArrayList();

list.add("论语"); // 论语,史记,左传,汉书,战国策
list.add("史记");
list.add("史记");

// list.size(); // 获取集合中数据的条数
for (int i = 0; i < list.size(); i++) {
    System.out.println("集合中数据: "+list.get(i));
}

for (Object objItem : list) {
    System.out.println("当前集合中数据" + objItem);
}

// list.set(1, "替换了");
// list.remove(2);
System.out.println(list);
```

#### `ArrayList`的常用方法

```java
// ArrayList的常用方法
ArrayList list = new ArrayList();

// 论语,史记,左传,汉书,战国策
list.add("论语");
list.add("史记");
list.add("左传");
list.add("论语");

// add 方法可以传递2个参数的,第一个参数表示数据增加的位置(索引),第二个参数表示数据
list.add(1, "战国策");

ArrayList otherList = new ArrayList();
otherList.add("1");
otherList.add("2");
otherList.add("3");
list.addAll(otherList); // 把这个新的添加到旧的里面

list.size(); // 方法表示集合内部数据的数量
list.clear(); // 清空集合中的数据
list.removeAll(otherList); // 删除指定集合中的数据
list.isEmpty(); // 判断集合中的数据是否为空

list.contains("史记");// 判断集合中是否存在某条数据,返回Boolean
list.indexOf("论语"); // 用于获取数据在索引中的第一个位置,不存在返回-1
list.lastIndexOf("论语"); // 返回数据最后一个位置

Object[] objects = list.toArray(); // 转为数组对象

Object clone = list.clone();// 复制新集合
ArrayList list1 = (ArrayList)clone;
```

### `LinkedList`基本操作

```java
// ctrl + p 提示参数
// LinkedList: Linked + List
// 构建集合对象: // 论语,史记,左传,汉书,战国策
LinkedList list = new LinkedList();

// 增加数据
list.add("论语");
list.addFirst("史记");
list.add(1,"左传");

// 获取数据
list.getFirst();
list.getLast();
System.out.println(list);// 打印结果

for (int i = 0; i < list.size(); i++) {
    System.out.println(list.get(i));
}
for (Object obj :
        list) {
    System.out.println(obj);
}

// 修改和删除
list.set(1, "修改了");
list.remove("史记");
```



#### `LinkList`常用方法

```java
// 构建集合对象: // 论语,史记,左传,汉书,战国策
LinkedList list = new LinkedList();

// 追加数据
list.add("论语");
list.add("史记");
list.add("左传");

// 指定位置增加数据
list.add(1, "汉书");
list.addFirst("战国策");
list.addFirst("战国策22");

LinkedList list1 = new LinkedList();
list1.add("论语_2");
list1.add("史记_2");
list1.add("左传_2");
list.addAll(list1);

list.size();
list.isEmpty();
list.clear();
list.contains("论语");
list.element(); // 获取第一个数据
list.indexOf("aaa");
list.lastIndexOf("sss");

list.push("aaa"); // 添加数据
list.pop(); // 弹出数据

```

### 泛型

```java
// 泛型也称为类型参数
class MyContainer<fei>{
    public fei data;
}

```

### 比较器`Comparator`

```java
ArrayList list = new ArrayList();
list.add(1);
list.add(3);
list.add(2);
list.add(7);
list.add(5);

// 输出: [1, 3, 2, 7, 5]
System.out.println(list);
// 开始从小到大排序
list.sort(new FeiComparator());
System.out.println(list);

class FeiComparator implements Comparator<Integer> {
    @Override
    public int compare(Integer o1, Integer o2) {
        // 从小到大排序
        return o1 - o2;
    }
}
```

### `Set`接口

```java
// Set 同时因为其是一个抽象的接口：所以不能直接实例化一个set对象。(Set s = new Set() )错误
// 该接口主要继承于Collections接口，所以具有Collection的一些常见的方法

// add( )	向集合中添加元素
// clear( )	去掉集合中所有的元素
// contains( )	判断集合中是否包含某一个元素
// isEmpty( )	判断集合是否为空
// iterator( )	主要用于递归集合，返回一个Iterator()对象
// remove( )	从集合中去掉特定的对象
// size( )	返回集合的大小

// Set接口最长用的两大实现：HashSet TreeSet
```



### `HashSet`

```java
// HashSet 特点: 存储的数据是唯一的不会重复
HashSet set = new HashSet();
// 增加数据 // 论语,史记,左传,汉书,战国策
set.add("论语");
set.add("史记");
set.add("左传");

// 删除数据
// set.remove("论语");

for (Object item :
        set) {
    System.out.println(item);
}
```

#### `HashSet`常用方法

```java
// HashSet 特点: 存储的数据是唯一的不会重复
HashSet set = new HashSet();

ArrayList list = new ArrayList();
list.add("论语");
list.add("史记");
list.add("左传");
set.addAll(list);

Object[] objects = set.toArray();
set.isEmpty();
set.contains("论语");
set.size();
set.clear();
Object clone = set.clone();
```

#### `HashSet`重复数据

```java
// 这个小demo: 主要是在User 类中特殊处理后,让HasSet保存的值可以唯一
HashSet set = new HashSet();

User user1 = new User();
user1.id = 1001;
user1.name = "论语";

User user2 = new User();
user2.id = 1001;
user2.name = "论语";

User user3 = new User();
user3.id = 1002;
user3.name = "左传";

set.add(user1);
set.add(user2);
set.add(user3);

// 输出: [User[1001, 论语], User[1002, 左传]]
System.out.println(set);


class User {
    public int id;
    public String name;

    @Override
    public int hashCode() {
        return id;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj instanceof User) {
            User otherUser = (User) obj;
            if (otherUser.id == this.id && otherUser.name.equals(this.name)) {
                return true;
            }
            return false;
        }else {
            return false;
        }
    }

    @Override
    public String toString() {
        return "User[" + id + ", " + name  + ']';
    }
}
```

### `Queue`操作

```java
// // 论语,史记,左传,汉书,战国策
ArrayBlockingQueue queue = new ArrayBlockingQueue(3);

// // add 方法如果增加数据增加不了,直接发送错误
// queue.add("论语");
// queue.add("史记");
// queue.add("左传");
// queue.add("汉书"); // 超出了,直接报错

// // 容易出现空白,发生阻塞
// queue.put("论语");
// System.out.println("1111111");
// queue.put("史记");
// System.out.println("22222222");
// queue.put("左传");
// System.out.println("333333333");
// queue.put("汉书");
// System.out.println("444444444");

// 不会报错,不会阻塞
boolean isTrue1 = queue.offer("论语");
System.out.println(isTrue1);
boolean isTrue2 = queue.offer("史记");
System.out.println(isTrue2);
boolean isTrue3 = queue.offer("左传");
System.out.println(isTrue3);
boolean isTrue4 = queue.offer("汉书");
System.out.println(isTrue4); // 超出后返回false

// queue.poll();// 取出数据
// queue.poll();// 取出数据
// queue.poll();// 取出数据
// queue.poll();// 取出数据, 返回null
//
// queue.take(); // 取出数据
// queue.take(); // 取出数据
// queue.take(); // 取出数据
// queue.take(); // 发送阻塞, 出现空白
```

### `HashMap`基本操作

```java
HashMap map = new HashMap();

// 添加数据( put也可以修改数据 )
map.put("1", "论语");
map.put("2", "史记");
map.put("3", "左传");
// map.put("2", "战国策"); // 对之前key=2的做修改

// 查询数据
Object o1 = map.get("1");
map.remove("3"); // 删除数据

System.out.println(map);
```

#### `HashMap`常用方法

```java
HashMap map = new HashMap();

// 添加/修改数据
map.put("1", "论语"); // 添加
map.put("1", "史记"); // 会对上个key为1数据修改

// 只会添加
map.putIfAbsent("2", "左传");
map.putIfAbsent("2", "汉书"); // 不会添加也不会修改

// 替换
map.remove("2", "战国策");

map.clear(); //清空
map.put("1", "论语");
map.put("2", "史记");
map.put("3", "汉书");

// 获取集合中所有的key
Set set = map.keySet();
for (Object key : set) {
    Object o = map.get(key);
}

map.containsKey("1");
Collection values = map.values(); // 获取所有的value

// 删除
// map.remove("1");
map.remove("1","xxx"); // 2个参数的时候,需要都是等于才可以删除

System.out.println(map);
```

### `Hashtable`

```wiki
Hashtable 月 HashMap 区别
01) 实现方式不一样,继承父类不一样
02) HashMap的<K,V>都可以是空,Hashtable的<K,V>不可以是空
03) HashMap的数据定位采用的是Hash算法,但是Hashtable采用的就是hashcode
04) Hasmap的性能较高,但是Hashtable比较低
```

### 迭代器

```java
// 迭代器存在的原因, 普通的循环过程中,不能修改原来集合的值
HashMap<String,String> map = new HashMap<String,String>();
map.put("1", "论语");
map.put("2", "史记");
map.put("3", "汉书");

Set<String> keys = map.keySet();
for (Object key : keys) {
    if (key.equals("1")) {
        // warning: 在遍历过程中修改map就会发生报错
        // map.remove("1"); // 这个会报错
        map.put("4","我也会报错");
    }
}
System.out.println(map);
```

```java
// 迭代器,遍历过程中,修改集合的值
HashMap<String,String> map = new HashMap<String,String>();
map.put("1", "论语");
map.put("2", "史记");
map.put("3", "汉书");

// 使用迭代器
Set<String> keys = map.keySet();
Iterator<String> iterator = keys.iterator();
while (iterator.hasNext()) {
    String key = iterator.next();
    if (key.equals("2")) {
        // remove方法只能删除当前数据(比如判断是等于2, 不能删除不是2的数据)
        iterator.remove();
    }
}

System.out.println(map);
```

### `Arrays`工具类

```java
int[] is = {3, 5, 2, 1, 4};
int[] is1 = {1, 2, 3, 4, 5};
int[] is2 = {1, 2, 3, 4, 5, 6};
// 输出: [3, 5, 2, 1, 4]
String s = Arrays.toString(is);
System.out.println(s);
// 输出: 内存地址
System.out.println(is);

// 输出: [1, 2, 3, 4, 5]
List<Integer> integers = Arrays.asList(1, 2, 3, 4, 5);

// 排序
Arrays.sort(is); // 排序后输出: [1, 2, 3, 4, 5]
System.out.println(Arrays.toString(is));

// 二分查找法,排序后的数组
Arrays.binarySearch(is,3);

// 数组比较
Arrays.equals(is, is1);
```

### stream 处理集合

```java
List<Integer> list = Arrays.asList(111, 222, 3333, 4444);
List<Integer> filterList = list.stream().filter(d -> d > 222).collect(Collectors.toList());
System.out.println(list);
System.out.println(filterList); // 找出大于222的所有值
```

```java
List<Integer> num = Arrays.asList(1, 2, 3, 4, 5);
List<Integer> collect1 = num.stream().map(n -> n * 2).collect(Collectors.toList());
System.out.println(collect1); // 输出: [2, 4, 6, 8, 10]  对每个值都乘以2
```



### 底部

没有了

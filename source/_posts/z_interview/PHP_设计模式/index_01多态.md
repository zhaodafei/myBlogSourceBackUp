---
title: -多态
---

### 多态满足三个条件:

1. 子类继承父类

2. 子类重写父类

3. 父类引用指向子类

   ```php
   // 多态  动物(猫,狗)  猫吃鱼,牛吃草
   
   abstract class Animal
   {
       abstract function eat();
   }
   
   class Cat extends Animal
   {
       function eat()
       {
           // TODO: Implement eat() method.
           echo ' 猫吃鱼 ';
       }
   }
   
   class Dog extends Animal
   {
   
       function eat()
       {
           // TODO: Implement eat() method.
           echo ' 牛吃草 ';
       }
   }
   
   class Client
   {
       // java 中 foo(Animal $animal) ,声明 cat 和 dog 的父类 animal ,只能传递 animal 的子类
       // public function foo(Animal $animal)
       public function foo($animal)
       {
           $animal->eat();
       }
   }
   
   $catClient = new Client();
   $catClient->foo(new Cat());
   
   $dogClietn = new Client();
   $dogClietn->foo(new Dog());
   
   
   //  如果在 class Client 中这样写 public function foo(Animal $animal)
   // 下面的就会报错
   class Pig{
       public function eat()
       {
           echo " 猪飞到上天 ";
       }
   }
   
   $pigClient = new Client();
   $pigClient->foo(new Pig());
   ```

设计模式参考地址: 

[设计模式]: http://www.runoob.com/design-pattern/design-pattern-tutorial.html	"设计模式"

[设计模式]: https://www.w3cschool.cn/shejimoshi/design-pattern-tutorial.html	"设计模式"

[设计模式01](http://www.runoob.com/design-pattern/design-pattern-tutorial.html)

[设计模式02](https://www.w3cschool.cn/shejimoshi/design-pattern-tutorial.html)
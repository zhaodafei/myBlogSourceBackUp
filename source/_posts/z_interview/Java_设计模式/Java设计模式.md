# Java 设计模式

Java 设计模式是软件开发中反复出现的最佳实践解决方案，主要分为 **三大类**：

---

## 一、创建型模式 (Creational Patterns)

### 1. 单例模式 (Singleton)

确保一个类只有一个实例，并提供全局访问点。

```java
public class Singleton {
    private static volatile Singleton instance;
    
    private Singleton() {}
    
    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}
```

### 2. 工厂模式 (Factory)

- **简单工厂**：一个工厂类根据参数创建不同产品
- **工厂方法**：定义创建对象的接口，让子类决定实例化哪个类
- **抽象工厂**：创建一系列相关对象的抽象接口

```java
// 工厂方法示例
public interface ProductFactory {
    Product createProduct();
}

public class ConcreteFactory implements ProductFactory {
    @Override
    public Product createProduct() {
        return new ConcreteProduct();
    }
}
```

### 3. 建造者模式 (Builder)

链式调用构建复杂对象。

```java
public class User {
    private String name;
    private int age;
    
    public static class Builder {
        private String name;
        private int age;
        
        public Builder name(String name) {
            this.name = name;
            return this;
        }
        
        public Builder age(int age) {
            this.age = age;
            return this;
        }
        
        public User build() {
            User user = new User();
            user.name = this.name;
            user.age = this.age;
            return user;
        }
    }
}

// 使用
User user = new User.Builder()
    .name("张三")
    .age(25)
    .build();
```

### 4. 原型模式 (Prototype)

通过克隆现有对象创建新对象。

```java
public class Prototype implements Cloneable {
    public Object clone() {
        try {
            return super.clone();
        } catch (CloneNotSupportedException e) {
            return null;
        }
    }
}
```

---

## 二、结构型模式 (Structural Patterns)

### 1. 适配器模式 (Adapter)

将一个类的接口转换成客户期望的另一个接口。

```java
public interface Target {
    void request();
}

public class Adaptee {
    public void specificRequest() {
        System.out.println("特定请求");
    }
}

public class Adapter implements Target {
    private Adaptee adaptee;
    
    public Adapter(Adaptee adaptee) {
        this.adaptee = adaptee;
    }
    
    @Override
    public void request() {
        adaptee.specificRequest();
    }
}
```

### 2. 装饰器模式 (Decorator)

动态地给对象添加额外职责。

```java
public interface Coffee {
    String getDescription();
    double getCost();
}

public class SimpleCoffee implements Coffee {
    @Override
    public String getDescription() { return "Simple Coffee"; }
    @Override
    public double getCost() { return 2.0; }
}

public class MilkDecorator implements Coffee {
    private Coffee coffee;
    
    public MilkDecorator(Coffee coffee) {
        this.coffee = coffee;
    }
    
    @Override
    public String getDescription() {
        return coffee.getDescription() + ", Milk";
    }
    
    @Override
    public double getCost() {
        return coffee.getCost() + 0.5;
    }
}
```

### 3. 代理模式 (Proxy)

为其他对象提供一种代理以控制对这个对象的访问。

```java
public interface Subject {
    void request();
}

public class RealSubject implements Subject {
    @Override
    public void request() {
        System.out.println("真实请求");
    }
}

public class ProxySubject implements Subject {
    private RealSubject realSubject;
    
    @Override
    public void request() {
        if (realSubject == null) {
            realSubject = new RealSubject();
        }
        System.out.println("代理预处理");
        realSubject.request();
        System.out.println("代理后处理");
    }
}
```

### 4. 组合模式 (Composite)

将对象组合成树形结构以表示"部分-整体"的层次结构。

### 5. 外观模式 (Facade)

提供一个统一的接口来访问子系统中的一群接口。

---

## 三、行为型模式 (Behavioral Patterns)

### 1. 观察者模式 (Observer)

定义对象间的一对多依赖关系。

```java
public interface Observer {
    void update(String message);
}

public class Subject {
    private List<Observer> observers = new ArrayList<>();
    
    public void attach(Observer observer) {
        observers.add(observer);
    }
    
    public void notifyAll(String message) {
        for (Observer observer : observers) {
            observer.update(message);
        }
    }
}
```

### 2. 策略模式 (Strategy)

定义一系列算法，把它们一个个封装起来。

```java
public interface PaymentStrategy {
    void pay(double amount);
}

public class CreditCardPayment implements PaymentStrategy {
    @Override
    public void pay(double amount) {
        System.out.println("信用卡支付: " + amount);
    }
}

public class PayPalPayment implements PaymentStrategy {
    @Override
    public void pay(double amount) {
        System.out.println("PayPal支付: " + amount);
    }
}
```

### 3. 命令模式 (Command)

将请求封装成对象。

```java
public interface Command {
    void execute();
}

public class LightOnCommand implements Command {
    private Light light;
    
    public LightOnCommand(Light light) {
        this.light = light;
    }
    
    @Override
    public void execute() {
        light.turnOn();
    }
}
```

### 4. 模板方法模式 (Template Method)

定义算法骨架，将某些步骤延迟到子类。

```java
public abstract class Game {
    abstract void initialize();
    abstract void start();
    abstract void end();
    
    public final void play() {
        initialize();
        start();
        end();
    }
}
```

### 5. 状态模式 (State)

允许对象在内部状态改变时改变它的行为。

---

## 四、设计原则 (SOLID)

| 原则 | 说明 |
|------|------|
| **S** 单一职责 | 一个类只负责一项职责 |
| **O** 开闭原则 | 对扩展开放，对修改关闭 |
| **L** 里氏替换 | 子类可以替换父类 |
| **I** 接口隔离 | 使用多个专用接口 |
| **D** 依赖倒置 | 依赖抽象，不依赖具体 |

---

## 五、模式分类汇总

| 类型 | 模式 |
|------|------|
| 创建型 | 单例模式、工厂模式、建造者模式、原型模式 |
| 结构型 | 适配器模式、装饰器模式、代理模式、组合模式、外观模式 |
| 行为型 | 观察者模式、策略模式、命令模式、模板方法模式、状态模式 |

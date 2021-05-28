---
title: -drools 笔记
categories: 
- drools
tags:
- drools
---

### 逗号 comma

```
逗号字符用于分割约束,他具有隐含的 AND 连接语义
// Person is at least 50 and weighs at least 80 kg
Person( age > 50, weight > 80 )

// Person is at least 50, weighs at least 80 kg and is taller than 2 meter.
Person( age > 50, weight > 80, height > 2 )


!!!但是
逗号不能嵌入到复合约束表达式中,例如括号
Person( ( age > 50, weight > 80 ) || height > 2 ) // Do NOT do this: compile error

// Use this instead
Person( ( age > 50 && weight > 80 ) || height > 2 )
```

 [Comma separated AND](https://docs.jboss.org/drools/release/7.20.0.Final/drools-docs/html_single/index.html#_comma_separated_and "Comma separated AND")

### 嵌套对象的分组访问器

```
一下2个等效,  注意不要丢了!!!点!!!
Person( name == "mark", address.city == "london", address.country == "uk" )
Person( name == "mark", address.( city == "london", country == "uk") )
```

[Grouped accessors for nested objects](https://docs.jboss.org/drools/release/7.20.0.Final/drools-docs/html_single/index.html#_grouped_accessors_for_nested_objects)

### 操作符优先级

```bash
(nested) property access    .	
List/Map access            [ ]	
constraint binding   :	
multiplicative       * / %	 
additive             + -	 
shift                << >> >>>	 
relational           < > <= >= instanceof	 
equality             == !=	
bit-wise non-short circuiting AND               &	 
bit-wise non-short circuiting exclusive OR	^	 
bit-wise non-short circuiting inclusive OR	|	 
logical AND	&&	 
logical OR	||	 
ternary	? :	 
Comma separated AND	,
```

[Operators priority 操作符优先级 。⌘](https://docs.jboss.org/drools/release/7.20.0.Final/drools-docs/html_single/index.html#_grouped_accessors_for_nested_objects "Operators priority 操作符优先级 。⌘")



 [基本Drools规则语言语法](http://support.streamx.co/intro/basic-drools-rule-language-syntax-cont "基本Drools规则语言语法")






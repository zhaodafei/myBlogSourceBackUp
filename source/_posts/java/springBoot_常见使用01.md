---
title: springBoot -基本介绍
date: 2022-07-24
categories: 
- springBoot
tags:
- springBoot
---
springBoot -目录介绍
springBoot -目录介绍

<!-- more -->

#目录介绍

`SSM` 和 `SpringBoot` 目录介绍对比

![打包](/img/java/springBoot/directory_01.png "打包")

### 启动后进入登录页面

```xml
<!-- spring security 安全认证 -->
<!-- 这个包引入后会有个自己的登录页面,影响接口使用 -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```



场景描述: `springBoot`接口项目启动后网页显示`Please sign in`的一个登录页面,在idea控制台有`Using generated security password`, 这里有个密码

解决方法一

> 用户名: user, 密码为控制台显示的秘密, 在浏览器上输入

解决方法二:

> 因为是自动集成了SpringSecurity，因此我们可以禁用Security的自动配置，在启动类@SpringBootApplication注解上加上如下代码
>
> ```java
> @SpringBootApplication(exclude = {SecurityAutoConfiguration.class, SecurityFilterAutoConfiguration.class})

### 底部

xxx没有了




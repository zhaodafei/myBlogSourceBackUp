---
title: 开源项目分析代码
date: 2024-01-31
categories: 
- ruoyi
tags:
- ruoyi
---
开源项目分析代码
开源项目分析代码
开源项目分析代码
官网地址: [ruoyi](https://www.ruoyi.vip/ "ruoyi")



<!-- more -->

## 后端代码

### 退出接口

```wiki
#dev-api/logout

#退出接口文件
LogoutSuccessHandlerImpl.java

```

### 登录流程

```wiki
```

### 权限和访问限制

```wiki
01) com/ruoyi/web/controller/system/SysConfigController.java 
	中的 @PreAuthorize("@ss.hasPermi('system:config:list')") 是权限校验
02) com/ruoyi/framework/config/SecurityConfig.java
	中的  .antMatchers("/login", "/register", "/captchaImage").permitAll() 是放开校验
```

### 全局异常

```wiki
#全局异常GlobalExceptionHandler

在类上面加上 @RestControllerAdvice 就可以捕获代码中出现的异常信息返回给接口
```

### 树形解构`aop`

```xml
#01)添加依赖
<!-- SpringBoot 拦截器 -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-aop</artifactId>
</dependency>

#02)程序注解配置 <!-- 002 -->
创建配置文件 ApplicationConfig,添加注解

@Configuration
// 表示通过aop框架暴露该代理对象,AopContext能够访问
@EnableAspectJAutoProxy(exposeProxy = true)

#03)创建DataScope文件 <!-- 003 -->
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@Documented

#04)在使用查询的 impl 类的方法上使用  <!-- 004 -->
@DataScope(deptAlias = "d")

#05) 对应到xml中的查询 
${params.dataScope}
```

```wiki
#典型报错

java.lang.IllegalStateException: Cannot find current proxy: Set 'exposeProxy' property on Advised to 'true' to make it available, and ensure that AopContext.currentProxy() is invoked in the same thread as the AOP invocation context.
	at org.springframework.aop.framework.AopContext.currentProxy(AopContext.java:69) ~[spring-aop-5.3.14.jar:5.3.14]
	at com.example.fei.common.utils.SpringUtils.getAopProxy(SpringUtils.java:116) ~[classes/:na]
	at com.example.fei.service.impl.SysDeptServiceImpl.selectDeptTreeList(SysDeptServiceImpl.java:56) ~[classes/:na]
	at com.example.fei.controller.system.SysUserController.deptTree(SysUserController.java:137) ~[classes/:na]
```

![树形解构 aop](/img/z_fun/java_yi/y001.png "aop")

### 返回数据结构

返回一个body+自定义字段

```java
AjaxResult ajax = AjaxResult.success(user); // 返回一个User对象
ajax.put("roles", "roles123");  // 往里面push上 roles123
ajax.put("permissions", "permissions"); // 往里面push上 permissions
```

### 读取环境变量

原始配置文件

```wiki
#文件路径
ruoyi-admin/src/main/resources/application.yml
```



方法一:

```wiki
#在方法上面用注解
@Value("${switchFei.isLoginCaptcha}")
```

方法二

```wiki
在类上面用注解,直接获取前缀
@ConfigurationProperties(prefix = "ruoyi")

#demo
@Component
@ConfigurationProperties(prefix = "fei")
public class EnvConfig {
    /** 上传路径 */
    private static String profile;

    public static String getProfile() {
        return profile;
    }

    /** 注意这里不用多了单词 static */
    public void setProfile(String profile) {
        EnvConfig.profile = profile;
    }
}
```

### 图片上传和显示问题

```wiki
#图片问题
com/ruoyi/web/controller/common/CommonController.java
com/ruoyi/framework/config/ResourcesConfig.java
com/ruoyi/framework/security/handle/AuthenticationEntryPointImpl.java
ruoyi-admin/src/main/resources/application.yml
com/ruoyi/framework/config/SecurityConfig.java


http://localhost:8181/profile/upload/2024/05/19/001_20240519094130A002.png
http://localhost:8181/profile/upload/2024/05/19/001_20240519094130A002.png

http://localhost:8281/dev-api/profile/upload/2024/05/19/001_20240519094130A002.png
http://localhost:8281/dev-api/profile/upload/2024/05/19/001_20240519094130A002.png

01)CommonController.java 文件上传
02)ResourcesConfig.java 资源映射
03)AuthenticationEntryPointImpl.java  认证失败(可以忽略)
04)application.yml  配置资源路径
05)SecurityConfig.java  资源无需校验即可访问


02) ResourcesConfig.java 文件核心代码

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry)
    {
        /** 本地文件上传路径 */
        registry.addResourceHandler(Constants.RESOURCE_PREFIX + "/**")
                .addResourceLocations("file:" + EnvConfig.getProfile() + "/");
    }
```

### 代码模板生产

```wiki
01) 手动创建相关表table
02) 在菜单 [ 系统工具/代码生成/导入 ] 选择需要导入的表,然后修改( 生成信息:生成包路径,生成模块名 )
03) 下载即可使用
```

### 参数接受

接受参数注解说明

```java
01) @PathVariable的使用
01-1) 通过@RequestMapping注解中的 { } 占位符来标识URL中的变量部分
01-1) 在控制器中的处理方法的形参中使用@PathVariable注解去获取@RequestMapping中 { } 中传进来的值，并绑定到处理方法定一的形参上。
01-3)demo:

//请求路径：http://127.0.0.1/user/tom
@RequestMapping(value="/user/{name}")
public String username(@PathVariable(value="name") String username) {
    return username;
}

```

接受post参数

> 接受post参数
>
> ```js
> // js 的post请求参数
> [1,2,3]
> ```
>
> ```java
> // 后端接受
> @PostMapping("/remove")
> public AjaxResult remove(@RequestBody Long[] escortIds) {
>     return toAjax(IBusEscortService.removeEscortByEscortIds(escortIds));
> }
> 
> 
> public int removeEscortByEscortIds(Long[] escortIds);
> 
> 
> <update id="removeEscortByEscortIds" parameterType="String">
>   update bus_escort set del_flag = 2 where escort_id in
>   <foreach item="escortId" collection="array" open="(" separator="," close=")">
>     #{escortId}
>   </foreach>
> </update>
> ```
>
> 



### 底部

没有了
























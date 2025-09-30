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

### 入口文件

```java
// 项目启动入口文件 ruoyi-admin/src/main/java/com/ruoyi/RuoYiApplication.java
@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class })
public static void main(String[] args){}
```

### 基本配置文件

```java
// MySQL配置  ruoyi-admin/src/main/resources/application-druid.yml
// Reids 和 登录token配置 ruoyi-admin/src/main/resources/application.yml

// ruoyi-admin/src/main/resources/banner.txt 中获取变量名称

```



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

#### 图片名字中文访问

```java
// 解决中文名字访问不到; 注意springboot版本不同可能有差异
@Override
public void configurePathMatch(PathMatchConfigurer configurer) {
    UrlPathHelper urlPathHelper=new UrlPathHelper();
    urlPathHelper.setUrlDecode(false);
    urlPathHelper.setDefaultEncoding(StandardCharsets.UTF_8.name());
    configurer.setUrlPathHelper(urlPathHelper);
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
>       update bus_escort set del_flag = 2 where escort_id in
>       <foreach item="escortId" collection="array" open="(" separator="," close=")">
>         #{escortId}
>       </foreach>
> </update>
> ```
>
> 

### 关联查询[ 用户管理/修改 ]

```shell
#接口: api/system/user/4
#文件: SysUserController.java
#方法: getInfo
#核心代码: ajax.put("roleIds", sysUser.getRoles().stream().map(SysRole::getRoleId).collect(Collectors.toList()));

这个行代码对应的查询在 mapper/system/SysUserMapper.xml 中,然后找到 id="SysUserResult" 这里面有2个核心代码:

<association property="dept"    javaType="SysDept"         resultMap="deptResult" />
<collection  property="roles"   javaType="java.util.List"  resultMap="RoleResult" />

这2行分别对应的 id="deptResult" 和 id="RoleResult" 

#对应属性: domain/entity/SysUser.java, 这里会把对应属性回显出来
private List<SysRole> roles; /** 角色对象 */
public List<SysRole> getRoles(){ return roles; }
public void setRoles(List<SysRole> roles){ this.roles = roles; }

#扩展
指定一方关系(1对1)使用 <association />
指定多方关系(1对多,多对对)使用 <collection />
```

### 给用户分配角色[  遍历 ]

```shell
#接口 api/system/user/authRole?userId=4&roleIds=2,3
#文件 SysUserController.java
#方法 insertAuthRole   找这里put请求方法
#文件: SysUserServiceImpl.java 中有个遍历对参数roleIds
#对应的mapper文件: mapper/system/SysUserRoleMapper.xml 中 id="batchUserRole"

```

```java
/**
 * 新增用户角色信息
 * 
 * @param userId 用户ID
 * @param roleIds 角色组
 */
public void insertUserRole(Long userId, Long[] roleIds)
{
    if (StringUtils.isNotEmpty(roleIds))
    {
        // 新增用户与角色管理
        List<SysUserRole> list = new ArrayList<SysUserRole>(roleIds.length);
        for (Long roleId : roleIds)
        {
            SysUserRole ur = new SysUserRole();
            ur.setUserId(userId);
            ur.setRoleId(roleId);
            list.add(ur);
        }
        userRoleMapper.batchUserRole(list);
    }
}
```

```xml
<insert id="batchUserRole">
    insert into sys_user_role(user_id, role_id) values
    <foreach item="item" index="index" collection="list" separator=",">
        (#{item.userId},#{item.roleId})
    </foreach>
</insert>
```

### 代码模板生成

```wiki
#修改生成代码模板
01)位置: ruoyi-generator/src/main/resources/vm/
02)修改生成vue代码: ruoyi-generator/src/main/resources/vm/vue
03)修改生成vue的js: ruoyi-generator/src/main/resources/vm/js
04)修改生成Java代码: ruoyi-generator/src/main/resources/vm/java
```

### 分页接口

为啥分页接口的`mapper.xml`没有写`limit`却可以实现分页???

```wiki
01) 在接口 list 开始有一行代码 startPage(); 调用 PageUtils.startPage(); 这是使用分页
02) xxx

#扩展
01)原生 MyBatis 必须手动写 LIMIT，而插件（如 PageHelper、MyBatis-Plus）可以自动完成。
02)如果你的项目没有显式配置分页插件，但分页生效，可能是 某些 Starter 包（如 mybatis-plus-boot-starter）默认启用了分页功能。
03)分页插件
########PageHelper
<dependency>
    <groupId>com.github.pagehelper</groupId>
    <artifactId>pagehelper-spring-boot-starter</artifactId>
    <version>最新版本</version>
</dependency>

########MyBatis-Plus
<dependency>
    <groupId>com.baomidou</groupId>
    <artifactId>mybatis-plus-boot-starter</artifactId>
    <version>最新版本</version>
</dependency>
```



## xml查询

```wiki
#gt,gte,lt,lte缩写的含义
## 这几个单词在范围查询的时候会用到
gt:  greater than 大于
gte: greater than or equal 大于等于
lt:  less than 小于
lte: less than or equal 小于等于
```

#### 简单查询

```xml
<!-- 一定要加个where 1=1 这样可以防止报错 -->
<select id="selectTest1" parameterType="BusEscort" resultMap="EscortResultMap">
    select t1.ac from table1 t1
    where 1=1
    <if test="username != null and username != ''">#{username} </if>
</select> 

<!-- 关联表查询 -->
<select id="selectTest" parameterType="BusEscort" resultMap="EscortResultMap">
    select t1.a ,t2.b ,t1.c from table1 t1,table t2
    where t1.a=t2.a
    <if test="username != null and username != ''">#{username}</if>
</select>


```

#### 范围查询

```xml
<!-- 范围查询, 注意这里大于小于符号 -->
<where>
    <if test="username != null and username != ''">
        AND username like concat('%', #{username}, '%')
    </if>
    <if test="beginTime != null and beginTime != ''">
        and  create_time &gt;= #{beginTime}
    </if>
    <if test="endTime != null and endTime != ''">
        and  create_time &lt;= #{endTime}
    </if>
    AND del_flag = 0
</where>
```

### 查询字段

```xml
  <sql id="columnList01">
    id, name, age
  </sql>
  <sql id="columnList02">
    nickname
  </sql>
  <select id="selectByPrimaryKey" parameterType="Long" resultMap="EscortResultMap">
    select 
    <include refid="columnList01" />
    ,
    <include refid="columnList02" />
    from table_fei
    where id = #{id}
  </select>
```



xxxx

# 官方手册摘要

## 文件结构

### 后端结构

```shell
com.ruoyi     
├── common            // 工具类
│       └── annotation                    // 自定义注解
│       └── config                        // 全局配置
│       └── constant                      // 通用常量
│       └── core                          // 核心控制
│       └── enums                         // 通用枚举
│       └── exception                     // 通用异常
│       └── filter                        // 过滤器处理
│       └── utils                         // 通用类处理
├── framework         // 框架核心
│       └── aspectj                       // 注解实现
│       └── config                        // 系统配置
│       └── datasource                    // 数据权限
│       └── interceptor                   // 拦截器
│       └── manager                       // 异步处理
│       └── security                      // 权限控制
│       └── web                           // 前端控制
├── ruoyi-system      // 系统代码
├── ruoyi-admin       // 后台服务


├── ruoyi-generator   // 代码生成（可移除）
├── ruoyi-quartz      // 定时任务（可移除）
├── ruoyi-xxxxxx      // 其他模块
```



# 遗留问题

```xml
01) 关联查询中xml怎么写数据
02）插入自定义id
03)
```



### 底部

[前后端分离手册](https://doc.ruoyi.vip/ruoyi-vue/)
























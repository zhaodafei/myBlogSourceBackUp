---
title: springBoot -分环境打包
date: 2022-05-12
categories: 
- springBoot
tags:
- springBoot
---
springBoot -分环境打包
springBoot -分环境打包

<!-- more -->

### `application.yml`文件配置

```yaml
spring:
  profiles:
    # 动态环境选择,对应pom.xml文件中 <properties> <env>dev</env> </properties>
    active: @env@
```

###  `pom.xml` 文件配置

```xml
<profiles>
    <profile>
        <!-- 其中id代表这个环境的唯一标识，下面会用到 -->
        <id>dev</id>
        <!-- properties下我们我们自己自定义了标签env,内容分别是dev和prd,对应application.yml中 active: @env@ -->
        <properties>
            <env>dev</env>
        </properties>
        <activation>
            <!-- activeByDefault=true代表如果不指定某个固定id的profile,那么就使用这个环境 -->
            <activeByDefault>true</activeByDefault>
        </activation>
    </profile>

    <profile>
        <id>test</id>
        <properties>
            <env>test</env>
        </properties>
    </profile>

    <profile>
        <id>prod</id>
        <properties>
            <env>prod</env>
        </properties>
    </profile>
</profiles>
```

### 打包测试

```bash
#使用命令打包
mvn package # 打包

#或者使用IDEA工具打包
```

![打包](/img/java/springBoot/jar_01.png "打包")

### 启动`jar`包

```bash
#打包没有选择环境可以使用参数直接指定环境
java -jar fei-0.0.1-SNAPSHOT.jar
java -jar fei-0.0.1-SNAPSHOT.jar --spring.profiles.active=prod
java -jar fei-0.0.1-SNAPSHOT.jar --server.port=8072 --spring.profiles.active=prod

nohup java -jar java -jar fei-0.0.1-SNAPSHOT.jar > ./fei-8072.out 2>&1 &
nohup java -jar java -jar fei-0.0.1-SNAPSHOT.jar > ./fei-8072.out 2>&1 &

ps -aux | grep java
```

### 使用`Nginx`代理

```nginx
server {
    listen        80;
    #server_name  localhost demo.hexo.com;
    server_name  demo.hexo.com;
    # 配置 Vue 打包首页地址
    root   "E:/self_web/git_dev/vue/zFei_vue/dist";
    location / {
        try_files $uri $uri/ /index.html;
        index  index.html index.htm;
    }
    # 代理到 Java 的8072接口
    # 访问 http://localhost:80/api/test/detail
    # 调用 Java 接口 http://localhost:8072/api/test/detail
    location /api/ {
        proxy_pass http://127.0.0.1:8072/api/;
    }
}
```





### 底部

xxx没有了




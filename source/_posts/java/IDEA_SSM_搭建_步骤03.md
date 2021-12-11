---
title: -IDEA搭建-SSM 步骤03
date: 2015-07-04
categories: 
- SSM
tags:
- IDEA
- SSM
---
使用 `IDEA`搭建`SSM`项目[ SSM 全名: Spring+SpringMVC+MyBatis ]
环境:  IDEA,  JDK1.8, Maven3.6,Tomcat7.0
步骤分为三步:
 01: 创建maven 工程; 
 02: 创建spring工程
 03: 写个查询demo测试

<!-- more -->

## 第三步,写个查询demo测试

### 数据库`SQL`

```sql
-- 创建表
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL COMMENT '用户名',
  `password` varchar(255) DEFAULT NULL COMMENT '密码',
  `email` varchar(255) DEFAULT NULL COMMENT '邮箱',
  `mobile` varchar(255) DEFAULT NULL COMMENT '手机号',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='用户表';

-- 插入三条数据
INSERT INTO `feissm`.`user`(`id`, `username`, `password`, `email`, `mobile`) VALUES (1, 'dafei', '123456', 'dafei@qq.com', '11111111');
INSERT INTO `feissm`.`user`(`id`, `username`, `password`, `email`, `mobile`) VALUES (2, 'dafei_02', '123456', 'dafei_02@qq.com', '1111111122');
INSERT INTO `feissm`.`user`(`id`, `username`, `password`, `email`, `mobile`) VALUES (3, 'dafei_03', '123456', 'dafei_03@qq.com', '1111111133');

```

### `model` 目录下 `User.java`文件

`User.java` 文件内容

<details>
    <summary>点击查看model目录下User.java文件</summary>
    ```bash
     public class User {
        private long id;
        private String username;
        private String password;
        private String email;
        private String mobile;
        public long getId() {
            return id;
        }
        public void setId(long id) {
            this.id = id;
        }
        public String getUsername() {
            return username;
        }
        public void setUsername(String username) {
            this.username = username;
        }
        public String getPassword() {
            return password;
        }
        public void setPassword(String password) {
            this.password = password;
        }
        public String getEmail() {
            return email;
        }
        public void setEmail(String email) {
            this.email = email;
        }
        public String getMobile() {
            return mobile;
        }
        public void setMobile(String mobile) {
            this.mobile = mobile;
        }
    }
    ```
 </details>

![ssm demo](/img/java/ssm/03_demo_test/ssm_3_01.png "ssm demo")

### `dao`目录下 `UserDao.java`文件

`UserDao.java`文件内容

```java
package com.dafei.dao;

import com.dafei.model.User;

public interface UserDao {
    User selectUser(long id);
}


//****************** 强烈建议使用 下面 **********
package com.dafei.dao;

import com.dafei.model.User;
import org.apache.ibatis.annotations.Param;

public interface UserDao {
    User selectUser(@Param("id") long id);
}
```

![ssm demo](/img/java/ssm/03_demo_test/ssm_3_02.png "ssm demo")

### `resources-->mapper`目录下面 `UserMapper.xml`

`UserMapper.xml`文件内容

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<!-- 设置为UserDao接口方法提供sql语句配置 -->
<mapper namespace="com.dafei.dao.UserDao">

    <select id="selectUser" resultType="User" parameterType="long">
      SELECT * FROM user WHERE id = #{id}
    </select>

</mapper>
```

![ssm demo](/img/java/ssm/03_demo_test/ssm_3_03.png "ssm demo")

### `service`目录下面`UsrService.java`文件

`UsrService.java` 文件内容

```java
package com.dafei.service;

import com.dafei.model.User;

public interface UserService {
    public User selectUser(long userId);
}
```

![ssm demo](/img/java/ssm/03_demo_test/ssm_3_04.png "ssm demo")

### `service-->impl`目录下面`UsrServiceImpl.java`文件

`UsrServiceImpl.java`文件内容

```java
package com.dafei.service.impl;

import com.dafei.dao.UserDao;
import com.dafei.model.User;
import com.dafei.service.UserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service("userService")
public class UserServiceImpl implements UserService {
    @Resource
    private UserDao userDao;

    @Override
    public User selectUser(long userId) {
        return userDao.selectUser(userId);      
    }
}

```

![ssm demo](/img/java/ssm/03_demo_test/ssm_3_05.png "ssm demo")

### `controller`目录下面`UserController.java`

`UserController.java`文件内容

```java
package com.dafei.controller;

import com.dafei.model.User;
import com.dafei.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping("/select")
    public ModelAndView selectUser() {
        ModelAndView mv = new ModelAndView();
        User user = userService.selectUser(1);
        mv.addObject("user", user);
        mv.setViewName("user");
        return mv;
    }
}

```

![ssm demo](/img/java/ssm/03_demo_test/ssm_3_06.png "ssm demo")

### 启动项目测试

访问地址  ` localhost:8080/user/select `  查看数据

![ssm demo](/img/java/ssm/03_demo_test/ssm_3_07.png "ssm demo")

### 整个项目的目录和文件结构

<details>
  <summary>点击查看整个目录和文件结构</summary>
  ```bash
    E:\selfweb\git_dev\java\java01\simplessm\src
    └─main
        ├─java
        │  └─com
        │      └─dafei
        │          ├─controller
        │          │      UserController.java
        │          │
        │          ├─dao
        │          │      UserDao.java
        │          │
        │          ├─model
        │          │      User.java
        │          │
        │          └─service
        │              │  UserService.java
        │              │
        │              └─impl
        │                      UserServiceImpl.jav
        │
        ├─resources
        │  │  jdbc.properties
        │  │  log4j.properties
        │  │  spring-mvc.xml
        │  │  spring-mybatis.xml
        │  │
        │  └─mapper
        │          UserMapper.xml
        │
        └─webapp
            │  index.jsp
            │
            └─WEB-INF
                │  web.xml
                │
                └─jsp
                        user.jsp
                        userAll.jsp
  ```
</details>

​        

![ssm demo](/img/java/ssm/03_demo_test/ssm_3_08.png "ssm demo")

 [IDEA_SSM_搭建_步骤01](../IDEA_SSM_搭建_步骤01/ "IDEA_SSM_搭建_步骤01")

 [IDEA_SSM_搭建_步骤02](../IDEA_SSM_搭建_步骤02/ "IDEA_SSM_搭建_步骤02")


















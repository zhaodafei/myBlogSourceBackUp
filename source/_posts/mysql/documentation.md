---
title: mysql -Documentation  手册
---

###  sql

```mysql
SELECT PASSWORD('mypass');   #生成的密码值
```

### 访问控制阶段1,2

```mysql
!!! 用户名和密码为空危险 !!!
!!!如果User列值为非空，则传入连接中的用户名必须完全匹配。如果 User值为空，则它匹配任何用户名

!!!该authentication_string列可以为空白。这不是通配符，并不表示任何密码匹配。这意味着用户必须在不指定密码的情况下进行连接

## 查看当前登录用户
SELECT CURRENT_USER();
```

 [访问控制阶段1](https://dev.mysql.com/doc/refman/5.7/en/connection-access.html "访问控制阶段1")

### 添加账号,分配权限和删除账号

```mysql
创建用户授权
GRANT ALL PRIVILEGES ON *.* TO 'fei'@'%' IDENTIFIED BY '123456' WITH GRANT OPTION;   
FLUSH   PRIVILEGES;

撤销账户权限
REVOKE ALL PRIVILEGES  ON  *.*  FROM 'fei'@'%';
FLUSH   PRIVILEGES;

删除账号
DROP USER 'fei'@'%';
FLUSH   PRIVILEGES;
```

 [6.2.7添加帐户，分配权限和删除帐户](https://dev.mysql.com/doc/refman/5.7/en/creating-accounts.html "6.2.7添加帐户，分配权限和删除帐户")
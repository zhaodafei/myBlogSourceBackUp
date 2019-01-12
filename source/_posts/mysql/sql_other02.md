---
title: mysql -sql other02
---

### MySQL 的复制原理及负载均衡

#### MySQL主从复制工作原理:  

```
在主库上把数据更改记录到二进制日志
从库将主库的日志复制到自己的中继日志
从库读取中继日志中的事件,将其重放到从库数据库中
```

#### MySQL主从复制解决的问题:

```
数据分布: 随意停止或开始复制,并在不同地理位置分布数据库备份
负载均衡:降低单个服务器的压力
高可用和故障切换: 帮助应用程序避免单点失败
升级测试:可使用更高版本的MySQL作为从库
```

### SQL查询处理的安全方案

```
1) 使用预处理语句放置SQL注入
2)写入数据库的数据要进行特殊字符的转义
3)查询错误信息不要反悔给用户,将错误记录到日志

PHP端尽量使用PDO对数据库进行相关操作,PDO拥有对预处理语句很好的支持,MySQLi也有,但是可扩展性不如PDO,效率高于PDO
```

### MySQL的其他安全设置

```
1)定期做备份
2)不给用户root权限,合理分配权限
3)关闭远程访问数据库权限
4)修改root口令,不用默认口令,使用较复杂的口令
5)删除多余的用户
6)改变root用户名称
7)限制一般用户浏览其他库
8)限制用户对数据库的访问权限
```



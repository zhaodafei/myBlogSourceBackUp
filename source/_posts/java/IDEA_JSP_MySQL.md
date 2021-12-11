---
title: -IDEA -JSP 操作MySQL
date: 2015-07-04
categories: 
- IDEA
tags:
- IDEA
- JSP
- MySQL
---
IDEA 中JSP页面操作MySQL
IDEA 中JSP页面操作MySQL
IDEA 中JSP页面操作MySQL

<!-- more -->

### 新建`Java web` 工程

![JSP](/img/java/jsp/jsp_01.png "JSP")

### 目录结构

在 WEB-INF 目录下面新建`lib` 和 `classes` 文件,然后把`MySQL`的驱动包放到`lib`目录下面

![JSP](/img/java/jsp/jsp_02.png "JSP")

### 配置`Tomcat`

![JSP](/img/java/jsp/jsp_03.png "JSP")

### 配置`lib`

配置`lib`导入`MySQL`驱动包

![JSP](/img/java/jsp/jsp_04.png "JSP")

![JSP](/img/java/jsp/jsp_05.png "JSP")

### 解决代码中红色

```java
比如:
  out.print("print显示红色,解决红色");
```

![JSP](/img/java/jsp/jsp_06.png "JSP")

### `demo` 练习`index.jsp`页面内容如下

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.sql.*" %>
<html>
  <head>
    <title>MySQL数据库</title>
  </head>
  <body>

  <table border="2">
    <thead>
    <tr>
      <td>id</td>
      <td>用户名</td>
      <td>邮箱</td>
      <td>手机号</td>
      <td>密码</td>
    </tr>
    </thead>
  <%
    // mysql-connector-java-5.1.30 的连接数据库
    // Class.forName("org.gjt.mm.mysql.Driver").newInstance();
    // String url="jdbc:mysql://localhost:3306/temp_demo?characterEncoding=utf8&useSSL=false";
    // Connection conn= DriverManager.getConnection(url,"afei2","123456");
    // Statement stmt=conn.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE,ResultSet.CONCUR_UPDATABLE);

    // mysql-connector-java-8.0.18.jar 的连接数据库
    Class.forName("com.mysql.cj.jdbc.Driver");//加载驱动包
    String url="jdbc:mysql://localhost:3306/temp_demo?useSSL=true&serverTimezone=GMT%2B8";
    Connection conn = DriverManager.getConnection(url,"afei2","123456");
    Statement stmt=conn.createStatement();


    String sql="select * from user";
    ResultSet rs=stmt.executeQuery(sql);
    while(rs.next()) {
   %>

    <tr>
      <td><%=rs.getString("id")%></td>
      <td><%=rs.getString("username")%></td>
      <td><%=rs.getString("email")%></td>
      <td><%=rs.getString("mobile")%></td>
      <td><%=rs.getString("password")%></td>
    </tr>


  <% } %>
  </table>
  <%
    out.print("恭喜你,已经学会数据库操作");
    rs.close();
    stmt.close();
    conn.close();
  %>

  </body>
</html>
```

![JSP 效果图](/img/java/jsp/jsp_07.png "JSP 效果图")

### 其他

 [mysql-connector-java各版本下载地址](https://mvnrepository.com/artifact/mysql/mysql-connector-java "mysql-connector-java各版本下载地址")






























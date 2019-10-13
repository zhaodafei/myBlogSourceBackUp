---
title:  -oracle 简单使用
---
oracle 其他问题

### `Navicat` 连接  `oracle` 报错

```
connection to server failed probale oracle net admin error

Navicat 客户端的oci需要与oracle 的版本一致
```

### `Navicat` 连接 `oracle` 数据库账号错误

```
connection as SYS should be as SYSDBA or SYSOPER

不能使用sys账号,要使用system账号登录
```

###  `PL/SQL Developer` 连接`oracle`

### #`PL` 和 `oracle`在通一个系统中

安装完`PL/SQL Developer ` 直接连接oracle数据库即可

![PL oracle](/img/oracle/connect_localhost.png "PL oracle")

#### `PL` 在`windows`系统, `oracle`在`linux`系统中

 01) 需要下载 instantclient-basic-linux.zseries64-11.2.0.4.0.zip 和  instantclient-basic-windows.x64-11.2.0.4.0.zip,注意版本要和`oracle`数据库版本一致,这2个都需要,在后面配置PL/SQL 的时候会用到

![PL oracle](/img/oracle/oci_pl_sql.png "PL oracle")

02) 创建 tnsnames.ora 文件 ,向文件中添加如下内容

```shell
orcl =   
    (DESCRIPTION =      
            (ADDRESS_LIST =         
                (ADDRESS = (PROTOCOL = TCP)(HOST = 10.168.69.199 )(PORT = 1521))      
            )       
            (CONNECT_DATA =        
                (SERVICE_NAME = ehrv3 )      
            )

        )
```

![PL oracle](/img/oracle/tnsnames.png "PL oracle")

03) 解压 instantclient-basic-linux.zseries64-11.2.0.4.0.zip 和  instantclient-basic-windows.x64-11.2.0.4.0.zip 解压后名字是 instantclient_11_2 ,然后把这2个解压文件合并,有重复的文件直接覆盖替换, 我把文件 放到 C:\instantclient_11_2,然后把  tnsnames.ora 放到 C:\instantclient_11_2 下面,(网上有的说把 tnsnames.ora  放到新建的目录 C:\instantclient_11_2\network\admin 下面,其实不是必须的,只要后面配置的时候可以找到这个文件就可以)
![PL oracle](/img/oracle/oci_tnsnames_02.png "PL oracle")

03-02)  !!! 下面这2个环境变量不配置也可以 ,( 我这里没有配置这2个环境变量 )

| 变量名    | 变量                      |
| :-------- | :------------------------ |
| TNS_ADMIN | C:\instantclient_11_2     |
| NLS_LANG  | AMERICAN_AMERICA.AL32UTF8 |

04) 配置 PL/SQL Developer ,  (汉化在后面会另加说明), 启动 PL/SQL 出现登录窗口,点击取消(calcel)按钮,这嗜好会进去软件界面

```
    oracle 主目录 C:\instantclient_11_2

    OCI库  C:\instantclient_11_2\oci.dll
```

![PL oracle](/img/oracle/pl_config.png "PL oracle")

05) 重启 PL/SQl ,  输入账号密码,注意数据库的哪一行要写(192.168.1.200:1521/fei  [ IP  端口 数据库名称 ])

![PL oracle](/img/oracle/connect.png "PL oracle")

![PL oracle](/img/oracle/table.png "PL oracle")



[PL/SQL Developer - Registered Download 下载__操作oracle数据库工具](https://www.allroundautomations.com/bodyplsqldevreg.html)

[instantclient-basic-windows.x64-11.2.0.4.0.zip 下载地址](https://www.oracle.com/technetwork/cn/topics/winx64soft-101515-zhs.html)   &&  [instantclient-basic-linux.zseries64-11.2.0.4.0.zip 下载](https://www.oracle.com/technetwork/cn/topics/zlinuxsoft-087641-zhs.html) 




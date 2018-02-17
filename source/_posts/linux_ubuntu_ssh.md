---
title: linux Ubuntu ssh
---
### 安装客户端

```
sudo apt install openssh-client
```

![ssh client](/img/linux_command01_2017_1224/linux_ubuntu_ssh/ssh_client.png "ssh client")

### 安装服务端

```
sudo apt install openssh-server
```

### 配置

```
查看手册   man sshd_config
```

在编辑配置文件之前，您应该生成一个原始文件的拷贝并对其写保护，以便您可以参考原始文件并在必要时重用它。拷贝 /etc/ssh/sshd_config 文件并对其写保护可以通过在终端提示符后运行下列命令

```
sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.original
sudo chmod a-w /etc/ssh/sshd_config.original
```

![ssh sshd_config](/img/linux_command01_2017_1224/linux_ubuntu_ssh/ssh_sshd_config.png "ssh sshd_config")

- 要设置您 OpenSSH 在 TCP 2222 端口而不是缺省的 TCP 20 端口监听，可以如下使用改变 Port 语句：

  Port 2222

- 要让 sshd 允许基于公钥登录证书，可以简单添加或修改该行语句：

  PubkeyAuthentication yes

  If the line is already present, then ensure it is not commented out.

- 要使您的 OpenSSH 服务器显示 /etc/issue.net 文件的内容以作为预登录 Banner，只需简单地将下行添加或修改：

  Banner /etc/issue.net

  在 /etc/ssh/sshd_config 文件中。

在修改 /etc/ssh/sshd_config 文件之后，保存该文件并重启 sshd 服务器应用程序以使之生效。可以在终端提示符后使用下列命令：

```
sudo systemctl restart sshd.service
```

### SSH服务器命令

```
停止服务：sudo /etc/init.d/ssh stop
启动服务：sudo /etc/init.d/ssh start
重启服务：sudo /etc/init.d/ssh restart
登录： ssh 用户名@远程ip
	demo： ssh dafei@192.168.1.82
		  ssh -p 22 dafei@192.168.1.82   [指定端口登录]
断开连接：exit;
```

![ssh remote_login](/img/linux_command01_2017_1224/linux_ubuntu_ssh/ssh_remote_login.png "ssh remote_login")

如果细心，可能发现远程登录不能用root登录，解决办法： 修改 /etc/ssh/sshd_config 配置文件

```
 26 # Authentication:
 27 LoginGraceTime 120
 28 # PermitRootLogin prohibit-password    【找到这一行注释掉】
 29 PermitRootLogin yes                    【改为yes】
 30 StrictModes yes

```

![ssh remote_login_root](/img/linux_command01_2017_1224/linux_ubuntu_ssh/ssh_remote_login_root.png "ssh remote_login_root")

![ssh remote_login_root_ok](/img/linux_command01_2017_1224/linux_ubuntu_ssh/ssh_remote_login_ok.png "ssh remote_login_root_ok")

### 其他

证书登录、无密码登录这里不在写，有需要的自己网上找资料；这个也是修改 sshd_config 文件

扩展：
 [Ubuntu ssh](https://help.ubuntu.com/lts/serverguide/openssh-server.html"Ubuntu ssh")






























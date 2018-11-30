---
title: linux-DDU  -vagrant 简单使用02
---

### 添加一个 box 

```
vagrant box list
vagrant box add centos7 centos7-vagrant-180906.box
```

![vagrant add](/img/centos/vagrant/add.png "vagrant add")

### 初始化

```
vagrant init centos7
```

![vagrant init](/img/centos/vagrant/init.png)

### 启动

```
vagrant up --provider virtualbox
启动时,SSH 没有权限,下面修改配置,
```

![vagrant up](/img/centos/vagrant/up_ssh.png)

### 进入虚拟机 virtualBox  ,运行远程登录

```
vim /etc/ssh/sshd_config   #修改配置文件

PubkeyAuthentication yes  #注释取消掉

重启服务 systemct1 restart sshd.service

windows端:  ssh vagrant@127.0.0.1 -p2222
使用密码登录
windows端:  ssh vagrant@192.168.56.3  #使用指定ip登录
```

![ssh remote](/img/centos/vagrant/ssh_remote.png)

![ssh remote2](/img/centos/vagrant/ssh_remote2.png)

![ssh remote2](/img/centos/vagrant/ssh_remote3.png)



### windows 添加私钥  ssh 免密码登录,[在windows中执行]

```wiki
vagrant ssh-config   #查看实时连接信息
cd /c/Users/Administrator/.vagrant.d/
scp -P2222 vagrant@127.0.0.1:~/.ssh/id_rsa ./  #从远程复制私钥到windows

mv insecure_private_key insecure_private_key_old  #备份原来文件
mv id_rsa insecure_private_key
```

![scp](/img/centos/vagrant/scp.png)

### 设置 linux 公钥

```
cp authorized_keys authorized_keys_old
cat id_rsa.pub > authorized_keys
```

![id_rsa pub](/img/centos/vagrant/id_rsa_pub.png)

### 配置 Vagrantfile 

#### vagrantfiile

```
  config.vm.box = "centos7"
  config.vm.network "private_network", ip: "192.168.56.3"
  config.vm.network "public_network",:bridge=>'en0: Wi-Fi (AirPort)'
  config.vm.synced_folder "E:/data_web/webroot/", "/data",
  mount_options: ["dmode=775,fmode=775"]
  
  ------------------  这三种写法都可以 ---------------

  #config.vm.network "public_network",:bridge=>'en0: Wi-Fi (AirPort)'
  #config.vm.network "public_network", ip: "192.168.1.201"
  #config.vm.network "public_network", ip: "192.168.1.200", :bridge => 'en0: Wi-Fi (AirPort)'
```

#### 重启

```
vagrant reload
```

### ok

windows中 E:/data_web/webroot/  下创建文件 ,linux 中 /data ,自动同步

![文件同步](/img/centos/vagrant/w_l.png)
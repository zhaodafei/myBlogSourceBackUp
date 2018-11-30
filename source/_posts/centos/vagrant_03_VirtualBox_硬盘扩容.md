---
title: vagrant_03 --VirtualBox --硬盘扩容
---
vagrant  初始的 box 硬盘空间只有 10G,安装 mysql8 就不够用 :(  ,下面介绍给主硬盘空间扩容, 操作平台 windows7, box[ubuntu18]

### 添加环境变量

为了接下来方便操作在 windows 中添加 virtualbox 的环境变量 [ 因为下面会多次用到 vboxmanage 命令 ]

```
!!! 备份要扩容的文件, 或者全部备份
!!  vbox , vbox-prev 配置文件要备份
```

![备份源文件](/img/centos/vagrant_VirtualBox/backups.png)

###  记录要扩容的硬盘的原始信息

```
vboxmanage showhdinfo ubuntu-bionic-18.04-cloudimg.vmdk

--------------------------------------------------------
$ vboxmanage showhdinfo ubuntu-bionic-18.04-cloudimg.vmdk
UUID:           5d02ba81-6f7e-4a8e-8e1b-eadbb30d11d4
Parent UUID:    base
.....
```

![原始信息](/img/centos/vagrant_VirtualBox/showinfo.png)

### 开始扩容

```
#克隆成 vdi 文件
vboxmanage clonehd "ubuntu-bionic-18.04-cloudimg.vmdk" "new-ubuntu-bionic-18.04-cloudimg.vdi" --format vdi

#扩容为 30G
vboxmanage modifyhd "new-ubuntu-bionic-18.04-cloudimg.vdi" --resize 30720

#转化为原来的 vmdk 格式
VBoxManage clonehd "new-ubuntu-bionic-18.04-cloudimg.vdi" "new-ubuntu-bionic-18.04-cloudimg.vmdk" --format vmdk

#查看新 vmdk 信息,记录uuid
 vboxmanage showhdinfo new-ubuntu-bionic-18.04-cloudimg.vmdk

$ vboxmanage showhdinfo new-ubuntu-bionic-18.04-cloudimg.vmdk
UUID:           f6b42381-fde2-43c2-bcab-3e37731caa9a
Parent UUID:    base

--------------------------------------------------

#[ del,ren  命令只能在 cmd 或 powershell 中执行]
#删除需要扩容的 vmdk 
del  ubuntu-bionic-18.04-cloudimg.vmdk

#将扩容后的 vmdk 重命名为原来的文件名
ren new-ubuntu-bionic-18.04-cloudimg.vmdk  ubuntu-bionic-18.04-cloudimg.vmdk

--------------------------------------------------
D:\soft_position\VirtualBox_linux\ubuntu18_default_1543569229538_92064> del  ubuntu-bionic-18.04-cloudimg.vmdk
D:\soft_position\VirtualBox_linux\ubuntu18_default_1543569229538_92064> ren new-ubuntu-bionic-18.04-cloudimg.vmdk  ubuntu-bionic-18.04-cloudimg.vmdk


```

![扩容_01](/img/centos/vagrant_VirtualBox/vmdk_vdi.png)

![扩容_02](/img/centos/vagrant_VirtualBox/vmdk_vdi_02.png)

###  修改 配置文件 uuid

```
# 手动修改,图形界面修改都可以
ubuntu18_default_1543569229538_92064.vbox
ubuntu18_default_1543569229538_92064.vbox-prev
这2个文件中旧的 uuid  5d02ba81-6f7e-4a8e-8e1b-eadbb30d11d4
全部替换为新的  uuid  f6b42381-fde2-43c2-bcab-3e37731caa9a
```

![uuid 修改](/img/centos/vagrant_VirtualBox/uuid.png)

### 扩容成功

![扩容成功](/img/centos/vagrant_VirtualBox/success.png)
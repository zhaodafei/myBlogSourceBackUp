---
title: -虚拟机 -centos7 -扩容
---

### 在虚拟机`VMware`上增加磁盘空间

使用了一段时间虚拟机后发现磁盘不够用了,需要扩容。在客户端操作扩容出现`磁盘已成功扩展。您必须从客户机操作系统内部对磁盘重新进行分区和扩展文件系统。`  然后进`centos7`系统进行操作

![扩容](/img/centos/lvm/lvm_01.jpg "扩容")

### 使用 `df -h` 查看磁盘空间大小

```shell
### 挂载跟目录节点的 /dev/mapper/centos-root 只有23容量
[root@localhost ~]# df -h
Filesystem               Size  Used Avail Use% Mounted on
/dev/mapper/centos-root   23G   23G   20K 100% /
devtmpfs                  20G     0   20G   0% /dev
tmpfs                     20G  4.0K   20G   1% /dev/shm
tmpfs                     20G  8.5M   20G   1% /run
tmpfs                     20G     0   20G   0% /sys/fs/cgroup
/dev/sda1                497M  120M  378M  25% /boot
[root@localhost ~]# 

```

### 使用 `fdisk -l ` 命令查看磁盘信息

```shell
### 第一行 Disk /dev/sda: 107.4 GB 与实际 df -好现实内容不符,说明增加磁盘成功

[root@localhost ~]# fdisk -l

Disk /dev/sda: 107.4 GB, 107374182400 bytes, 209715200 sectors  ---与上面(df -h)不符,说明新增成功
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk label type: dos
Disk identifier: 0x0004148c

   Device Boot      Start         End      Blocks   Id  System
/dev/sda1   *        2048     1026047      512000   83  Linux
/dev/sda2         1026048    41943039    20458496   8e  Linux LVM
/dev/sda3        41943040    52428799     5242880   8e  Linux LVM

Disk /dev/mapper/centos-root: 24.1 GB, 24121442304 bytes, 47112192 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/mapper/centos-swap: 2147 MB, 2147483648 bytes, 4194304 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes

[root@localhost ~]#
```

![磁盘信息](/img/centos/lvm/fdisk_l.png "磁盘信息")

### 使用 `fdisk  /dev/sda` 创建新的分区

```shell
### 注意：不同操作系统的磁盘命名方式不同，有些是/dev/vda。
### 具体使用方式参考第三步中fdisk -l首行显示Disk。
### 如笔者在该系统中首行显示为Disk /dev/sda: 107.4 GB, 107374182400 bytes ，故使用命令fdisk /dev/sda）


[root@localhost ~]# fdisk /dev/sda
Welcome to fdisk (util-linux 2.23.2).

Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.


Command (m for help): m   ---------#帮助命令
Command action
   a   toggle a bootable flag
   b   edit bsd disklabel
   c   toggle the dos compatibility flag
   d   delete a partition
   g   create a new empty GPT partition table
   G   create an IRIX (SGI) partition table
   l   list known partition types
   m   print this menu
   n   add a new partition
   o   create a new empty DOS partition table
   p   print the partition table
   q   quit without saving changes
   s   create a new empty Sun disklabel
   t   change a partition's system id
   u   change display/entry units
   v   verify the partition table
   w   write table to disk and exit
   x   extra functionality (experts only)

Command (m for help): n  -----------#创建新分区
Partition type:
   p   primary (3 primary, 0 extended, 1 free)
   e   extended
Select (default e): p      -------#选择主分区
Selected partition 4
First sector (52428800-209715199, default 52428800):   ---#回车使用默认
Using default value 52428800
Last sector, +sectors or +size{K,M,G} (52428800-209715199, default 209715199): ---#回车使用默认
Using default value 209715199
Partition 4 of type Linux and of size 75 GiB is set


Command (m for help): t   --------------#修改分区类型
Partition number (1-4, default 4):   ----------#回车使用默认值
Hex code (type L to list all codes): 8e    -----#说明: 8e 是lvm磁盘类型
Changed type of partition 'Linux' to 'Linux LVM'



Command (m for help): p  ------#打印分区表

Disk /dev/sda: 107.4 GB, 107374182400 bytes, 209715200 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk label type: dos
Disk identifier: 0x0004148c

   Device Boot      Start         End      Blocks   Id  System
/dev/sda1   *        2048     1026047      512000   83  Linux
/dev/sda2         1026048    41943039    20458496   8e  Linux LVM
/dev/sda3        41943040    52428799     5242880   8e  Linux LVM
/dev/sda4        52428800   209715199    78643200   8e  Linux LVM

Command (m for help): w   -------#保存退出
The partition table has been altered!

Calling ioctl() to re-read partition table.

WARNING: Re-reading the partition table failed with error 16: Device or resource busy.
The kernel still uses the old table. The new table will be used at
the next reboot or after you run partprobe(8) or kpartx(8)  ---#这里提示重启系统
Syncing disks.

```

![扩容](/img/centos/lvm/fdisk_01.png "扩容")

![扩容](/img/centos/lvm/fdisk_02.png "扩容")

###  重启系统

```shell
[root@localhost ~]# reboot
```

### 查看磁盘情况

```shell
### 核对刚才所做的分区操作是否保存成功

[root@localhost ~]# fdisk -l

Disk /dev/sda: 107.4 GB, 107374182400 bytes, 209715200 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk label type: dos
Disk identifier: 0x0004148c

   Device Boot      Start         End      Blocks   Id  System
/dev/sda1   *        2048     1026047      512000   83  Linux
/dev/sda2         1026048    41943039    20458496   8e  Linux LVM
/dev/sda3        41943040    52428799     5242880   8e  Linux LVM
/dev/sda4        52428800   209715199    78643200   8e  Linux LVM   ----#这里多出一块,说明保存成功

Disk /dev/mapper/centos-root: 24.1 GB, 24121442304 bytes, 47112192 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/mapper/centos-swap: 2147 MB, 2147483648 bytes, 4194304 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes

[root@localhost ~]# 
```

### 使用 `pvcreate /dev/sda4` 创建物理卷

```shell
###  /dev/sda4  这里的4是上面刚才新增的分区
[root@localhost ~]# pvcreate /dev/sda4
  Physical volume "/dev/sda4" successfully created
[root@localhost ~]# 
```

![创建物理卷](/img/centos/lvm/pvcreate.png "创建物理卷")

###  使用`pvdisplay` 查看新建的物理卷大小

```shell
[root@localhost ~]# pvdisplay
  --- Physical volume ---
  PV Name               /dev/sda2
  VG Name               centos
  PV Size               19.51 GiB / not usable 3.00 MiB
  Allocatable           yes (but full)
  PE Size               4.00 MiB
  Total PE              4994
  Free PE               0
  Allocated PE          4994
  PV UUID               7q1DBZ-n5ZX-1OPX-IN9w-SdAp-qekM-BfpVbc
   
  --- Physical volume ---
  PV Name               /dev/sda3
  VG Name               centos
  PV Size               5.00 GiB / not usable 4.00 MiB
  Allocatable           yes 
  PE Size               4.00 MiB
  Total PE              1279
  Free PE               10
  Allocated PE          1269
  PV UUID               eOLd2K-aXSx-cA1M-hwJc-zqdq-7U4Y-ZE8d2R
   
  "/dev/sda4" is a new physical volume of "75.00 GiB"  ----------#可以看到新增的75G
  --- NEW Physical volume ---
  PV Name               /dev/sda4
  VG Name               
  PV Size               75.00 GiB
  Allocatable           NO
  PE Size               0   
  Total PE              0
  Free PE               0                    --------#现在这里看到的是0,在 lvextend 的时候还要重新查看
  Allocated PE          0
  PV UUID               wyG3ZO-e1a0-3OHW-6afy-u90w-7Lc8-ddMnJL
   
[root@localhost ~]# 

```

![查看物理卷](/img/centos/lvm/pvdisplay.png "查看物理卷")

### 使用 `vgdisplay` 查看 `vg` 状态

```shell
[root@localhost ~]# vgdisplay 
  --- Volume group ---
  VG Name               centos    --------------#这个名字在下面会用到
  System ID             
  Format                lvm2
  Metadata Areas        2
  Metadata Sequence No  5
  VG Access             read/write
  VG Status             resizable
  MAX LV                0
  Cur LV                2
  Open LV               2
  Max PV                0
  Cur PV                2
  Act PV                2
  VG Size               24.50 GiB
  PE Size               4.00 MiB
  Total PE              6273
  Alloc PE / Size       6263 / 24.46 GiB
  Free  PE / Size       10 / 40.00 MiB
  VG UUID               q6Omkk-sEkn-Ex9Y-gfSY-0URm-4z2E-0u9Euj
   
[root@localhost ~]#
```

![查看vg状态](/img/centos/lvm/vgdisplay.png "查看vg状态")

### 使用 `vgextend centos /dev/sda4` 将添加新的物理卷加载到 `centos` 卷组

```shell
### centos 是我的服务器vg名称,可以通过vgdisplay查看vg状态得到名称
### /dev/sda4 是我刚刚新增的物理卷
[root@localhost ~]# vgextend centos /dev/sda4
  Volume group "centos" successfully extended
[root@localhost ~]# 

###---------- 注意这里可以由于系统空间不足出现报错 ------------
###---------- 手动去删除些没有用的文件 ------------
### 报错内容
### [root@localhost ~]# vgextend centos /dev/sda4
###  Couldn't create temporary archive name.
###  Volume group "centos" metadata archive failed.
###  Internal error: Attempt to unlock unlocked VG #orphans.
### [root@localhost ~]# 
###

[root@localhost ~]# vgextend centos /dev/sda4
  Couldn't create temporary archive name.
  Volume group "centos" metadata archive failed.
  Internal error: Attempt to unlock unlocked VG #orphans.
[root@localhost ~]# 
```

![添加到卷组](/img/centos/lvm/vgextend.png "添加到卷组")

### 使用 `lvdisplay` 查看 `lv` 状态

```shell
[root@localhost ~]# lvdisplay
  --- Logical volume ---
  LV Path                /dev/centos/swap
  LV Name                swap
  VG Name                centos
  LV UUID                d39rhF-bGNs-fWPE-ItwX-FNQe-QJ4h-taAm94
  LV Write Access        read/write
  LV Creation host, time localhost, 2019-05-09 03:42:09 -0400
  LV Status              available
  # open                 2
  LV Size                2.00 GiB
  Current LE             512
  Segments               1
  Allocation             inherit
  Read ahead sectors     auto
  - currently set to     8192
  Block device           253:1
   
  --- Logical volume ---
  LV Path                /dev/centos/root
  LV Name                root
  VG Name                centos
  LV UUID                rvepaR-xSYs-hPOy-vPWA-Oiuh-A0Je-j29Gk1
  LV Write Access        read/write
  LV Creation host, time localhost, 2019-05-09 03:42:10 -0400
  LV Status              available
  # open                 1
  LV Size                22.46 GiB
  Current LE             5751
  Segments               2
  Allocation             inherit
  Read ahead sectors     auto
  - currently set to     8192
  Block device           253:0
   
[root@localhost ~]# 

```

### 使用 `lvextend` 增加容量

```shell
 ## 使用 df -h 可以看到 /dev/mapper/centos-root 的名字
 ## 使用 pvdisplay 再次查看 free 的PE数量
 [root@localhost data]# df -h
Filesystem               Size  Used Avail Use% Mounted on
/dev/mapper/centos-root   23G   23G   52K 100% /     -------# /dev/mapper/centos-root 这个名字要用
devtmpfs                  20G     0   20G   0% /dev
tmpfs                     20G  4.0K   20G   1% /dev/shm
tmpfs                     20G  8.5M   20G   1% /run
tmpfs                     20G     0   20G   0% /sys/fs/cgroup
/dev/sda1                497M  120M  378M  25% /boot
[root@localhost data]# 
[root@localhost data]# pvdisplay
  --- Physical volume ---
  PV Name               /dev/sda2
  VG Name               centos
  PV Size               19.51 GiB / not usable 3.00 MiB
  Allocatable           yes (but full)
  PE Size               4.00 MiB
  Total PE              4994
  Free PE               0
  Allocated PE          4994
  PV UUID               7q1DBZ-n5ZX-1OPX-IN9w-SdAp-qekM-BfpVbc
   
  --- Physical volume ---
  PV Name               /dev/sda3
  VG Name               centos
  PV Size               5.00 GiB / not usable 4.00 MiB
  Allocatable           yes 
  PE Size               4.00 MiB
  Total PE              1279
  Free PE               10
  Allocated PE          1269
  PV UUID               eOLd2K-aXSx-cA1M-hwJc-zqdq-7U4Y-ZE8d2R
   
  --- Physical volume ---
  PV Name               /dev/sda4
  VG Name               centos
  PV Size               75.00 GiB / not usable 4.00 MiB
  Allocatable           yes 
  PE Size               4.00 MiB
  Total PE              19199
  Free PE               19199         --------#这个大小要用
  Allocated PE          0
  PV UUID               wyG3ZO-e1a0-3OHW-6afy-u90w-7Lc8-ddMnJL
   
[root@localhost data]# 

 
###---------- 注意这里可以由于系统空间不足出现报错 ------------
###---------- 手动去删除些没有用的文件 ------------
### 报错内容
### [root@localhost ~]# lvextend -l +19199 /dev/mapper/centos-root 
###  Couldn't create temporary archive name.
###  Volume group "centos" metadata archive failed.
### [root@localhost ~]# 
###
[root@localhost ~]# lvextend -l +19199 /dev/mapper/centos-root 
Size of logical volume centos/root changed from 22.46 GiB (5751 extents) to 97.46 GiB (24950 extents).
  Logical volume root successfully resized
[root@localhost ~]#


```

![增加容量](/img/centos/lvm/lvextend_01.png "增加容量")

![增加容量](/img/centos/lvm/lvextend_02.png "增加容量")

### 查看当前分区类型(在下一步会用到)

```shell
### 我的是 xfs 类型(centos7系统)
[root@localhost ~]# df -T /dev/sda1
Filesystem     Type 1K-blocks   Used Available Use% Mounted on
/dev/sda1      xfs     508588 122080    386508  25% /boot
[root@localhost ~]#

###-----------或者使用
[root@localhost ~]# cat /etc/fstab | grep centos-root
/dev/mapper/centos-root /                       xfs     defaults        0 0
[root@localhost ~]# 
```

### 使用 `xfs_growfs` (centos7)重新调整文件系统大小(根据上一步类型使用不同命令)

```shell
### centos7中用 xfs_growfs
[root@localhost ~]# xfs_growfs /dev/mapper/centos-root
meta-data=/dev/mapper/centos-root isize=256    agcount=6, agsize=1144832 blks
         =                       sectsz=512   attr=2, projid32bit=1
         =                       crc=0        finobt=0
data     =                       bsize=4096   blocks=5889024, imaxpct=25
         =                       sunit=0      swidth=0 blks
naming   =version 2              bsize=4096   ascii-ci=0 ftype=0
log      =internal               bsize=4096   blocks=2560, version=2
         =                       sectsz=512   sunit=0 blks, lazy-count=1
realtime =none                   extsz=4096   blocks=0, rtextents=0
data blocks changed from 5889024 to 25548800
[root@localhost ~]# 

### centos6中用 resize2fs
[root@localhost ~]# resize2fs /dev/mapper/centos-root 
```

![重新调整文件系统大小](/img/centos/lvm/xfs_growfs.png "重新调整文件系统大小")

### 查看磁盘空间

```shell
[root@localhost ~]# df -h
Filesystem               Size  Used Avail Use% Mounted on
/dev/mapper/centos-root   98G   23G   75G  24% /               ----#新增成功
devtmpfs                  20G     0   20G   0% /dev
tmpfs                     20G  4.0K   20G   1% /dev/shm
tmpfs                     20G  8.5M   20G   1% /run
tmpfs                     20G     0   20G   0% /sys/fs/cgroup
/dev/sda1                497M  120M  378M  25% /boot
[root@localhost ~]#
```

![成功](/img/centos/lvm/success.png "成功")